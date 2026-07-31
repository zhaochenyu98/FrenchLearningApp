(function initializeObjectPronounData(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.data = FR.data || {};

  const decisionMatrix = [
    {
      id: "cod",
      cue: "Direct object with no preposition",
      choice: "COD",
      forms: "me / te / le / la / nous / vous / les",
      rule: "Choose COD when the verb acts directly on a person or thing without à, de, or another preposition.",
      examples: [
        {
          original: { fr: "Je regarde cette photo.", en: "I am looking at this photo." },
          replacement: { fr: "Je la regarde.", en: "I am looking at it." }
        }
      ]
    },
    {
      id: "coi",
      cue: "à + person, when the verb licenses an indirect clitic",
      choice: "COI",
      forms: "me / te / lui / nous / vous / leur",
      rule: "Choose COI only when the French verb normally takes à + person and permits an indirect pronoun placed with the verb, as in parler à or téléphoner à.",
      warning: "The presence of à alone is not enough: penser à Marie becomes penser à elle, not lui penser.",
      examples: [
        {
          original: { fr: "Je téléphone à Léa.", en: "I am calling Léa." },
          replacement: { fr: "Je lui téléphone.", en: "I am calling her." }
        }
      ]
    },
    {
      id: "y",
      cue: "A place, or à + thing / idea",
      choice: "y",
      forms: "y",
      rule: "Choose y for a previously identified place, except an origin introduced by de, or for à + a thing or idea.",
      warning: "For a specific person after verbs such as penser à, keep à + a tonic pronoun.",
      examples: [
        {
          original: { fr: "Nous allons au marché.", en: "We are going to the market." },
          replacement: { fr: "Nous y allons.", en: "We are going there." }
        },
        {
          original: { fr: "Tu penses à ce problème.", en: "You are thinking about this problem." },
          replacement: { fr: "Tu y penses.", en: "You are thinking about it." }
        }
      ]
    },
    {
      id: "en",
      cue: "de / origin, a partitive or indefinite noun, or a quantity",
      choice: "en",
      forms: "en",
      rule: "Choose en for de + thing or place, an origin, a partitive or indefinite noun phrase, or a noun introduced by a quantity.",
      warning: "When a number or quantity remains important, keep it after the verb: J'en ai trois.",
      examples: [
        {
          original: { fr: "Elle vient de Paris.", en: "She comes from Paris." },
          replacement: { fr: "Elle en vient.", en: "She comes from there." }
        },
        {
          original: { fr: "J'achète trois pommes.", en: "I am buying three apples." },
          replacement: { fr: "J'en achète trois.", en: "I am buying three of them." }
        }
      ]
    },
    {
      id: "tonic",
      cue: "A person retained after a preposition",
      choice: "Tonic pronoun",
      forms: "moi / toi / lui / elle / nous / vous / eux / elles",
      rule: "Keep the preposition and use a tonic pronoun after avec, chez, pour, sans, de, and after selected verb patterns such as penser à + person.",
      warning: "Pour + person does not mechanically become COI. A beneficiary can become me / te / lui / nous / vous / leur only when that particular verb licenses the construction.",
      examples: [
        {
          original: { fr: "Je pense à Marie.", en: "I am thinking about Marie." },
          replacement: { fr: "Je pense à elle.", en: "I am thinking about her." }
        },
        {
          original: { fr: "Nous parlons de Paul.", en: "We are talking about Paul." },
          replacement: { fr: "Nous parlons de lui.", en: "We are talking about him." }
        }
      ]
    },
    {
      id: "ca",
      cue: "An explicit thing, idea, or situation",
      choice: "ça / cela",
      forms: "ça (everyday) / cela (more formal)",
      rule: "Use ça when you want to point to or state the reference explicitly. Unlike short pronouns placed with the verb, it normally stays after a verb or preposition when it is a complement.",
      warning: "Ça usually refers to something nonhuman. Applied to a person, it can sound dismissive or pejorative.",
      examples: [
        {
          original: { fr: "Tu comprends cette situation ?", en: "Do you understand this situation?" },
          replacement: { fr: "Tu comprends ça ?", en: "Do you understand that?" }
        }
      ]
    },
    {
      id: "pronominal",
      cue: "The object has the same referent as the subject",
      choice: "Pronominal / reflexive",
      forms: "me / te / se / nous / vous / se",
      rule: "Use the pronominal system when the subject acts on itself, or when the verb is learned as a pronominal verb.",
      warning: "This is a separate decision from ordinary COD and COI replacement; follow the verb's pronominal meaning and agreement rules.",
      examples: [
        {
          original: { fr: "Marie regarde Marie dans le miroir.", en: "Marie looks at Marie in the mirror." },
          replacement: { fr: "Marie se regarde dans le miroir.", en: "Marie looks at herself in the mirror." }
        }
      ]
    }
  ];

  const formsAtAGlance = {
    personalRows: [
      { person: "1st singular", subject: "je", cod: "me / m'", coi: "me / m'" },
      { person: "2nd singular", subject: "tu", cod: "te / t'", coi: "te / t'" },
      { person: "3rd singular", subject: "il / elle", cod: "le / la / l'", coi: "lui" },
      { person: "1st plural", subject: "nous", cod: "nous", coi: "nous" },
      { person: "2nd plural", subject: "vous", cod: "vous", coi: "vous" },
      { person: "3rd plural", subject: "ils / elles", cod: "les", coi: "leur" }
    ],
    invariantForms: [
      {
        form: "y",
        role: "Joint adverbial pronoun",
        replaces: "A place, or à + thing / idea",
        example: { fr: "J'y pense.", en: "I am thinking about it." }
      },
      {
        form: "en",
        role: "Joint adverbial pronoun",
        replaces: "de / origin, partitive, indefinite, or quantity phrase",
        example: { fr: "J'en veux deux.", en: "I want two of them." }
      },
      {
        form: "ça",
        role: "Independent demonstrative pronoun",
        replaces: "An explicitly identified thing, idea, or situation",
        example: { fr: "Je pense à ça.", en: "I am thinking about that." }
      }
    ],
    fallbacks: [
      {
        id: "tonic",
        title: "Tonic fallback for people",
        forms: "moi / toi / lui / elle / nous / vous / eux / elles",
        rule: "Use a tonic pronoun when a person remains after a preposition or when the verb does not license lui / leur.",
        examples: [
          { fr: "Elle vient avec moi.", en: "She is coming with me." },
          { fr: "Je pense à eux.", en: "I am thinking about them." }
        ]
      },
      {
        id: "reflexive",
        title: "Reflexive / pronominal fallback",
        forms: "me / te / se / nous / vous / se",
        rule: "Use a reflexive form when the object is the same person as the subject, or use the form required by a lexical pronominal verb.",
        examples: [
          { fr: "Elle se lave.", en: "She washes herself." },
          { fr: "Ils se souviennent de ce voyage.", en: "They remember that trip." }
        ]
      }
    ]
  };

  const totalWithObjects = {
    forms: [
      {
        form: "tout",
        ipa: "/tu/",
        label: "Neutral singular",
        meaning: "everything / all of it",
        note: "Tout replaces an entire idea or set of things by itself. Do not add le or la before it.",
        example: { fr: "Je comprends tout.", en: "I understand everything." }
      },
      {
        form: "tous",
        ipa: "/tus/",
        label: "Masculine or mixed plural",
        meaning: "all of them",
        note: "Tous agrees with a masculine or mixed plural noun resumed by the COD pronoun. As a pronoun, its final s is pronounced.",
        example: { fr: "Ces étudiants, je les connais tous.", en: "These students, I know all of them." }
      },
      {
        form: "toutes",
        ipa: "/tut/",
        label: "Feminine plural",
        meaning: "all of them",
        note: "Toutes agrees with a feminine plural noun resumed by the COD pronoun.",
        example: { fr: "Ces étudiantes, je les connais toutes.", en: "These female students, I know all of them." }
      }
    ],
    patterns: [
      {
        id: "tout-simple",
        title: "Simple tense and question",
        template: "les + conjugated verb + tous / toutes",
        note: "After a simple conjugated verb, place tous or toutes after the verb. It agrees with the noun represented by les.",
        examples: [
          { label: "Masculine or mixed", fr: "Mes voisins, je les connais tous.", en: "My neighbors, I know all of them." },
          { label: "Feminine", fr: "Mes voisines, je les connais toutes.", en: "My female neighbors, I know all of them." },
          { label: "Question", fr: "Les connais-tu tous ?", en: "Do you know all of them?" }
        ]
      },
      {
        id: "tout-passe-compose",
        title: "Passé composé",
        template: "les + auxiliary + tous / toutes + past participle",
        note: "Place tous or toutes between the auxiliary and past participle. The preceding COD les, not tous or toutes, controls past-participle agreement.",
        examples: [
          { label: "Masculine plural", fr: "Ces livres, je les ai tous lus.", en: "These books, I read all of them." },
          { label: "Feminine plural", fr: "Ces lettres, je les ai toutes lues.", en: "These letters, I read all of them." },
          { label: "Question", fr: "Les as-tu toutes lues ?", en: "Did you read all of them?" }
        ]
      },
      {
        id: "tout-infinitive",
        title: "Conjugated verb + infinitive",
        template: "conjugated verb + tous / toutes + les + infinitive",
        note: "When les belongs to an infinitive, a common placement puts tous or toutes immediately before les and the infinitive.",
        examples: [
          { label: "Masculine or mixed", fr: "Je vais tous les inviter.", en: "I am going to invite all of them." },
          { label: "Feminine", fr: "Je veux toutes les rencontrer.", en: "I want to meet all of them." }
        ]
      },
      {
        id: "tout-imperative",
        title: "Affirmative imperative",
        template: "imperative + les + tous / toutes",
        note: "Attach the COD pronoun to the affirmative imperative, then place tous or toutes after it.",
        examples: [
          { label: "Masculine or mixed", fr: "Invitez-les tous !", en: "Invite all of them!" },
          { label: "Feminine", fr: "Invitez-les toutes !", en: "Invite all of them!" }
        ]
      },
      {
        id: "tout-negation",
        title: "Negation: not all is not none",
        template: "ne + les + verb + pas + tous / toutes",
        note: "Pas tous or pas toutes means “not all of them.” It does not mean that none are included.",
        examples: [
          { label: "Not all, masculine or mixed", fr: "Je ne les connais pas tous.", en: "I do not know all of them." },
          { label: "Not all, feminine", fr: "Je ne les connais pas toutes.", en: "I do not know all of them." },
          { label: "None", fr: "Je ne connais aucun de mes voisins.", en: "I know none of my neighbors." }
        ]
      }
    ]
  };

  const placement = {
    regularOrder: {
      label: "Normal order before a verb",
      sequence: "me / te / se / nous / vous → le / la / les → lui / leur → y → en → verb",
      note: "Use this order before a conjugated verb, before an auxiliary in a compound tense, and before an infinitive when the pronouns belong to that infinitive. Negation surrounds the conjugated verb or auxiliary."
    },
    rows: [
      {
        id: "simple",
        title: "Simple tense, negation, and inversion",
        template: "subject + ne + pronoun(s) + verb + pas",
        note: "The pronouns stay immediately before the conjugated verb, including when the subject is inverted in a question.",
        examples: [
          { label: "Statement", fr: "Je le lui donne.", en: "I give it to him / her." },
          { label: "Negative", fr: "Je ne le lui donne pas.", en: "I do not give it to him / her." },
          { label: "Question", fr: "Le lui donnes-tu ?", en: "Are you giving it to him / her?" }
        ]
      },
      {
        id: "infinitive",
        title: "Conjugated verb + infinitive",
        template: "conjugated verb + pronoun(s) + infinitive",
        note: "Put a pronoun immediately before the verb it complements. It does not automatically move to the infinitive: Je lui demande de venir keeps lui with demander.",
        examples: [
          { label: "Statement", fr: "Je vais le lui donner.", en: "I am going to give it to him / her." },
          { label: "Negative", fr: "Je ne vais pas le lui donner.", en: "I am not going to give it to him / her." },
          { label: "Question", fr: "Vas-tu le lui donner ?", en: "Are you going to give it to him / her?" },
          { label: "Pronoun belongs to the first verb", fr: "Je lui demande de venir.", en: "I ask him / her to come." }
        ]
      },
      {
        id: "passe-compose",
        title: "Passé composé",
        template: "subject + pronoun(s) + auxiliary + past participle",
        note: "Place the pronouns before the auxiliary. A preceding COD can make the past participle agree in gender and number; a COI does not.",
        examples: [
          { label: "Feminine COD agreement", fr: "Je la lui ai donnée.", en: "I gave it to him / her. The thing represented by la is feminine." },
          { label: "Negative", fr: "Je ne la lui ai pas donnée.", en: "I did not give it to him / her." },
          { label: "Question", fr: "La lui as-tu donnée ?", en: "Did you give it to him / her?" }
        ]
      },
      {
        id: "negative-imperative",
        title: "Negative imperative",
        template: "ne + normal pronoun order + imperative + pas",
        note: "In a negative command, the pronouns return before the verb and use the normal preverbal order.",
        examples: [
          { label: "Negative command", fr: "Ne me le donne pas.", en: "Do not give it to me." },
          { label: "Negative command", fr: "Ne lui en parle pas.", en: "Do not talk to him / her about it." },
          { label: "Negative command", fr: "N'y va pas.", en: "Do not go there." }
        ]
      }
    ],
    affirmativeImperative: {
      label: "Affirmative imperative order",
      sequence: "verb → le / la / les → moi / toi / lui / nous / vous / leur → y → en",
      note: "Attach the pronouns with hyphens. Moi and toi contract before en or y. Add a euphonic s to an imperative ending that lacks one when y or en follows.",
      examples: [
        { label: "COD + person", fr: "Donne-le-moi.", en: "Give it to me." },
        { label: "COI + en", fr: "Parlez-lui-en.", en: "Talk to him / her about it." },
        { label: "moi + en", fr: "Donne-m'en.", en: "Give me some." },
        { label: "aller + y", fr: "Vas-y.", en: "Go there / Go ahead." },
        { label: "-er imperative + y", fr: "Penses-y.", en: "Think about it." },
        { label: "-er imperative + en", fr: "Manges-en.", en: "Eat some." }
      ]
    },
    agreementNotes: [
      {
        id: "cod-agreement",
        title: "Preceding COD: agreement may be required",
        rule: "With avoir, a preceding COD makes the past participle agree with the noun represented by that COD.",
        examples: [
          { fr: "La lettre, je l'ai écrite hier.", en: "The letter, I wrote it yesterday. Écrite agrees with the feminine singular COD l'." },
          { fr: "Je la lui ai donnée.", en: "I gave it to him / her. Donnée agrees with feminine la." }
        ]
      },
      {
        id: "en-no-agreement",
        title: "En: normally no agreement",
        rule: "When en is the direct complement, the past participle normally remains unchanged.",
        examples: [
          { fr: "Des fleurs, j'en ai acheté.", en: "Flowers, I bought some. Acheté normally remains unchanged with en." },
          { fr: "J'en ai acheté trois.", en: "I bought three of them." }
        ]
      },
      {
        id: "coi-no-agreement",
        title: "COI: no agreement",
        rule: "A COI pronoun never controls past-participle agreement.",
        examples: [
          { fr: "Elle leur a parlé.", en: "She spoke to them. Leur is indirect, so parlé does not agree." }
        ]
      }
    ]
  };

  const contrasts = [
    {
      id: "definite-partitive",
      title: "Specific direct object vs partitive amount",
      takeaway: "A definite object becomes le / la / les; a partitive or indefinite amount becomes en.",
      sides: [
        {
          label: "COD",
          original: { fr: "Je bois l'eau du verre.", en: "I drink the water in the glass." },
          replacement: { fr: "Je la bois.", en: "I drink it." }
        },
        {
          label: "En",
          original: { fr: "Je bois de l'eau.", en: "I drink water." },
          replacement: { fr: "J'en bois.", en: "I drink some." }
        }
      ]
    },
    {
      id: "person-thing-a",
      title: "à + recipient person vs à + thing",
      takeaway: "A licensed à + person recipient becomes COI; à + thing or idea becomes y.",
      sides: [
        {
          label: "COI",
          original: { fr: "Je réponds à Marie.", en: "I answer Marie." },
          replacement: { fr: "Je lui réponds.", en: "I answer her." }
        },
        {
          label: "Y",
          original: { fr: "Je réponds à la question.", en: "I answer the question." },
          replacement: { fr: "J'y réponds.", en: "I answer it." }
        }
      ]
    },
    {
      id: "destination-origin",
      title: "Destination or presence vs origin",
      takeaway: "Use y for the place where someone is or goes; use en for a place introduced by de.",
      sides: [
        {
          label: "Y",
          original: { fr: "Je vais à Paris.", en: "I am going to Paris." },
          replacement: { fr: "J'y vais.", en: "I am going there." }
        },
        {
          label: "En",
          original: { fr: "Je viens de Paris.", en: "I come from Paris." },
          replacement: { fr: "J'en viens.", en: "I come from there." }
        }
      ]
    },
    {
      id: "recipient-topic",
      title: "Speaking to a person vs speaking about a person",
      takeaway: "Parler à + person licenses COI. A specific person after de remains de + tonic pronoun in the beginner default.",
      sides: [
        {
          label: "COI",
          original: { fr: "Je parle à Marie.", en: "I speak to Marie." },
          replacement: { fr: "Je lui parle.", en: "I speak to her." }
        },
        {
          label: "Tonic",
          original: { fr: "Je parle de Marie.", en: "I talk about Marie." },
          replacement: { fr: "Je parle d'elle.", en: "I talk about her." }
        }
      ]
    },
    {
      id: "implicit-explicit",
      title: "Unstressed replacement vs explicit ça",
      takeaway: "Y and en quietly resume known information; ça points to or explicitly names the situation.",
      sides: [
        {
          label: "Y",
          original: { fr: "Tu penses à ce problème.", en: "You are thinking about this problem." },
          replacement: { fr: "Tu y penses.", en: "You are thinking about it." }
        },
        {
          label: "Ça",
          original: { fr: "Tu penses à cette situation ?", en: "Are you thinking about this situation?" },
          replacement: { fr: "Tu penses à ça.", en: "You are thinking about that." }
        }
      ]
    },
    {
      id: "verb-pattern",
      title: "Learn the French verb pattern, not the English preposition",
      takeaway: "Aider takes a direct person object, while parler takes à + person.",
      sides: [
        {
          label: "COD",
          original: { fr: "J'aide Paul.", en: "I help Paul." },
          replacement: { fr: "Je l'aide.", en: "I help him." }
        },
        {
          label: "COI",
          original: { fr: "Je parle à Paul.", en: "I speak to Paul." },
          replacement: { fr: "Je lui parle.", en: "I speak to him." }
        }
      ]
    },
    {
      id: "quantity-remains",
      title: "En replaces the noun, not the quantity",
      takeaway: "Keep the number or quantity expression after the verb.",
      sides: [
        {
          label: "Number",
          original: { fr: "J'achète trois pommes.", en: "I am buying three apples." },
          replacement: { fr: "J'en achète trois.", en: "I am buying three of them." }
        },
        {
          label: "Quantity word",
          original: { fr: "Nous prenons beaucoup de photos.", en: "We take many photos." },
          replacement: { fr: "Nous en prenons beaucoup.", en: "We take many of them." }
        }
      ]
    },
    {
      id: "other-self",
      title: "Another object vs the same person as the subject",
      takeaway: "Use COD for another person; use a reflexive or pronominal form when the subject and object have the same referent.",
      sides: [
        {
          label: "COD",
          original: { fr: "Marie regarde Paul.", en: "Marie looks at Paul." },
          replacement: { fr: "Marie le regarde.", en: "Marie looks at him." }
        },
        {
          label: "Pronominal",
          original: { fr: "Marie regarde Marie dans le miroir.", en: "Marie looks at Marie in the mirror." },
          replacement: { fr: "Marie se regarde dans le miroir.", en: "Marie looks at herself in the mirror." }
        }
      ]
    }
  ];

  FR.data.objectPronouns = {
    version: 2,
    decisionMatrix,
    formsAtAGlance,
    totalWithObjects,
    placement,
    contrasts
  };
})(window);
