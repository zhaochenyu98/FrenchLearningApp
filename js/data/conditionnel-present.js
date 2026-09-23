(function initializeConditionnelPresentData(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.data = FR.data || {};
  const endings = Object.freeze({ je: "ais", tu: "ais", il: "ait", elle: "ait", on: "ait", ça: "ait", nous: "ions", vous: "iez", ils: "aient", elles: "aient" });
  const endingIpa = Object.freeze({ je: "ɛ", tu: "ɛ", il: "ɛ", elle: "ɛ", on: "ɛ", ça: "ɛ", nous: "jɔ̃", vous: "je", ils: "ɛ", elles: "ɛ" });
  const ruleCatalog = Object.freeze(Object.fromEntries([
    ["formation", "Future stem + imparfait endings", "Use the same stem as the futur simple, then add -ais, -ais, -ait, -ions, -iez, -aient: parler → je parlerais; finir → nous finirions; attendre → vous attendriez."],
    ["irregular-stem", "Keep the irregular future stem", "The same stems work in both tenses: ser-, aur-, ir-, fer-, viendr-, tiendr-, devr-, pourr-, voudr-, saur-, verr-, enverr-, mourr-, faudr-, pleuvr-. For example: je serais, j’aurais, je pourrais."],
    ["e-to-grave", "Keep è throughout the conditional", "Use achèter-, lèver-, and promèner- with every ending: j’achèterais, nous nous lèverions."],
    ["double-consonant", "Keep the doubled l", "Appeller- and rappeller- keep ll in every person: je m’appellerais, nous nous rappellerions."],
    ["ayer-optional", "Two accepted -ayer spellings", "This app uses essaier- and paier-: j’essaierais, je paierais. J’essayerais and je payerais are also accepted."],
    ["y-to-i", "-uyer changes y to i", "S’ennuyer uses ennuier- throughout: je m’ennuierais, nous nous ennuierions."],
    ["preferer-spelling", "Préférer: two accepted spellings", "This app uses traditional préférer-: je préférerais. Rectified préfèrer- is also accepted: je préfèrerais."],
    ["inquieter-spelling", "S’inquiéter: two accepted spellings", "This app uses traditional inquiéter-: je m’inquiéterais. Rectified inquièter- is also accepted: je m’inquièterais."],
    ["pronominal-order", "Keep the reflexive pronoun", "Place it before the conditional verb: je me laverais, nous nous verrions. In a negative: je ne me laverais pas. In inversion: nous verrions-nous ?"],
    ["impersonal-only", "Keep fixed impersonal subjects", "Use il faudrait, il y aurait, il ferait, il serait, and il pleuvrait. The ça fait expression becomes ça ferait."],
    ["conditional-pronunciation", "Listen for /ɛ/, /jɔ̃/, and /je/", "-ais, -ait, and -aient share /ɛ/; -ions has /jɔ̃/; -iez has /je/. Final written s and t are silent. The app distinguishes future -ai /e/ from conditional -ais /ɛ/; some accents merge these sounds."]
  ].map(([id, title, note]) => [id, Object.freeze({ id, title, note })])));

  function examples(statement, negative, question) {
    return Object.freeze(Object.fromEntries([statement, negative, question].map(([fr, en], index) => [
      ["statement", "negative", "question"][index], Object.freeze({ fr, en })
    ])));
  }

  const customExamples = Object.freeze({
    etreVerb: examples(
      ["Si nous avions le temps, nous serions à Lyon.", "If we had time, we would be in Lyon."],
      ["Dans ce cas, nous ne serions pas à Lyon.", "In that case, we would not be in Lyon."],
      ["Serions-nous à Lyon à temps ?", "Would we be in Lyon on time?"]
    ),
    avoirVerb: examples(
      ["Avec moins de travail, nous aurions plus de temps.", "With less work, we would have more time."],
      ["Dans ce cas, nous n’aurions pas assez de temps.", "In that case, we would not have enough time."],
      ["Aurions-nous assez de temps ?", "Would we have enough time?"]
    ),
    vouloir: examples(
      ["Je voudrais un café, s’il vous plaît.", "I would like a coffee, please."],
      ["Je ne voudrais pas vous déranger.", "I would not want to bother you."],
      ["Voudriez-vous un café ?", "Would you like a coffee?"]
    ),
    pouvoir: examples(
      ["Avec ton aide, nous pourrions finir aujourd’hui.", "With your help, we could finish today."],
      ["Sans ton aide, nous ne pourrions pas finir aujourd’hui.", "Without your help, we could not finish today."],
      ["Pourriez-vous m’aider ?", "Could you help me?"]
    ),
    devoir: examples(
      ["Tu devrais te reposer.", "You should rest."],
      ["Tu ne devrais pas travailler si tard.", "You should not work so late."],
      ["Devrions-nous partir maintenant ?", "Should we leave now?"]
    ),
    couter: examples(
      ["Avec cette réduction, le billet coûterait vingt euros.", "With this discount, the ticket would cost twenty euros."],
      ["Le billet ne coûterait pas trente euros.", "The ticket would not cost thirty euros."],
      ["Combien coûterait le billet ?", "How much would the ticket cost?"]
    ),
    naitre: examples(
      ["Elle pensait que le bébé naîtrait en septembre.", "She thought the baby would be born in September."],
      ["Elle pensait que le bébé ne naîtrait pas avant septembre.", "She thought the baby would not be born before September."],
      ["Le bébé naîtrait-il en septembre ?", "Would the baby be born in September?"]
    ),
    mourir: examples(
      ["Sans eau, cette plante mourrait.", "Without water, this plant would die."],
      ["Avec assez d’eau, cette plante ne mourrait pas.", "With enough water, this plant would not die."],
      ["Cette plante mourrait-elle sans eau ?", "Would this plant die without water?"]
    ),
    sAgir: examples(
      ["Dans ce cas, il s’agirait d’une erreur.", "In that case, it would be an error."],
      ["Dans ce cas, il ne s’agirait pas d’une erreur.", "In that case, it would not be an error."],
      ["S’agirait-il d’une erreur ?", "Could it be an error?"]
    ),
    falloir: examples(
      ["Il faudrait réserver une table.", "It would be necessary to reserve a table."],
      ["Il ne faudrait pas arriver en retard.", "We should not arrive late."],
      ["Faudrait-il réserver une table ?", "Would it be necessary to reserve a table?"]
    ),
    ilYA: examples(
      ["Avec plus d’inscrits, il y aurait deux groupes.", "With more participants, there would be two groups."],
      ["Sans réservation, il n’y aurait pas de place.", "Without a reservation, there would be no room."],
      ["Y aurait-il assez de place ?", "Would there be enough room?"]
    ),
    impersonalFaire: examples(
      ["Sans ce vent, il ferait moins froid.", "Without this wind, it would be less cold."],
      ["Sans ce vent, il ne ferait pas si froid.", "Without this wind, it would not be so cold."],
      ["Ça ferait combien au total ?", "How much would that be in total?"]
    ),
    impersonalEtre: examples(
      ["Avec une heure de plus, il serait neuf heures.", "With one more hour, it would be nine o’clock."],
      ["Il ne serait pas encore neuf heures.", "It would not be nine o’clock yet."],
      ["Serait-il déjà neuf heures ?", "Would it already be nine o’clock?"]
    ),
    pleuvoir: examples(
      ["Selon les prévisions, il pleuvrait demain.", "According to the forecast, it would rain tomorrow."],
      ["Selon les prévisions, il ne pleuvrait pas demain.", "According to the forecast, it would not rain tomorrow."],
      ["Pleuvrait-il aussi sur la côte ?", "Would it also rain on the coast?"]
    ),
    sAppeler: examples(
      ["Si nous avions une fille, elle s’appellerait Léa.", "If we had a daughter, she would be called Léa."],
      ["Elle ne s’appellerait pas Emma.", "She would not be called Emma."],
      ["Comment s’appellerait-elle ?", "What would her name be?"]
    ),
    sePasser: examples(
      ["Avec ton aide, la réunion se passerait bien.", "With your help, the meeting would go well."],
      ["La réunion ne se passerait pas en ligne.", "The meeting would not take place online."],
      ["Comment se passerait la réunion ?", "How would the meeting go?"]
    ),
    seVendre: examples(
      ["À ce prix, ces billets se vendraient rapidement.", "At this price, these tickets would sell quickly."],
      ["Ces billets ne se vendraient pas en ligne.", "These tickets would not be sold online."],
      ["Se vendraient-ils rapidement ?", "Would they sell quickly?"]
    ),
    sEnvoler: examples(
      ["Sans cette cage, les oiseaux s’envoleraient.", "Without this cage, the birds would fly away."],
      ["Les oiseaux ne s’envoleraient pas sous la pluie.", "The birds would not fly away in the rain."],
      ["Quand les oiseaux s’envoleraient-ils ?", "When would the birds fly away?"]
    )
  });

  function createExamples(source, rows, index) {
    if (customExamples[source.key]) return customExamples[source.key];
    const pronominal = source.group === "pronominal";
    const usage = pronominal ? FR.data.futurSimple.pronominalUsage[source.key] : FR.data.imparfait.exampleUsage[source.key];
    const row = rows.find(entry => entry.pronoun === "nous");
    if (!usage || !row) throw new Error(`${source.label} is missing conditional example usage.`);
    const [complement, englishPhrase] = usage;
    const negativeComplement = complement
      .replace(/^du\s+|^de la\s+|^des\s+/iu, "de ")
      .replace(/^de l[’']/iu, "d’")
      .replace(/^(?:un|une)\s+([aeiouyhàâäéèêëîïôöùûüœ])/iu, "d’$1")
      .replace(/^(?:un|une)\s+/iu, "de ");
    const negativeCore = pronominal ? `nous ne nous ${row.form} pas` : `nous ${/^[aeiouyhàâäéèêëîïôöùûüœ]/iu.test(row.form) ? "n’" : "ne "}${row.form} pas`;
    const questionCore = index % 2 === 0
      ? pronominal ? `Nous ${row.form}-nous` : `${row.form[0].toLocaleUpperCase("fr")}${row.form.slice(1)}-nous`
      : `Est-ce que ${row.full}`;
    return examples(
      [`Dans ce cas, ${row.full} ${complement}.`, `In that case, we would ${englishPhrase}.`],
      [`Dans ce cas, ${negativeCore} ${negativeComplement}.`, `In that case, we would not ${englishPhrase}.`],
      [`${questionCore} ${complement} ?`, `Would we ${englishPhrase}?`]
    );
  }

  const items = [];
  const errors = [];
  const future = FR.data.futurSimple;
  const registry = FR.data.verbs;
  (registry && registry.items || []).forEach((source, index) => {
    try {
      const futureItem = future && future.getItem(source.key);
      if (!futureItem) throw new Error(`${source.label} is missing its future stem.`);
      const rows = future.deriveRows(source, { stem: futureItem.stem, ipa: futureItem.stemIpa }, endings, endingIpa);
      const ruleIds = ["formation", ...futureItem.specialRules.map(rule => rule.id)];
      items.push(Object.freeze({
        key: source.key, group: source.group, label: source.label,
        title: `${source.label} — conditionnel présent`,
        infinitive: futureItem.infinitive, stem: futureItem.stem, stemIpa: futureItem.stemIpa,
        formula: Object.freeze({ text: `${futureItem.infinitive} → ${futureItem.stem}- + ais / ais / ait / ions / iez / aient` }),
        rows: Object.freeze(rows), examples: createExamples(source, rows, index),
        specialRules: Object.freeze([...new Set(ruleIds)].map(id => ruleCatalog[id]).filter(Boolean))
      }));
    } catch (error) {
      errors.push({ key: source.key, label: source.label, error });
    }
  });
  if (!registry || !registry.items.length) errors.push({ key: "initialization", error: new Error("Verb registry is unavailable.") });
  const itemByKey = new Map(items.map(item => [item.key, item]));
  const groups = (registry && registry.groups || []).map(group => Object.freeze({
    key: group.key, title: group.title, indexTitle: group.indexTitle || group.title,
    descriptionHtml: "Use the future stem with imparfait endings. Each verb includes pronunciation and conditional sentence practice.",
    items: Object.freeze(items.filter(item => item.group === group.key).sort((a, b) => a.label.localeCompare(b.label, "fr")))
  })).filter(group => group.items.length);
  FR.data.conditionnelPresent = Object.freeze({
    endings, endingIpa, ruleCatalog, alignedPairs: future ? future.alignedPairs : [],
    items: Object.freeze(items), groups: Object.freeze(groups), errors: Object.freeze(errors),
    getItem(key) { return itemByKey.get(key) || null; }
  });
})(window);
