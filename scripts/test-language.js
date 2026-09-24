const assert = require("node:assert/strict");
const cases = require("../tests/fixtures/language-cases.json");
const { loadData } = require("./load-data");
const { FR } = loadData();
const catalog = FR.content.catalog;

for (const fixture of cases.forms) {
  const row = catalog.getLesson(fixture.verbId, fixture.tenseId).forms.find(form => form.person === fixture.person);
  assert.equal(row.fr, fixture.fr, `${fixture.verbId}: ${fixture.reason}`);
}
for (const fixture of cases.negativeComplements) {
  const sentence = catalog.getLesson(fixture.verbId, fixture.tenseId).examples.find(example => example.kind === "negative").fr;
  assert.ok(sentence.includes(fixture.contains), `${fixture.reason} Got: ${sentence}`);
  assert.ok(!sentence.includes(fixture.excludes), `${fixture.reason} Got: ${sentence}`);
}
for (const fixture of cases.agreementContrasts) {
  const contrast = FR.data.pronominalVerbs.agreementContrasts.find(item => item.id === fixture.id);
  assert.ok(contrast, fixture.id);
  assert.equal(JSON.stringify(contrast.forms.map(form => form.fr)), JSON.stringify(fixture.forms), fixture.reason);
}
for (const fixture of cases.imperativePronouns) {
  const example = FR.data.objectPronouns.placement.affirmativeImperative.examples.find(item => item.label === fixture.label);
  assert.equal(example.fr, fixture.fr, fixture.label);
}

// Test a pronunciation contrast rather than locking every accent to one full IPA.
for (const tense of ["imparfait", "futur-simple", "conditionnel-present"]) {
  for (const [person, prefix] of [["nous", "/nu nuz‿"], ["vous", "/vu vuz‿"]]) {
    const row = catalog.getLesson("sHabiller", tense).forms.find(form => form.person === person);
    assert.ok(row.ipa.replace(/\./g, "").startsWith(prefix), `${tense} ${person}: liaison before mute h`);
  }
  const consonant = catalog.getLesson("seLever", tense).forms.find(form => form.person === "nous");
  assert.ok(consonant.ipa.startsWith("/nu nu "), `${tense}: no liaison before a consonant`);
}

// Keep both accepted -ayer spellings documented, without forcing a single choice.
assert.match(FR.data.futurSimple.ruleCatalog["ayer-optional"].note, /j’essaierai/);
assert.match(FR.data.futurSimple.ruleCatalog["ayer-optional"].note, /j’essayerai/);
assert.match(FR.data.conditionnelPresent.ruleCatalog["ayer-optional"].note, /j’essaierais/);
assert.match(FR.data.conditionnelPresent.ruleCatalog["ayer-optional"].note, /j’essayerais/i);
console.log("Linguistic fixtures passed: conjugation, spelling, article-sensitive negation, agreement contrasts, imperative pronouns, liaison, and accepted variants.");
