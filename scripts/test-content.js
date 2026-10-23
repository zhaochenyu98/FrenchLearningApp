const assert = require("node:assert/strict");
const vm = require("node:vm");
const { dataScripts, loadData } = require("./load-data");
const { FR } = loadData();
const catalog = FR.content.catalog;
assert.equal(catalog.list("verb").length, 149);
assert.equal(catalog.list("tense").length, 7);
assert.equal(catalog.getLesson("ilYA", "passe-compose").verbId, "ilYA");
assert.equal(FR.data.tenses.getByVerbId(FR.data.verbs.getById("ilYA").pastVerbId).verbId, "avoirVerb");
assert.equal(catalog.getLesson("sHabiller", "imparfait").forms.length, 8);
assert.equal(catalog.getLesson("falloir", "imperative"), null);
assert.equal(catalog.getLesson("payer", "futur-simple").editorial.reviewStatus, "unreviewed");
const subjunctive = FR.data.subjonctifPresent;
assert.equal(subjunctive.errors.length, 0);
assert.equal(subjunctive.items.length, FR.data.verbs.items.length);
FR.data.verbs.items.forEach(verb => {
  const item = subjunctive.getItem(verb.id);
  const lesson = catalog.getLesson(verb.id, "subjonctif-present");
  assert.ok(item && lesson, `${verb.id}: subjunctive is available in the data and catalog`);
  assert.deepEqual(Array.from(item.rows, row => row.pronoun), Array.from(verb.rows, row =>
    row.pronoun.replace(/^j[’']$/u, "je")), `${verb.id}: preserve natural subjects, especially impersonal restrictions`);
  item.rows.forEach(row => {
    assert.match(row.full, /^(?:que |qu’)/u, `${verb.id}: include the subordinator`);
    assert.ok(row.form && row.full.endsWith(row.form), `${verb.id}: complete form`);
    assert.equal(row.speech, row.full, `${verb.id}: audio matches the displayed form`);
    assert.match(row.ipa, /^\/k[^/]+\/$/u, `${verb.id}: pronounce que/qu’ too`);
  });
  assert.equal(lesson.examples.length, 3, `${verb.id}: three translated sentence types`);
  lesson.examples.forEach(example => {
    assert.ok(example.fr && example.en, `${verb.id}: French and English sentence practice`);
    assert.ok(item.rows.some(row => new RegExp(`(?:^|[ ’])${row.form}(?:[ .?,]|$)`, "u").test(example.fr)),
      `${verb.id}: the sentence practices a taught subjunctive form`);
  });
  assert.match(item.examples.question.fr, /\?$/u);
  assert.notEqual(item.examples.statement.fr.replace(/[.?]/gu, ""), item.examples.question.fr.replace(/[.?]/gu, ""));
  const pronominal = FR.data.pronominalVerbs.getById(verb.id);
  if (pronominal) {
    assert.equal(pronominal.paradigms.subjonctifPresent, item.rows, `${verb.id}: the card reuses the shared forms`);
    assert.equal(pronominal.examples.subjonctifPresent, item.examples, `${verb.id}: the card reuses the shared examples`);
  }
});
const prepositions = FR.data.verbPrepositions;
const auditedIds = [...Object.keys(prepositions.byVerb), ...prepositions.withoutUsage];
assert.equal(new Set(auditedIds).size, auditedIds.length, "Each verb has one preposition audit classification");
assert.deepEqual(auditedIds.sort(), Array.from(catalog.list("verb"), verb => verb.verbId).sort(), "The preposition audit covers every catalog verb");
Object.entries(prepositions.byVerb).forEach(([verbId, usages]) => {
  assert.ok(usages.length, `${verbId}: a usage classification needs examples`);
  usages.forEach(usage => {
    ["id", "pattern", "meaning", "fr", "en"].forEach(field => assert.ok(usage[field]?.trim(), `${verbId}: ${field}`));
    const example = catalog.getLesson(verbId, "present").examples.find(example =>
      example.id === `lesson:${verbId}:present:examples:preposition:${usage.id}:statement`);
    assert.equal(example?.fr, usage.fr, `${verbId}: supplemental examples reach the catalog, including pronominal verbs`);
  });
});
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
  if (file === "js/data/content-catalog.js") vm.runInContext(`
    const originalPrepositions = FR.data.verbPrepositions;
    FR.data.verbPrepositions = {
      ...originalPrepositions,
      getByVerbId(id) { return [...originalPrepositions.getByVerbId(id)].reverse(); }
    };
  `, context);
} });
assert.equal(JSON.stringify(snapshot(renamed.FR.content.catalog)), JSON.stringify(snapshot(catalog)), "IDs survive labels and ordering changes");
assert.equal(renamed.FR.data.futurSimple.getItem("parler").rows[0].form, "parlerai");
assert.equal(renamed.FR.data.tenses.getByVerbId("etreVerb").infinitive, "être");

// These modules must work without the imperfect, past, or each other.
const base = dataScripts.filter(file => ["js/core/namespace.js", "js/data/pronouns.js", "js/data/verbs.js",
  "js/data/verb-registry.js", "js/data/verb-usage.js", "js/data/simple-tense-morphology.js"].includes(file));
for (const [file, key] of [["conditionnel-present", "conditionnelPresent"], ["futur-simple", "futurSimple"], ["subjonctif-present", "subjonctifPresent"]]) {
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
