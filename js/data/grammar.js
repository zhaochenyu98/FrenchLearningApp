    const tonicPronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "moi", en: "me / myself" }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", en: "us / ourselves" }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "toi", en: "you / yourself" }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", en: "you / yourselves" }]
      },
      {
        singularZh: "他 / 她",
        singularForms: [
          { fr: "lui", en: "him / himself" },
          { fr: "elle", en: "her / herself" }
        ],
        pluralZh: "他们 / 她们",
        pluralForms: [
          { fr: "eux", en: "them / themselves (masculine or mixed)" },
          { fr: "elles", en: "them / themselves (feminine)" }
        ]
      }
    ];

    const reflexivePronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "me / m’", speech: "me", en: "myself" }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", en: "ourselves" }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "te / t’", speech: "te", en: "yourself" }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", en: "yourselves" }]
      },
      {
        singularZh: "他 / 她",
        singularForms: [{ fr: "se / s’", speech: "se", en: "himself / herself" }],
        pluralZh: "他们 / 她们",
        pluralForms: [{ fr: "se / s’", speech: "se", en: "themselves" }]
      }
    ];

    const tonicPronounUsageRules = [
      {
        rule: "用在 c’est / ce sont 后",
        pattern: "Use tonic pronouns after c’est / ce sont, especially when answering “who?”",
        examples: [
          {
            lines: [
              { fr: "Qui est-ce ?", en: "Who is it?" },
              { fr: "C’est moi.", en: "It’s me." }
            ]
          },
          {
            lines: [
              { fr: "Ce sont eux.", en: "It’s them." }
            ]
          },
          {
            lines: [
              { fr: "Qui est à la porte ?", en: "Who is at the door?" },
              { fr: "C’est nous.", en: "It’s us." }
            ]
          },
          {
            lines: [
              { fr: "Est-ce que c’est toi sur la photo ?", en: "Is that you in the photo?" }
            ]
          },
          {
            lines: [
              { fr: "Ce sont elles, mes amies.", en: "It’s them, my friends." }
            ]
          }
        ]
      },
      {
        rule: "用在没有谓语的省略句中",
        pattern: "Use them when the pronoun stands alone in a short answer or elliptical sentence.",
        examples: [
          {
            lines: [
              { fr: "Je vais à l’école.", en: "I am going to school." },
              { fr: "Moi aussi.", en: "Me too." }
            ]
          },
          {
            lines: [
              { fr: "Il est japonais, et vous ?", en: "He is Japanese, and you?" }
            ]
          },
          {
            lines: [
              { fr: "Est-ce que tu viens avec nous ?", en: "Are you coming with us?" },
              { fr: "Oui, moi aussi.", en: "Yes, me too." }
            ]
          },
          {
            lines: [
              { fr: "Moi, non.", en: "Me, no." }
            ]
          },
          {
            lines: [
              { fr: "Et toi ?", en: "And you?" }
            ]
          }
        ]
      },
      {
        rule: "强调另一个人称代词",
        pattern: "Place the tonic pronoun before a subject pronoun to emphasize or contrast people.",
        examples: [
          {
            lines: [
              { fr: "Moi, je suis chinois.", en: "Me, I am Chinese." }
            ]
          },
          {
            lines: [
              { fr: "Il est français, mais elle, elle est italienne.", en: "He is French, but she is Italian." }
            ]
          },
          {
            lines: [
              { fr: "Toi, tu parles français.", en: "You, you speak French." }
            ]
          },
          {
            lines: [
              { fr: "Nous, nous habitons ici.", en: "We live here." }
            ]
          },
          {
            lines: [
              { fr: "Eux, ils vont au marché.", en: "They are going to the market." }
            ]
          }
        ]
      },
      {
        rule: "用在介词之后",
        pattern: "Use them after prepositions like avec, pour, chez, and à. For parler à, lui / leur is common too; à elle / à elles adds emphasis.",
        examples: [
          {
            lines: [
              { fr: "Est-ce qu’ils vont avec nous ?", en: "Are they going with us?" }
            ]
          },
          {
            lines: [
              { fr: "J’ai un cadeau pour toi.", en: "I have a gift for you." }
            ]
          },
          {
            lines: [
              { fr: "Je suis chez moi.", en: "I am at my place." }
            ]
          },
          {
            lines: [
              { fr: "À qui parles-tu ?", en: "Who are you speaking to?" },
              { fr: "Je parle à elles.", en: "I am speaking to them." }
            ]
          },
          {
            lines: [
              { fr: "Elle vient avec moi.", en: "She is coming with me." }
            ]
          },
          {
            lines: [
              { fr: "Ce livre est pour lui.", en: "This book is for him." }
            ]
          },
          {
            lines: [
              { fr: "Nous mangeons chez eux.", en: "We are eating at their place." }
            ]
          },
          {
            lines: [
              { fr: "Je pense à toi.", en: "I am thinking of you." }
            ]
          }
        ]
      }
    ];

    const etreRows = [
      { pronoun: "je", form: "suis", full: "je suis", en: "I am", example: "Je suis étudiant.", exampleEn: "I am a student.", negative: "Je ne suis pas étudiant.", negativeEn: "I am not a student." },
      { pronoun: "tu", form: "es", full: "tu es", en: "you are", example: "Tu es prêt.", exampleEn: "You are ready.", negative: "Tu n’es pas prêt.", negativeEn: "You are not ready." },
      { pronoun: "il", form: "est", full: "il est", en: "he is / it is", example: "Il est français.", exampleEn: "He is French.", negative: "Il n’est pas français.", negativeEn: "He is not French." },
      { pronoun: "elle", form: "est", full: "elle est", en: "she is / it is", example: "Elle est contente.", exampleEn: "She is happy.", negative: "Elle n’est pas contente.", negativeEn: "She is not happy." },
      { pronoun: "nous", form: "sommes", full: "nous sommes", en: "we are", example: "Nous sommes ici.", exampleEn: "We are here.", negative: "Nous ne sommes pas ici.", negativeEn: "We are not here." },
      { pronoun: "on", form: "est", full: "on est", en: "we are / one is", example: "On est prêts.", exampleEn: "We are ready.", negative: "On n’est pas prêts.", negativeEn: "We are not ready." },
      { pronoun: "vous", form: "êtes", full: "vous êtes", en: "you are", example: "Vous êtes en retard.", exampleEn: "You are late.", negative: "Vous n’êtes pas en retard.", negativeEn: "You are not late." },
      { pronoun: "ils", form: "sont", full: "ils sont", en: "they are", example: "Ils sont amis.", exampleEn: "They are friends.", negative: "Ils ne sont pas amis.", negativeEn: "They are not friends." },
      { pronoun: "elles", form: "sont", full: "elles sont", en: "they are", example: "Elles sont prêtes.", exampleEn: "They are ready.", negative: "Elles ne sont pas prêtes.", negativeEn: "They are not ready." }
    ];

    const avoirRows = [
      { pronoun: "j’", form: "ai", full: "j’ai", en: "I have", example: "J’ai un livre.", exampleEn: "I have a book.", negative: "Je n’ai pas de livre.", negativeEn: "I do not have a book." },
      { pronoun: "tu", form: "as", full: "tu as", en: "you have", example: "Tu as un chat.", exampleEn: "You have a cat.", negative: "Tu n’as pas de chat.", negativeEn: "You do not have a cat." },
      { pronoun: "il", form: "a", full: "il a", en: "he has / it has", example: "Il a vingt ans.", exampleEn: "He is twenty years old.", negative: "Il n’a pas vingt ans.", negativeEn: "He is not twenty years old." },
      { pronoun: "elle", form: "a", full: "elle a", en: "she has / it has", example: "Elle a une idée.", exampleEn: "She has an idea.", negative: "Elle n’a pas d’idée.", negativeEn: "She does not have an idea." },
      { pronoun: "nous", form: "avons", full: "nous avons", en: "we have", example: "Nous avons le temps.", exampleEn: "We have time.", negative: "Nous n’avons pas le temps.", negativeEn: "We do not have time." },
      { pronoun: "on", form: "a", full: "on a", en: "we have / one has", example: "On a le temps.", exampleEn: "We have time.", negative: "On n’a pas le temps.", negativeEn: "We do not have time." },
      { pronoun: "vous", form: "avez", full: "vous avez", en: "you have", example: "Vous avez raison.", exampleEn: "You are right.", negative: "Vous n’avez pas raison.", negativeEn: "You are not right." },
      { pronoun: "ils", form: "ont", full: "ils ont", en: "they have", example: "Ils ont une voiture.", exampleEn: "They have a car.", negative: "Ils n’ont pas de voiture.", negativeEn: "They do not have a car." },
      { pronoun: "elles", form: "ont", full: "elles ont", en: "they have", example: "Elles ont faim.", exampleEn: "They are hungry.", negative: "Elles n’ont pas faim.", negativeEn: "They are not hungry." }
    ];

    const etreImperativeRows = [
      { person: "tu", form: "sois", en: "be", example: "Sois calme.", exampleEn: "Be calm.", negative: "Ne sois pas nerveux.", negativeEn: "Do not be nervous." },
      { person: "nous", form: "soyons", en: "let’s be", example: "Soyons prêts.", exampleEn: "Let’s be ready.", negative: "Ne soyons pas en retard.", negativeEn: "Let’s not be late." },
      { person: "vous", form: "soyez", en: "be", example: "Soyez prudents.", exampleEn: "Be careful.", negative: "Ne soyez pas imprudents.", negativeEn: "Do not be careless." }
    ];

    const avoirImperativeRows = [
      { person: "tu", form: "aie", en: "have", example: "Aie confiance.", exampleEn: "Have confidence.", negative: "N’aie pas peur.", negativeEn: "Do not be afraid." },
      { person: "nous", form: "ayons", en: "let’s have", example: "Ayons du courage.", exampleEn: "Let’s have courage.", negative: "N’ayons pas peur.", negativeEn: "Let’s not be afraid." },
      { person: "vous", form: "ayez", en: "have", example: "Ayez confiance en vous.", exampleEn: "Have confidence in yourself.", negative: "N’ayez pas peur de demander.", negativeEn: "Do not be afraid to ask." }
    ];

    const parlerRows = [
      { pronoun: "je", form: "parle", full: "je parle", en: "I speak / talk", example: "Je parle français avec mon professeur.", exampleEn: "I speak French with my teacher.", negative: "Je ne parle pas français avec mon professeur.", negativeEn: "I do not speak French with my teacher." },
      { pronoun: "tu", form: "parles", full: "tu parles", en: "you speak / talk", example: "Tu parles trop vite.", exampleEn: "You speak too fast.", negative: "Tu ne parles pas trop vite.", negativeEn: "You do not speak too fast.", question: "Parles-tu trop vite ?" },
      { pronoun: "il", form: "parle", full: "il parle", en: "he speaks / talks", example: "Il parle au voisin.", exampleEn: "He talks to the neighbor.", negative: "Il ne parle pas au voisin.", negativeEn: "He does not talk to the neighbor." },
      { pronoun: "elle", form: "parle", full: "elle parle", en: "she speaks / talks", example: "Elle parle de son travail.", exampleEn: "She talks about her work.", negative: "Elle ne parle pas de son travail.", negativeEn: "She does not talk about her work." },
      { pronoun: "nous", form: "parlons", full: "nous parlons", en: "we speak / talk", example: "Nous parlons ensemble le matin.", exampleEn: "We talk together in the morning.", negative: "Nous ne parlons pas ensemble le matin.", negativeEn: "We do not talk together in the morning." },
      { pronoun: "vous", form: "parlez", full: "vous parlez", en: "you speak / talk", example: "Vous parlez avec la directrice.", exampleEn: "You speak with the director.", negative: "Vous ne parlez pas avec la directrice.", negativeEn: "You do not speak with the director.", question: "Avec qui parlez-vous ?" },
      { pronoun: "ils", form: "parlent", full: "ils parlent", en: "they speak / talk", example: "Ils parlent de leurs vacances.", exampleEn: "They talk about their vacation.", negative: "Ils ne parlent pas de leurs vacances.", negativeEn: "They do not talk about their vacation." },
      { pronoun: "elles", form: "parlent", full: "elles parlent", en: "they speak / talk", example: "Elles parlent anglais au bureau.", exampleEn: "They speak English at the office.", negative: "Elles ne parlent pas anglais au bureau.", negativeEn: "They do not speak English at the office." }
    ];

    const chercherRows = [
      { pronoun: "je", form: "cherche", full: "je cherche", en: "I look for", example: "Je cherche mes clés.", exampleEn: "I am looking for my keys.", negative: "Je ne cherche pas mes clés.", negativeEn: "I am not looking for my keys." },
      { pronoun: "tu", form: "cherches", full: "tu cherches", en: "you look for", example: "Tu cherches un café.", exampleEn: "You are looking for a café.", negative: "Tu ne cherches pas de café.", negativeEn: "You are not looking for a café.", question: "Que cherches-tu ?" },
      { pronoun: "il", form: "cherche", full: "il cherche", en: "he looks for", example: "Il cherche son téléphone.", exampleEn: "He is looking for his phone.", negative: "Il ne cherche pas son téléphone.", negativeEn: "He is not looking for his phone." },
      { pronoun: "elle", form: "cherche", full: "elle cherche", en: "she looks for", example: "Elle cherche une solution.", exampleEn: "She is looking for a solution.", negative: "Elle ne cherche pas de solution.", negativeEn: "She is not looking for a solution." },
      { pronoun: "nous", form: "cherchons", full: "nous cherchons", en: "we look for", example: "Nous cherchons un appartement.", exampleEn: "We are looking for an apartment.", negative: "Nous ne cherchons pas d’appartement.", negativeEn: "We are not looking for an apartment." },
      { pronoun: "vous", form: "cherchez", full: "vous cherchez", en: "you look for", example: "Vous cherchez la gare.", exampleEn: "You are looking for the train station.", negative: "Vous ne cherchez pas la gare.", negativeEn: "You are not looking for the train station.", question: "Où cherchez-vous la gare ?" },
      { pronoun: "ils", form: "cherchent", full: "ils cherchent", en: "they look for", example: "Ils cherchent du travail.", exampleEn: "They are looking for work.", negative: "Ils ne cherchent pas de travail.", negativeEn: "They are not looking for work." },
      { pronoun: "elles", form: "cherchent", full: "elles cherchent", en: "they look for", example: "Elles cherchent une table libre.", exampleEn: "They are looking for an available table.", negative: "Elles ne cherchent pas de table libre.", negativeEn: "They are not looking for an available table." }
    ];

    const mangerRows = [
      { pronoun: "je", form: "mange", full: "je mange", en: "I eat", example: "Je mange une pomme.", exampleEn: "I eat an apple.", negative: "Je ne mange pas de pomme.", negativeEn: "I do not eat an apple." },
      { pronoun: "tu", form: "manges", full: "tu manges", en: "you eat", example: "Tu manges au restaurant.", exampleEn: "You eat at the restaurant.", negative: "Tu ne manges pas au restaurant.", negativeEn: "You do not eat at the restaurant.", question: "Où manges-tu ?" },
      { pronoun: "il", form: "mange", full: "il mange", en: "he eats", example: "Il mange beaucoup de légumes.", exampleEn: "He eats a lot of vegetables.", negative: "Il ne mange pas beaucoup de légumes.", negativeEn: "He does not eat a lot of vegetables." },
      { pronoun: "elle", form: "mange", full: "elle mange", en: "she eats", example: "Elle mange avec sa famille.", exampleEn: "She eats with her family.", negative: "Elle ne mange pas avec sa famille.", negativeEn: "She does not eat with her family." },
      { pronoun: "nous", form: "mangeons", full: "nous mangeons", en: "we eat", example: "Nous mangeons à midi.", exampleEn: "We eat at noon.", negative: "Nous ne mangeons pas à midi.", negativeEn: "We do not eat at noon." },
      { pronoun: "vous", form: "mangez", full: "vous mangez", en: "you eat", example: "Vous mangez du poisson.", exampleEn: "You eat fish.", negative: "Vous ne mangez pas de poisson.", negativeEn: "You do not eat fish." },
      { pronoun: "ils", form: "mangent", full: "ils mangent", en: "they eat", example: "Ils mangent dehors.", exampleEn: "They eat outside.", negative: "Ils ne mangent pas dehors.", negativeEn: "They do not eat outside." },
      { pronoun: "elles", form: "mangent", full: "elles mangent", en: "they eat", example: "Elles mangent ensemble le dimanche.", exampleEn: "They eat together on Sundays.", negative: "Elles ne mangent pas ensemble le dimanche.", negativeEn: "They do not eat together on Sundays." }
    ];

    const inviterRows = [
      { pronoun: "j’", form: "invite", full: "j’invite", en: "I invite", example: "J’invite mes amis ce soir.", exampleEn: "I am inviting my friends tonight.", negative: "Je n’invite pas mes amis ce soir.", negativeEn: "I am not inviting my friends tonight." },
      { pronoun: "tu", form: "invites", full: "tu invites", en: "you invite", example: "Tu invites ta sœur.", exampleEn: "You invite your sister.", negative: "Tu n’invites pas ta sœur.", negativeEn: "You do not invite your sister.", question: "Qui invites-tu ?" },
      { pronoun: "il", form: "invite", full: "il invite", en: "he invites", example: "Il invite Paul au dîner.", exampleEn: "He invites Paul to dinner.", negative: "Il n’invite pas Paul au dîner.", negativeEn: "He does not invite Paul to dinner." },
      { pronoun: "elle", form: "invite", full: "elle invite", en: "she invites", example: "Elle invite sa collègue.", exampleEn: "She invites her colleague.", negative: "Elle n’invite pas sa collègue.", negativeEn: "She does not invite her colleague." },
      { pronoun: "nous", form: "invitons", full: "nous invitons", en: "we invite", example: "Nous invitons nos voisins.", exampleEn: "We invite our neighbors.", negative: "Nous n’invitons pas nos voisins.", negativeEn: "We do not invite our neighbors." },
      { pronoun: "vous", form: "invitez", full: "vous invitez", en: "you invite", example: "Vous invitez les enfants.", exampleEn: "You invite the children.", negative: "Vous n’invitez pas les enfants.", negativeEn: "You do not invite the children." },
      { pronoun: "ils", form: "invitent", full: "ils invitent", en: "they invite", example: "Ils invitent tout le monde.", exampleEn: "They invite everyone.", negative: "Ils n’invitent pas tout le monde.", negativeEn: "They do not invite everyone." },
      { pronoun: "elles", form: "invitent", full: "elles invitent", en: "they invite", example: "Elles invitent leurs parents.", exampleEn: "They invite their parents.", negative: "Elles n’invitent pas leurs parents.", negativeEn: "They do not invite their parents." }
    ];

    const finirRows = [
      { pronoun: "je", form: "finis", full: "je finis", en: "I finish", example: "Je finis mes devoirs.", exampleEn: "I finish my homework.", negative: "Je ne finis pas mes devoirs.", negativeEn: "I do not finish my homework." },
      { pronoun: "tu", form: "finis", full: "tu finis", en: "you finish", example: "Tu finis le travail.", exampleEn: "You finish the work.", negative: "Tu ne finis pas le travail.", negativeEn: "You do not finish the work.", question: "Quand finis-tu le travail ?" },
      { pronoun: "il", form: "finit", full: "il finit", en: "he finishes", example: "Il finit son café.", exampleEn: "He finishes his coffee.", negative: "Il ne finit pas son café.", negativeEn: "He does not finish his coffee." },
      { pronoun: "elle", form: "finit", full: "elle finit", en: "she finishes", example: "Elle finit la lettre.", exampleEn: "She finishes the letter.", negative: "Elle ne finit pas la lettre.", negativeEn: "She does not finish the letter." },
      { pronoun: "nous", form: "finissons", full: "nous finissons", en: "we finish", example: "Nous finissons le cours à cinq heures.", exampleEn: "We finish class at five.", negative: "Nous ne finissons pas le cours à cinq heures.", negativeEn: "We do not finish class at five." },
      { pronoun: "vous", form: "finissez", full: "vous finissez", en: "you finish", example: "Vous finissez bientôt.", exampleEn: "You finish soon.", negative: "Vous ne finissez pas bientôt.", negativeEn: "You do not finish soon." },
      { pronoun: "ils", form: "finissent", full: "ils finissent", en: "they finish", example: "Ils finissent le projet.", exampleEn: "They finish the project.", negative: "Ils ne finissent pas le projet.", negativeEn: "They do not finish the project." },
      { pronoun: "elles", form: "finissent", full: "elles finissent", en: "they finish", example: "Elles finissent avant midi.", exampleEn: "They finish before noon.", negative: "Elles ne finissent pas avant midi.", negativeEn: "They do not finish before noon." }
    ];

    const choisirRows = [
      { pronoun: "je", form: "choisis", full: "je choisis", en: "I choose", example: "Je choisis une table.", exampleEn: "I choose a table.", negative: "Je ne choisis pas de table.", negativeEn: "I do not choose a table." },
      { pronoun: "tu", form: "choisis", full: "tu choisis", en: "you choose", example: "Tu choisis le dessert.", exampleEn: "You choose dessert.", negative: "Tu ne choisis pas le dessert.", negativeEn: "You do not choose dessert.", question: "Que choisis-tu ?" },
      { pronoun: "il", form: "choisit", full: "il choisit", en: "he chooses", example: "Il choisit un livre.", exampleEn: "He chooses a book.", negative: "Il ne choisit pas de livre.", negativeEn: "He does not choose a book." },
      { pronoun: "elle", form: "choisit", full: "elle choisit", en: "she chooses", example: "Elle choisit une robe.", exampleEn: "She chooses a dress.", negative: "Elle ne choisit pas de robe.", negativeEn: "She does not choose a dress." },
      { pronoun: "nous", form: "choisissons", full: "nous choisissons", en: "we choose", example: "Nous choisissons un film.", exampleEn: "We choose a movie.", negative: "Nous ne choisissons pas de film.", negativeEn: "We do not choose a movie." },
      { pronoun: "vous", form: "choisissez", full: "vous choisissez", en: "you choose", example: "Vous choisissez la date.", exampleEn: "You choose the date.", negative: "Vous ne choisissez pas la date.", negativeEn: "You do not choose the date." },
      { pronoun: "ils", form: "choisissent", full: "ils choisissent", en: "they choose", example: "Ils choisissent leurs places.", exampleEn: "They choose their seats.", negative: "Ils ne choisissent pas leurs places.", negativeEn: "They do not choose their seats." },
      { pronoun: "elles", form: "choisissent", full: "elles choisissent", en: "they choose", example: "Elles choisissent un restaurant.", exampleEn: "They choose a restaurant.", negative: "Elles ne choisissent pas de restaurant.", negativeEn: "They do not choose a restaurant." }
    ];

    const reussirRows = [
      { pronoun: "je", form: "réussis", full: "je réussis", en: "I succeed / pass", example: "Je réussis l’examen.", exampleEn: "I pass the exam.", negative: "Je ne réussis pas l’examen.", negativeEn: "I do not pass the exam." },
      { pronoun: "tu", form: "réussis", full: "tu réussis", en: "you succeed / pass", example: "Tu réussis ce test.", exampleEn: "You pass this test.", negative: "Tu ne réussis pas ce test.", negativeEn: "You do not pass this test.", question: "Réussis-tu ce test ?" },
      { pronoun: "il", form: "réussit", full: "il réussit", en: "he succeeds / passes", example: "Il réussit son entretien.", exampleEn: "He succeeds in his interview.", negative: "Il ne réussit pas son entretien.", negativeEn: "He does not succeed in his interview." },
      { pronoun: "elle", form: "réussit", full: "elle réussit", en: "she succeeds / passes", example: "Elle réussit grâce à son travail.", exampleEn: "She succeeds thanks to her work.", negative: "Elle ne réussit pas grâce à son travail.", negativeEn: "She does not succeed thanks to her work." },
      { pronoun: "nous", form: "réussissons", full: "nous réussissons", en: "we succeed / pass", example: "Nous réussissons ensemble.", exampleEn: "We succeed together.", negative: "Nous ne réussissons pas ensemble.", negativeEn: "We do not succeed together." },
      { pronoun: "vous", form: "réussissez", full: "vous réussissez", en: "you succeed / pass", example: "Vous réussissez souvent.", exampleEn: "You often succeed.", negative: "Vous ne réussissez pas souvent.", negativeEn: "You do not often succeed." },
      { pronoun: "ils", form: "réussissent", full: "ils réussissent", en: "they succeed / pass", example: "Ils réussissent le concours.", exampleEn: "They pass the competition exam.", negative: "Ils ne réussissent pas le concours.", negativeEn: "They do not pass the competition exam." },
      { pronoun: "elles", form: "réussissent", full: "elles réussissent", en: "they succeed / pass", example: "Elles réussissent leur projet.", exampleEn: "They succeed with their project.", negative: "Elles ne réussissent pas leur projet.", negativeEn: "They do not succeed with their project." }
    ];

    const unirRows = [
      { pronoun: "j’", form: "unis", full: "j’unis", en: "I unite / join", example: "J’unis les deux idées.", exampleEn: "I join the two ideas.", negative: "Je n’unis pas les deux idées.", negativeEn: "I do not join the two ideas." },
      { pronoun: "tu", form: "unis", full: "tu unis", en: "you unite / join", example: "Tu unis les équipes.", exampleEn: "You unite the teams.", negative: "Tu n’unis pas les équipes.", negativeEn: "You do not unite the teams.", question: "Quelles équipes unis-tu ?" },
      { pronoun: "il", form: "unit", full: "il unit", en: "he unites / joins", example: "Il unit la famille.", exampleEn: "He unites the family.", negative: "Il n’unit pas la famille.", negativeEn: "He does not unite the family." },
      { pronoun: "elle", form: "unit", full: "elle unit", en: "she unites / joins", example: "Elle unit les deux groupes.", exampleEn: "She unites the two groups.", negative: "Elle n’unit pas les deux groupes.", negativeEn: "She does not unite the two groups." },
      { pronoun: "nous", form: "unissons", full: "nous unissons", en: "we unite / join", example: "Nous unissons nos forces.", exampleEn: "We join forces.", negative: "Nous n’unissons pas nos forces.", negativeEn: "We do not join forces." },
      { pronoun: "vous", form: "unissez", full: "vous unissez", en: "you unite / join", example: "Vous unissez les services.", exampleEn: "You unite the departments.", negative: "Vous n’unissez pas les services.", negativeEn: "You do not unite the departments." },
      { pronoun: "ils", form: "unissent", full: "ils unissent", en: "they unite / join", example: "Ils unissent leurs efforts.", exampleEn: "They join their efforts.", negative: "Ils n’unissent pas leurs efforts.", negativeEn: "They do not join their efforts." },
      { pronoun: "elles", form: "unissent", full: "elles unissent", en: "they unite / join", example: "Elles unissent leurs voix.", exampleEn: "They unite their voices.", negative: "Elles n’unissent pas leurs voix.", negativeEn: "They do not unite their voices." }
    ];

    const tenirRows = [
      { pronoun: "je", form: "tiens", full: "je tiens", en: "I hold / keep", example: "Je tiens la porte.", exampleEn: "I hold the door.", negative: "Je ne tiens pas la porte.", negativeEn: "I do not hold the door." },
      { pronoun: "tu", form: "tiens", full: "tu tiens", en: "you hold / keep", example: "Tu tiens ta promesse.", exampleEn: "You keep your promise.", negative: "Tu ne tiens pas ta promesse.", negativeEn: "You do not keep your promise.", question: "Tiens-tu ta promesse ?" },
      { pronoun: "il", form: "tient", full: "il tient", en: "he holds / keeps", example: "Il tient un sac.", exampleEn: "He is holding a bag.", negative: "Il ne tient pas de sac.", negativeEn: "He is not holding a bag." },
      { pronoun: "elle", form: "tient", full: "elle tient", en: "she holds / keeps", example: "Elle tient à sa famille.", exampleEn: "She cares about her family.", negative: "Elle ne tient pas à sa famille.", negativeEn: "She does not care about her family." },
      { pronoun: "nous", form: "tenons", full: "nous tenons", en: "we hold / keep", example: "Nous tenons la main de l’enfant.", exampleEn: "We hold the child’s hand.", negative: "Nous ne tenons pas la main de l’enfant.", negativeEn: "We do not hold the child’s hand." },
      { pronoun: "vous", form: "tenez", full: "vous tenez", en: "you hold / keep", example: "Vous tenez le plan.", exampleEn: "You are holding the map.", negative: "Vous ne tenez pas le plan.", negativeEn: "You are not holding the map.", question: "Que tenez-vous ?" },
      { pronoun: "ils", form: "tiennent", full: "ils tiennent", en: "they hold / keep", example: "Ils tiennent leurs billets.", exampleEn: "They are holding their tickets.", negative: "Ils ne tiennent pas leurs billets.", negativeEn: "They are not holding their tickets." },
      { pronoun: "elles", form: "tiennent", full: "elles tiennent", en: "they hold / keep", example: "Elles tiennent à cette idée.", exampleEn: "They care about this idea.", negative: "Elles ne tiennent pas à cette idée.", negativeEn: "They do not care about this idea." }
    ];

    const allerRows = [
      { pronoun: "je", form: "vais", full: "je vais", en: "I go / I am going", example: "Je vais au travail.", exampleEn: "I am going to work.", negative: "Je ne vais pas au travail.", negativeEn: "I am not going to work." },
      { pronoun: "tu", form: "vas", full: "tu vas", en: "you go / you are going", example: "Tu vas à l’école.", exampleEn: "You are going to school.", negative: "Tu ne vas pas à l’école.", negativeEn: "You are not going to school.", question: "Vas-tu à l’école ?" },
      { pronoun: "il", form: "va", full: "il va", en: "he goes / he is going", example: "Il va au marché.", exampleEn: "He is going to the market.", negative: "Il ne va pas au marché.", negativeEn: "He is not going to the market.", question: "Où va-t-il ?" },
      { pronoun: "elle", form: "va", full: "elle va", en: "she goes / she is going", example: "Elle va à la maison.", exampleEn: "She is going home.", negative: "Elle ne va pas à la maison.", negativeEn: "She is not going home.", question: "Où va-t-elle ?" },
      { pronoun: "nous", form: "allons", full: "nous allons", en: "we go / we are going", example: "Nous allons au parc.", exampleEn: "We are going to the park.", negative: "Nous n’allons pas au parc.", negativeEn: "We are not going to the park.", question: "Où allons-nous ?" },
      { pronoun: "vous", form: "allez", full: "vous allez", en: "you go / you are going", example: "Vous allez à Paris.", exampleEn: "You are going to Paris.", negative: "Vous n’allez pas à Paris.", negativeEn: "You are not going to Paris.", question: "Où allez-vous ?" },
      { pronoun: "ils", form: "vont", full: "ils vont", en: "they go / they are going", example: "Ils vont au restaurant.", exampleEn: "They are going to the restaurant.", negative: "Ils ne vont pas au restaurant.", negativeEn: "They are not going to the restaurant." },
      { pronoun: "elles", form: "vont", full: "elles vont", en: "they go / they are going", example: "Elles vont à la plage.", exampleEn: "They are going to the beach.", negative: "Elles ne vont pas à la plage.", negativeEn: "They are not going to the beach." }
    ];

    const venirRows = [
      { pronoun: "je", form: "viens", full: "je viens", en: "I come / I am coming", example: "Je viens de la maison.", exampleEn: "I am coming from home.", negative: "Je ne viens pas de la maison.", negativeEn: "I am not coming from home." },
      { pronoun: "tu", form: "viens", full: "tu viens", en: "you come / you are coming", example: "Tu viens avec moi.", exampleEn: "You are coming with me.", negative: "Tu ne viens pas avec moi.", negativeEn: "You are not coming with me.", question: "Viens-tu avec moi ?" },
      { pronoun: "il", form: "vient", full: "il vient", en: "he comes / he is coming", example: "Il vient du bureau.", exampleEn: "He is coming from the office.", negative: "Il ne vient pas du bureau.", negativeEn: "He is not coming from the office.", question: "D’où vient-il ?" },
      { pronoun: "elle", form: "vient", full: "elle vient", en: "she comes / she is coming", example: "Elle vient à la fête.", exampleEn: "She is coming to the party.", negative: "Elle ne vient pas à la fête.", negativeEn: "She is not coming to the party.", question: "Où vient-elle ?" },
      { pronoun: "nous", form: "venons", full: "nous venons", en: "we come / we are coming", example: "Nous venons de Paris.", exampleEn: "We are coming from Paris.", negative: "Nous ne venons pas de Paris.", negativeEn: "We are not coming from Paris.", question: "D’où venons-nous ?" },
      { pronoun: "vous", form: "venez", full: "vous venez", en: "you come / you are coming", example: "Vous venez ce soir.", exampleEn: "You are coming tonight.", negative: "Vous ne venez pas ce soir.", negativeEn: "You are not coming tonight.", question: "Venez-vous ce soir ?" },
      { pronoun: "ils", form: "viennent", full: "ils viennent", en: "they come / they are coming", example: "Ils viennent en train.", exampleEn: "They are coming by train.", negative: "Ils ne viennent pas en train.", negativeEn: "They are not coming by train." },
      { pronoun: "elles", form: "viennent", full: "elles viennent", en: "they come / they are coming", example: "Elles viennent demain.", exampleEn: "They are coming tomorrow.", negative: "Elles ne viennent pas demain.", negativeEn: "They are not coming tomorrow.", question: "Quand viennent-elles ?" }
    ];

    const prendreRows = [
      {
        pronoun: "je",
        form: "prends",
        full: "je prends",
        en: "I take / have",
        examples: [
          { meaning: "transport", fr: "Je prends le métro tous les matins.", en: "I take the subway every morning.", negative: "Je ne prends pas le métro tous les matins.", negativeEn: "I do not take the subway every morning." },
          { meaning: "food / drink", fr: "Je prends un café sans sucre.", en: "I have a coffee without sugar.", negative: "Je ne prends pas de café.", negativeEn: "I do not have coffee." }
        ]
      },
      {
        pronoun: "tu",
        form: "prends",
        full: "tu prends",
        en: "you take",
        examples: [
          { meaning: "time", fr: "Tu prends ton temps.", en: "You take your time.", negative: "Tu ne prends pas ton temps.", negativeEn: "You do not take your time.", question: "Prends-tu ton temps ?" },
          { meaning: "photo", fr: "Tu prends une photo du monument.", en: "You take a photo of the monument.", negative: "Tu ne prends pas de photo du monument.", negativeEn: "You do not take a photo of the monument.", question: "Que prends-tu en photo ?" }
        ]
      },
      {
        pronoun: "il",
        form: "prend",
        full: "il prend",
        en: "he takes / has",
        examples: [
          { meaning: "meal", fr: "Il prend son petit-déjeuner à sept heures.", en: "He has breakfast at seven o’clock.", negative: "Il ne prend pas son petit-déjeuner à sept heures.", negativeEn: "He does not have breakfast at seven o’clock.", question: "À quelle heure prend-il son petit-déjeuner ?" },
          { meaning: "notes", fr: "Il prend des notes en classe.", en: "He takes notes in class.", negative: "Il ne prend pas de notes en classe.", negativeEn: "He does not take notes in class." }
        ]
      },
      {
        pronoun: "elle",
        form: "prend",
        full: "elle prend",
        en: "she takes / has",
        examples: [
          { meaning: "routine", fr: "Elle prend une douche le matin.", en: "She takes a shower in the morning.", negative: "Elle ne prend pas de douche le matin.", negativeEn: "She does not take a shower in the morning." },
          { meaning: "medicine", fr: "Elle prend ce médicament avec de l’eau.", en: "She takes this medicine with water.", negative: "Elle ne prend pas ce médicament.", negativeEn: "She does not take this medicine." }
        ]
      },
      {
        pronoun: "nous",
        form: "prenons",
        full: "nous prenons",
        en: "we take / make",
        examples: [
          { meaning: "transport", fr: "Nous prenons le train pour Paris.", en: "We take the train to Paris.", negative: "Nous ne prenons pas le train pour Paris.", negativeEn: "We do not take the train to Paris." },
          { meaning: "decision", fr: "Nous prenons une décision aujourd’hui.", en: "We make a decision today.", negative: "Nous ne prenons pas de décision aujourd’hui.", negativeEn: "We do not make a decision today.", question: "Quand prenons-nous une décision ?" }
        ]
      },
      {
        pronoun: "vous",
        form: "prenez",
        full: "vous prenez",
        en: "you take / make",
        examples: [
          { meaning: "transport", fr: "Vous prenez un taxi pour l’aéroport.", en: "You take a taxi to the airport.", negative: "Vous ne prenez pas de taxi pour l’aéroport.", negativeEn: "You do not take a taxi to the airport." },
          { meaning: "appointment", fr: "Vous prenez rendez-vous chez le médecin.", en: "You make an appointment with the doctor.", negative: "Vous ne prenez pas rendez-vous chez le médecin.", negativeEn: "You do not make an appointment with the doctor.", question: "Où prenez-vous rendez-vous ?" }
        ]
      },
      {
        pronoun: "ils",
        form: "prennent",
        full: "ils prennent",
        en: "they take / have",
        examples: [
          { meaning: "transport", fr: "Ils prennent le bus à huit heures.", en: "They take the bus at eight o’clock.", negative: "Ils ne prennent pas le bus à huit heures.", negativeEn: "They do not take the bus at eight o’clock.", question: "Quand prennent-ils le bus ?" },
          { meaning: "vacation", fr: "Ils prennent des vacances en août.", en: "They take a vacation in August.", negative: "Ils ne prennent pas de vacances en août.", negativeEn: "They do not take a vacation in August." }
        ]
      },
      {
        pronoun: "elles",
        form: "prennent",
        full: "elles prennent",
        en: "they take / have",
        examples: [
          { meaning: "food / drink", fr: "Elles prennent un café ensemble.", en: "They have a coffee together.", negative: "Elles ne prennent pas de café ensemble.", negativeEn: "They do not have coffee together." },
          { meaning: "care", fr: "Elles prennent soin de leurs enfants.", en: "They take care of their children.", negative: "Elles ne prennent pas soin de leurs enfants.", negativeEn: "They do not take care of their children." }
        ]
      }
    ];

    const habiterRows = [
      { pronoun: "j’", form: "habite", full: "j’habite", en: "I live", example: "J’habite en Californie.", exampleEn: "I live in California.", negative: "Je n’habite pas en Californie.", negativeEn: "I do not live in California." },
      { pronoun: "tu", form: "habites", full: "tu habites", en: "you live", example: "Tu habites ici.", exampleEn: "You live here.", negative: "Tu n’habites pas ici.", negativeEn: "You do not live here." },
      { pronoun: "il", form: "habite", full: "il habite", en: "he lives", example: "Il habite à New York.", exampleEn: "He lives in New York.", negative: "Il n’habite pas à New York.", negativeEn: "He does not live in New York." },
      { pronoun: "elle", form: "habite", full: "elle habite", en: "she lives", example: "Elle habite près d’ici.", exampleEn: "She lives near here.", negative: "Elle n’habite pas près d’ici.", negativeEn: "She does not live near here." },
      { pronoun: "nous", form: "habitons", full: "nous habitons", en: "we live", example: "Nous habitons ensemble.", exampleEn: "We live together.", negative: "Nous n’habitons pas ensemble.", negativeEn: "We do not live together." },
      { pronoun: "vous", form: "habitez", full: "vous habitez", en: "you live", example: "Vous habitez ici.", exampleEn: "You live here.", negative: "Vous n’habitez pas ici.", negativeEn: "You do not live here.", question: "Où habitez-vous ?" },
      { pronoun: "ils", form: "habitent", full: "ils habitent", en: "they live", example: "Ils habitent dans cette rue.", exampleEn: "They live on this street.", negative: "Ils n’habitent pas dans cette rue.", negativeEn: "They do not live on this street." },
      { pronoun: "elles", form: "habitent", full: "elles habitent", en: "they live", example: "Elles habitent à côté.", exampleEn: "They live nearby.", negative: "Elles n’habitent pas à côté.", negativeEn: "They do not live nearby." }
    ];

    const faireRows = [
      { pronoun: "je", form: "fais", full: "je fais", en: "I do / I make", example: "Je fais un gâteau.", exampleEn: "I am making a cake.", negative: "Je ne fais pas de gâteau.", negativeEn: "I am not making a cake." },
      { pronoun: "tu", form: "fais", full: "tu fais", en: "you do / you make", example: "Tu fais tes devoirs.", exampleEn: "You are doing your homework.", negative: "Tu ne fais pas tes devoirs.", negativeEn: "You are not doing your homework.", question: "Que fais-tu ?" },
      { pronoun: "il", form: "fait", full: "il fait", en: "he does / he makes", example: "Il fait un dessin.", exampleEn: "He is making a drawing.", negative: "Il ne fait pas de dessin.", negativeEn: "He is not making a drawing.", question: "Que fait-il ?" },
      { pronoun: "elle", form: "fait", full: "elle fait", en: "she does / she makes", example: "Elle fait une liste.", exampleEn: "She is making a list.", negative: "Elle ne fait pas de liste.", negativeEn: "She is not making a list." },
      { pronoun: "nous", form: "faisons", full: "nous faisons", en: "we do / we make", example: "Nous faisons un projet.", exampleEn: "We are doing a project.", negative: "Nous ne faisons pas de projet.", negativeEn: "We are not doing a project.", question: "Que faisons-nous ?" },
      { pronoun: "vous", form: "faites", full: "vous faites", en: "you do / you make", example: "Vous faites un exercice.", exampleEn: "You are doing an exercise.", negative: "Vous ne faites pas d’exercice.", negativeEn: "You are not doing an exercise.", question: "Quel exercice faites-vous ?" },
      { pronoun: "ils", form: "font", full: "ils font", en: "they do / they make", example: "Ils font un travail difficile.", exampleEn: "They are doing difficult work.", negative: "Ils ne font pas de travail difficile.", negativeEn: "They are not doing difficult work." },
      { pronoun: "elles", form: "font", full: "elles font", en: "they do / they make", example: "Elles font une vidéo.", exampleEn: "They are making a video.", negative: "Elles ne font pas de vidéo.", negativeEn: "They are not making a video." }
    ];

    const faireExpressionRows = [
      {
        expression: "faire un footing",
        meaning: "to go for a jog",
        note: "After negation, un becomes de.",
        example: "Je fais un footing ce matin.",
        exampleEn: "I am going for a jog this morning.",
        negative: "Je ne fais pas de footing ce matin.",
        negativeEn: "I am not going for a jog this morning."
      },
      {
        expression: "faire les courses",
        meaning: "to do the grocery shopping",
        note: "Les is definite, so it stays les after negation.",
        example: "Je fais les courses après le travail.",
        exampleEn: "I do the grocery shopping after work.",
        negative: "Je ne fais pas les courses après le travail.",
        negativeEn: "I do not do the grocery shopping after work."
      },
      {
        expression: "faire des courses",
        meaning: "to run errands / do some shopping",
        note: "After negation, des becomes de.",
        example: "Il fait des courses après le travail.",
        exampleEn: "He runs some errands after work.",
        negative: "Il ne fait pas de courses après le travail.",
        negativeEn: "He does not run errands after work."
      },
      {
        expression: "faire mes courses",
        meaning: "to do my grocery shopping",
        note: "Mes is possessive, so it stays mes after negation.",
        example: "Je fais mes courses le samedi.",
        exampleEn: "I do my grocery shopping on Saturday.",
        negative: "Je ne fais pas mes courses le samedi.",
        negativeEn: "I do not do my grocery shopping on Saturday."
      },
      {
        expression: "faire de la natation",
        meaning: "to go swimming / do swimming",
        note: "After negation, de la becomes de.",
        example: "Nous faisons de la natation.",
        exampleEn: "We go swimming.",
        negative: "Nous ne faisons pas de natation.",
        negativeEn: "We do not go swimming."
      },
      {
        expression: "faire le ménage",
        meaning: "to clean the house",
        note: "Le is definite, so it stays le after negation.",
        example: "Elle fait le ménage.",
        exampleEn: "She is cleaning the house.",
        negative: "Elle ne fait pas le ménage.",
        negativeEn: "She is not cleaning the house."
      },
      {
        expression: "faire du ski",
        meaning: "to ski / go skiing",
        note: "After negation, du becomes de.",
        example: "Vous faites du ski en hiver.",
        exampleEn: "You ski in winter.",
        negative: "Vous ne faites pas de ski en hiver.",
        negativeEn: "You do not ski in winter."
      }
    ];

    const voirRows = [
      { pronoun: "je", form: "vois", full: "je vois", en: "I see", example: "Je vois la gare.", exampleEn: "I see the train station.", negative: "Je ne vois pas la gare.", negativeEn: "I do not see the train station." },
      { pronoun: "tu", form: "vois", full: "tu vois", en: "you see", example: "Tu vois le panneau.", exampleEn: "You see the sign.", negative: "Tu ne vois pas le panneau.", negativeEn: "You do not see the sign.", question: "Vois-tu le panneau ?" },
      { pronoun: "il", form: "voit", full: "il voit", en: "he sees", example: "Il voit ses amis.", exampleEn: "He sees his friends.", negative: "Il ne voit pas ses amis.", negativeEn: "He does not see his friends." },
      { pronoun: "elle", form: "voit", full: "elle voit", en: "she sees", example: "Elle voit un médecin.", exampleEn: "She is seeing a doctor.", negative: "Elle ne voit pas de médecin.", negativeEn: "She is not seeing a doctor." },
      { pronoun: "nous", form: "voyons", full: "nous voyons", en: "we see", example: "Nous voyons la mer.", exampleEn: "We see the sea.", negative: "Nous ne voyons pas la mer.", negativeEn: "We do not see the sea." },
      { pronoun: "vous", form: "voyez", full: "vous voyez", en: "you see", example: "Vous voyez la différence.", exampleEn: "You see the difference.", negative: "Vous ne voyez pas la différence.", negativeEn: "You do not see the difference." },
      { pronoun: "ils", form: "voient", full: "ils voient", en: "they see", example: "Ils voient le problème.", exampleEn: "They see the problem.", negative: "Ils ne voient pas le problème.", negativeEn: "They do not see the problem." },
      { pronoun: "elles", form: "voient", full: "elles voient", en: "they see", example: "Elles voient un film ce soir.", exampleEn: "They are seeing a movie tonight.", negative: "Elles ne voient pas de film ce soir.", negativeEn: "They are not seeing a movie tonight." }
    ];

    const boireRows = [
      { pronoun: "je", form: "bois", full: "je bois", en: "I drink", example: "Je bois de l’eau tous les jours.", exampleEn: "I drink water every day.", negative: "Je ne bois pas d’eau tous les jours.", negativeEn: "I do not drink water every day.", question: "Qu’est-ce que je bois tous les jours ?" },
      { pronoun: "tu", form: "bois", full: "tu bois", en: "you drink", example: "Tu bois du café le matin.", exampleEn: "You drink coffee in the morning.", negative: "Tu ne bois pas de café le matin.", negativeEn: "You do not drink coffee in the morning.", question: "Bois-tu du café le matin ?" },
      { pronoun: "il", form: "boit", full: "il boit", en: "he drinks", example: "Il boit un jus d’orange.", exampleEn: "He drinks orange juice.", negative: "Il ne boit pas de jus d’orange.", negativeEn: "He does not drink orange juice.", question: "Que boit-il ?" },
      { pronoun: "elle", form: "boit", full: "elle boit", en: "she drinks", example: "Elle boit du thé vert.", exampleEn: "She drinks green tea.", negative: "Elle ne boit pas de thé vert.", negativeEn: "She does not drink green tea.", question: "Quel thé boit-elle ?" },
      { pronoun: "nous", form: "buvons", full: "nous buvons", en: "we drink", example: "Nous buvons de l’eau pendant le repas.", exampleEn: "We drink water during the meal.", negative: "Nous ne buvons pas d’eau pendant le repas.", negativeEn: "We do not drink water during the meal.", question: "Quand buvons-nous de l’eau ?" },
      { pronoun: "vous", form: "buvez", full: "vous buvez", en: "you drink", example: "Vous buvez du vin rouge.", exampleEn: "You drink red wine.", negative: "Vous ne buvez pas de vin rouge.", negativeEn: "You do not drink red wine.", question: "Que buvez-vous ?" },
      { pronoun: "ils", form: "boivent", full: "ils boivent", en: "they drink", example: "Ils boivent de la bière au café.", exampleEn: "They drink beer at the café.", negative: "Ils ne boivent pas de bière au café.", negativeEn: "They do not drink beer at the café.", question: "Où boivent-ils de la bière ?" },
      { pronoun: "elles", form: "boivent", full: "elles boivent", en: "they drink", example: "Elles boivent du chocolat chaud.", exampleEn: "They drink hot chocolate.", negative: "Elles ne boivent pas de chocolat chaud.", negativeEn: "They do not drink hot chocolate.", question: "Que boivent-elles ?" }
    ];

    const ecrireRows = [
      { pronoun: "j’", form: "écris", full: "j’écris", en: "I write", example: "J’écris un message.", exampleEn: "I am writing a message.", negative: "Je n’écris pas de message.", negativeEn: "I am not writing a message." },
      { pronoun: "tu", form: "écris", full: "tu écris", en: "you write", example: "Tu écris ton nom ici.", exampleEn: "You write your name here.", negative: "Tu n’écris pas ton nom ici.", negativeEn: "You do not write your name here." },
      { pronoun: "il", form: "écrit", full: "il écrit", en: "he writes", example: "Il écrit une lettre.", exampleEn: "He is writing a letter.", negative: "Il n’écrit pas de lettre.", negativeEn: "He is not writing a letter." },
      { pronoun: "elle", form: "écrit", full: "elle écrit", en: "she writes", example: "Elle écrit dans son cahier.", exampleEn: "She writes in her notebook.", negative: "Elle n’écrit pas dans son cahier.", negativeEn: "She does not write in her notebook." },
      { pronoun: "nous", form: "écrivons", full: "nous écrivons", en: "we write", example: "Nous écrivons au professeur.", exampleEn: "We are writing to the teacher.", negative: "Nous n’écrivons pas au professeur.", negativeEn: "We are not writing to the teacher." },
      { pronoun: "vous", form: "écrivez", full: "vous écrivez", en: "you write", example: "Vous écrivez l’adresse.", exampleEn: "You write the address.", negative: "Vous n’écrivez pas l’adresse.", negativeEn: "You do not write the address." },
      { pronoun: "ils", form: "écrivent", full: "ils écrivent", en: "they write", example: "Ils écrivent des phrases.", exampleEn: "They are writing sentences.", negative: "Ils n’écrivent pas de phrases.", negativeEn: "They are not writing sentences." },
      { pronoun: "elles", form: "écrivent", full: "elles écrivent", en: "they write", example: "Elles écrivent souvent.", exampleEn: "They write often.", negative: "Elles n’écrivent pas souvent.", negativeEn: "They do not write often." }
    ];

    const lireRows = [
      { pronoun: "je", form: "lis", full: "je lis", en: "I read", example: "Je lis un livre.", exampleEn: "I am reading a book.", negative: "Je ne lis pas de livre.", negativeEn: "I am not reading a book." },
      { pronoun: "tu", form: "lis", full: "tu lis", en: "you read", example: "Tu lis le menu.", exampleEn: "You are reading the menu.", negative: "Tu ne lis pas le menu.", negativeEn: "You are not reading the menu.", question: "Lis-tu le menu ?" },
      { pronoun: "il", form: "lit", full: "il lit", en: "he reads", example: "Il lit le journal.", exampleEn: "He reads the newspaper.", negative: "Il ne lit pas le journal.", negativeEn: "He does not read the newspaper." },
      { pronoun: "elle", form: "lit", full: "elle lit", en: "she reads", example: "Elle lit une histoire.", exampleEn: "She is reading a story.", negative: "Elle ne lit pas d’histoire.", negativeEn: "She is not reading a story." },
      { pronoun: "nous", form: "lisons", full: "nous lisons", en: "we read", example: "Nous lisons en français.", exampleEn: "We read in French.", negative: "Nous ne lisons pas en français.", negativeEn: "We do not read in French." },
      { pronoun: "vous", form: "lisez", full: "vous lisez", en: "you read", example: "Vous lisez la consigne.", exampleEn: "You read the instruction.", negative: "Vous ne lisez pas la consigne.", negativeEn: "You do not read the instruction." },
      { pronoun: "ils", form: "lisent", full: "ils lisent", en: "they read", example: "Ils lisent ensemble.", exampleEn: "They read together.", negative: "Ils ne lisent pas ensemble.", negativeEn: "They do not read together." },
      { pronoun: "elles", form: "lisent", full: "elles lisent", en: "they read", example: "Elles lisent des romans.", exampleEn: "They read novels.", negative: "Elles ne lisent pas de romans.", negativeEn: "They do not read novels." }
    ];

    const partirRows = [
      { pronoun: "je", form: "pars", full: "je pars", en: "I leave", example: "Je pars demain matin.", exampleEn: "I leave tomorrow morning.", negative: "Je ne pars pas demain matin.", negativeEn: "I am not leaving tomorrow morning." },
      { pronoun: "tu", form: "pars", full: "tu pars", en: "you leave", example: "Tu pars à huit heures.", exampleEn: "You are leaving at eight o’clock.", negative: "Tu ne pars pas à huit heures.", negativeEn: "You are not leaving at eight o’clock.", question: "À quelle heure pars-tu ?" },
      { pronoun: "il", form: "part", full: "il part", en: "he leaves", example: "Il part pour Lyon.", exampleEn: "He leaves for Lyon.", negative: "Il ne part pas pour Lyon.", negativeEn: "He is not leaving for Lyon." },
      { pronoun: "elle", form: "part", full: "elle part", en: "she leaves", example: "Elle part en vacances.", exampleEn: "She is leaving on vacation.", negative: "Elle ne part pas en vacances.", negativeEn: "She is not leaving on vacation." },
      { pronoun: "nous", form: "partons", full: "nous partons", en: "we leave", example: "Nous partons à midi.", exampleEn: "We leave at noon.", negative: "Nous ne partons pas à midi.", negativeEn: "We are not leaving at noon." },
      { pronoun: "vous", form: "partez", full: "vous partez", en: "you leave", example: "Vous partez ce soir.", exampleEn: "You are leaving tonight.", negative: "Vous ne partez pas ce soir.", negativeEn: "You are not leaving tonight.", question: "Partez-vous ce soir ?" },
      { pronoun: "ils", form: "partent", full: "ils partent", en: "they leave", example: "Ils partent tôt.", exampleEn: "They leave early.", negative: "Ils ne partent pas tôt.", negativeEn: "They do not leave early." },
      { pronoun: "elles", form: "partent", full: "elles partent", en: "they leave", example: "Elles partent ensemble.", exampleEn: "They leave together.", negative: "Elles ne partent pas ensemble.", negativeEn: "They do not leave together." }
    ];

    const dormirRows = [
      { pronoun: "je", form: "dors", full: "je dors", en: "I sleep", example: "Je dors bien.", exampleEn: "I sleep well.", negative: "Je ne dors pas bien.", negativeEn: "I do not sleep well." },
      { pronoun: "tu", form: "dors", full: "tu dors", en: "you sleep", example: "Tu dors déjà.", exampleEn: "You are already sleeping.", negative: "Tu ne dors pas encore.", negativeEn: "You are not sleeping yet.", question: "Dors-tu déjà ?" },
      { pronoun: "il", form: "dort", full: "il dort", en: "he sleeps", example: "Il dort huit heures.", exampleEn: "He sleeps eight hours.", negative: "Il ne dort pas huit heures.", negativeEn: "He does not sleep eight hours." },
      { pronoun: "elle", form: "dort", full: "elle dort", en: "she sleeps", example: "Elle dort chez sa sœur.", exampleEn: "She sleeps at her sister’s place.", negative: "Elle ne dort pas chez sa sœur.", negativeEn: "She does not sleep at her sister’s place." },
      { pronoun: "nous", form: "dormons", full: "nous dormons", en: "we sleep", example: "Nous dormons tôt.", exampleEn: "We sleep early.", negative: "Nous ne dormons pas tôt.", negativeEn: "We do not sleep early." },
      { pronoun: "vous", form: "dormez", full: "vous dormez", en: "you sleep", example: "Vous dormez ici.", exampleEn: "You sleep here.", negative: "Vous ne dormez pas ici.", negativeEn: "You do not sleep here." },
      { pronoun: "ils", form: "dorment", full: "ils dorment", en: "they sleep", example: "Ils dorment dans le train.", exampleEn: "They sleep on the train.", negative: "Ils ne dorment pas dans le train.", negativeEn: "They do not sleep on the train." },
      { pronoun: "elles", form: "dorment", full: "elles dorment", en: "they sleep", example: "Elles dorment longtemps.", exampleEn: "They sleep for a long time.", negative: "Elles ne dorment pas longtemps.", negativeEn: "They do not sleep for a long time." }
    ];

    const sortirRows = [
      { pronoun: "je", form: "sors", full: "je sors", en: "I go out / leave", example: "Je sors ce soir.", exampleEn: "I am going out tonight.", negative: "Je ne sors pas ce soir.", negativeEn: "I am not going out tonight." },
      { pronoun: "tu", form: "sors", full: "tu sors", en: "you go out / leave", example: "Tu sors avec tes amis.", exampleEn: "You are going out with your friends.", negative: "Tu ne sors pas avec tes amis.", negativeEn: "You are not going out with your friends.", question: "Sors-tu avec tes amis ?" },
      { pronoun: "il", form: "sort", full: "il sort", en: "he goes out / leaves", example: "Il sort de la maison.", exampleEn: "He is leaving the house.", negative: "Il ne sort pas de la maison.", negativeEn: "He is not leaving the house." },
      { pronoun: "elle", form: "sort", full: "elle sort", en: "she goes out / leaves", example: "Elle sort du bureau.", exampleEn: "She is leaving the office.", negative: "Elle ne sort pas du bureau.", negativeEn: "She is not leaving the office." },
      { pronoun: "nous", form: "sortons", full: "nous sortons", en: "we go out / leave", example: "Nous sortons après le dîner.", exampleEn: "We are going out after dinner.", negative: "Nous ne sortons pas après le dîner.", negativeEn: "We are not going out after dinner." },
      { pronoun: "vous", form: "sortez", full: "vous sortez", en: "you go out / leave", example: "Vous sortez à midi.", exampleEn: "You leave at noon.", negative: "Vous ne sortez pas à midi.", negativeEn: "You do not leave at noon." },
      { pronoun: "ils", form: "sortent", full: "ils sortent", en: "they go out / leave", example: "Ils sortent ensemble.", exampleEn: "They are going out together.", negative: "Ils ne sortent pas ensemble.", negativeEn: "They are not going out together." },
      { pronoun: "elles", form: "sortent", full: "elles sortent", en: "they go out / leave", example: "Elles sortent du cours.", exampleEn: "They are leaving class.", negative: "Elles ne sortent pas du cours.", negativeEn: "They are not leaving class." }
    ];

    const servirRows = [
      { pronoun: "je", form: "sers", full: "je sers", en: "I serve", example: "Je sers le café.", exampleEn: "I serve the coffee.", negative: "Je ne sers pas le café.", negativeEn: "I do not serve the coffee." },
      { pronoun: "tu", form: "sers", full: "tu sers", en: "you serve", example: "Tu sers le dessert.", exampleEn: "You are serving dessert.", negative: "Tu ne sers pas le dessert.", negativeEn: "You are not serving dessert.", question: "Sers-tu le dessert ?" },
      { pronoun: "il", form: "sert", full: "il sert", en: "he serves / it is useful", example: "Il sert les clients.", exampleEn: "He serves the customers.", negative: "Il ne sert pas les clients.", negativeEn: "He does not serve the customers." },
      { pronoun: "elle", form: "sert", full: "elle sert", en: "she serves / it is useful", example: "Elle sert de l’eau.", exampleEn: "She serves water.", negative: "Elle ne sert pas d’eau.", negativeEn: "She does not serve water." },
      { pronoun: "nous", form: "servons", full: "nous servons", en: "we serve", example: "Nous servons le dîner.", exampleEn: "We serve dinner.", negative: "Nous ne servons pas le dîner.", negativeEn: "We do not serve dinner." },
      { pronoun: "vous", form: "servez", full: "vous servez", en: "you serve", example: "Vous servez le vin.", exampleEn: "You serve the wine.", negative: "Vous ne servez pas le vin.", negativeEn: "You do not serve the wine." },
      { pronoun: "ils", form: "servent", full: "ils servent", en: "they serve", example: "Ils servent les repas.", exampleEn: "They serve the meals.", negative: "Ils ne servent pas les repas.", negativeEn: "They do not serve the meals." },
      { pronoun: "elles", form: "servent", full: "elles servent", en: "they serve", example: "Elles servent les clients.", exampleEn: "They serve the customers.", negative: "Elles ne servent pas les clients.", negativeEn: "They do not serve the customers." }
    ];

    const sentirRows = [
      { pronoun: "je", form: "sens", full: "je sens", en: "I smell / feel", example: "Je sens le café.", exampleEn: "I smell the coffee.", negative: "Je ne sens pas le café.", negativeEn: "I do not smell the coffee." },
      { pronoun: "tu", form: "sens", full: "tu sens", en: "you smell / feel", example: "Tu sens le parfum.", exampleEn: "You smell the perfume.", negative: "Tu ne sens pas le parfum.", negativeEn: "You do not smell the perfume.", question: "Sens-tu le parfum ?" },
      { pronoun: "il", form: "sent", full: "il sent", en: "he smells / feels", example: "Il sent la fumée.", exampleEn: "He smells smoke.", negative: "Il ne sent pas la fumée.", negativeEn: "He does not smell smoke." },
      { pronoun: "elle", form: "sent", full: "elle sent", en: "she smells / feels", example: "Elle sent le froid.", exampleEn: "She feels the cold.", negative: "Elle ne sent pas le froid.", negativeEn: "She does not feel the cold." },
      { pronoun: "nous", form: "sentons", full: "nous sentons", en: "we smell / feel", example: "Nous sentons le vent.", exampleEn: "We feel the wind.", negative: "Nous ne sentons pas le vent.", negativeEn: "We do not feel the wind." },
      { pronoun: "vous", form: "sentez", full: "vous sentez", en: "you smell / feel", example: "Vous sentez cette odeur.", exampleEn: "You smell that odor.", negative: "Vous ne sentez pas cette odeur.", negativeEn: "You do not smell that odor.", question: "Sentez-vous cette odeur ?" },
      { pronoun: "ils", form: "sentent", full: "ils sentent", en: "they smell / feel", example: "Ils sentent la fatigue.", exampleEn: "They feel tiredness.", negative: "Ils ne sentent pas la fatigue.", negativeEn: "They do not feel tiredness." },
      { pronoun: "elles", form: "sentent", full: "elles sentent", en: "they smell / feel", example: "Elles sentent la pluie.", exampleEn: "They smell the rain.", negative: "Elles ne sentent pas la pluie.", negativeEn: "They do not smell the rain." }
    ];

    const trouverRows = [
      { pronoun: "je", form: "trouve", full: "je trouve", en: "I find / I think", example: "Je trouve la clé.", exampleEn: "I find the key.", negative: "Je ne trouve pas la clé.", negativeEn: "I do not find the key." },
      { pronoun: "tu", form: "trouves", full: "tu trouves", en: "you find / you think", example: "Tu trouves ce livre intéressant.", exampleEn: "You find this book interesting.", negative: "Tu ne trouves pas ce livre intéressant.", negativeEn: "You do not find this book interesting.", question: "Trouves-tu ce livre intéressant ?" },
      {
        pronoun: "il",
        form: "trouve",
        full: "il trouve",
        en: "he finds / he thinks",
        examples: [
          { meaning: "find", fr: "Il trouve une solution.", en: "He finds a solution.", negative: "Il ne trouve pas de solution.", negativeEn: "He does not find a solution." },
          { meaning: "se trouver = to be located", fr: "Le musée se trouve au coin de la rue.", en: "The museum is located at the corner of the street.", negative: "Le musée ne se trouve pas au coin de la rue.", negativeEn: "The museum is not located at the corner of the street." }
        ]
      },
      { pronoun: "elle", form: "trouve", full: "elle trouve", en: "she finds / she thinks", example: "Elle trouve le film drôle.", exampleEn: "She finds the movie funny.", negative: "Elle ne trouve pas le film drôle.", negativeEn: "She does not find the movie funny." },
      { pronoun: "nous", form: "trouvons", full: "nous trouvons", en: "we find / we think", example: "Nous trouvons une place.", exampleEn: "We find a seat.", negative: "Nous ne trouvons pas de place.", negativeEn: "We do not find a seat." },
      { pronoun: "vous", form: "trouvez", full: "vous trouvez", en: "you find / you think", example: "Vous trouvez la réponse.", exampleEn: "You find the answer.", negative: "Vous ne trouvez pas la réponse.", negativeEn: "You do not find the answer." },
      { pronoun: "ils", form: "trouvent", full: "ils trouvent", en: "they find / they think", example: "Ils trouvent un restaurant.", exampleEn: "They find a restaurant.", negative: "Ils ne trouvent pas de restaurant.", negativeEn: "They do not find a restaurant." },
      { pronoun: "elles", form: "trouvent", full: "elles trouvent", en: "they find / they think", example: "Elles trouvent cette ville belle.", exampleEn: "They find this city beautiful.", negative: "Elles ne trouvent pas cette ville belle.", negativeEn: "They do not find this city beautiful." }
    ];

    const regarderRows = [
      { pronoun: "je", form: "regarde", full: "je regarde", en: "I watch / look at", example: "Je regarde un film.", exampleEn: "I am watching a movie.", negative: "Je ne regarde pas de film.", negativeEn: "I am not watching a movie." },
      { pronoun: "tu", form: "regardes", full: "tu regardes", en: "you watch / look at", example: "Tu regardes la télé.", exampleEn: "You are watching TV.", negative: "Tu ne regardes pas la télé.", negativeEn: "You are not watching TV." },
      { pronoun: "il", form: "regarde", full: "il regarde", en: "he watches / looks at", example: "Il regarde son téléphone.", exampleEn: "He is looking at his phone.", negative: "Il ne regarde pas son téléphone.", negativeEn: "He is not looking at his phone." },
      { pronoun: "elle", form: "regarde", full: "elle regarde", en: "she watches / looks at", example: "Elle regarde les photos.", exampleEn: "She is looking at the photos.", negative: "Elle ne regarde pas les photos.", negativeEn: "She is not looking at the photos." },
      { pronoun: "nous", form: "regardons", full: "nous regardons", en: "we watch / look at", example: "Nous regardons le menu.", exampleEn: "We are looking at the menu.", negative: "Nous ne regardons pas le menu.", negativeEn: "We are not looking at the menu.", question: "Que regardons-nous ?" },
      { pronoun: "vous", form: "regardez", full: "vous regardez", en: "you watch / look at", example: "Vous regardez la carte.", exampleEn: "You are looking at the map.", negative: "Vous ne regardez pas la carte.", negativeEn: "You are not looking at the map.", question: "Regardez-vous la carte ?" },
      { pronoun: "ils", form: "regardent", full: "ils regardent", en: "they watch / look at", example: "Ils regardent le match.", exampleEn: "They are watching the game.", negative: "Ils ne regardent pas le match.", negativeEn: "They are not watching the game." },
      { pronoun: "elles", form: "regardent", full: "elles regardent", en: "they watch / look at", example: "Elles regardent la vidéo.", exampleEn: "They are watching the video.", negative: "Elles ne regardent pas la vidéo.", negativeEn: "They are not watching the video." }
    ];

    const passerRows = [
      { pronoun: "je", form: "passe", full: "je passe", en: "I pass / stop by / spend", example: "Je passe par le parc.", exampleEn: "I pass through the park.", negative: "Je ne passe pas par le parc.", negativeEn: "I do not pass through the park." },
      { pronoun: "tu", form: "passes", full: "tu passes", en: "you pass / stop by / spend", example: "Tu passes chez moi ce soir.", exampleEn: "You are stopping by my place tonight.", negative: "Tu ne passes pas chez moi ce soir.", negativeEn: "You are not stopping by my place tonight.", question: "Passes-tu chez moi ce soir ?" },
      { pronoun: "il", form: "passe", full: "il passe", en: "he passes / takes", example: "Il passe l’examen demain.", exampleEn: "He takes the exam tomorrow.", negative: "Il ne passe pas l’examen demain.", negativeEn: "He is not taking the exam tomorrow." },
      { pronoun: "elle", form: "passe", full: "elle passe", en: "she spends / passes", example: "Elle passe du temps avec sa famille.", exampleEn: "She spends time with her family.", negative: "Elle ne passe pas de temps avec sa famille.", negativeEn: "She does not spend time with her family." },
      { pronoun: "nous", form: "passons", full: "nous passons", en: "we pass / stop by / spend", example: "Nous passons devant la gare.", exampleEn: "We pass in front of the train station.", negative: "Nous ne passons pas devant la gare.", negativeEn: "We do not pass in front of the train station." },
      { pronoun: "vous", form: "passez", full: "vous passez", en: "you pass / stop by / spend", example: "Vous passez devant la banque.", exampleEn: "You pass in front of the bank.", negative: "Vous ne passez pas devant la banque.", negativeEn: "You do not pass in front of the bank." },
      { pronoun: "ils", form: "passent", full: "ils passent", en: "they pass / stop by / spend", example: "Ils passent par Paris.", exampleEn: "They pass through Paris.", negative: "Ils ne passent pas par Paris.", negativeEn: "They do not pass through Paris." },
      { pronoun: "elles", form: "passent", full: "elles passent", en: "they spend / pass", example: "Elles passent l’après-midi au café.", exampleEn: "They spend the afternoon at the café.", negative: "Elles ne passent pas l’après-midi au café.", negativeEn: "They do not spend the afternoon at the café." }
    ];

    const commencerRows = [
      { pronoun: "je", form: "commence", full: "je commence", en: "I begin / start", example: "Je commence le travail à neuf heures.", exampleEn: "I start work at nine o’clock.", negative: "Je ne commence pas le travail à neuf heures.", negativeEn: "I do not start work at nine o’clock." },
      { pronoun: "tu", form: "commences", full: "tu commences", en: "you begin / start", example: "Tu commences la leçon.", exampleEn: "You start the lesson.", negative: "Tu ne commences pas la leçon.", negativeEn: "You do not start the lesson." },
      { pronoun: "il", form: "commence", full: "il commence", en: "he begins / starts", example: "Il commence à pleuvoir.", exampleEn: "It is starting to rain.", negative: "Il ne commence pas à pleuvoir.", negativeEn: "It is not starting to rain." },
      { pronoun: "elle", form: "commence", full: "elle commence", en: "she begins / starts", example: "Elle commence un nouveau livre.", exampleEn: "She is starting a new book.", negative: "Elle ne commence pas de nouveau livre.", negativeEn: "She is not starting a new book." },
      { pronoun: "nous", form: "commençons", full: "nous commençons", en: "we begin / start", example: "Nous commençons le cours.", exampleEn: "We are starting the class.", negative: "Nous ne commençons pas le cours.", negativeEn: "We are not starting the class." },
      { pronoun: "vous", form: "commencez", full: "vous commencez", en: "you begin / start", example: "Vous commencez maintenant.", exampleEn: "You start now.", negative: "Vous ne commencez pas maintenant.", negativeEn: "You are not starting now." },
      { pronoun: "ils", form: "commencent", full: "ils commencent", en: "they begin / start", example: "Ils commencent tôt.", exampleEn: "They start early.", negative: "Ils ne commencent pas tôt.", negativeEn: "They do not start early.", question: "Quand commencent-ils ?" },
      { pronoun: "elles", form: "commencent", full: "elles commencent", en: "they begin / start", example: "Elles commencent à comprendre.", exampleEn: "They are beginning to understand.", negative: "Elles ne commencent pas à comprendre.", negativeEn: "They are not beginning to understand." }
    ];

    const voyagerRows = [
      { pronoun: "je", form: "voyage", full: "je voyage", en: "I travel", example: "Je voyage souvent.", exampleEn: "I travel often.", negative: "Je ne voyage pas souvent.", negativeEn: "I do not travel often." },
      { pronoun: "tu", form: "voyages", full: "tu voyages", en: "you travel", example: "Tu voyages en train.", exampleEn: "You travel by train.", negative: "Tu ne voyages pas en train.", negativeEn: "You do not travel by train." },
      { pronoun: "il", form: "voyage", full: "il voyage", en: "he travels", example: "Il voyage pour le travail.", exampleEn: "He travels for work.", negative: "Il ne voyage pas pour le travail.", negativeEn: "He does not travel for work." },
      { pronoun: "elle", form: "voyage", full: "elle voyage", en: "she travels", example: "Elle voyage avec sa sœur.", exampleEn: "She travels with her sister.", negative: "Elle ne voyage pas avec sa sœur.", negativeEn: "She does not travel with her sister." },
      { pronoun: "nous", form: "voyageons", full: "nous voyageons", en: "we travel", example: "Nous voyageons en été.", exampleEn: "We travel in summer.", negative: "Nous ne voyageons pas en été.", negativeEn: "We do not travel in summer." },
      { pronoun: "vous", form: "voyagez", full: "vous voyagez", en: "you travel", example: "Vous voyagez beaucoup.", exampleEn: "You travel a lot.", negative: "Vous ne voyagez pas beaucoup.", negativeEn: "You do not travel a lot." },
      { pronoun: "ils", form: "voyagent", full: "ils voyagent", en: "they travel", example: "Ils voyagent en Europe.", exampleEn: "They travel in Europe.", negative: "Ils ne voyagent pas en Europe.", negativeEn: "They do not travel in Europe." },
      { pronoun: "elles", form: "voyagent", full: "elles voyagent", en: "they travel", example: "Elles voyagent ensemble.", exampleEn: "They travel together.", negative: "Elles ne voyagent pas ensemble.", negativeEn: "They do not travel together." }
    ];

    const travaillerRows = [
      { pronoun: "je", form: "travaille", full: "je travaille", en: "I work", example: "Je travaille aujourd’hui.", exampleEn: "I am working today.", negative: "Je ne travaille pas aujourd’hui.", negativeEn: "I am not working today." },
      { pronoun: "tu", form: "travailles", full: "tu travailles", en: "you work", example: "Tu travailles à la maison.", exampleEn: "You work at home.", negative: "Tu ne travailles pas à la maison.", negativeEn: "You do not work at home.", question: "Où travailles-tu ?" },
      { pronoun: "il", form: "travaille", full: "il travaille", en: "he works", example: "Il travaille dans un bureau.", exampleEn: "He works in an office.", negative: "Il ne travaille pas dans un bureau.", negativeEn: "He does not work in an office." },
      { pronoun: "elle", form: "travaille", full: "elle travaille", en: "she works", example: "Elle travaille le lundi.", exampleEn: "She works on Mondays.", negative: "Elle ne travaille pas le lundi.", negativeEn: "She does not work on Mondays." },
      { pronoun: "nous", form: "travaillons", full: "nous travaillons", en: "we work", example: "Nous travaillons ensemble.", exampleEn: "We work together.", negative: "Nous ne travaillons pas ensemble.", negativeEn: "We do not work together." },
      { pronoun: "vous", form: "travaillez", full: "vous travaillez", en: "you work", example: "Vous travaillez beaucoup.", exampleEn: "You work a lot.", negative: "Vous ne travaillez pas beaucoup.", negativeEn: "You do not work a lot." },
      { pronoun: "ils", form: "travaillent", full: "ils travaillent", en: "they work", example: "Ils travaillent tard.", exampleEn: "They work late.", negative: "Ils ne travaillent pas tard.", negativeEn: "They do not work late." },
      { pronoun: "elles", form: "travaillent", full: "elles travaillent", en: "they work", example: "Elles travaillent en équipe.", exampleEn: "They work as a team.", negative: "Elles ne travaillent pas en équipe.", negativeEn: "They do not work as a team." }
    ];

    const dejeunerRows = [
      { pronoun: "je", form: "déjeune", full: "je déjeune", en: "I have lunch", example: "Je déjeune à midi.", exampleEn: "I have lunch at noon.", negative: "Je ne déjeune pas à midi.", negativeEn: "I do not have lunch at noon." },
      { pronoun: "tu", form: "déjeunes", full: "tu déjeunes", en: "you have lunch", example: "Tu déjeunes avec nous.", exampleEn: "You are having lunch with us.", negative: "Tu ne déjeunes pas avec nous.", negativeEn: "You are not having lunch with us.", question: "Déjeunes-tu avec nous ?" },
      { pronoun: "il", form: "déjeune", full: "il déjeune", en: "he has lunch", example: "Il déjeune au bureau.", exampleEn: "He has lunch at the office.", negative: "Il ne déjeune pas au bureau.", negativeEn: "He does not have lunch at the office." },
      { pronoun: "elle", form: "déjeune", full: "elle déjeune", en: "she has lunch", example: "Elle déjeune avec ses collègues.", exampleEn: "She has lunch with her coworkers.", negative: "Elle ne déjeune pas avec ses collègues.", negativeEn: "She does not have lunch with her coworkers." },
      { pronoun: "nous", form: "déjeunons", full: "nous déjeunons", en: "we have lunch", example: "Nous déjeunons ensemble.", exampleEn: "We have lunch together.", negative: "Nous ne déjeunons pas ensemble.", negativeEn: "We do not have lunch together." },
      { pronoun: "vous", form: "déjeunez", full: "vous déjeunez", en: "you have lunch", example: "Vous déjeunez ici aujourd’hui.", exampleEn: "You are having lunch here today.", negative: "Vous ne déjeunez pas ici aujourd’hui.", negativeEn: "You are not having lunch here today.", question: "Où déjeunez-vous aujourd’hui ?" },
      { pronoun: "ils", form: "déjeunent", full: "ils déjeunent", en: "they have lunch", example: "Ils déjeunent au restaurant.", exampleEn: "They have lunch at the restaurant.", negative: "Ils ne déjeunent pas au restaurant.", negativeEn: "They do not have lunch at the restaurant." },
      { pronoun: "elles", form: "déjeunent", full: "elles déjeunent", en: "they have lunch", example: "Elles déjeunent tard le dimanche.", exampleEn: "They have lunch late on Sundays.", negative: "Elles ne déjeunent pas tard le dimanche.", negativeEn: "They do not have lunch late on Sundays." }
    ];

    const acheterRows = [
      { pronoun: "j’", form: "achète", full: "j’achète", en: "I buy", example: "J’achète du pain.", exampleEn: "I buy bread.", negative: "Je n’achète pas de pain.", negativeEn: "I do not buy bread.", question: "Qu’est-ce que j’achète ?" },
      { pronoun: "tu", form: "achètes", full: "tu achètes", en: "you buy", example: "Tu achètes un billet en ligne.", exampleEn: "You buy a ticket online.", negative: "Tu n’achètes pas de billet en ligne.", negativeEn: "You do not buy a ticket online.", question: "Où achètes-tu un billet ?" },
      { pronoun: "il", form: "achète", full: "il achète", en: "he buys", example: "Il achète une voiture d’occasion.", exampleEn: "He buys a used car.", negative: "Il n’achète pas de voiture d’occasion.", negativeEn: "He does not buy a used car.", question: "Quelle voiture achète-t-il ?" },
      { pronoun: "elle", form: "achète", full: "elle achète", en: "she buys", example: "Elle achète des légumes au marché.", exampleEn: "She buys vegetables at the market.", negative: "Elle n’achète pas de légumes au marché.", negativeEn: "She does not buy vegetables at the market.", question: "Où achète-t-elle des légumes ?" },
      { pronoun: "nous", form: "achetons", full: "nous achetons", en: "we buy", example: "Nous achetons des cadeaux.", exampleEn: "We buy gifts.", negative: "Nous n’achetons pas de cadeaux.", negativeEn: "We do not buy gifts.", question: "Qu’achetons-nous ?" },
      { pronoun: "vous", form: "achetez", full: "vous achetez", en: "you buy", example: "Vous achetez le billet maintenant.", exampleEn: "You buy the ticket now.", negative: "Vous n’achetez pas le billet maintenant.", negativeEn: "You do not buy the ticket now.", question: "Quand achetez-vous le billet ?" },
      { pronoun: "ils", form: "achètent", full: "ils achètent", en: "they buy", example: "Ils achètent des fleurs.", exampleEn: "They buy flowers.", negative: "Ils n’achètent pas de fleurs.", negativeEn: "They do not buy flowers.", question: "Combien de fleurs achètent-ils ?" },
      { pronoun: "elles", form: "achètent", full: "elles achètent", en: "they buy", example: "Elles achètent des livres pour le cours.", exampleEn: "They buy books for class.", negative: "Elles n’achètent pas de livres pour le cours.", negativeEn: "They do not buy books for class.", question: "Pourquoi achètent-elles des livres ?" }
    ];

    const rentrerRows = [
      { pronoun: "je", form: "rentre", full: "je rentre", en: "I return / go home", example: "Je rentre à la maison.", exampleEn: "I am going home.", negative: "Je ne rentre pas à la maison.", negativeEn: "I am not going home." },
      { pronoun: "tu", form: "rentres", full: "tu rentres", en: "you return / go home", example: "Tu rentres tard ce soir.", exampleEn: "You are coming home late tonight.", negative: "Tu ne rentres pas tard ce soir.", negativeEn: "You are not coming home late tonight." },
      { pronoun: "il", form: "rentre", full: "il rentre", en: "he returns / goes home", example: "Il rentre du travail.", exampleEn: "He is coming back from work.", negative: "Il ne rentre pas du travail.", negativeEn: "He is not coming back from work." },
      { pronoun: "elle", form: "rentre", full: "elle rentre", en: "she returns / goes home", example: "Elle rentre chez elle.", exampleEn: "She is going back to her place.", negative: "Elle ne rentre pas chez elle.", negativeEn: "She is not going back to her place." },
      { pronoun: "nous", form: "rentrons", full: "nous rentrons", en: "we return / go home", example: "Nous rentrons avant le dîner.", exampleEn: "We are coming home before dinner.", negative: "Nous ne rentrons pas avant le dîner.", negativeEn: "We are not coming home before dinner." },
      { pronoun: "vous", form: "rentrez", full: "vous rentrez", en: "you return / go home", example: "Vous rentrez demain matin.", exampleEn: "You are returning tomorrow morning.", negative: "Vous ne rentrez pas demain matin.", negativeEn: "You are not returning tomorrow morning." },
      { pronoun: "ils", form: "rentrent", full: "ils rentrent", en: "they return / go home", example: "Ils rentrent en bus.", exampleEn: "They are going home by bus.", negative: "Ils ne rentrent pas en bus.", negativeEn: "They are not going home by bus." },
      { pronoun: "elles", form: "rentrent", full: "elles rentrent", en: "they return / go home", example: "Elles rentrent après le cours.", exampleEn: "They are going home after class.", negative: "Elles ne rentrent pas après le cours.", negativeEn: "They are not going home after class." }
    ];

    const demanderRows = [
      { pronoun: "je", form: "demande", full: "je demande", en: "I ask", example: "Je demande de l’aide.", exampleEn: "I ask for help.", negative: "Je ne demande pas d’aide.", negativeEn: "I do not ask for help." },
      { pronoun: "tu", form: "demandes", full: "tu demandes", en: "you ask", example: "Tu demandes l’adresse.", exampleEn: "You are asking for the address.", negative: "Tu ne demandes pas l’adresse.", negativeEn: "You are not asking for the address.", question: "Demandes-tu l’adresse ?" },
      {
        pronoun: "il",
        form: "demande",
        full: "il demande",
        en: "he asks",
        examples: [
          { meaning: "ask for", fr: "Il demande une information.", en: "He asks for information.", negative: "Il ne demande pas d’information.", negativeEn: "He does not ask for information." },
          { meaning: "demander à ... de ...", fr: "Il demande à Marie de venir.", en: "He asks Marie to come.", negative: "Il ne demande pas à Marie de venir.", negativeEn: "He does not ask Marie to come." }
        ]
      },
      { pronoun: "elle", form: "demande", full: "elle demande", en: "she asks", example: "Elle demande à son ami de l’aider.", exampleEn: "She asks her friend to help her.", negative: "Elle ne demande pas à son ami de l’aider.", negativeEn: "She does not ask her friend to help her." },
      { pronoun: "nous", form: "demandons", full: "nous demandons", en: "we ask", example: "Nous demandons le prix.", exampleEn: "We ask the price.", negative: "Nous ne demandons pas le prix.", negativeEn: "We do not ask the price." },
      { pronoun: "vous", form: "demandez", full: "vous demandez", en: "you ask", example: "Vous demandez au professeur de répéter.", exampleEn: "You ask the teacher to repeat.", negative: "Vous ne demandez pas au professeur de répéter.", negativeEn: "You do not ask the teacher to repeat." },
      { pronoun: "ils", form: "demandent", full: "ils demandent", en: "they ask", example: "Ils demandent à leurs parents de venir.", exampleEn: "They ask their parents to come.", negative: "Ils ne demandent pas à leurs parents de venir.", negativeEn: "They do not ask their parents to come." },
      { pronoun: "elles", form: "demandent", full: "elles demandent", en: "they ask", example: "Elles demandent une réponse.", exampleEn: "They ask for an answer.", negative: "Elles ne demandent pas de réponse.", negativeEn: "They do not ask for an answer." }
    ];

    const jouerRows = [
      {
        pronoun: "je",
        form: "joue",
        full: "je joue",
        en: "I play",
        examples: [
          { meaning: "jouer à / au = play a sport or game", fr: "Je joue au tennis.", en: "I play tennis.", negative: "Je ne joue pas au tennis.", negativeEn: "I do not play tennis." },
          { meaning: "jouer de = play an instrument", fr: "Je joue de la guitare.", en: "I play guitar.", negative: "Je ne joue pas de guitare.", negativeEn: "I do not play guitar." }
        ]
      },
      { pronoun: "tu", form: "joues", full: "tu joues", en: "you play", example: "Tu joues aux cartes.", exampleEn: "You are playing cards.", negative: "Tu ne joues pas aux cartes.", negativeEn: "You are not playing cards.", question: "À quoi joues-tu ?" },
      { pronoun: "il", form: "joue", full: "il joue", en: "he plays", example: "Il joue au foot.", exampleEn: "He plays soccer.", negative: "Il ne joue pas au foot.", negativeEn: "He does not play soccer." },
      { pronoun: "elle", form: "joue", full: "elle joue", en: "she plays", example: "Elle joue du piano.", exampleEn: "She plays piano.", negative: "Elle ne joue pas de piano.", negativeEn: "She does not play piano." },
      { pronoun: "nous", form: "jouons", full: "nous jouons", en: "we play", example: "Nous jouons ensemble.", exampleEn: "We play together.", negative: "Nous ne jouons pas ensemble.", negativeEn: "We do not play together." },
      { pronoun: "vous", form: "jouez", full: "vous jouez", en: "you play", example: "Vous jouez au basket.", exampleEn: "You play basketball.", negative: "Vous ne jouez pas au basket.", negativeEn: "You do not play basketball." },
      { pronoun: "ils", form: "jouent", full: "ils jouent", en: "they play", example: "Ils jouent de la trompette.", exampleEn: "They play trumpet.", negative: "Ils ne jouent pas de trompette.", negativeEn: "They do not play trumpet." },
      { pronoun: "elles", form: "jouent", full: "elles jouent", en: "they play", example: "Elles jouent aux échecs.", exampleEn: "They play chess.", negative: "Elles ne jouent pas aux échecs.", negativeEn: "They do not play chess." }
    ];

    const nagerRows = [
      { pronoun: "je", form: "nage", full: "je nage", en: "I swim", example: "Je nage le matin.", exampleEn: "I swim in the morning.", negative: "Je ne nage pas le matin.", negativeEn: "I do not swim in the morning." },
      { pronoun: "tu", form: "nages", full: "tu nages", en: "you swim", example: "Tu nages souvent.", exampleEn: "You swim often.", negative: "Tu ne nages pas souvent.", negativeEn: "You do not swim often.", question: "Quand nages-tu ?" },
      { pronoun: "il", form: "nage", full: "il nage", en: "he swims", example: "Il nage dans la piscine.", exampleEn: "He swims in the pool.", negative: "Il ne nage pas dans la piscine.", negativeEn: "He does not swim in the pool." },
      { pronoun: "elle", form: "nage", full: "elle nage", en: "she swims", example: "Elle nage très bien.", exampleEn: "She swims very well.", negative: "Elle ne nage pas très bien.", negativeEn: "She does not swim very well." },
      { pronoun: "nous", form: "nageons", full: "nous nageons", en: "we swim", example: "Nous nageons à la plage.", exampleEn: "We swim at the beach.", negative: "Nous ne nageons pas à la plage.", negativeEn: "We do not swim at the beach." },
      { pronoun: "vous", form: "nagez", full: "vous nagez", en: "you swim", example: "Vous nagez tous les jours.", exampleEn: "You swim every day.", negative: "Vous ne nagez pas tous les jours.", negativeEn: "You do not swim every day." },
      { pronoun: "ils", form: "nagent", full: "ils nagent", en: "they swim", example: "Ils nagent dans le lac.", exampleEn: "They swim in the lake.", negative: "Ils ne nagent pas dans le lac.", negativeEn: "They do not swim in the lake." },
      { pronoun: "elles", form: "nagent", full: "elles nagent", en: "they swim", example: "Elles nagent après le travail.", exampleEn: "They swim after work.", negative: "Elles ne nagent pas après le travail.", negativeEn: "They do not swim after work." }
    ];

    const seLaverRows = [
      { pronoun: "je", form: "me lave", full: "je me lave", en: "I wash myself", example: "Je me lave le matin.", exampleEn: "I wash myself in the morning.", negative: "Je ne me lave pas le matin.", negativeEn: "I do not wash myself in the morning." },
      { pronoun: "tu", form: "te laves", full: "tu te laves", en: "you wash yourself", example: "Tu te laves avant le dîner.", exampleEn: "You wash yourself before dinner.", negative: "Tu ne te laves pas avant le dîner.", negativeEn: "You do not wash yourself before dinner.", question: "Te laves-tu avant le dîner ?" },
      { pronoun: "il", form: "se lave", full: "il se lave", en: "he washes himself", example: "Il se lave les mains.", exampleEn: "He washes his hands.", negative: "Il ne se lave pas les mains.", negativeEn: "He does not wash his hands." },
      { pronoun: "elle", form: "se lave", full: "elle se lave", en: "she washes herself", example: "Elle se lave le visage.", exampleEn: "She washes her face.", negative: "Elle ne se lave pas le visage.", negativeEn: "She does not wash her face." },
      { pronoun: "nous", form: "nous lavons", full: "nous nous lavons", en: "we wash ourselves", example: "Nous nous lavons après le sport.", exampleEn: "We wash ourselves after sports.", negative: "Nous ne nous lavons pas après le sport.", negativeEn: "We do not wash ourselves after sports." },
      { pronoun: "vous", form: "vous lavez", full: "vous vous lavez", en: "you wash yourself / yourselves", example: "Vous vous lavez ici.", exampleEn: "You wash yourself here.", negative: "Vous ne vous lavez pas ici.", negativeEn: "You do not wash yourself here." },
      { pronoun: "ils", form: "se lavent", full: "ils se lavent", en: "they wash themselves", example: "Ils se lavent vite.", exampleEn: "They wash quickly.", negative: "Ils ne se lavent pas vite.", negativeEn: "They do not wash quickly." },
      { pronoun: "elles", form: "se lavent", full: "elles se lavent", en: "they wash themselves", example: "Elles se lavent avant de sortir.", exampleEn: "They wash before going out.", negative: "Elles ne se lavent pas avant de sortir.", negativeEn: "They do not wash before going out." }
    ];

    const seLeverRows = [
      { pronoun: "je", form: "me lève", full: "je me lève", en: "I get up", example: "Je me lève tôt.", exampleEn: "I get up early.", negative: "Je ne me lève pas tôt.", negativeEn: "I do not get up early." },
      { pronoun: "tu", form: "te lèves", full: "tu te lèves", en: "you get up", example: "Tu te lèves à sept heures.", exampleEn: "You get up at seven.", negative: "Tu ne te lèves pas à sept heures.", negativeEn: "You do not get up at seven.", question: "À quelle heure te lèves-tu ?" },
      { pronoun: "il", form: "se lève", full: "il se lève", en: "he gets up", example: "Il se lève l’après-midi.", exampleEn: "He gets up in the afternoon.", negative: "Il ne se lève pas l’après-midi.", negativeEn: "He does not get up in the afternoon." },
      { pronoun: "elle", form: "se lève", full: "elle se lève", en: "she gets up", example: "Elle se lève avant moi.", exampleEn: "She gets up before me.", negative: "Elle ne se lève pas avant moi.", negativeEn: "She does not get up before me." },
      { pronoun: "nous", form: "nous levons", full: "nous nous levons", en: "we get up", example: "Nous nous levons ensemble.", exampleEn: "We get up together.", negative: "Nous ne nous levons pas ensemble.", negativeEn: "We do not get up together." },
      { pronoun: "vous", form: "vous levez", full: "vous vous levez", en: "you get up", example: "Vous vous levez tard le dimanche.", exampleEn: "You get up late on Sundays.", negative: "Vous ne vous levez pas tard le dimanche.", negativeEn: "You do not get up late on Sundays." },
      { pronoun: "ils", form: "se lèvent", full: "ils se lèvent", en: "they get up", example: "Ils se lèvent à huit heures.", exampleEn: "They get up at eight o’clock.", negative: "Ils ne se lèvent pas à huit heures.", negativeEn: "They do not get up at eight o’clock." },
      { pronoun: "elles", form: "se lèvent", full: "elles se lèvent", en: "they get up", example: "Elles se lèvent tôt pour travailler.", exampleEn: "They get up early to work.", negative: "Elles ne se lèvent pas tôt pour travailler.", negativeEn: "They do not get up early to work." }
    ];

    const seReposerRows = [
      { pronoun: "je", form: "me repose", full: "je me repose", en: "I rest", example: "Je me repose après le travail.", exampleEn: "I rest after work.", negative: "Je ne me repose pas après le travail.", negativeEn: "I do not rest after work." },
      { pronoun: "tu", form: "te reposes", full: "tu te reposes", en: "you rest", example: "Tu te reposes ce week-end.", exampleEn: "You are resting this weekend.", negative: "Tu ne te reposes pas ce week-end.", negativeEn: "You are not resting this weekend.", question: "Te reposes-tu ce week-end ?" },
      { pronoun: "il", form: "se repose", full: "il se repose", en: "he rests", example: "Il se repose dans sa chambre.", exampleEn: "He rests in his room.", negative: "Il ne se repose pas dans sa chambre.", negativeEn: "He does not rest in his room." },
      { pronoun: "elle", form: "se repose", full: "elle se repose", en: "she rests", example: "Elle se repose un peu.", exampleEn: "She rests a little.", negative: "Elle ne se repose pas beaucoup.", negativeEn: "She does not rest much." },
      { pronoun: "nous", form: "nous reposons", full: "nous nous reposons", en: "we rest", example: "Nous nous reposons à midi.", exampleEn: "We rest at noon.", negative: "Nous ne nous reposons pas à midi.", negativeEn: "We do not rest at noon." },
      { pronoun: "vous", form: "vous reposez", full: "vous vous reposez", en: "you rest", example: "Vous vous reposez ici.", exampleEn: "You rest here.", negative: "Vous ne vous reposez pas ici.", negativeEn: "You do not rest here." },
      { pronoun: "ils", form: "se reposent", full: "ils se reposent", en: "they rest", example: "Ils se reposent après le cours.", exampleEn: "They rest after class.", negative: "Ils ne se reposent pas après le cours.", negativeEn: "They do not rest after class." },
      { pronoun: "elles", form: "se reposent", full: "elles se reposent", en: "they rest", example: "Elles se reposent le dimanche.", exampleEn: "They rest on Sundays.", negative: "Elles ne se reposent pas le dimanche.", negativeEn: "They do not rest on Sundays." }
    ];

    const sAppelerRows = [
      { pronoun: "je", form: "m’appelle", full: "je m’appelle", en: "my name is", example: "Je m’appelle Chen.", exampleEn: "My name is Chen.", negative: "Je ne m’appelle pas Chen.", negativeEn: "My name is not Chen." },
      { pronoun: "tu", form: "t’appelles", full: "tu t’appelles", en: "your name is", example: "Tu t’appelles Marie.", exampleEn: "Your name is Marie.", negative: "Tu ne t’appelles pas Marie.", negativeEn: "Your name is not Marie.", question: "Comment t’appelles-tu ?" },
      { pronoun: "il", form: "s’appelle", full: "il s’appelle", en: "his name is", example: "Il s’appelle Paul.", exampleEn: "His name is Paul.", negative: "Il ne s’appelle pas Paul.", negativeEn: "His name is not Paul." },
      { pronoun: "elle", form: "s’appelle", full: "elle s’appelle", en: "her name is", example: "Elle s’appelle Julie.", exampleEn: "Her name is Julie.", negative: "Elle ne s’appelle pas Julie.", negativeEn: "Her name is not Julie." },
      { pronoun: "nous", form: "nous appelons", full: "nous nous appelons", en: "we are called", example: "Nous nous appelons Paul et Marie.", exampleEn: "We are called Paul and Marie.", negative: "Nous ne nous appelons pas Paul et Marie.", negativeEn: "We are not called Paul and Marie." },
      { pronoun: "vous", form: "vous appelez", full: "vous vous appelez", en: "your name is / you call yourselves", example: "Vous vous appelez Martin.", exampleEn: "Your name is Martin.", negative: "Vous ne vous appelez pas Martin.", negativeEn: "Your name is not Martin.", question: "Comment vous appelez-vous ?" },
      { pronoun: "ils", form: "s’appellent", full: "ils s’appellent", en: "their names are", example: "Ils s’appellent Marc et Luc.", exampleEn: "Their names are Marc and Luc.", negative: "Ils ne s’appellent pas Marc et Luc.", negativeEn: "Their names are not Marc and Luc." },
      { pronoun: "elles", form: "s’appellent", full: "elles s’appellent", en: "their names are", example: "Elles s’appellent Anna et Léa.", exampleEn: "Their names are Anna and Lea.", negative: "Elles ne s’appellent pas Anna et Léa.", negativeEn: "Their names are not Anna and Lea." }
    ];

    const sHabillerRows = [
      { pronoun: "je", form: "m’habille", full: "je m’habille", en: "I get dressed", example: "Je m’habille vite.", exampleEn: "I get dressed quickly.", negative: "Je ne m’habille pas vite.", negativeEn: "I do not get dressed quickly." },
      { pronoun: "tu", form: "t’habilles", full: "tu t’habilles", en: "you get dressed", example: "Tu t’habilles pour sortir.", exampleEn: "You are getting dressed to go out.", negative: "Tu ne t’habilles pas pour sortir.", negativeEn: "You are not getting dressed to go out.", question: "T’habilles-tu pour sortir ?" },
      { pronoun: "il", form: "s’habille", full: "il s’habille", en: "he gets dressed", example: "Il s’habille en noir.", exampleEn: "He dresses in black.", negative: "Il ne s’habille pas en noir.", negativeEn: "He does not dress in black." },
      { pronoun: "elle", form: "s’habille", full: "elle s’habille", en: "she gets dressed", example: "Elle s’habille pour le travail.", exampleEn: "She gets dressed for work.", negative: "Elle ne s’habille pas pour le travail.", negativeEn: "She does not get dressed for work." },
      { pronoun: "nous", form: "nous habillons", full: "nous nous habillons", en: "we get dressed", example: "Nous nous habillons avant le petit-déjeuner.", exampleEn: "We get dressed before breakfast.", negative: "Nous ne nous habillons pas avant le petit-déjeuner.", negativeEn: "We do not get dressed before breakfast." },
      { pronoun: "vous", form: "vous habillez", full: "vous vous habillez", en: "you get dressed", example: "Vous vous habillez maintenant.", exampleEn: "You get dressed now.", negative: "Vous ne vous habillez pas maintenant.", negativeEn: "You do not get dressed now." },
      { pronoun: "ils", form: "s’habillent", full: "ils s’habillent", en: "they get dressed", example: "Ils s’habillent seuls.", exampleEn: "They get dressed by themselves.", negative: "Ils ne s’habillent pas seuls.", negativeEn: "They do not get dressed by themselves." },
      { pronoun: "elles", form: "s’habillent", full: "elles s’habillent", en: "they get dressed", example: "Elles s’habillent pour la fête.", exampleEn: "They get dressed for the party.", negative: "Elles ne s’habillent pas pour la fête.", negativeEn: "They do not get dressed for the party." }
    ];

    const tournerRows = [
      { pronoun: "je", form: "tourne", full: "je tourne", en: "I turn", example: "Je tourne à gauche au prochain carrefour.", exampleEn: "I turn left at the next intersection.", negative: "Je ne tourne pas à gauche au prochain carrefour.", negativeEn: "I do not turn left at the next intersection." },
      { pronoun: "tu", form: "tournes", full: "tu tournes", en: "you turn", example: "Tu tournes la clé dans la serrure.", exampleEn: "You turn the key in the lock.", negative: "Tu ne tournes pas la clé dans la serrure.", negativeEn: "You do not turn the key in the lock.", question: "Que tournes-tu ?" },
      { pronoun: "il", form: "tourne", full: "il tourne", en: "he turns", example: "Il tourne à droite après la banque.", exampleEn: "He turns right after the bank.", negative: "Il ne tourne pas à droite après la banque.", negativeEn: "He does not turn right after the bank." },
      { pronoun: "elle", form: "tourne", full: "elle tourne", en: "she turns", example: "Elle tourne la page.", exampleEn: "She turns the page.", negative: "Elle ne tourne pas la page.", negativeEn: "She does not turn the page." },
      { pronoun: "nous", form: "tournons", full: "nous tournons", en: "we turn", example: "Nous tournons dans cette rue.", exampleEn: "We turn onto this street.", negative: "Nous ne tournons pas dans cette rue.", negativeEn: "We do not turn onto this street." },
      { pronoun: "vous", form: "tournez", full: "vous tournez", en: "you turn", example: "Vous tournez le bouton vers la droite.", exampleEn: "You turn the knob to the right.", negative: "Vous ne tournez pas le bouton vers la droite.", negativeEn: "You do not turn the knob to the right." },
      { pronoun: "ils", form: "tournent", full: "ils tournent", en: "they turn", example: "Ils tournent autour du parc.", exampleEn: "They go around the park.", negative: "Ils ne tournent pas autour du parc.", negativeEn: "They do not go around the park." },
      { pronoun: "elles", form: "tournent", full: "elles tournent", en: "they turn / film", example: "Elles tournent un film à Paris.", exampleEn: "They are filming a movie in Paris.", negative: "Elles ne tournent pas de film à Paris.", negativeEn: "They are not filming a movie in Paris." }
    ];

    const couterRows = [
      { pronoun: "je", form: "coûte", full: "je coûte", en: "I cost", example: "Je coûte moins cher.", exampleEn: "I cost less.", negative: "Je ne coûte pas moins cher.", negativeEn: "I do not cost less." },
      { pronoun: "tu", form: "coûtes", full: "tu coûtes", en: "you cost", example: "Tu coûtes cher.", exampleEn: "You cost a lot.", negative: "Tu ne coûtes pas cher.", negativeEn: "You do not cost a lot." },
      { pronoun: "il", form: "coûte", full: "il coûte", en: "it costs", example: "Il coûte cinq euros.", exampleEn: "It costs five euros.", negative: "Il ne coûte pas cinq euros.", negativeEn: "It does not cost five euros.", question: "Combien coûte-t-il ?" },
      { pronoun: "elle", form: "coûte", full: "elle coûte", en: "it costs", example: "Elle coûte trop cher.", exampleEn: "It costs too much.", negative: "Elle ne coûte pas trop cher.", negativeEn: "It does not cost too much." },
      { pronoun: "nous", form: "coûtons", full: "nous coûtons", en: "we cost", example: "Nous coûtons moins cher.", exampleEn: "We cost less.", negative: "Nous ne coûtons pas moins cher.", negativeEn: "We do not cost less." },
      { pronoun: "vous", form: "coûtez", full: "vous coûtez", en: "you cost", example: "Vous coûtez vingt euros.", exampleEn: "You cost twenty euros.", negative: "Vous ne coûtez pas vingt euros.", negativeEn: "You do not cost twenty euros." },
      { pronoun: "ils", form: "coûtent", full: "ils coûtent", en: "they cost", example: "Ils coûtent trois euros.", exampleEn: "They cost three euros.", negative: "Ils ne coûtent pas trois euros.", negativeEn: "They do not cost three euros." },
      { pronoun: "elles", form: "coûtent", full: "elles coûtent", en: "they cost", example: "Elles coûtent cher.", exampleEn: "They cost a lot.", negative: "Elles ne coûtent pas cher.", negativeEn: "They do not cost a lot." }
    ];

    const falloirRows = [
      { pronoun: "il", form: "faut", full: "il faut", en: "it is necessary / one must", example: "Il faut réserver une table.", exampleEn: "It is necessary to reserve a table.", negative: "Il ne faut pas réserver de table.", negativeEn: "One must not reserve a table.", question: "Faut-il réserver une table ?" }
    ];

    const ilYARows = [
      { pronoun: "il", form: "y a", full: "il y a", en: "there is / there are", example: "Il y a une pharmacie près de la gare.", exampleEn: "There is a pharmacy near the train station.", negative: "Il n’y a pas de pharmacie près de la gare.", negativeEn: "There is no pharmacy near the train station.", question: "Y a-t-il une pharmacie près de la gare ?" }
    ];

    const impersonalFaireRows = [
      { pronoun: "il", form: "fait", full: "il fait", en: "it is / weather expression", example: "Il fait chaud aujourd’hui.", exampleEn: "It is hot today.", negative: "Il ne fait pas chaud aujourd’hui.", negativeEn: "It is not hot today.", question: "Fait-il chaud aujourd’hui ?" }
    ];

    const impersonalEtreRows = [
      { pronoun: "il", form: "est", full: "il est", en: "it is / time expression", example: "Il est huit heures.", exampleEn: "It is eight o’clock.", negative: "Il n’est pas huit heures.", negativeEn: "It is not eight o’clock.", question: "Est-il huit heures ?" }
    ];

    const grammarVerbConfigs = [
      { tab: "grammar", tableId: "etreTable", playButtonId: "playEtre", rows: etreRows },
      { tab: "grammar", tableId: "avoirTable", playButtonId: "playAvoir", rows: avoirRows }
    ];

    const verbStudyGroups = [
      {
        key: "irregular",
        title: "Irregular Verbs",
        indexTitle: "Irregular",
        descriptionHtml: "These high-frequency verbs do not follow the regular -er ending pattern, so it helps to learn each full present-tense set."
      },
      {
        key: "similar",
        title: "Similar Irregular Verbs",
        indexTitle: "Same pattern",
        descriptionHtml: "<strong>Dormir, partir, sortir, servir,</strong> and <strong>sentir</strong> share a useful pattern: singular forms drop part of the stem, while plural forms bring it back."
      },
      {
        key: "regular",
        title: "Regular Verbs",
        indexTitle: "Regular",
        descriptionHtml: "These verbs follow common present-tense patterns. Regular <strong>-er</strong> verbs use <strong>-e, -es, -e, -ons, -ez, -ent</strong>; regular <strong>-ir</strong> verbs like <strong>finir</strong> use <strong>-is, -is, -it, -issons, -issez, -issent</strong>."
      },
      {
        key: "impersonal",
        title: "Verbes impersonnels",
        indexTitle: "Impersonal",
        descriptionHtml: "Impersonal verbs keep the fixed subject <strong>il</strong>. Here, <strong>il</strong> does not point to a person: <strong>il faut</strong>, <strong>il y a</strong>, <strong>il fait</strong>, and <strong>il est</strong> are set patterns to learn as chunks."
      },
      {
        key: "pronominal",
        title: "Le Verbe Pronominal",
        indexTitle: "Pronominal",
        descriptionHtml: "Pronominal verbs use a reflexive pronoun: <strong>me, te, se, nous, vous, se</strong>. In negation, the reflexive pronoun stays with the verb: <strong>Je ne me lave pas.</strong> Questions can use inversion or <strong>est-ce que</strong>: <strong>À quelle heure te lèves-tu ?</strong>"
      }
    ];

    const verbStudyItems = [
      {
        key: "etreVerb",
        group: "irregular",
        label: "être",
        title: "Être — to be",
        tag: "core irregular / helper",
        tableId: "verbEtreTable",
        panelId: "verbEtrePanel",
        descriptionHtml: "<strong>Être</strong> is a core irregular verb and also a helper verb for many passé composé forms such as <strong>elle est allée</strong>.",
        rows: etreRows
      },
      {
        key: "avoirVerb",
        group: "irregular",
        label: "avoir",
        title: "Avoir — to have",
        tag: "core irregular / helper",
        tableId: "verbAvoirTable",
        panelId: "verbAvoirPanel",
        descriptionHtml: "<strong>Avoir</strong> is a core irregular verb and the most common helper verb in passé composé: <strong>j’ai parlé</strong>, <strong>tu as fini</strong>.",
        rows: avoirRows
      },
      {
        key: "aller",
        group: "irregular",
        label: "aller",
        title: "Aller — to go",
        tag: "irregular",
        descriptionHtml: "<strong>Aller</strong> changes a lot in the present tense, so it is best memorized as a core pattern.",
        rows: allerRows
      },
      {
        key: "venir",
        group: "irregular",
        label: "venir",
        title: "Venir — to come",
        tag: "irregular",
        descriptionHtml: "<strong>Venir</strong> is another common irregular verb. Notice the stem changes: <strong>viens / vient</strong>, <strong>venons</strong>, <strong>venez</strong>, <strong>viennent</strong>.",
        rows: venirRows
      },
      {
        key: "tenir",
        group: "irregular",
        label: "tenir",
        title: "Tenir — to hold / keep",
        tag: "irregular",
        descriptionHtml: "<strong>Tenir</strong> follows a pattern similar to <strong>venir</strong>: <strong>tiens / tient</strong>, <strong>tenons</strong>, <strong>tenez</strong>, <strong>tiennent</strong>. Its past participle is irregular: <strong>tenu</strong>.",
        rows: tenirRows
      },
      {
        key: "prendre",
        group: "irregular",
        label: "prendre",
        title: "Prendre — to take / to have",
        tag: "irregular",
        descriptionHtml: "<strong>Prendre</strong> is highly versatile. It is used for transport, food and drinks, time, photos, medicine, decisions, appointments, and expressions such as <strong>prendre soin de</strong>. Pronunciation changes noticeably: <strong>prends / prend</strong> use <strong>/pʁɑ̃/</strong>, while <strong>prenons</strong> uses <strong>/pʁə.nɔ̃/</strong>, <strong>prenez</strong> uses <strong>/pʁə.ne/</strong>, and <strong>prennent</strong> uses <strong>/pʁɛn/</strong>.",
        rows: prendreRows
      },
      {
        key: "faire",
        group: "irregular",
        label: "faire",
        title: "Faire — to do / to make",
        tag: "irregular",
        descriptionHtml: "<strong>Faire</strong> is very common and irregular. Compare <strong>fais / fait</strong> <strong>/fɛ/</strong>, <strong>faisons</strong> <strong>/fə.zɔ̃/</strong>, <strong>faites</strong> <strong>/fɛt/</strong>, and <strong>font</strong> <strong>/fɔ̃/</strong>.",
        rows: faireRows,
        extras: ["faireExpressions"]
      },
      {
        key: "voir",
        group: "irregular",
        label: "voir",
        title: "Voir — to see",
        tag: "irregular",
        descriptionHtml: "<strong>Voir</strong> changes to <strong>voyons</strong> and <strong>voyez</strong> in the nous/vous forms, while <strong>vois / voit / voient</strong> are all pronounced like <strong>vwa</strong>.",
        rows: voirRows
      },
      {
        key: "boire",
        group: "irregular",
        label: "boire",
        title: "Boire — to drink",
        tag: "irregular",
        descriptionHtml: "<strong>Boire</strong> changes stem across the present tense: <strong>bois / boit</strong>, <strong>buvons / buvez</strong>, and <strong>boivent</strong>. Notice the sound change from <strong>/bwa/</strong> to <strong>/by/</strong> and <strong>/bwav/</strong>.",
        rows: boireRows
      },
      {
        key: "ecrire",
        group: "irregular",
        label: "écrire",
        title: "Écrire — to write",
        tag: "irregular",
        descriptionHtml: "<strong>Écrire</strong> changes from <strong>écris / écrit</strong> to <strong>écrivons</strong>, <strong>écrivez</strong>, and <strong>écrivent</strong>.",
        rows: ecrireRows
      },
      {
        key: "lire",
        group: "irregular",
        label: "lire",
        title: "Lire — to read",
        tag: "irregular",
        descriptionHtml: "<strong>Lire</strong> has short singular forms <strong>lis / lit</strong>, then <strong>lisons</strong>, <strong>lisez</strong>, and <strong>lisent</strong>.",
        rows: lireRows
      },
      {
        key: "dormir",
        group: "similar",
        label: "dormir",
        title: "Dormir — to sleep",
        tag: "irregular pattern",
        descriptionHtml: "<strong>Dormir</strong>: <strong>dors / dort</strong>, then <strong>dormons</strong>, <strong>dormez</strong>, <strong>dorment</strong>.",
        rows: dormirRows
      },
      {
        key: "partir",
        group: "similar",
        label: "partir",
        title: "Partir — to leave",
        tag: "irregular pattern",
        descriptionHtml: "<strong>Partir</strong> has silent final consonants in the singular: <strong>pars / part</strong> sound like <strong>/paʁ/</strong>, but <strong>partent</strong> pronounces the <strong>t</strong>.",
        rows: partirRows
      },
      {
        key: "sortir",
        group: "similar",
        label: "sortir",
        title: "Sortir — to go out / leave",
        tag: "irregular pattern",
        descriptionHtml: "<strong>Sortir</strong> follows the same family pattern: <strong>sors / sort</strong>, then <strong>sortons</strong>, <strong>sortez</strong>, <strong>sortent</strong>.",
        rows: sortirRows
      },
      {
        key: "servir",
        group: "similar",
        label: "servir",
        title: "Servir — to serve",
        tag: "irregular pattern",
        descriptionHtml: "<strong>Servir</strong> changes from <strong>sers / sert</strong> to <strong>servons</strong>, <strong>servez</strong>, and <strong>servent</strong>.",
        rows: servirRows
      },
      {
        key: "sentir",
        group: "similar",
        label: "sentir",
        title: "Sentir — to smell / feel",
        tag: "irregular pattern",
        descriptionHtml: "<strong>Sentir</strong> changes from <strong>sens / sent</strong> to <strong>sentons</strong>, <strong>sentez</strong>, and <strong>sentent</strong>.",
        rows: sentirRows
      },
      {
        key: "parler",
        group: "regular",
        label: "parler",
        title: "Parler — to speak / talk",
        tag: "regular -er",
        descriptionHtml: "<strong>Parler</strong> follows the regular -er present-tense pattern and is useful for languages and conversations.",
        rows: parlerRows
      },
      {
        key: "chercher",
        group: "regular",
        label: "chercher",
        title: "Chercher — to look for",
        tag: "regular -er",
        descriptionHtml: "<strong>Chercher</strong> follows the regular -er pattern. It means “to look for”; French does not need an extra word for “for.”",
        rows: chercherRows
      },
      {
        key: "manger",
        group: "regular",
        label: "manger",
        title: "Manger — to eat",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Manger</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous mangeons</strong>.",
        rows: mangerRows
      },
      {
        key: "inviter",
        group: "regular",
        label: "inviter",
        title: "Inviter — to invite",
        tag: "regular -er",
        descriptionHtml: "<strong>Inviter</strong> follows the regular -er pattern. The <strong>je</strong> form becomes <strong>j’invite</strong>.",
        rows: inviterRows
      },
      {
        key: "finir",
        group: "regular",
        label: "finir",
        title: "Finir — to finish",
        tag: "regular -ir",
        descriptionHtml: "<strong>Finir</strong> follows the regular -ir pattern: <strong>finis, finis, finit, finissons, finissez, finissent</strong>.",
        rows: finirRows
      },
      {
        key: "choisir",
        group: "regular",
        label: "choisir",
        title: "Choisir — to choose",
        tag: "regular -ir",
        descriptionHtml: "<strong>Choisir</strong> follows the regular -ir pattern and is useful for menus, plans, and options.",
        rows: choisirRows
      },
      {
        key: "reussir",
        group: "regular",
        label: "réussir",
        title: "Réussir — to succeed / pass",
        tag: "regular -ir",
        descriptionHtml: "<strong>Réussir</strong> follows the regular -ir pattern. It can mean “to succeed” or “to pass” an exam.",
        rows: reussirRows
      },
      {
        key: "unir",
        group: "regular",
        label: "unir",
        title: "Unir — to unite / join",
        tag: "regular -ir",
        descriptionHtml: "<strong>Unir</strong> follows the regular -ir pattern and is useful for phrases like <strong>unir nos forces</strong>.",
        rows: unirRows
      },
      {
        key: "habiter",
        group: "regular",
        label: "habiter",
        title: "Habiter — to live",
        tag: "regular -er",
        descriptionHtml: "<strong>Habiter</strong> follows the regular -er pattern. The <strong>je</strong> form becomes <strong>j’habite</strong>.",
        rows: habiterRows
      },
      {
        key: "trouver",
        group: "regular",
        label: "trouver",
        title: "Trouver — to find / to think",
        tag: "regular -er",
        descriptionHtml: "<strong>Trouver</strong> follows the regular -er pattern and is useful for both “find” and “think/find something to be.” The reflexive form <strong>se trouver</strong> commonly means “to be located.”",
        rows: trouverRows
      },
      {
        key: "regarder",
        group: "regular",
        label: "regarder",
        title: "Regarder — to watch / to look at",
        tag: "regular -er",
        descriptionHtml: "<strong>Regarder</strong> follows the regular -er pattern and is used for watching something or looking at something directly.",
        rows: regarderRows
      },
      {
        key: "passer",
        group: "regular",
        label: "passer",
        title: "Passer — to pass / stop by / spend",
        tag: "regular -er",
        descriptionHtml: "<strong>Passer</strong> is flexible: use it for passing through a place, stopping by, taking an exam, or spending time.",
        rows: passerRows
      },
      {
        key: "commencer",
        group: "regular",
        label: "commencer",
        title: "Commencer — to begin / to start",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Commencer</strong> keeps the soft <strong>c</strong> sound in the nous form by changing <strong>c</strong> to <strong>ç</strong>: <strong>nous commençons</strong>.",
        rows: commencerRows
      },
      {
        key: "voyager",
        group: "regular",
        label: "voyager",
        title: "Voyager — to travel",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Voyager</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous voyageons</strong>.",
        rows: voyagerRows
      },
      {
        key: "travailler",
        group: "regular",
        label: "travailler",
        title: "Travailler — to work",
        tag: "regular -er",
        descriptionHtml: "<strong>Travailler</strong> follows the regular -er pattern and is useful for work, study, and schedule sentences.",
        rows: travaillerRows
      },
      {
        key: "dejeuner",
        group: "regular",
        label: "déjeuner",
        title: "Déjeuner — to have lunch",
        tag: "regular -er",
        descriptionHtml: "<strong>Déjeuner</strong> follows the regular -er pattern. In France, it usually means “to have lunch.”",
        rows: dejeunerRows
      },
      {
        key: "acheter",
        group: "regular",
        label: "acheter",
        title: "Acheter — to buy",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Acheter</strong> follows the regular -er endings, but the stem changes for pronunciation: <strong>j’achète</strong>, <strong>tu achètes</strong>, <strong>il/elle achète</strong>, <strong>ils/elles achètent</strong>, while <strong>nous achetons</strong> and <strong>vous achetez</strong> keep <strong>e</strong>.",
        rows: acheterRows
      },
      {
        key: "rentrer",
        group: "regular",
        label: "rentrer",
        title: "Rentrer — to return / go home",
        tag: "regular -er",
        descriptionHtml: "<strong>Rentrer</strong> follows the regular -er pattern. Use it for returning home, coming back from a place, or going back inside.",
        rows: rentrerRows
      },
      {
        key: "demander",
        group: "regular",
        label: "demander",
        title: "Demander — to ask",
        tag: "regular -er",
        descriptionHtml: "<strong>Demander</strong> can mean “ask for” something, and <strong>demander à quelqu’un de faire quelque chose</strong> means “ask someone to do something.”",
        rows: demanderRows
      },
      {
        key: "jouer",
        group: "regular",
        label: "jouer",
        title: "Jouer — to play",
        tag: "regular -er",
        descriptionHtml: "Use <strong>jouer à / au / aux</strong> for sports and games, and <strong>jouer de / du / de la</strong> for instruments.",
        rows: jouerRows
      },
      {
        key: "nager",
        group: "regular",
        label: "nager",
        title: "Nager — to swim",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Nager</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous nageons</strong>.",
        rows: nagerRows
      },
      {
        key: "tourner",
        group: "regular",
        label: "tourner",
        title: "Tourner — to turn",
        tag: "regular -er",
        descriptionHtml: "<strong>Tourner</strong> follows the regular -er pattern. Use it for turning left or right, rotating an object, going around something, and filming a movie.",
        rows: tournerRows
      },
      {
        key: "couter",
        group: "regular",
        label: "coûter",
        title: "Coûter — to cost",
        tag: "regular -er",
        descriptionHtml: "<strong>Coûter</strong> follows the regular -er pattern. The accent stays in the written forms.",
        rows: couterRows
      },
      {
        key: "falloir",
        group: "impersonal",
        label: "il faut",
        title: "Il faut — falloir",
        tag: "impersonal",
        descriptionHtml: "<strong>Falloir</strong> is only used impersonally in the present tense: <strong>il faut</strong>. It means “it is necessary / one must.” In the negative, <strong>il ne faut pas</strong> often means “must not / should not.”",
        rows: falloirRows
      },
      {
        key: "ilYA",
        group: "impersonal",
        label: "il y a",
        title: "Il y a — there is / there are",
        tag: "impersonal",
        descriptionHtml: "<strong>Il y a</strong> is a fixed expression meaning “there is / there are.” In inversion questions, it becomes <strong>Y a-t-il ... ?</strong>",
        rows: ilYARows
      },
      {
        key: "impersonalFaire",
        group: "impersonal",
        label: "il fait",
        title: "Il fait — faire",
        tag: "weather",
        descriptionHtml: "Use <strong>il fait</strong> for many weather and temperature expressions: <strong>Il fait chaud.</strong>, <strong>Il fait froid.</strong>, <strong>Il fait beau.</strong>",
        rows: impersonalFaireRows
      },
      {
        key: "impersonalEtre",
        group: "impersonal",
        label: "il est",
        title: "Il est — être",
        tag: "impersonal",
        descriptionHtml: "Use <strong>il est</strong> for time and some fixed impersonal descriptions. For time, the question form can use inversion: <strong>Est-il huit heures ?</strong>",
        rows: impersonalEtreRows
      },
      {
        key: "seLaver",
        group: "pronominal",
        label: "se laver",
        title: "Se laver — to wash oneself",
        descriptionHtml: "<strong>Se laver</strong> is useful for daily routines. With body parts, French often says <strong>se laver les mains</strong>. The base verb <strong>laver</strong> means “to wash” something or someone: <strong>Je lave la voiture.</strong>",
        rows: seLaverRows
      },
      {
        key: "seLever",
        group: "pronominal",
        label: "se lever",
        title: "Se lever — to get up",
        descriptionHtml: "<strong>Se lever</strong> changes spelling in the singular and third-person plural: <strong>lève</strong>, but <strong>levons</strong> and <strong>levez</strong>. The base verb <strong>lever</strong> means “to lift / raise”: <strong>Je lève la main.</strong>",
        rows: seLeverRows
      },
      {
        key: "seReposer",
        group: "pronominal",
        label: "se reposer",
        title: "Se reposer — to rest",
        descriptionHtml: "<strong>Se reposer</strong> follows the regular -er pattern after the reflexive pronoun. The base verb <strong>reposer</strong> can mean “to put back / set down” something: <strong>Je repose le livre sur la table.</strong>",
        rows: seReposerRows
      },
      {
        key: "sAppeler",
        group: "pronominal",
        label: "s’appeler",
        title: "S’appeler — to be called / be named",
        descriptionHtml: "<strong>S’appeler</strong> is the correct spelling. Notice <strong>je m’appelle</strong>, <strong>nous nous appelons</strong>, and <strong>ils s’appellent</strong>. The base verb <strong>appeler</strong> means “to call” someone: <strong>J’appelle ma mère.</strong>",
        rows: sAppelerRows
      },
      {
        key: "sHabiller",
        group: "pronominal",
        label: "s’habiller",
        title: "S’habiller — to get dressed",
        descriptionHtml: "<strong>S’habiller</strong> elides before the mute h: <strong>je m’habille</strong>, <strong>tu t’habilles</strong>, <strong>il s’habille</strong>. The base verb <strong>habiller</strong> means “to dress” someone: <strong>J’habille mon enfant.</strong>",
        rows: sHabillerRows
      }
    ];

    const verbConfigs = [
      ...grammarVerbConfigs,
      ...verbStudyItems.map(item => ({
        tab: "verbs",
        group: item.group,
        label: item.label,
        tableId: item.tableId || `${item.key}Table`,
        rows: item.rows
      }))
    ];

    const verbPhraseIpa = {
      "je suis": "/ʒə sɥi/",
      "tu es": "/ty ɛ/",
      "il est": "/il ɛ/",
      "il faut": "/il fo/",
      "il y a": "/il i.ja/",
      "il fait": "/il fɛ/",
      "elle est": "/ɛl ɛ/",
      "nous sommes": "/nu sɔm/",
      "on est": "/ɔ̃.nɛ/",
      "vous êtes": "/vu.zɛt/",
      "ils sont": "/il sɔ̃/",
      "elles sont": "/ɛl sɔ̃/",

      "j’ai": "/ʒe/",
      "tu as": "/ty a/",
      "il a": "/i.la/",
      "elle a": "/ɛ.la/",
      "nous avons": "/nu.za.vɔ̃/",
      "on a": "/ɔ̃.na/",
      "vous avez": "/vu.za.ve/",
      "ils ont": "/il.zɔ̃/",
      "elles ont": "/ɛl.zɔ̃/",

      "je parle": "/ʒə paʁl/",
      "tu parles": "/ty paʁl/",
      "il parle": "/il paʁl/",
      "elle parle": "/ɛl paʁl/",
      "nous parlons": "/nu paʁ.lɔ̃/",
      "vous parlez": "/vu paʁ.le/",
      "ils parlent": "/il paʁl/",
      "elles parlent": "/ɛl paʁl/",

      "je cherche": "/ʒə ʃɛʁʃ/",
      "tu cherches": "/ty ʃɛʁʃ/",
      "il cherche": "/il ʃɛʁʃ/",
      "elle cherche": "/ɛl ʃɛʁʃ/",
      "nous cherchons": "/nu ʃɛʁ.ʃɔ̃/",
      "vous cherchez": "/vu ʃɛʁ.ʃe/",
      "ils cherchent": "/il ʃɛʁʃ/",
      "elles cherchent": "/ɛl ʃɛʁʃ/",

      "je mange": "/ʒə mɑ̃ʒ/",
      "tu manges": "/ty mɑ̃ʒ/",
      "il mange": "/il mɑ̃ʒ/",
      "elle mange": "/ɛl mɑ̃ʒ/",
      "nous mangeons": "/nu mɑ̃.ʒɔ̃/",
      "vous mangez": "/vu mɑ̃.ʒe/",
      "ils mangent": "/il mɑ̃ʒ/",
      "elles mangent": "/ɛl mɑ̃ʒ/",

      "j’invite": "/ʒɛ̃.vit/",
      "tu invites": "/ty ɛ̃.vit/",
      "il invite": "/il ɛ̃.vit/",
      "elle invite": "/ɛl ɛ̃.vit/",
      "nous invitons": "/nu.zɛ̃.vi.tɔ̃/",
      "vous invitez": "/vu.zɛ̃.vi.te/",
      "ils invitent": "/il.zɛ̃.vit/",
      "elles invitent": "/ɛl.zɛ̃.vit/",

      "je finis": "/ʒə fi.ni/",
      "tu finis": "/ty fi.ni/",
      "il finit": "/il fi.ni/",
      "elle finit": "/ɛl fi.ni/",
      "nous finissons": "/nu fi.ni.sɔ̃/",
      "vous finissez": "/vu fi.ni.se/",
      "ils finissent": "/il fi.nis/",
      "elles finissent": "/ɛl fi.nis/",

      "je choisis": "/ʒə ʃwa.zi/",
      "tu choisis": "/ty ʃwa.zi/",
      "il choisit": "/il ʃwa.zi/",
      "elle choisit": "/ɛl ʃwa.zi/",
      "nous choisissons": "/nu ʃwa.zi.sɔ̃/",
      "vous choisissez": "/vu ʃwa.zi.se/",
      "ils choisissent": "/il ʃwa.zis/",
      "elles choisissent": "/ɛl ʃwa.zis/",

      "je réussis": "/ʒə ʁe.y.si/",
      "tu réussis": "/ty ʁe.y.si/",
      "il réussit": "/il ʁe.y.si/",
      "elle réussit": "/ɛl ʁe.y.si/",
      "nous réussissons": "/nu ʁe.y.si.sɔ̃/",
      "vous réussissez": "/vu ʁe.y.si.se/",
      "ils réussissent": "/il ʁe.y.sis/",
      "elles réussissent": "/ɛl ʁe.y.sis/",

      "j’unis": "/ʒy.ni/",
      "tu unis": "/ty y.ni/",
      "il unit": "/il y.ni/",
      "elle unit": "/ɛl y.ni/",
      "nous unissons": "/nu.zy.ni.sɔ̃/",
      "vous unissez": "/vu.zy.ni.se/",
      "ils unissent": "/il.zy.nis/",
      "elles unissent": "/ɛl.zy.nis/",

      "je vais": "/ʒə vɛ/",
      "tu vas": "/ty va/",
      "il va": "/il va/",
      "elle va": "/ɛl va/",
      "nous allons": "/nu.za.lɔ̃/",
      "vous allez": "/vu.za.le/",
      "ils vont": "/il vɔ̃/",
      "elles vont": "/ɛl vɔ̃/",

      "je viens": "/ʒə vjɛ̃/",
      "tu viens": "/ty vjɛ̃/",
      "il vient": "/il vjɛ̃/",
      "elle vient": "/ɛl vjɛ̃/",
      "nous venons": "/nu və.nɔ̃/",
      "vous venez": "/vu və.ne/",
      "ils viennent": "/il vjɛn/",
      "elles viennent": "/ɛl vjɛn/",

      "je tiens": "/ʒə tjɛ̃/",
      "tu tiens": "/ty tjɛ̃/",
      "il tient": "/il tjɛ̃/",
      "elle tient": "/ɛl tjɛ̃/",
      "nous tenons": "/nu tə.nɔ̃/",
      "vous tenez": "/vu tə.ne/",
      "ils tiennent": "/il tjɛn/",
      "elles tiennent": "/ɛl tjɛn/",

      "je prends": "/ʒə pʁɑ̃/",
      "tu prends": "/ty pʁɑ̃/",
      "il prend": "/il pʁɑ̃/",
      "elle prend": "/ɛl pʁɑ̃/",
      "nous prenons": "/nu pʁə.nɔ̃/",
      "vous prenez": "/vu pʁə.ne/",
      "ils prennent": "/il pʁɛn/",
      "elles prennent": "/ɛl pʁɛn/",

      "je fais": "/ʒə fɛ/",
      "tu fais": "/ty fɛ/",
      "il fait": "/il fɛ/",
      "elle fait": "/ɛl fɛ/",
      "nous faisons": "/nu fə.zɔ̃/",
      "vous faites": "/vu fɛt/",
      "ils font": "/il fɔ̃/",
      "elles font": "/ɛl fɔ̃/",

      "je vois": "/ʒə vwa/",
      "tu vois": "/ty vwa/",
      "il voit": "/il vwa/",
      "elle voit": "/ɛl vwa/",
      "nous voyons": "/nu vwa.jɔ̃/",
      "vous voyez": "/vu vwa.je/",
      "ils voient": "/il vwa/",
      "elles voient": "/ɛl vwa/",

      "je bois": "/ʒə bwa/",
      "tu bois": "/ty bwa/",
      "il boit": "/il bwa/",
      "elle boit": "/ɛl bwa/",
      "nous buvons": "/nu by.vɔ̃/",
      "vous buvez": "/vu by.ve/",
      "ils boivent": "/il bwav/",
      "elles boivent": "/ɛl bwav/",

      "j’écris": "/ʒe.kʁi/",
      "tu écris": "/ty e.kʁi/",
      "il écrit": "/il e.kʁi/",
      "elle écrit": "/ɛl e.kʁi/",
      "nous écrivons": "/nu.ze.kʁi.vɔ̃/",
      "vous écrivez": "/vu.ze.kʁi.ve/",
      "ils écrivent": "/il.ze.kʁiv/",
      "elles écrivent": "/ɛl.ze.kʁiv/",

      "je lis": "/ʒə li/",
      "tu lis": "/ty li/",
      "il lit": "/il li/",
      "elle lit": "/ɛl li/",
      "nous lisons": "/nu li.zɔ̃/",
      "vous lisez": "/vu li.ze/",
      "ils lisent": "/il liz/",
      "elles lisent": "/ɛl liz/",

      "je pars": "/ʒə paʁ/",
      "tu pars": "/ty paʁ/",
      "il part": "/il paʁ/",
      "elle part": "/ɛl paʁ/",
      "nous partons": "/nu paʁ.tɔ̃/",
      "vous partez": "/vu paʁ.te/",
      "ils partent": "/il paʁt/",
      "elles partent": "/ɛl paʁt/",

      "je dors": "/ʒə dɔʁ/",
      "tu dors": "/ty dɔʁ/",
      "il dort": "/il dɔʁ/",
      "elle dort": "/ɛl dɔʁ/",
      "nous dormons": "/nu dɔʁ.mɔ̃/",
      "vous dormez": "/vu dɔʁ.me/",
      "ils dorment": "/il dɔʁm/",
      "elles dorment": "/ɛl dɔʁm/",

      "je sors": "/ʒə sɔʁ/",
      "tu sors": "/ty sɔʁ/",
      "il sort": "/il sɔʁ/",
      "elle sort": "/ɛl sɔʁ/",
      "nous sortons": "/nu sɔʁ.tɔ̃/",
      "vous sortez": "/vu sɔʁ.te/",
      "ils sortent": "/il sɔʁt/",
      "elles sortent": "/ɛl sɔʁt/",

      "je sers": "/ʒə sɛʁ/",
      "tu sers": "/ty sɛʁ/",
      "il sert": "/il sɛʁ/",
      "elle sert": "/ɛl sɛʁ/",
      "nous servons": "/nu sɛʁ.vɔ̃/",
      "vous servez": "/vu sɛʁ.ve/",
      "ils servent": "/il sɛʁv/",
      "elles servent": "/ɛl sɛʁv/",

      "je sens": "/ʒə sɑ̃/",
      "tu sens": "/ty sɑ̃/",
      "il sent": "/il sɑ̃/",
      "elle sent": "/ɛl sɑ̃/",
      "nous sentons": "/nu sɑ̃.tɔ̃/",
      "vous sentez": "/vu sɑ̃.te/",
      "ils sentent": "/il sɑ̃t/",
      "elles sentent": "/ɛl sɑ̃t/",

      "j’habite": "/ʒa.bit/",
      "tu habites": "/ty a.bit/",
      "il habite": "/il a.bit/",
      "elle habite": "/ɛl a.bit/",
      "nous habitons": "/nu.za.bi.tɔ̃/",
      "vous habitez": "/vu.za.bi.te/",
      "ils habitent": "/il.za.bit/",
      "elles habitent": "/ɛl.za.bit/",

      "je trouve": "/ʒə tʁuv/",
      "tu trouves": "/ty tʁuv/",
      "il trouve": "/il tʁuv/",
      "elle trouve": "/ɛl tʁuv/",
      "nous trouvons": "/nu tʁu.vɔ̃/",
      "vous trouvez": "/vu tʁu.ve/",
      "ils trouvent": "/il tʁuv/",
      "elles trouvent": "/ɛl tʁuv/",

      "je regarde": "/ʒə ʁə.ɡaʁd/",
      "tu regardes": "/ty ʁə.ɡaʁd/",
      "il regarde": "/il ʁə.ɡaʁd/",
      "elle regarde": "/ɛl ʁə.ɡaʁd/",
      "nous regardons": "/nu ʁə.ɡaʁ.dɔ̃/",
      "vous regardez": "/vu ʁə.ɡaʁ.de/",
      "ils regardent": "/il ʁə.ɡaʁd/",
      "elles regardent": "/ɛl ʁə.ɡaʁd/",

      "je passe": "/ʒə pas/",
      "tu passes": "/ty pas/",
      "il passe": "/il pas/",
      "elle passe": "/ɛl pas/",
      "nous passons": "/nu pa.sɔ̃/",
      "vous passez": "/vu pa.se/",
      "ils passent": "/il pas/",
      "elles passent": "/ɛl pas/",

      "je commence": "/ʒə kɔ.mɑ̃s/",
      "tu commences": "/ty kɔ.mɑ̃s/",
      "il commence": "/il kɔ.mɑ̃s/",
      "elle commence": "/ɛl kɔ.mɑ̃s/",
      "nous commençons": "/nu kɔ.mɑ̃.sɔ̃/",
      "vous commencez": "/vu kɔ.mɑ̃.se/",
      "ils commencent": "/il kɔ.mɑ̃s/",
      "elles commencent": "/ɛl kɔ.mɑ̃s/",

      "je voyage": "/ʒə vwa.jaʒ/",
      "tu voyages": "/ty vwa.jaʒ/",
      "il voyage": "/il vwa.jaʒ/",
      "elle voyage": "/ɛl vwa.jaʒ/",
      "nous voyageons": "/nu vwa.ja.ʒɔ̃/",
      "vous voyagez": "/vu vwa.ja.ʒe/",
      "ils voyagent": "/il vwa.jaʒ/",
      "elles voyagent": "/ɛl vwa.jaʒ/",

      "je travaille": "/ʒə tʁa.vaj/",
      "tu travailles": "/ty tʁa.vaj/",
      "il travaille": "/il tʁa.vaj/",
      "elle travaille": "/ɛl tʁa.vaj/",
      "nous travaillons": "/nu tʁa.va.jɔ̃/",
      "vous travaillez": "/vu tʁa.va.je/",
      "ils travaillent": "/il tʁa.vaj/",
      "elles travaillent": "/ɛl tʁa.vaj/",

      "je déjeune": "/ʒə de.ʒœn/",
      "tu déjeunes": "/ty de.ʒœn/",
      "il déjeune": "/il de.ʒœn/",
      "elle déjeune": "/ɛl de.ʒœn/",
      "nous déjeunons": "/nu de.ʒœ.nɔ̃/",
      "vous déjeunez": "/vu de.ʒœ.ne/",
      "ils déjeunent": "/il de.ʒœn/",
      "elles déjeunent": "/ɛl de.ʒœn/",

      "j’achète": "/ʒa.ʃɛt/",
      "tu achètes": "/ty a.ʃɛt/",
      "il achète": "/il a.ʃɛt/",
      "elle achète": "/ɛl a.ʃɛt/",
      "nous achetons": "/nu.zaʃ.tɔ̃/",
      "vous achetez": "/vu.zaʃ.te/",
      "ils achètent": "/il.za.ʃɛt/",
      "elles achètent": "/ɛl.za.ʃɛt/",

      "je rentre": "/ʒə ʁɑ̃tʁ/",
      "tu rentres": "/ty ʁɑ̃tʁ/",
      "il rentre": "/il ʁɑ̃tʁ/",
      "elle rentre": "/ɛl ʁɑ̃tʁ/",
      "nous rentrons": "/nu ʁɑ̃.tʁɔ̃/",
      "vous rentrez": "/vu ʁɑ̃.tʁe/",
      "ils rentrent": "/il ʁɑ̃tʁ/",
      "elles rentrent": "/ɛl ʁɑ̃tʁ/",

      "je demande": "/ʒə də.mɑ̃d/",
      "tu demandes": "/ty də.mɑ̃d/",
      "il demande": "/il də.mɑ̃d/",
      "elle demande": "/ɛl də.mɑ̃d/",
      "nous demandons": "/nu də.mɑ̃.dɔ̃/",
      "vous demandez": "/vu də.mɑ̃.de/",
      "ils demandent": "/il də.mɑ̃d/",
      "elles demandent": "/ɛl də.mɑ̃d/",

      "je joue": "/ʒə ʒu/",
      "tu joues": "/ty ʒu/",
      "il joue": "/il ʒu/",
      "elle joue": "/ɛl ʒu/",
      "nous jouons": "/nu ʒwɔ̃/",
      "vous jouez": "/vu ʒwe/",
      "ils jouent": "/il ʒu/",
      "elles jouent": "/ɛl ʒu/",

      "je nage": "/ʒə naʒ/",
      "tu nages": "/ty naʒ/",
      "il nage": "/il naʒ/",
      "elle nage": "/ɛl naʒ/",
      "nous nageons": "/nu na.ʒɔ̃/",
      "vous nagez": "/vu na.ʒe/",
      "ils nagent": "/il naʒ/",
      "elles nagent": "/ɛl naʒ/",

      "je me lave": "/ʒə mə lav/",
      "tu te laves": "/ty tə lav/",
      "il se lave": "/il sə lav/",
      "elle se lave": "/ɛl sə lav/",
      "nous nous lavons": "/nu nu la.vɔ̃/",
      "vous vous lavez": "/vu vu la.ve/",
      "ils se lavent": "/il sə lav/",
      "elles se lavent": "/ɛl sə lav/",

      "je me lève": "/ʒə mə lɛv/",
      "tu te lèves": "/ty tə lɛv/",
      "il se lève": "/il sə lɛv/",
      "elle se lève": "/ɛl sə lɛv/",
      "nous nous levons": "/nu nu lə.vɔ̃/",
      "vous vous levez": "/vu vu lə.ve/",
      "ils se lèvent": "/il sə lɛv/",
      "elles se lèvent": "/ɛl sə lɛv/",

      "je me repose": "/ʒə mə ʁə.poz/",
      "tu te reposes": "/ty tə ʁə.poz/",
      "il se repose": "/il sə ʁə.poz/",
      "elle se repose": "/ɛl sə ʁə.poz/",
      "nous nous reposons": "/nu nu ʁə.po.zɔ̃/",
      "vous vous reposez": "/vu vu ʁə.po.ze/",
      "ils se reposent": "/il sə ʁə.poz/",
      "elles se reposent": "/ɛl sə ʁə.poz/",

      "je m’appelle": "/ʒə ma.pɛl/",
      "tu t’appelles": "/ty ta.pɛl/",
      "il s’appelle": "/il sa.pɛl/",
      "elle s’appelle": "/ɛl sa.pɛl/",
      "nous nous appelons": "/nu nu.za.pə.lɔ̃/",
      "vous vous appelez": "/vu vu.za.pə.le/",
      "ils s’appellent": "/il sa.pɛl/",
      "elles s’appellent": "/ɛl sa.pɛl/",

      "je m’habille": "/ʒə ma.bij/",
      "tu t’habilles": "/ty ta.bij/",
      "il s’habille": "/il sa.bij/",
      "elle s’habille": "/ɛl sa.bij/",
      "nous nous habillons": "/nu nu.za.bi.jɔ̃/",
      "vous vous habillez": "/vu vu.za.bi.je/",
      "ils s’habillent": "/il sa.bij/",
      "elles s’habillent": "/ɛl sa.bij/",

      "je tourne": "/ʒə tuʁn/",
      "tu tournes": "/ty tuʁn/",
      "il tourne": "/il tuʁn/",
      "elle tourne": "/ɛl tuʁn/",
      "nous tournons": "/nu tuʁ.nɔ̃/",
      "vous tournez": "/vu tuʁ.ne/",
      "ils tournent": "/il tuʁn/",
      "elles tournent": "/ɛl tuʁn/",

      "je coûte": "/ʒə kut/",
      "tu coûtes": "/ty kut/",
      "il coûte": "/il kut/",
      "elle coûte": "/ɛl kut/",
      "nous coûtons": "/nu ku.tɔ̃/",
      "vous coûtez": "/vu ku.te/",
      "ils coûtent": "/il kut/",
      "elles coûtent": "/ɛl kut/"
    };

    const exampleSentences = [
      { fr: "Je suis chinois.", en: "I am Chinese.", note: "identity / nationality", negative: "Je ne suis pas chinois.", negativeEn: "I am not Chinese." },
      { fr: "Tu es à la maison.", en: "You are at home.", note: "location", negative: "Tu n’es pas à la maison.", negativeEn: "You are not at home." },
      { fr: "Nous sommes fatigués.", en: "We are tired.", note: "description / state", negative: "Nous ne sommes pas fatigués.", negativeEn: "We are not tired." },
      { fr: "On est fatigués.", en: "We are tired.", note: "everyday spoken French often uses on for we", negative: "On n’est pas fatigués.", negativeEn: "We are not tired." },
      { fr: "J’ai vingt-huit ans.", en: "I am twenty-eight years old.", note: "French uses avoir for age", negative: "Je n’ai pas vingt-huit ans.", negativeEn: "I am not twenty-eight years old." },
      { fr: "Vous avez un stylo.", en: "You have a pen.", note: "possession", negative: "Vous n’avez pas de stylo.", negativeEn: "You do not have a pen." },
      { fr: "Ils ont faim.", en: "They are hungry.", note: "common expression with avoir", negative: "Ils n’ont pas faim.", negativeEn: "They are not hungry." }
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
      { fr: "Est-ce que vous avez une minute ?", en: "Do you have a minute?", source: "avoir: question" },
      { fr: "Avez-vous une adresse ?", en: "Do you have an address?", source: "avoir: question" },
      { fr: "Vous avez une bonne idée.", en: "You have a good idea.", source: "avoir: possession" },
      { fr: "Ils ont deux enfants.", en: "They have two children.", source: "avoir: family" },
      { fr: "Ils ont peur du chien.", en: "They are afraid of the dog.", source: "avoir expression" },
      { fr: "Ils ont rendez-vous demain.", en: "They have an appointment tomorrow.", source: "avoir: schedule" },
      { fr: "Elles ont une maison.", en: "They have a house.", source: "avoir: possession" },
      { fr: "Elles ont faim.", en: "They are hungry.", source: "avoir expression" },
      { fr: "Elles ont des devoirs.", en: "They have homework.", source: "avoir: possession" }
    ];

    const grammarFlashcards = [
      ...etreRows.map(item => ({
        fr: item.example,
        en: item.exampleEn,
        source: `être: ${item.full}`
      })),
      ...avoirRows.map(item => ({
        fr: item.example,
        en: item.exampleEn,
        source: `avoir: ${item.full}`
      })),
      ...exampleSentences.map(item => ({
        fr: item.fr,
        en: item.en,
        source: item.note
      })),
      ...extraGrammarFlashcards
    ];
