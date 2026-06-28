    const passeComposeGroups = [
      {
        key: "er",
        title: "-er verbs → -é",
        indexTitle: "-er → -é",
        headers: {
          verb: "Verb",
          participle: "Passé composé",
          examples: "Statement / negation / question"
        },
        verbs: [
          {
            infinitive: "parler",
            meaning: "to speak / talk",
            auxiliary: "avoir",
            pastParticiple: "parlé",
            pattern: "parler → parlé",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai bien parlé avec le professeur.", en: "I spoke well with the teacher." },
            negative: { fr: "Je n’ai pas bien parlé avec le professeur.", en: "I did not speak well with the teacher." },
            question: { fr: "Est-ce que j’ai bien parlé avec le professeur ?", en: "Did I speak well with the teacher?" }
          },
          {
            infinitive: "chercher",
            meaning: "to look for",
            auxiliary: "avoir",
            pastParticiple: "cherché",
            pattern: "chercher → cherché",
            note: "Regular -er past participle.",
            statement: { fr: "Tu as cherché tes clés.", en: "You looked for your keys." },
            negative: { fr: "Tu n’as pas cherché tes clés.", en: "You did not look for your keys." },
            question: { fr: "As-tu cherché tes clés ?", en: "Did you look for your keys?" }
          },
          {
            infinitive: "manger",
            meaning: "to eat",
            auxiliary: "avoir",
            pastParticiple: "mangé",
            pattern: "manger → mangé",
            note: "Regular -er past participle.",
            statement: { fr: "Il a beaucoup mangé au dîner.", en: "He ate a lot at dinner." },
            negative: { fr: "Il n’a pas beaucoup mangé au dîner.", en: "He did not eat a lot at dinner." },
            question: { fr: "A-t-il beaucoup mangé au dîner ?", en: "Did he eat a lot at dinner?" }
          },
          {
            infinitive: "inviter",
            meaning: "to invite",
            auxiliary: "avoir",
            pastParticiple: "invité",
            pattern: "inviter → invité",
            note: "Regular -er past participle.",
            statement: { fr: "Nous avons invité nos amis.", en: "We invited our friends." },
            negative: { fr: "Nous n’avons pas invité nos amis.", en: "We did not invite our friends." },
            question: { fr: "Avons-nous invité nos amis ?", en: "Did we invite our friends?" }
          }
        ]
      },
      {
        key: "ir",
        title: "-ir verbs → -i, plus tenir → tenu",
        indexTitle: "-ir → -i",
        headers: {
          verb: "Verb",
          participle: "Passé composé",
          examples: "Statement / negation / question"
        },
        verbs: [
          {
            infinitive: "finir",
            meaning: "to finish",
            auxiliary: "avoir",
            pastParticiple: "fini",
            pattern: "finir → fini",
            note: "Regular -ir past participle.",
            statement: { fr: "J’ai déjà fini mes devoirs.", en: "I have already finished my homework." },
            negative: { fr: "Je n’ai pas encore fini mes devoirs.", en: "I have not finished my homework yet." },
            question: { fr: "Est-ce que j’ai déjà fini mes devoirs ?", en: "Have I already finished my homework?" }
          },
          {
            infinitive: "choisir",
            meaning: "to choose",
            auxiliary: "avoir",
            pastParticiple: "choisi",
            pattern: "choisir → choisi",
            note: "Regular -ir past participle.",
            statement: { fr: "Tu as bien choisi le restaurant.", en: "You chose the restaurant well." },
            negative: { fr: "Tu n’as pas bien choisi le restaurant.", en: "You did not choose the restaurant well." },
            question: { fr: "As-tu bien choisi le restaurant ?", en: "Did you choose the restaurant well?" }
          },
          {
            infinitive: "réussir",
            meaning: "to succeed / pass",
            auxiliary: "avoir",
            pastParticiple: "réussi",
            pattern: "réussir → réussi",
            note: "Regular -ir past participle.",
            statement: { fr: "Elle a réussi l’examen.", en: "She passed the exam." },
            negative: { fr: "Elle n’a pas réussi l’examen.", en: "She did not pass the exam." },
            question: { fr: "A-t-elle réussi l’examen ?", en: "Did she pass the exam?" }
          },
          {
            infinitive: "unir",
            meaning: "to unite",
            auxiliary: "avoir",
            pastParticiple: "uni",
            pattern: "unir → uni",
            note: "Regular -ir past participle.",
            statement: { fr: "La fête a uni la famille.", en: "The party brought the family together." },
            negative: { fr: "La fête n’a pas uni la famille.", en: "The party did not bring the family together." },
            question: { fr: "La fête a-t-elle uni la famille ?", en: "Did the party bring the family together?" }
          },
          {
            infinitive: "tenir",
            meaning: "to hold / keep",
            auxiliary: "avoir",
            pastParticiple: "tenu",
            pattern: "tenir → tenu",
            note: "Exception: tenir does not become teni.",
            statement: { fr: "Il a tenu sa promesse.", en: "He kept his promise." },
            negative: { fr: "Il n’a pas tenu sa promesse.", en: "He did not keep his promise." },
            question: { fr: "A-t-il tenu sa promesse ?", en: "Did he keep his promise?" }
          }
        ]
      },
      {
        key: "irregular",
        title: "Irregular past participles",
        indexTitle: "Irregular",
        headers: {
          verb: "Verb",
          participle: "Passé composé",
          examples: "Statement / negation / question"
        },
        verbs: [
          {
            infinitive: "avoir",
            meaning: "to have",
            auxiliary: "avoir",
            pastParticiple: "eu /y/",
            pattern: "avoir → eu",
            note: "Eu is pronounced like /y/.",
            statement: { fr: "J’ai eu de la chance.", en: "I was lucky." },
            negative: { fr: "Je n’ai pas eu de chance.", en: "I was not lucky." },
            question: { fr: "Est-ce que j’ai eu de la chance ?", en: "Was I lucky?" }
          },
          {
            infinitive: "être",
            meaning: "to be",
            auxiliary: "avoir",
            pastParticiple: "été",
            pattern: "être → été",
            note: "Être uses avoir as its helper in passé composé.",
            statement: { fr: "Tu as été très patient.", en: "You were very patient." },
            negative: { fr: "Tu n’as pas été très patient.", en: "You were not very patient." },
            question: { fr: "As-tu été très patient ?", en: "Were you very patient?" }
          },
          {
            infinitive: "aller",
            meaning: "to go",
            auxiliary: "être",
            pastParticiple: "allé(e)(s)",
            pattern: "aller → allé",
            note: "Uses être; agree the participle with the subject.",
            statement: { fr: "Elle est déjà allée au marché.", en: "She has already gone to the market." },
            negative: { fr: "Elle n’est pas encore allée au marché.", en: "She has not gone to the market yet." },
            question: { fr: "Est-elle déjà allée au marché ?", en: "Has she already gone to the market?" }
          },
          {
            infinitive: "partir",
            meaning: "to leave",
            auxiliary: "être",
            pastParticiple: "parti(e)(s)",
            pattern: "partir → parti",
            note: "Uses être; agree the participle with the subject.",
            statement: { fr: "Nous sommes partis tôt.", en: "We left early." },
            negative: { fr: "Nous ne sommes pas partis tôt.", en: "We did not leave early." },
            question: { fr: "Sommes-nous partis tôt ?", en: "Did we leave early?" }
          },
          {
            infinitive: "dormir",
            meaning: "to sleep",
            auxiliary: "avoir",
            pastParticiple: "dormi",
            pattern: "dormir → dormi",
            note: "Irregular present pattern, but past participle ends in -i.",
            statement: { fr: "Ils ont bien dormi.", en: "They slept well." },
            negative: { fr: "Ils n’ont pas bien dormi.", en: "They did not sleep well." },
            question: { fr: "Ont-ils bien dormi ?", en: "Did they sleep well?" }
          },
          {
            infinitive: "boire",
            meaning: "to drink",
            auxiliary: "avoir",
            pastParticiple: "bu",
            pattern: "boire → bu",
            note: "Short irregular past participle.",
            statement: { fr: "Vous avez bu du café.", en: "You drank coffee." },
            negative: { fr: "Vous n’avez pas bu de café.", en: "You did not drink coffee." },
            question: { fr: "Avez-vous bu du café ?", en: "Did you drink coffee?" }
          },
          {
            infinitive: "voir",
            meaning: "to see",
            auxiliary: "avoir",
            pastParticiple: "vu",
            pattern: "voir → vu",
            note: "Short irregular past participle.",
            statement: { fr: "J’ai déjà vu ce film.", en: "I have already seen this movie." },
            negative: { fr: "Je n’ai pas encore vu ce film.", en: "I have not seen this movie yet." },
            question: { fr: "Est-ce que j’ai déjà vu ce film ?", en: "Have I already seen this movie?" }
          },
          {
            infinitive: "lire",
            meaning: "to read",
            auxiliary: "avoir",
            pastParticiple: "lu",
            pattern: "lire → lu",
            note: "Short irregular past participle.",
            statement: { fr: "Tu as lu le message.", en: "You read the message." },
            negative: { fr: "Tu n’as pas lu le message.", en: "You did not read the message." },
            question: { fr: "As-tu lu le message ?", en: "Did you read the message?" }
          },
          {
            infinitive: "faire",
            meaning: "to do / make",
            auxiliary: "avoir",
            pastParticiple: "fait",
            pattern: "faire → fait",
            note: "The final t is written but not pronounced.",
            statement: { fr: "Elle a beaucoup fait de sport.", en: "She exercised a lot." },
            negative: { fr: "Elle n’a pas beaucoup fait de sport.", en: "She did not exercise a lot." },
            question: { fr: "A-t-elle beaucoup fait de sport ?", en: "Did she exercise a lot?" }
          },
          {
            infinitive: "écrire",
            meaning: "to write",
            auxiliary: "avoir",
            pastParticiple: "écrit",
            pattern: "écrire → écrit",
            note: "Irregular past participle.",
            statement: { fr: "Nous avons écrit une lettre.", en: "We wrote a letter." },
            negative: { fr: "Nous n’avons pas écrit de lettre.", en: "We did not write a letter." },
            question: { fr: "Avons-nous écrit une lettre ?", en: "Did we write a letter?" }
          },
          {
            infinitive: "prendre",
            meaning: "to take",
            auxiliary: "avoir",
            pastParticiple: "pris",
            pattern: "prendre → pris",
            note: "Irregular past participle.",
            statement: { fr: "Ils ont pris le train.", en: "They took the train." },
            negative: { fr: "Ils n’ont pas pris le train.", en: "They did not take the train." },
            question: { fr: "Ont-ils pris le train ?", en: "Did they take the train?" }
          }
        ]
      }
    ];
