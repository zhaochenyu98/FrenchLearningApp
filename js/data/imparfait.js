(function initializeImparfaitData(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.data = FR.data || {};

  const endings = Object.freeze({
    je: "ais",
    tu: "ais",
    il: "ait",
    elle: "ait",
    on: "ait",
    nous: "ions",
    vous: "iez",
    ils: "aient",
    elles: "aient"
  });

  const personOrder = Object.freeze([
    "je", "nous", "tu", "vous", "il", "ils", "elle", "elles", "on"
  ]);

  const alignedPairs = Object.freeze([
    Object.freeze(["je", "nous"]),
    Object.freeze(["tu", "vous"]),
    Object.freeze(["il", "ils"]),
    Object.freeze(["elle", "elles"])
  ]);

  const ruleCatalog = Object.freeze({
    "etre-stem": Object.freeze({
      id: "etre-stem",
      kind: "stem",
      title: "Être has the special stem ét-",
      note: "Être does not use nous sommes. Its imparfait forms use ét-: j’étais, nous étions, ils étaient."
    }),
    "etre-t": Object.freeze({
      id: "etre-t",
      kind: "pronunciation",
      title: "The t in étions / étiez stays /t/",
      note: "Say nous étions /nu.z‿e.tjɔ̃/ and vous étiez /vu.z‿e.tje/. The liaison from nous or vous is /z/; the t in the verb is still /t/, not /d/."
    }),
    "soft-g": Object.freeze({
      id: "soft-g",
      kind: "spelling",
      title: "-ger keeps the soft g sound",
      note: "Keep e before -ais, -ait, and -aient, but drop it before -ions and -iez: je mangeais, nous mangions."
    }),
    "soft-c": Object.freeze({
      id: "soft-c",
      kind: "spelling",
      title: "-cer keeps the soft c sound",
      note: "Use ç before -ais, -ait, and -aient, but c before -ions and -iez: je commençais, nous commencions."
    }),
    "double-written-i": Object.freeze({
      id: "double-written-i",
      kind: "spelling",
      title: "Keep both written i letters",
      note: "When the stem ends in i, -ions and -iez create two written i letters: nous étudiions, nous nous mariions."
    }),
    "y-plus-i": Object.freeze({
      id: "y-plus-i",
      kind: "spelling",
      title: "Keep y + i in nous / vous",
      note: "The i from -ions or -iez remains after y: nous voyions, vous voyiez, nous nous ennuyions."
    }),
    "ill-plus-i": Object.freeze({
      id: "ill-plus-i",
      kind: "spelling",
      title: "Keep the i after ill",
      note: "Do not copy the present ending: nous travaillions and nous nous habillions retain the imperfect i."
    }),
    "gn-plus-i": Object.freeze({
      id: "gn-plus-i",
      kind: "spelling",
      title: "Keep the i after gn",
      note: "The imperfect i remains after gn: nous gagnions and nous nous baignions."
    }),
    "present-nous-stem": Object.freeze({
      id: "present-nous-stem",
      kind: "stem",
      title: "Return to the present nous stem",
      note: "A present-tense spelling change can disappear in the imparfait because the stem comes from the nous form."
    })
  });

  const presentAlternations = Object.freeze({
    acheter: Object.freeze({
      present: "j’achète",
      nous: "nous achetons",
      imparfait: "j’achetais"
    }),
    preferer: Object.freeze({
      present: "je préfère",
      nous: "nous préférons",
      imparfait: "je préférais"
    }),
    seLever: Object.freeze({
      present: "je me lève",
      nous: "nous nous levons",
      imparfait: "je me levais"
    }),
    sePromener: Object.freeze({
      present: "je me promène",
      nous: "nous nous promenons",
      imparfait: "je me promenais"
    }),
    sAppeler: Object.freeze({
      present: "je m’appelle",
      nous: "nous nous appelons",
      imparfait: "je m’appelais"
    }),
    sEnnuyer: Object.freeze({
      present: "je m’ennuie",
      nous: "nous nous ennuyons",
      imparfait: "je m’ennuyais"
    })
  });

  const impersonalMappings = Object.freeze({
    falloir: Object.freeze({
      persons: Object.freeze(["il"]),
      stemOverride: "fall",
      formulaSource: "falloir",
      prefix: "il ",
      note: "Falloir has no present nous form, so its fixed imparfait stem is fall-."
    }),
    ilYA: Object.freeze({
      persons: Object.freeze(["il"]),
      baseKey: "avoirVerb",
      formulaSource: "nous avons",
      prefix: "il y ",
      note: "The fixed expression il y a uses the avoir stem: il y avait."
    }),
    impersonalFaire: Object.freeze({
      persons: Object.freeze(["il"]),
      baseKey: "faire",
      formulaSource: "nous faisons",
      prefix: "il ",
      note: "The weather expression il fait uses the faire stem: il faisait."
    }),
    impersonalEtre: Object.freeze({
      persons: Object.freeze(["il"]),
      baseKey: "etreVerb",
      stemOverride: "ét",
      formulaSource: "être",
      prefix: "il ",
      note: "The fixed expression il est uses the special être stem: il était."
    })
  });

  const ipaEndings = Object.freeze({
    je: "ɛ",
    tu: "ɛ",
    il: "ɛ",
    elle: "ɛ",
    on: "ɛ",
    nous: "jɔ̃",
    vous: "je",
    ils: "ɛ",
    elles: "ɛ"
  });

  // Broad phonemic stems keep the derived paradigms compact while still
  // preserving pronunciation changes such as fais- /fəz/ and buv- /byv/.
  const ipaStems = Object.freeze({
    etreVerb: "et",
    avoirVerb: "av",
    aller: "al",
    venir: "vən",
    tenir: "tən",
    prendre: "pʁən",
    apprendre: "apʁən",
    comprendre: "kɔ̃pʁən",
    faire: "fəz",
    devoir: "dəv",
    pouvoir: "puv",
    vouloir: "vul",
    savoir: "sav",
    connaitre: "kɔnɛs",
    voir: "vwaj",
    boire: "byv",
    dire: "diz",
    offrir: "ɔfʁ",
    ouvrir: "uvʁ",
    ecrire: "ekʁiv",
    lire: "liz",
    vivre: "viv",
    dormir: "dɔʁm",
    partir: "paʁt",
    sortir: "sɔʁt",
    servir: "sɛʁv",
    sentir: "sɑ̃t",
    parler: "paʁl",
    chercher: "ʃɛʁʃ",
    manger: "mɑ̃ʒ",
    inviter: "ɛ̃vit",
    adorer: "adɔʁ",
    detester: "detɛst",
    preferer: "pʁefeʁ",
    gagner: "ɡaɲ",
    penser: "pɑ̃s",
    finir: "finis",
    choisir: "ʃwazis",
    reussir: "ʁeysis",
    unir: "ynis",
    attendre: "atɑ̃d",
    arriver: "aʁiv",
    habiter: "abit",
    trouver: "tʁuv",
    regarder: "ʁəɡaʁd",
    laisser: "les",
    reserver: "ʁezɛʁv",
    quitter: "kit",
    passer: "pas",
    commencer: "kɔmɑ̃s",
    voyager: "vwajaʒ",
    travailler: "tʁavaj",
    dejeuner: "deʒœn",
    acheter: "aʃət",
    rentrer: "ʁɑ̃tʁ",
    demander: "dəmɑ̃d",
    jouer: "ʒw",
    nager: "naʒ",
    tourner: "tuʁn",
    couter: "kut",
    entrer: "ɑ̃tʁ",
    monter: "mɔ̃t",
    retourner: "ʁətuʁn",
    rester: "ʁɛst",
    tomber: "tɔ̃b",
    descendre: "desɑ̃d",
    revenir: "ʁəvən",
    devenir: "dəvən",
    naitre: "nɛs",
    mourir: "muʁ",
    falloir: "fal",
    ilYA: "av",
    impersonalFaire: "fəz",
    impersonalEtre: "et",
    rever: "ʁɛv",
    arreter: "aʁɛt"
  });

  const ipaVerbFormOverrides = Object.freeze({
    jouer: Object.freeze({
      je: "ʒwɛ",
      tu: "ʒwɛ",
      il: "ʒwɛ",
      elle: "ʒwɛ",
      on: "ʒwɛ",
      nous: "ʒujɔ̃",
      vous: "ʒuje",
      ils: "ʒwɛ",
      elles: "ʒwɛ"
    })
  });

  const ipaPhraseOverrides = Object.freeze({
    "ilYA:il": "/il i avɛ/"
  });

  const subjectIpa = Object.freeze({
    je: Object.freeze({ consonant: "ʒə", vowel: "ʒ" }),
    tu: Object.freeze({ consonant: "ty", vowel: "ty" }),
    il: Object.freeze({ consonant: "il", vowel: "il" }),
    elle: Object.freeze({ consonant: "ɛl", vowel: "ɛl" }),
    on: Object.freeze({ consonant: "ɔ̃", vowel: "ɔ̃n‿" }),
    nous: Object.freeze({ consonant: "nu", vowel: "nuz‿" }),
    vous: Object.freeze({ consonant: "vu", vowel: "vuz‿" }),
    ils: Object.freeze({ consonant: "il", vowel: "ilz‿" }),
    elles: Object.freeze({ consonant: "ɛl", vowel: "ɛlz‿" })
  });

  const exampleUsage = Object.freeze({
    etreVerb: Object.freeze(["souvent fatigués après le travail", "be tired after work"]),
    avoirVerb: Object.freeze(["peur des orages", "be afraid of storms"]),
    aller: Object.freeze(["à l’école à pied", "go to school on foot"]),
    venir: Object.freeze(["chez nos grands-parents le dimanche", "come to our grandparents’ house on Sundays"]),
    tenir: Object.freeze(["la porte ouverte pour les autres", "hold the door open for others"]),
    prendre: Object.freeze(["le bus chaque matin", "take the bus every morning"]),
    apprendre: Object.freeze(["le français ensemble", "learn French together"]),
    comprendre: Object.freeze(["mieux cette règle", "understand this rule better"]),
    faire: Object.freeze(["du sport le samedi", "exercise on Saturdays"]),
    devoir: Object.freeze(["partir tôt", "have to leave early"]),
    pouvoir: Object.freeze(["jouer dehors après l’école", "be able to play outside after school"]),
    vouloir: Object.freeze(["rester plus longtemps", "want to stay longer"]),
    savoir: Object.freeze(["nager", "know how to swim"]),
    connaitre: Object.freeze(["bien ce quartier", "know this neighborhood well"]),
    voir: Object.freeze(["nos voisins chaque semaine", "see our neighbors every week"]),
    boire: Object.freeze(["l’eau du robinet", "drink tap water"]),
    dire: Object.freeze(["toujours la vérité", "always tell the truth"]),
    offrir: Object.freeze(["ce livre à nos amis", "give this book to our friends"]),
    ouvrir: Object.freeze(["la fenêtre chaque matin", "open the window every morning"]),
    ecrire: Object.freeze(["à nos grands-parents chaque mois", "write to our grandparents every month"]),
    lire: Object.freeze(["le journal au petit-déjeuner", "read the newspaper at breakfast"]),
    vivre: Object.freeze(["près de la mer", "live near the sea"]),
    dormir: Object.freeze(["huit heures par nuit", "sleep eight hours a night"]),
    partir: Object.freeze(["tôt le lundi", "leave early on Mondays"]),
    sortir: Object.freeze(["ensemble le vendredi", "go out together on Fridays"]),
    servir: Object.freeze(["le dîner à sept heures", "serve dinner at seven o’clock"]),
    sentir: Object.freeze(["le parfum des fleurs", "smell the flowers’ fragrance"]),
    parler: Object.freeze(["français à la maison", "speak French at home"]),
    chercher: Object.freeze(["nos clés partout", "look for our keys everywhere"]),
    manger: Object.freeze(["à la cantine", "eat in the cafeteria"]),
    inviter: Object.freeze(["nos voisins à dîner", "invite our neighbors to dinner"]),
    adorer: Object.freeze(["ce petit café", "love this little café"]),
    detester: Object.freeze(["attendre dans les files", "hate waiting in lines"]),
    preferer: Object.freeze(["le train à la voiture", "prefer the train to the car"]),
    gagner: Object.freeze(["souvent le match", "often win the match"]),
    penser: Object.freeze(["à nos prochaines vacances", "think about our next vacation"]),
    finir: Object.freeze(["le travail à cinq heures", "finish work at five o’clock"]),
    choisir: Object.freeze(["toujours le même menu", "always choose the same menu"]),
    reussir: Object.freeze(["tous nos examens", "pass all our exams"]),
    unir: Object.freeze(["nos efforts", "join our efforts"]),
    attendre: Object.freeze(["le bus devant l’école", "wait for the bus in front of the school"]),
    arriver: Object.freeze(["toujours à l’heure", "always arrive on time"]),
    habiter: Object.freeze(["près de la gare", "live near the train station"]),
    trouver: Object.freeze(["facilement notre chemin", "find our way easily"]),
    regarder: Object.freeze(["les informations le soir", "watch the news in the evening"]),
    laisser: Object.freeze(["la porte ouverte", "leave the door open"]),
    reserver: Object.freeze(["cette table le vendredi", "reserve this table on Fridays"]),
    quitter: Object.freeze(["le bureau à six heures", "leave the office at six o’clock"]),
    passer: Object.freeze(["par Lyon chaque été", "go through Lyon every summer"]),
    commencer: Object.freeze(["à huit heures", "start at eight o’clock"]),
    voyager: Object.freeze(["en train", "travel by train"]),
    travailler: Object.freeze(["le samedi", "work on Saturdays"]),
    dejeuner: Object.freeze(["ensemble à midi", "have lunch together at noon"]),
    acheter: Object.freeze(["le pain au marché", "buy bread at the market"]),
    rentrer: Object.freeze(["avant la nuit", "return home before nightfall"]),
    demander: Object.freeze(["de l’aide au professeur", "ask the teacher for help"]),
    jouer: Object.freeze(["au tennis après l’école", "play tennis after school"]),
    nager: Object.freeze(["chaque matin", "swim every morning"]),
    tourner: Object.freeze(["à gauche à ce carrefour", "turn left at this intersection"]),
    entrer: Object.freeze(["par cette porte", "enter through this door"]),
    monter: Object.freeze(["à pied", "go upstairs on foot"]),
    retourner: Object.freeze(["à Paris chaque hiver", "return to Paris every winter"]),
    rester: Object.freeze(["chez nous le dimanche", "stay home on Sundays"]),
    tomber: Object.freeze(["souvent en jouant", "often fall while playing"]),
    descendre: Object.freeze(["à pied", "go downstairs on foot"]),
    revenir: Object.freeze(["chaque été", "come back every summer"]),
    devenir: Object.freeze(["plus patients avec le temps", "become more patient over time"]),
    rever: Object.freeze(["de voyager autour du monde", "dream of traveling around the world"]),
    arreter: Object.freeze(["de travailler à six heures", "stop working at six o’clock"])
  });

  function exampleSet(statementFr, statementEn, negativeFr, negativeEn, questionFr, questionEn) {
    return Object.freeze({
      statement: Object.freeze({ fr: statementFr, en: statementEn }),
      negative: Object.freeze({ fr: negativeFr, en: negativeEn }),
      question: Object.freeze({ fr: questionFr, en: questionEn })
    });
  }

  const exampleOverrides = Object.freeze({
    couter: exampleSet(
      "Le trajet coûtait vingt euros.",
      "The trip used to cost twenty euros.",
      "Le trajet ne coûtait pas vingt euros.",
      "The trip did not use to cost twenty euros.",
      "Combien coûtait le trajet ?",
      "How much did the trip cost?"
    ),
    naitre: exampleSet(
      "Beaucoup d’enfants naissaient à la maison à cette époque.",
      "Many children were born at home at that time.",
      "Les enfants ne naissaient pas tous à l’hôpital.",
      "Not all children were born in a hospital.",
      "Où naissaient beaucoup d’enfants à cette époque ?",
      "Where were many children born at that time?"
    ),
    mourir: exampleSet(
      "Les plantes mouraient sans eau.",
      "The plants used to die without water.",
      "Les plantes ne mouraient pas quand nous les arrosions.",
      "The plants did not die when we watered them.",
      "Pourquoi les plantes mouraient-elles ?",
      "Why were the plants dying?"
    ),
    falloir: exampleSet(
      "Il fallait réserver à l’avance.",
      "It was necessary to book in advance.",
      "Il ne fallait pas attendre le dernier moment.",
      "One was not supposed to wait until the last moment.",
      "Fallait-il réserver à l’avance ?",
      "Was it necessary to book in advance?"
    ),
    ilYA: exampleSet(
      "Il y avait un marché ici.",
      "There used to be a market here.",
      "Il n’y avait pas de supermarché dans le quartier.",
      "There was no supermarket in the neighborhood.",
      "Y avait-il un marché ici ?",
      "Was there a market here?"
    ),
    impersonalFaire: exampleSet(
      "Il faisait froid le matin.",
      "It used to be cold in the morning.",
      "Il ne faisait pas froid l’après-midi.",
      "It was not cold in the afternoon.",
      "Faisait-il froid le matin ?",
      "Was it cold in the morning?"
    ),
    impersonalEtre: exampleSet(
      "Il était huit heures quand nous partions.",
      "It was eight o’clock when we left.",
      "Il n’était pas encore huit heures.",
      "It was not eight o’clock yet.",
      "Était-il déjà huit heures ?",
      "Was it already eight o’clock?"
    )
  });

  function normalizePronoun(value) {
    const normalized = String(value || "")
      .toLowerCase()
      .replace(/[’']/g, "")
      .trim();
    return normalized === "j" ? "je" : normalized;
  }

  function findItemByKey(key) {
    const registry = FR.data.verbs && FR.data.verbs.items;
    return Array.isArray(registry) ? registry.find(item => item.key === key) : null;
  }

  function findRow(item, pronoun) {
    return (item.rows || []).find(row => normalizePronoun(row.pronoun) === pronoun) || null;
  }

  function getLexicalForm(row) {
    const tokens = String(row && row.form || "").trim().split(/\s+/);
    const lastToken = tokens[tokens.length - 1] || "";
    const apostropheIndex = Math.max(
      lastToken.lastIndexOf("'"),
      lastToken.lastIndexOf("’")
    );
    return apostropheIndex >= 0 ? lastToken.slice(apostropheIndex + 1) : lastToken;
  }

  function getPrefixFromPresentRow(row) {
    const lexicalForm = getLexicalForm(row);
    const full = String(row && row.full || "");
    if (!lexicalForm || !full.endsWith(lexicalForm)) return "";
    return full.slice(0, full.length - lexicalForm.length);
  }

  function unwrapIpa(value) {
    return String(value || "")
      .trim()
      .replace(/^[/\\]/, "")
      .replace(/[/\\]$/, "");
  }

  function isVowelInitialSpelling(value) {
    return /^[aeiouhàâäéèêëîïôöùûüœ]/i.test(String(value || ""));
  }

  function isVowelInitialIpa(value) {
    return /^[aeɛiɪoɔuʊyøœəɑɒ]/.test(String(value || ""));
  }

  function deriveStemIpaFromPresent(item) {
    const sourceRow = findRow(item, "nous");
    if (!sourceRow) return "";

    const phraseMap = FR.data.grammar && FR.data.grammar.verbPhraseIpa || {};
    const phraseIpa = sourceRow.ipa || phraseMap[sourceRow.full];
    if (!phraseIpa) return "";

    let compact = unwrapIpa(phraseIpa).replace(/[.\s‿]/g, "");
    const lexicalForm = getLexicalForm(sourceRow);
    const subjectPrefix = isVowelInitialSpelling(lexicalForm) ? "nuz" : "nu";
    if (!compact.startsWith(subjectPrefix)) return "";
    compact = compact.slice(subjectPrefix.length);
    return compact.endsWith("ɔ̃") ? compact.slice(0, -2) : "";
  }

  function resolveStemIpa(item) {
    const exact = ipaStems[item.key];
    if (exact) return exact;

    const derived = deriveStemIpaFromPresent(item);
    if (derived) return derived;

    throw new Error(
      `${item.label || item.key} needs an IPA stem or a full-phrase IPA on its present nous row.`
    );
  }

  function getVerbFormIpa(item, pronoun) {
    const override = ipaVerbFormOverrides[item.key] && ipaVerbFormOverrides[item.key][pronoun];
    if (override) return override;

    const ending = ipaEndings[pronoun];
    if (!ending) throw new Error(`No imparfait IPA ending is registered for ${pronoun}.`);
    return `${resolveStemIpa(item)}${ending}`;
  }

  function buildRowIpa(item, row) {
    const phraseOverride = ipaPhraseOverrides[`${item.key}:${row.pronoun}`];
    if (phraseOverride) return phraseOverride;

    const verbIpa = getVerbFormIpa(item, row.pronoun);
    const pronounForms = subjectIpa[row.pronoun];
    if (!pronounForms) throw new Error(`No subject IPA is registered for ${row.pronoun}.`);

    const beginsWithVowel = isVowelInitialIpa(verbIpa);
    const subject = pronounForms[beginsWithVowel ? "vowel" : "consonant"];
    const separator = subject.endsWith("‿") || (row.pronoun === "je" && beginsWithVowel)
      ? ""
      : " ";
    return `/${subject}${separator}${verbIpa}/`;
  }

  function capitalizeFirst(value) {
    const text = String(value || "");
    return text ? `${text.charAt(0).toLocaleUpperCase("fr-FR")}${text.slice(1)}` : text;
  }

  function getFallbackEnglishBase(item) {
    const sourceRow = findRow(item, "nous");
    const rowMeaning = String(sourceRow && sourceRow.en || "").trim();
    if (/^we\s+/i.test(rowMeaning)) return rowMeaning.replace(/^we\s+/i, "");

    const titleMeaning = String(item.title || "").split("—")[1] || "";
    return titleMeaning
      .trim()
      .replace(/^to\s+/i, "")
      .split(" / ")[0]
      .trim() || "use this verb";
  }

  function makeNegativeNous(row) {
    const negativeMarker = isVowelInitialSpelling(row.form) ? "n’" : "ne ";
    return `Nous ${negativeMarker}${row.form} pas`;
  }

  function usesInversionQuestion(item) {
    return Array.from(String(item.key || ""))
      .reduce((total, character) => total + character.codePointAt(0), 0) % 2 === 0;
  }

  function createDerivedExamples(item, rows) {
    const override = exampleOverrides[item.key];
    if (override) return override;

    const row = rows.find(entry => entry.pronoun === "nous");
    if (!row) {
      throw new Error(`${item.label || item.key} needs a nous row or an Imparfait example override.`);
    }

    const usage = exampleUsage[item.key] || Object.freeze([
      "régulièrement",
      `${getFallbackEnglishBase(item)} regularly`
    ]);
    const [frComplement, enPredicate] = usage;
    const questionFr = usesInversionQuestion(item)
      ? `${capitalizeFirst(row.form)}-nous ${frComplement} à cette époque ?`
      : `Est-ce que ${row.full} ${frComplement} à cette époque ?`;
    return exampleSet(
      `Autrefois, ${row.full} ${frComplement}.`,
      `We used to ${enPredicate}.`,
      `${makeNegativeNous(row)} ${frComplement}.`,
      `We did not use to ${enPredicate}.`,
      questionFr,
      `Did we use to ${enPredicate} at that time?`
    );
  }

  function deriveStem(item, options) {
    if (typeof options.stemOverride === "string") {
      return {
        stem: options.stemOverride,
        sourceRow: null,
        sourceText: options.formulaSource || item.label,
        sourceKind: "override"
      };
    }

    const sourceItem = options.sourceItem || item;
    const sourceRow = findRow(sourceItem, "nous");
    if (!sourceRow) {
      throw new Error(`${item.label || item.key} needs a present nous form or stemOverride.`);
    }

    const sourceForm = getLexicalForm(sourceRow);
    if (!sourceForm.endsWith("ons")) {
      throw new Error(`${sourceRow.full || sourceForm} does not end in -ons.`);
    }

    return {
      stem: sourceForm.slice(0, -3),
      sourceRow,
      sourceText: options.formulaSource || sourceRow.full,
      sourceKind: "present-nous"
    };
  }

  function inferRuleIds(item, stem, options) {
    const ids = [];
    const isEtre = item.key === "etreVerb" || options.baseKey === "etreVerb";

    if (isEtre) ids.push("etre-stem");
    if (isEtre && (options.persons || []).some(person => person === "nous" || person === "vous")) {
      ids.push("etre-t");
    }
    if (stem.endsWith("ge")) ids.push("soft-g");
    if (stem.endsWith("ç")) ids.push("soft-c");
    if (stem.endsWith("i")) ids.push("double-written-i");
    if (stem.endsWith("y")) ids.push("y-plus-i");
    if (stem.endsWith("ill")) ids.push("ill-plus-i");
    if (stem.endsWith("gn")) ids.push("gn-plus-i");
    if (presentAlternations[item.key]) ids.push("present-nous-stem");
    (options.additionalRuleIds || []).forEach(id => ids.push(id));

    return Array.from(new Set(ids));
  }

  function inflectStem(stem, ending, ruleIds) {
    let surfaceStem = stem;
    const startsWithI = ending.startsWith("i");

    if (startsWithI && ruleIds.includes("soft-g") && surfaceStem.endsWith("ge")) {
      surfaceStem = surfaceStem.slice(0, -1);
    }
    if (startsWithI && ruleIds.includes("soft-c") && surfaceStem.endsWith("ç")) {
      surfaceStem = `${surfaceStem.slice(0, -1)}c`;
    }

    return `${surfaceStem}${ending}`;
  }

  function getDefaultPersons(item) {
    const available = new Set((item.rows || []).map(row => normalizePronoun(row.pronoun)));
    return personOrder.filter(person => available.has(person));
  }

  function composeFullForm(item, pronoun, verbForm, options) {
    if (typeof options.composeFull === "function") {
      return options.composeFull({ item, pronoun, verbForm });
    }

    const sourceRow = findRow(item, pronoun);
    let prefix = getPrefixFromPresentRow(sourceRow);
    if (pronoun === "je" && prefix === "je " && /^[aeiouàâäéèêëîïôöùûüœ]/i.test(verbForm)) {
      prefix = "j’";
    }
    if (!prefix) prefix = `${pronoun} `;
    return `${prefix}${verbForm}`;
  }

  function createRuleMetadata(item, ruleIds) {
    return ruleIds.map(id => {
      const base = ruleCatalog[id];
      if (!base) {
        return {
          id,
          kind: "special",
          title: id,
          note: "Special imparfait rule."
        };
      }

      if (id !== "present-nous-stem") return { ...base };
      const alternation = presentAlternations[item.key];
      return {
        ...base,
        note: `${alternation.present} -> ${alternation.nous} -> ${alternation.imparfait}. The imparfait returns to the nous stem.`
      };
    });
  }

  function deriveRows(item, options = {}) {
    if (!item || !item.key || !Array.isArray(item.rows)) {
      throw new Error("deriveRows needs a verb item with key and rows.");
    }

    const persons = options.persons || getDefaultPersons(item);
    const stemData = deriveStem(item, { ...options, persons });
    const ruleIds = inferRuleIds(item, stemData.stem, { ...options, persons });

    const rows = persons.map(pronoun => {
      const ending = endings[pronoun];
      if (!ending) throw new Error(`No imparfait ending is registered for ${pronoun}.`);
      const verbForm = inflectStem(stemData.stem, ending, ruleIds);
      const full = composeFullForm(item, pronoun, verbForm, options);
      const row = {
        pronoun,
        form: verbForm,
        full,
        stem: stemData.stem,
        ending,
        sourcePresent: findRow(item, pronoun) && findRow(item, pronoun).full || "",
        specialRuleIds: ruleIds.filter(id => {
          if (["double-written-i", "y-plus-i", "ill-plus-i", "gn-plus-i", "etre-t"].includes(id)) {
            return pronoun === "nous" || pronoun === "vous";
          }
          return true;
        })
      };
      return options.skipIpa ? row : { ...row, ipa: buildRowIpa(item, row) };
    });

    return {
      rows,
      stem: stemData.stem,
      formula: {
        kind: stemData.sourceKind,
        source: stemData.sourceText,
        stem: `${stemData.stem}-`,
        text: stemData.sourceKind === "present-nous"
          ? `${stemData.sourceText} -> remove -ons -> ${stemData.stem}- + imparfait endings`
          : `${stemData.sourceText} -> special stem ${stemData.stem}- + imparfait endings`
      },
      specialRules: createRuleMetadata(item, ruleIds)
    };
  }

  function deriveItem(item) {
    const impersonal = impersonalMappings[item.key];
    let options = {};

    if (item.key === "etreVerb") {
      options = { stemOverride: "ét", formulaSource: "être" };
    } else if (impersonal) {
      const sourceItem = impersonal.baseKey ? findItemByKey(impersonal.baseKey) : item;
      if (!sourceItem) throw new Error(`Missing imparfait base verb ${impersonal.baseKey}.`);
      options = {
        ...impersonal,
        sourceItem,
        composeFull: ({ verbForm }) => `${impersonal.prefix}${verbForm}`
      };
    }

    const derived = deriveRows(item, options);
    const specialRules = [...derived.specialRules];
    if (impersonal && impersonal.note) {
      specialRules.unshift({
        id: "fixed-impersonal",
        kind: "usage",
        title: "Fixed impersonal form",
        note: impersonal.note
      });
    }

    return {
      key: item.key,
      group: item.group,
      label: item.label,
      title: item.title,
      tag: item.tag || "",
      sourceItem: item,
      rows: derived.rows,
      examples: createDerivedExamples(item, derived.rows),
      stem: derived.stem,
      formula: derived.formula,
      specialRules,
      hasOn: derived.rows.some(row => row.pronoun === "on")
    };
  }

  function buildData() {
    const verbRegistry = FR.data.verbs;
    if (!verbRegistry || !Array.isArray(verbRegistry.items) || !Array.isArray(verbRegistry.groups)) {
      throw new Error("FR.data.verbs must be registered before js/data/imparfait.js.");
    }

    const errors = [];
    const sourceItems = verbRegistry.items.filter(item => item.group !== "pronominal");
    const items = sourceItems.map(item => {
      try {
        return deriveItem(item);
      } catch (error) {
        errors.push({ key: item.key, label: item.label, error });
        return {
          key: item.key,
          group: item.group,
          label: item.label,
          title: item.title,
          sourceItem: item,
          rows: [],
          examples: {},
          specialRules: [],
          error
        };
      }
    });

    const groups = verbRegistry.groups
      .filter(group => group.key !== "pronominal")
      .map(group => ({
        key: group.key,
        title: group.title,
        indexTitle: group.indexTitle || group.title,
        descriptionHtml: group.descriptionHtml || "",
        items: items
          .filter(item => item.group === group.key)
          .sort((a, b) => a.label.localeCompare(b.label, "fr"))
      }));

    return { groups, items, errors };
  }

  try {
    const built = buildData();
    FR.data.imparfait = {
      endings,
      personOrder,
      alignedPairs,
      ruleCatalog,
      presentAlternations,
      impersonalMappings,
      ipaEndings,
      ipaStems,
      ipaVerbFormOverrides,
      ipaPhraseOverrides,
      subjectIpa,
      exampleUsage,
      exampleOverrides,
      groups: built.groups,
      items: built.items,
      errors: built.errors,
      deriveRows,
      deriveItem,
      deriveStemIpaFromPresent,
      resolveStemIpa,
      getVerbFormIpa,
      buildRowIpa,
      createDerivedExamples,
      usesInversionQuestion,
      getItem(key) {
        return built.items.find(item => item.key === key) || null;
      }
    };
  } catch (error) {
    console.error("Imparfait data failed to initialize", error);
    FR.data.imparfait = {
      endings,
      personOrder,
      alignedPairs,
      ruleCatalog,
      presentAlternations,
      impersonalMappings,
      ipaEndings,
      ipaStems,
      ipaVerbFormOverrides,
      ipaPhraseOverrides,
      subjectIpa,
      exampleUsage,
      exampleOverrides,
      groups: [],
      items: [],
      errors: [{ key: "initialization", label: "Imparfait", error }],
      deriveRows,
      deriveItem,
      deriveStemIpaFromPresent,
      resolveStemIpa,
      getVerbFormIpa,
      buildRowIpa,
      createDerivedExamples,
      usesInversionQuestion,
      getItem() {
        return null;
      }
    };
  }
})(window);
