(function registerSimpleTenseMorphology(global) {
  "use strict";
  // Neutral morphology shared by future and conditional; neither loads the other.
  const endings = Object.freeze({
    je: "ai",
    tu: "as",
    il: "a",
    elle: "a",
    on: "a",
    ça: "a",
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
    ça: "a",
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

  const stemOverrides = Object.freeze({
    envoyer: Object.freeze({ stem: "enverr", ipa: "ɑ̃vɛʁ" }),
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
    payer: Object.freeze({ stem: "paier", ipa: "pɛʁ", ruleId: "ayer-optional" }),
    acheter: Object.freeze({ stem: "achèter", ipa: "aʃɛtʁ", ruleId: "e-to-grave" }),
    essayer: Object.freeze({ stem: "essaier", ipa: "esɛʁ", ruleId: "ayer-optional" }),
    seLever: Object.freeze({ stem: "lèver", ipa: "lɛvʁ", ruleId: "e-to-grave" }),
    sePromener: Object.freeze({ stem: "promèner", ipa: "pʁɔmɛnʁ", ruleId: "e-to-grave" }),
    sAppeler: Object.freeze({ stem: "appeller", ipa: "apɛlʁ", ruleId: "double-consonant" }),
    seRappeler: Object.freeze({ stem: "rappeller", ipa: "ʁapɛlʁ", ruleId: "double-consonant" }),
    sEnnuyer: Object.freeze({ stem: "ennuier", ipa: "ɑ̃nɥiʁ", ruleId: "y-to-i" })
  });

  const ipaOnlyOverrides = Object.freeze({
    aimer: "ɛməʁ",
    jouer: "ʒuʁ",
    seMarier: "maʁiʁ"
  });

  const impersonalForms = Object.freeze({
    sAgir: Object.freeze({ prefix: "il ", baseInfinitive: "s’agir" }),
    falloir: Object.freeze({ prefix: "il ", baseInfinitive: "falloir" }),
    ilYA: Object.freeze({ prefix: "il y ", baseInfinitive: "avoir" }),
    impersonalFaire: Object.freeze({
      prefix: "il ",
      prefixes: Object.freeze({ il: "il ", ça: "ça " }),
      persons: Object.freeze(["il", "ça"]),
      baseInfinitive: "faire"
    }),
    impersonalEtre: Object.freeze({ prefix: "il ", baseInfinitive: "être" }),
    pleuvoir: Object.freeze({ prefix: "il ", baseInfinitive: "pleuvoir" })
  });

  const subjectIpa = Object.freeze({
    je: Object.freeze({ consonant: "ʒə ", vowel: "ʒ" }),
    tu: Object.freeze({ consonant: "ty ", vowel: "ty " }),
    il: Object.freeze({ consonant: "il ", vowel: "il " }),
    elle: Object.freeze({ consonant: "ɛl ", vowel: "ɛl " }),
    on: Object.freeze({ consonant: "ɔ̃ ", vowel: "ɔ̃n‿" }),
    ça: Object.freeze({ consonant: "sa ", vowel: "sa " }),
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
    nous: Object.freeze({ full: "nu nu ", elided: "nu nuz‿" }),
    vous: Object.freeze({ full: "vu vu ", elided: "vu vuz‿" }),
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
    return source.infinitive
      .replace(/^se\s+/iu, "")
      .replace(/^s[’']/iu, "")
      .trim();
  }

  function isElidedPronominal(source) {
    return /^s[’']/iu.test(source.infinitive);
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
    const raw = stripIpa(source.infinitiveIpa);
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
    const impersonal = impersonalForms[source.key];
    return impersonal
      ? impersonal.persons || ["il"]
      : source.rows.map(row => {
          const normalized = row.pronoun.replace(/[’']/g, "").toLocaleLowerCase("fr");
          return normalized === "j" ? "je" : normalized;
        });
  }

  function buildFullForm(source, person, form) {
    const impersonal = impersonalForms[source.key];
    if (impersonal) {
      return `${impersonal.prefixes && impersonal.prefixes[person] || impersonal.prefix}${form}`;
    }

    if (isPronominal(source)) {
      const prefix = reflexiveWritten[person];
      if (!prefix) throw new Error(`${source.label} has unsupported pronoun ${person}.`);
      return `${isElidedPronominal(source) ? prefix.elided : prefix.full}${form}`;
    }

    const subject = person === "je" && startsWithVowelSound(form) ? "j’" : person;
    return subject.endsWith("’") ? `${subject}${form}` : `${subject} ${form}`;
  }

  function buildRowIpa(source, person, stemIpa, tenseEndingIpa = endingIpa) {
    const core = `${stemIpa}${tenseEndingIpa[person]}`;
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

  function deriveRows(source, stemConfig, tenseEndings = endings, tenseEndingIpa = endingIpa) {
    return getPersons(source).map(person => {
      const ending = tenseEndings[person];
      if (!ending) throw new Error(`${source.label} has unsupported future person ${person}.`);
      const form = `${stemConfig.stem}${ending}`;
      const full = buildFullForm(source, person, form);
      return Object.freeze({
        pronoun: person,
        ending,
        form,
        full,
        speech: full,
        ipa: buildRowIpa(source, person, stemConfig.ipa, tenseEndingIpa)
      });
    });
  }

  global.FR.data.simpleTenseMorphology = Object.freeze({
    endings, endingIpa, alignedPairs, stemOverrides, spellingOverrides, impersonalForms,
    requireText, isPronominal, startsWithVowelSound, deriveStemConfig, deriveStemIpa, deriveRows
  });
})(window);
