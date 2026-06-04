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

    const trouverRows = [
      { pronoun: "je", form: "trouve", full: "je trouve", en: "I find / I think", example: "Je trouve la clé.", exampleEn: "I find the key.", negative: "Je ne trouve pas la clé.", negativeEn: "I do not find the key." },
      { pronoun: "tu", form: "trouves", full: "tu trouves", en: "you find / you think", example: "Tu trouves ce livre intéressant.", exampleEn: "You find this book interesting.", negative: "Tu ne trouves pas ce livre intéressant.", negativeEn: "You do not find this book interesting." },
      { pronoun: "il", form: "trouve", full: "il trouve", en: "he finds / he thinks", example: "Il trouve une solution.", exampleEn: "He finds a solution.", negative: "Il ne trouve pas de solution.", negativeEn: "He does not find a solution." },
      { pronoun: "elle", form: "trouve", full: "elle trouve", en: "she finds / she thinks", example: "Elle trouve le film drôle.", exampleEn: "She finds the movie funny.", negative: "Elle ne trouve pas le film drôle.", negativeEn: "She does not find the movie funny." },
      { pronoun: "nous", form: "trouvons", full: "nous trouvons", en: "we find / we think", example: "Nous trouvons une place.", exampleEn: "We find a seat.", negative: "Nous ne trouvons pas de place.", negativeEn: "We do not find a seat." },
      { pronoun: "vous", form: "trouvez", full: "vous trouvez", en: "you find / you think", example: "Vous trouvez la réponse.", exampleEn: "You find the answer.", negative: "Vous ne trouvez pas la réponse.", negativeEn: "You do not find the answer." },
      { pronoun: "ils", form: "trouvent", full: "ils trouvent", en: "they find / they think", example: "Ils trouvent un restaurant.", exampleEn: "They find a restaurant.", negative: "Ils ne trouvent pas de restaurant.", negativeEn: "They do not find a restaurant." },
      { pronoun: "elles", form: "trouvent", full: "elles trouvent", en: "they find / they think", example: "Elles trouvent cette ville belle.", exampleEn: "They find this city beautiful.", negative: "Elles ne trouvent pas cette ville belle.", negativeEn: "They do not find this city beautiful." }
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

