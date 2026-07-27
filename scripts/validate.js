const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exitCode = 1;
}

const assetPaths = [
  ...Array.from(html.matchAll(/<link[^>]+href="([^"]+)"/g), match => match[1]),
  ...Array.from(html.matchAll(/<script[^>]+src="([^"]+)"/g), match => match[1])
];

assetPaths.forEach((assetPath) => {
  if (!fs.existsSync(path.join(root, assetPath))) {
    fail(`missing asset referenced by index.html: ${assetPath}`);
  }
});

const scriptPaths = Array.from(
  html.matchAll(/<script[^>]+src="([^"]+)"/g),
  match => match[1]
);
if (scriptPaths[0] !== "js/core/namespace.js") {
  fail("js/core/namespace.js must load before all other scripts");
}
const combinedJavaScript = scriptPaths
  .map(scriptPath => fs.readFileSync(path.join(root, scriptPath), "utf8"))
  .join("\n");

try {
  new Function(combinedJavaScript);
} catch (error) {
  fail(`JavaScript does not parse: ${error.message}`);
}

const ids = Array.from(html.matchAll(/id="([^"]+)"/g), match => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) {
  fail(`duplicate IDs: ${Array.from(new Set(duplicateIds)).join(", ")}`);
}

const idSet = new Set(ids);
const referencedIds = Array.from(
  combinedJavaScript.matchAll(/getElementById\("([^"]+)"\)/g),
  match => match[1]
);
const configuredIds = Array.from(
  combinedJavaScript.matchAll(/playButtonId: "([^"]+)"/g),
  match => match[1]
);
const missingIds = Array.from(
  new Set([...referencedIds, ...configuredIds].filter(id => !idSet.has(id)))
);
if (missingIds.length) {
  fail(`JavaScript references IDs missing from index.html: ${missingIds.join(", ")}`);
}

function getDataTabs(tagPattern, className) {
  return Array.from(html.matchAll(tagPattern), match => match[0])
    .filter(tag => new RegExp(`class="[^"]*\\b${className}\\b[^"]*"`).test(tag))
    .map(tag => (tag.match(/data-tab="([^"]+)"/) || [])[1])
    .filter(Boolean);
}

const tabNames = getDataTabs(/<button\b[^>]*>/g, "tab-btn");
const sectionTabNames = getDataTabs(/<section\b[^>]*>/g, "section");
const missingSections = tabNames.filter(tabName => !sectionTabNames.includes(tabName));
const missingButtons = sectionTabNames.filter(tabName => !tabNames.includes(tabName));
const duplicateTabs = tabNames.filter((tabName, index) => tabNames.indexOf(tabName) !== index);
const duplicateSectionTabs = sectionTabNames.filter(
  (tabName, index) => sectionTabNames.indexOf(tabName) !== index
);

if (missingSections.length) {
  fail(`tabs without matching sections: ${missingSections.join(", ")}`);
}
if (missingButtons.length) {
  fail(`sections without matching tabs: ${missingButtons.join(", ")}`);
}
if (duplicateTabs.length || duplicateSectionTabs.length) {
  fail("duplicate data-tab values found");
}

if (/\sstyle="/.test(html)) {
  fail("inline style attributes found; use reusable classes in styles.css");
}

function canonicalVerbName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase()
    .replace(/^s'/, "se ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeComparableSentence(value) {
  return String(value || "")
    .replace(/[’]/g, "'")
    .replace(/[.!?…,:;]+$/u, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadGrammarAndTenseData() {
  const context = { FR: { data: {} }, window: {} };
  context.window.FR = context.FR;
  vm.createContext(context);
  const grammarCode = ["pronouns.js", "verbs.js", "grammar.js"]
    .map(fileName => fs.readFileSync(path.join(root, "js/data", fileName), "utf8"))
    .join("\n");
  const tenseCode = fs.readFileSync(path.join(root, "js/data/tenses.js"), "utf8");
  vm.runInContext(`${grammarCode}\nthis.__grammar = { verbStudyItems, verbStudyGroups, verbPhraseIpa };`, context);
  vm.runInContext(`${tenseCode}\nthis.__tense = { passeComposeGroups, etreAuxiliaryVerbs };`, context);
  return {
    verbStudyItems: context.__grammar.verbStudyItems,
    verbStudyGroups: context.__grammar.verbStudyGroups,
    verbPhraseIpa: context.__grammar.verbPhraseIpa,
    passeComposeGroups: context.__tense.passeComposeGroups,
    etreAuxiliaryVerbs: context.__tense.etreAuxiliaryVerbs
  };
}

function duplicates(values) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

function validateVerbContent() {
  const { verbStudyItems, verbStudyGroups, verbPhraseIpa } = loadGrammarAndTenseData();
  const duplicateKeys = duplicates(verbStudyItems.map(item => item.key));
  if (duplicateKeys.length) {
    fail(`duplicate verb keys: ${Array.from(new Set(duplicateKeys)).join(", ")}`);
  }

  const knownGroups = new Set(verbStudyGroups.map(group => group.key));
  const invalidGroups = verbStudyItems
    .filter(item => !knownGroups.has(item.group))
    .map(item => `${item.label}: ${item.group}`);
  if (invalidGroups.length) {
    fail(`verbs assigned to unknown groups: ${invalidGroups.join(", ")}`);
  }

  const expectedCorePronouns = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
  const incompleteVerbs = [];
  const missingRowContent = [];
  const missingPresentIpa = [];
  const intonationOnlyQuestions = [];

  verbStudyItems.forEach(item => {
    const rows = item.rows || [];
    const pronouns = rows.map(row => row.pronoun.replace(/[’']/g, "").toLowerCase() === "j" ? "je" : row.pronoun);
    const expectedPronouns = item.group === "impersonal"
      ? ["il"]
      : item.label === "être" || item.label === "avoir"
        ? [...expectedCorePronouns, "on"]
        : expectedCorePronouns;
    const missingPronouns = expectedPronouns.filter(pronoun => !pronouns.includes(pronoun));
    if (missingPronouns.length) {
      incompleteVerbs.push(`${item.label}: missing ${missingPronouns.join("/")}`);
    }

    rows.forEach(row => {
      if (!row.full || !row.form || !row.en) {
        missingRowContent.push(`${item.label}: ${row.pronoun}`);
      }
      if (!row.ipa && !verbPhraseIpa[row.full]) {
        missingPresentIpa.push(`${item.label}: ${row.full}`);
      }

      const examples = row.examples || [{
        fr: row.example,
        en: row.exampleEn,
        negative: row.negative,
        question: row.question
      }];
      examples.forEach((example, exampleIndex) => {
        const statement = example.statement || example.fr;
        if (!statement || !example.en || !example.negative) {
          missingRowContent.push(`${item.label}: ${row.pronoun} example ${exampleIndex + 1}`);
        }
        if (example.question) {
          const normalizedStatement = statement.replace(/[.!?]\s*$/u, "").trim().toLowerCase();
          const normalizedQuestion = example.question.replace(/[.!?]\s*$/u, "").trim().toLowerCase();
          if (normalizedStatement === normalizedQuestion) {
            intonationOnlyQuestions.push(`${item.label}: ${example.question}`);
          }
        }
      });
    });
  });

  if (incompleteVerbs.length) fail(`incomplete present-tense paradigms: ${incompleteVerbs.join("; ")}`);
  if (missingRowContent.length) fail(`verb rows missing required content: ${missingRowContent.join("; ")}`);
  if (missingPresentIpa.length) fail(`present-tense forms missing IPA: ${missingPresentIpa.join("; ")}`);
  if (intonationOnlyQuestions.length) {
    fail(`verb questions repeat a statement with only a question mark: ${intonationOnlyQuestions.join("; ")}`);
  }

  const reserver = verbStudyItems.find(item => item.key === "reserver");
  const reserverGuidance = JSON.stringify({
    tag: reserver && reserver.tag,
    description: reserver && reserver.descriptionHtml,
    highlights: reserver && reserver.presentHighlights
  });
  if (!reserver || /accent change|becomes[^.]*è/i.test(reserverGuidance)) {
    fail("réserver must not be taught with a nonexistent written accent change");
  }

  const descendre = verbStudyItems.find(item => item.key === "descendre");
  if (!descendre || descendre.group !== "regularRe") {
    fail("descendre must be categorized with regular present-tense -re verbs");
  }

  const expectedIpa = new Map([
    ["nous rêvons", "/nu ʁɛ.vɔ̃/"],
    ["vous rêvez", "/vu ʁɛ.ve/"],
    ["nous arrêtons", "/nu.za.ʁɛ.tɔ̃/"],
    ["vous arrêtez", "/vu.za.ʁɛ.te/"],
    ["nous croyons", "/nu kʁwa.jɔ̃/"],
    ["nous éteignons", "/nu.ze.tɛ.ɲɔ̃/"],
    ["nous nous inquiétons", "/nu nu.zɛ̃.kje.tɔ̃/"]
  ]);
  verbStudyItems.flatMap(item => item.rows || []).forEach(row => {
    if (expectedIpa.has(row.full) && row.ipa !== expectedIpa.get(row.full)) {
      fail(`${row.full} IPA: expected ${expectedIpa.get(row.full)}, found ${row.ipa || "missing"}`);
    }
  });
}

function validateVerbTenseSync() {
  const { verbStudyItems, passeComposeGroups, etreAuxiliaryVerbs } = loadGrammarAndTenseData();
  const impersonalBaseVerbs = new Map([
    ["il faut", "falloir"],
    ["il y a", "avoir"],
    ["il fait", "faire"],
    ["il est", "être"]
  ]);

  const presentEntries = verbStudyItems.map(item => {
    const base = item.syncInfinitive || impersonalBaseVerbs.get(item.label) || item.label;
    return {
      label: item.label,
      base,
      canonical: canonicalVerbName(base),
      presentGroup: item.group
    };
  });

  const tenseEntries = passeComposeGroups.flatMap(group => group.verbs.map(verb => ({
    infinitive: verb.infinitive,
    canonical: canonicalVerbName(verb.infinitive),
    tenseGroup: group.key,
    infinitiveIpa: verb.infinitiveIpa,
    pastParticipleIpa: verb.pastParticipleIpa
  })));

  const presentByVerb = new Map();
  presentEntries.forEach(entry => {
    if (!presentByVerb.has(entry.canonical)) presentByVerb.set(entry.canonical, []);
    presentByVerb.get(entry.canonical).push(entry);
  });
  const tenseByVerb = new Map(tenseEntries.map(entry => [entry.canonical, entry]));

  const missingInTense = Array.from(presentByVerb.entries())
    .filter(([canonical]) => !tenseByVerb.has(canonical))
    .map(([, entries]) => entries.map(entry => entry.label).join(" / "));
  if (missingInTense.length) {
    fail(`verbs tab entries missing from tense tab: ${missingInTense.join(", ")}`);
  }

  const missingInPresent = tenseEntries
    .filter(entry => !presentByVerb.has(entry.canonical))
    .map(entry => entry.infinitive);
  if (missingInPresent.length) {
    fail(`tense tab entries missing from verbs tab: ${missingInPresent.join(", ")}`);
  }

  const missingEtreAuxiliaryInPresent = etreAuxiliaryVerbs
    .filter(entry => !presentByVerb.has(canonicalVerbName(entry.infinitive)))
    .map(entry => entry.infinitive);
  if (missingEtreAuxiliaryInPresent.length) {
    fail(`être-auxiliary reference verbs missing from verbs tab: ${missingEtreAuxiliaryInPresent.join(", ")}`);
  }

  const expectedTenseGroup = (entry) => {
    if (entry.presentGroup === "pronominal") return "pronominal";
    if (entry.presentGroup === "regularEr") return "er";
    if (entry.presentGroup === "regularIr") return "ir";
    if (entry.presentGroup === "regularRe") return "re";
    if (entry.presentGroup === "regular" && entry.canonical.endsWith("ir")) return "ir";
    if (entry.presentGroup === "regular" && entry.canonical.endsWith("er")) return "er";
    if (entry.presentGroup === "regular" && entry.canonical.endsWith("re")) return "re";
    return "irregular";
  };

  const wrongGroups = tenseEntries.flatMap(tenseEntry => {
    const presentMatches = presentByVerb.get(tenseEntry.canonical) || [];
    const expectedGroups = new Set(presentMatches.map(expectedTenseGroup));
    return expectedGroups.size && !expectedGroups.has(tenseEntry.tenseGroup)
      ? [`${tenseEntry.infinitive}: expected ${Array.from(expectedGroups).join(" or ")}, found ${tenseEntry.tenseGroup}`]
      : [];
  });
  if (wrongGroups.length) {
    fail(`tense tab verbs in wrong category: ${wrongGroups.join("; ")}`);
  }

  const missingIpa = tenseEntries
    .filter(entry => !entry.infinitiveIpa || !entry.pastParticipleIpa)
    .map(entry => entry.infinitive);
  if (missingIpa.length) {
    fail(`tense tab verbs missing infinitive or past participle IPA: ${missingIpa.join(", ")}`);
  }

  const passer = tenseEntries.find(entry => entry.infinitive === "passer");
  const passerData = passeComposeGroups
    .flatMap(group => group.verbs)
    .find(verb => verb.infinitive === "passer");
  if (!passer || !passerData || !/direct object/i.test(passerData.note) || !/uses être/i.test(passerData.note)) {
    fail("passer must distinguish transitive avoir from intransitive être");
  }

  const passerReference = etreAuxiliaryVerbs.find(entry => entry.infinitive === "passer");
  const examExample = passerReference && passerReference.avoirExamples.find(example => /examen/.test(example.fr));
  if (!examExample || /passed|pass the exam/i.test(JSON.stringify(examExample))) {
    fail("passer un examen must be glossed as taking/sitting an exam, not passing it");
  }
}

function loadExtendedGrammarData() {
  const context = {
    FR: { data: {}, renderers: {}, runtime: {} },
    window: {},
    console
  };
  context.window.FR = context.FR;
  context.window.window = context.window;
  vm.createContext(context);

  [
    "js/core/namespace.js",
    "js/data/pronouns.js",
    "js/data/verbs.js",
    "js/data/grammar.js",
    "js/data/tenses.js",
    "js/data/imperative.js",
    "js/data/imparfait.js",
    "js/data/futur-simple.js",
    "js/data/pronominal-verbs.js",
    "js/data/object-pronouns.js"
  ].forEach(scriptPath => {
    vm.runInContext(
      fs.readFileSync(path.join(root, scriptPath), "utf8"),
      context,
      { filename: scriptPath }
    );
  });
  return context.FR.data;
}

function validateImparfaitContent(data) {
  const sourceItems = data.verbs.items.filter(item => item.group !== "pronominal");
  const imparfait = data.imparfait;
  if (!imparfait || !Array.isArray(imparfait.items)) {
    fail("imparfait data is not registered");
    return;
  }
  if (imparfait.errors.length) {
    fail(`imparfait derivation errors: ${imparfait.errors.map(item => item.label || item.key).join(", ")}`);
  }
  if (imparfait.presentAlternations.reserver) {
    fail("réserver must not appear among present-tense spelling alternations");
  }
  const expectedPairs = [["je", "nous"], ["tu", "vous"], ["il", "ils"], ["elle", "elles"]];
  if (JSON.stringify(imparfait.alignedPairs) !== JSON.stringify(expectedPairs)) {
    fail("imparfait columns must align je/nous, tu/vous, il/ils, and elle/elles");
  }

  const missingItems = sourceItems.filter(item => !imparfait.getItem(item.key)).map(item => item.label);
  if (missingItems.length) {
    fail(`verbs missing an imparfait paradigm: ${missingItems.join(", ")}`);
  }

  imparfait.items.forEach(item => {
    const source = sourceItems.find(entry => entry.key === item.key);
    const expectedPronouns = new Set((source && source.rows || []).map(row => {
      const normalized = row.pronoun.replace(/[’']/g, "").toLowerCase();
      return normalized === "j" ? "je" : normalized;
    }));
    const actualPronouns = new Set(item.rows.map(row => row.pronoun));
    const missingPronouns = Array.from(expectedPronouns).filter(pronoun => !actualPronouns.has(pronoun));
    if (missingPronouns.length) {
      fail(`${item.label} imparfait is missing ${missingPronouns.join("/")}`);
    }
    if (item.rows.some(row =>
      !row.full || !row.form || !row.ending || !/^\/[^/]+\/$/u.test(row.ipa || "")
    )) {
      fail(`${item.label} has an incomplete imparfait row`);
    }
    const examples = item.examples || {};
    ["statement", "negative", "question"].forEach(kind => {
      if (!examples[kind] || !examples[kind].fr || !examples[kind].en) {
        fail(`${item.label} is missing an imparfait ${kind} example`);
      }
    });
    if (examples.question && !/[?？]\s*$/.test(examples.question.fr)) {
      fail(`${item.label} imparfait question must end with a question mark`);
    }
    if (
      examples.statement && examples.question &&
      normalizeComparableSentence(examples.statement.fr) === normalizeComparableSentence(examples.question.fr)
    ) {
      fail(`${item.label} repeats its imparfait statement as an intonation-only question`);
    }
  });

  const imparfaitQuestions = imparfait.items
    .map(item => item.examples && item.examples.question && item.examples.question.fr)
    .filter(Boolean);
  if (!imparfaitQuestions.some(question => /^Est-ce que\b/iu.test(question))) {
    fail("imparfait practice needs some est-ce que questions");
  }
  if (!imparfaitQuestions.some(question => /-nous\b/iu.test(question))) {
    fail("imparfait practice needs some subject-verb inversion questions");
  }

  const expectedForms = [
    ["etreVerb", "nous", "nous étions"],
    ["manger", "nous", "nous mangions"],
    ["commencer", "nous", "nous commencions"],
    ["voyager", "je", "je voyageais"],
    ["travailler", "nous", "nous travaillions"],
    ["croire", "nous", "nous croyions"],
    ["eteindre", "nous", "nous éteignions"],
    ["fermer", "nous", "nous fermions"]
  ];
  expectedForms.forEach(([key, pronoun, expected]) => {
    const item = imparfait.getItem(key);
    const row = item && item.rows.find(entry => entry.pronoun === pronoun);
    if (!row || row.full !== expected) {
      fail(`${key} imparfait ${pronoun}: expected ${expected}, found ${row ? row.full : "missing"}`);
    }
  });
}

function validateFuturSimpleContent(data) {
  const future = data.futurSimple;
  const sourceItems = data.verbs.items;
  if (!future || !Array.isArray(future.items) || typeof future.getItem !== "function") {
    fail("futur-simple data is not registered");
    return;
  }
  if (future.errors.length) {
    fail(`futur-simple derivation errors: ${future.errors.map(item => item.label || item.key).join(", ")}`);
  }

  const expectedPairs = [["je", "nous"], ["tu", "vous"], ["il", "ils"], ["elle", "elles"]];
  if (JSON.stringify(future.alignedPairs) !== JSON.stringify(expectedPairs)) {
    fail("futur-simple columns must align je/nous, tu/vous, il/ils, and elle/elles");
  }

  const missingItems = sourceItems.filter(item => !future.getItem(item.key)).map(item => item.label);
  if (missingItems.length) {
    fail(`verbs missing a futur-simple paradigm: ${missingItems.join(", ")}`);
  }
  if (future.items.length !== sourceItems.length) {
    fail(`futur-simple registry has ${future.items.length} entries for ${sourceItems.length} verbs`);
  }

  future.items.forEach(item => {
    const source = sourceItems.find(entry => entry.key === item.key);
    const expectedPronouns = new Set((source && source.rows || []).map(row => {
      const normalized = row.pronoun.replace(/[’']/g, "").toLowerCase();
      return normalized === "j" ? "je" : normalized;
    }));
    const actualPronouns = new Set(item.rows.map(row => row.pronoun));
    const missingPronouns = Array.from(expectedPronouns).filter(pronoun => !actualPronouns.has(pronoun));
    if (missingPronouns.length) {
      fail(`${item.label} futur simple is missing ${missingPronouns.join("/")}`);
    }
    if (!item.stem || !item.formula || !item.formula.text) {
      fail(`${item.label} has incomplete futur-simple stem information`);
    }
    if (item.rows.some(row =>
      !row.full || !row.form || !row.ending || !/^\/[^/]+\/$/u.test(row.ipa || "")
    )) {
      fail(`${item.label} has an incomplete futur-simple row`);
    }

    const examples = item.examples || {};
    ["statement", "negative", "question"].forEach(kind => {
      if (!examples[kind] || !examples[kind].fr || !examples[kind].en) {
        fail(`${item.label} is missing a futur-simple ${kind} example`);
      }
    });
    if (examples.question && !/[?？]\s*$/.test(examples.question.fr)) {
      fail(`${item.label} futur-simple question must end with a question mark`);
    }
    if (
      examples.statement && examples.question &&
      normalizeComparableSentence(examples.statement.fr) === normalizeComparableSentence(examples.question.fr)
    ) {
      fail(`${item.label} repeats its futur-simple statement as an intonation-only question`);
    }
  });

  const questions = future.items
    .map(item => item.examples && item.examples.question && item.examples.question.fr)
    .filter(Boolean);
  if (!questions.some(question => /^Est-ce que\b/iu.test(question))) {
    fail("futur-simple practice needs some est-ce que questions");
  }
  if (!questions.some(question => /-(?:nous|vous|t-il|t-elle|ils|elles)\b/iu.test(question))) {
    fail("futur-simple practice needs some subject-verb inversion questions");
  }

  const expectedForms = [
    ["parler", "je", "je parlerai"],
    ["finir", "nous", "nous finirons"],
    ["attendre", "je", "j’attendrai"],
    ["etreVerb", "je", "je serai"],
    ["avoirVerb", "nous", "nous aurons"],
    ["aller", "ils", "ils iront"],
    ["venir", "elle", "elle viendra"],
    ["faire", "vous", "vous ferez"],
    ["pouvoir", "je", "je pourrai"],
    ["vouloir", "elles", "elles voudront"],
    ["savoir", "tu", "tu sauras"],
    ["voir", "nous", "nous verrons"],
    ["croire", "je", "je croirai"],
    ["eteindre", "nous", "nous éteindrons"],
    ["fermer", "vous", "vous fermerez"],
    ["sInquieter", "je", "je m’inquiéterai"],
    ["mourir", "il", "il mourra"],
    ["acheter", "je", "j’achèterai"],
    ["sAppeler", "je", "je m’appellerai"],
    ["seLever", "nous", "nous nous lèverons"],
    ["seSouvenir", "elles", "elles se souviendront"],
    ["falloir", "il", "il faudra"],
    ["ilYA", "il", "il y aura"],
    ["pleuvoir", "il", "il pleuvra"]
  ];
  expectedForms.forEach(([key, pronoun, expected]) => {
    const item = future.getItem(key);
    const row = item && item.rows.find(entry => entry.pronoun === pronoun);
    if (!row || row.full !== expected) {
      fail(`${key} futur simple ${pronoun}: expected ${expected}, found ${row ? row.full : "missing"}`);
    }
  });

  const expectedStems = {
    reserver: "réserver",
    preferer: "préférer",
    acheter: "achèter",
    sAppeler: "appeller",
    sEnnuyer: "ennuier",
    sInquieter: "inquiéter"
  };
  Object.entries(expectedStems).forEach(([key, expected]) => {
    const item = future.getItem(key);
    if (!item || item.stem !== expected) {
      fail(`${key} futur-simple stem: expected ${expected}, found ${item ? item.stem : "missing"}`);
    }
  });

  const negationChecks = {
    faire: "nous ne ferons pas de sport",
    porter: "nous ne porterons pas de manteaux",
    demander: "nous ne demanderons pas d’aide"
  };
  Object.entries(negationChecks).forEach(([key, expected]) => {
    const item = future.getItem(key);
    const sentence = item && item.examples && item.examples.negative && item.examples.negative.fr;
    if (!sentence || !sentence.includes(expected)) {
      fail(`${key} futur-simple negation must include ${expected}`);
    }
  });

  const seLeverQuestion = future.getItem("seLever").examples.question.fr;
  if (seLeverQuestion !== "Nous lèverons-nous plus tôt ?") {
    fail("se lever inversion must keep the reflexive nous before the verb and subject -nous after it");
  }
}

function validateImperativeContent(data) {
  const imperative = data.imperative;
  if (!imperative || !Array.isArray(imperative.items) || typeof imperative.getItem !== "function") {
    fail("imperative data is not registered");
    return;
  }
  if (imperative.errors && imperative.errors.length) {
    fail(`imperative data errors: ${imperative.errors.map(item => item.label || item.key).join(", ")}`);
  }

  const sourceItems = data.verbs.items.filter(item =>
    item.group !== "pronominal" && item.group !== "impersonal" && item.key !== "pouvoir"
  );
  const missingItems = sourceItems.filter(item => !imperative.getItem(item.key)).map(item => item.label);
  if (missingItems.length) {
    fail(`verbs missing an imperative paradigm: ${missingItems.join(", ")}`);
  }

  const expectedPersons = ["tu", "nous", "vous"];
  imperative.items.forEach(item => {
    const persons = (item.rows || []).map(row => row.person);
    if (JSON.stringify(persons) !== JSON.stringify(expectedPersons)) {
      fail(`${item.label} imperative must use tu, nous, vous order`);
    }
    if (item.rows.some(row => !row.form || !/^\/[^/]+\/$/u.test(row.ipa || ""))) {
      fail(`${item.label} has an incomplete imperative row`);
    }
    const examples = item.examples || {};
    ["affirmative", "negative"].forEach(kind => {
      if (!examples[kind] || !examples[kind].fr || !examples[kind].en) {
        fail(`${item.label} is missing an imperative ${kind} example`);
      }
    });
    if (examples.negative && !/^(?:N(?:e\b|['’])|Veuillez\s+ne\b)/iu.test(examples.negative.fr)) {
      fail(`${item.label} must use a recognized negative imperative structure`);
    }
  });

  const expectedSpecialForms = {
    etreVerb: ["sois", "soyons", "soyez"],
    avoirVerb: ["aie", "ayons", "ayez"],
    aller: ["va", "allons", "allez"],
    croire: ["crois", "croyons", "croyez"],
    eteindre: ["éteins", "éteignons", "éteignez"],
    fermer: ["ferme", "fermons", "fermez"],
    savoir: ["sache", "sachons", "sachez"],
    vouloir: ["veuille", "veuillons", "veuillez"]
  };
  Object.entries(expectedSpecialForms).forEach(([key, expectedForms]) => {
    const item = imperative.getItem(key);
    const actualForms = item && item.rows.map(row => row.form);
    if (!actualForms || JSON.stringify(actualForms) !== JSON.stringify(expectedForms)) {
      fail(`${key} imperative forms must be ${expectedForms.join(" / ")}`);
    }
  });
}

function validatePronominalContent(data) {
  const pronominal = data.pronominalVerbs;
  if (!pronominal || !Array.isArray(pronominal.items)) {
    fail("pronominal-verb data is not registered");
    return;
  }
  if (pronominal.errors.length) {
    fail(`pronominal-verb data errors: ${pronominal.errors.map(item => item.infinitive || item.key).join(", ")}`);
  }

  const sourceItems = data.verbs.items.filter(item => item.group === "pronominal");
  const missingSourceVerbs = sourceItems.filter(item => !pronominal.items.some(entry => entry.key === item.key));
  if (missingSourceVerbs.length) {
    fail(`pronominal tab is missing existing verbs: ${missingSourceVerbs.map(item => item.label).join(", ")}`);
  }

  const validTypes = new Set(pronominal.typeOrder);
  const validAgreementModes = new Set(Object.keys(pronominal.agreementModes));
  pronominal.items.forEach(item => {
    if (!validTypes.has(item.type)) fail(`${item.infinitive} has an unknown pronominal type: ${item.type}`);
    if (!validAgreementModes.has(item.agreementMode)) {
      fail(`${item.infinitive} has an unknown agreement mode: ${item.agreementMode}`);
    }
    ["present", "imperfect", "passeCompose"].forEach(tense => {
      const rows = item.paradigms[tense] || [];
      if (rows.length !== 8 || rows.some(row =>
        !row.full || !row.pronoun || !/^\/[^/]+\/$/u.test(row.ipa || "")
      )) {
        fail(`${item.infinitive} needs eight complete ${tense} forms`);
      }
      const examples = item.examples[tense] || {};
      ["statement", "negative", "question"].forEach(kind => {
        if (!examples[kind] || !examples[kind].fr || !examples[kind].en) {
          fail(`${item.infinitive} is missing a ${tense} ${kind} example`);
        }
      });
      if (examples.question && examples.statement) {
        const statement = examples.statement.fr.replace(/[.!?]\s*$/u, "").toLowerCase();
        const question = examples.question.fr.replace(/[.!?]\s*$/u, "").toLowerCase();
        if (statement === question) {
          fail(`${item.infinitive} repeats its ${tense} statement as an intonation-only question`);
        }
      }
    });

    const imperative = item.examples.imperative || {};
    ["statement", "negative"].forEach(kind => {
      if (!imperative[kind] || !imperative[kind].fr || !imperative[kind].en) {
        fail(`${item.infinitive} is missing an imperative ${kind} example`);
      }
    });
    if (imperative.statement && !/(?:-toi|-nous|-vous)\b/iu.test(imperative.statement.fr)) {
      fail(`${item.infinitive} affirmative imperative must place toi, nous, or vous after the verb`);
    }
    if (imperative.negative) {
      if (!/^Ne\b/iu.test(imperative.negative.fr)) {
        fail(`${item.infinitive} negative imperative must begin with ne`);
      }
      if (!/(?:\bte\b|\bt[’']|\bnous\b|\bvous\b)/iu.test(imperative.negative.fr)) {
        fail(`${item.infinitive} negative imperative must place te, nous, or vous before the verb`);
      }
      if (/(?:-toi|-nous|-vous)\b/iu.test(imperative.negative.fr)) {
        fail(`${item.infinitive} negative imperative must not keep an attached reflexive pronoun`);
      }
    }
  });

  const seDire = pronominal.getById("seDire");
  if (!seDire || seDire.paradigms.passeCompose.some(row => row.participle !== "dit")) {
    fail("se dire must keep dit invariant when se is indirect");
  }
  const seMarier = pronominal.getById("seMarier");
  if (!seMarier || !seMarier.paradigms.imperfect.some(row => row.full === "nous nous mariions")) {
    fail("se marier must preserve both written i letters in nous nous mariions");
  }
  const sInquieter = pronominal.getById("sInquieter");
  const sInquieterImperfect = sInquieter && sInquieter.paradigms.imperfect.find(row => row.pronoun === "nous");
  const sInquieterPasse = sInquieter && sInquieter.paradigms.passeCompose.find(row => row.pronoun === "elles");
  if (!sInquieter || !sInquieterImperfect || sInquieterImperfect.full !== "nous nous inquiétions") {
    fail("s’inquiéter must preserve nous nous inquiétions in the imparfait");
  }
  if (!sInquieterPasse || sInquieterPasse.participle !== "inquiétées") {
    fail("s’inquiéter must agree as inquiétées with feminine plural elles");
  }
  const sePasserContrast = pronominal.agreementContrasts.find(item => item.id === "se-passer-context");
  const sePasserForms = sePasserContrast ? sePasserContrast.forms.map(item => item.fr) : [];
  if (!sePasserForms.includes("Elles se sont passées de voiture.") || !sePasserForms.includes("Elles se sont passé le sel.")) {
    fail("se passer must contrast subject agreement with invariant indirect se");
  }
  const requiredContrasts = new Set(["se-laver-body-parts", "se-dire-objects", "se-trouver-context", "se-passer-context"]);
  pronominal.agreementContrasts.forEach(item => requiredContrasts.delete(item.id));
  if (requiredContrasts.size) {
    fail(`missing pronominal agreement contrasts: ${Array.from(requiredContrasts).join(", ")}`);
  }
}

function validateObjectPronounContent(data) {
  const objects = data.objectPronouns;
  if (!objects) {
    fail("object-pronoun data is not registered");
    return;
  }
  const choices = new Set(objects.decisionMatrix.map(item => item.id));
  ["cod", "coi", "y", "en", "tonic", "ca", "pronominal"].forEach(id => {
    if (!choices.has(id)) fail(`object-pronoun decision matrix is missing ${id}`);
  });
  const normalOrder = objects.placement && objects.placement.regularOrder;
  if (!normalOrder || !normalOrder.sequence.includes("lui / leur → y → en")) {
    fail("object-pronoun normal order is incomplete");
  }
  const imperativeExamples = objects.placement.affirmativeImperative.examples.map(item => item.fr);
  ["Donne-le-moi.", "Parlez-lui-en.", "Donne-m'en.", "Vas-y.", "Penses-y.", "Manges-en."].forEach(example => {
    if (!imperativeExamples.includes(example)) fail(`object-pronoun imperative guide is missing ${example}`);
  });
  const agreementText = JSON.stringify(objects.placement.agreementNotes);
  if (!agreementText.includes("Des fleurs, j'en ai acheté.")) {
    fail("object-pronoun guide must teach normal no agreement with en");
  }
}

function validateNumberRules() {
  const context = {};
  vm.createContext(context);
  const numberCode = fs.readFileSync(path.join(root, "js/data/numbers.js"), "utf8");
  vm.runInContext(`${numberCode}\nthis.__numbers = { frenchNumber, frenchNumberIpa, frenchYear };`, context);
  const { frenchNumber, frenchNumberIpa, frenchYear } = context.__numbers;
  const expectations = [
    [frenchNumber(21), "vingt et un", "21 spelling"],
    [frenchNumber(80), "quatre-vingts", "80 spelling"],
    [frenchNumber(81), "quatre-vingt-un", "81 spelling"],
    [frenchNumber(200), "deux cents", "200 spelling"],
    [frenchNumber(201), "deux cent un", "201 spelling"],
    [frenchYear(1900), "mille neuf cent", "1900 year spelling"],
    [frenchNumberIpa(500), "/sɛ̃.sɑ̃/", "500 pronunciation"],
    [frenchNumberIpa(5000), "/sɛ̃.mil/", "5000 pronunciation"],
    [frenchNumberIpa(600), "/si.sɑ̃/", "600 pronunciation"],
    [frenchNumberIpa(800), "/ɥi.sɑ̃/", "800 pronunciation"]
  ];
  expectations.forEach(([actual, expected, label]) => {
    if (actual !== expected) fail(`${label}: expected ${expected}, found ${actual}`);
  });
}

function validatePronunciationContent() {
  const context = {};
  vm.createContext(context);
  const code = fs.readFileSync(path.join(root, "js/data/pronunciation.js"), "utf8");
  vm.runInContext(`${code}\nthis.__pronunciation = {
    pronunciationRules,
    consonantPronunciationRules,
    mandatoryLiaisonRules,
    optionalLiaisonRules,
    forbiddenLiaisonRules,
    hPronunciationRules,
    connectedSpeechRules,
    pronunciationContrastRules,
    pronunciationIpa
  };`, context);

  const directGroups = [
    ...context.__pronunciation.mandatoryLiaisonRules,
    ...context.__pronunciation.optionalLiaisonRules,
    ...context.__pronunciation.forbiddenLiaisonRules
  ];
  const ruleGroups = [
    ...context.__pronunciation.pronunciationRules,
    ...context.__pronunciation.consonantPronunciationRules,
    ...context.__pronunciation.hPronunciationRules,
    ...context.__pronunciation.connectedSpeechRules,
    ...context.__pronunciation.pronunciationContrastRules
  ].flatMap(group => group.rules.map(rule => ({ sound: group.sound, ...rule })));
  const invalid = [];

  directGroups.forEach(group => {
    if (!group.rule || !group.note || !group.examples || group.examples.length < 3) {
      invalid.push(group.sound || "unnamed liaison group");
      return;
    }
    if (group.examples.some(example => !example.fr || !example.ipa || !example.zh)) {
      invalid.push(`${group.sound}: incomplete example`);
    }
  });
  ruleGroups.forEach(rule => {
    if (!rule.rule || !rule.examples || rule.examples.length < 3) {
      invalid.push(`${rule.sound || "unnamed sound"}: too few examples`);
      return;
    }
    if (rule.examples.some(example => !example.fr || !(example.ipa || context.__pronunciation.pronunciationIpa[example.fr]) || !example.zh)) {
      invalid.push(`${rule.sound}: incomplete example`);
    }
  });

  if (invalid.length) {
    fail(`pronunciation rules need a rule, IPA, Chinese meaning, and at least 3 examples: ${invalid.join("; ")}`);
  }

  const findRuleByExample = example => ruleGroups.find(rule =>
    rule.examples.some(item => item.fr === example)
  );
  [
    ["femme", "-emment"],
    ["parler", "非动词"],
    ["sac", "blanc"],
    ["nation", "question"]
  ].forEach(([example, exceptionText]) => {
    const rule = findRuleByExample(example);
    if (!rule || !rule.rule.includes(exceptionText)) {
      fail(`pronunciation rule containing ${example} must state its ${exceptionText} limitation`);
    }
  });
}

function validateVocabularyCorrections() {
  const context = {};
  vm.createContext(context);
  const code = fs.readFileSync(path.join(root, "js/data/vocabulary.js"), "utf8");
  vm.runInContext(`${code}\nthis.__vocabulary = {
    seasons,
    timeSpanComparisons,
    adjectiveFeminineRules,
    adjectivePluralRules,
    adverbAmountComparisonRows
  };`, context);
  const vocabulary = context.__vocabulary;

  const spring = vocabulary.seasons.find(item => item.fr === "printemps");
  if (!spring || spring.example !== "au printemps" || /often/i.test(spring.note)) {
    fail("spring guidance must teach au printemps directly, not as an occasional pattern");
  }

  const amountText = JSON.stringify(vocabulary.adverbAmountComparisonRows);
  if (amountText.includes("un peu de fraises")) {
    fail("un peu de must not be glossed as a few countable strawberries");
  }

  const adjectiveText = JSON.stringify({
    feminine: vocabulary.adjectiveFeminineRules,
    plural: vocabulary.adjectivePluralRules
  });
  if (adjectiveText.includes("un musicien ancien") || adjectiveText.includes("des films nouveaux")) {
    fail("adjective examples must preserve natural ancien/nouveau placement");
  }
}

function validateInterfaceRegressions() {
  const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
  const core = fs.readFileSync(path.join(root, "js/core/core.js"), "utf8");
  const namespace = fs.readFileSync(path.join(root, "js/core/namespace.js"), "utf8");
  const renderers = ["grammar.js", "calendar-determiners.js"]
    .map(fileName => fs.readFileSync(path.join(root, "js/renderers", fileName), "utf8"))
    .join("\n");

  if (core.includes("voiceSelect.value || savedVoice") || !core.includes("voice.name === savedVoice")) {
    fail("saved voice preference must take priority when the saved voice becomes available");
  }
  if (!css.includes(".translation:not(.practice-visible)") || !html.includes("translation practice-visible")) {
    fail("practice mode must keep controls and revealed quiz answers visible");
  }
  if (!/\.verb-pair-row\s*\{[^}]*grid-template-columns:\s*1fr;[^}]*min-width:\s*0;/s.test(css)) {
    fail("phone layouts must stack generic verb pairs without a forced minimum width");
  }

  const utilityContext = { window: {} };
  vm.createContext(utilityContext);
  vm.runInContext(namespace, utilityContext);
  const escaped = utilityContext.window.FR.utils.escapeAttribute('Il dit "salut" & part.');
  if (escaped !== "Il dit &quot;salut&quot; &amp; part.") {
    fail("HTML attribute escaping utility does not preserve quoted speech safely");
  }
  const unsafeSpeechAttributes = Array.from(
    renderers.matchAll(/data-(?:speech|example)="\$\{([^}]*)\}"/g),
    match => match[1]
  ).filter(expression => !expression.includes("escapeAttribute"));
  if (unsafeSpeechAttributes.length) {
    fail(`unescaped speech data attributes: ${unsafeSpeechAttributes.join(", ")}`);
  }
}

try {
  validateVerbContent();
  validateVerbTenseSync();
} catch (error) {
  fail(`verb validation crashed: ${error.message}`);
}

try {
  const extendedData = loadExtendedGrammarData();
  validateImparfaitContent(extendedData);
  validateFuturSimpleContent(extendedData);
  validateImperativeContent(extendedData);
  validatePronominalContent(extendedData);
  validateObjectPronounContent(extendedData);
} catch (error) {
  fail(`extended grammar validation crashed: ${error.message}`);
}

try {
  validateNumberRules();
} catch (error) {
  fail(`number validation crashed: ${error.message}`);
}

try {
  validatePronunciationContent();
} catch (error) {
  fail(`pronunciation validation crashed: ${error.message}`);
}

try {
  validateVocabularyCorrections();
  validateInterfaceRegressions();
} catch (error) {
  fail(`feedback regression validation crashed: ${error.message}`);
}

if (!process.exitCode) {
  console.log(
    `Validation passed: ${scriptPaths.length} scripts, ${ids.length} IDs, ${tabNames.length} tabs.`
  );
}
