const fs = require("fs");
const path = require("path");

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
  combinedJavaScript.matchAll(/(?:tableId|playButtonId): "([^"]+)"/g),
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

if (!process.exitCode) {
  console.log(
    `Validation passed: ${scriptPaths.length} scripts, ${ids.length} IDs, ${tabNames.length} tabs.`
  );
}
