    const questionWords = [
      {
        fr: "qui",
        en: "who",
        note: "asks about a person",
        examples: [
          { fr: "Qui est-ce ?", en: "Who is it?" },
          { fr: "Qui parle français ?", en: "Who speaks French?" },
          {
            fr: "Tu connais qui ?",
            en: "Who do you know?",
            variants: [
              { fr: "Qui connais-tu ?", en: "Who do you know?" }
            ]
          }
        ]
      },
      {
        fr: "quand",
        en: "when",
        note: "asks about time",
        examples: [
          {
            fr: "Quand arrives-tu ?",
            en: "When are you arriving?",
            variants: [
              { fr: "Tu arrives quand ?", en: "When are you arriving?" }
            ]
          },
          {
            fr: "Quand commence le cours ?",
            en: "When does the class start?",
            variants: [
              { fr: "Le cours commence quand ?", en: "When does the class start?" }
            ]
          },
          {
            fr: "Tu pars quand ?",
            en: "When are you leaving?",
            variants: [
              { fr: "Quand pars-tu ?", en: "When are you leaving?" }
            ]
          }
        ]
      },
      {
        fr: "où",
        en: "where",
        note: "asks about place",
        examples: [
          {
            fr: "Où est la gare ?",
            en: "Where is the train station?",
            variants: [
              { fr: "La gare est où ?", en: "Where is the train station?" }
            ]
          },
          {
            fr: "Où habites-tu ?",
            en: "Where do you live?",
            variants: [
              { fr: "Tu habites où ?", en: "Where do you live?" }
            ]
          },
          {
            fr: "On va où ?",
            en: "Where are we going?",
            variants: [
              { fr: "Où va-t-on ?", en: "Where are we going?" }
            ]
          }
        ]
      },
      {
        fr: "comment",
        en: "how",
        note: "asks about manner or condition",
        examples: [
          { fr: "Comment ça va ?", en: "How are you?" },
          {
            fr: "Comment tu t’appelles ?",
            en: "What is your name?",
            variants: [
              { fr: "Tu t’appelles comment ?", en: "What is your name?" }
            ]
          },
          {
            fr: "Comment dit-on ça en français ?",
            en: "How do you say that in French?",
            variants: [
              { fr: "On dit ça comment en français ?", en: "How do you say that in French?" }
            ]
          }
        ]
      },
      {
        fr: "quoi",
        en: "what",
        note: "common in informal questions",
        examples: [
          {
            fr: "Tu fais quoi ?",
            en: "What are you doing?",
            variants: [
              { fr: "Que fais-tu ?", en: "What are you doing?" }
            ]
          },
          {
            fr: "C’est quoi ?",
            en: "What is it?",
            variants: [
              { fr: "Qu’est-ce que c’est ?", en: "What is it?" }
            ]
          },
          {
            fr: "Tu veux quoi ?",
            en: "What do you want?",
            variants: [
              { fr: "Que veux-tu ?", en: "What do you want?" }
            ]
          }
        ]
      },
      {
        fr: "que / qu’",
        en: "what",
        note: "used before a verb; qu’ before a vowel sound",
        speech: "que",
        examples: [
          {
            fr: "Que regardes-tu ?",
            en: "What are you watching?",
            variants: [
              { fr: "Qu’est-ce que tu regardes ?", en: "What are you watching?" }
            ]
          },
          {
            fr: "Qu’est-ce qu’il dit ?",
            en: "What is he saying?",
            variants: [
              { fr: "Que dit-il ?", en: "What is he saying?" }
            ]
          },
          {
            fr: "Que cherchez-vous ?",
            en: "What are you looking for?",
            variants: [
              { fr: "Qu’est-ce que vous cherchez ?", en: "What are you looking for?" }
            ]
          }
        ]
      },
      {
        fr: "pourquoi",
        en: "why",
        note: "asks for a reason",
        examples: [
          {
            fr: "Pourquoi tu pars ?",
            en: "Why are you leaving?",
            variants: [
              { fr: "Tu pars pourquoi ?", en: "Why are you leaving?" }
            ]
          },
          {
            fr: "Pourquoi est-ce important ?",
            en: "Why is it important?",
            variants: [
              { fr: "C’est important pourquoi ?", en: "Why is it important?" }
            ]
          },
          { fr: "Pourquoi pas ?", en: "Why not?" }
        ]
      },
      {
        fr: "quel / quelle",
        en: "which / what",
        note: "changes to match the noun",
        speech: "quel",
        examples: [
          {
            fr: "Quel jour sommes-nous ?",
            en: "What day is it?",
            variants: [
              { fr: "Nous sommes quel jour ?", en: "What day is it?" }
            ]
          },
          {
            fr: "Quelle heure est-il ?",
            en: "What time is it?",
            variants: [
              { fr: "Il est quelle heure ?", en: "What time is it?" }
            ]
          },
          {
            fr: "Quels livres aimes-tu ?",
            en: "Which books do you like?",
            variants: [
              { fr: "Tu aimes quels livres ?", en: "Which books do you like?" }
            ]
          }
        ]
      },
      {
        fr: "combien",
        en: "how much / how many",
        note: "asks about quantity or price",
        examples: [
          {
            fr: "Combien ça coûte ?",
            en: "How much does it cost?",
            variants: [
              { fr: "Ça coûte combien ?", en: "How much does it cost?" }
            ]
          },
          {
            fr: "Combien de frères as-tu ?",
            en: "How many brothers do you have?",
            variants: [
              { fr: "Tu as combien de frères ?", en: "How many brothers do you have?" }
            ]
          },
          { fr: "Il y a combien de personnes ?", en: "How many people are there?" }
        ]
      },
      {
        fr: "à quelle heure",
        en: "at what time",
        note: "asks for a specific time",
        examples: [
          {
            fr: "À quelle heure commence le cours ?",
            en: "What time does the class start?",
            variants: [
              { fr: "Le cours commence à quelle heure ?", en: "What time does the class start?" }
            ]
          },
          {
            fr: "À quelle heure tu arrives ?",
            en: "What time are you arriving?",
            variants: [
              { fr: "Tu arrives à quelle heure ?", en: "What time are you arriving?" }
            ]
          },
          {
            fr: "À quelle heure part le train ?",
            en: "What time does the train leave?",
            variants: [
              { fr: "Le train part à quelle heure ?", en: "What time does the train leave?" }
            ]
          }
        ]
      },
      {
        fr: "est-ce que",
        en: "yes/no question starter",
        note: "turns a statement into a yes/no question",
        examples: [
          {
            fr: "Est-ce que tu es prêt ?",
            en: "Are you ready?",
            variants: [
              { fr: "Tu es prêt ?", en: "Are you ready?" },
              { fr: "Es-tu prêt ?", en: "Are you ready?" }
            ]
          },
          {
            fr: "Est-ce que vous parlez anglais ?",
            en: "Do you speak English?",
            variants: [
              { fr: "Vous parlez anglais ?", en: "Do you speak English?" },
              { fr: "Parlez-vous anglais ?", en: "Do you speak English?" }
            ]
          },
          {
            fr: "Est-ce qu’il pleut ?",
            en: "Is it raining?",
            variants: [
              { fr: "Il pleut ?", en: "Is it raining?" },
              { fr: "Pleut-il ?", en: "Is it raining?" }
            ]
          }
        ]
      },
      {
        fr: "n’est-ce pas",
        en: "isn’t it / right",
        note: "adds a confirming tag question",
        examples: [
          { fr: "Tu viens demain, n’est-ce pas ?", en: "You’re coming tomorrow, right?" },
          { fr: "C’est facile, n’est-ce pas ?", en: "It’s easy, isn’t it?" },
          { fr: "Elle est française, n’est-ce pas ?", en: "She is French, isn’t she?" }
        ]
      }
    ];

    const quelForms = [
      { form: "quel", gender: "Masculine", number: "Singular", example: "quel livre", exampleEn: "which book / what book" },
      { form: "quelle", gender: "Feminine", number: "Singular", example: "quelle ville", exampleEn: "which city / what city" },
      { form: "quels", gender: "Masculine", number: "Plural", example: "quels livres", exampleEn: "which books / what books" },
      { form: "quelles", gender: "Feminine", number: "Plural", example: "quelles villes", exampleEn: "which cities / what cities" }
    ];

    const quelExampleColumns = [
      {
        key: "end",
        title: "Quel at the end",
        note: "Common in everyday spoken French."
      },
      {
        key: "front",
        title: "Quel at the front",
        note: "A more textbook / formal order."
      },
      {
        key: "estCeQue",
        title: "Quel + est-ce que",
        note: "Neutral everyday pattern."
      }
    ];

    const quelExampleRows = [
      {
        topic: "Book choice",
        agreement: "Masculine singular",
        en: "Which book do you prefer?",
        examples: {
          end: { fr: "Tu préfères quel livre ?", en: "Which book do you prefer? (spoken)" },
          front: { fr: "Quel livre préfères-tu ?", en: "Which book do you prefer?" },
          estCeQue: { fr: "Quel livre est-ce que tu préfères ?", en: "Which book do you prefer?" }
        }
      },
      {
        topic: "City",
        agreement: "Feminine singular",
        en: "Which city does she live in?",
        examples: {
          end: { fr: "Elle habite dans quelle ville ?", en: "Which city does she live in? (spoken)" },
          front: { fr: "Dans quelle ville habite-t-elle ?", en: "Which city does she live in?" },
          estCeQue: { fr: "Dans quelle ville est-ce qu’elle habite ?", en: "Which city does she live in?" }
        }
      },
      {
        topic: "Movies",
        agreement: "Masculine plural",
        en: "Which movies do you like?",
        examples: {
          end: { fr: "Vous aimez quels films ?", en: "Which movies do you like? (spoken)" },
          front: { fr: "Quels films aimez-vous ?", en: "Which movies do you like?" },
          estCeQue: { fr: "Quels films est-ce que vous aimez ?", en: "Which movies do you like?" }
        }
      },
      {
        topic: "Shoes",
        agreement: "Feminine plural",
        en: "Which shoes are you wearing?",
        examples: {
          end: { fr: "Tu portes quelles chaussures ?", en: "Which shoes are you wearing? (spoken)" },
          front: { fr: "Quelles chaussures portes-tu ?", en: "Which shoes are you wearing?" },
          estCeQue: { fr: "Quelles chaussures est-ce que tu portes ?", en: "Which shoes are you wearing?" }
        }
      }
    ];

    const quelEtreSpecialColumns = [
      {
        key: "etre",
        title: "Quel + être",
        note: "Special identity pattern."
      }
    ];

    const quelEtreSpecialRows = [
      {
        topic: "Name",
        agreement: "Masculine singular",
        en: "What is your name?",
        examples: {
          etre: { fr: "Quel est ton nom ?", en: "What is your name?" }
        }
      },
      {
        topic: "Address",
        agreement: "Feminine singular",
        en: "What is your address?",
        examples: {
          etre: { fr: "Quelle est ton adresse ?", en: "What is your address?" }
        }
      },
      {
        topic: "Favorite books",
        agreement: "Masculine plural",
        en: "What are your favorite books?",
        examples: {
          etre: { fr: "Quels sont tes livres préférés ?", en: "What are your favorite books?" }
        }
      },
      {
        topic: "Favorite colors",
        agreement: "Feminine plural",
        en: "What are your favorite colors?",
        examples: {
          etre: { fr: "Quelles sont tes couleurs préférées ?", en: "What are your favorite colors?" }
        }
      }
    ];

    const queExampleColumns = [
      {
        key: "quoiEnd",
        title: "Quoi at the end",
        note: "Casual spoken order."
      },
      {
        key: "queFront",
        title: "Que at the front",
        note: "Formal / textbook inversion."
      },
      {
        key: "estCeQue",
        title: "Qu’est-ce que",
        note: "Neutral everyday pattern."
      }
    ];

    const queExampleRows = [
      {
        topic: "Looking for something",
        en: "What are they looking for?",
        examples: {
          quoiEnd: { fr: "Elles cherchent quoi ?", en: "What are they looking for? (spoken)" },
          queFront: { fr: "Que cherchent-elles ?", en: "What are they looking for?" },
          estCeQue: { fr: "Qu’est-ce qu’elles cherchent ?", en: "What are they looking for?" }
        }
      },
      {
        topic: "Doing something",
        en: "What are you doing?",
        examples: {
          quoiEnd: { fr: "Tu fais quoi ?", en: "What are you doing? (spoken)" },
          queFront: { fr: "Que fais-tu ?", en: "What are you doing?" },
          estCeQue: { fr: "Qu’est-ce que tu fais ?", en: "What are you doing?" }
        }
      },
      {
        topic: "Wanting something",
        en: "What does she want?",
        examples: {
          quoiEnd: { fr: "Elle veut quoi ?", en: "What does she want? (spoken)" },
          queFront: { fr: "Que veut-elle ?", en: "What does she want?" },
          estCeQue: { fr: "Qu’est-ce qu’elle veut ?", en: "What does she want?" }
        }
      },
      {
        topic: "Watching something",
        en: "What are they watching?",
        examples: {
          quoiEnd: { fr: "Ils regardent quoi ?", en: "What are they watching? (spoken)" },
          queFront: { fr: "Que regardent-ils ?", en: "What are they watching?" },
          estCeQue: { fr: "Qu’est-ce qu’ils regardent ?", en: "What are they watching?" }
        }
      }
    ];

    const queCestSpecialColumns = [
      {
        key: "quoiEnd",
        title: "C’est quoi",
        note: "Casual spoken form."
      },
      {
        key: "estCeQue",
        title: "Qu’est-ce que c’est",
        note: "Neutral complete form."
      }
    ];

    const queCestSpecialRows = [
      {
        topic: "Identify it",
        en: "What is it?",
        examples: {
          quoiEnd: { fr: "C’est quoi ?", en: "What is it? (spoken)" },
          estCeQue: { fr: "Qu’est-ce que c’est ?", en: "What is it?" }
        }
      },
      {
        topic: "Pointing at something",
        en: "What is that?",
        examples: {
          quoiEnd: { fr: "C’est quoi, ça ?", en: "What is that? (spoken)" },
          estCeQue: { fr: "Qu’est-ce que c’est que ça ?", en: "What is that?" }
        }
      },
      {
        topic: "Asking about a noise",
        en: "What is that noise?",
        examples: {
          quoiEnd: { fr: "C’est quoi, ce bruit ?", en: "What is that noise? (spoken)" },
          estCeQue: { fr: "Qu’est-ce que c’est que ce bruit ?", en: "What is that noise?" }
        }
      }
    ];

