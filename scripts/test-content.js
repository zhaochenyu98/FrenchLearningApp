const assert = require("node:assert/strict");
const vm = require("node:vm");
const { dataScripts, loadData } = require("./load-data");
const { FR } = loadData();
const catalog = FR.content.catalog;
assert.equal(catalog.list("verb").length, 119);
assert.equal(catalog.list("tense").length, 6);
assert.equal(catalog.getLesson("ilYA", "passe-compose").verbId, "ilYA");
assert.equal(FR.data.tenses.getByVerbId(FR.data.verbs.getById("ilYA").pastVerbId).verbId, "avoirVerb");
assert.equal(catalog.getLesson("sHabiller", "imparfait").forms.length, 8);
assert.equal(catalog.getLesson("falloir", "imperative"), null);
assert.equal(catalog.getLesson("payer", "futur-simple").editorial.reviewStatus, "unreviewed");
const snapshot = model => model.list("lesson").map(lesson => [lesson.id,
  lesson.forms.map(form => form.id).sort(), lesson.examples.map(example => example.id).sort()
]).sort(([a], [b]) => a.localeCompare(b));
const renamed = loadData({ beforeScript(file, context) {
  if (file === "js/data/verb-registry.js") vm.runInContext(`
    verbStudyItems.reverse();
    verbStudyItems.forEach(verb => {
      verb.label += " (new display label)";
      verb.rows.forEach(row => { if (row.examples) row.examples.reverse(); });
    });
  `, context);
} });
assert.equal(JSON.stringify(snapshot(renamed.FR.content.catalog)), JSON.stringify(snapshot(catalog)), "IDs survive labels and ordering changes");
assert.equal(renamed.FR.data.futurSimple.getItem("parler").rows[0].form, "parlerai");
assert.equal(renamed.FR.data.tenses.getByVerbId("etreVerb").infinitive, "être");

// Future and conditional must work without the imperfect, past, or each other.
const base = dataScripts.filter(file => ["js/core/namespace.js", "js/data/pronouns.js", "js/data/verbs.js",
  "js/data/verb-registry.js", "js/data/verb-usage.js", "js/data/simple-tense-morphology.js"].includes(file));
for (const [file, key] of [["conditionnel-present", "conditionnelPresent"], ["futur-simple", "futurSimple"]]) {
  const independent = loadData({ scripts: [...base, `js/data/${file}.js`] }).FR.data;
  assert.equal(independent[key].items.length, FR.data.verbs.items.length);
  assert.equal(independent[key].errors.length, 0);
  assert.equal(JSON.stringify(independent[key].items), JSON.stringify(FR.data[key].items));
}

const sandbox = FR.content.createCatalog();
const verb = catalog.get("verb:parler");
sandbox.register(verb);
assert.throws(() => sandbox.register(verb), /Duplicate content ID/);
assert.throws(() => sandbox.register(catalog.getLesson("parler", "present")), /Unknown tense/);
sandbox.register(catalog.get("tense:present"));
assert.throws(() => sandbox.register(catalog.getLesson("parler", "present")), /Unknown objective/);
sandbox.register(catalog.get("objective:present"));
const lesson = catalog.getLesson("parler", "present");
assert.throws(() => sandbox.register({ ...lesson, forms: [lesson.forms[0], lesson.forms[0]] }), /duplicate forms ID/);
assert.throws(() => sandbox.register({ ...lesson, editorial: { register: "wrong" } }), /Invalid register/);
assert.throws(() => sandbox.register({ ...lesson, editorial: { reviewStatus: "reviewed" } }), /needs a source/);
assert.throws(() => sandbox.register({ ...lesson, examples: [{ ...lesson.examples[0], id: "unstable" }] }), /Invalid or duplicate/);
sandbox.register(lesson);
assert.ok(Object.isFrozen(sandbox.getLesson("parler", "present").forms[0]));
console.log(`Content tests passed: ${catalog.list("verb").length} verbs, ${catalog.list("lesson").length} lessons, stable IDs, independent tense modules, and schema validation.`);
