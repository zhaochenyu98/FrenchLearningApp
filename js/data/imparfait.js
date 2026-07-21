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
    "je", "tu", "il", "elle", "nous", "on", "vous", "ils", "elles"
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
    reserver: Object.freeze({
      present: "je réserve",
      nous: "nous réservons",
      imparfait: "je réservais"
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
      return {
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
      groups: built.groups,
      items: built.items,
      errors: built.errors,
      deriveRows,
      deriveItem,
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
      groups: [],
      items: [],
      errors: [{ key: "initialization", label: "Imparfait", error }],
      deriveRows,
      deriveItem,
      getItem() {
        return null;
      }
    };
  }
})(window);
