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
    }
  ];

  FR.data.conjunctions = Object.freeze({
    quickNotes: Object.freeze(quickNotes),
    items: Object.freeze(items)
  });
})(window);
