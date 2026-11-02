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
assert.match(FR.data.subjonctifPresent.ruleCatalog["ayer-optional"].note, /que je paie/);
assert.match(FR.data.subjonctifPresent.ruleCatalog["ayer-optional"].note, /que je paye/);

// Protect the pronounced subordinator, liaison, and glides in the new mood.
for (const [verbId, person, expected] of [
  ["avoirVerb", "je", "/kə ʒɛ/"],
  ["avoirVerb", "nous", "/kə nuz‿ɛjɔ̃/"],
  ["aller", "je", "/kə ʒaj/"],
  ["accueillir", "nous", "/kə nuz‿akœjjɔ̃/"],
  ["accueillir", "vous", "/kə vuz‿akœjje/"],
  ["rire", "nous", "/kə nu ʁijjɔ̃/"],
  ["rire", "vous", "/kə vu ʁijje/"],
  ["venir", "je", "/kə ʒə vjɛn/"],
  ["venir", "nous", "/kə nu vənjɔ̃/"],
  ["pleuvoir", "il", "/kil plœv/"],
  ["sAgir", "il", "/kil saʒis/"],
  ["sHabiller", "nous", "/kə nu nuz‿abijɔ̃/"],
  ["seLever", "nous", "/kə nu nu ləvjɔ̃/"],
  ["jouer", "nous", "/kə nu ʒujɔ̃/"],
  ["seMarier", "nous", "/kə nu nu maʁijɔ̃/"],
  ["voir", "vous", "/kə vu vwaje/"]
]) {
  const row = catalog.getLesson(verbId, "subjonctif-present").forms.find(form => form.person === person);
  assert.equal(row.ipa.replace(/\./gu, ""), expected, `${verbId}: subjunctive ${person} pronunciation`);
}
// Authored contrasts protect the nous stem, the three exceptions, invariant
// endings, reflexive elision, and liaison after en (rather than subject liaison).
for (const [verbId, person, expected, ipa] of [
  ["parler", "invariable", "en parlant", "/ɑ̃ paʁlɑ̃/"],
  ["finir", "invariable", "en finissant", "/ɑ̃ finisɑ̃/"],
  ["prendre", "invariable", "en prenant", "/ɑ̃ pʁənɑ̃/"],
  ["etreVerb", "invariable", "en étant", "/ɑ̃ n‿etɑ̃/"],
  ["avoirVerb", "invariable", "en ayant", "/ɑ̃ n‿ɛjɑ̃/"],
  ["savoir", "invariable", "en sachant", "/ɑ̃ saʃɑ̃/"],
  ["faire", "invariable", "en faisant", "/ɑ̃ fəzɑ̃/"],
  ["aller", "invariable", "en allant", "/ɑ̃ n‿alɑ̃/"],
  ["manger", "invariable", "en mangeant", "/ɑ̃ mɑ̃ʒɑ̃/"],
  ["commencer", "invariable", "en commençant", "/ɑ̃ kɔmɑ̃sɑ̃/"],
  ["bouger", "invariable", "en bougeant", "/ɑ̃ buʒɑ̃/"],
  ["payer", "invariable", "en payant", "/ɑ̃ pɛjɑ̃/"],
  ["seLever", "je", "en me levant", "/ɑ̃ mə ləvɑ̃/"],
  ["seLever", "nous", "en nous levant", "/ɑ̃ nu ləvɑ̃/"],
  ["sHabiller", "je", "en m’habillant", "/ɑ̃ mabijɑ̃/"],
  ["sHabiller", "il", "en s’habillant", "/ɑ̃ sabijɑ̃/"],
  ["sHabiller", "nous", "en nous habillant", "/ɑ̃ nuz‿abijɑ̃/"],
  ["sHabiller", "vous", "en vous habillant", "/ɑ̃ vuz‿abijɑ̃/"],
  ["sEnnuyer", "tu", "en t’ennuyant", "/ɑ̃ tɑ̃nɥijɑ̃/"],
  ["seSouvenir", "elles", "en se souvenant", "/ɑ̃ sə suvənɑ̃/"]
]) {
  const row = catalog.getLesson(verbId, "gerondif").forms.find(form => form.person === person);
  assert.equal(row.fr, expected, `${verbId}: gérondif ${person} spelling`);
  assert.equal(row.ipa.replace(/\./gu, ""), ipa, `${verbId}: gérondif ${person} pronunciation`);
}
assert.ok(FR.data.gerondif.getItem("sAimer").examples.statement.fr.includes("en s’aimant"));
assert.ok(FR.data.gerondif.getItem("sAppeler").examples.statement.fr.includes("en s’appelant"));
assert.ok(FR.data.gerondif.getItem("sEnvoler").examples.statement.fr.includes("en s’envolant"));
assert.ok(FR.data.gerondif.getItem("seVendre").examples.statement.fr.includes("en se vendant"));
console.log("Linguistic fixtures passed: conjugation, spelling, article-sensitive negation, agreement contrasts, imperative pronouns, gérondif, liaison, and accepted variants.");
