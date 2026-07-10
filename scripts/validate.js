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
if (scriptPaths[0] !== "js/core/namespace.js") {
  fail("js/core/namespace.js must load before all other scripts");
}
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
  const context = { FR: { data: {} }, window: {} };
  context.window.FR = context.FR;
  vm.createContext(context);
  const grammarCode = ["pronouns.js", "verbs.js", "grammar.js"]
    .map(fileName => fs.readFileSync(path.join(root, "js/data", fileName), "utf8"))
    .join("\n");
  const tenseCode = fs.readFileSync(path.join(root, "js/data/tenses.js"), "utf8");
  vm.runInContext(`${grammarCode}\nthis.__grammar = { verbStudyItems, verbStudyGroups, verbPhraseIpa };`, context);
  vm.runInContext(`${tenseCode}\nthis.__tense = { passeComposeGroups, etreAuxiliaryVerbs };`, context);
  return {
    verbStudyItems: context.__grammar.verbStudyItems,
    verbStudyGroups: context.__grammar.verbStudyGroups,
    verbPhraseIpa: context.__grammar.verbPhraseIpa,
    passeComposeGroups: context.__tense.passeComposeGroups,
    etreAuxiliaryVerbs: context.__tense.etreAuxiliaryVerbs
  };
}

function duplicates(values) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

function validateVerbContent() {
  const { verbStudyItems, verbStudyGroups, verbPhraseIpa } = loadGrammarAndTenseData();
  const duplicateKeys = duplicates(verbStudyItems.map(item => item.key));
  if (duplicateKeys.length) {
    fail(`duplicate verb keys: ${Array.from(new Set(duplicateKeys)).join(", ")}`);
  }

  const knownGroups = new Set(verbStudyGroups.map(group => group.key));
  const invalidGroups = verbStudyItems
    .filter(item => !knownGroups.has(item.group))
    .map(item => `${item.label}: ${item.group}`);
  if (invalidGroups.length) {
    fail(`verbs assigned to unknown groups: ${invalidGroups.join(", ")}`);
  }

  const expectedCorePronouns = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
  const incompleteVerbs = [];
  const missingRowContent = [];
  const missingPresentIpa = [];
  const intonationOnlyQuestions = [];

  verbStudyItems.forEach(item => {
    const rows = item.rows || [];
    const pronouns = rows.map(row => row.pronoun.replace(/[’']/g, "").toLowerCase() === "j" ? "je" : row.pronoun);
    const expectedPronouns = item.group === "impersonal"
      ? ["il"]
      : item.label === "être" || item.label === "avoir"
        ? [...expectedCorePronouns, "on"]
        : expectedCorePronouns;
    const missingPronouns = expectedPronouns.filter(pronoun => !pronouns.includes(pronoun));
    if (missingPronouns.length) {
      incompleteVerbs.push(`${item.label}: missing ${missingPronouns.join("/")}`);
    }

    rows.forEach(row => {
      if (!row.full || !row.form || !row.en) {
        missingRowContent.push(`${item.label}: ${row.pronoun}`);
      }
      if (!row.ipa && !verbPhraseIpa[row.full]) {
        missingPresentIpa.push(`${item.label}: ${row.full}`);
      }

      const examples = row.examples || [{
        fr: row.example,
        en: row.exampleEn,
        negative: row.negative,
        question: row.question
      }];
      examples.forEach((example, exampleIndex) => {
        const statement = example.statement || example.fr;
        if (!statement || !example.en || !example.negative) {
          missingRowContent.push(`${item.label}: ${row.pronoun} example ${exampleIndex + 1}`);
        }
        if (example.question) {
          const normalizedStatement = statement.replace(/[.!?]\s*$/u, "").trim().toLowerCase();
          const normalizedQuestion = example.question.replace(/[.!?]\s*$/u, "").trim().toLowerCase();
          if (normalizedStatement === normalizedQuestion) {
            intonationOnlyQuestions.push(`${item.label}: ${example.question}`);
          }
        }
      });
    });
  });

  if (incompleteVerbs.length) fail(`incomplete present-tense paradigms: ${incompleteVerbs.join("; ")}`);
  if (missingRowContent.length) fail(`verb rows missing required content: ${missingRowContent.join("; ")}`);
  if (missingPresentIpa.length) fail(`present-tense forms missing IPA: ${missingPresentIpa.join("; ")}`);
  if (intonationOnlyQuestions.length) {
    fail(`verb questions repeat a statement with only a question mark: ${intonationOnlyQuestions.join("; ")}`);
  }
}

function validateVerbTenseSync() {
  const { verbStudyItems, passeComposeGroups, etreAuxiliaryVerbs } = loadGrammarAndTenseData();
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

  const missingEtreAuxiliaryInPresent = etreAuxiliaryVerbs
    .filter(entry => !presentByVerb.has(canonicalVerbName(entry.infinitive)))
    .map(entry => entry.infinitive);
  if (missingEtreAuxiliaryInPresent.length) {
    fail(`être-auxiliary reference verbs missing from verbs tab: ${missingEtreAuxiliaryInPresent.join(", ")}`);
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

function validateNumberRules() {
  const context = {};
  vm.createContext(context);
  const numberCode = fs.readFileSync(path.join(root, "js/data/numbers.js"), "utf8");
  vm.runInContext(`${numberCode}\nthis.__numbers = { frenchNumber, frenchNumberIpa, frenchYear };`, context);
  const { frenchNumber, frenchNumberIpa, frenchYear } = context.__numbers;
  const expectations = [
    [frenchNumber(21), "vingt et un", "21 spelling"],
    [frenchNumber(80), "quatre-vingts", "80 spelling"],
    [frenchNumber(81), "quatre-vingt-un", "81 spelling"],
    [frenchNumber(200), "deux cents", "200 spelling"],
    [frenchNumber(201), "deux cent un", "201 spelling"],
    [frenchYear(1900), "mille neuf cent", "1900 year spelling"],
    [frenchNumberIpa(500), "/sɛ̃.sɑ̃/", "500 pronunciation"],
    [frenchNumberIpa(5000), "/sɛ̃.mil/", "5000 pronunciation"],
    [frenchNumberIpa(600), "/si.sɑ̃/", "600 pronunciation"],
    [frenchNumberIpa(800), "/ɥi.sɑ̃/", "800 pronunciation"]
  ];
  expectations.forEach(([actual, expected, label]) => {
    if (actual !== expected) fail(`${label}: expected ${expected}, found ${actual}`);
  });
}

function validatePronunciationContent() {
  const context = {};
  vm.createContext(context);
  const code = fs.readFileSync(path.join(root, "js/data/pronunciation.js"), "utf8");
  vm.runInContext(`${code}\nthis.__pronunciation = {
    pronunciationRules,
    consonantPronunciationRules,
    mandatoryLiaisonRules,
    optionalLiaisonRules,
    forbiddenLiaisonRules,
    hPronunciationRules,
    connectedSpeechRules,
    pronunciationContrastRules,
    pronunciationIpa
  };`, context);

  const directGroups = [
    ...context.__pronunciation.mandatoryLiaisonRules,
    ...context.__pronunciation.optionalLiaisonRules,
    ...context.__pronunciation.forbiddenLiaisonRules
  ];
  const ruleGroups = [
    ...context.__pronunciation.pronunciationRules,
    ...context.__pronunciation.consonantPronunciationRules,
    ...context.__pronunciation.hPronunciationRules,
    ...context.__pronunciation.connectedSpeechRules,
    ...context.__pronunciation.pronunciationContrastRules
  ].flatMap(group => group.rules.map(rule => ({ sound: group.sound, ...rule })));
  const invalid = [];

  directGroups.forEach(group => {
    if (!group.rule || !group.note || !group.examples || group.examples.length < 3) {
      invalid.push(group.sound || "unnamed liaison group");
      return;
    }
    if (group.examples.some(example => !example.fr || !example.ipa || !example.zh)) {
      invalid.push(`${group.sound}: incomplete example`);
    }
  });
  ruleGroups.forEach(rule => {
    if (!rule.rule || !rule.examples || rule.examples.length < 3) {
      invalid.push(`${rule.sound || "unnamed sound"}: too few examples`);
      return;
    }
    if (rule.examples.some(example => !example.fr || !(example.ipa || context.__pronunciation.pronunciationIpa[example.fr]) || !example.zh)) {
      invalid.push(`${rule.sound}: incomplete example`);
    }
  });

  if (invalid.length) {
    fail(`pronunciation rules need a rule, IPA, Chinese meaning, and at least 3 examples: ${invalid.join("; ")}`);
  }
}

try {
  validateVerbContent();
  validateVerbTenseSync();
} catch (error) {
  fail(`verb validation crashed: ${error.message}`);
}

try {
  validateNumberRules();
} catch (error) {
  fail(`number validation crashed: ${error.message}`);
}

try {
  validatePronunciationContent();
} catch (error) {
  fail(`pronunciation validation crashed: ${error.message}`);
}

if (!process.exitCode) {
  console.log(
    `Validation passed: ${scriptPaths.length} scripts, ${ids.length} IDs, ${tabNames.length} tabs.`
  );
}
