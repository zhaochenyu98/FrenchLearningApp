(function initializeFuturSimpleData(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.data = FR.data || {};

  const endings = Object.freeze({
    je: "ai",
    tu: "as",
    il: "a",
    elle: "a",
    on: "a",
    nous: "ons",
    vous: "ez",
    ils: "ont",
    elles: "ont"
  });

  const endingIpa = Object.freeze({
    je: "e",
    tu: "a",
    il: "a",
    elle: "a",
    on: "a",
    nous: "ɔ̃",
    vous: "e",
    ils: "ɔ̃",
    elles: "ɔ̃"
  });

  const alignedPairs = Object.freeze([
    Object.freeze(["je", "nous"]),
    Object.freeze(["tu", "vous"]),
    Object.freeze(["il", "ils"]),
    Object.freeze(["elle", "elles"])
  ]);

  const ruleCatalog = Object.freeze({
    "infinitive-stem": Object.freeze({
      id: "infinitive-stem",
      title: "Most -er and -ir verbs keep the infinitive",
      note: "Add -ai, -as, -a, -ons, -ez, or -ont to the infinitive: parler → je parlerai; finir → nous finirons."
    }),
    "drop-final-e": Object.freeze({
      id: "drop-final-e",
      title: "Infinitives ending in -e drop that final e",
      note: "Remove only the final written e, then add the future ending: attendre → attendr- → j’attendrai; écrire → écrir- → nous écrirons."
    }),
    "irregular-stem": Object.freeze({
      id: "irregular-stem",
      title: "High-frequency verbs can use a special future stem",
      note: "Memorize forms such as ser-, aur-, ir-, fer-, viendr-, pourr-, voudr-, saur-, verr-, mourr-, faudr-, and pleuvr-. The endings stay regular."
    }),
    "e-to-grave": Object.freeze({
      id: "e-to-grave",
      title: "Some -er verbs change e to è",
      note: "The stem change appears in every future person: acheter → achèter-, lever → lèver-, promener → promèner-."
    }),
    "double-consonant": Object.freeze({
      id: "double-consonant",
      title: "Appeler doubles the l",
      note: "Keep appeller- throughout the future: je m’appellerai, nous nous appellerons, elles s’appelleront."
    }),
    "y-to-i": Object.freeze({
      id: "y-to-i",
      title: "-uyer changes y to i",
      note: "S’ennuyer uses ennuier- before every future ending: je m’ennuierai, nous nous ennuierons."
    }),
    "preferer-spelling": Object.freeze({
      id: "preferer-spelling",
      title: "Préférer has two accepted spellings",
      note: "This app uses the traditional préférer- forms: je préférerai. The rectified spelling je préfèrerai is also accepted."
    }),
    "inquieter-spelling": Object.freeze({
      id: "inquieter-spelling",
      title: "S’inquiéter has two accepted future spellings",
      note: "This app uses the traditional inquiéter- forms: je m’inquiéterai. The rectified spelling je m’inquièterai is also accepted."
    }),
    "pronominal-order": Object.freeze({
      id: "pronominal-order",
      title: "Keep the reflexive pronoun before the future verb",
      note: "Use me, te, se, nous, vous, se before the conjugated form: je me laverai; nous nous verrons; elles se souviendront."
    }),
    "impersonal-only": Object.freeze({
      id: "impersonal-only",
      title: "Impersonal expressions keep fixed il",
      note: "These entries do not build a full person table: il faudra, il y aura, il fera, il sera, il pleuvra."
    }),
    "future-pronunciation": Object.freeze({
      id: "future-pronunciation",
      title: "The endings have a small set of sounds",
      note: "-ai and -ez end in /e/; -as and -a end in /a/; -ons and -ont end in /ɔ̃/. Final written s and t are silent."
    })
  });

  const stemOverrides = Object.freeze({
    etreVerb: Object.freeze({ stem: "ser", ipa: "səʁ" }),
    avoirVerb: Object.freeze({ stem: "aur", ipa: "oʁ" }),
    aller: Object.freeze({ stem: "ir", ipa: "iʁ" }),
    venir: Object.freeze({ stem: "viendr", ipa: "vjɛ̃dʁ" }),
    tenir: Object.freeze({ stem: "tiendr", ipa: "tjɛ̃dʁ" }),
    revenir: Object.freeze({ stem: "reviendr", ipa: "ʁəvjɛ̃dʁ" }),
    devenir: Object.freeze({ stem: "deviendr", ipa: "dəvjɛ̃dʁ" }),
    faire: Object.freeze({ stem: "fer", ipa: "fəʁ" }),
    devoir: Object.freeze({ stem: "devr", ipa: "dəvʁ" }),
    pouvoir: Object.freeze({ stem: "pourr", ipa: "puʁ" }),
    vouloir: Object.freeze({ stem: "voudr", ipa: "vudʁ" }),
    savoir: Object.freeze({ stem: "saur", ipa: "soʁ" }),
    voir: Object.freeze({ stem: "verr", ipa: "vɛʁ" }),
    mourir: Object.freeze({ stem: "mourr", ipa: "muʁ" }),
    falloir: Object.freeze({ stem: "faudr", ipa: "fodʁ" }),
    ilYA: Object.freeze({ stem: "aur", ipa: "oʁ" }),
    impersonalFaire: Object.freeze({ stem: "fer", ipa: "fəʁ" }),
    impersonalEtre: Object.freeze({ stem: "ser", ipa: "səʁ" }),
    pleuvoir: Object.freeze({ stem: "pleuvr", ipa: "pløvʁ" }),
    seSouvenir: Object.freeze({ stem: "souviendr", ipa: "suvjɛ̃dʁ" }),
    seVoir: Object.freeze({ stem: "verr", ipa: "vɛʁ" })
  });

  const spellingOverrides = Object.freeze({
    acheter: Object.freeze({ stem: "achèter", ipa: "aʃɛtʁ", ruleId: "e-to-grave" }),
    seLever: Object.freeze({ stem: "lèver", ipa: "lɛvʁ", ruleId: "e-to-grave" }),
    sePromener: Object.freeze({ stem: "promèner", ipa: "pʁɔmɛnʁ", ruleId: "e-to-grave" }),
    sAppeler: Object.freeze({ stem: "appeller", ipa: "apɛlʁ", ruleId: "double-consonant" }),
    sEnnuyer: Object.freeze({ stem: "ennuier", ipa: "ɑ̃nɥiʁ", ruleId: "y-to-i" })
  });

  const ipaOnlyOverrides = Object.freeze({
    jouer: "ʒuʁ",
    seMarier: "maʁiʁ"
  });

  const impersonalForms = Object.freeze({
    falloir: Object.freeze({ prefix: "il ", baseInfinitive: "falloir" }),
    ilYA: Object.freeze({ prefix: "il y ", baseInfinitive: "avoir" }),
    impersonalFaire: Object.freeze({ prefix: "il ", baseInfinitive: "faire" }),
    impersonalEtre: Object.freeze({ prefix: "il ", baseInfinitive: "être" }),
    pleuvoir: Object.freeze({ prefix: "il ", baseInfinitive: "pleuvoir" })
  });

  const subjectIpa = Object.freeze({
    je: Object.freeze({ consonant: "ʒə ", vowel: "ʒ" }),
    tu: Object.freeze({ consonant: "ty ", vowel: "ty " }),
    il: Object.freeze({ consonant: "il ", vowel: "il " }),
    elle: Object.freeze({ consonant: "ɛl ", vowel: "ɛl " }),
    on: Object.freeze({ consonant: "ɔ̃ ", vowel: "ɔ̃n‿" }),
    nous: Object.freeze({ consonant: "nu ", vowel: "nuz‿" }),
    vous: Object.freeze({ consonant: "vu ", vowel: "vuz‿" }),
    ils: Object.freeze({ consonant: "il ", vowel: "ilz‿" }),
    elles: Object.freeze({ consonant: "ɛl ", vowel: "ɛlz‿" })
  });

  const reflexiveIpa = Object.freeze({
    je: Object.freeze({ full: "ʒə mə ", elided: "ʒ m" }),
    tu: Object.freeze({ full: "ty tə ", elided: "ty t" }),
    il: Object.freeze({ full: "il sə ", elided: "il s" }),
    elle: Object.freeze({ full: "ɛl sə ", elided: "ɛl s" }),
    nous: Object.freeze({ full: "nu nu ", elided: "nu nu " }),
    vous: Object.freeze({ full: "vu vu ", elided: "vu vu " }),
    ils: Object.freeze({ full: "il sə ", elided: "il s" }),
    elles: Object.freeze({ full: "ɛl sə ", elided: "ɛl s" })
  });

  const reflexiveWritten = Object.freeze({
    je: Object.freeze({ full: "je me ", elided: "je m’" }),
    tu: Object.freeze({ full: "tu te ", elided: "tu t’" }),
    il: Object.freeze({ full: "il se ", elided: "il s’" }),
    elle: Object.freeze({ full: "elle se ", elided: "elle s’" }),
    nous: Object.freeze({ full: "nous nous ", elided: "nous nous " }),
    vous: Object.freeze({ full: "vous vous ", elided: "vous vous " }),
    ils: Object.freeze({ full: "ils se ", elided: "ils s’" }),
    elles: Object.freeze({ full: "elles se ", elided: "elles s’" })
  });

  const pronominalUsage = Object.freeze({
    seLaver: Object.freeze(["avant de dîner", "wash before dinner"]),
    seLever: Object.freeze(["plus tôt", "get up earlier"]),
    seReposer: Object.freeze(["après le voyage", "rest after the trip"]),
    sHabiller: Object.freeze(["avant le dîner", "get dressed before dinner"]),
    seTrouver: Object.freeze(["devant la gare", "be in front of the station"]),
    sePromener: Object.freeze(["au bord de la mer", "take a walk by the sea"]),
    sAimer: Object.freeze(["encore dans dix ans", "still love each other in ten years"]),
    seConnaitre: Object.freeze(["beaucoup mieux", "know each other much better"]),
    seMarier: Object.freeze(["l’année prochaine", "get married next year"]),
    seVoir: Object.freeze(["samedi prochain", "see each other next Saturday"]),
    seRegarder: Object.freeze(["dans le miroir", "look at ourselves in the mirror"]),
    seDire: Object.freeze(["la vérité", "tell each other the truth"]),
    seSouvenir: Object.freeze(["de ce voyage", "remember this trip"]),
    sAssumer: Object.freeze(["davantage", "accept ourselves more fully"]),
    sEnnuyer: Object.freeze(["pendant le trajet", "get bored during the trip"]),
    sInquieter: Object.freeze(["pour notre famille", "worry about our family"]),
    seDetendre: Object.freeze(["après le travail", "relax after work"]),
    seCalmer: Object.freeze(["dans quelques minutes", "calm down in a few minutes"]),
    seBaigner: Object.freeze(["demain matin", "go swimming tomorrow morning"])
  });

  const customExamples = Object.freeze({
    etreVerb: Object.freeze({
      statement: Object.freeze({ fr: "Demain, nous serons à Lyon.", en: "Tomorrow, we will be in Lyon." }),
      negative: Object.freeze({ fr: "Demain, nous ne serons pas à Lyon.", en: "Tomorrow, we will not be in Lyon." }),
      question: Object.freeze({ fr: "Serons-nous à Lyon demain ?", en: "Will we be in Lyon tomorrow?" })
    }),
    avoirVerb: Object.freeze({
      statement: Object.freeze({ fr: "La semaine prochaine, nous aurons plus de temps.", en: "Next week, we will have more time." }),
      negative: Object.freeze({ fr: "La semaine prochaine, nous n’aurons pas plus de temps.", en: "Next week, we will not have more time." }),
      question: Object.freeze({ fr: "Aurons-nous plus de temps la semaine prochaine ?", en: "Will we have more time next week?" })
    }),
    couter: Object.freeze({
      statement: Object.freeze({ fr: "Le billet coûtera trente euros.", en: "The ticket will cost thirty euros." }),
      negative: Object.freeze({ fr: "Le billet ne coûtera pas trente euros.", en: "The ticket will not cost thirty euros." }),
      question: Object.freeze({ fr: "Combien coûtera le billet ?", en: "How much will the ticket cost?" })
    }),
    naitre: Object.freeze({
      statement: Object.freeze({ fr: "Le bébé naîtra en septembre.", en: "The baby will be born in September." }),
      negative: Object.freeze({ fr: "Le bébé ne naîtra pas avant septembre.", en: "The baby will not be born before September." }),
      question: Object.freeze({ fr: "Quand le bébé naîtra-t-il ?", en: "When will the baby be born?" })
    }),
    mourir: Object.freeze({
      statement: Object.freeze({ fr: "Sans eau, cette plante mourra.", en: "Without water, this plant will die." }),
      negative: Object.freeze({ fr: "Avec assez d’eau, cette plante ne mourra pas.", en: "With enough water, this plant will not die." }),
      question: Object.freeze({ fr: "Cette plante mourra-t-elle sans eau ?", en: "Will this plant die without water?" })
    }),
    falloir: Object.freeze({
      statement: Object.freeze({ fr: "Il faudra réserver une table demain.", en: "We will need to reserve a table tomorrow." }),
      negative: Object.freeze({ fr: "Il ne faudra pas arriver en retard.", en: "We must not arrive late." }),
      question: Object.freeze({ fr: "Faudra-t-il réserver une table ?", en: "Will it be necessary to reserve a table?" })
    }),
    ilYA: Object.freeze({
      statement: Object.freeze({ fr: "Il y aura une réunion demain.", en: "There will be a meeting tomorrow." }),
      negative: Object.freeze({ fr: "Il n’y aura pas de réunion demain.", en: "There will not be a meeting tomorrow." }),
      question: Object.freeze({ fr: "Y aura-t-il une réunion demain ?", en: "Will there be a meeting tomorrow?" })
    }),
    impersonalFaire: Object.freeze({
      statement: Object.freeze({ fr: "Il fera beau ce week-end.", en: "The weather will be nice this weekend." }),
      negative: Object.freeze({ fr: "Il ne fera pas beau ce week-end.", en: "The weather will not be nice this weekend." }),
      question: Object.freeze({ fr: "Fera-t-il beau ce week-end ?", en: "Will the weather be nice this weekend?" })
    }),
    impersonalEtre: Object.freeze({
      statement: Object.freeze({ fr: "Il sera neuf heures quand nous partirons.", en: "It will be nine o’clock when we leave." }),
      negative: Object.freeze({ fr: "Il ne sera pas encore neuf heures.", en: "It will not be nine o’clock yet." }),
      question: Object.freeze({ fr: "Sera-t-il déjà neuf heures ?", en: "Will it already be nine o’clock?" })
    }),
    pleuvoir: Object.freeze({
      statement: Object.freeze({ fr: "Il pleuvra demain matin.", en: "It will rain tomorrow morning." }),
      negative: Object.freeze({ fr: "Il ne pleuvra pas demain matin.", en: "It will not rain tomorrow morning." }),
      question: Object.freeze({ fr: "Pleuvra-t-il demain matin ?", en: "Will it rain tomorrow morning?" })
    }),
    sAppeler: Object.freeze({
      statement: Object.freeze({ fr: "Notre fille s’appellera Léa.", en: "Our daughter will be called Léa." }),
      negative: Object.freeze({ fr: "Notre fille ne s’appellera pas Emma.", en: "Our daughter will not be called Emma." }),
      question: Object.freeze({ fr: "Comment s’appellera-t-elle ?", en: "What will her name be?" })
    }),
    sePasser: Object.freeze({
      statement: Object.freeze({ fr: "La réunion se passera bien.", en: "The meeting will go well." }),
      negative: Object.freeze({ fr: "La réunion ne se passera pas en ligne.", en: "The meeting will not take place online." }),
      question: Object.freeze({ fr: "Comment se passera la réunion ?", en: "How will the meeting go?" })
    }),
    seVendre: Object.freeze({
      statement: Object.freeze({ fr: "Ces billets se vendront rapidement.", en: "These tickets will sell quickly." }),
      negative: Object.freeze({ fr: "Ces billets ne se vendront pas en ligne.", en: "These tickets will not be sold online." }),
      question: Object.freeze({ fr: "Se vendront-ils rapidement ?", en: "Will they sell quickly?" })
    }),
    sEnvoler: Object.freeze({
      statement: Object.freeze({ fr: "Les oiseaux s’envoleront au lever du soleil.", en: "The birds will fly away at sunrise." }),
      negative: Object.freeze({ fr: "Les oiseaux ne s’envoleront pas avant le lever du soleil.", en: "The birds will not fly away before sunrise." }),
      question: Object.freeze({ fr: "Quand les oiseaux s’envoleront-ils ?", en: "When will the birds fly away?" })
    })
  });

  const groupCopy = Object.freeze({
    irregular: "These verbs are irregular in the present. In the future, some keep an infinitive-like stem while the most common ones use a special stem to memorize.",
    modal: "Modal verbs use highly useful future stems before another infinitive: je devrai partir, je pourrai venir, je voudrai rester.",
    similar: "Dormir, partir, sortir, servir, and sentir keep their full infinitive as the future stem, even though their present forms change stems.",
    regularEr: "Most -er verbs keep the written infinitive before the future endings. Watch the smaller spelling-change families highlighted on their cards.",
    regularIr: "Regular -ir verbs keep the full infinitive before -ai, -as, -a, -ons, -ez, and -ont.",
    regularRe: "Verbs ending in -re remove the final e before adding the future endings.",
    impersonal: "These fixed expressions use only il, but their future stems are essential: il faudra, il y aura, il fera, il sera, il pleuvra.",
    pronominal: "Keep the reflexive pronoun before the future form. The verb stem follows the same future rule as its non-pronominal base."
  });

  const futureLeads = Object.freeze([
    Object.freeze({ fr: "Demain", en: "Tomorrow" }),
    Object.freeze({ fr: "La semaine prochaine", en: "Next week" }),
    Object.freeze({ fr: "Bientôt", en: "Soon" }),
    Object.freeze({ fr: "À l’avenir", en: "In the future" })
  ]);

  function requireText(value, label) {
    const text = typeof value === "string" ? value.trim() : "";
    if (!text) throw new Error(`${label} is missing.`);
    return text;
  }

  function isPronominal(source) {
    return source.group === "pronominal";
  }

  function baseInfinitive(source) {
    const impersonal = impersonalForms[source.key];
    if (impersonal) return impersonal.baseInfinitive;
    return source.label
      .replace(/^se\s+/iu, "")
      .replace(/^s[’']/iu, "")
      .trim();
  }

  function isElidedPronominal(source) {
    return /^s[’']/iu.test(source.label);
  }

  function startsWithVowelSound(value) {
    return /^[aeiouyhàâäéèêëîïôöùûüœ]/iu.test(value);
  }

  function startsWithIpaVowel(value) {
    return /^[aeiouyɑɛɔœøəɥ]/u.test(String(value).replace(/[.\s]/g, ""));
  }

  function stripIpa(value) {
    return String(value || "").replace(/^\//, "").replace(/\/$/, "").trim();
  }

  function baseInfinitiveIpa(source) {
    const raw = stripIpa(source.passeCompose && source.passeCompose.infinitiveIpa);
    if (!raw) throw new Error(`${source.label} is missing infinitive IPA.`);
    if (!isPronominal(source)) return raw;
    if (raw.startsWith("sə ")) return raw.slice(3);
    if (raw.startsWith("s‿")) return raw.slice(2);
    return raw.startsWith("s") ? raw.slice(1) : raw;
  }

  function deriveStemIpa(source, infinitive, stemConfig) {
    if (stemConfig.ipa) return stemConfig.ipa;
    if (ipaOnlyOverrides[source.key]) return ipaOnlyOverrides[source.key];
    const ipa = baseInfinitiveIpa(source);
    if (infinitive.endsWith("er")) {
      if (!ipa.endsWith("e")) throw new Error(`${source.label} -er infinitive IPA must end in /e/.`);
      return `${ipa.slice(0, -1)}əʁ`;
    }
    return ipa;
  }

  function deriveStemConfig(source) {
    const infinitive = baseInfinitive(source);
    const irregular = stemOverrides[source.key];
    if (irregular) {
      return {
        infinitive,
        stem: irregular.stem,
        ipa: irregular.ipa,
        ruleIds: ["irregular-stem"]
      };
    }

    const spelling = spellingOverrides[source.key];
    if (spelling) {
      return {
        infinitive,
        stem: spelling.stem,
        ipa: spelling.ipa,
        ruleIds: [spelling.ruleId]
      };
    }

    const dropsFinalE = infinitive.endsWith("e");
    const ruleIds = [dropsFinalE ? "drop-final-e" : "infinitive-stem"];
    if (source.key === "preferer") ruleIds.push("preferer-spelling");
    if (source.key === "sInquieter") ruleIds.push("inquieter-spelling");
    const config = {
      infinitive,
      stem: dropsFinalE ? infinitive.slice(0, -1) : infinitive,
      ruleIds
    };
    return { ...config, ipa: deriveStemIpa(source, infinitive, config) };
  }

  function getPersons(source) {
    return impersonalForms[source.key]
      ? ["il"]
      : source.rows.map(row => {
          const normalized = row.pronoun.replace(/[’']/g, "").toLocaleLowerCase("fr");
          return normalized === "j" ? "je" : normalized;
        });
  }

  function buildFullForm(source, person, form) {
    const impersonal = impersonalForms[source.key];
    if (impersonal) return `${impersonal.prefix}${form}`;

    if (isPronominal(source)) {
      const prefix = reflexiveWritten[person];
      if (!prefix) throw new Error(`${source.label} has unsupported pronoun ${person}.`);
      return `${isElidedPronominal(source) ? prefix.elided : prefix.full}${form}`;
    }

    const subject = person === "je" && startsWithVowelSound(form) ? "j’" : person;
    return subject.endsWith("’") ? `${subject}${form}` : `${subject} ${form}`;
  }

  function buildRowIpa(source, person, stemIpa) {
    const core = `${stemIpa}${endingIpa[person]}`;
    if (source.key === "ilYA") return `/il i ${core}/`;
    if (isPronominal(source)) {
      const prefix = reflexiveIpa[person];
      if (!prefix) throw new Error(`${source.label} has unsupported IPA pronoun ${person}.`);
      return `/${isElidedPronominal(source) ? prefix.elided : prefix.full}${core}/`;
    }
    const subject = subjectIpa[person];
    if (!subject) throw new Error(`${source.label} has unsupported IPA pronoun ${person}.`);
    return `/${startsWithIpaVowel(stemIpa) ? subject.vowel : subject.consonant}${core}/`;
  }

  function deriveRows(source, stemConfig) {
    return getPersons(source).map(person => {
      const ending = endings[person];
      if (!ending) throw new Error(`${source.label} has unsupported future person ${person}.`);
      const form = `${stemConfig.stem}${ending}`;
      const full = buildFullForm(source, person, form);
      return Object.freeze({
        pronoun: person,
        ending,
        form,
        full,
        speech: full,
        ipa: buildRowIpa(source, person, stemConfig.ipa)
      });
    });
  }

  function capitalize(value) {
    return value ? `${value.charAt(0).toLocaleUpperCase("fr")}${value.slice(1)}` : value;
  }

  function selectLead(index, complement) {
    if (/\b(?:demain|prochain(?:e)?|dans (?:quelques|\w+) (?:minute|heure|jour|semaine|mois|an)s?)\b/iu.test(complement)) {
      return null;
    }
    if (/\b(?:chaque|toujours|souvent|le (?:lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)|en hiver|avec le temps)\b/iu.test(complement)) {
      return futureLeads[3];
    }
    return futureLeads[index % 3];
  }

  function negateComplement(complement) {
    return complement
      .replace(/^du\s+/iu, "de ")
      .replace(/^de la\s+/iu, "de ")
      .replace(/^de l[’']/iu, "d’")
      .replace(/^des\s+/iu, "de ")
      .replace(/^(?:un|une)\s+([aeiouyhàâäéèêëîïôöùûüœ])/iu, "d’$1")
      .replace(/^(?:un|une)\s+/iu, "de ");
  }

  function createGeneratedExamples(source, rows, usage, index) {
    const row = rows.find(entry => entry.pronoun === "nous");
    if (!row) throw new Error(`${source.label} needs a nous row for generated examples.`);
    const [complement, englishPhrase] = usage;
    const lead = selectLead(index, complement);
    const pronominal = isPronominal(source);
    const negativeVerb = startsWithVowelSound(row.form) ? `n’${row.form}` : `ne ${row.form}`;
    const negativeCore = pronominal
      ? `nous ne nous ${row.form} pas`
      : `nous ${negativeVerb} pas`;
    const negativeUsage = negateComplement(complement);
    const useInversion = index % 2 === 0;
    const questionCore = useInversion
      ? pronominal
        ? `Nous ${row.form}-nous`
        : `${capitalize(row.form)}-nous`
      : pronominal
        ? `Est-ce que nous nous ${row.form}`
        : `Est-ce que nous ${row.form}`;

    const statement = `${row.full} ${complement}.`;
    const negative = `${negativeCore} ${negativeUsage}.`;

    return Object.freeze({
      statement: Object.freeze({
        fr: lead ? `${lead.fr}, ${statement}` : capitalize(statement),
        en: lead ? `${lead.en}, we will ${englishPhrase}.` : `We will ${englishPhrase}.`
      }),
      negative: Object.freeze({
        fr: lead ? `${lead.fr}, ${negative}` : capitalize(negative),
        en: lead ? `${lead.en}, we will not ${englishPhrase}.` : `We will not ${englishPhrase}.`
      }),
      question: Object.freeze({
        fr: `${questionCore} ${complement} ?`,
        en: `Will we ${englishPhrase}?`
      })
    });
  }

  function createExamples(source, rows, index) {
    if (customExamples[source.key]) return customExamples[source.key];
    const usage = isPronominal(source)
      ? pronominalUsage[source.key]
      : FR.data.imparfait && FR.data.imparfait.exampleUsage[source.key];
    if (!usage) throw new Error(`${source.label} is missing futur-simple example usage.`);
    return createGeneratedExamples(source, rows, usage, index);
  }

  function deriveItem(source, index) {
    const stemConfig = deriveStemConfig(source);
    if (!stemConfig.ipa) stemConfig.ipa = deriveStemIpa(source, stemConfig.infinitive, stemConfig);
    const rows = deriveRows(source, stemConfig);
    const ruleIds = [...stemConfig.ruleIds];
    if (isPronominal(source)) ruleIds.push("pronominal-order");
    if (impersonalForms[source.key]) ruleIds.push("impersonal-only");

    return Object.freeze({
      key: requireText(source.key, "Verb key"),
      group: requireText(source.group, `${source.key}.group`),
      label: requireText(source.label, `${source.key}.label`),
      title: `${source.label} — futur simple`,
      infinitive: stemConfig.infinitive,
      stem: stemConfig.stem,
      stemIpa: stemConfig.ipa,
      formula: Object.freeze({
        text: `${stemConfig.infinitive} → ${stemConfig.stem}- + ai / as / a / ons / ez / ont`
      }),
      rows: Object.freeze(rows),
      examples: createExamples(source, rows, index),
      specialRules: Object.freeze(Array.from(new Set(ruleIds)).map(ruleId => ruleCatalog[ruleId]).filter(Boolean))
    });
  }

  function buildData() {
    const registry = FR.data.verbs;
    const sourceItems = registry && Array.isArray(registry.items) ? registry.items : [];
    const sourceGroups = registry && Array.isArray(registry.groups) ? registry.groups : [];
    const items = [];
    const errors = [];

    if (!sourceItems.length || !sourceGroups.length) {
      throw new Error("FR.data.verbs must be registered before js/data/futur-simple.js.");
    }
    if (!FR.data.imparfait || !FR.data.imparfait.exampleUsage) {
      throw new Error("FR.data.imparfait must be registered before js/data/futur-simple.js.");
    }

    sourceItems.forEach((source, index) => {
      try {
        items.push(deriveItem(source, index));
      } catch (error) {
        errors.push({ key: source && source.key, label: source && source.label, error });
      }
    });

    const groups = sourceGroups.map(group => Object.freeze({
      key: group.key,
      title: group.title,
      indexTitle: group.indexTitle || group.title,
      descriptionHtml: groupCopy[group.key] || group.descriptionHtml || "",
      items: Object.freeze(items
        .filter(item => item.group === group.key)
        .sort((a, b) => a.label.localeCompare(b.label, "fr")))
    })).filter(group => group.items.length);

    return { items: Object.freeze(items), groups: Object.freeze(groups), errors: Object.freeze(errors) };
  }

  try {
    const built = buildData();
    const itemByKey = new Map(built.items.map(item => [item.key, item]));
    FR.data.futurSimple = Object.freeze({
      endings,
      endingIpa,
      alignedPairs,
      ruleCatalog,
      stemOverrides,
      spellingOverrides,
      groups: built.groups,
      items: built.items,
      errors: built.errors,
      deriveStemConfig,
      deriveRows,
      getItem(key) {
        return itemByKey.get(key) || null;
      }
    });
  } catch (error) {
    console.error("Futur simple data failed to initialize", error);
    FR.data.futurSimple = Object.freeze({
      endings,
      endingIpa,
      alignedPairs,
      ruleCatalog,
      stemOverrides,
      spellingOverrides,
      groups: Object.freeze([]),
      items: Object.freeze([]),
      errors: Object.freeze([{ key: "initialization", label: "Futur simple", error }]),
      deriveStemConfig,
      deriveRows,
      getItem() {
        return null;
      }
    });
  }
})(window);
