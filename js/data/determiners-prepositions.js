    const demonstrativeRows = [
      {
        gender: "Masculine",
        number: "Singular",
        tone: "blue",
        forms: [
          {
            fr: "ce",
            en: "this / that",
            note: "before a masculine singular noun starting with a consonant sound",
            example: "ce pantalon",
            exampleEn: "this pair of pants",
            examples: [
              { fr: "ce pantalon", en: "this pair of pants" },
              { fr: "ce livre", en: "this book" }
            ]
          },
          {
            fr: "cet",
            en: "this / that",
            note: "before a masculine singular noun starting with a vowel sound",
            example: "cet ordinateur",
            exampleEn: "this computer",
            examples: [
              { fr: "cet ordinateur", en: "this computer" },
              { fr: "cet homme", en: "this man" }
            ]
          }
        ]
      },
      {
        gender: "Feminine",
        number: "Singular",
        tone: "green",
        forms: [
          {
            fr: "cette",
            en: "this / that",
            note: "before a feminine singular noun",
            example: "cette veste",
            exampleEn: "this jacket",
            examples: [
              { fr: "cette veste", en: "this jacket" },
              { fr: "cette maison", en: "this house" }
            ]
          }
        ]
      },
      {
        gender: "Masculine",
        number: "Plural",
        tone: "red",
        forms: [
          {
            fr: "ces",
            en: "these / those",
            note: "before masculine plural nouns",
            example: "ces pantalons",
            exampleEn: "these pants",
            examples: [
              { fr: "ces pantalons", en: "these pants" },
              { fr: "ces ordinateurs", en: "these computers" }
            ]
          }
        ]
      },
      {
        gender: "Feminine",
        number: "Plural",
        tone: "gold",
        forms: [
          {
            fr: "ces",
            en: "these / those",
            note: "before feminine plural nouns",
            example: "ces vestes",
            exampleEn: "these jackets",
            examples: [
              { fr: "ces vestes", en: "these jackets" },
              { fr: "ces maisons", en: "these houses" }
            ]
          }
        ]
      }
    ];

    const determinerCategories = {
      definite: [
        { fr: "le", en: "the", note: "before a singular masculine noun", example: "le livre", exampleEn: "the book" },
        { fr: "la", en: "the", note: "before a singular feminine noun", example: "la maison", exampleEn: "the house" },
        { fr: "les", en: "the", note: "before plural nouns", example: "les amis", exampleEn: "the friends" }
      ],
      indefinite: [
        { fr: "un", en: "a / an", note: "before a singular masculine noun", example: "un chat", exampleEn: "a cat" },
        { fr: "une", en: "a / an", note: "before a singular feminine noun", example: "une table", exampleEn: "a table" },
        { fr: "des", en: "some", note: "before plural nouns", example: "des livres", exampleEn: "some books" }
      ],
      demonstrative: demonstrativeRows.flatMap(row => row.forms)
    };

    const articleComparisonRows = [
      {
        label: "Masculine singular",
        definite: determinerCategories.definite[0],
        indefinite: determinerCategories.indefinite[0]
      },
      {
        label: "Feminine singular",
        definite: determinerCategories.definite[1],
        indefinite: determinerCategories.indefinite[1]
      },
      {
        label: "Plural",
        definite: determinerCategories.definite[2],
        indefinite: determinerCategories.indefinite[2]
      }
    ];

    const aArticleRules = [
      {
        fr: "à + le → au",
        en: "to / at the",
        note: "Use au before a masculine singular noun.",
        example: "Je vais au parc.",
        exampleEn: "I am going to the park.",
        speech: "au"
      },
      {
        fr: "à + la → à la",
        en: "to / at the",
        note: "À la stays separate before a feminine singular noun.",
        example: "Je vais à la bibliothèque.",
        exampleEn: "I am going to the library.",
        speech: "à la"
      },
      {
        fr: "à + l’ → à l’",
        en: "to / at the",
        note: "Use à l’ before a vowel sound.",
        example: "Je vais à l’école.",
        exampleEn: "I am going to school.",
        speech: "à l"
      },
      {
        fr: "à + les → aux",
        en: "to / at the",
        note: "Use aux before plural nouns.",
        example: "Je parle aux enfants.",
        exampleEn: "I am talking to the children.",
        speech: "aux"
      }
    ];

    const deArticleRules = [
      {
        fr: "de + le → du",
        en: "of / from the",
        note: "Use du before a masculine singular noun.",
        example: "Je viens du marché.",
        exampleEn: "I come from the market.",
        speech: "du"
      },
      {
        fr: "de + la → de la",
        en: "of / from the",
        note: "De la stays separate before a feminine singular noun.",
        example: "La porte de la cuisine est ouverte.",
        exampleEn: "The kitchen door is open.",
        speech: "de la"
      },
      {
        fr: "de + l’ → de l’",
        en: "of / from the",
        note: "Use de l’ before a vowel sound.",
        example: "Il parle de l’école.",
        exampleEn: "He is talking about the school.",
        speech: "de l"
      },
      {
        fr: "de + les → des",
        en: "of / from the",
        note: "Use des before plural nouns.",
        example: "Le sac des enfants est ici.",
        exampleEn: "The children’s bag is here.",
        speech: "des"
      }
    ];

    const partitiveArticleRows = [
      {
        label: "Masculine singular",
        fr: "du / de l’",
        en: "some / any",
        note: "Use du before a masculine consonant sound; use de l’ before a vowel sound.",
        speech: "du; de l",
        example: "Je bois du café.",
        exampleEn: "I drink coffee.",
        examples: [
          { fr: "Je bois du café.", en: "I drink coffee." },
          { fr: "Il faut du courage.", en: "It takes courage." },
          { fr: "J’ai de l’argent.", en: "I have money." },
          { fr: "Il a de l’espoir.", en: "He has hope." }
        ]
      },
      {
        label: "Feminine singular",
        fr: "de la / de l’",
        en: "some / any",
        note: "Use de la before a feminine consonant sound; use de l’ before a vowel sound.",
        speech: "de la; de l",
        example: "Elle mange de la soupe.",
        exampleEn: "She eats soup.",
        examples: [
          { fr: "Elle mange de la soupe.", en: "She eats soup." },
          { fr: "J’ai de la patience.", en: "I have patience." },
          { fr: "Il y a de l’eau.", en: "There is water." },
          { fr: "Elle a de l’énergie.", en: "She has energy." }
        ]
      },
      {
        label: "Plural",
        fr: "des",
        en: "some / any",
        note: "Use des before plural nouns when you mean an unspecified amount or number.",
        speech: "des",
        example: "J’achète des fruits.",
        exampleEn: "I am buying some fruit.",
        examples: [
          { fr: "J’achète des fruits.", en: "I am buying some fruit." },
          { fr: "Elle a des idées.", en: "She has ideas." },
          { fr: "Je mange des pâtes.", en: "I eat pasta." },
          { fr: "Nous avons des informations.", en: "We have information." }
        ]
      },
      {
        label: "Abstract noun focus",
        fr: "du / de la / de l’ / des",
        en: "often no word in English",
        note: "French often keeps a partitive article where English uses only the abstract noun.",
        speech: "du; de la; de l; des",
        example: "J’ai du temps.",
        exampleEn: "I have time.",
        examples: [
          { fr: "J’ai du temps.", en: "I have time." },
          { fr: "Tu as de la chance.", en: "You are lucky." },
          { fr: "Elle a de l’expérience.", en: "She has experience." },
          { fr: "Nous avons des idées.", en: "We have ideas." }
        ]
      }
    ];

    const possessiveRows = [
      {
        owner: "my",
        note: "for one owner",
        forms: [
          { form: "mon", ipa: "/mɔ̃/", label: "masculine singular", example: "mon téléphone", exampleEn: "my phone" },
          { form: "ma", ipa: "/ma/", label: "feminine singular", example: "ma voiture", exampleEn: "my car" },
          { form: "mes", ipa: "/me/", label: "plural", example: "mes clés", exampleEn: "my keys" }
        ]
      },
      {
        owner: "your (informal)",
        note: "for one person you know well",
        forms: [
          { form: "ton", ipa: "/tɔ̃/", label: "masculine singular", example: "ton sac", exampleEn: "your bag" },
          { form: "ta", ipa: "/ta/", label: "feminine singular", example: "ta chaise", exampleEn: "your chair" },
          { form: "tes", ipa: "/te/", label: "plural", example: "tes chaussures", exampleEn: "your shoes" }
        ]
      },
      {
        owner: "his / her / its",
        note: "depends on the noun, not the owner’s gender",
        forms: [
          { form: "son", ipa: "/sɔ̃/", label: "masculine singular", example: "son ami", exampleEn: "his/her friend" },
          { form: "sa", ipa: "/sa/", label: "feminine singular", example: "sa famille", exampleEn: "his/her family" },
          { form: "ses", ipa: "/se/", label: "plural", example: "ses enfants", exampleEn: "his/her children" }
        ]
      },
      {
        owner: "our",
        note: "same singular form for masculine and feminine",
        forms: [
          { form: "notre", ipa: "/nɔtʁ/", label: "masculine singular", example: "notre appartement", exampleEn: "our apartment" },
          { form: "notre", ipa: "/nɔtʁ/", label: "feminine singular", example: "notre école", exampleEn: "our school" },
          { form: "nos", ipa: "/no/", label: "plural", example: "nos amis", exampleEn: "our friends" }
        ]
      },
      {
        owner: "your (formal / plural)",
        note: "formal singular or more than one person",
        forms: [
          { form: "votre", ipa: "/vɔtʁ/", label: "masculine singular", example: "votre stylo", exampleEn: "your pen" },
          { form: "votre", ipa: "/vɔtʁ/", label: "feminine singular", example: "votre question", exampleEn: "your question" },
          { form: "vos", ipa: "/vo/", label: "plural", example: "vos documents", exampleEn: "your documents" }
        ]
      },
      {
        owner: "their",
        note: "same singular form for masculine and feminine",
        forms: [
          { form: "leur", ipa: "/lœʁ/", label: "masculine singular", example: "leur chien", exampleEn: "their dog" },
          { form: "leur", ipa: "/lœʁ/", label: "feminine singular", example: "leur chambre", exampleEn: "their room" },
          { form: "leurs", ipa: "/lœʁ/", label: "plural", example: "leurs parents", exampleEn: "their parents" }
        ]
      }
    ];

    const possessiveExceptions = [
      {
        fr: "mon ami",
        en: "my friend (masculine)",
        note: "Regular masculine singular: use mon.",
        example: "Mon ami arrive.",
        exampleEn: "My friend is arriving."
      },
      {
        fr: "mon amie",
        en: "my friend (feminine)",
        note: "Use mon, not ma, before feminine amie because it starts with a vowel sound.",
        example: "Mon amie arrive.",
        exampleEn: "My friend is arriving."
      },
      {
        fr: "ton amie",
        en: "your friend (feminine, informal)",
        note: "Use ton, not ta, before feminine amie.",
        example: "Ton amie est ici.",
        exampleEn: "Your friend is here."
      },
      {
        fr: "son amie",
        en: "his / her friend (feminine)",
        note: "Use son, not sa, before feminine amie.",
        example: "Son amie parle français.",
        exampleEn: "His / her friend speaks French."
      },
      {
        fr: "mon idée",
        en: "my idea",
        note: "Use mon, not ma, before feminine idée.",
        example: "Mon idée est simple.",
        exampleEn: "My idea is simple."
      },
      {
        fr: "son école",
        en: "his / her school",
        note: "Use son, not sa, before feminine école.",
        example: "Son école est grande.",
        exampleEn: "His / her school is big."
      }
    ];

    const corePrepositions = [
      {
        fr: "à",
        en: "to / at / in",
        note: "Use à for destination, location, time, and many fixed verb patterns. It combines with le and les.",
        examples: [
          { fr: "Je vais à Paris.", en: "I am going to Paris." },
          { fr: "Je suis à la maison.", en: "I am at home." },
          { fr: "Le cours commence à huit heures.", en: "The class starts at eight o’clock." }
        ]
      },
      {
        fr: "en",
        en: "in / to / by / within",
        note: "Use en with many feminine countries, transport without an article, materials, and time taken to do something.",
        examples: [
          { fr: "J’habite en France.", en: "I live in France." },
          { fr: "Je vais au travail en bus.", en: "I go to work by bus." },
          { fr: "Il finit le devoir en dix minutes.", en: "He finishes the homework in ten minutes." }
        ]
      },
      {
        fr: "de",
        en: "of / from / about",
        note: "As a preposition, de shows origin, possession/relationship, topic, or source. It combines with le and les.",
        examples: [
          { fr: "Je viens de Paris.", en: "I come from Paris." },
          { fr: "Le livre de Marie est sur la table.", en: "Marie’s book is on the table." },
          { fr: "Nous parlons de ce film.", en: "We are talking about this movie." }
        ]
      },
      {
        fr: "pour",
        en: "for / in order to",
        note: "Use pour for a recipient, purpose, intended destination, or planned duration.",
        examples: [
          { fr: "C’est pour toi.", en: "It is for you." },
          { fr: "Je travaille pour aider ma famille.", en: "I work in order to help my family." },
          { fr: "Nous partons pour deux jours.", en: "We are leaving for two days." }
        ]
      },
      {
        fr: "dans",
        en: "in / inside / in from now",
        note: "Use dans for being inside a place or for how much time remains before something happens.",
        examples: [
          { fr: "Le livre est dans le sac.", en: "The book is in the bag." },
          { fr: "Nous sommes dans la classe.", en: "We are in the classroom." },
          { fr: "Je pars dans dix minutes.", en: "I am leaving in ten minutes." }
        ]
      },
      {
        fr: "chez",
        en: "at / to someone’s place; at a professional’s",
        note: "Use chez with people, homes, shops/professions, and sometimes groups of people.",
        examples: [
          { fr: "Je vais chez Marie.", en: "I am going to Marie’s place." },
          { fr: "Nous dînons chez mes parents.", en: "We are having dinner at my parents’ place." },
          { fr: "J’achète du pain chez le boulanger.", en: "I buy bread at the baker’s." }
        ]
      },
      {
        fr: "avec",
        en: "with",
        note: "Use avec for being together with someone or using something as a tool.",
        examples: [
          { fr: "Je parle avec elle.", en: "I am speaking with her." },
          { fr: "Il coupe le pain avec un couteau.", en: "He cuts the bread with a knife." },
          { fr: "Je viens avec toi.", en: "I am coming with you." }
        ]
      }
    ];

    const placePrepositions = [
      {
        fr: "sur",
        en: "on / on top of",
        note: "resting on a surface",
        examples: [
          { fr: "Le livre est sur la table.", en: "The book is on the table." },
          { fr: "Le chat dort sur le canapé.", en: "The cat is sleeping on the sofa." }
        ]
      },
      {
        fr: "sous",
        en: "under",
        note: "directly below something",
        examples: [
          { fr: "Le sac est sous la chaise.", en: "The bag is under the chair." },
          { fr: "Le chien dort sous la table.", en: "The dog is sleeping under the table." }
        ]
      },
      {
        fr: "devant",
        en: "in front of",
        note: "before / facing the front side",
        examples: [
          { fr: "Le bus est devant l’école.", en: "The bus is in front of the school." },
          { fr: "Je suis devant la porte.", en: "I am in front of the door." }
        ]
      },
      {
        fr: "derrière",
        en: "behind",
        note: "at the back of something",
        examples: [
          { fr: "Le jardin est derrière la maison.", en: "The garden is behind the house." },
          { fr: "La voiture est derrière le bus.", en: "The car is behind the bus." }
        ]
      },
      {
        fr: "au-dessus de",
        en: "above",
        note: "higher than something, often not touching",
        examples: [
          { fr: "La lampe est au-dessus de la table.", en: "The lamp is above the table." },
          { fr: "L’avion est au-dessus des nuages.", en: "The plane is above the clouds." }
        ]
      },
      {
        fr: "au-dessous de",
        en: "below",
        note: "lower than something",
        examples: [
          { fr: "La cave est au-dessous de la cuisine.", en: "The cellar is below the kitchen." },
          { fr: "Le garage est au-dessous de l’appartement.", en: "The garage is below the apartment." }
        ]
      },
      {
        fr: "à gauche de",
        en: "to the left of",
        note: "on the left side of something",
        examples: [
          { fr: "La banque est à gauche de la poste.", en: "The bank is to the left of the post office." },
          { fr: "Ma chaise est à gauche de la table.", en: "My chair is to the left of the table." }
        ]
      },
      {
        fr: "à droite de",
        en: "to the right of",
        note: "on the right side of something",
        examples: [
          { fr: "La pharmacie est à droite du café.", en: "The pharmacy is to the right of the cafe." },
          { fr: "Le tableau est à droite de la fenêtre.", en: "The board is to the right of the window." }
        ]
      },
      {
        fr: "à côté de",
        en: "next to / beside",
        note: "near the side of something",
        examples: [
          { fr: "Je suis à côté de mon ami.", en: "I am next to my friend." },
          { fr: "La clé est à côté du livre.", en: "The key is next to the book." }
        ]
      },
      {
        fr: "près de",
        en: "near / close to",
        note: "a short distance from something",
        examples: [
          { fr: "J’habite près de la gare.", en: "I live near the train station." },
          { fr: "La pharmacie est près du supermarché.", en: "The pharmacy is near the supermarket." }
        ]
      },
      {
        fr: "au coin de",
        en: "at the corner of",
        note: "at the point where two streets or sides meet",
        examples: [
          { fr: "Le café est au coin de la rue.", en: "The cafe is at the corner of the street." },
          { fr: "Tournez à gauche au coin de l’avenue.", en: "Turn left at the corner of the avenue." }
        ]
      },
      {
        fr: "en face de",
        en: "opposite / across from",
        note: "directly facing something",
        examples: [
          { fr: "La banque est en face de la poste.", en: "The bank is across from the post office." },
          { fr: "Je suis assis en face de Marie.", en: "I am sitting opposite Marie." }
        ]
      },
      {
        fr: "au bout de",
        en: "at the end of",
        note: "at the far end or final point of something",
        examples: [
          { fr: "La bibliothèque est au bout de la rue.", en: "The library is at the end of the street." },
          { fr: "Il y a un parc au bout du chemin.", en: "There is a park at the end of the path." }
        ]
      },
      {
        fr: "entre",
        en: "between",
        note: "in the middle of two things",
        examples: [
          { fr: "La boulangerie est entre la banque et la pharmacie.", en: "The bakery is between the bank and the pharmacy." },
          { fr: "Je suis entre mes deux amis.", en: "I am between my two friends." }
        ]
      },
      {
        fr: "dans",
        en: "in / inside",
        note: "inside a place or container",
        examples: [
          { fr: "Le stylo est dans le sac.", en: "The pen is in the bag." },
          { fr: "Nous sommes dans la classe.", en: "We are in the classroom." }
        ]
      },
      {
        fr: "contre",
        en: "against",
        note: "touching or leaning against something",
        examples: [
          { fr: "Le vélo est contre le mur.", en: "The bike is against the wall." },
          { fr: "La chaise est contre la porte.", en: "The chair is against the door." }
        ]
      }
    ];

    const timePrepositions = [
      {
        fr: "pour",
        en: "for + duration",
        note: "planned or expected duration: how long something lasts",
        examples: [
          { fr: "Je pars pour trois jours.", en: "I’m leaving for three days." },
          { fr: "Nous restons à Lyon pour une semaine.", en: "We are staying in Lyon for one week." },
          { fr: "Elle a réservé la salle pour deux heures.", en: "She reserved the room for two hours." },
          { fr: "J’ai un contrat pour six mois.", en: "I have a contract for six months." }
        ]
      },
      {
        fr: "dans",
        en: "in / after + duration",
        note: "time from now until something happens",
        examples: [
          { fr: "Je pars dans trois jours.", en: "I’m leaving in three days." },
          { fr: "Le train arrive dans dix minutes.", en: "The train arrives in ten minutes." },
          { fr: "Nous commençons dans une heure.", en: "We start in one hour." },
          { fr: "Elle revient dans deux semaines.", en: "She is coming back in two weeks." }
        ]
      }
    ];

    const dePrepositionVsArticleRows = [
      {
        fr: "de",
        en: "preposition: of / from / about",
        note: "This de has its own meaning. It connects a noun, verb, or phrase to origin, ownership, source, or topic.",
        examples: [
          { fr: "Je viens de Lyon.", en: "I come from Lyon." },
          { fr: "Le téléphone de mon frère est neuf.", en: "My brother’s phone is new." },
          { fr: "Elle parle de son travail.", en: "She is talking about her work." }
        ]
      },
      {
        fr: "du / de la / de l’ / des",
        en: "article: some / unspecified amount",
        note: "This is the partitive article before uncountable, food/drink, material, or abstract nouns. English often uses no word.",
        examples: [
          { fr: "Je bois du café.", en: "I drink coffee." },
          { fr: "Elle mange de la soupe.", en: "She eats soup." },
          { fr: "Il faut de l’eau.", en: "Water is needed." }
        ]
      },
      {
        fr: "de + article",
        en: "preposition de + the",
        note: "When preposition de meets a definite article, it can mean of/from/about the: de + le → du, de + les → des.",
        examples: [
          { fr: "Je viens du marché.", en: "I come from the market." },
          { fr: "La porte de la cuisine est ouverte.", en: "The kitchen door is open." },
          { fr: "Le sac des enfants est ici.", en: "The children’s bag is here." }
        ]
      },
      {
        fr: "pas de / beaucoup de",
        en: "quantity / negation marker",
        note: "After many quantity words and after negation, French often uses de without le/la/des.",
        examples: [
          { fr: "Je n’ai pas de café.", en: "I do not have coffee." },
          { fr: "Il y a beaucoup de monde.", en: "There are a lot of people." },
          { fr: "Elle a peu de temps.", en: "She has little time." }
        ]
      }
    ];

    const allPrepositionItems = [
      ...corePrepositions,
      ...aArticleRules,
      ...deArticleRules,
      ...placePrepositions,
      ...timePrepositions
    ];
