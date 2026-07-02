const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exitCode = 1;
}

const assetPaths = [
  ...Array.from(html.matchAll(/<link[^>]+href="([^"]+)"/g), match => match[1]),
  ...Array.from(html.matchAll(/<script[^>]+src="([^"]+)"/g), match => match[1])
];

assetPaths.forEach((assetPath) => {
  if (!fs.existsSync(path.join(root, assetPath))) {
    fail(`missing asset referenced by index.html: ${assetPath}`);
  }
});

const scriptPaths = Array.from(
  html.matchAll(/<script[^>]+src="([^"]+)"/g),
  match => match[1]
);
const combinedJavaScript = scriptPaths
  .map(scriptPath => fs.readFileSync(path.join(root, scriptPath), "utf8"))
  .join("\n");

try {
  new Function(combinedJavaScript);
} catch (error) {
  fail(`JavaScript does not parse: ${error.message}`);
}

const ids = Array.from(html.matchAll(/id="([^"]+)"/g), match => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) {
  fail(`duplicate IDs: ${Array.from(new Set(duplicateIds)).join(", ")}`);
}

const idSet = new Set(ids);
const referencedIds = Array.from(
  combinedJavaScript.matchAll(/getElementById\("([^"]+)"\)/g),
  match => match[1]
);
const configuredIds = Array.from(
  combinedJavaScript.matchAll(/playButtonId: "([^"]+)"/g),
  match => match[1]
);
const missingIds = Array.from(
  new Set([...referencedIds, ...configuredIds].filter(id => !idSet.has(id)))
);
if (missingIds.length) {
  fail(`JavaScript references IDs missing from index.html: ${missingIds.join(", ")}`);
}

function getDataTabs(tagPattern, className) {
  return Array.from(html.matchAll(tagPattern), match => match[0])
    .filter(tag => new RegExp(`class="[^"]*\\b${className}\\b[^"]*"`).test(tag))
    .map(tag => (tag.match(/data-tab="([^"]+)"/) || [])[1])
    .filter(Boolean);
}

const tabNames = getDataTabs(/<button\b[^>]*>/g, "tab-btn");
const sectionTabNames = getDataTabs(/<section\b[^>]*>/g, "section");
const missingSections = tabNames.filter(tabName => !sectionTabNames.includes(tabName));
const missingButtons = sectionTabNames.filter(tabName => !tabNames.includes(tabName));
const duplicateTabs = tabNames.filter((tabName, index) => tabNames.indexOf(tabName) !== index);
const duplicateSectionTabs = sectionTabNames.filter(
  (tabName, index) => sectionTabNames.indexOf(tabName) !== index
);

if (missingSections.length) {
  fail(`tabs without matching sections: ${missingSections.join(", ")}`);
}
if (missingButtons.length) {
  fail(`sections without matching tabs: ${missingButtons.join(", ")}`);
}
if (duplicateTabs.length || duplicateSectionTabs.length) {
  fail("duplicate data-tab values found");
}

if (/\sstyle="/.test(html)) {
  fail("inline style attributes found; use reusable classes in styles.css");
}

function canonicalVerbName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase()
    .replace(/^s'/, "se ")
    .replace(/\s+/g, " ")
    .trim();
}

function loadGrammarAndTenseData() {
  const context = {};
  vm.createContext(context);
  const grammarCode = fs.readFileSync(path.join(root, "js/data/grammar.js"), "utf8");
  const tenseCode = fs.readFileSync(path.join(root, "js/data/tenses.js"), "utf8");
  vm.runInContext(`${grammarCode}\nthis.__grammar = { verbStudyItems };`, context);
  vm.runInContext(`${tenseCode}\nthis.__tense = { passeComposeGroups };`, context);
  return {
    verbStudyItems: context.__grammar.verbStudyItems,
    passeComposeGroups: context.__tense.passeComposeGroups
  };
}

function validateVerbTenseSync() {
  const { verbStudyItems, passeComposeGroups } = loadGrammarAndTenseData();
  const impersonalBaseVerbs = new Map([
    ["il faut", "falloir"],
    ["il y a", "avoir"],
    ["il fait", "faire"],
    ["il est", "être"]
  ]);

  const presentEntries = verbStudyItems.map(item => {
    const base = item.syncInfinitive || impersonalBaseVerbs.get(item.label) || item.label;
    return {
      label: item.label,
      base,
      canonical: canonicalVerbName(base),
      presentGroup: item.group
    };
  });

  const tenseEntries = passeComposeGroups.flatMap(group => group.verbs.map(verb => ({
    infinitive: verb.infinitive,
    canonical: canonicalVerbName(verb.infinitive),
    tenseGroup: group.key,
    infinitiveIpa: verb.infinitiveIpa,
    pastParticipleIpa: verb.pastParticipleIpa
  })));

  const presentByVerb = new Map();
  presentEntries.forEach(entry => {
    if (!presentByVerb.has(entry.canonical)) presentByVerb.set(entry.canonical, []);
    presentByVerb.get(entry.canonical).push(entry);
  });
  const tenseByVerb = new Map(tenseEntries.map(entry => [entry.canonical, entry]));

  const missingInTense = Array.from(presentByVerb.entries())
    .filter(([canonical]) => !tenseByVerb.has(canonical))
    .map(([, entries]) => entries.map(entry => entry.label).join(" / "));
  if (missingInTense.length) {
    fail(`verbs tab entries missing from tense tab: ${missingInTense.join(", ")}`);
  }

  const missingInPresent = tenseEntries
    .filter(entry => !presentByVerb.has(entry.canonical))
    .map(entry => entry.infinitive);
  if (missingInPresent.length) {
    fail(`tense tab entries missing from verbs tab: ${missingInPresent.join(", ")}`);
  }

  const expectedTenseGroup = (entry) => {
    if (entry.presentGroup === "pronominal") return "pronominal";
    if (entry.presentGroup === "regularEr") return "er";
    if (entry.presentGroup === "regularIr") return "ir";
    if (entry.presentGroup === "regular" && entry.canonical.endsWith("ir")) return "ir";
    if (entry.presentGroup === "regular" && entry.canonical.endsWith("er")) return "er";
    return "irregular";
  };

  const wrongGroups = tenseEntries.flatMap(tenseEntry => {
    const presentMatches = presentByVerb.get(tenseEntry.canonical) || [];
    const expectedGroups = new Set(presentMatches.map(expectedTenseGroup));
    return expectedGroups.size && !expectedGroups.has(tenseEntry.tenseGroup)
      ? [`${tenseEntry.infinitive}: expected ${Array.from(expectedGroups).join(" or ")}, found ${tenseEntry.tenseGroup}`]
      : [];
  });
  if (wrongGroups.length) {
    fail(`tense tab verbs in wrong category: ${wrongGroups.join("; ")}`);
  }

  const missingIpa = tenseEntries
    .filter(entry => !entry.infinitiveIpa || !entry.pastParticipleIpa)
    .map(entry => entry.infinitive);
  if (missingIpa.length) {
    fail(`tense tab verbs missing infinitive or past participle IPA: ${missingIpa.join(", ")}`);
  }
}

try {
  validateVerbTenseSync();
} catch (error) {
  fail(`verb/tense sync validation crashed: ${error.message}`);
}

if (!process.exitCode) {
  console.log(
    `Validation passed: ${scriptPaths.length} scripts, ${ids.length} IDs, ${tabNames.length} tabs.`
  );
}
