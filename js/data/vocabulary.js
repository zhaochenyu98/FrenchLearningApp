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
            label: "Masculine singular",
            examples: [
              { fr: "un beau pull", en: "a beautiful sweater" },
              { fr: "un bel homme", en: "a handsome man" }
            ]
          },
          {
            label: "Feminine singular",
            examples: [
              { fr: "une belle maison", en: "a beautiful house" },
              { fr: "une belle amie", en: "a beautiful friend" }
            ]
          },
          {
            label: "Masculine plural",
            examples: [
              { fr: "de beaux vêtements", en: "beautiful clothes" },
              { fr: "de beaux appartements", en: "beautiful apartments" }
            ]
          },
          {
            label: "Feminine plural",
            examples: [
              { fr: "de belles fleurs", en: "beautiful flowers" },
              { fr: "de belles amies", en: "beautiful friends" }
            ]
          }
        ]
      },
      {
        family: "nouveau",
        note: "nouvel before masculine singular vowel sound",
        forms: [
          {
            label: "Masculine singular",
            examples: [
              { fr: "un nouveau film", en: "a new movie" },
              { fr: "un nouvel ami", en: "a new friend" }
            ]
          },
          {
            label: "Feminine singular",
            examples: [
              { fr: "une nouvelle maison", en: "a new house" },
              { fr: "une nouvelle amie", en: "a new friend" }
            ]
          },
          {
            label: "Masculine plural",
            examples: [
              { fr: "de nouveaux films", en: "new movies" },
              { fr: "de nouveaux appartements", en: "new apartments" }
            ]
          },
          {
            label: "Feminine plural",
            examples: [
              { fr: "de nouvelles photos", en: "new photos" },
              { fr: "de nouvelles amies", en: "new friends" }
            ]
          }
        ]
      },
      {
        family: "vieux",
        note: "vieil before masculine singular vowel sound",
        forms: [
          {
            label: "Masculine singular",
            examples: [
              { fr: "un vieux livre", en: "an old book" },
              { fr: "un vieil homme", en: "an old man" }
            ]
          },
          {
            label: "Feminine singular",
            examples: [
              { fr: "une vieille dame", en: "an old lady" },
              { fr: "une vieille amie", en: "an old friend" }
            ]
          },
          {
            label: "Masculine plural",
            examples: [
              { fr: "de vieux tableaux", en: "old paintings" },
              { fr: "de vieux appartements", en: "old apartments" }
            ]
          },
          {
            label: "Feminine plural",
            examples: [
              { fr: "de vieilles maisons", en: "old houses" },
              { fr: "de vieilles amies", en: "old friends" }
            ]
          }
        ]
      }
    ];
