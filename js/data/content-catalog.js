(function registerLearningContent(global) {
  "use strict";
  const { data, content } = global.FR;
  const catalog = content.catalog;
  const tenseDefinitions = [
    ["present", "Present", "Describe current actions and states."],
    ["passe-compose", "Passé composé", "Describe completed past events and choose the appropriate auxiliary and agreement."],
    ["imparfait", "Imparfait", "Describe past habits, background, and ongoing situations."],
    ["futur-simple", "Futur simple", "Express future events using the appropriate stem and ending."],
    ["conditionnel-present", "Conditionnel présent", "Express hypothetical outcomes and polite requests."],
    ["imperative", "Imperative", "Give instructions with affirmative and negative imperatives."]
  ];
  data.verbs.items.forEach(verb => catalog.register({
    id: `verb:${verb.id}`, kind: "verb", verbId: verb.id, title: verb.label,
    infinitive: verb.infinitive, ipa: verb.infinitiveIpa, groupId: verb.group,
    pastVerbId: verb.pastVerbId
  }));
  tenseDefinitions.forEach(([tenseId, title, objective]) => {
    catalog.register({ id: `tense:${tenseId}`, kind: "tense", tenseId, title });
    catalog.register({ id: `objective:${tenseId}`, kind: "objective", title: objective });
  });

  function personId(row) {
    const person = row.pronoun || row.person;
    return person === "j’" || person === "j'" ? "je" : person;
  }

  function sentenceSet(prefix, sentences) {
    return Object.entries(sentences).filter(([, sentence]) => sentence && sentence.fr).map(([kind, sentence]) => ({
      id: `${prefix}:${kind}`, kind, fr: sentence.fr, en: sentence.en || ""
    }));
  }

  function presentExamples(rows, lessonId) {
    return rows.flatMap(row => {
      const examples = row.examples || [{
        id: "default", fr: row.example, en: row.exampleEn,
        negative: row.negative, negativeEn: row.negativeEn, question: row.question
      }];
      return examples.flatMap(example => {
        if (!example.id) throw new Error(`${lessonId}: authored examples need stable IDs.`);
        return sentenceSet(`${lessonId}:examples:${personId(row)}:${example.id}`, {
          statement: { fr: example.fr, en: example.en },
          negative: { fr: example.negative, en: example.negativeEn },
          question: { fr: example.question, en: example.questionEn }
        });
      });
    });
  }

  function registerLesson(verb, tenseId, rows, sentences) {
    const id = `lesson:${verb.id}:${tenseId}`;
    return catalog.register({
      id, kind: "lesson", verbId: verb.id, tenseId,
      title: `${verb.label} · ${catalog.get(`tense:${tenseId}`).title}`,
      objectiveIds: [`objective:${tenseId}`],
      forms: rows.map(row => ({
        id: `${id}:forms:${personId(row)}`, person: personId(row),
        form: row.form, fr: row.full || row.form,
        ipa: row.ipa || verbPhraseIpa[row.full], en: row.en || ""
      })),
      examples: sentences ? sentenceSet(`${id}:examples`, sentences) : presentExamples(rows, id)
    });
  }

  const pronominalById = new Map(data.pronominalVerbs.items.map(item => [item.id, item]));
  data.verbs.items.forEach(verb => {
    const pronominal = pronominalById.get(verb.id);
    registerLesson(verb, "present", pronominal?.paradigms.present || verb.rows, pronominal?.examples.present);
    const past = data.tenses.getByVerbId(verb.pastVerbId);
    if (!past) throw new Error(`Missing passé composé for ${verb.id}.`);
    registerLesson(verb, "passe-compose", pronominal?.paradigms.passeCompose || [{
      person: "participle", form: past.pastParticiple, ipa: past.pastParticipleIpa
    }], pronominal?.examples.passeCompose || { statement: past.statement, negative: past.negative, question: past.question });
    const imperfect = data.imparfait.getItem(verb.id);
    registerLesson(verb, "imparfait", pronominal?.paradigms.imperfect || imperfect.rows, pronominal?.examples.imperfect || imperfect.examples);
    [["futur-simple", data.futurSimple], ["conditionnel-present", data.conditionnelPresent], ["imperative", data.imperative]]
      .forEach(([tenseId, tense]) => {
        const item = tense.getItem(verb.id);
        if (item) registerLesson(verb, tenseId, item.rows, item.examples);
        else if (tenseId !== "imperative") throw new Error(`Missing ${tenseId} for ${verb.id}.`);
      });
  });
})(window);
