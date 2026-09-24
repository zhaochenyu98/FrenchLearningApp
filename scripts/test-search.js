const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const context = { console };
context.window = context;
vm.createContext(context);
const scripts = Array.from(fs.readFileSync(path.join(root, "index.html"), "utf8")
  .matchAll(/<script[^>]+src="([^"]+)"/g), match => match[1]);
scripts.filter(file => file.startsWith("js/data/") || ["js/core/namespace.js", "js/core/search.js"].includes(file))
  .forEach(file => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file }));
const { search, data } = context.window.FR;
const entries = [
  { id: "etre", title: "Être · Present", category: "Verbs & Tenses", text: "je suis nous sommes", destination: { tab: "verbs" } },
  { id: "habiller", title: "s’habiller · Futur simple", category: "Verbs & Tenses", text: "nous nous habillerons", destination: { tab: "verbs" } },
  { id: "time", title: "Relative time", category: "Time", text: search.plainText(vm.runInContext("relativeTimeWords", context)), destination: { tab: "calendar" } },
  { id: "articles", title: "Partitive articles", category: "Determiners", text: search.plainText(data.searchSections["determiners:partitives"]), destination: { tab: "determiners" } }
];
const query = search.createIndex(entries);
assert.equal(query("etre").results[0].id, "etre");
assert.equal(query("  ÊTRE   present ").results[0].id, "etre");
assert.equal(query("s'habiller futur").results[0].id, "habiller");
assert.equal(query("habillerons").results[0].id, "habiller");
assert.equal(query("depuis").results[0].id, "time");
assert.equal(query("negation").results[0].id, "articles");
assert.equal(query(" ").total, 0);
assert.equal(query("zzzznomatch").total, 0);
assert.equal(query("futur nonexistent").total, 0);
assert.equal(query("Verbs", 1).results.length, 1);
assert.equal(query("Verbs", 1).total, 2);
assert.equal(search.normalize("CŒUR, aujourd’hui"), "coeur aujourdhui");
assert.equal(search.plainText({ note: "<strong>depuis</strong>", examples: ["hier"] }).trim(), "depuis hier");
console.log("Search tests passed: real data loading, accents, apostrophes, forms, concepts, ranking, limits, and empty results.");
