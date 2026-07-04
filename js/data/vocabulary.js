    const weekdays = [
      { fr: "lundi", ipa: "/lœ̃di/", en: "Monday", note: "lundi prochain = next Monday", example: "Lundi prochain, je commence un nouveau cours.", exampleEn: "Next Monday, I start a new class." },
      { fr: "mardi", ipa: "/maʁdi/", en: "Tuesday", note: "mardi dernier = last Tuesday", example: "Mardi dernier, nous avons dîné ensemble.", exampleEn: "Last Tuesday, we had dinner together." },
      { fr: "mercredi", ipa: "/mɛʁkʁədi/", en: "Wednesday", note: "le mercredi = on Wednesdays", example: "Le mercredi, je fais du sport après le travail.", exampleEn: "On Wednesdays, I exercise after work." },
      { fr: "jeudi", ipa: "/ʒødi/", en: "Thursday", note: "jeudi soir = Thursday evening", example: "Jeudi soir, elle travaille tard.", exampleEn: "Thursday evening, she works late." },
      { fr: "vendredi", ipa: "/vɑ̃dʁədi/", en: "Friday", note: "vendredi matin = Friday morning", example: "Nous partons vendredi matin.", exampleEn: "We leave Friday morning." },
      { fr: "samedi", ipa: "/samdi/", en: "Saturday", note: "samedi prochain = next Saturday", example: "Samedi prochain, je vais au marché.", exampleEn: "Next Saturday, I’m going to the market." },
      { fr: "dimanche", ipa: "/dimɑ̃ʃ/", en: "Sunday", note: "dimanche dernier = last Sunday", example: "Dimanche dernier, ils sont restés à la maison.", exampleEn: "Last Sunday, they stayed home." }
    ];

    const months = [
      { fr: "janvier", ipa: "/ʒɑ̃vje/", en: "January", note: "month", example: "en janvier", exampleEn: "in January" },
      { fr: "février", ipa: "/fevʁije/", en: "February", note: "month", example: "en février", exampleEn: "in February" },
      { fr: "mars", ipa: "/maʁs/", en: "March", note: "month", example: "en mars", exampleEn: "in March" },
      { fr: "avril", ipa: "/avʁil/", en: "April", note: "month", example: "en avril", exampleEn: "in April" },
      { fr: "mai", ipa: "/mɛ/", en: "May", note: "month", example: "en mai", exampleEn: "in May" },
      { fr: "juin", ipa: "/ʒɥɛ̃/", en: "June", note: "month", example: "en juin", exampleEn: "in June" },
      { fr: "juillet", ipa: "/ʒɥijɛ/", en: "July", note: "month", example: "en juillet", exampleEn: "in July" },
      { fr: "août", ipa: "/ut/", en: "August", note: "month", example: "en août", exampleEn: "in August" },
      { fr: "septembre", ipa: "/sɛptɑ̃bʁ/", en: "September", note: "month", example: "en septembre", exampleEn: "in September" },
      { fr: "octobre", ipa: "/ɔktɔbʁ/", en: "October", note: "month", example: "en octobre", exampleEn: "in October" },
      { fr: "novembre", ipa: "/nɔvɑ̃bʁ/", en: "November", note: "month", example: "en novembre", exampleEn: "in November" },
      { fr: "décembre", ipa: "/desɑ̃bʁ/", en: "December", note: "month", example: "en décembre", exampleEn: "in December" }
    ];

    const seasons = [
      { fr: "printemps", ipa: "/pʁɛ̃tɑ̃/", en: "spring", note: "spring often uses au", example: "au printemps", exampleEn: "in spring" },
      { fr: "été", ipa: "/ete/", en: "summer", note: "usually uses en", example: "en été", exampleEn: "in summer" },
      { fr: "automne", ipa: "/otɔn/", en: "autumn / fall", note: "usually uses en", example: "en automne", exampleEn: "in autumn" },
      { fr: "hiver", ipa: "/ivɛʁ/", en: "winter", note: "usually uses en", example: "en hiver", exampleEn: "in winter" }
    ];

    const timeSpanComparisons = [
      {
        short: {
          fr: "an",
          ipa: "/ɑ̃/",
          en: "year as a countable unit",
          note: "Use an for age, counted years, and compact time references.",
          examples: [
            { fr: "J’ai vingt ans.", en: "I am twenty years old." },
            { fr: "J’habite ici depuis trois ans.", en: "I have lived here for three years." },
            { fr: "L’an dernier, nous avons déménagé.", en: "Last year, we moved." },
            { fr: "L’an prochain, je vais étudier le français.", en: "Next year, I am going to study French." },
            { fr: "Il est resté ici un bon an.", en: "He stayed here for a good year." }
          ]
        },
        long: {
          fr: "année",
          ipa: "/ane/",
          en: "year as lived period / content",
          note: "Use année when you talk about the quality, events, or experience of the year.",
          examples: [
            { fr: "J’ai passé une bonne année à Paris.", en: "I spent a good year in Paris." },
            { fr: "Cette année a été difficile.", en: "This year was difficult." },
            { fr: "L’année dernière, j’ai beaucoup voyagé.", en: "Last year, I traveled a lot." },
            { fr: "L’année prochaine, nous changeons d’école.", en: "Next year, we are changing schools." },
            { fr: "Bonne année !", en: "Happy New Year!" }
          ]
        },
        note: "Both l’an dernier / prochain and l’année dernière / prochaine are common. Année feels more like the whole lived year."
      },
      {
        short: {
          fr: "jour",
          ipa: "/ʒuʁ/",
          en: "day as a date, unit, or point",
          note: "Use jour for calendar days, counting days, and day-vs-night contrast.",
          examples: [
            { fr: "Quel jour sommes-nous ?", en: "What day is it?" },
            { fr: "Je pars dans deux jours.", en: "I am leaving in two days." },
            { fr: "Le jour de l’examen, je suis nerveux.", en: "On the day of the exam, I am nervous." },
            { fr: "C’est un bon jour pour commencer.", en: "It is a good day to start." },
            { fr: "C’est le dernier jour de cours.", en: "It is the last day of class." }
          ]
        },
        long: {
          fr: "journée",
          ipa: "/ʒuʁne/",
          en: "day as a lived span",
          note: "Use journée for the whole day as you experience it, spend it, or judge it.",
          examples: [
            { fr: "J’ai travaillé toute la journée.", en: "I worked all day." },
            { fr: "Nous avons passé une bonne journée.", en: "We had a good day." },
            { fr: "Bonne journée !", en: "Have a good day!" },
            { fr: "La dernière journée de cours était courte.", en: "The last day of class was short." },
            { fr: "La prochaine journée de formation commence à neuf heures.", en: "The next training day starts at nine." }
          ]
        },
        note: "For previous/next day, French usually says hier / demain, la veille / le lendemain, or le jour précédent / suivant. Dernier/prochain often mean final/next in a sequence."
      },
      {
        short: {
          fr: "soir",
          ipa: "/swaʁ/",
          en: "evening as a time point",
          note: "Use soir for the evening time, especially with ce, hier, demain, or a weekday.",
          examples: [
            { fr: "Ce soir, je rentre tôt.", en: "Tonight, I am going home early." },
            { fr: "Hier soir, j’ai appelé Marie.", en: "Last night, I called Marie." },
            { fr: "Le soir, je lis un peu.", en: "In the evening, I read a little." },
            { fr: "Bonsoir !", en: "Good evening!" },
            { fr: "Mardi soir prochain, nous dînons ensemble.", en: "Next Tuesday evening, we are having dinner together." }
          ]
        },
        long: {
          fr: "soirée",
          ipa: "/swaʁe/",
          en: "evening as lived span / event",
          note: "Use soirée for the whole evening, its quality, or an evening event.",
          examples: [
            { fr: "Nous avons passé une bonne soirée.", en: "We had a good evening." },
            { fr: "Bonne soirée !", en: "Have a good evening!" },
            { fr: "La soirée était très agréable.", en: "The evening was very pleasant." },
            { fr: "La dernière soirée du festival était magnifique.", en: "The last evening of the festival was wonderful." },
            { fr: "La prochaine soirée est chez Paul.", en: "The next evening party is at Paul’s place." }
          ]
        },
        note: "Bon soir is normally written bonsoir as a greeting. Bonne soirée is what you say when wishing someone a good rest of the evening."
      }
    ];

    const nounPluralRules = [
      {
        rule: "+s",
        pattern: "Most nouns add -s in writing. The final -s is usually silent.",
        examples: [
          { singular: "un livre", plural: "des livres", en: "a book / books" },
          { singular: "une table", plural: "des tables", en: "a table / tables" },
          { singular: "un ami", plural: "des amis", en: "a friend / friends" }
        ]
      },
      {
        rule: "-au / -eau / -eu → +x",
        pattern: "Many nouns ending in -au, -eau, or -eu add -x in the plural.",
        examples: [
          { singular: "un tuyau", plural: "des tuyaux", en: "a pipe / pipes" },
          { singular: "un bateau", plural: "des bateaux", en: "a boat / boats" },
          { singular: "un jeu", plural: "des jeux", en: "a game / games" }
        ]
      },
      {
        rule: "-s / -x / -z → no change",
        pattern: "If the noun already ends in -s, -x, or -z, the written plural usually stays the same.",
        examples: [
          { singular: "un pays", plural: "des pays", en: "a country / countries" },
          { singular: "un prix", plural: "des prix", en: "a price / prices" },
          { singular: "un nez", plural: "des nez", en: "a nose / noses" }
        ]
      },
      {
        rule: "-al → -aux",
        pattern: "Many nouns ending in -al change to -aux in the plural.",
        examples: [
          { singular: "un animal", plural: "des animaux", en: "an animal / animals" },
          { singular: "un journal", plural: "des journaux", en: "a newspaper / newspapers" },
          { singular: "un cheval", plural: "des chevaux", en: "a horse / horses" }
        ]
      }
    ];

    const jobGenderRules = [
      {
        rule: "-eur → -euse",
        pattern: "Many masculine job nouns ending in -eur become -euse.",
        examples: [
          { masculine: "un serveur", feminine: "une serveuse", en: "a waiter / waitress; server" },
          { masculine: "un vendeur", feminine: "une vendeuse", en: "a salesperson" },
          { masculine: "un coiffeur", feminine: "une coiffeuse", en: "a hairdresser" }
        ]
      },
      {
        rule: "-er → -ère",
        pattern: "Many masculine job nouns ending in -er add an accent and become -ère.",
        examples: [
          { masculine: "un boulanger", feminine: "une boulangère", en: "a baker" },
          { masculine: "un infirmier", feminine: "une infirmière", en: "a nurse" },
          { masculine: "un cuisinier", feminine: "une cuisinière", en: "a cook" }
        ]
      },
      {
        rule: "-f → -ve",
        pattern: "Some person nouns ending in -f change to -ve. This is less common for everyday job names.",
        examples: [
          { masculine: "un sportif", feminine: "une sportive", en: "an athlete / sporty person" },
          { masculine: "un créatif", feminine: "une créative", en: "a creative professional" },
          { masculine: "un actif", feminine: "une active", en: "an active worker / active person" }
        ]
      },
      {
        rule: "-ien → -ienne",
        pattern: "Masculine job nouns ending in -ien usually double the n and add -e.",
        examples: [
          { masculine: "un musicien", feminine: "une musicienne", en: "a musician" },
          { masculine: "un comédien", feminine: "une comédienne", en: "an actor / actress" },
          { masculine: "un technicien", feminine: "une technicienne", en: "a technician" }
        ]
      },
      {
        rule: "-teur → -trice",
        pattern: "Many job nouns ending in -teur become -trice.",
        examples: [
          { masculine: "un acteur", feminine: "une actrice", en: "an actor / actress" },
          { masculine: "un directeur", feminine: "une directrice", en: "a director / manager" },
          { masculine: "un traducteur", feminine: "une traductrice", en: "a translator" }
        ]
      },
      {
        rule: "-e → no change",
        pattern: "Many job nouns already ending in -e keep the same spoken and written form.",
        examples: [
          { masculine: "un architecte", feminine: "une architecte", en: "an architect" },
          { masculine: "un pilote", feminine: "une pilote", en: "a pilot" },
          { masculine: "un photographe", feminine: "une photographe", en: "a photographer" }
        ]
      },
      {
        rule: "-iste → no change",
        pattern: "Job nouns ending in -iste usually keep the same form.",
        examples: [
          { masculine: "un artiste", feminine: "une artiste", en: "an artist" },
          { masculine: "un dentiste", feminine: "une dentiste", en: "a dentist" },
          { masculine: "un journaliste", feminine: "une journaliste", en: "a journalist" }
        ]
      },
      {
        rule: "Special forms",
        pattern: "Some common job nouns do not follow the simple ending rules.",
        examples: [
          { masculine: "un professeur", feminine: "une professeure", en: "a professor / teacher" },
          { masculine: "un médecin", feminine: "une médecin", en: "a doctor" },
          { masculine: "un chef", feminine: "une cheffe", en: "a chef / boss" }
        ]
      }
    ];

    const uncountableNounGroups = [
      {
        category: "Food & drink",
        pattern: "Use partitive articles when you mean an unspecified amount of food or drink.",
        examples: [
          { phrase: "du pain", en: "bread", note: "masculine", example: "Je mange du pain.", exampleEn: "I eat bread." },
          { phrase: "du riz", en: "rice", note: "masculine", example: "Elle prépare du riz.", exampleEn: "She prepares rice." },
          { phrase: "de la soupe", en: "soup", note: "feminine", example: "Nous prenons de la soupe.", exampleEn: "We are having soup." },
          { phrase: "de l’eau", en: "water", note: "vowel sound", example: "Je bois de l’eau.", exampleEn: "I drink water." },
          { phrase: "des légumes", en: "vegetables", note: "plural count noun", example: "J’achète des légumes.", exampleEn: "I buy vegetables." },
          { phrase: "du beurre", en: "butter", note: "masculine", example: "Il met du beurre sur le pain.", exampleEn: "He puts butter on the bread." },
          { phrase: "de la farine", en: "flour", note: "feminine", example: "Elle utilise de la farine.", exampleEn: "She uses flour." },
          { phrase: "du sel", en: "salt", note: "masculine", example: "J’ajoute du sel.", exampleEn: "I add salt." }
        ]
      },
      {
        category: "More food staples",
        pattern: "These are high-frequency grocery words where English often drops “some,” but French still uses a partitive or plural article.",
        examples: [
          { phrase: "du sucre", en: "sugar", note: "masculine", example: "Veux-tu du sucre ?", exampleEn: "Do you want sugar?" },
          { phrase: "du lait", en: "milk", note: "masculine", example: "Je bois du lait.", exampleEn: "I drink milk." },
          { phrase: "du vin", en: "wine", note: "masculine", example: "Ils boivent du vin rouge.", exampleEn: "They drink red wine." },
          { phrase: "de la viande", en: "meat", note: "feminine", example: "Elle mange de la viande.", exampleEn: "She eats meat." },
          { phrase: "du poisson", en: "fish", note: "masculine as food", example: "Nous mangeons du poisson.", exampleEn: "We eat fish." },
          { phrase: "des céréales", en: "cereal", note: "usually plural", example: "Je prends des céréales le matin.", exampleEn: "I have cereal in the morning." },
          { phrase: "du fromage", en: "cheese", note: "masculine", example: "Vous achetez du fromage.", exampleEn: "You buy cheese." },
          { phrase: "de la confiture", en: "jam", note: "feminine", example: "Elle met de la confiture sur la tartine.", exampleEn: "She puts jam on the toast." }
        ]
      },
      {
        category: "Materials & substances",
        pattern: "Materials often behave like mass nouns: you talk about some of the material, not one item.",
        examples: [
          { phrase: "du bois", en: "wood", note: "masculine", example: "J’utilise du bois.", exampleEn: "I use wood." },
          { phrase: "du papier", en: "paper", note: "masculine", example: "J’achète du papier.", exampleEn: "I buy paper." },
          { phrase: "de l’or", en: "gold", note: "vowel sound", example: "Cette bague contient de l’or.", exampleEn: "This ring contains gold." },
          { phrase: "de la laine", en: "wool", note: "feminine", example: "Je cherche de la laine.", exampleEn: "I am looking for wool." }
        ]
      },
      {
        category: "Abstract qualities",
        pattern: "Many feelings, qualities, and ideas are abstract nouns. French still chooses du, de la, de l’, or des.",
        examples: [
          { phrase: "du courage", en: "courage", note: "masculine", example: "Il faut du courage.", exampleEn: "It takes courage." },
          { phrase: "de la patience", en: "patience", note: "feminine", example: "J’ai de la patience.", exampleEn: "I have patience." },
          { phrase: "de l’énergie", en: "energy", note: "vowel sound", example: "Elle a de l’énergie.", exampleEn: "She has energy." },
          { phrase: "des idées", en: "ideas", note: "plural abstract noun", example: "Nous avons des idées.", exampleEn: "We have ideas." },
          { phrase: "de l’argent", en: "money", note: "vowel sound", example: "As-tu de l’argent ?", exampleEn: "Do you have money?" },
          { phrase: "de la chance", en: "luck", note: "feminine", example: "J’ai de la chance.", exampleEn: "I am lucky." },
          { phrase: "du temps", en: "time", note: "masculine", example: "Nous avons du temps.", exampleEn: "We have time." },
          { phrase: "de l’expérience", en: "experience", note: "vowel sound", example: "Elle a de l’expérience.", exampleEn: "She has experience." }
        ]
      },
      {
        category: "Faire + activities",
        pattern: "Use faire de + article for many sports, activities, and some music practice expressions. For instruments, jouer de is also common and often more direct.",
        examples: [
          { phrase: "faire du sport", en: "to exercise / play sports", note: "faire + du", example: "Je fais du sport le samedi.", exampleEn: "I exercise on Saturdays." },
          { phrase: "faire du vélo", en: "to ride a bike / cycle", note: "faire + du", example: "Tu fais du vélo au parc.", exampleEn: "You ride a bike in the park." },
          { phrase: "faire du ski", en: "to ski", note: "faire + du", example: "Ils font du ski en hiver.", exampleEn: "They ski in winter." },
          { phrase: "faire de la natation", en: "to swim / do swimming", note: "faire + de la", example: "Elle fait de la natation.", exampleEn: "She swims." },
          { phrase: "faire de la randonnée", en: "to hike", note: "faire + de la", example: "Nous faisons de la randonnée.", exampleEn: "We hike." },
          { phrase: "faire de l’équitation", en: "to go horseback riding", note: "faire + de l’", example: "Faites-vous de l’équitation ?", exampleEn: "Do you go horseback riding?" },
          { phrase: "faire de la musique", en: "to make / play music", note: "faire + de la", example: "Elle fait de la musique.", exampleEn: "She makes music." },
          { phrase: "faire du piano", en: "to practice piano", note: "faire + du; jouer du piano is also common", example: "Il fait du piano.", exampleEn: "He practices piano." },
          { phrase: "faire de la guitare", en: "to practice guitar", note: "faire + de la; jouer de la guitare is also common", example: "Elle fait de la guitare.", exampleEn: "She practices guitar." }
        ]
      },
      {
        category: "Weather & natural things",
        pattern: "Weather expressions often use mass nouns with il y a.",
        examples: [
          { phrase: "du soleil", en: "sunshine", note: "masculine", example: "Il y a du soleil.", exampleEn: "It is sunny." },
          { phrase: "du vent", en: "wind", note: "masculine", example: "Il y a du vent.", exampleEn: "It is windy." },
          { phrase: "de la pluie", en: "rain", note: "feminine", example: "Il y a de la pluie.", exampleEn: "There is rain." },
          { phrase: "de la neige", en: "snow", note: "feminine", example: "Il y a de la neige.", exampleEn: "There is snow." }
        ]
      }
    ];

    const adjectiveFeminineRules = [
      {
        rule: "+e",
        pattern: "Basic feminine rule: add -e to the masculine adjective.",
        examples: [
          { from: "un grand jardin", to: "une grande maison", en: "a big garden / a big house" },
          { from: "un petit sac", to: "une petite table", en: "a small bag / a small table" },
          { from: "un pull vert", to: "une robe verte", en: "a green sweater / a green dress" }
        ]
      },
      {
        rule: "-e → no change",
        pattern: "Adjectives already ending in -e usually keep the same masculine and feminine form.",
        examples: [
          { from: "un livre rouge", to: "une fleur rouge", en: "a red book / a red flower" },
          { from: "un homme jeune", to: "une femme jeune", en: "a young man / a young woman" },
          { from: "un exercice facile", to: "une question facile", en: "an easy exercise / an easy question" }
        ]
      },
      {
        rule: "-ain → -aine",
        pattern: "Add -e; the final -n is clearly heard in the feminine form.",
        examples: [
          { from: "un garçon américain", to: "une fille américaine", en: "an American boy / an American girl" },
          { from: "un village lointain", to: "une ville lointaine", en: "a distant village / a distant city" },
          { from: "un rendez-vous prochain", to: "une réunion prochaine", en: "an upcoming appointment / an upcoming meeting" }
        ]
      },
      {
        rule: "-eux → -euse",
        pattern: "Masculine -eux usually becomes feminine -euse.",
        examples: [
          { from: "un homme heureux", to: "une femme heureuse", en: "a happy man / a happy woman" },
          { from: "un garçon sérieux", to: "une fille sérieuse", en: "a serious boy / a serious girl" },
          { from: "un film ennuyeux", to: "une histoire ennuyeuse", en: "a boring movie / a boring story" }
        ]
      },
      {
        rule: "-er → -ère",
        pattern: "Masculine -er usually becomes feminine -ère.",
        examples: [
          { from: "un livre cher", to: "une robe chère", en: "an expensive book / an expensive dress" },
          { from: "un premier jour", to: "une première semaine", en: "a first day / a first week" },
          { from: "un dernier train", to: "une dernière chance", en: "a last train / a last chance" }
        ]
      },
      {
        rule: "-f → -ve",
        pattern: "Masculine -f usually becomes feminine -ve.",
        examples: [
          { from: "un pantalon neuf", to: "une robe neuve", en: "new pants / a new dress" },
          { from: "un garçon sportif", to: "une fille sportive", en: "a sporty boy / a sporty girl" },
          { from: "un homme actif", to: "une femme active", en: "an active man / an active woman" }
        ]
      },
      {
        rule: "-ien → -ienne",
        pattern: "Masculine -ien doubles the n and adds -e: -ienne.",
        examples: [
          { from: "un voisin parisien", to: "une voisine parisienne", en: "a Parisian neighbor" },
          { from: "un ami italien", to: "une amie italienne", en: "an Italian friend" },
          { from: "un musicien ancien", to: "une chanson ancienne", en: "an old musician / an old song" }
        ]
      }
    ];

    const adjectivePluralRules = [
      {
        rule: "+s",
        pattern: "Basic plural rule: add -s to the adjective in writing.",
        examples: [
          { from: "un tee-shirt blanc", to: "des tee-shirts blancs", en: "a white T-shirt / white T-shirts" },
          { from: "une fille blonde", to: "des filles blondes", en: "a blond girl / blond girls" },
          { from: "une maison verte", to: "des maisons vertes", en: "a green house / green houses" }
        ]
      },
      {
        rule: "-eau → -eaux",
        pattern: "Masculine adjectives ending in -eau usually become -eaux in the plural.",
        examples: [
          { from: "un film nouveau", to: "des films nouveaux", en: "a new movie / new movies" },
          { from: "un beau manteau", to: "de beaux manteaux", en: "a beautiful coat / beautiful coats" },
          { from: "un nouveau tableau", to: "de nouveaux tableaux", en: "a new painting / new paintings" }
        ]
      },
      {
        rule: "-al → -aux",
        pattern: "Many masculine adjectives ending in -al become -aux in the plural.",
        examples: [
          { from: "un drapeau national", to: "des drapeaux nationaux", en: "a national flag / national flags" },
          { from: "un projet spécial", to: "des projets spéciaux", en: "a special project / special projects" },
          { from: "un cours principal", to: "des cours principaux", en: "a main course / main courses" }
        ]
      },
      {
        rule: "-s / -x → no change",
        pattern: "Adjectives ending in -s or -x usually keep the same masculine singular and plural form.",
        examples: [
          { from: "un cheval gris", to: "des chevaux gris", en: "a gray horse / gray horses" },
          { from: "un homme heureux", to: "des hommes heureux", en: "a happy man / happy men" },
          { from: "un prix bas", to: "des prix bas", en: "a low price / low prices" }
        ]
      }
    ];

    const adjectivePreposedPluralRules = [
      {
        rule: "des → de",
        pattern: "When an adjective comes before a plural noun, des often becomes de.",
        examples: [
          { from: "un nouveau film", to: "de nouveaux films", en: "a new movie / new movies" },
          { from: "un beau vêtement", to: "de beaux vêtements", en: "a beautiful garment / beautiful clothes" },
          { from: "une belle fleur", to: "de belles fleurs", en: "a beautiful flower / beautiful flowers" },
          { from: "un vieux tableau", to: "de vieux tableaux", en: "an old painting / old paintings" }
        ]
      }
    ];

    const specialAdjectiveForms = [
      {
        family: "beau",
        note: "bel before masculine singular vowel sound",
        forms: [
          {
            fr: "beau / bel",
            gender: "Masculine",
            number: "Singular",
            label: "Masculine singular",
            examples: [
              { fr: "Il porte un beau pull.", en: "He is wearing a beautiful sweater." },
              { fr: "C’est un bel homme.", en: "He is a handsome man." }
            ]
          },
          {
            fr: "belle",
            gender: "Feminine",
            number: "Singular",
            label: "Feminine singular",
            examples: [
              { fr: "Elle habite dans une belle maison.", en: "She lives in a beautiful house." },
              { fr: "J’ai une belle amie.", en: "I have a beautiful friend." }
            ]
          },
          {
            fr: "beaux",
            gender: "Masculine",
            number: "Plural",
            label: "Masculine plural",
            examples: [
              { fr: "J’achète de beaux vêtements.", en: "I am buying beautiful clothes." },
              { fr: "Nous visitons de beaux appartements.", en: "We are visiting beautiful apartments." }
            ]
          },
          {
            fr: "belles",
            gender: "Feminine",
            number: "Plural",
            label: "Feminine plural",
            examples: [
              { fr: "Elle reçoit de belles fleurs.", en: "She receives beautiful flowers." },
              { fr: "Nous avons de belles amies.", en: "We have beautiful friends." }
            ]
          }
        ]
      },
      {
        family: "nouveau",
        note: "nouvel before masculine singular vowel sound",
        forms: [
          {
            fr: "nouveau / nouvel",
            gender: "Masculine",
            number: "Singular",
            label: "Masculine singular",
            examples: [
              { fr: "Je regarde un nouveau film.", en: "I am watching a new movie." },
              { fr: "Il invite un nouvel ami.", en: "He invites a new friend." }
            ]
          },
          {
            fr: "nouvelle",
            gender: "Feminine",
            number: "Singular",
            label: "Feminine singular",
            examples: [
              { fr: "Elle achète une nouvelle maison.", en: "She is buying a new house." },
              { fr: "Tu rencontres une nouvelle amie.", en: "You meet a new friend." }
            ]
          },
          {
            fr: "nouveaux",
            gender: "Masculine",
            number: "Plural",
            label: "Masculine plural",
            examples: [
              { fr: "Nous regardons de nouveaux films.", en: "We are watching new movies." },
              { fr: "Ils cherchent de nouveaux appartements.", en: "They are looking for new apartments." }
            ]
          },
          {
            fr: "nouvelles",
            gender: "Feminine",
            number: "Plural",
            label: "Feminine plural",
            examples: [
              { fr: "Elle prend de nouvelles photos.", en: "She takes new photos." },
              { fr: "J’ai de nouvelles amies.", en: "I have new friends." }
            ]
          }
        ]
      },
      {
        family: "vieux",
        note: "vieil before masculine singular vowel sound",
        forms: [
          {
            fr: "vieux / vieil",
            gender: "Masculine",
            number: "Singular",
            label: "Masculine singular",
            examples: [
              { fr: "Je lis un vieux livre.", en: "I am reading an old book." },
              { fr: "C’est un vieil homme.", en: "He is an old man." }
            ]
          },
          {
            fr: "vieille",
            gender: "Feminine",
            number: "Singular",
            label: "Feminine singular",
            examples: [
              { fr: "Nous aidons une vieille dame.", en: "We help an old lady." },
              { fr: "Je parle avec une vieille amie.", en: "I am speaking with an old friend." }
            ]
          },
          {
            fr: "vieux",
            gender: "Masculine",
            number: "Plural",
            label: "Masculine plural",
            examples: [
              { fr: "Le musée garde de vieux tableaux.", en: "The museum keeps old paintings." },
              { fr: "Ils rénovent de vieux appartements.", en: "They renovate old apartments." }
            ]
          },
          {
            fr: "vieilles",
            gender: "Feminine",
            number: "Plural",
            label: "Feminine plural",
            examples: [
              { fr: "On visite de vieilles maisons.", en: "We visit old houses." },
              { fr: "Elle retrouve de vieilles amies.", en: "She meets old friends again." }
            ]
          }
        ]
      }
    ];

    const modifierComparisonRows = [
      {
        fr: "bon",
        type: "adjective",
        meaning: "good / tasty / useful",
        note: "Bon describes a noun, so it agrees: bon, bonne, bons, bonnes.",
        examples: [
          { subject: "je", fr: "Je choisis un bon restaurant.", en: "I choose a good restaurant." },
          { subject: "tu", fr: "Tu as une bonne idée.", en: "You have a good idea." },
          { subject: "nous", fr: "Nous avons de bons amis.", en: "We have good friends." }
        ]
      },
      {
        fr: "bien",
        type: "adverb",
        meaning: "well / fine / good as a judgment",
        note: "Bien usually describes a verb, a whole situation, or how someone feels. It does not agree.",
        examples: [
          { subject: "on", fr: "On travaille bien ensemble.", en: "We work well together." },
          { subject: "vous", fr: "Vous comprenez bien la règle.", en: "You understand the rule well." },
          { subject: "ils", fr: "Ils dorment bien.", en: "They sleep well." }
        ]
      },
      {
        fr: "beau",
        type: "adjective",
        meaning: "beautiful / nice-looking / nice weather",
        note: "Beau describes appearance or pleasant weather, so it agrees: beau, bel, belle, beaux, belles.",
        examples: [
          { subject: "il", fr: "Il fait beau aujourd’hui.", en: "The weather is nice today." },
          { subject: "elle", fr: "Elle porte une belle robe.", en: "She is wearing a beautiful dress." },
          { subject: "elles", fr: "Elles prennent de belles photos.", en: "They take beautiful photos." }
        ]
      }
    ];

    const adverbialPronounRows = [
      {
        title: "Y with aller",
        pattern: "y + conjugated aller",
        note: "Use y before the conjugated verb: je vais à Paris → j’y vais. The place is already understood.",
        examples: [
          {
            label: "je vais",
            meaning: "I’m going there tomorrow.",
            statement: { fr: "J’y vais demain.", en: "I’m going there tomorrow." },
            negative: { fr: "Je n’y vais pas demain.", en: "I’m not going there tomorrow." },
            question: { fr: "Est-ce que j’y vais demain ?", en: "Am I going there tomorrow?" }
          },
          {
            label: "tu vas",
            meaning: "You’re going there tonight.",
            statement: { fr: "Tu y vas ce soir.", en: "You’re going there tonight." },
            negative: { fr: "Tu n’y vas pas ce soir.", en: "You’re not going there tonight." },
            question: { fr: "Y vas-tu ce soir ?", en: "Are you going there tonight?" }
          },
          {
            label: "il va",
            meaning: "He goes there by bus.",
            statement: { fr: "Il y va en bus.", en: "He goes there by bus." },
            negative: { fr: "Il n’y va pas en bus.", en: "He does not go there by bus." },
            question: { fr: "Y va-t-il en bus ?", en: "Does he go there by bus?" }
          },
          {
            label: "nous allons",
            meaning: "We’re going there together.",
            statement: { fr: "Nous y allons ensemble.", en: "We’re going there together." },
            negative: { fr: "Nous n’y allons pas ensemble.", en: "We’re not going there together." },
            question: { fr: "Y allons-nous ensemble ?", en: "Are we going there together?" }
          },
          {
            label: "vous allez",
            meaning: "You go there often.",
            statement: { fr: "Vous y allez souvent.", en: "You go there often." },
            negative: { fr: "Vous n’y allez pas souvent.", en: "You do not go there often." },
            question: { fr: "Y allez-vous souvent ?", en: "Do you go there often?" }
          },
          {
            label: "elles vont",
            meaning: "They’re going there on Saturday.",
            statement: { fr: "Elles y vont samedi.", en: "They’re going there on Saturday." },
            negative: { fr: "Elles n’y vont pas samedi.", en: "They’re not going there on Saturday." },
            question: { fr: "Y vont-elles samedi ?", en: "Are they going there on Saturday?" }
          }
        ]
      },
      {
        title: "Y in passé composé",
        pattern: "y + auxiliary + past participle",
        note: "In compound tenses, y goes before the auxiliary: je suis allé au marché → j’y suis allé; tu as pensé à ça → tu y as pensé.",
        examples: [
          {
            label: "être + allé",
            meaning: "She went there yesterday.",
            statement: { fr: "Elle y est allée hier.", en: "She went there yesterday." },
            negative: { fr: "Elle n’y est pas allée hier.", en: "She did not go there yesterday." },
            question: { fr: "Y est-elle allée hier ?", en: "Did she go there yesterday?" }
          },
          {
            label: "avoir + pensé",
            meaning: "You thought about it.",
            statement: { fr: "Tu y as pensé.", en: "You thought about it." },
            negative: { fr: "Tu n’y as pas pensé.", en: "You did not think about it." },
            question: { fr: "Y as-tu pensé ?", en: "Did you think about it?" }
          },
          {
            label: "avoir + répondu",
            meaning: "He answered it.",
            statement: { fr: "Il y a répondu.", en: "He answered it." },
            negative: { fr: "Il n’y a pas répondu.", en: "He did not answer it." },
            question: { fr: "Y a-t-il répondu ?", en: "Did he answer it?" }
          },
          {
            label: "avoir + réfléchi",
            meaning: "They thought it over.",
            statement: { fr: "Elles y ont réfléchi.", en: "They thought it over." },
            negative: { fr: "Elles n’y ont pas réfléchi.", en: "They did not think it over." },
            question: { fr: "Y ont-elles réfléchi ?", en: "Did they think it over?" }
          },
          {
            label: "être + resté",
            meaning: "We stayed there.",
            statement: { fr: "Nous y sommes restés.", en: "We stayed there." },
            negative: { fr: "Nous n’y sommes pas restés.", en: "We did not stay there." },
            question: { fr: "Y sommes-nous restés ?", en: "Did we stay there?" }
          }
        ]
      },
      {
        title: "Y in imperative",
        pattern: "affirmative: verb-y; negative: n’y + verb + pas",
        note: "In affirmative commands, y comes after the verb with a hyphen: vas-y, allons-y, allez-y. In negative commands, y returns before the verb: n’y va pas.",
        labels: {
          statement: "Affirmative command",
          negative: "Negative command",
          question: "Question / request"
        },
        examples: [
          {
            label: "tu: aller",
            meaning: "Go there.",
            statement: { fr: "Vas-y maintenant.", en: "Go there now." },
            negative: { fr: "N’y va pas maintenant.", en: "Don’t go there now." },
            question: { fr: "Peux-tu y aller maintenant ?", en: "Can you go there now?" }
          },
          {
            label: "nous: aller",
            meaning: "Let’s go there.",
            statement: { fr: "Allons-y ensemble.", en: "Let’s go there together." },
            negative: { fr: "N’y allons pas ensemble.", en: "Let’s not go there together." },
            question: { fr: "Est-ce qu’on y va ensemble ?", en: "Are we going there together?" }
          },
          {
            label: "vous: aller",
            meaning: "Go there.",
            statement: { fr: "Allez-y, s’il vous plaît.", en: "Go there, please." },
            negative: { fr: "N’y allez pas, s’il vous plaît.", en: "Do not go there, please." },
            question: { fr: "Pouvez-vous y aller, s’il vous plaît ?", en: "Can you go there, please?" }
          },
          {
            label: "tu: penser à",
            meaning: "Think about it.",
            statement: { fr: "Penses-y ce soir.", en: "Think about it tonight." },
            negative: { fr: "N’y pense pas ce soir.", en: "Don’t think about it tonight." },
            question: { fr: "Peux-tu y penser ce soir ?", en: "Can you think about it tonight?" }
          },
          {
            label: "vous: répondre à",
            meaning: "Answer it.",
            statement: { fr: "Répondez-y avant midi.", en: "Answer it before noon." },
            negative: { fr: "N’y répondez pas avant midi.", en: "Do not answer it before noon." },
            question: { fr: "Pouvez-vous y répondre avant midi ?", en: "Can you answer it before noon?" }
          }
        ]
      }
    ];

    const toutFormRows = [
      {
        family: "tout",
        note: "all / every; agrees when it works like a determiner or adjective before a noun",
        forms: [
          {
            fr: "tout",
            gender: "Masculine",
            number: "Singular",
            label: "Masculine singular",
            examples: [
              { fr: "tout le jour", en: "the whole day" },
              { fr: "tout le monde", en: "everyone / all the world" }
            ]
          },
          {
            fr: "toute",
            gender: "Feminine",
            number: "Singular",
            label: "Feminine singular",
            examples: [
              { fr: "toute la journée", en: "the whole day" },
              { fr: "toute la famille", en: "the whole family" }
            ]
          },
          {
            fr: "tous",
            gender: "Masculine",
            number: "Plural",
            label: "Masculine plural",
            examples: [
              { fr: "tous les jours", en: "every day" },
              { fr: "tous mes amis", en: "all my friends" }
            ]
          },
          {
            fr: "toutes",
            gender: "Feminine",
            number: "Plural",
            label: "Feminine plural",
            examples: [
              { fr: "toutes les semaines", en: "every week" },
              { fr: "toutes mes questions", en: "all my questions" }
            ]
          }
        ]
      }
    ];
