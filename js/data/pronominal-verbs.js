(function registerPronominalVerbData(global) {
  "use strict";

  const FR = global.FR;
  if (!FR || !FR.data) return;

  const TYPE_ORDER = ["reflexive", "reciprocal", "passive", "essential"];
  const MATRIX_PRONOUNS = ["je", "nous", "tu", "vous", "il", "ils", "elle", "elles"];

  const imperfectIpaProfiles = Object.freeze({
    seLaver: Object.freeze({ common: "la.vɛ", nous: "la.vjɔ̃", vous: "la.vje" }),
    seLever: Object.freeze({ common: "lə.vɛ", nous: "lə.vjɔ̃", vous: "lə.vje" }),
    seReposer: Object.freeze({ common: "ʁə.po.zɛ", nous: "ʁə.po.zjɔ̃", vous: "ʁə.po.zje" }),
    sAppeler: Object.freeze({ common: "a.pə.lɛ", nous: "a.pə.ljɔ̃", vous: "a.pə.lje" }),
    sHabiller: Object.freeze({ common: "a.bi.jɛ", nous: "a.bij.jɔ̃", vous: "a.bij.je" }),
    seTrouver: Object.freeze({ common: "tʁu.vɛ", nous: "tʁu.vjɔ̃", vous: "tʁu.vje" }),
    sePasser: Object.freeze({ common: "pa.sɛ", nous: "pa.sjɔ̃", vous: "pa.sje" }),
    sePromener: Object.freeze({ common: "pʁɔm.nɛ", nous: "pʁɔm.njɔ̃", vous: "pʁɔm.nje" }),
    sAimer: Object.freeze({ common: "ɛ.mɛ", nous: "ɛ.mjɔ̃", vous: "ɛ.mje" }),
    seConnaitre: Object.freeze({ common: "kɔ.nɛ.sɛ", nous: "kɔ.nɛ.sjɔ̃", vous: "kɔ.nɛ.sje" }),
    seMarier: Object.freeze({ common: "ma.ʁjɛ", nous: "ma.ʁij.jɔ̃", vous: "ma.ʁij.je" }),
    seVoir: Object.freeze({ common: "vwa.jɛ", nous: "vwaj.jɔ̃", vous: "vwaj.je" }),
    seRegarder: Object.freeze({ common: "ʁə.ɡaʁ.dɛ", nous: "ʁə.ɡaʁ.djɔ̃", vous: "ʁə.ɡaʁ.dje" }),
    seDire: Object.freeze({ common: "di.zɛ", nous: "di.zjɔ̃", vous: "di.zje" }),
    seVendre: Object.freeze({ common: "vɑ̃.dɛ", nous: "vɑ̃.djɔ̃", vous: "vɑ̃.dje" }),
    seSouvenir: Object.freeze({ common: "su.və.nɛ", nous: "su.və.njɔ̃", vous: "su.və.nje" }),
    sEnvoler: Object.freeze({ common: "ɑ̃.vɔ.lɛ", nous: "ɑ̃.vɔ.ljɔ̃", vous: "ɑ̃.vɔ.lje" }),
    sAssumer: Object.freeze({ common: "a.sy.mɛ", nous: "a.sy.mjɔ̃", vous: "a.sy.mje" }),
    sEnnuyer: Object.freeze({ common: "ɑ̃.nɥi.jɛ", nous: "ɑ̃.nɥij.jɔ̃", vous: "ɑ̃.nɥij.je" }),
    sInquieter: Object.freeze({ common: "ɛ̃.kje.tɛ", nous: "ɛ̃.kje.tjɔ̃", vous: "ɛ̃.kje.tje" }),
    seDetendre: Object.freeze({ common: "de.tɑ̃.dɛ", nous: "de.tɑ̃.djɔ̃", vous: "de.tɑ̃.dje" }),
    seCalmer: Object.freeze({ common: "kal.mɛ", nous: "kal.mjɔ̃", vous: "kal.mje" }),
    seBaigner: Object.freeze({ common: "bɛ.ɲɛ", nous: "bɛ.ɲjɔ̃", vous: "bɛ.ɲje" }),
    sInteresser: Object.freeze({
      common: "ɛ̃.te.ʁe.sɛ",
      nous: "ɛ̃.te.ʁe.sjɔ̃",
      vous: "ɛ̃.te.ʁe.sje",
      participle: "ɛ̃.te.ʁe.se"
    })
  });

  const simplePronominalPrefixIpa = Object.freeze({
    consonant: Object.freeze({
      je: "ʒə mə ",
      tu: "ty tə ",
      il: "il sə ",
      elle: "ɛl sə ",
      nous: "nu nu ",
      vous: "vu vu ",
      ils: "il sə ",
      elles: "ɛl sə "
    }),
    vowel: Object.freeze({
      je: "ʒə m",
      tu: "ty t",
      il: "il s",
      elle: "ɛl s",
      nous: "nu nu.z‿",
      vous: "vu vu.z‿",
      ils: "il s",
      elles: "ɛl s"
    })
  });

  const compoundPronominalPrefixIpa = Object.freeze({
    consonant: Object.freeze({
      je: "ʒə mə sɥi ",
      tu: "ty tɛ ",
      il: "il sɛ ",
      elle: "ɛl sɛ ",
      nous: "nu nu sɔm ",
      vous: "vu vu.zɛt ",
      ils: "il sə sɔ̃ ",
      elles: "ɛl sə sɔ̃ "
    }),
    vowel: Object.freeze({
      je: "ʒə mə sɥi.z‿",
      tu: "ty t‿ɛ.z‿",
      il: "il s‿ɛ.t‿",
      elle: "ɛl s‿ɛ.t‿",
      nous: "nu nu sɔm.z‿",
      vous: "vu vu.z‿ɛt.z‿",
      ils: "il sə sɔ̃.t‿",
      elles: "ɛl sə sɔ̃.t‿"
    })
  });

  const typeDefinitions = [
    {
      key: "reflexive",
      title: "Reflexive — sens réfléchi",
      zh: "自反",
      description: "The subject performs the action on itself. The reflexive pronoun can be a direct or indirect object, so agreement still depends on its function.",
      example: "Elle se lave. — She washes herself."
    },
    {
      key: "reciprocal",
      title: "Reciprocal — sens réciproque",
      zh: "相互",
      description: "Two or more subjects act on one another. A direct reflexive object triggers agreement; an indirect reflexive object does not.",
      example: "Elles se voient. — They see each other."
    },
    {
      key: "passive",
      title: "Passive — sens passif",
      zh: "被动",
      description: "The grammatical subject undergoes the action. The reflexive pronoun has no separate object function, and the participle agrees with the subject.",
      example: "Ces maisons se vendent vite. — These houses sell quickly."
    },
    {
      key: "essential",
      title: "Essentially pronominal / lexicalized",
      zh: "绝对 / 固有",
      description: "This group includes truly essentially pronominal verbs and verbs whose pronominal form has a distinct lexicalized meaning. The lexical-status badge makes that distinction explicit.",
      example: "Elle se souvient de ce voyage. — She remembers this trip."
    }
  ];

  const agreementModes = {
    subject: {
      key: "subject",
      title: "Agreement with the subject",
      explanation: "The participle changes for the subject’s gender and number: elle s’est reposée, ils se sont reposés, elles se sont reposées.",
      example: "Elles se sont souvenues de ce voyage."
    },
    "direct-se": {
      key: "direct-se",
      title: "Direct se: agreement",
      explanation: "When the reflexive pronoun is a preceding direct object, the participle agrees with the person or people represented by se.",
      example: "Elles se sont regardées."
    },
    "indirect-se": {
      key: "indirect-se",
      title: "Indirect se: no agreement",
      explanation: "When the underlying construction uses à quelqu’un, se is indirect and the participle stays invariant unless another preceding direct object triggers agreement.",
      example: "Elles se sont dit bonjour."
    },
    contextual: {
      key: "contextual",
      title: "Context decides",
      explanation: "The same verb can change meaning and object structure. Read the whole sentence before deciding whether the participle agrees.",
      example: "Elles se sont trouvées seules, but elles se sont trouvé un appartement."
    }
  };

  const lexicalStatuses = {
    occasional: {
      key: "occasional",
      title: "Occasionally pronominal",
      explanation: "A related non-pronominal verb exists and keeps a closely related meaning."
    },
    lexicalized: {
      key: "lexicalized",
      title: "Lexicalized pronominal meaning",
      explanation: "A non-pronominal verb exists, but the pronominal construction has its own established meaning."
    },
    essential: {
      key: "essential",
      title: "Essentially pronominal",
      explanation: "Modern French normally uses this meaning only with the pronominal form."
    }
  };

  const agreementContrasts = [
    {
      id: "se-laver-body-parts",
      title: "Se laver and body parts",
      explanation: "With no following COD, se is direct and agreement applies. With a following body-part COD, se is indirect and the participle does not agree. A COD placed before the participle triggers agreement with that COD.",
      forms: [
        { fr: "Elle s’est lavée.", en: "She washed herself." },
        { fr: "Elle s’est lavé les mains.", en: "She washed her hands." },
        { fr: "Les mains qu’elle s’est lavées.", en: "The hands that she washed." }
      ]
    },
    {
      id: "se-dire-objects",
      title: "Se dire: indirect se",
      explanation: "Dire quelque chose à quelqu’un makes se an indirect object. Dit therefore stays invariant unless a separate direct object appears before it.",
      forms: [
        { fr: "Elles se sont dit bonjour.", en: "They said hello to each other." },
        { fr: "Les histoires qu’elles se sont dites.", en: "The stories that they told each other." }
      ]
    },
    {
      id: "se-trouver-context",
      title: "Se trouver: meaning changes the rule",
      explanation: "In se trouver seul, the ordinary pronominal construction agrees. In se trouver quelque chose, se is an indirect beneficiary and a following COD blocks agreement.",
      forms: [
        { fr: "Elles se sont trouvées seules.", en: "They found themselves alone." },
        { fr: "Elles se sont trouvé un appartement.", en: "They found themselves an apartment." }
      ]
    },
    {
      id: "se-passer-context",
      title: "Se passer: lexicalized meaning or indirect reciprocal se",
      explanation: "In the lexicalized meanings ‘happen / go’ and se passer de (‘do without’), agree with the subject. In se passer quelque chose (‘pass something to one another’), se is indirect, so a following COD does not trigger agreement; a preceding COD still can.",
      forms: [
        { fr: "La réunion s’est bien passée.", en: "The meeting went well." },
        { fr: "Elles se sont passées de voiture.", en: "They managed without a car." },
        { fr: "Elles se sont passé le sel.", en: "They passed the salt to each other." },
        { fr: "Les notes qu’elles se sont passées.", en: "The notes that they passed to each other." }
      ]
    }
  ];

  function sentence(fr, en) {
    return { fr, en };
  }

  function examples(statement, negative, question) {
    return { statement, negative, question };
  }

  function imperativeExamples(affirmative, negative, note) {
    return { statement: affirmative, negative, note: note || "" };
  }

  const seeds = [
    {
      key: "seLaver",
      infinitive: "se laver",
      ipa: "/sə la.ve/",
      meaning: "to wash oneself",
      type: "reflexive",
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Usually direct se; body-part COD changes the rule",
      agreementExplanation: "Agree when se is the direct object: elle s’est lavée. Do not agree before a following body-part COD: elle s’est lavé les mains. Agree with a preceding COD: les mains qu’elle s’est lavées.",
      participle: "lavé",
      present: examples(sentence("Elle se lave avant le dîner.", "She washes before dinner."), sentence("Elle ne se lave pas avant le dîner.", "She does not wash before dinner."), sentence("Quand se lave-t-elle ?", "When does she wash?")),
      imperfect: examples(sentence("Elle se lavait avant le dîner.", "She used to wash before dinner."), sentence("Elle ne se lavait pas avant le dîner.", "She did not use to wash before dinner."), sentence("Quand se lavait-elle ?", "When did she use to wash?")),
      passeCompose: examples(sentence("Elle s’est lavée avant le dîner.", "She washed before dinner."), sentence("Elle ne s’est pas lavée avant le dîner.", "She did not wash before dinner."), sentence("S’est-elle lavée avant le dîner ?", "Did she wash before dinner?")),
      imperative: imperativeExamples(sentence("Lave-toi les mains avant de manger !", "Wash your hands before eating!"), sentence("Ne te lave pas les mains avec ce produit !", "Do not wash your hands with this product!")),
      contrastIds: ["se-laver-body-parts"]
    },
    {
      key: "seLever",
      infinitive: "se lever",
      ipa: "/sə lə.ve/",
      meaning: "to get up",
      type: "reflexive",
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct se: agree with the person getting up",
      agreementExplanation: "In the ordinary use, se is direct, so the participle agrees: elle s’est levée, elles se sont levées.",
      participle: "levé",
      specialNote: "Present lève / lèvent uses è, but the imperfect follows nous levons: je me levais.",
      present: examples(sentence("Elle se lève à six heures.", "She gets up at six."), sentence("Elle ne se lève pas à six heures.", "She does not get up at six."), sentence("À quelle heure se lève-t-elle ?", "What time does she get up?")),
      imperfect: examples(sentence("Elle se levait à six heures.", "She used to get up at six."), sentence("Elle ne se levait pas à six heures.", "She did not use to get up at six."), sentence("À quelle heure se levait-elle ?", "What time did she use to get up?")),
      passeCompose: examples(sentence("Elle s’est levée à six heures.", "She got up at six."), sentence("Elle ne s’est pas levée à six heures.", "She did not get up at six."), sentence("À quelle heure s’est-elle levée ?", "What time did she get up?")),
      imperative: imperativeExamples(sentence("Lève-toi maintenant !", "Get up now!"), sentence("Ne te lève pas encore !", "Do not get up yet!"))
    },
    {
      key: "seReposer",
      infinitive: "se reposer",
      ipa: "/sə ʁə.po.ze/",
      meaning: "to rest",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Lexicalized use: agree with the subject",
      agreementExplanation: "In the ordinary meaning to rest, se has no useful separate object role. The participle agrees with the subject.",
      participle: "reposé",
      present: examples(sentence("Elle se repose après le travail.", "She rests after work."), sentence("Elle ne se repose pas après le travail.", "She does not rest after work."), sentence("Quand se repose-t-elle ?", "When does she rest?")),
      imperfect: examples(sentence("Elle se reposait après le travail.", "She used to rest after work."), sentence("Elle ne se reposait pas après le travail.", "She did not use to rest after work."), sentence("Quand se reposait-elle ?", "When did she use to rest?")),
      passeCompose: examples(sentence("Elle s’est reposée après le travail.", "She rested after work."), sentence("Elle ne s’est pas reposée après le travail.", "She did not rest after work."), sentence("S’est-elle reposée après le travail ?", "Did she rest after work?")),
      imperative: imperativeExamples(sentence("Repose-toi cet après-midi !", "Rest this afternoon!"), sentence("Ne te repose pas trop longtemps !", "Do not rest for too long!"))
    },
    {
      key: "sAppeler",
      infinitive: "s’appeler",
      ipa: "/sa.ple/",
      meaning: "to be called / be named",
      type: "passive",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Naming use: agree with the subject",
      agreementExplanation: "In the meaning to be called, the subject receives the name, so the participle agrees. The form can also be directly reflexive when it means to call oneself.",
      participle: "appelé",
      specialNote: "Present appelle / appellent doubles l, but nous appelons and the imperfect stem appel- use one l: elle s’appelait.",
      present: examples(sentence("L’association s’appelle Horizon.", "The association is called Horizon."), sentence("L’association ne s’appelle pas Horizon.", "The association is not called Horizon."), sentence("Comment s’appelle l’association ?", "What is the association called?")),
      imperfect: examples(sentence("L’association s’appelait Horizon.", "The association used to be called Horizon."), sentence("L’association ne s’appelait pas Horizon.", "The association was not called Horizon."), sentence("Comment s’appelait l’association ?", "What was the association called?")),
      passeCompose: examples(sentence("L’association s’est d’abord appelée Horizon.", "The association was first called Horizon."), sentence("L’association ne s’est jamais appelée Horizon.", "The association was never called Horizon."), sentence("Comment l’association s’est-elle d’abord appelée ?", "What was the association first called?")),
      imperative: imperativeExamples(sentence("Pour le jeu, appelle-toi Léo !", "For the game, call yourself Léo!"), sentence("Ne t’appelle pas Léo dans le jeu !", "Do not call yourself Léo in the game!"), "These commands use the literal reflexive sense ‘call yourself’; commands with the passive naming sense are uncommon.")
    },
    {
      key: "sHabiller",
      infinitive: "s’habiller",
      ipa: "/sa.bi.je/",
      meaning: "to get dressed",
      type: "reflexive",
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct se: agree with the person getting dressed",
      agreementExplanation: "With no separate direct object, se represents the person being dressed and the participle agrees.",
      participle: "habillé",
      present: examples(sentence("Elle s’habille en noir.", "She dresses in black."), sentence("Elle ne s’habille pas en noir.", "She does not dress in black."), sentence("Comment s’habille-t-elle pour la soirée ?", "How does she dress for the evening?")),
      imperfect: examples(sentence("Elle s’habillait en noir.", "She used to dress in black."), sentence("Elle ne s’habillait pas en noir.", "She did not use to dress in black."), sentence("Comment s’habillait-elle pour la soirée ?", "How did she dress for the evening?")),
      passeCompose: examples(sentence("Elle s’est habillée en noir.", "She got dressed in black."), sentence("Elle ne s’est pas habillée en noir.", "She did not get dressed in black."), sentence("Comment s’est-elle habillée pour la soirée ?", "How did she dress for the evening?")),
      imperative: imperativeExamples(sentence("Habille-toi chaudement !", "Dress warmly!"), sentence("Ne t’habille pas trop légèrement !", "Do not dress too lightly!"))
    },
    {
      key: "seTrouver",
      infinitive: "se trouver",
      ipa: "/sə tʁu.ve/",
      meaning: "to be located / find oneself",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "contextual",
      agreementTitle: "Context decides: location, direct se, or beneficiary",
      agreementExplanation: "Agree in se trouver seul / seule. Do not agree in se trouver quelque chose because se is indirect and the following noun is the direct object.",
      participle: "trouvé",
      present: examples(sentence("Elle se trouve devant la gare.", "She is in front of the train station."), sentence("Elle ne se trouve pas devant la gare.", "She is not in front of the train station."), sentence("Où se trouve-t-elle ?", "Where is she?")),
      imperfect: examples(sentence("Elle se trouvait devant la gare.", "She was in front of the train station."), sentence("Elle ne se trouvait pas devant la gare.", "She was not in front of the train station."), sentence("Où se trouvait-elle ?", "Where was she?")),
      passeCompose: examples(sentence("Elle s’est trouvée seule devant la gare.", "She found herself alone in front of the train station."), sentence("Elle ne s’est pas trouvée seule devant la gare.", "She did not find herself alone in front of the train station."), sentence("S’est-elle trouvée seule devant la gare ?", "Did she find herself alone in front of the train station?")),
      imperative: imperativeExamples(sentence("Trouve-toi une place près de nous !", "Find yourself a seat near us!"), sentence("Ne te trouve pas de place trop loin de nous !", "Do not find yourself a seat too far from us!"), "The imperative naturally uses se trouver quelque chose (‘find oneself something’), not the static location sense."),
      contrastIds: ["se-trouver-context"]
    },
    {
      key: "sePasser",
      infinitive: "se passer",
      ipa: "/sə pa.se/",
      meaning: "to happen / go / do without",
      type: "essential",
      secondaryTypes: ["reciprocal"],
      lexicalStatus: "lexicalized",
      agreementMode: "contextual",
      agreementTitle: "Main meanings agree; reciprocal indirect se does not",
      agreementExplanation: "Agree with the subject in the lexicalized meanings ‘happen / go’ and se passer de: la réunion s’est bien passée; elles se sont passées de voiture. Do not agree in se passer quelque chose when se is indirect and a COD follows: elles se sont passé le sel.",
      participle: "passé",
      specialNote: "Keep the three structures distinct: se passer = happen / go; se passer de = do without; se passer quelque chose = pass something to one another.",
      present: examples(sentence("La réunion se passe bien.", "The meeting is going well."), sentence("La réunion ne se passe pas bien.", "The meeting is not going well."), sentence("Comment se passe la réunion ?", "How is the meeting going?")),
      imperfect: examples(sentence("La réunion se passait bien.", "The meeting was going well."), sentence("La réunion ne se passait pas bien.", "The meeting was not going well."), sentence("Comment se passait la réunion ?", "How was the meeting going?")),
      passeCompose: examples(sentence("La réunion s’est bien passée.", "The meeting went well."), sentence("La réunion ne s’est pas bien passée.", "The meeting did not go well."), sentence("Comment la réunion s’est-elle passée ?", "How did the meeting go?")),
      imperative: imperativeExamples(sentence("Passe-toi de ton téléphone pendant une heure !", "Go without your phone for an hour!"), sentence("Ne te passe pas de ton téléphone si tu attends un appel important !", "Do not go without your phone if you are expecting an important call!"), "Commands use se passer de (‘do without’); the ‘happen’ meaning does not naturally take a command."),
      contrastIds: ["se-passer-context"]
    },
    {
      key: "sePromener",
      infinitive: "se promener",
      ipa: "/sə pʁɔm.ne/",
      meaning: "to take a walk / stroll",
      type: "reflexive",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Lexicalized movement use: agree with the subject",
      agreementExplanation: "In the ordinary meaning to take a walk, the participle agrees with the subject.",
      participle: "promené",
      specialNote: "Present promène / promènent uses è, while the imperfect follows nous promenons: elles se promenaient.",
      present: examples(sentence("Elles se promènent au bord de la mer.", "They take a walk by the sea."), sentence("Elles ne se promènent pas au bord de la mer.", "They do not take a walk by the sea."), sentence("Où se promènent-elles ?", "Where do they take a walk?")),
      imperfect: examples(sentence("Elles se promenaient au bord de la mer.", "They used to walk by the sea."), sentence("Elles ne s’y promenaient pas.", "They did not use to walk there."), sentence("Où se promenaient-elles ?", "Where did they use to walk?")),
      passeCompose: examples(sentence("Elles se sont promenées au bord de la mer.", "They took a walk by the sea."), sentence("Elles ne s’y sont pas promenées.", "They did not take a walk there."), sentence("Où se sont-elles promenées ?", "Where did they take a walk?")),
      imperative: imperativeExamples(sentence("Promenons-nous dans le parc !", "Let’s take a walk in the park!"), sentence("Ne nous promenons pas sous la pluie !", "Let’s not take a walk in the rain!"))
    },
    {
      key: "sAimer",
      infinitive: "s’aimer",
      ipa: "/sɛ.me/",
      meaning: "to love oneself / each other",
      type: "reciprocal",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct reciprocal or reflexive se: agreement",
      agreementExplanation: "Aimer takes a direct object. Whether the meaning is oneself or each other, a preceding se triggers agreement.",
      participle: "aimé",
      present: examples(sentence("Léa et Emma s’aiment beaucoup.", "Léa and Emma love each other very much."), sentence("Elles ne s’aiment pas beaucoup.", "They do not love each other very much."), sentence("Depuis quand s’aiment-elles ?", "How long have they loved each other?")),
      imperfect: examples(sentence("Elles s’aimaient beaucoup.", "They loved each other very much."), sentence("Elles ne s’aimaient pas beaucoup.", "They did not love each other very much."), sentence("Depuis quand s’aimaient-elles ?", "How long had they loved each other?")),
      passeCompose: examples(sentence("Elles se sont aimées.", "They loved each other."), sentence("Elles ne se sont pas aimées.", "They did not love each other."), sentence("Se sont-elles aimées ?", "Did they love each other?")),
      imperative: imperativeExamples(sentence("Aimez-vous les uns les autres !", "Love one another!"), sentence("Ne vous aimez pas seulement dans les bons moments !", "Do not love each other only in the good times!"))
    },
    {
      key: "seConnaitre",
      infinitive: "se connaître",
      ipa: "/sə kɔ.nɛtʁ/",
      meaning: "to know oneself / each other",
      type: "reciprocal",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct reciprocal or reflexive se: agreement",
      agreementExplanation: "Connaître takes a direct object, so se is direct in the ordinary reflexive and reciprocal meanings.",
      participle: "connu",
      specialNote: "Present connaît contrasts with connaissons / connaissent. The imperfect uses connaiss-: elles se connaissaient.",
      present: examples(sentence("Elles se connaissent bien.", "They know each other well."), sentence("Elles ne se connaissent pas bien.", "They do not know each other well."), sentence("Depuis quand se connaissent-elles ?", "How long have they known each other?")),
      imperfect: examples(sentence("Elles se connaissaient déjà.", "They already knew each other."), sentence("Elles ne se connaissaient pas encore.", "They did not know each other yet."), sentence("Depuis quand se connaissaient-elles ?", "How long had they known each other?")),
      passeCompose: examples(sentence("Elles se sont connues à l’université.", "They got to know each other at university."), sentence("Elles ne se sont pas connues à l’université.", "They did not get to know each other at university."), sentence("Où se sont-elles connues ?", "Where did they get to know each other?")),
      imperative: imperativeExamples(sentence("Connais-toi toi-même !", "Know yourself!"), sentence("Ne te connais pas uniquement à travers le regard des autres !", "Do not know yourself only through other people’s eyes!"))
    },
    {
      key: "seMarier",
      infinitive: "se marier",
      ipa: "/sə ma.ʁje/",
      meaning: "to get married",
      type: "essential",
      secondaryTypes: ["reciprocal"],
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Idiomatic marriage use: agree with the subject",
      agreementExplanation: "In the established meaning to get married, the participle agrees with the subject. A plural pair can add reciprocal meaning.",
      participle: "marié",
      specialNote: "The imperfect nous and vous forms contain written double i: nous nous mariions, vous vous mariiez.",
      present: examples(sentence("Elles se marient en juin.", "They are getting married in June."), sentence("Elles ne se marient pas en juin.", "They are not getting married in June."), sentence("Quand se marient-elles ?", "When are they getting married?")),
      imperfect: examples(sentence("Autrefois, on se mariait souvent plus jeune.", "In the past, people often married younger."), sentence("On ne se mariait pas toujours par amour.", "People did not always marry for love."), sentence("À quel âge se mariait-on autrefois ?", "At what age did people marry in the past?")),
      passeCompose: examples(sentence("Elles se sont mariées en juin.", "They got married in June."), sentence("Elles ne se sont pas mariées en juin.", "They did not get married in June."), sentence("Quand se sont-elles mariées ?", "When did they get married?")),
      imperative: imperativeExamples(sentence("Mariez-vous quand vous serez prêts !", "Get married when you are ready!"), sentence("Ne vous mariez pas trop vite !", "Do not get married too quickly!"))
    },
    {
      key: "seVoir",
      infinitive: "se voir",
      ipa: "/sə vwaʁ/",
      meaning: "to see oneself / each other",
      type: "reciprocal",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct se: agreement in the ordinary reciprocal use",
      agreementExplanation: "Voir takes a direct object, so se is direct when people see themselves or each other. Se voir followed by an infinitive requires a separate advanced rule.",
      participle: "vu",
      specialNote: "The imperfect uses the present nous stem voy-: je me voyais, nous nous voyions.",
      present: examples(sentence("Elles se voient chaque semaine.", "They see each other every week."), sentence("Elles ne se voient pas chaque semaine.", "They do not see each other every week."), sentence("Quand se voient-elles ?", "When do they see each other?")),
      imperfect: examples(sentence("Elles se voyaient chaque semaine.", "They used to see each other every week."), sentence("Elles ne se voyaient pas chaque semaine.", "They did not see each other every week."), sentence("Quand se voyaient-elles ?", "When did they use to see each other?")),
      passeCompose: examples(sentence("Elles se sont vues hier.", "They saw each other yesterday."), sentence("Elles ne se sont pas vues hier.", "They did not see each other yesterday."), sentence("Se sont-elles vues hier ?", "Did they see each other yesterday?")),
      imperative: imperativeExamples(sentence("Voyons-nous demain !", "Let’s see each other tomorrow!"), sentence("Ne nous voyons pas trop tard !", "Let’s not meet too late!"))
    },
    {
      key: "seRegarder",
      infinitive: "se regarder",
      ipa: "/sə ʁə.ɡaʁ.de/",
      meaning: "to look at oneself / each other",
      type: "reciprocal",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct reciprocal or reflexive se: agreement",
      agreementExplanation: "Regarder takes a direct object, so the preceding reflexive pronoun triggers agreement.",
      participle: "regardé",
      present: examples(sentence("Elles se regardent dans le miroir.", "They look at themselves in the mirror."), sentence("Elles ne se regardent pas dans le miroir.", "They do not look at themselves in the mirror."), sentence("Pourquoi se regardent-elles ?", "Why are they looking at each other?")),
      imperfect: examples(sentence("Elles se regardaient en silence.", "They were looking at each other silently."), sentence("Elles ne se regardaient pas.", "They were not looking at each other."), sentence("Pourquoi se regardaient-elles ?", "Why were they looking at each other?")),
      passeCompose: examples(sentence("Elles se sont regardées en silence.", "They looked at each other silently."), sentence("Elles ne se sont pas regardées.", "They did not look at each other."), sentence("Pourquoi se sont-elles regardées ?", "Why did they look at each other?")),
      imperative: imperativeExamples(sentence("Regardez-vous dans le miroir !", "Look at yourselves in the mirror!"), sentence("Ne vous regardez pas pendant toute la réunion !", "Do not look at each other throughout the entire meeting!"))
    },
    {
      key: "seDire",
      infinitive: "se dire",
      ipa: "/sə diʁ/",
      meaning: "to say to oneself / each other",
      type: "reciprocal",
      secondaryTypes: ["reflexive"],
      lexicalStatus: "occasional",
      agreementMode: "indirect-se",
      agreementTitle: "Se is indirect: dit stays invariant",
      agreementExplanation: "Dire quelque chose à quelqu’un makes se an indirect object. Do not agree with se. A separate preceding COD can still trigger agreement: les histoires qu’elles se sont dites.",
      participle: "dit",
      specialNote: "The imperfect follows nous disons: elles se disaient.",
      present: examples(sentence("Elles se disent bonjour chaque matin.", "They say hello to each other every morning."), sentence("Elles ne se disent pas bonjour.", "They do not say hello to each other."), sentence("Que se disent-elles chaque matin ?", "What do they say to each other every morning?")),
      imperfect: examples(sentence("Elles se disaient tout.", "They used to tell each other everything."), sentence("Elles ne se disaient pas tout.", "They did not tell each other everything."), sentence("Que se disaient-elles ?", "What did they use to tell each other?")),
      passeCompose: examples(sentence("Elles se sont dit bonjour.", "They said hello to each other."), sentence("Elles ne se sont pas dit bonjour.", "They did not say hello to each other."), sentence("Se sont-elles dit bonjour ?", "Did they say hello to each other?")),
      imperative: imperativeExamples(sentence("Dites-vous la vérité !", "Tell each other the truth!"), sentence("Ne vous dites pas de mensonges !", "Do not tell each other lies!")),
      contrastIds: ["se-dire-objects"]
    },
    {
      key: "seVendre",
      infinitive: "se vendre",
      ipa: "/sə vɑ̃dʁ/",
      meaning: "to sell / be sold",
      type: "passive",
      lexicalStatus: "occasional",
      agreementMode: "subject",
      agreementTitle: "Passive meaning: agree with the grammatical subject",
      agreementExplanation: "The thing being sold is the grammatical subject, so the participle agrees with it.",
      participle: "vendu",
      present: examples(sentence("Ces maisons se vendent vite.", "These houses sell quickly."), sentence("Ces maisons ne se vendent pas vite.", "These houses do not sell quickly."), sentence("Pourquoi ces maisons se vendent-elles si vite ?", "Why do these houses sell so quickly?")),
      imperfect: examples(sentence("Ces maisons se vendaient vite.", "These houses used to sell quickly."), sentence("Ces maisons ne se vendaient pas vite.", "These houses did not sell quickly."), sentence("Pourquoi ces maisons se vendaient-elles si vite ?", "Why did these houses sell so quickly?")),
      passeCompose: examples(sentence("Ces maisons se sont vendues rapidement.", "These houses sold quickly."), sentence("Ces maisons ne se sont pas vendues rapidement.", "These houses did not sell quickly."), sentence("Ces maisons se sont-elles vendues rapidement ?", "Did these houses sell quickly?")),
      imperative: imperativeExamples(sentence("Vends-toi avec confiance pendant l’entretien !", "Market yourself confidently during the interview!"), sentence("Ne te vends pas à n’importe quel prix !", "Do not sell yourself at just any price!"), "These commands use the direct reflexive sense ‘sell or market yourself’; the passive ‘be sold’ sense is not normally a command.")
    },
    {
      key: "seSouvenir",
      infinitive: "se souvenir",
      ipa: "/sə su.və.niʁ/",
      meaning: "to remember",
      type: "essential",
      lexicalStatus: "essential",
      agreementMode: "subject",
      agreementTitle: "Essentially pronominal: agree with the subject",
      agreementExplanation: "Se has no separate object function in se souvenir de. The participle agrees with the subject.",
      participle: "souvenu",
      specialNote: "Present souviens / souvenons / souviennent alternates stems. The imperfect follows nous souvenons: elle se souvenait.",
      present: examples(sentence("Elle se souvient de ce voyage.", "She remembers this trip."), sentence("Elle ne se souvient pas de ce voyage.", "She does not remember this trip."), sentence("De quoi se souvient-elle ?", "What does she remember?")),
      imperfect: examples(sentence("Elle se souvenait de ce voyage.", "She remembered this trip."), sentence("Elle ne s’en souvenait pas.", "She did not remember it."), sentence("De quoi se souvenait-elle ?", "What did she remember?")),
      passeCompose: examples(sentence("Elle s’est souvenue de ce voyage.", "She remembered this trip."), sentence("Elle ne s’en est pas souvenue.", "She did not remember it."), sentence("De quoi s’est-elle souvenue ?", "What did she remember?")),
      imperative: imperativeExamples(sentence("Souviens-toi de cette adresse !", "Remember this address!"), sentence("Ne te souviens pas uniquement des mauvais moments !", "Do not remember only the bad times!"))
    },
    {
      key: "sEnvoler",
      infinitive: "s’envoler",
      ipa: "/sɑ̃.vɔ.le/",
      meaning: "to fly away / take off",
      type: "essential",
      lexicalStatus: "essential",
      agreementMode: "subject",
      agreementTitle: "Essentially pronominal: agree with the subject",
      agreementExplanation: "In modern ordinary use, s’envoler is essentially pronominal and its participle agrees with the subject.",
      participle: "envolé",
      present: examples(sentence("Les hirondelles s’envolent à l’aube.", "The swallows fly away at dawn."), sentence("Elles ne s’envolent pas à l’aube.", "They do not fly away at dawn."), sentence("Quand s’envolent-elles ?", "When do they fly away?")),
      imperfect: examples(sentence("Elles s’envolaient à l’aube.", "They used to fly away at dawn."), sentence("Elles ne s’envolaient pas à l’aube.", "They did not fly away at dawn."), sentence("Quand s’envolaient-elles ?", "When did they use to fly away?")),
      passeCompose: examples(sentence("Elles se sont envolées à l’aube.", "They flew away at dawn."), sentence("Elles ne se sont pas envolées à l’aube.", "They did not fly away at dawn."), sentence("Quand se sont-elles envolées ?", "When did they fly away?")),
      imperative: imperativeExamples(sentence("Envole-toi, petit oiseau !", "Fly away, little bird!"), sentence("Ne t’envole pas trop loin !", "Do not fly too far away!"))
    },
    {
      key: "sAssumer",
      infinitive: "s’assumer",
      ipa: "/sa.sy.me/",
      meaning: "to accept / own oneself",
      type: "reflexive",
      lexicalStatus: "occasional",
      agreementMode: "direct-se",
      agreementTitle: "Direct se: agreement",
      agreementExplanation: "In the meaning to accept oneself, se is direct and the participle agrees with the subject represented by se.",
      participle: "assumé",
      present: examples(sentence("Elle s’assume pleinement.", "She fully accepts herself."), sentence("Elle ne s’assume pas encore.", "She does not accept herself yet."), sentence("Est-ce qu’elle s’assume pleinement ?", "Does she fully accept herself?")),
      imperfect: examples(sentence("Elle s’assumait davantage.", "She was becoming more accepting of herself."), sentence("Elle ne s’assumait pas encore.", "She did not accept herself yet."), sentence("Est-ce qu’elle s’assumait davantage ?", "Was she becoming more accepting of herself?")),
      passeCompose: examples(sentence("Elle s’est enfin assumée.", "She finally accepted herself."), sentence("Elle ne s’est pas encore assumée.", "She has not accepted herself yet."), sentence("S’est-elle enfin assumée ?", "Did she finally accept herself?")),
      imperative: imperativeExamples(sentence("Assume-toi pleinement !", "Accept yourself fully!"), sentence("Ne t’assume pas seulement en privé !", "Do not accept yourself only in private!"))
    },
    {
      key: "sEnnuyer",
      infinitive: "s’ennuyer",
      ipa: "/sɑ̃.nɥi.je/",
      meaning: "to be bored",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Lexicalized meaning: agree with the subject",
      agreementExplanation: "In the lexicalized meaning to be bored, se has no useful separate object role and the participle agrees with the subject.",
      participle: "ennuyé",
      specialNote: "Present m’ennuie contrasts with nous nous ennuyons. The imperfect keeps y: je m’ennuyais, nous nous ennuyions.",
      present: examples(sentence("Elles s’ennuient pendant le trajet.", "They are bored during the trip."), sentence("Elles ne s’ennuient pas pendant le trajet.", "They are not bored during the trip."), sentence("Pourquoi s’ennuient-elles ?", "Why are they bored?")),
      imperfect: examples(sentence("Elles s’ennuyaient pendant le trajet.", "They were bored during the trip."), sentence("Elles ne s’ennuyaient pas.", "They were not bored."), sentence("Pourquoi s’ennuyaient-elles ?", "Why were they bored?")),
      passeCompose: examples(sentence("Elles se sont ennuyées pendant le trajet.", "They were bored during the trip."), sentence("Elles ne se sont pas ennuyées.", "They were not bored."), sentence("Pourquoi se sont-elles ennuyées ?", "Why were they bored?")),
      imperative: imperativeExamples(sentence("Ennuyez-vous sans moi si vous voulez !", "Be bored without me if you want!"), sentence("Ne vous ennuyez pas pendant le trajet !", "Do not be bored during the trip!"), "The affirmative command is grammatically possible but usually sarcastic or strongly context-dependent; the negative command is much more common.")
    },
    {
      key: "sInquieter",
      infinitive: "s’inquiéter",
      ipa: "/sɛ̃.kje.te/",
      meaning: "to worry / be worried",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Lexicalized meaning: agree with the subject",
      agreementExplanation: "In the established pronominal meaning to worry or be worried, se has no separate object role and the participle agrees with the subject.",
      participle: "inquiété",
      specialNote: "The written accent changes in the present: je m’inquiète, but nous nous inquiétons. This app uses the traditional future spelling je m’inquiéterai; je m’inquièterai is also accepted.",
      present: examples(sentence("Elles s’inquiètent pour leur mère.", "They worry about their mother."), sentence("Elles ne s’inquiètent pas pour leur mère.", "They do not worry about their mother."), sentence("Pourquoi s’inquiètent-elles pour leur mère ?", "Why do they worry about their mother?")),
      imperfect: examples(sentence("Elles s’inquiétaient souvent pour leur mère.", "They often worried about their mother."), sentence("Elles ne s’inquiétaient pas pour leur mère.", "They did not worry about their mother."), sentence("Pourquoi s’inquiétaient-elles pour leur mère ?", "Why did they worry about their mother?")),
      passeCompose: examples(sentence("Elles se sont inquiétées pour leur mère.", "They worried about their mother."), sentence("Elles ne se sont pas inquiétées pour leur mère.", "They did not worry about their mother."), sentence("Pourquoi se sont-elles inquiétées pour leur mère ?", "Why did they worry about their mother?")),
      imperative: imperativeExamples(sentence("Inquiète-toi seulement si la fièvre monte !", "Worry only if the fever rises!"), sentence("Ne t’inquiète pas pour moi !", "Do not worry about me!"), "The affirmative command is possible, but the reassuring negative Ne t’inquiète pas is much more common.")
    },
    {
      key: "seDetendre",
      infinitive: "se détendre",
      ipa: "/sə de.tɑ̃dʁ/",
      meaning: "to relax",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Change-of-state meaning: agree with the subject",
      agreementExplanation: "In the ordinary meaning to relax, se is part of the change-of-state construction and the participle agrees with the subject.",
      participle: "détendu",
      present: examples(sentence("Elles se détendent après le travail.", "They relax after work."), sentence("Elles ne se détendent pas après le travail.", "They do not relax after work."), sentence("Comment se détendent-elles ?", "How do they relax?")),
      imperfect: examples(sentence("Elles se détendaient après le travail.", "They used to relax after work."), sentence("Elles ne se détendaient pas.", "They did not relax."), sentence("Comment se détendaient-elles ?", "How did they use to relax?")),
      passeCompose: examples(sentence("Elles se sont détendues après le travail.", "They relaxed after work."), sentence("Elles ne se sont pas détendues.", "They did not relax."), sentence("Comment se sont-elles détendues ?", "How did they relax?")),
      imperative: imperativeExamples(sentence("Détends-toi après le travail !", "Relax after work!"), sentence("Ne te détends pas avant d’avoir fini !", "Do not relax before you have finished!"))
    },
    {
      key: "seCalmer",
      infinitive: "se calmer",
      ipa: "/sə kal.me/",
      meaning: "to calm down",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Change-of-state meaning: agree with the subject",
      agreementExplanation: "In the ordinary meaning to calm down, the participle agrees with the subject.",
      participle: "calmé",
      present: examples(sentence("Elles se calment grâce à la musique.", "They calm down thanks to music."), sentence("Elles ne se calment pas.", "They do not calm down."), sentence("Comment se calment-elles ?", "How do they calm down?")),
      imperfect: examples(sentence("Elles se calmaient grâce à la musique.", "They used to calm down thanks to music."), sentence("Elles ne se calmaient pas.", "They did not calm down."), sentence("Comment se calmaient-elles ?", "How did they calm down?")),
      passeCompose: examples(sentence("Elles se sont calmées.", "They calmed down."), sentence("Elles ne se sont pas calmées.", "They did not calm down."), sentence("Comment se sont-elles calmées ?", "How did they calm down?")),
      imperative: imperativeExamples(sentence("Calme-toi avant de répondre !", "Calm down before answering!"), sentence("Ne te calme pas trop vite : le danger n’est pas passé !", "Do not calm down too quickly: the danger has not passed!"), "A negative command needs a context where remaining alert matters; the affirmative is far more common.")
    },
    {
      key: "seBaigner",
      infinitive: "se baigner",
      ipa: "/sə bɛ.ɲe/",
      meaning: "to swim / bathe",
      type: "reflexive",
      lexicalStatus: "lexicalized",
      agreementMode: "direct-se",
      agreementTitle: "Ordinary reflexive use: agreement",
      agreementExplanation: "In the ordinary meaning to bathe or swim, the reflexive form agrees with the person or people bathing.",
      participle: "baigné",
      specialNote: "The imperfect nous and vous forms are nous nous baignions and vous vous baigniez.",
      present: examples(sentence("Elles se baignent dans la mer.", "They swim in the sea."), sentence("Elles ne se baignent pas dans la mer.", "They do not swim in the sea."), sentence("Où se baignent-elles ?", "Where do they swim?")),
      imperfect: examples(sentence("Elles se baignaient dans la mer.", "They used to swim in the sea."), sentence("Elles ne s’y baignaient pas.", "They did not use to swim there."), sentence("Où se baignaient-elles ?", "Where did they use to swim?")),
      passeCompose: examples(sentence("Elles se sont baignées dans la mer.", "They swam in the sea."), sentence("Elles ne s’y sont pas baignées.", "They did not swim there."), sentence("Où se sont-elles baignées ?", "Where did they swim?")),
      imperative: imperativeExamples(sentence("Baignez-vous ici !", "Swim here!"), sentence("Ne vous baignez pas ici !", "Do not swim here!"))
    },
    {
      key: "sInteresser",
      infinitive: "s’intéresser à",
      sourceInfinitive: "s’intéresser",
      ipa: "/sɛ̃.te.ʁe.se a/",
      meaning: "to be interested in",
      type: "essential",
      lexicalStatus: "lexicalized",
      agreementMode: "subject",
      agreementTitle: "Lexicalized meaning: agree with the subject",
      agreementExplanation: "In s’intéresser à, se is part of the established pronominal meaning. The participle agrees with the subject; à introduces the topic, not the reflexive object.",
      participle: "intéressé",
      presentRows: [
        { pronoun: "je", form: "m’intéresse", full: "je m’intéresse", ipa: "/ʒə mɛ̃.te.ʁɛs/", en: "I am interested", example: "Je m’intéresse à l’histoire.", exampleEn: "I am interested in history.", negative: "Je ne m’intéresse pas à l’histoire.", negativeEn: "I am not interested in history.", question: "À quoi est-ce que je m’intéresse ?" },
        { pronoun: "tu", form: "t’intéresses", full: "tu t’intéresses", ipa: "/ty tɛ̃.te.ʁɛs/", en: "you are interested", example: "Tu t’intéresses à la musique.", exampleEn: "You are interested in music.", negative: "Tu ne t’intéresses pas à la musique.", negativeEn: "You are not interested in music.", question: "À quoi t’intéresses-tu ?" },
        { pronoun: "il", form: "s’intéresse", full: "il s’intéresse", ipa: "/il sɛ̃.te.ʁɛs/", en: "he is interested", example: "Il s’intéresse au cinéma.", exampleEn: "He is interested in cinema.", negative: "Il ne s’intéresse pas au cinéma.", negativeEn: "He is not interested in cinema.", question: "À quoi s’intéresse-t-il ?" },
        { pronoun: "elle", form: "s’intéresse", full: "elle s’intéresse", ipa: "/ɛl sɛ̃.te.ʁɛs/", en: "she is interested", example: "Elle s’intéresse à ce cours.", exampleEn: "She is interested in this class.", negative: "Elle ne s’intéresse pas à ce cours.", negativeEn: "She is not interested in this class.", question: "À quoi s’intéresse-t-elle ?" },
        { pronoun: "nous", form: "nous intéressons", full: "nous nous intéressons", ipa: "/nu nu.zɛ̃.te.ʁe.sɔ̃/", en: "we are interested", example: "Nous nous intéressons à l’art.", exampleEn: "We are interested in art.", negative: "Nous ne nous intéressons pas à l’art.", negativeEn: "We are not interested in art.", question: "À quoi nous intéressons-nous ?" },
        { pronoun: "vous", form: "vous intéressez", full: "vous vous intéressez", ipa: "/vu vu.zɛ̃.te.ʁe.se/", en: "you are interested", example: "Vous vous intéressez aux langues.", exampleEn: "You are interested in languages.", negative: "Vous ne vous intéressez pas aux langues.", negativeEn: "You are not interested in languages.", question: "À quoi vous intéressez-vous ?" },
        { pronoun: "ils", form: "s’intéressent", full: "ils s’intéressent", ipa: "/il sɛ̃.te.ʁɛs/", en: "they are interested", example: "Ils s’intéressent au sport.", exampleEn: "They are interested in sports.", negative: "Ils ne s’intéressent pas au sport.", negativeEn: "They are not interested in sports.", question: "À quoi s’intéressent-ils ?" },
        { pronoun: "elles", form: "s’intéressent", full: "elles s’intéressent", ipa: "/ɛl sɛ̃.te.ʁɛs/", en: "they are interested", example: "Elles s’intéressent à l’histoire.", exampleEn: "They are interested in history.", negative: "Elles ne s’intéressent pas à l’histoire.", negativeEn: "They are not interested in history.", question: "À quoi s’intéressent-elles ?" }
      ],
      present: examples(sentence("Elles s’intéressent à l’histoire.", "They are interested in history."), sentence("Elles ne s’intéressent pas à l’histoire.", "They are not interested in history."), sentence("À quoi s’intéressent-elles ?", "What are they interested in?")),
      imperfect: examples(sentence("Elles s’intéressaient à l’histoire.", "They were interested in history."), sentence("Elles ne s’y intéressaient pas.", "They were not interested in it."), sentence("À quoi s’intéressaient-elles ?", "What were they interested in?")),
      passeCompose: examples(sentence("Elles se sont intéressées à l’histoire.", "They became interested in history."), sentence("Elles ne s’y sont pas intéressées.", "They did not become interested in it."), sentence("À quoi se sont-elles intéressées ?", "What did they become interested in?")),
      imperative: imperativeExamples(sentence("Intéresse-toi à l’histoire locale !", "Take an interest in local history!"), sentence("Ne t’intéresse pas seulement aux dates !", "Do not be interested only in dates!"))
    }
  ];

  function normalizeInfinitive(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’‘]/g, "'")
      .toLowerCase()
      .replace(/^s'/, "se ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function cloneRows(rows) {
    return Array.isArray(rows) ? rows.map(row => ({ ...row })) : [];
  }

  function unwrapIpa(value) {
    return String(value || "").trim().replace(/^\//, "").replace(/\/$/, "");
  }

  function wrapIpa(value) {
    return `/${unwrapIpa(value)}/`;
  }

  function beginsWithVowelSound(value) {
    return /^[aeiouyɑɛəɔœø]/u.test(unwrapIpa(value));
  }

  function getImperfectLexicalIpa(seed, pronoun) {
    const profile = imperfectIpaProfiles[seed.key];
    if (!profile) throw new Error(`${seed.infinitive} needs an imparfait IPA profile.`);
    return profile[pronoun] || profile.common;
  }

  function composeSimplePronominalIpa(seed, pronoun) {
    const lexicalIpa = getImperfectLexicalIpa(seed, pronoun);
    const prefixGroup = beginsWithVowelSound(lexicalIpa) ? "vowel" : "consonant";
    const prefix = simplePronominalPrefixIpa[prefixGroup][pronoun];
    if (!prefix) throw new Error(`${seed.infinitive} is missing an IPA prefix for ${pronoun}.`);
    return wrapIpa(`${prefix}${lexicalIpa}`);
  }

  function composeCompoundPronominalIpa(seed, pronoun, participleIpa) {
    const lexicalIpa = unwrapIpa(participleIpa);
    if (!lexicalIpa) throw new Error(`${seed.infinitive} needs a past-participle IPA.`);
    const prefixGroup = beginsWithVowelSound(lexicalIpa) ? "vowel" : "consonant";
    const prefix = compoundPronominalPrefixIpa[prefixGroup][pronoun];
    if (!prefix) throw new Error(`${seed.infinitive} is missing a compound IPA prefix for ${pronoun}.`);
    return wrapIpa(`${prefix}${lexicalIpa}`);
  }

  function findSourceItem(seed) {
    const items = FR.data.verbs && Array.isArray(FR.data.verbs.items)
      ? FR.data.verbs.items
      : [];
    const target = normalizeInfinitive(seed.sourceInfinitive || seed.infinitive);
    return items.find(item => item.group === "pronominal" && (
      item.key === seed.key || normalizeInfinitive(item.label) === target
    )) || null;
  }

  function getPresentRows(seed, sourceItem) {
    const rows = seed.presentRows || (sourceItem && sourceItem.rows);
    if (!Array.isArray(rows) || rows.length !== 8) {
      throw new Error(`${seed.infinitive} needs eight canonical present rows.`);
    }
    const sharedIpa = FR.data.grammar && FR.data.grammar.verbPhraseIpa || {};
    return cloneRows(rows).map(row => {
      const ipa = row.ipa || sharedIpa[row.full];
      if (!ipa) throw new Error(`${seed.infinitive} is missing present IPA for ${row.full}.`);
      return { ...row, ipa };
    });
  }

  function buildImparfaitRows(seed, presentRows) {
    const deriveRows = FR.data.imparfait && FR.data.imparfait.deriveRows;
    if (typeof deriveRows !== "function") {
      throw new Error("FR.data.imparfait.deriveRows is required for pronominal imperfect forms.");
    }

    const derived = deriveRows({
      key: seed.key,
      label: seed.infinitive,
      rows: presentRows
    }, {
      // Pronominal prefixes need their own IPA composition below.
      skipIpa: true
    });
    return MATRIX_PRONOUNS.map(pronoun => {
      const row = derived.rows.find(entry => entry.pronoun === pronoun);
      if (!row) throw new Error(`${seed.infinitive} is missing the ${pronoun} imparfait form.`);
      return {
        pronoun,
        form: row.full.replace(new RegExp(`^${pronoun}\\s+`), ""),
        full: row.full,
        speech: row.full,
        ipa: composeSimplePronominalIpa(seed, pronoun)
      };
    });
  }

  function stripAgreementMarkers(value) {
    return String(value || "").replace(/\([^)]*\)/g, "").trim();
  }

  function getParticiple(seed, sourceItem) {
    const sourceParticiple = sourceItem && sourceItem.passeCompose && sourceItem.passeCompose.pastParticiple;
    return stripAgreementMarkers(sourceParticiple) || seed.participle;
  }

  function getParticipleIpa(seed, sourceItem) {
    const sourceIpa = sourceItem && sourceItem.passeCompose && sourceItem.passeCompose.pastParticipleIpa;
    const profile = imperfectIpaProfiles[seed.key];
    const ipa = sourceIpa || profile && profile.participle;
    if (!ipa) throw new Error(`${seed.infinitive} needs a past-participle IPA.`);
    return wrapIpa(ipa);
  }

  function getAgreedParticiple(base, pronoun, invariant) {
    if (invariant) return base;
    const forms = {
      je: `${base}(e)`,
      tu: `${base}(e)`,
      il: base,
      elle: `${base}e`,
      nous: `${base}(e)s`,
      vous: `${base}(e)(s)`,
      ils: `${base}s`,
      elles: `${base}es`
    };
    return forms[pronoun];
  }

  function getSpokenParticiple(base, pronoun, invariant) {
    if (invariant) return base;
    if (pronoun === "elle") return `${base}e`;
    if (pronoun === "elles") return `${base}es`;
    if (pronoun === "nous" || pronoun === "vous" || pronoun === "ils") return `${base}s`;
    return base;
  }

  function getCompoundPrefix(pronoun) {
    return {
      je: "je me suis ",
      tu: "tu t’es ",
      il: "il s’est ",
      elle: "elle s’est ",
      nous: "nous nous sommes ",
      vous: "vous vous êtes ",
      ils: "ils se sont ",
      elles: "elles se sont "
    }[pronoun];
  }

  function buildPasseComposeRows(seed, sourceItem, participleIpa) {
    const participle = getParticiple(seed, sourceItem);
    const invariant = seed.agreementMode === "indirect-se";
    return MATRIX_PRONOUNS.map(pronoun => {
      const prefix = getCompoundPrefix(pronoun);
      const displayParticiple = getAgreedParticiple(participle, pronoun, invariant);
      const spokenParticiple = getSpokenParticiple(participle, pronoun, invariant);
      return {
        pronoun,
        form: `${prefix.replace(new RegExp(`^${pronoun}\\s+`), "")}${displayParticiple}`,
        full: `${prefix}${displayParticiple}`,
        speech: `${prefix}${spokenParticiple}`,
        participle: displayParticiple,
        ipa: composeCompoundPronominalIpa(seed, pronoun, participleIpa)
      };
    });
  }

  function orderPresentRows(rows) {
    return MATRIX_PRONOUNS.map(pronoun => rows.find(row => row.pronoun === pronoun)).filter(Boolean);
  }

  function buildItem(seed) {
    const sourceItem = findSourceItem(seed);
    const presentRows = getPresentRows(seed, sourceItem);
    const infinitiveIpa = seed.ipa || (sourceItem && sourceItem.passeCompose && sourceItem.passeCompose.infinitiveIpa) || "";
    const participle = getParticiple(seed, sourceItem);
    const participleIpa = getParticipleIpa(seed, sourceItem);
    const item = {
      id: seed.key,
      key: seed.key,
      infinitive: seed.infinitive,
      sourceInfinitive: seed.sourceInfinitive || seed.infinitive,
      ipa: infinitiveIpa,
      meaning: seed.meaning,
      type: seed.type,
      secondaryTypes: seed.secondaryTypes || [],
      lexicalStatus: seed.lexicalStatus,
      agreementMode: seed.agreementMode,
      agreementTitle: seed.agreementTitle,
      agreementExplanation: seed.agreementExplanation,
      specialNote: seed.specialNote || "",
      contrastIds: seed.contrastIds || [],
      participle,
      participleIpa,
      examples: {
        present: seed.present,
        imperfect: seed.imperfect,
        passeCompose: seed.passeCompose,
        imperative: seed.imperative
      },
      paradigms: {
        present: orderPresentRows(presentRows),
        imperfect: buildImparfaitRows(seed, presentRows),
        passeCompose: buildPasseComposeRows(seed, sourceItem, participleIpa)
      },
      source: sourceItem ? "FR.data.verbs" : "promoted"
    };
    return item;
  }

  const itemErrors = [];
  const items = seeds.map(seed => {
    try {
      return buildItem(seed);
    } catch (error) {
      itemErrors.push({ key: seed.key, infinitive: seed.infinitive, message: error.message });
      return {
        id: seed.key,
        key: seed.key,
        infinitive: seed.infinitive,
        ipa: seed.ipa,
        meaning: seed.meaning,
        type: seed.type,
        secondaryTypes: seed.secondaryTypes || [],
        lexicalStatus: seed.lexicalStatus,
        agreementMode: seed.agreementMode,
        agreementTitle: seed.agreementTitle,
        agreementExplanation: seed.agreementExplanation,
        examples: {},
        paradigms: { present: [], imperfect: [], passeCompose: [] },
        error: error.message
      };
    }
  });

  const byId = new Map(items.map(item => [item.id, item]));

  FR.data.pronominalVerbs = {
    typeOrder: TYPE_ORDER,
    matrixPronouns: MATRIX_PRONOUNS,
    types: typeDefinitions,
    agreementModes,
    agreementContrasts,
    lexicalStatuses,
    items,
    errors: itemErrors,
    getById(id) {
      return byId.get(id) || null;
    },
    getByType(type) {
      return items.filter(item => item.type === type);
    }
  };
})(window);
