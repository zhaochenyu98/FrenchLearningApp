(function registerConjunctionData(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.data = FR.data || {};

  const quickNotes = [
    {
      title: "que",
      english: "that",
      summary: "Introduces the content of a thought, statement, belief, or fact.",
      example: "Je sais que tu es là."
    },
    {
      title: "si",
      english: "if / whether",
      summary: "Introduces a condition or an indirect yes-or-no question.",
      example: "Je ne sais pas s’il vient."
    },
    {
      title: "parce que",
      english: "because",
      summary: "Introduces the reason or cause for something.",
      example: "Je reste parce qu’il pleut."
    },
    {
      title: "quand",
      english: "when",
      summary: "Introduces the time when another action happens.",
      example: "Je partirai quand tu arriveras."
    }
  ];

  const causeExpressions = [
    {
      id: "grace-a",
      term: "grâce à",
      ipa: "/ɡʁɑs a/",
      english: "thanks to · 多亏 / 幸亏",
      role: "Favourable cause",
      description: "Usually presents a cause that leads to a positive result. Follow it with a noun phrase or a stressed pronoun such as toi or lui. Contract à + le to au and à + les to aux: grâce au professeur, grâce aux amis.",
      pattern: "Grâce à + noun phrase / stressed pronoun; grâce au / aux + noun.",
      examples: [
        { fr: "Grâce à ton aide, j’ai réussi cet examen.", en: "Thanks to your help, I passed this exam." },
        { fr: "Grâce à toi, nous sommes arrivés à l’heure.", en: "Thanks to you, we arrived on time." }
      ]
    },
    {
      id: "a-cause-de",
      term: "à cause de",
      ipa: "/a koz də/",
      english: "because of · 由于 / 因为",
      role: "Unfavourable or neutral cause",
      description: "Often presents a cause of an unwanted result, though neutral uses also occur. Follow it with a noun phrase or a stressed pronoun. Use d’ before a vowel sound or mute h, du for de + le, and des for de + les: à cause d’un problème, à cause du bruit, à cause de lui.",
      pattern: "À cause de / d’ + noun phrase / stressed pronoun; à cause du / des + noun.",
      examples: [
        { fr: "Nous sommes en retard à cause de la circulation.", en: "We are late because of the traffic." },
        { fr: "Le match a été annulé à cause du mauvais temps.", en: "The match was cancelled because of bad weather." }
      ]
    },
    {
      id: "comme",
      term: "comme",
      ipa: "/kɔm/",
      english: "as / since · 由于 / 因为",
      role: "Background cause first",
      description: "In its causal use, comme normally introduces a clause at the beginning of the sentence, presenting the reason as background before the result. In other contexts, comme can mean “like” or “as.”",
      pattern: "Comme + subject + conjugated verb, result clause.",
      examples: [
        { fr: "Comme il pleut, nous restons à la maison.", en: "As it is raining, we are staying home." },
        { fr: "Comme le magasin est fermé, nous reviendrons demain.", en: "As the shop is closed, we will come back tomorrow." }
      ]
    },
    {
      id: "car",
      term: "car",
      ipa: "/kaʁ/",
      english: "for / because · 因为 / 这是因为",
      role: "Explanation or justification",
      description: "Adds an explanation or justification after a statement. More common in writing or formal speech than parce que. Usually follows a comma; use parce que for a direct answer to Pourquoi ?",
      pattern: "Statement, car + subject + conjugated verb.",
      examples: [
        { fr: "Je prends un parapluie, car il pleut.", en: "I am taking an umbrella because it is raining." },
        { fr: "Nous devons partir, car le dernier bus arrive bientôt.", en: "We have to leave because the last bus is coming soon." }
      ]
    },
    {
      id: "parce-que",
      term: "parce que",
      ipa: "/paʁs kə/",
      english: "because · 因为",
      role: "Neutral reason / answer to why",
      description: "Introduces a reason, often new information, and directly answers Pourquoi ? Common in both speech and writing. Que becomes qu’ before a vowel sound or mute h: parce qu’il, parce qu’elle.",
      pattern: "Result clause + parce que + subject + conjugated verb.",
      examples: [
        { fr: "Je reste à la maison parce que je suis malade.", en: "I am staying home because I am ill." },
        { fr: "Il porte un manteau parce qu’il fait froid.", en: "He is wearing a coat because it is cold." }
      ]
    },
    {
      id: "puisque",
      term: "puisque",
      ipa: "/pɥiskə/",
      english: "since / seeing that · 既然",
      role: "Known or accepted reason",
      description: "Presents a reason as already known, obvious, or accepted by the listener, then draws a conclusion or justifies an action. It can introduce the reason before or after the main clause. Write puisqu’il and puisqu’elle.",
      pattern: "Puisque + subject + conjugated verb, conclusion / action; main clause + puisque + reason clause.",
      examples: [
        { fr: "Puisque tu connais la ville, montre-nous le chemin.", en: "Since you know the city, show us the way." },
        { fr: "Puisqu’il est déjà tard, nous devrions rentrer.", en: "Since it is already late, we should go home." }
      ]
    }
  ];

  const resultExpressions = [
    {
      id: "donc",
      term: "donc",
      ipa: "/dɔ̃k/",
      english: "so / therefore · 因此",
      role: "Logical result",
      description: "Introduces a logical consequence or conclusion. Common in both speech and writing.",
      pattern: "Cause, donc + subject + conjugated verb.",
      examples: [
        { fr: "Il pleut, donc je prends un parapluie.", en: "It is raining, so I am taking an umbrella." }
      ]
    },
    {
      id: "alors",
      term: "alors",
      ipa: "/a.lɔʁ/",
      english: "so / then · 所以 / 于是",
      role: "Conversational result",
      description: "Often introduces a result in conversation. Alors can also mean “then” in a time sequence; context tells you which meaning applies.",
      pattern: "Cause, alors + subject + conjugated verb.",
      examples: [
        { fr: "J’ai raté le bus, alors je suis venu à pied.", en: "I missed the bus, so I came on foot." }
      ]
    },
    {
      id: "cest-pourquoi",
      term: "c’est pourquoi",
      ipa: "/sɛ puʁ.kwa/",
      english: "that is why · 这就是为什么 / 因此",
      role: "Explicit result",
      description: "Refers back to a reason already stated and introduces its consequence. More formal than c’est pour ça que; do not add que after pourquoi.",
      pattern: "Cause. C’est pourquoi + subject + conjugated verb.",
      examples: [
        { fr: "Le train a été annulé. C’est pourquoi nous sommes en retard.", en: "The train was cancelled. That is why we are late." }
      ]
    },
    {
      id: "cest-pour-ca-que",
      term: "c’est pour ça que",
      ipa: "/sɛ puʁ sa kə/",
      english: "that is why · 所以 / 正因如此",
      role: "Informal result",
      description: "A common spoken way to express a consequence. Keep que, which becomes qu’ before a vowel sound or mute h. C’est pour cela que is a more formal alternative.",
      pattern: "Cause. C’est pour ça que + subject + conjugated verb.",
      examples: [
        { fr: "Je suis malade. C’est pour ça que je reste à la maison.", en: "I am ill. That is why I am staying home." }
      ]
    },
    {
      id: "tellement-de-que",
      term: "tellement de… que",
      ipa: "/tɛl.mɑ̃ də … kə/",
      english: "so much / so many… that · 如此多……以至于",
      role: "Quantity → result",
      description: "Use tellement de + noun, then que + a complete clause to show the result of a large quantity. De becomes d’ before a vowel sound or mute h; do not add a partitive or indefinite article.",
      pattern: "Tellement de / d’ + noun + que + subject + conjugated verb.",
      examples: [
        { fr: "J’ai tellement de travail que je ne peux pas sortir.", en: "I have so much work that I cannot go out." },
        { fr: "Il y a tellement d’élèves que la salle est pleine.", en: "There are so many students that the room is full." }
      ]
    },
    {
      id: "si-que",
      term: "si… que",
      ipa: "/si … kə/",
      english: "so… that · 如此……以至于",
      role: "Degree → result",
      description: "Place si before an adjective or adverb and introduce the result with que + a complete clause. Here si means “so,” rather than the conditional “if.” Use tellement de for noun quantities.",
      pattern: "Si + adjective / adverb + que + subject + conjugated verb.",
      examples: [
        { fr: "Elle est si fatiguée qu’elle s’endort tout de suite.", en: "She is so tired that she falls asleep immediately." },
        { fr: "Il parle si vite que je ne comprends pas.", en: "He speaks so fast that I do not understand." }
      ]
    },
    {
      id: "assez-pour",
      term: "assez… pour",
      ipa: "/a.se … puʁ/",
      english: "enough… to · 足够……可以",
      role: "Sufficient degree or quantity",
      description: "A sufficient degree or quantity makes an action possible. Pour is followed by an infinitive. Add de / d’ before a noun, but place assez directly before an adjective or adverb.",
      pattern: "Assez + adjective / adverb + pour + infinitive; assez de / d’ + noun + pour + infinitive.",
      examples: [
        { fr: "Elle est assez grande pour atteindre l’étagère.", en: "She is tall enough to reach the shelf." },
        { fr: "Nous avons assez d’argent pour acheter les billets.", en: "We have enough money to buy the tickets." }
      ]
    },
    {
      id: "trop-pour",
      term: "trop… pour",
      ipa: "/tʁo … puʁ/",
      english: "too… to · 太……而不能",
      role: "Excessive degree or quantity",
      description: "An excessive degree or quantity prevents an action or makes it unsuitable. Pour is followed by an infinitive, usually without ne… pas: the excess already explains why the action cannot happen. Use trop de / d’ before a noun.",
      pattern: "Trop + adjective / adverb + pour + infinitive; trop de / d’ + noun + pour + infinitive.",
      examples: [
        { fr: "Ce café est trop chaud pour être bu tout de suite.", en: "This coffee is too hot to be drunk immediately." },
        { fr: "J’ai trop de travail pour sortir ce soir.", en: "I have too much work to go out tonight." }
      ]
    }
  ];

  const items = [
    {
      id: "que",
      term: "que",
      ipa: "/kə/",
      english: "that",
      role: "Content connector",
      description: "Use conjunction que to attach a complete idea to verbs such as penser, croire, dire, and savoir.",
      notes: [
        {
          title: "Elision",
          text: "Que becomes qu’ before a vowel sound or mute h: qu’elle, qu’il, qu’on, qu’une."
        },
        {
          title: "Different from question que",
          text: "Here que means “that” and connects clauses. In Que fais-tu ?, que is a question word meaning “what.”"
        }
      ],
      crossLink: {
        tab: "questions",
        target: "questions-que-quoi-study-card",
        label: "Compare question-word que and quoi"
      },
      examples: [
        {
          label: "Opinion",
          fr: "Je pense que tu as raison.",
          en: "I think that you are right."
        },
        {
          label: "Reported speech",
          fr: "Elle dit qu’elle arrive demain.",
          en: "She says that she is arriving tomorrow."
        },
        {
          label: "Known fact",
          fr: "Nous savons que le magasin est fermé.",
          en: "We know that the store is closed."
        },
        {
          label: "Belief about the past",
          fr: "Je crois qu’ils sont déjà partis.",
          en: "I think that they have already left."
        }
      ]
    },
    {
      id: "si",
      term: "si",
      ipa: "/si/",
      english: "if / whether",
      role: "Condition or indirect yes/no question",
      description: "Use si for a condition meaning “if,” or after verbs such as savoir and se demander when English uses “whether.”",
      callout: "Elision rule: only si + il and si + ils become s’il and s’ils. Keep si elle, si elles, and si on without an apostrophe.",
      notes: [
        {
          title: "A likely future condition",
          text: "Use the present tense directly after si, then the future or an imperative in the main clause: Si tu as le temps, nous sortirons. Do not write si tu auras."
        },
        {
          title: "An indirect yes/no question",
          text: "Si can mean “whether”: Je me demande s’il est prêt. This is not a condition."
        }
      ],
      elisionRows: [
        {
          subject: "il",
          form: "s’il",
          ipa: "/sil/",
          explanation: "Elide si before il."
        },
        {
          subject: "ils",
          form: "s’ils",
          ipa: "/sil/",
          explanation: "Elide si before ils."
        },
        {
          subject: "elle",
          form: "si elle",
          ipa: "/si ɛl/",
          explanation: "No elision: never *s’elle."
        },
        {
          subject: "elles",
          form: "si elles",
          ipa: "/si ɛl/",
          explanation: "No elision: never *s’elles."
        },
        {
          subject: "on",
          form: "si on",
          ipa: "/si ɔ̃/",
          explanation: "No elision: never *s’on."
        }
      ],
      examples: [
        {
          label: "Condition + imperative",
          fr: "Si tu as le temps, appelle-moi.",
          en: "If you have time, call me."
        },
        {
          label: "Condition + future",
          fr: "S’il pleut demain, nous resterons à la maison.",
          en: "If it rains tomorrow, we will stay home."
        },
        {
          label: "No elision before elle",
          fr: "Si elle arrive tôt, nous dînerons ensemble.",
          en: "If she arrives early, we will have dinner together."
        },
        {
          label: "No elision before on",
          fr: "Si on part maintenant, on arrivera à l’heure.",
          en: "If we leave now, we will arrive on time."
        },
        {
          label: "Whether + elles",
          fr: "Je ne sais pas si elles viennent.",
          en: "I do not know whether they are coming."
        },
        {
          label: "Whether + ils",
          fr: "Je me demande s’ils sont prêts.",
          en: "I wonder whether they are ready."
        }
      ]
    },
    {
      id: "parce-que",
      term: "parce que",
      ipa: "/paʁs kə/",
      english: "because",
      role: "Reason or cause",
      description: "Use parce que to explain why something happens or why someone does something.",
      notes: [
        {
          title: "Answering pourquoi",
          text: "Pourquoi asks for a reason; parce que introduces the answer: Pourquoi pars-tu ? Parce que je suis fatigué."
        },
        {
          title: "Elision",
          text: "Parce que becomes parce qu’ before a vowel sound or mute h: parce qu’il, parce qu’elle, parce qu’on."
        }
      ],
      examples: [
        {
          label: "Weather",
          fr: "Je reste à la maison parce qu’il pleut.",
          en: "I am staying home because it is raining."
        },
        {
          label: "Motivation",
          fr: "Elle apprend le français parce qu’elle travaille à Paris.",
          en: "She is learning French because she works in Paris."
        },
        {
          label: "Question and answer",
          fr: "Pourquoi pars-tu ? Parce que je suis fatigué.",
          en: "Why are you leaving? Because I am tired."
        },
        {
          label: "Past cause",
          fr: "Nous sommes en retard parce que le bus n’est pas arrivé.",
          en: "We are late because the bus did not arrive."
        }
      ]
    },
    {
      id: "quand",
      term: "quand",
      ipa: "/kɑ̃/",
      english: "when",
      role: "Time connector",
      description: "Use conjunction quand to say when the action in one clause happens in relation to another action.",
      notes: [
        {
          title: "Habit, future, or past",
          text: "Quand can connect actions in different time frames. Choose each verb tense according to the meaning."
        },
        {
          title: "Future contrast with si",
          text: "For a future event, French can use the future after quand: Quand tu auras le temps, nous sortirons. After conditional si, use the present: Si tu as le temps, nous sortirons."
        },
        {
          title: "No apostrophe",
          text: "Quand does not elide before a vowel: write quand il, not *qu’il, when you mean “when he.”"
        }
      ],
      crossLink: {
        tab: "questions",
        target: "questions-common-reference-study-card",
        label: "Compare question-word quand"
      },
      examples: [
        {
          label: "Habit",
          fr: "Quand j’ai le temps, je lis.",
          en: "When I have time, I read."
        },
        {
          label: "Future",
          fr: "Je t’appellerai quand j’arriverai.",
          en: "I will call you when I arrive."
        },
        {
          label: "Future time clause",
          fr: "Quand nous serons à Paris, nous visiterons le Louvre.",
          en: "When we are in Paris, we will visit the Louvre."
        },
        {
          label: "Past interruption",
          fr: "Je dormais quand tu as appelé.",
          en: "I was sleeping when you called."
        }
      ]
    },
    {
      id: "causes",
      title: "原因的表达 · La cause",
      term: "la cause",
      ipa: "/la koz/",
      english: "cause / reason",
      role: "原因的表达 · Expressing causes",
      description: "Express a cause with grâce à, à cause de, comme, car, parce que, or puisque. Choose according to the structure that follows and whether the reason is favourable, explanatory, new, or already accepted.",
      callout: "名词 / 从句: grâce à and à cause de take a noun phrase or stressed pronoun. Comme, car, parce que, and puisque introduce a complete clause, normally in the indicative for a factual reason. Parce que answers “why?”; puisque presents the reason as already known or accepted.",
      expressions: causeExpressions,
      examples: causeExpressions.flatMap(expression => expression.examples)
    },
    {
      id: "results",
      title: "结果的表达 · La conséquence",
      term: "la conséquence",
      ipa: "/la kɔ̃.se.kɑ̃s/",
      english: "result / consequence",
      role: "结果的表达 · Expressing results",
      description: "Express a result with donc, alors, c’est pourquoi, c’est pour ça que, tellement de… que, si… que, assez… pour, or trop… pour. These connectors and constructions all relate a cause, degree, or quantity to its consequence.",
      callout: "Que + 从句 / pour + 不定式: tellement de… que and si… que introduce a result clause, normally in the indicative for an actual result. Assez… pour and trop… pour take an infinitive, whose understood subject usually matches the main clause’s subject.",
      expressions: resultExpressions,
      examples: resultExpressions.flatMap(expression => expression.examples)
    }
  ];

  FR.data.conjunctions = Object.freeze({
    quickNotes: Object.freeze(quickNotes),
    items: Object.freeze(items)
  });
})(window);
