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
              { fr: "C’est toi sur la photo ?", en: "Is that you in the photo?" }
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
              { fr: "Tu viens avec nous ?", en: "Are you coming with us?" },
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
              { fr: "Ils vont avec nous ?", en: "Are they going with us?" }
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
              { fr: "Tu parles à qui ?", en: "Who are you speaking to?" },
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

    const allerRows = [
      { pronoun: "je", form: "vais", full: "je vais", en: "I go / I am going", example: "Je vais au travail.", exampleEn: "I am going to work.", negative: "Je ne vais pas au travail.", negativeEn: "I am not going to work." },
      { pronoun: "tu", form: "vas", full: "tu vas", en: "you go / you are going", example: "Tu vas à l’école.", exampleEn: "You are going to school.", negative: "Tu ne vas pas à l’école.", negativeEn: "You are not going to school." },
      { pronoun: "il", form: "va", full: "il va", en: "he goes / he is going", example: "Il va au marché.", exampleEn: "He is going to the market.", negative: "Il ne va pas au marché.", negativeEn: "He is not going to the market." },
      { pronoun: "elle", form: "va", full: "elle va", en: "she goes / she is going", example: "Elle va à la maison.", exampleEn: "She is going home.", negative: "Elle ne va pas à la maison.", negativeEn: "She is not going home." },
      { pronoun: "nous", form: "allons", full: "nous allons", en: "we go / we are going", example: "Nous allons au parc.", exampleEn: "We are going to the park.", negative: "Nous n’allons pas au parc.", negativeEn: "We are not going to the park." },
      { pronoun: "vous", form: "allez", full: "vous allez", en: "you go / you are going", example: "Vous allez à Paris.", exampleEn: "You are going to Paris.", negative: "Vous n’allez pas à Paris.", negativeEn: "You are not going to Paris." },
      { pronoun: "ils", form: "vont", full: "ils vont", en: "they go / they are going", example: "Ils vont au restaurant.", exampleEn: "They are going to the restaurant.", negative: "Ils ne vont pas au restaurant.", negativeEn: "They are not going to the restaurant." },
      { pronoun: "elles", form: "vont", full: "elles vont", en: "they go / they are going", example: "Elles vont à la plage.", exampleEn: "They are going to the beach.", negative: "Elles ne vont pas à la plage.", negativeEn: "They are not going to the beach." }
    ];

    const venirRows = [
      { pronoun: "je", form: "viens", full: "je viens", en: "I come / I am coming", example: "Je viens de la maison.", exampleEn: "I am coming from home.", negative: "Je ne viens pas de la maison.", negativeEn: "I am not coming from home." },
      { pronoun: "tu", form: "viens", full: "tu viens", en: "you come / you are coming", example: "Tu viens avec moi ?", exampleEn: "Are you coming with me?", negative: "Tu ne viens pas avec moi ?", negativeEn: "Are you not coming with me?" },
      { pronoun: "il", form: "vient", full: "il vient", en: "he comes / he is coming", example: "Il vient du bureau.", exampleEn: "He is coming from the office.", negative: "Il ne vient pas du bureau.", negativeEn: "He is not coming from the office." },
      { pronoun: "elle", form: "vient", full: "elle vient", en: "she comes / she is coming", example: "Elle vient à la fête.", exampleEn: "She is coming to the party.", negative: "Elle ne vient pas à la fête.", negativeEn: "She is not coming to the party." },
      { pronoun: "nous", form: "venons", full: "nous venons", en: "we come / we are coming", example: "Nous venons de Paris.", exampleEn: "We are coming from Paris.", negative: "Nous ne venons pas de Paris.", negativeEn: "We are not coming from Paris." },
      { pronoun: "vous", form: "venez", full: "vous venez", en: "you come / you are coming", example: "Vous venez ce soir ?", exampleEn: "Are you coming tonight?", negative: "Vous ne venez pas ce soir ?", negativeEn: "Are you not coming tonight?" },
      { pronoun: "ils", form: "viennent", full: "ils viennent", en: "they come / they are coming", example: "Ils viennent en train.", exampleEn: "They are coming by train.", negative: "Ils ne viennent pas en train.", negativeEn: "They are not coming by train." },
      { pronoun: "elles", form: "viennent", full: "elles viennent", en: "they come / they are coming", example: "Elles viennent demain.", exampleEn: "They are coming tomorrow.", negative: "Elles ne viennent pas demain.", negativeEn: "They are not coming tomorrow." }
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
          { meaning: "time", fr: "Tu prends ton temps.", en: "You take your time.", negative: "Tu ne prends pas ton temps.", negativeEn: "You do not take your time." },
          { meaning: "photo", fr: "Tu prends une photo du monument.", en: "You take a photo of the monument.", negative: "Tu ne prends pas de photo du monument.", negativeEn: "You do not take a photo of the monument." }
        ]
      },
      {
        pronoun: "il",
        form: "prend",
        full: "il prend",
        en: "he takes / has",
        examples: [
          { meaning: "meal", fr: "Il prend son petit-déjeuner à sept heures.", en: "He has breakfast at seven o’clock.", negative: "Il ne prend pas son petit-déjeuner à sept heures.", negativeEn: "He does not have breakfast at seven o’clock." },
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
          { meaning: "decision", fr: "Nous prenons une décision aujourd’hui.", en: "We make a decision today.", negative: "Nous ne prenons pas de décision aujourd’hui.", negativeEn: "We do not make a decision today." }
        ]
      },
      {
        pronoun: "vous",
        form: "prenez",
        full: "vous prenez",
        en: "you take / make",
        examples: [
          { meaning: "transport", fr: "Vous prenez un taxi pour l’aéroport.", en: "You take a taxi to the airport.", negative: "Vous ne prenez pas de taxi pour l’aéroport.", negativeEn: "You do not take a taxi to the airport." },
          { meaning: "appointment", fr: "Vous prenez rendez-vous chez le médecin.", en: "You make an appointment with the doctor.", negative: "Vous ne prenez pas rendez-vous chez le médecin.", negativeEn: "You do not make an appointment with the doctor." }
        ]
      },
      {
        pronoun: "ils",
        form: "prennent",
        full: "ils prennent",
        en: "they take / have",
        examples: [
          { meaning: "transport", fr: "Ils prennent le bus à huit heures.", en: "They take the bus at eight o’clock.", negative: "Ils ne prennent pas le bus à huit heures.", negativeEn: "They do not take the bus at eight o’clock." },
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
      { pronoun: "vous", form: "habitez", full: "vous habitez", en: "you live", example: "Vous habitez où ?", exampleEn: "Where do you live?", negative: "Vous n’habitez pas ici.", negativeEn: "You do not live here." },
      { pronoun: "ils", form: "habitent", full: "ils habitent", en: "they live", example: "Ils habitent dans cette rue.", exampleEn: "They live on this street.", negative: "Ils n’habitent pas dans cette rue.", negativeEn: "They do not live on this street." },
      { pronoun: "elles", form: "habitent", full: "elles habitent", en: "they live", example: "Elles habitent à côté.", exampleEn: "They live nearby.", negative: "Elles n’habitent pas à côté.", negativeEn: "They do not live nearby." }
    ];

    const faireRows = [
      { pronoun: "je", form: "fais", full: "je fais", en: "I do / I make", example: "Je fais un gâteau.", exampleEn: "I am making a cake.", negative: "Je ne fais pas de gâteau.", negativeEn: "I am not making a cake." },
      { pronoun: "tu", form: "fais", full: "tu fais", en: "you do / you make", example: "Tu fais tes devoirs.", exampleEn: "You are doing your homework.", negative: "Tu ne fais pas tes devoirs.", negativeEn: "You are not doing your homework." },
      { pronoun: "il", form: "fait", full: "il fait", en: "he does / he makes", example: "Il fait du café.", exampleEn: "He is making coffee.", negative: "Il ne fait pas de café.", negativeEn: "He is not making coffee." },
      { pronoun: "elle", form: "fait", full: "elle fait", en: "she does / she makes", example: "Elle fait la cuisine.", exampleEn: "She is cooking.", negative: "Elle ne fait pas la cuisine.", negativeEn: "She is not cooking." },
      { pronoun: "nous", form: "faisons", full: "nous faisons", en: "we do / we make", example: "Nous faisons une promenade.", exampleEn: "We are taking a walk.", negative: "Nous ne faisons pas de promenade.", negativeEn: "We are not taking a walk." },
      { pronoun: "vous", form: "faites", full: "vous faites", en: "you do / you make", example: "Vous faites du sport.", exampleEn: "You do sports.", negative: "Vous ne faites pas de sport.", negativeEn: "You do not do sports." },
      { pronoun: "ils", form: "font", full: "ils font", en: "they do / they make", example: "Ils font attention.", exampleEn: "They are paying attention.", negative: "Ils ne font pas attention.", negativeEn: "They are not paying attention." },
      { pronoun: "elles", form: "font", full: "elles font", en: "they do / they make", example: "Elles font la fête.", exampleEn: "They are partying.", negative: "Elles ne font pas la fête.", negativeEn: "They are not partying." }
    ];

    const voirRows = [
      { pronoun: "je", form: "vois", full: "je vois", en: "I see", example: "Je vois la gare.", exampleEn: "I see the train station.", negative: "Je ne vois pas la gare.", negativeEn: "I do not see the train station." },
      { pronoun: "tu", form: "vois", full: "tu vois", en: "you see", example: "Tu vois le panneau ?", exampleEn: "Do you see the sign?", negative: "Tu ne vois pas le panneau ?", negativeEn: "Do you not see the sign?" },
      { pronoun: "il", form: "voit", full: "il voit", en: "he sees", example: "Il voit ses amis.", exampleEn: "He sees his friends.", negative: "Il ne voit pas ses amis.", negativeEn: "He does not see his friends." },
      { pronoun: "elle", form: "voit", full: "elle voit", en: "she sees", example: "Elle voit un médecin.", exampleEn: "She is seeing a doctor.", negative: "Elle ne voit pas de médecin.", negativeEn: "She is not seeing a doctor." },
      { pronoun: "nous", form: "voyons", full: "nous voyons", en: "we see", example: "Nous voyons la mer.", exampleEn: "We see the sea.", negative: "Nous ne voyons pas la mer.", negativeEn: "We do not see the sea." },
      { pronoun: "vous", form: "voyez", full: "vous voyez", en: "you see", example: "Vous voyez la différence.", exampleEn: "You see the difference.", negative: "Vous ne voyez pas la différence.", negativeEn: "You do not see the difference." },
      { pronoun: "ils", form: "voient", full: "ils voient", en: "they see", example: "Ils voient le problème.", exampleEn: "They see the problem.", negative: "Ils ne voient pas le problème.", negativeEn: "They do not see the problem." },
      { pronoun: "elles", form: "voient", full: "elles voient", en: "they see", example: "Elles voient un film ce soir.", exampleEn: "They are seeing a movie tonight.", negative: "Elles ne voient pas de film ce soir.", negativeEn: "They are not seeing a movie tonight." }
    ];

    const partirRows = [
      { pronoun: "je", form: "pars", full: "je pars", en: "I leave", example: "Je pars demain matin.", exampleEn: "I leave tomorrow morning.", negative: "Je ne pars pas demain matin.", negativeEn: "I am not leaving tomorrow morning." },
      { pronoun: "tu", form: "pars", full: "tu pars", en: "you leave", example: "Tu pars à quelle heure ?", exampleEn: "What time are you leaving?", negative: "Tu ne pars pas maintenant ?", negativeEn: "Are you not leaving now?" },
      { pronoun: "il", form: "part", full: "il part", en: "he leaves", example: "Il part pour Lyon.", exampleEn: "He leaves for Lyon.", negative: "Il ne part pas pour Lyon.", negativeEn: "He is not leaving for Lyon." },
      { pronoun: "elle", form: "part", full: "elle part", en: "she leaves", example: "Elle part en vacances.", exampleEn: "She is leaving on vacation.", negative: "Elle ne part pas en vacances.", negativeEn: "She is not leaving on vacation." },
      { pronoun: "nous", form: "partons", full: "nous partons", en: "we leave", example: "Nous partons à midi.", exampleEn: "We leave at noon.", negative: "Nous ne partons pas à midi.", negativeEn: "We are not leaving at noon." },
      { pronoun: "vous", form: "partez", full: "vous partez", en: "you leave", example: "Vous partez ce soir ?", exampleEn: "Are you leaving tonight?", negative: "Vous ne partez pas ce soir ?", negativeEn: "Are you not leaving tonight?" },
      { pronoun: "ils", form: "partent", full: "ils partent", en: "they leave", example: "Ils partent tôt.", exampleEn: "They leave early.", negative: "Ils ne partent pas tôt.", negativeEn: "They do not leave early." },
      { pronoun: "elles", form: "partent", full: "elles partent", en: "they leave", example: "Elles partent ensemble.", exampleEn: "They leave together.", negative: "Elles ne partent pas ensemble.", negativeEn: "They do not leave together." }
    ];

    const trouverRows = [
      { pronoun: "je", form: "trouve", full: "je trouve", en: "I find / I think", example: "Je trouve la clé.", exampleEn: "I find the key.", negative: "Je ne trouve pas la clé.", negativeEn: "I do not find the key." },
      { pronoun: "tu", form: "trouves", full: "tu trouves", en: "you find / you think", example: "Tu trouves ce livre intéressant.", exampleEn: "You find this book interesting.", negative: "Tu ne trouves pas ce livre intéressant.", negativeEn: "You do not find this book interesting." },
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
      { pronoun: "nous", form: "regardons", full: "nous regardons", en: "we watch / look at", example: "Nous regardons le menu.", exampleEn: "We are looking at the menu.", negative: "Nous ne regardons pas le menu.", negativeEn: "We are not looking at the menu." },
      { pronoun: "vous", form: "regardez", full: "vous regardez", en: "you watch / look at", example: "Vous regardez la carte ?", exampleEn: "Are you looking at the map?", negative: "Vous ne regardez pas la carte ?", negativeEn: "Are you not looking at the map?" },
      { pronoun: "ils", form: "regardent", full: "ils regardent", en: "they watch / look at", example: "Ils regardent le match.", exampleEn: "They are watching the game.", negative: "Ils ne regardent pas le match.", negativeEn: "They are not watching the game." },
      { pronoun: "elles", form: "regardent", full: "elles regardent", en: "they watch / look at", example: "Elles regardent la vidéo.", exampleEn: "They are watching the video.", negative: "Elles ne regardent pas la vidéo.", negativeEn: "They are not watching the video." }
    ];

    const passerRows = [
      { pronoun: "je", form: "passe", full: "je passe", en: "I pass / stop by / spend", example: "Je passe par le parc.", exampleEn: "I pass through the park.", negative: "Je ne passe pas par le parc.", negativeEn: "I do not pass through the park." },
      { pronoun: "tu", form: "passes", full: "tu passes", en: "you pass / stop by / spend", example: "Tu passes chez moi ce soir ?", exampleEn: "Are you stopping by my place tonight?", negative: "Tu ne passes pas chez moi ce soir ?", negativeEn: "Are you not stopping by my place tonight?" },
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
      { pronoun: "ils", form: "commencent", full: "ils commencent", en: "they begin / start", example: "Ils commencent tôt.", exampleEn: "They start early.", negative: "Ils ne commencent pas tôt.", negativeEn: "They do not start early." },
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
      { pronoun: "tu", form: "travailles", full: "tu travailles", en: "you work", example: "Tu travailles à la maison.", exampleEn: "You work at home.", negative: "Tu ne travailles pas à la maison.", negativeEn: "You do not work at home." },
      { pronoun: "il", form: "travaille", full: "il travaille", en: "he works", example: "Il travaille dans un bureau.", exampleEn: "He works in an office.", negative: "Il ne travaille pas dans un bureau.", negativeEn: "He does not work in an office." },
      { pronoun: "elle", form: "travaille", full: "elle travaille", en: "she works", example: "Elle travaille le lundi.", exampleEn: "She works on Mondays.", negative: "Elle ne travaille pas le lundi.", negativeEn: "She does not work on Mondays." },
      { pronoun: "nous", form: "travaillons", full: "nous travaillons", en: "we work", example: "Nous travaillons ensemble.", exampleEn: "We work together.", negative: "Nous ne travaillons pas ensemble.", negativeEn: "We do not work together." },
      { pronoun: "vous", form: "travaillez", full: "vous travaillez", en: "you work", example: "Vous travaillez beaucoup.", exampleEn: "You work a lot.", negative: "Vous ne travaillez pas beaucoup.", negativeEn: "You do not work a lot." },
      { pronoun: "ils", form: "travaillent", full: "ils travaillent", en: "they work", example: "Ils travaillent tard.", exampleEn: "They work late.", negative: "Ils ne travaillent pas tard.", negativeEn: "They do not work late." },
      { pronoun: "elles", form: "travaillent", full: "elles travaillent", en: "they work", example: "Elles travaillent en équipe.", exampleEn: "They work as a team.", negative: "Elles ne travaillent pas en équipe.", negativeEn: "They do not work as a team." }
    ];

    const tournerRows = [
      { pronoun: "je", form: "tourne", full: "je tourne", en: "I turn", example: "Je tourne à gauche au prochain carrefour.", exampleEn: "I turn left at the next intersection.", negative: "Je ne tourne pas à gauche au prochain carrefour.", negativeEn: "I do not turn left at the next intersection." },
      { pronoun: "tu", form: "tournes", full: "tu tournes", en: "you turn", example: "Tu tournes la clé dans la serrure.", exampleEn: "You turn the key in the lock.", negative: "Tu ne tournes pas la clé dans la serrure.", negativeEn: "You do not turn the key in the lock." },
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
      { pronoun: "il", form: "coûte", full: "il coûte", en: "it costs", example: "Il coûte cinq euros.", exampleEn: "It costs five euros.", negative: "Il ne coûte pas cinq euros.", negativeEn: "It does not cost five euros." },
      { pronoun: "elle", form: "coûte", full: "elle coûte", en: "it costs", example: "Elle coûte trop cher.", exampleEn: "It costs too much.", negative: "Elle ne coûte pas trop cher.", negativeEn: "It does not cost too much." },
      { pronoun: "nous", form: "coûtons", full: "nous coûtons", en: "we cost", example: "Nous coûtons moins cher.", exampleEn: "We cost less.", negative: "Nous ne coûtons pas moins cher.", negativeEn: "We do not cost less." },
      { pronoun: "vous", form: "coûtez", full: "vous coûtez", en: "you cost", example: "Vous coûtez vingt euros.", exampleEn: "You cost twenty euros.", negative: "Vous ne coûtez pas vingt euros.", negativeEn: "You do not cost twenty euros." },
      { pronoun: "ils", form: "coûtent", full: "ils coûtent", en: "they cost", example: "Ils coûtent trois euros.", exampleEn: "They cost three euros.", negative: "Ils ne coûtent pas trois euros.", negativeEn: "They do not cost three euros." },
      { pronoun: "elles", form: "coûtent", full: "elles coûtent", en: "they cost", example: "Elles coûtent cher.", exampleEn: "They cost a lot.", negative: "Elles ne coûtent pas cher.", negativeEn: "They do not cost a lot." }
    ];

    const verbPhraseIpa = {
      "je suis": "/ʒə sɥi/",
      "tu es": "/ty ɛ/",
      "il est": "/il ɛ/",
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

      "je pars": "/ʒə paʁ/",
      "tu pars": "/ty paʁ/",
      "il part": "/il paʁ/",
      "elle part": "/ɛl paʁ/",
      "nous partons": "/nu paʁ.tɔ̃/",
      "vous partez": "/vu paʁ.te/",
      "ils partent": "/il paʁt/",
      "elles partent": "/ɛl paʁt/",

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
      { fr: "Vous avez une minute ?", en: "Do you have a minute?", source: "avoir: question" },
      { fr: "Vous avez une adresse ?", en: "Do you have an address?", source: "avoir: question" },
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
