(function initializeSubjonctifPresentData(global) {
  "use strict";

  const { data } = global.FR;
  // Formation and usage references are recorded in docs/content-model.md.
  // This module depends only on present paradigms, lexical metadata, and usage.
  const endings = Object.freeze({ je: "e", tu: "es", il: "e", elle: "e", on: "e", ça: "e", nous: "ions", vous: "iez", ils: "ent", elles: "ent" });
  const alignedPairs = Object.freeze([ ["je", "nous"], ["tu", "vous"], ["il", "ils"], ["elle", "elles"] ].map(Object.freeze));
  const ruleCatalog = Object.freeze(Object.fromEntries([
    ["formation", "Present stems + subjunctive endings", "Usually remove -ent from present ils for je, tu, il/elle/on, ils/elles. For nous and vous, remove -ons from present nous and add -ions or -iez. The other endings are -e, -es, -e, -ent."],
    ["two-stems", "Watch the two stems", "Venir gives que je vienne but que nous venions; prendre gives que je prenne but que nous prenions. The nous/vous stem also restores the spelling in que nous achetions and que vous préfériez."],
    ["irregular", "Learn the exceptional forms", "Memorize être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir, and falloir: que je sois, que j’aie, que j’aille, que je fasse, que je puisse, que je sache, que je veuille, qu’il vaille, qu’il faille."],
    ["ger-cer", "No extra e or cedilla before i", "Keep g and c before -ions/-iez: que nous mangions, que vous bougiez, que nous commencions. The added e in mangeons and the ç in commençons are unnecessary before i."],
    ["written-i", "Keep i after i or y", "Write que nous étudiions, que nous nous mariions, que vous voyiez, and que nous nous ennuyions. The i in -ions/-iez remains even after i or y."],
    ["ayer-optional", "Two accepted -ayer spellings", "This app uses que je paie and que j’essaie; que je paye and que j’essaye are also accepted. The nous/vous forms keep y: que nous payions, que vous essayiez."],
    ["pronominal-order", "Keep the reflexive pronoun", "Use que je me lave, que je m’habille, and que nous nous souvenions. Negation surrounds the reflexive pronoun and verb: que je ne me lave pas, que je ne m’habille pas."],
    ["impersonal-only", "Keep natural impersonal subjects", "Use qu’il faille, qu’il pleuve, qu’il y ait, qu’il s’agisse, qu’il soit, and qu’il vaille mieux. Faire expressions use qu’il fasse or que ça fasse."],
    ["pronunciation", "Silent endings and plural /j/", "-e, -es, and -ent are normally silent. Listen for /jɔ̃/ and /je/ in nous/vous. Some forms sound like the indicative but are spelled differently: il voit → qu’il voie."]
  ].map(([id, title, note]) => [id, Object.freeze({ id, title, note })])));

  // [short stem, nous/vous stem, short IPA, nous/vous IPA].
  const stemOverrides = Object.freeze({
    aller: ["aill", "all", "aj", "al"],
    faire: ["fass", "fass", "fas", "fas"],
    pouvoir: ["puiss", "puiss", "pɥis", "pɥis"],
    savoir: ["sach", "sach", "saʃ", "saʃ"],
    vouloir: ["veuill", "voul", "vœj", "vul"],
    valoir: ["vaill", "val", "vaj", "val"],
    falloir: ["faill", "faill", "faj", "faj"],
    pleuvoir: ["pleuv", "pleuv", "plœv", "plœv"],
    // S’agir has no personal present nous/ils forms from which to derive stems.
    agir: ["agiss", "agiss", "aʒis", "aʒis"]
  });
  const fullFormOverrides = Object.freeze({
    être: { forms: ["sois", "sois", "soit", "soyons", "soyez", "soient"], ipa: ["swa", "swa", "swa", "swajɔ̃", "swaje", "swa"] },
    avoir: { forms: ["aie", "aies", "ait", "ayons", "ayez", "aient"], ipa: ["ɛ", "ɛ", "ɛ", "ɛjɔ̃", "ɛje", "ɛ"] }
  });
  const personIndex = Object.freeze({ je: 0, tu: 1, il: 2, elle: 2, on: 2, ça: 2, nous: 3, vous: 4, ils: 5, elles: 5 });
  const subjectIpa = Object.freeze({ je: "ʒə", tu: "ty", il: "il", elle: "ɛl", on: "ɔ̃", ça: "sa", nous: "nu", vous: "vu", ils: "il", elles: "ɛl" });
  const reflexives = Object.freeze({ je: "me", tu: "te", il: "se", elle: "se", nous: "nous", vous: "vous", ils: "se", elles: "se" });
  const reflexiveIpa = Object.freeze({ je: "mə", tu: "tə", il: "sə", elle: "sə", nous: "nu", vous: "vu", ils: "sə", elles: "sə" });
  const vowelSpelling = value => /^[aeiouyhàâäéèêëîïôöùûüœ]/iu.test(value);
  const vowelIpa = value => /^[aeiouyɑɛɔœøəɥ]/u.test(value);
  const isReflexive = source => /^(?:se\s|s[’'])/iu.test(source.infinitive);
  const baseInfinitive = source => source.infinitive.replace(/^(?:se\s+|s[’'])/iu, "");

  function presentStem(source, person) {
    const row = source.rows.find(entry => entry.pronoun === person);
    if (!row) throw new Error(`${source.key}: missing present ${person} form.`);
    const lexical = row.form.replace(/^(?:(?:me|te|se|nous|vous)\s+|[mts][’'])/iu, "");
    const ending = person === "ils" ? "ent" : "ons";
    if (!lexical.endsWith(ending)) throw new Error(`${source.key}: cannot remove -${ending} from ${lexical}.`);
    let stem = lexical.slice(0, -ending.length);
    if (person === "nous") {
      if (baseInfinitive(source).endsWith("ger")) stem = stem.replace(/ge$/u, "g");
      if (baseInfinitive(source).endsWith("cer")) stem = stem.replace(/ç$/u, "c");
    }

    // Present IPA already records the short/plural vowel and consonant changes.
    // Two glides must return to vowels before the subjunctive plural /j/.
    const ipaOverrides = { adorer: "adɔʁ", jouer: "ʒu", seMarier: "maʁi" };
    let ipa = ipaOverrides[source.key];
    if (!ipa) {
      const raw = (row.ipa || verbPhraseIpa[row.full] || "").replace(/[/.\s‿]/gu, "");
      const vowel = vowelSpelling(baseInfinitive(source));
      const prefix = isReflexive(source)
        ? person === "ils" ? (vowel ? "ils" : "ilsə") : (vowel ? "nunuz" : "nunu")
        : person === "ils" ? (vowel ? "ilz" : "il") : (vowel ? "nuz" : "nu");
      if (!raw.startsWith(prefix)) throw new Error(`${source.key}: cannot extract present ${person} IPA.`);
      ipa = raw.slice(prefix.length);
      if (person === "nous") {
        if (!ipa.endsWith("ɔ̃")) throw new Error(`${source.key}: present nous IPA must end in /ɔ̃/.`);
        ipa = ipa.slice(0, -2);
      }
    }
    return { stem, ipa };
  }

  function stemsFor(source) {
    const override = stemOverrides[baseInfinitive(source)];
    if (override) return { short: { stem: override[0], ipa: override[2] }, plural: { stem: override[1], ipa: override[3] }, irregular: baseInfinitive(source) !== "agir" };
    if (fullFormOverrides[baseInfinitive(source)]) return { irregular: true };
    return { short: presentStem(source, "ils"), plural: presentStem(source, "nous"), irregular: false };
  }

  function clauseFor(source, person, form, negative = false) {
    const vowel = vowelSpelling(form);
    if (source.key === "ilYA") return negative ? `il n’y ${form} pas` : `il y ${form}`;
    if (isReflexive(source)) {
      let reflexive = reflexives[person];
      if (vowel && ["me", "te", "se"].includes(reflexive)) reflexive = `${reflexive[0]}’`;
      return `${person} ${negative ? "ne " : ""}${reflexive}${reflexive.endsWith("’") ? "" : " "}${form}${negative ? " pas" : ""}`;
    }
    if (negative) return `${person} ${vowel ? "n’" : "ne "}${form} pas`;
    return person === "je" && vowel ? `j’${form}` : `${person} ${form}`;
  }

  function withQue(clause) {
    return `${vowelSpelling(clause) ? "qu’" : "que "}${clause}`;
  }

  function rowIpa(source, person, core) {
    let subject = subjectIpa[person];
    let predicate = core;
    if (source.key === "ilYA") predicate = `i ${core}`;
    else if (isReflexive(source)) {
      let reflexive = reflexiveIpa[person];
      if (vowelIpa(core)) reflexive = ["nous", "vous"].includes(person) ? `${reflexive}z‿` : reflexive[0];
      else reflexive += " ";
      predicate = reflexive + core;
    } else if (vowelIpa(core)) {
      if (person === "je") subject = "ʒ";
      if (["nous", "vous", "ils", "elles"].includes(person)) subject += "z‿";
      if (person === "on") subject += "n‿";
    }
    const que = ["il", "elle", "on", "ils", "elles"].includes(person) ? "k" : "kə ";
    const join = subject.endsWith("‿") || subject === "ʒ" ? "" : " ";
    return `/${que}${subject}${join}${predicate}/`;
  }

  function deriveRows(source, stems) {
    return source.rows.map(present => {
      const pronoun = present.pronoun.replace(/^j[’']$/u, "je");
      const override = fullFormOverrides[baseInfinitive(source)];
      const plural = ["nous", "vous"].includes(pronoun);
      const stem = plural ? stems.plural : stems.short;
      const form = override ? override.forms[personIndex[pronoun]] : stem.stem + endings[pronoun];
      const core = override ? override.ipa[personIndex[pronoun]]
        : (stem.ipa + (plural ? pronoun === "nous" ? "jɔ̃" : "je" : "")).replace(/jj/gu, "j");
      const full = withQue(clauseFor(source, pronoun, form));
      return Object.freeze({ pronoun, form, full, speech: full, ipa: rowIpa(source, pronoun, core) });
    });
  }

  function examples(statement, negative, question) {
    return Object.freeze(Object.fromEntries([statement, negative, question].map(([fr, en], index) => [
      ["statement", "negative", "question"][index], Object.freeze({ fr, en })
    ])));
  }

  const customExamples = Object.freeze({
    etreVerb: examples(
      ["Il faut que tu sois prêt.", "You need to be ready."],
      ["Je préfère que tu ne sois pas en retard.", "I would prefer you not to be late."],
      ["Faut-il que nous soyons prêts ?", "Do we need to be ready?"]
    ),
    avoirVerb: examples(
      ["Je souhaite que tu aies assez de temps.", "I hope you have enough time."],
      ["Je préfère que tu n’aies pas à attendre.", "I would prefer you not to have to wait."],
      ["Est-il possible que nous ayons une place ?", "Is it possible that we might get a seat?"]
    ),
    aller: examples(
      ["Il faut que j’aille à la pharmacie.", "I need to go to the pharmacy."],
      ["Je préfère que tu n’ailles pas seul à la pharmacie.", "I would prefer you not to go to the pharmacy alone."],
      ["Veux-tu que nous allions à la pharmacie ?", "Do you want us to go to the pharmacy?"]
    ),
    venir: examples(
      ["Je souhaite que tu viennes avec nous.", "I would like you to come with us."],
      ["Je préfère que tu ne viennes pas trop tard.", "I would prefer you not to come too late."],
      ["Veux-tu que nous venions demain ?", "Do you want us to come tomorrow?"]
    ),
    faire: examples(
      ["Il faut que tu fasses tes devoirs.", "You need to do your homework."],
      ["Je préfère que nous ne fassions pas de bruit.", "I would prefer us not to make any noise."],
      ["Veux-tu que nous fassions un gâteau ?", "Do you want us to make a cake?"]
    ),
    devoir: examples(
      ["Je regrette que tu doives partir si tôt.", "I am sorry you have to leave so early."],
      ["Je suis content que tu ne doives pas d’argent à la banque.", "I am glad you do not owe the bank any money."],
      ["Est-il possible que nous devions partir plus tôt ?", "Is it possible that we might have to leave earlier?"]
    ),
    pouvoir: examples(
      ["Je souhaite que tu puisses venir.", "I hope you can come."],
      ["Je regrette que tu ne puisses pas venir.", "I am sorry you cannot come."],
      ["Est-il possible que nous puissions finir aujourd’hui ?", "Is it possible that we could finish today?"]
    ),
    vouloir: examples(
      ["Je suis heureux que tu veuilles venir.", "I am happy you want to come."],
      ["Je regrette que tu ne veuilles pas venir.", "I am sorry you do not want to come."],
      ["Est-il possible qu’elle veuille venir ?", "Is it possible that she might want to come?"]
    ),
    savoir: examples(
      ["Il faut que tu saches la vérité.", "You need to know the truth."],
      ["Je préfère qu’il ne sache pas la réponse.", "I would prefer him not to know the answer."],
      ["Faut-il que nous sachions nager ?", "Do we need to know how to swim?"]
    ),
    parler: examples(
      ["Je veux que tu parles français avec moi.", "I want you to speak French with me."],
      ["Je préfère que nous ne parlions pas trop fort.", "I would prefer us not to speak too loudly."],
      ["Faut-il que nous parlions au professeur ?", "Do we need to speak to the teacher?"]
    ),
    bouger: examples(
      ["Il faut que tu bouges un peu pendant la pause.", "You need to move around a little during the break."],
      ["Le médecin préfère que tu ne bouges pas pendant l’examen.", "The doctor would prefer you not to move during the examination."],
      ["Faut-il que nous bougions pendant la pause ?", "Do we need to move around during the break?"]
    ),
    couter: examples(
      ["Je cherche un billet qui coûte moins de vingt euros.", "I am looking for a ticket that costs less than twenty euros."],
      ["Je souhaite que le billet ne coûte pas plus de vingt euros.", "I would like the ticket to cost no more than twenty euros."],
      ["Est-il possible que le billet coûte moins de vingt euros ?", "Is it possible that the ticket might cost less than twenty euros?"]
    ),
    naitre: examples(
      ["Il est possible que le bébé naisse en septembre.", "It is possible that the baby might be born in September."],
      ["Il est possible que le bébé ne naisse pas avant septembre.", "It is possible that the baby might not be born before September."],
      ["Est-il possible que le bébé naisse en septembre ?", "Is it possible that the baby might be born in September?"]
    ),
    mourir: examples(
      ["Je crains que cette plante meure sans eau.", "I am afraid this plant might die without water."],
      ["Il faut que cette plante ne meure pas de soif.", "This plant must not die from lack of water."],
      ["Est-il possible que cette plante meure sans eau ?", "Is it possible that this plant might die without water?"]
    ),
    impersonalValoir: examples(
      ["Il est possible qu’il vaille mieux réserver.", "It is possible that it might be better to book."],
      ["Il est possible qu’il ne vaille pas mieux attendre.", "It is possible that waiting might not be better."],
      ["Est-il possible qu’il vaille mieux attendre ?", "Is it possible that it might be better to wait?"]
    ),
    falloir: examples(
      ["Il est possible qu’il faille réserver.", "It is possible that booking might be necessary."],
      ["Il est possible qu’il ne faille pas plus de dix minutes.", "It is possible that no more than ten minutes might be needed."],
      ["Est-il possible qu’il faille réserver ?", "Is it possible that booking might be necessary?"]
    ),
    ilYA: examples(
      ["Je souhaite qu’il y ait assez de places.", "I hope there are enough seats."],
      ["Je préfère qu’il n’y ait pas de bruit.", "I would prefer there to be no noise."],
      ["Faut-il qu’il y ait un adulte présent ?", "Does an adult need to be present?"]
    ),
    impersonalFaire: examples(
      ["Je souhaite qu’il fasse beau demain.", "I hope the weather is nice tomorrow."],
      ["Je préfère qu’il ne fasse pas trop chaud.", "I would prefer it not to be too hot."],
      ["Est-il possible que ça fasse autant de bruit ?", "Is it possible that it could make that much noise?"]
    ),
    impersonalEtre: examples(
      ["Nous partirons avant qu’il soit huit heures.", "We will leave before it is eight o’clock."],
      ["Il est possible qu’il ne soit pas encore huit heures.", "It is possible that it might not be eight o’clock yet."],
      ["Est-il possible qu’il soit déjà huit heures ?", "Is it possible that it might already be eight o’clock?"]
    ),
    pleuvoir: examples(
      ["Il est possible qu’il pleuve demain.", "It is possible that it might rain tomorrow."],
      ["Pour jouer dehors, il faut qu’il ne pleuve pas.", "To play outside, we need it not to rain."],
      ["Crains-tu qu’il pleuve pendant le match ?", "Are you afraid it might rain during the match?"]
    ),
    sAgir: examples(
      ["Il est possible qu’il s’agisse d’une erreur.", "It is possible that this might be an error."],
      ["Il est possible qu’il ne s’agisse pas d’une erreur.", "It is possible that this might not be an error."],
      ["Est-il possible qu’il s’agisse d’une erreur ?", "Is it possible that this might be an error?"]
    ),
    sAppeler: examples(
      ["Je souhaite que notre fille s’appelle Léa.", "I would like our daughter to be called Léa."],
      ["Je préfère que notre fille ne s’appelle pas Emma.", "I would prefer our daughter not to be called Emma."],
      ["Veux-tu que notre fille s’appelle Léa ?", "Do you want our daughter to be called Léa?"]
    ),
    sePasser: examples(
      ["Je souhaite que la réunion se passe bien.", "I hope the meeting goes well."],
      ["Je préfère que la réunion ne se passe pas en ligne.", "I would prefer the meeting not to take place online."],
      ["Est-il possible que la réunion se passe en ligne ?", "Is it possible that the meeting might take place online?"]
    ),
    seVendre: examples(
      ["Il est possible que ces billets se vendent rapidement.", "It is possible that these tickets might sell quickly."],
      ["Je préfère que ces billets ne se vendent pas en ligne.", "I would prefer these tickets not to be sold online."],
      ["Est-il possible que ces billets se vendent à ce prix ?", "Is it possible that these tickets might sell at this price?"]
    ),
    sEnvoler: examples(
      ["Je crains que les oiseaux s’envolent.", "I am afraid the birds might fly away."],
      ["Ferme la cage pour que les oiseaux ne s’envolent pas.", "Close the cage so that the birds do not fly away."],
      ["Est-il possible que les oiseaux s’envolent sous la pluie ?", "Is it possible that the birds might fly away in the rain?"]
    )
  });

  function createExamples(source, rows) {
    if (customExamples[source.key]) return customExamples[source.key];
    const usage = data.verbUsage[source.key];
    const row = rows.find(entry => entry.pronoun === "nous");
    if (!usage || !row) throw new Error(`${source.key}: missing subjunctive example usage.`);
    const complement = usage.frComplement;
    const negativeComplement = usage.negativeFrComplement || complement
      .replace(/^du\s+|^de la\s+|^des\s+/iu, "de ")
      .replace(/^de l[’']/iu, "d’")
      .replace(/^(?:un|une)\s+(?!peu\b)([aeiouyhàâäéèêëîïôöùûüœ])/iu, "d’$1")
      .replace(/^(?:un|une)\s+(?!peu\b)/iu, "de ");
    const negative = withQue(clauseFor(source, "nous", row.form, true));
    return examples(
      [`Il est possible ${row.full} ${complement}.`, `It is possible that we might ${usage.enPredicate}.`],
      [`Il est possible ${negative} ${negativeComplement}.`, `It is possible that we might not ${usage.enPredicate}.`],
      [`Est-il possible ${row.full} ${complement} ?`, `Is it possible that we might ${usage.enPredicate}?`]
    );
  }

  const items = [];
  const errors = [];
  data.verbs.items.forEach(source => {
    try {
      const stems = stemsFor(source);
      const rows = Object.freeze(deriveRows(source, stems));
      const rules = ["formation", "pronunciation"];
      if (stems.irregular) rules.push("irregular");
      if (stems.short && stems.short.stem !== stems.plural.stem) rules.push("two-stems");
      if (/(?:ger|cer)$/u.test(baseInfinitive(source))) rules.push("ger-cer");
      if (stems.plural && /[iy]$/u.test(stems.plural.stem)) rules.push("written-i");
      if (baseInfinitive(source).endsWith("ayer")) rules.push("ayer-optional");
      if (isReflexive(source)) rules.push("pronominal-order");
      if (source.group === "impersonal") rules.push("impersonal-only");
      const formula = stems.short
        ? `${stems.short.stem}- + e / es / e / ent; ${stems.plural.stem}- + ions / iez for nous/vous. Keep que/qu’ before the subject.`
        : `${baseInfinitive(source)} has exceptional forms: ${rows[0].full}${rows.find(row => row.pronoun === "nous") ? `; ${rows.find(row => row.pronoun === "nous").full}` : ""}.`;
      items.push(Object.freeze({
        key: source.key, group: source.group, label: source.label,
        title: `${source.label} — subjonctif présent`, infinitive: source.infinitive,
        formula: Object.freeze({ text: source.group === "impersonal" ? `Fixed expression: ${rows.map(row => row.full).join(" / ")}.` : formula }),
        rows, examples: createExamples(source, rows),
        specialRules: Object.freeze(rules.map(id => ruleCatalog[id]))
      }));
    } catch (error) {
      errors.push({ key: source.key, label: source.label, error });
    }
  });
  const byKey = new Map(items.map(item => [item.key, item]));
  const groups = data.verbs.groups.map(group => Object.freeze({
    key: group.key, title: group.title, indexTitle: group.indexTitle || group.title,
    descriptionHtml: "Practice subjonctif présent with que/qu’, pronunciation, and complete sentences showing when to use this mood.",
    items: Object.freeze(items.filter(item => item.group === group.key).sort((a, b) => a.label.localeCompare(b.label, "fr")))
  })).filter(group => group.items.length);
  data.subjonctifPresent = Object.freeze({
    endings, alignedPairs, ruleCatalog, items: Object.freeze(items), groups: Object.freeze(groups), errors: Object.freeze(errors),
    getItem(key) { return byKey.get(key) || null; }
  });
})(window);
