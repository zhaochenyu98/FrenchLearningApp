    const exampleSentences = [
      { fr: "Je suis chinois.", en: "I am Chinese.", note: "identity / nationality", negative: "Je ne suis pas chinois.", negativeEn: "I am not Chinese." },
      { fr: "Tu es à la maison.", en: "You are at home.", note: "location", negative: "Tu n’es pas à la maison.", negativeEn: "You are not at home." },
      { fr: "Nous sommes fatigués.", en: "We are tired.", note: "description / state", negative: "Nous ne sommes pas fatigués.", negativeEn: "We are not tired." },
      { fr: "On est fatigués.", en: "We are tired.", note: "everyday spoken French often uses on for we", negative: "On n’est pas fatigués.", negativeEn: "We are not tired." },
      { fr: "J’ai vingt-huit ans.", en: "I am twenty-eight years old.", note: "French uses avoir for age", negative: "Je n’ai pas vingt-huit ans.", negativeEn: "I am not twenty-eight years old." },
      { fr: "Vous avez un stylo.", en: "You have a pen.", note: "possession", negative: "Vous n’avez pas de stylo.", negativeEn: "You do not have a pen." },
      { fr: "Ils ont faim.", en: "They are hungry.", note: "common expression with avoir", negative: "Ils n’ont pas faim.", negativeEn: "They are not hungry." }
    ];

    const avoirExpressionRows = [
      {
        expression: "avoir besoin de",
        ipa: "/a.vwaʁ bə.zwɛ̃ də/",
        meaning: "to need",
        note: "Use de + noun for what is needed, or de + infinitive for an action that is necessary.",
        examples: [
          {
            label: "de + noun",
            fr: "Tu as besoin d’aide.",
            en: "You need help.",
            negative: "Tu n’as pas besoin d’aide.",
            negativeEn: "You do not need help.",
            question: "As-tu besoin d’aide ?",
            questionEn: "Do you need help?"
          },
          {
            label: "de + infinitive",
            fr: "Nous avons besoin de partir tôt.",
            en: "We need to leave early.",
            negative: "Nous n’avons pas besoin de partir tôt.",
            negativeEn: "We do not need to leave early.",
            question: "Avons-nous besoin de partir tôt ?",
            questionEn: "Do we need to leave early?"
          }
        ]
      },
      {
        expression: "avoir envie de",
        ipa: "/a.vwaʁ ɑ̃.vi də/",
        meaning: "to feel like / to want",
        note: "Use de + noun for a desired thing, or de + infinitive for an action someone feels like doing.",
        examples: [
          {
            label: "de + noun",
            fr: "Elle a envie d’un café.",
            en: "She feels like having a coffee.",
            negative: "Elle n’a pas envie d’un café.",
            negativeEn: "She does not feel like having a coffee.",
            question: "A-t-elle envie d’un café ?",
            questionEn: "Does she feel like having a coffee?"
          },
          {
            label: "de + infinitive",
            fr: "Ils ont envie de voyager cet été.",
            en: "They feel like traveling this summer.",
            negative: "Ils n’ont pas envie de voyager cet été.",
            negativeEn: "They do not feel like traveling this summer.",
            question: "Est-ce qu’ils ont envie de voyager cet été ?",
            questionEn: "Do they feel like traveling this summer?"
          }
        ]
      }
    ];

    const extraGrammarFlashcards = [
      { fr: "Je suis au café.", en: "I am at the café.", source: "être: location" },
      { fr: "Je suis prêt.", en: "I am ready.", source: "être: state" },
      { fr: "Je suis en avance.", en: "I am early.", source: "être: time/state" },
      { fr: "Tu es très calme.", en: "You are very calm.", source: "être: description" },
      { fr: "Tu es dans la cuisine.", en: "You are in the kitchen.", source: "être: location" },
      { fr: "Tu es mon ami.", en: "You are my friend.", source: "être: identity" },
      { fr: "Il est malade.", en: "He is sick.", source: "être: state" },
      { fr: "Il est au bureau.", en: "He is at the office.", source: "être: location" },
      { fr: "Il est neuf heures.", en: "It is nine o’clock.", source: "être: time" },
      { fr: "Elle est professeur.", en: "She is a teacher.", source: "être: profession" },
      { fr: "Elle est en classe.", en: "She is in class.", source: "être: location" },
      { fr: "Elle est très gentille.", en: "She is very kind.", source: "être: description" },
      { fr: "Nous sommes à la gare.", en: "We are at the train station.", source: "être: location" },
      { fr: "Nous sommes prêts.", en: "We are ready.", source: "être: state" },
      { fr: "Nous sommes en vacances.", en: "We are on vacation.", source: "être: situation" },
      { fr: "Vous êtes les bienvenus.", en: "You are welcome.", source: "être: expression" },
      { fr: "Vous êtes près de la porte.", en: "You are near the door.", source: "être: location" },
      { fr: "Vous êtes très patient.", en: "You are very patient.", source: "être: description" },
      { fr: "Ils sont dans le jardin.", en: "They are in the garden.", source: "être: location" },
      { fr: "Ils sont en réunion.", en: "They are in a meeting.", source: "être: situation" },
      { fr: "Elles sont à la bibliothèque.", en: "They are at the library.", source: "être: location" },
      { fr: "Elles sont très occupées.", en: "They are very busy.", source: "être: state" },
      { fr: "J’ai faim.", en: "I am hungry.", source: "avoir expression" },
      { fr: "J’ai soif.", en: "I am thirsty.", source: "avoir expression" },
      { fr: "J’ai froid.", en: "I am cold.", source: "avoir expression" },
      { fr: "J’ai chaud.", en: "I am hot.", source: "avoir expression" },
      { fr: "J’ai besoin d’aide.", en: "I need help.", source: "avoir expression" },
      { fr: "J’ai envie d’un café.", en: "I feel like having a coffee.", source: "avoir expression" },
      { fr: "Tu as raison.", en: "You are right.", source: "avoir expression" },
      { fr: "Tu as tort.", en: "You are wrong.", source: "avoir expression" },
      { fr: "Tu as le temps.", en: "You have time.", source: "avoir: possession" },
      { fr: "Tu as une question.", en: "You have a question.", source: "avoir: possession" },
      { fr: "Il a peur.", en: "He is afraid.", source: "avoir expression" },
      { fr: "Il a sommeil.", en: "He is sleepy.", source: "avoir expression" },
      { fr: "Il a une voiture.", en: "He has a car.", source: "avoir: possession" },
      { fr: "Elle a un rendez-vous.", en: "She has an appointment.", source: "avoir: schedule" },
      { fr: "Elle a beaucoup de travail.", en: "She has a lot of work.", source: "avoir: possession" },
      { fr: "Elle a de la chance.", en: "She is lucky.", source: "avoir expression" },
      { fr: "Nous avons une réservation.", en: "We have a reservation.", source: "avoir: possession" },
      { fr: "Nous avons des billets.", en: "We have tickets.", source: "avoir: possession" },
      { fr: "Nous avons trente minutes.", en: "We have thirty minutes.", source: "avoir: time" },
      { fr: "Vous avez une minute.", en: "You have a minute.", source: "avoir: time", negative: "Vous n’avez pas de minute.", question: "Avez-vous une minute ?" },
      { fr: "Vous avez une adresse.", en: "You have an address.", source: "avoir: possession", negative: "Vous n’avez pas d’adresse.", question: "Avez-vous une adresse ?" },
      { fr: "Vous avez une bonne idée.", en: "You have a good idea.", source: "avoir: possession" },
      { fr: "Ils ont deux enfants.", en: "They have two children.", source: "avoir: family" },
      { fr: "Ils ont peur du chien.", en: "They are afraid of the dog.", source: "avoir expression" },
      { fr: "Ils ont rendez-vous demain.", en: "They have an appointment tomorrow.", source: "avoir: schedule" },
      { fr: "Elles ont une maison.", en: "They have a house.", source: "avoir: possession" },
      { fr: "Elles ont faim.", en: "They are hungry.", source: "avoir expression" },
      { fr: "Elles ont des devoirs.", en: "They have homework.", source: "avoir: possession" }
    ];

    function normalizeFlashcardBody(text, prefix) {
      return text
        .trim()
        .replace(/[.?!]\s*$/u, "")
        .replace(new RegExp(`^${prefix}\\s*`, "iu"), "")
        .trim();
    }

    function negateAvoirComplement(body) {
      const withDe = body.replace(/^(un|une|des|du|de la|de l[’'])\s+/iu, "de ");
      return withDe.replace(/^de ([aeiouhàâäéèêëîïôöùûüœ])/iu, "d’$1");
    }

    const grammarFlashcardPatterns = [
      { prefix: "Je suis", negativePrefix: "Je ne suis pas", questionPrefix: "Suis-je" },
      { prefix: "Tu es", negativePrefix: "Tu n’es pas", questionPrefix: "Es-tu" },
      { prefix: "Il est", negativePrefix: "Il n’est pas", questionPrefix: "Est-il" },
      { prefix: "Elle est", negativePrefix: "Elle n’est pas", questionPrefix: "Est-elle" },
      { prefix: "Nous sommes", negativePrefix: "Nous ne sommes pas", questionPrefix: "Sommes-nous" },
      { prefix: "On est", negativePrefix: "On n’est pas", questionPrefix: "Est-on" },
      { prefix: "Vous êtes", negativePrefix: "Vous n’êtes pas", questionPrefix: "Êtes-vous" },
      { prefix: "Ils sont", negativePrefix: "Ils ne sont pas", questionPrefix: "Sont-ils" },
      { prefix: "Elles sont", negativePrefix: "Elles ne sont pas", questionPrefix: "Sont-elles" },
      { prefix: "J’ai", negativePrefix: "Je n’ai pas", questionPrefix: "Ai-je", transformNegativeBody: negateAvoirComplement },
      { prefix: "Tu as", negativePrefix: "Tu n’as pas", questionPrefix: "As-tu", transformNegativeBody: negateAvoirComplement },
      { prefix: "Il a", negativePrefix: "Il n’a pas", questionPrefix: "A-t-il", transformNegativeBody: negateAvoirComplement },
      { prefix: "Elle a", negativePrefix: "Elle n’a pas", questionPrefix: "A-t-elle", transformNegativeBody: negateAvoirComplement },
      { prefix: "Nous avons", negativePrefix: "Nous n’avons pas", questionPrefix: "Avons-nous", transformNegativeBody: negateAvoirComplement },
      { prefix: "On a", negativePrefix: "On n’a pas", questionPrefix: "A-t-on", transformNegativeBody: negateAvoirComplement },
      { prefix: "Vous avez", negativePrefix: "Vous n’avez pas", questionPrefix: "Avez-vous", transformNegativeBody: negateAvoirComplement },
      { prefix: "Ils ont", negativePrefix: "Ils n’ont pas", questionPrefix: "Ont-ils", transformNegativeBody: negateAvoirComplement },
      { prefix: "Elles ont", negativePrefix: "Elles n’ont pas", questionPrefix: "Ont-elles", transformNegativeBody: negateAvoirComplement }
    ];

    const grammarFlashcardPromptHints = [
      { prefix: "Tu es", english: "You", hinted: "You (tu, informal singular)" },
      { prefix: "Tu as", english: "You", hinted: "You (tu, informal singular)" },
      { prefix: "Vous êtes", english: "You", hinted: "You (vous, formal singular or plural)" },
      { prefix: "Vous avez", english: "You", hinted: "You (vous, formal singular or plural)" },
      { prefix: "Ils sont", english: "They", hinted: "They (ils, masculine or mixed plural)" },
      { prefix: "Ils ont", english: "They", hinted: "They (ils, masculine or mixed plural)" },
      { prefix: "Elles sont", english: "They", hinted: "They (elles, feminine plural)" },
      { prefix: "Elles ont", english: "They", hinted: "They (elles, feminine plural)" },
      { prefix: "Nous sommes", english: "We", hinted: "We (nous)" },
      { prefix: "Nous avons", english: "We", hinted: "We (nous)" },
      { prefix: "On est", english: "We", hinted: "We (on, everyday spoken French)" },
      { prefix: "On a", english: "We", hinted: "We (on, everyday spoken French)" }
    ];

    const grammarFlashcardPromptOverrides = new Map([
      ["Tu es prêt.", "You (tu, informal masculine singular) are ready."],
      ["Vous êtes en retard.", "You (vous, formal singular) are late."],
      ["Vous avez raison.", "You (vous, formal singular) are right."],
      ["Vous avez un stylo.", "You (vous, formal singular) have a pen."],
      ["Vous êtes les bienvenus.", "You (vous, masculine or mixed plural) are welcome."],
      ["Vous êtes près de la porte.", "You (vous, plural) are near the door."],
      ["Vous êtes très patient.", "You (vous, formal masculine singular) are very patient."],
      ["Vous avez une minute.", "You (vous, formal singular) have a minute."],
      ["Vous avez une adresse.", "You (vous, formal singular) have an address."],
      ["Vous avez une bonne idée.", "You (vous, plural) have a good idea."]
    ]);

    function startsWithFrenchPrefix(text, prefix) {
      return text.trim().toLocaleLowerCase("fr-FR").startsWith(prefix.toLocaleLowerCase("fr-FR"));
    }

    function getGrammarFlashcardPromptEn(card) {
      const override = grammarFlashcardPromptOverrides.get(card.fr.trim());
      if (override) return override;
      const hint = grammarFlashcardPromptHints.find(item => startsWithFrenchPrefix(card.fr, item.prefix));
      if (!hint || !card.en.startsWith(hint.english)) {
        return card.en;
      }

      return `${hint.hinted}${card.en.slice(hint.english.length)}`;
    }

    function withGrammarFlashcardPrompt(card) {
      return {
        ...card,
        promptEn: getGrammarFlashcardPromptEn(card)
      };
    }

    function completeGrammarFlashcard(card) {
      const pattern = grammarFlashcardPatterns.find(item => new RegExp(`^${item.prefix}\\s+`, "iu").test(card.fr.trim()));
      if (!pattern) return withGrammarFlashcardPrompt(card);

      const body = normalizeFlashcardBody(card.fr, pattern.prefix);
      const negativeBody = pattern.transformNegativeBody ? pattern.transformNegativeBody(body) : body;
      return withGrammarFlashcardPrompt({
        ...card,
        negative: card.negative || `${pattern.negativePrefix} ${negativeBody}.`,
        question: card.question || `${pattern.questionPrefix} ${body} ?`
      });
    }

    const grammarFlashcards = [
      ...etreRows.map(item => completeGrammarFlashcard({
        fr: item.example,
        en: item.exampleEn,
        source: `être: ${item.full}`,
        negative: item.negative
      })),
      ...avoirRows.map(item => completeGrammarFlashcard({
        fr: item.example,
        en: item.exampleEn,
        source: `avoir: ${item.full}`,
        negative: item.negative
      })),
      ...exampleSentences.map(item => completeGrammarFlashcard({
        fr: item.fr,
        en: item.en,
        source: item.note,
        negative: item.negative
      })),
      ...avoirExpressionRows.flatMap(item => item.examples.map(example => completeGrammarFlashcard({
        fr: example.fr,
        en: example.en,
        source: item.expression,
        negative: example.negative,
        question: example.question
      }))),
      ...extraGrammarFlashcards.map(completeGrammarFlashcard)
    ];

    FR.data.grammar = {
      verbGroups: verbStudyGroups,
      verbItems: verbStudyItems,
      verbConfigs,
      verbPhraseIpa,
      avoirExpressions: avoirExpressionRows,
      grammarFlashcards
    };
