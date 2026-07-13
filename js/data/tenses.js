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
            infinitiveIpa: "/paʁle/",
            meaning: "to speak / talk",
            auxiliary: "avoir",
            pastParticiple: "parlé",
            pastParticipleIpa: "/paʁle/",
            pattern: "parler → parlé",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai bien parlé avec le professeur.", en: "I spoke well with the teacher." },
            negative: { fr: "Je n’ai pas bien parlé avec le professeur.", en: "I did not speak well with the teacher." },
            question: { fr: "Est-ce que j’ai bien parlé avec le professeur ?", en: "Did I speak well with the teacher?" }
          },
          {
            infinitive: "chercher",
            infinitiveIpa: "/ʃɛʁʃe/",
            meaning: "to look for",
            auxiliary: "avoir",
            pastParticiple: "cherché",
            pastParticipleIpa: "/ʃɛʁʃe/",
            pattern: "chercher → cherché",
            note: "Regular -er past participle.",
            statement: { fr: "Tu as cherché tes clés.", en: "You looked for your keys." },
            negative: { fr: "Tu n’as pas cherché tes clés.", en: "You did not look for your keys." },
            question: { fr: "As-tu cherché tes clés ?", en: "Did you look for your keys?" }
          },
          {
            infinitive: "manger",
            infinitiveIpa: "/mɑ̃ʒe/",
            meaning: "to eat",
            auxiliary: "avoir",
            pastParticiple: "mangé",
            pastParticipleIpa: "/mɑ̃ʒe/",
            pattern: "manger → mangé",
            note: "Regular -er past participle.",
            statement: { fr: "Il a beaucoup mangé au dîner.", en: "He ate a lot at dinner." },
            negative: { fr: "Il n’a pas beaucoup mangé au dîner.", en: "He did not eat a lot at dinner." },
            question: { fr: "A-t-il beaucoup mangé au dîner ?", en: "Did he eat a lot at dinner?" }
          },
          {
            infinitive: "inviter",
            infinitiveIpa: "/ɛ̃vite/",
            meaning: "to invite",
            auxiliary: "avoir",
            pastParticiple: "invité",
            pastParticipleIpa: "/ɛ̃vite/",
            pattern: "inviter → invité",
            note: "Regular -er past participle.",
            statement: { fr: "Nous avons invité nos amis.", en: "We invited our friends." },
            negative: { fr: "Nous n’avons pas invité nos amis.", en: "We did not invite our friends." },
            question: { fr: "Avons-nous invité nos amis ?", en: "Did we invite our friends?" }
          },
          {
            infinitive: "adorer",
            infinitiveIpa: "/a.dɔ.ʁe/",
            meaning: "to love / really like",
            auxiliary: "avoir",
            pastParticiple: "adoré",
            pastParticipleIpa: "/a.dɔ.ʁe/",
            pattern: "adorer → adoré",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai adoré ce concert.", en: "I loved this concert." },
            negative: { fr: "Je n’ai pas adoré ce concert.", en: "I did not love this concert." },
            question: { fr: "As-tu adoré ce concert ?", en: "Did you love this concert?" }
          },
          {
            infinitive: "détester",
            infinitiveIpa: "/de.tɛs.te/",
            meaning: "to hate / really dislike",
            auxiliary: "avoir",
            pastParticiple: "détesté",
            pastParticipleIpa: "/de.tɛs.te/",
            pattern: "détester → détesté",
            note: "Regular -er past participle.",
            statement: { fr: "Elle a détesté faire la queue.", en: "She hated waiting in line." },
            negative: { fr: "Elle n’a pas détesté faire la queue.", en: "She did not hate waiting in line." },
            question: { fr: "A-t-elle détesté faire la queue ?", en: "Did she hate waiting in line?" }
          },
          {
            infinitive: "préférer",
            infinitiveIpa: "/pʁe.fe.ʁe/",
            meaning: "to prefer",
            auxiliary: "avoir",
            pastParticiple: "préféré",
            pastParticipleIpa: "/pʁe.fe.ʁe/",
            pattern: "préférer → préféré",
            note: "Regular -er past participle; the present-tense accent change does not change the past participle.",
            statement: { fr: "Nous avons préféré le train à l’avion.", en: "We preferred the train to the plane." },
            negative: { fr: "Nous n’avons pas préféré le train à l’avion.", en: "We did not prefer the train to the plane." },
            question: { fr: "Avez-vous préféré le train à l’avion ?", en: "Did you prefer the train to the plane?" }
          },
          {
            infinitive: "arriver",
            infinitiveIpa: "/aʁive/",
            meaning: "to arrive",
            auxiliary: "être",
            pastParticiple: "arrivé(e)(s)",
            pastParticipleIpa: "/aʁive/",
            pattern: "arriver → arrivé",
            note: "Regular -er past participle; uses être when someone arrives.",
            statement: { fr: "Nous sommes arrivés à huit heures.", en: "We arrived at eight o’clock." },
            negative: { fr: "Nous ne sommes pas arrivés à huit heures.", en: "We did not arrive at eight o’clock." },
            question: { fr: "Sommes-nous arrivés à huit heures ?", en: "Did we arrive at eight o’clock?" }
          },
          {
            infinitive: "habiter",
            infinitiveIpa: "/abite/",
            meaning: "to live",
            auxiliary: "avoir",
            pastParticiple: "habité",
            pastParticipleIpa: "/abite/",
            pattern: "habiter → habité",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai habité à Paris.", en: "I lived in Paris." },
            negative: { fr: "Je n’ai pas habité à Paris.", en: "I did not live in Paris." },
            question: { fr: "As-tu habité à Paris ?", en: "Did you live in Paris?" }
          },
          {
            infinitive: "trouver",
            infinitiveIpa: "/tʁuve/",
            meaning: "to find / think",
            auxiliary: "avoir",
            pastParticiple: "trouvé",
            pastParticipleIpa: "/tʁuve/",
            pattern: "trouver → trouvé",
            note: "Regular -er past participle.",
            statement: { fr: "Elle a trouvé ses clés.", en: "She found her keys." },
            negative: { fr: "Elle n’a pas trouvé ses clés.", en: "She did not find her keys." },
            question: { fr: "A-t-elle trouvé ses clés ?", en: "Did she find her keys?" }
          },
          {
            infinitive: "regarder",
            infinitiveIpa: "/ʁəɡaʁde/",
            meaning: "to watch / look at",
            auxiliary: "avoir",
            pastParticiple: "regardé",
            pastParticipleIpa: "/ʁəɡaʁde/",
            pattern: "regarder → regardé",
            note: "Regular -er past participle.",
            statement: { fr: "Nous avons regardé un film.", en: "We watched a movie." },
            negative: { fr: "Nous n’avons pas regardé de film.", en: "We did not watch a movie." },
            question: { fr: "Qu’avons-nous regardé ?", en: "What did we watch?" }
          },
          {
            infinitive: "laisser",
            infinitiveIpa: "/lɛse/",
            meaning: "to let / leave",
            auxiliary: "avoir",
            pastParticiple: "laissé",
            pastParticipleIpa: "/lɛse/",
            pattern: "laisser → laissé",
            note: "Regular -er past participle. With another infinitive: laisser quelqu’un faire quelque chose.",
            statement: { fr: "J’ai laissé mon frère utiliser mon ordinateur.", en: "I let my brother use my computer." },
            negative: { fr: "Je n’ai pas laissé mon frère utiliser mon ordinateur.", en: "I did not let my brother use my computer." },
            question: { fr: "As-tu laissé ton frère utiliser ton ordinateur ?", en: "Did you let your brother use your computer?" }
          },
          {
            infinitive: "réserver",
            infinitiveIpa: "/ʁezɛʁve/",
            meaning: "to reserve / book",
            auxiliary: "avoir",
            pastParticiple: "réservé",
            pastParticipleIpa: "/ʁezɛʁve/",
            pattern: "réserver → réservé",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai réservé une table.", en: "I reserved a table." },
            negative: { fr: "Je n’ai pas réservé de table.", en: "I did not reserve a table." },
            question: { fr: "As-tu réservé une table ?", en: "Did you reserve a table?" }
          },
          {
            infinitive: "quitter",
            infinitiveIpa: "/kite/",
            meaning: "to leave / quit",
            auxiliary: "avoir",
            pastParticiple: "quitté",
            pastParticipleIpa: "/kite/",
            pattern: "quitter → quitté",
            note: "Regular -er past participle.",
            statement: { fr: "Elle a quitté la ville.", en: "She left town." },
            negative: { fr: "Elle n’a pas quitté la ville.", en: "She did not leave town." },
            question: { fr: "A-t-elle quitté la ville ?", en: "Did she leave town?" }
          },
          {
            infinitive: "passer",
            infinitiveIpa: "/pase/",
            meaning: "to pass / spend / stop by",
            auxiliary: "avoir",
            pastParticiple: "passé",
            pastParticipleIpa: "/pase/",
            pattern: "passer → passé",
            note: "Usually uses avoir when it means “spend time” or “pass by.”",
            statement: { fr: "Vous avez passé une bonne journée.", en: "You had a good day." },
            negative: { fr: "Vous n’avez pas passé une bonne journée.", en: "You did not have a good day." },
            question: { fr: "Avez-vous passé une bonne journée ?", en: "Did you have a good day?" }
          },
          {
            infinitive: "commencer",
            infinitiveIpa: "/kɔmɑ̃se/",
            meaning: "to begin / start",
            auxiliary: "avoir",
            pastParticiple: "commencé",
            pastParticipleIpa: "/kɔmɑ̃se/",
            pattern: "commencer → commencé",
            note: "Regular -er past participle.",
            statement: { fr: "Ils ont commencé le cours.", en: "They started the class." },
            negative: { fr: "Ils n’ont pas commencé le cours.", en: "They did not start the class." },
            question: { fr: "Ont-ils commencé le cours ?", en: "Did they start the class?" }
          },
          {
            infinitive: "voyager",
            infinitiveIpa: "/vwajaʒe/",
            meaning: "to travel",
            auxiliary: "avoir",
            pastParticiple: "voyagé",
            pastParticipleIpa: "/vwajaʒe/",
            pattern: "voyager → voyagé",
            note: "Regular -er past participle.",
            statement: { fr: "Elles ont voyagé en France.", en: "They traveled in France." },
            negative: { fr: "Elles n’ont pas voyagé en France.", en: "They did not travel in France." },
            question: { fr: "Où ont-elles voyagé ?", en: "Where did they travel?" }
          },
          {
            infinitive: "travailler",
            infinitiveIpa: "/tʁavaje/",
            meaning: "to work",
            auxiliary: "avoir",
            pastParticiple: "travaillé",
            pastParticipleIpa: "/tʁavaje/",
            pattern: "travailler → travaillé",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai beaucoup travaillé hier.", en: "I worked a lot yesterday." },
            negative: { fr: "Je n’ai pas beaucoup travaillé hier.", en: "I did not work a lot yesterday." },
            question: { fr: "As-tu beaucoup travaillé hier ?", en: "Did you work a lot yesterday?" }
          },
          {
            infinitive: "déjeuner",
            infinitiveIpa: "/deʒœne/",
            meaning: "to have lunch",
            auxiliary: "avoir",
            pastParticiple: "déjeuné",
            pastParticipleIpa: "/deʒœne/",
            pattern: "déjeuner → déjeuné",
            note: "Regular -er past participle.",
            statement: { fr: "Tu as déjeuné à midi.", en: "You had lunch at noon." },
            negative: { fr: "Tu n’as pas déjeuné à midi.", en: "You did not have lunch at noon." },
            question: { fr: "As-tu déjeuné à midi ?", en: "Did you have lunch at noon?" }
          },
          {
            infinitive: "acheter",
            infinitiveIpa: "/aʃte/",
            meaning: "to buy",
            auxiliary: "avoir",
            pastParticiple: "acheté",
            pastParticipleIpa: "/aʃte/",
            pattern: "acheter → acheté",
            note: "Regular -er past participle.",
            statement: { fr: "Il a acheté du pain.", en: "He bought bread." },
            negative: { fr: "Il n’a pas acheté de pain.", en: "He did not buy bread." },
            question: { fr: "Qu’a-t-il acheté ?", en: "What did he buy?" }
          },
          {
            infinitive: "rentrer",
            infinitiveIpa: "/ʁɑ̃tʁe/",
            meaning: "to return / go home",
            auxiliary: "être",
            pastParticiple: "rentré(e)(s)",
            pastParticipleIpa: "/ʁɑ̃tʁe/",
            pattern: "rentrer → rentré",
            note: "Often uses être when it means “to go/come back home.”",
            statement: { fr: "Elle est rentrée tard.", en: "She came home late." },
            negative: { fr: "Elle n’est pas rentrée tard.", en: "She did not come home late." },
            question: { fr: "Est-elle rentrée tard ?", en: "Did she come home late?" }
          },
          {
            infinitive: "demander",
            infinitiveIpa: "/dəmɑ̃de/",
            meaning: "to ask",
            auxiliary: "avoir",
            pastParticiple: "demandé",
            pastParticipleIpa: "/dəmɑ̃de/",
            pattern: "demander → demandé",
            note: "Regular -er past participle.",
            statement: { fr: "Nous avons demandé de l’aide.", en: "We asked for help." },
            negative: { fr: "Nous n’avons pas demandé d’aide.", en: "We did not ask for help." },
            question: { fr: "Avons-nous demandé de l’aide ?", en: "Did we ask for help?" }
          },
          {
            infinitive: "jouer",
            infinitiveIpa: "/ʒwe/",
            meaning: "to play",
            auxiliary: "avoir",
            pastParticiple: "joué",
            pastParticipleIpa: "/ʒwe/",
            pattern: "jouer → joué",
            note: "Regular -er past participle.",
            statement: { fr: "Ils ont joué au foot.", en: "They played soccer." },
            negative: { fr: "Ils n’ont pas joué au foot.", en: "They did not play soccer." },
            question: { fr: "À quoi ont-ils joué ?", en: "What did they play?" }
          },
          {
            infinitive: "nager",
            infinitiveIpa: "/naʒe/",
            meaning: "to swim",
            auxiliary: "avoir",
            pastParticiple: "nagé",
            pastParticipleIpa: "/naʒe/",
            pattern: "nager → nagé",
            note: "Regular -er past participle.",
            statement: { fr: "Vous avez nagé ce matin.", en: "You swam this morning." },
            negative: { fr: "Vous n’avez pas nagé ce matin.", en: "You did not swim this morning." },
            question: { fr: "Avez-vous nagé ce matin ?", en: "Did you swim this morning?" }
          },
          {
            infinitive: "tourner",
            infinitiveIpa: "/tuʁne/",
            meaning: "to turn",
            auxiliary: "avoir",
            pastParticiple: "tourné",
            pastParticipleIpa: "/tuʁne/",
            pattern: "tourner → tourné",
            note: "Regular -er past participle.",
            statement: { fr: "J’ai tourné à gauche.", en: "I turned left." },
            negative: { fr: "Je n’ai pas tourné à gauche.", en: "I did not turn left." },
            question: { fr: "As-tu tourné à gauche ?", en: "Did you turn left?" }
          },
          {
            infinitive: "coûter",
            infinitiveIpa: "/kute/",
            meaning: "to cost",
            auxiliary: "avoir",
            pastParticiple: "coûté",
            pastParticipleIpa: "/kute/",
            pattern: "coûter → coûté",
            note: "Regular -er past participle.",
            statement: { fr: "Le billet a coûté vingt euros.", en: "The ticket cost twenty euros." },
            negative: { fr: "Le billet n’a pas coûté vingt euros.", en: "The ticket did not cost twenty euros." },
            question: { fr: "Combien le billet a-t-il coûté ?", en: "How much did the ticket cost?" }
          }
        ]
      },
      {
        key: "ir",
        title: "-ir verbs → -i",
        indexTitle: "-ir → -i",
        headers: {
          verb: "Verb",
          participle: "Passé composé",
          examples: "Statement / negation / question"
        },
        verbs: [
          {
            infinitive: "finir",
            infinitiveIpa: "/finiʁ/",
            meaning: "to finish",
            auxiliary: "avoir",
            pastParticiple: "fini",
            pastParticipleIpa: "/fini/",
            pattern: "finir → fini",
            note: "Regular -ir past participle.",
            statement: { fr: "J’ai déjà fini mes devoirs.", en: "I have already finished my homework." },
            negative: { fr: "Je n’ai pas encore fini mes devoirs.", en: "I have not finished my homework yet." },
            question: { fr: "Est-ce que j’ai déjà fini mes devoirs ?", en: "Have I already finished my homework?" }
          },
          {
            infinitive: "choisir",
            infinitiveIpa: "/ʃwaziʁ/",
            meaning: "to choose",
            auxiliary: "avoir",
            pastParticiple: "choisi",
            pastParticipleIpa: "/ʃwazi/",
            pattern: "choisir → choisi",
            note: "Regular -ir past participle.",
            statement: { fr: "Tu as bien choisi le restaurant.", en: "You chose the restaurant well." },
            negative: { fr: "Tu n’as pas bien choisi le restaurant.", en: "You did not choose the restaurant well." },
            question: { fr: "As-tu bien choisi le restaurant ?", en: "Did you choose the restaurant well?" }
          },
          {
            infinitive: "réussir",
            infinitiveIpa: "/ʁeysiʁ/",
            meaning: "to succeed / pass",
            auxiliary: "avoir",
            pastParticiple: "réussi",
            pastParticipleIpa: "/ʁeysi/",
            pattern: "réussir → réussi",
            note: "Regular -ir past participle.",
            statement: { fr: "Elle a réussi l’examen.", en: "She passed the exam." },
            negative: { fr: "Elle n’a pas réussi l’examen.", en: "She did not pass the exam." },
            question: { fr: "A-t-elle réussi l’examen ?", en: "Did she pass the exam?" }
          },
          {
            infinitive: "unir",
            infinitiveIpa: "/yniʁ/",
            meaning: "to unite",
            auxiliary: "avoir",
            pastParticiple: "uni",
            pastParticipleIpa: "/yni/",
            pattern: "unir → uni",
            note: "Regular -ir past participle.",
            statement: { fr: "La fête a uni la famille.", en: "The party brought the family together." },
            negative: { fr: "La fête n’a pas uni la famille.", en: "The party did not bring the family together." },
            question: { fr: "La fête a-t-elle uni la famille ?", en: "Did the party bring the family together?" }
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
            infinitiveIpa: "/avwaʁ/",
            meaning: "to have",
            auxiliary: "avoir",
            pastParticiple: "eu",
            pastParticipleIpa: "/y/",
            pattern: "avoir → eu",
            note: "Eu is pronounced like /y/.",
            statement: { fr: "J’ai eu de la chance.", en: "I was lucky." },
            negative: { fr: "Je n’ai pas eu de chance.", en: "I was not lucky." },
            question: { fr: "Est-ce que j’ai eu de la chance ?", en: "Was I lucky?" }
          },
          {
            infinitive: "être",
            infinitiveIpa: "/ɛtʁ/",
            meaning: "to be",
            auxiliary: "avoir",
            pastParticiple: "été",
            pastParticipleIpa: "/ete/",
            pattern: "être → été",
            note: "Être uses avoir as its helper in passé composé.",
            statement: { fr: "Tu as été très patient.", en: "You were very patient." },
            negative: { fr: "Tu n’as pas été très patient.", en: "You were not very patient." },
            question: { fr: "As-tu été très patient ?", en: "Were you very patient?" }
          },
          {
            infinitive: "aller",
            infinitiveIpa: "/ale/",
            meaning: "to go",
            auxiliary: "être",
            pastParticiple: "allé(e)(s)",
            pastParticipleIpa: "/ale/",
            pattern: "aller → allé",
            note: "Uses être; agree the participle with the subject.",
            statement: { fr: "Elle est déjà allée au marché.", en: "She has already gone to the market." },
            negative: { fr: "Elle n’est pas encore allée au marché.", en: "She has not gone to the market yet." },
            question: { fr: "Est-elle déjà allée au marché ?", en: "Has she already gone to the market?" }
          },
          {
            infinitive: "venir",
            infinitiveIpa: "/vəniʁ/",
            meaning: "to come",
            auxiliary: "être",
            pastParticiple: "venu(e)(s)",
            pastParticipleIpa: "/vəny/",
            pattern: "venir → venu",
            note: "Uses être; agree the participle with the subject.",
            statement: { fr: "Nous sommes venus en train.", en: "We came by train." },
            negative: { fr: "Nous ne sommes pas venus en train.", en: "We did not come by train." },
            question: { fr: "Sommes-nous venus en train ?", en: "Did we come by train?" }
          },
          {
            infinitive: "partir",
            infinitiveIpa: "/paʁtiʁ/",
            meaning: "to leave",
            auxiliary: "être",
            pastParticiple: "parti(e)(s)",
            pastParticipleIpa: "/paʁti/",
            pattern: "partir → parti",
            note: "Uses être; agree the participle with the subject.",
            statement: { fr: "Nous sommes partis tôt.", en: "We left early." },
            negative: { fr: "Nous ne sommes pas partis tôt.", en: "We did not leave early." },
            question: { fr: "Sommes-nous partis tôt ?", en: "Did we leave early?" }
          },
          {
            infinitive: "dormir",
            infinitiveIpa: "/dɔʁmiʁ/",
            meaning: "to sleep",
            auxiliary: "avoir",
            pastParticiple: "dormi",
            pastParticipleIpa: "/dɔʁmi/",
            pattern: "dormir → dormi",
            note: "Irregular present pattern, but past participle ends in -i.",
            statement: { fr: "Ils ont bien dormi.", en: "They slept well." },
            negative: { fr: "Ils n’ont pas bien dormi.", en: "They did not sleep well." },
            question: { fr: "Ont-ils bien dormi ?", en: "Did they sleep well?" }
          },
          {
            infinitive: "sortir",
            infinitiveIpa: "/sɔʁtiʁ/",
            meaning: "to go out / leave",
            auxiliary: "être",
            pastParticiple: "sorti(e)(s)",
            pastParticipleIpa: "/sɔʁti/",
            pattern: "sortir → sorti",
            note: "Uses être when it means “to go out / leave.”",
            statement: { fr: "Elle est sortie après le dîner.", en: "She went out after dinner." },
            negative: { fr: "Elle n’est pas sortie après le dîner.", en: "She did not go out after dinner." },
            question: { fr: "Est-elle sortie après le dîner ?", en: "Did she go out after dinner?" }
          },
          {
            infinitive: "servir",
            infinitiveIpa: "/sɛʁviʁ/",
            meaning: "to serve",
            auxiliary: "avoir",
            pastParticiple: "servi",
            pastParticipleIpa: "/sɛʁvi/",
            pattern: "servir → servi",
            note: "Irregular present pattern, but past participle ends in -i.",
            statement: { fr: "Vous avez servi le dîner.", en: "You served dinner." },
            negative: { fr: "Vous n’avez pas servi le dîner.", en: "You did not serve dinner." },
            question: { fr: "Avez-vous servi le dîner ?", en: "Did you serve dinner?" }
          },
          {
            infinitive: "sentir",
            infinitiveIpa: "/sɑ̃tiʁ/",
            meaning: "to smell / feel",
            auxiliary: "avoir",
            pastParticiple: "senti",
            pastParticipleIpa: "/sɑ̃ti/",
            pattern: "sentir → senti",
            note: "Irregular present pattern, but past participle ends in -i.",
            statement: { fr: "J’ai senti le parfum.", en: "I smelled the perfume." },
            negative: { fr: "Je n’ai pas senti le parfum.", en: "I did not smell the perfume." },
            question: { fr: "As-tu senti le parfum ?", en: "Did you smell the perfume?" }
          },
          {
            infinitive: "boire",
            infinitiveIpa: "/bwaʁ/",
            meaning: "to drink",
            auxiliary: "avoir",
            pastParticiple: "bu",
            pastParticipleIpa: "/by/",
            pattern: "boire → bu",
            note: "Short irregular past participle.",
            statement: { fr: "Vous avez bu du café.", en: "You drank coffee." },
            negative: { fr: "Vous n’avez pas bu de café.", en: "You did not drink coffee." },
            question: { fr: "Avez-vous bu du café ?", en: "Did you drink coffee?" }
          },
          {
            infinitive: "dire",
            infinitiveIpa: "/diʁ/",
            meaning: "to say / tell",
            auxiliary: "avoir",
            pastParticiple: "dit",
            pastParticipleIpa: "/di/",
            pattern: "dire → dit",
            note: "Irregular past participle; the final t is written but not pronounced.",
            statement: { fr: "Elle a dit la vérité à Marie.", en: "She told Marie the truth." },
            negative: { fr: "Elle n’a pas dit la vérité à Marie.", en: "She did not tell Marie the truth." },
            question: { fr: "Qu’a-t-elle dit à Marie ?", en: "What did she tell Marie?" }
          },
          {
            infinitive: "voir",
            infinitiveIpa: "/vwaʁ/",
            meaning: "to see",
            auxiliary: "avoir",
            pastParticiple: "vu",
            pastParticipleIpa: "/vy/",
            pattern: "voir → vu",
            note: "Short irregular past participle.",
            statement: { fr: "J’ai déjà vu ce film.", en: "I have already seen this movie." },
            negative: { fr: "Je n’ai pas encore vu ce film.", en: "I have not seen this movie yet." },
            question: { fr: "Est-ce que j’ai déjà vu ce film ?", en: "Have I already seen this movie?" }
          },
          {
            infinitive: "lire",
            infinitiveIpa: "/liʁ/",
            meaning: "to read",
            auxiliary: "avoir",
            pastParticiple: "lu",
            pastParticipleIpa: "/ly/",
            pattern: "lire → lu",
            note: "Short irregular past participle.",
            statement: { fr: "Tu as lu le message.", en: "You read the message." },
            negative: { fr: "Tu n’as pas lu le message.", en: "You did not read the message." },
            question: { fr: "As-tu lu le message ?", en: "Did you read the message?" }
          },
          {
            infinitive: "offrir",
            infinitiveIpa: "/ɔfʁiʁ/",
            meaning: "to offer / give",
            auxiliary: "avoir",
            pastParticiple: "offert",
            pastParticipleIpa: "/ɔfɛʁ/",
            pattern: "offrir → offert",
            note: "Irregular past participle; the final t is written but not pronounced.",
            statement: { fr: "Nous avons offert un cadeau à notre professeur.", en: "We gave our teacher a gift." },
            negative: { fr: "Nous n’avons pas offert de cadeau à notre professeur.", en: "We did not give our teacher a gift." },
            question: { fr: "Avons-nous offert un cadeau à notre professeur ?", en: "Did we give our teacher a gift?" }
          },
          {
            infinitive: "ouvrir",
            infinitiveIpa: "/uvʁiʁ/",
            meaning: "to open",
            auxiliary: "avoir",
            pastParticiple: "ouvert",
            pastParticipleIpa: "/uvɛʁ/",
            pattern: "ouvrir → ouvert",
            note: "Irregular past participle; the final t is written but not pronounced.",
            statement: { fr: "Tu as ouvert la fenêtre.", en: "You opened the window." },
            negative: { fr: "Tu n’as pas ouvert la fenêtre.", en: "You did not open the window." },
            question: { fr: "As-tu ouvert la fenêtre ?", en: "Did you open the window?" }
          },
          {
            infinitive: "faire",
            infinitiveIpa: "/fɛʁ/",
            meaning: "to do / make",
            auxiliary: "avoir",
            pastParticiple: "fait",
            pastParticipleIpa: "/fɛ/",
            pattern: "faire → fait",
            note: "The final t is written but not pronounced.",
            statement: { fr: "Elle a beaucoup fait de sport.", en: "She exercised a lot." },
            negative: { fr: "Elle n’a pas beaucoup fait de sport.", en: "She did not exercise a lot." },
            question: { fr: "A-t-elle beaucoup fait de sport ?", en: "Did she exercise a lot?" }
          },
          {
            infinitive: "écrire",
            infinitiveIpa: "/ekʁiʁ/",
            meaning: "to write",
            auxiliary: "avoir",
            pastParticiple: "écrit",
            pastParticipleIpa: "/ekʁi/",
            pattern: "écrire → écrit",
            note: "Irregular past participle.",
            statement: { fr: "Nous avons écrit une lettre.", en: "We wrote a letter." },
            negative: { fr: "Nous n’avons pas écrit de lettre.", en: "We did not write a letter." },
            question: { fr: "Avons-nous écrit une lettre ?", en: "Did we write a letter?" }
          },
          {
            infinitive: "prendre",
            infinitiveIpa: "/pʁɑ̃dʁ/",
            meaning: "to take",
            auxiliary: "avoir",
            pastParticiple: "pris",
            pastParticipleIpa: "/pʁi/",
            pattern: "prendre → pris",
            note: "Irregular past participle.",
            statement: { fr: "Ils ont pris le train.", en: "They took the train." },
            negative: { fr: "Ils n’ont pas pris le train.", en: "They did not take the train." },
            question: { fr: "Ont-ils pris le train ?", en: "Did they take the train?" }
          },
          {
            infinitive: "devoir",
            infinitiveIpa: "/dəvwaʁ/",
            meaning: "must / to have to / to owe",
            auxiliary: "avoir",
            pastParticiple: "dû",
            pastParticipleIpa: "/dy/",
            pattern: "devoir → dû",
            note: "Irregular past participle. In passé composé, it often means “had to”; with money or objects, it can mean “owed.”",
            statement: { fr: "J’ai dû travailler tard.", en: "I had to work late." },
            negative: { fr: "Je n’ai pas dû travailler tard.", en: "I did not have to work late." },
            question: { fr: "Ai-je dû travailler tard ?", en: "Did I have to work late?" }
          },
          {
            infinitive: "savoir",
            infinitiveIpa: "/savwaʁ/",
            meaning: "to know / to know how to",
            auxiliary: "avoir",
            pastParticiple: "su",
            pastParticipleIpa: "/sy/",
            pattern: "savoir → su",
            note: "Irregular past participle. In passé composé, it can mean “knew,” “found out,” or “managed to know.”",
            statement: { fr: "J’ai su la réponse.", en: "I knew / found out the answer." },
            negative: { fr: "Je n’ai pas su la réponse.", en: "I did not know / find out the answer." },
            question: { fr: "As-tu su la réponse ?", en: "Did you know / find out the answer?" }
          },
          {
            infinitive: "connaître",
            infinitiveIpa: "/kɔnɛtʁ/",
            meaning: "to know / be familiar with",
            auxiliary: "avoir",
            pastParticiple: "connu",
            pastParticipleIpa: "/kɔny/",
            pattern: "connaître → connu",
            note: "Irregular past participle. In passé composé, it can mean “knew,” “met,” or “experienced.”",
            statement: { fr: "Tu as connu Marie à l’université.", en: "You knew / met Marie at university." },
            negative: { fr: "Tu n’as pas connu Marie à l’université.", en: "You did not know / meet Marie at university." },
            question: { fr: "As-tu connu Marie à l’université ?", en: "Did you know / meet Marie at university?" }
          },
          {
            infinitive: "pouvoir",
            infinitiveIpa: "/puvwaʁ/",
            meaning: "can / to be able to",
            auxiliary: "avoir",
            pastParticiple: "pu",
            pastParticipleIpa: "/py/",
            pattern: "pouvoir → pu",
            note: "Irregular past participle. In passé composé, it often means “was able to / managed to.”",
            statement: { fr: "J’ai pu venir hier.", en: "I was able to come yesterday." },
            negative: { fr: "Je n’ai pas pu venir hier.", en: "I was not able to come yesterday." },
            question: { fr: "Ai-je pu venir hier ?", en: "Was I able to come yesterday?" }
          },
          {
            infinitive: "vouloir",
            infinitiveIpa: "/vulwaʁ/",
            meaning: "to want",
            auxiliary: "avoir",
            pastParticiple: "voulu",
            pastParticipleIpa: "/vuly/",
            pattern: "vouloir → voulu",
            note: "Irregular past participle. In passé composé, it often means “wanted to / tried to.”",
            statement: { fr: "Elle a voulu partir tôt.", en: "She wanted to leave early." },
            negative: { fr: "Elle n’a pas voulu partir tôt.", en: "She did not want to leave early." },
            question: { fr: "A-t-elle voulu partir tôt ?", en: "Did she want to leave early?" }
          },
          {
            infinitive: "apprendre",
            infinitiveIpa: "/apʁɑ̃dʁ/",
            meaning: "to learn",
            auxiliary: "avoir",
            pastParticiple: "appris",
            pastParticipleIpa: "/apʁi/",
            pattern: "apprendre → appris",
            note: "Same past-participle family as prendre → pris.",
            statement: { fr: "Tu as appris une nouvelle règle.", en: "You learned a new rule." },
            negative: { fr: "Tu n’as pas appris de nouvelle règle.", en: "You did not learn a new rule." },
            question: { fr: "As-tu appris une nouvelle règle ?", en: "Did you learn a new rule?" }
          },
          {
            infinitive: "tenir",
            infinitiveIpa: "/təniʁ/",
            meaning: "to hold / keep",
            auxiliary: "avoir",
            pastParticiple: "tenu",
            pastParticipleIpa: "/təny/",
            pattern: "tenir → tenu",
            note: "Irregular past participle; it does not follow the regular -ir → -i pattern.",
            statement: { fr: "Il a tenu sa promesse.", en: "He kept his promise." },
            negative: { fr: "Il n’a pas tenu sa promesse.", en: "He did not keep his promise." },
            question: { fr: "A-t-il tenu sa promesse ?", en: "Did he keep his promise?" }
          },
          {
            infinitive: "falloir",
            infinitiveIpa: "/falwaʁ/",
            meaning: "to be necessary",
            auxiliary: "avoir",
            pastParticiple: "fallu",
            pastParticipleIpa: "/faly/",
            pattern: "falloir → fallu",
            note: "Used impersonally: il faut → il a fallu.",
            statement: { fr: "Il a fallu réserver une table.", en: "It was necessary to reserve a table." },
            negative: { fr: "Il n’a pas fallu réserver de table.", en: "It was not necessary to reserve a table." },
            question: { fr: "A-t-il fallu réserver une table ?", en: "Was it necessary to reserve a table?" }
          }
        ]
      },
      {
        key: "pronominal",
        title: "Pronominal verbs → être + past participle",
        indexTitle: "Pronominal",
        headers: {
          verb: "Verb",
          participle: "Passé composé",
          examples: "Statement / negation / question"
        },
        verbs: [
          {
            infinitive: "se laver",
            infinitiveIpa: "/sə lave/",
            meaning: "to wash oneself",
            auxiliary: "être",
            pastParticiple: "lavé(e)(s)",
            pastParticipleIpa: "/lave/",
            pattern: "se laver → lavé",
            note: "Pronominal verbs use être in passé composé.",
            statement: { fr: "Je me suis lavé les mains.", en: "I washed my hands." },
            negative: { fr: "Je ne me suis pas lavé les mains.", en: "I did not wash my hands." },
            question: { fr: "Est-ce que je me suis lavé les mains ?", en: "Did I wash my hands?" }
          },
          {
            infinitive: "se lever",
            infinitiveIpa: "/sə ləve/",
            meaning: "to get up",
            auxiliary: "être",
            pastParticiple: "levé(e)(s)",
            pastParticipleIpa: "/ləve/",
            pattern: "se lever → levé",
            note: "Pronominal verbs use être in passé composé.",
            statement: { fr: "Tu t’es levé tôt.", en: "You got up early." },
            negative: { fr: "Tu ne t’es pas levé tôt.", en: "You did not get up early." },
            question: { fr: "T’es-tu levé tôt ?", en: "Did you get up early?" }
          },
          {
            infinitive: "se reposer",
            infinitiveIpa: "/sə ʁəpoze/",
            meaning: "to rest",
            auxiliary: "être",
            pastParticiple: "reposé(e)(s)",
            pastParticipleIpa: "/ʁəpoze/",
            pattern: "se reposer → reposé",
            note: "Pronominal verbs use être in passé composé.",
            statement: { fr: "Il s’est reposé après le travail.", en: "He rested after work." },
            negative: { fr: "Il ne s’est pas reposé après le travail.", en: "He did not rest after work." },
            question: { fr: "S’est-il reposé après le travail ?", en: "Did he rest after work?" }
          },
          {
            infinitive: "s’appeler",
            infinitiveIpa: "/saple/",
            meaning: "to be called / call oneself",
            auxiliary: "être",
            pastParticiple: "appelé(e)(s)",
            pastParticipleIpa: "/aple/",
            pattern: "s’appeler → appelé",
            note: "Less common in passé composé, but possible when someone called themselves by a name.",
            statement: { fr: "Il s’est appelé Paul dans le jeu.", en: "He called himself Paul in the game." },
            negative: { fr: "Il ne s’est pas appelé Paul dans le jeu.", en: "He did not call himself Paul in the game." },
            question: { fr: "Comment s’est-il appelé dans le jeu ?", en: "What did he call himself in the game?" }
          },
          {
            infinitive: "s’habiller",
            infinitiveIpa: "/sabije/",
            meaning: "to get dressed",
            auxiliary: "être",
            pastParticiple: "habillé(e)(s)",
            pastParticipleIpa: "/abije/",
            pattern: "s’habiller → habillé",
            note: "Pronominal verbs use être in passé composé.",
            statement: { fr: "Elle s’est habillée vite.", en: "She got dressed quickly." },
            negative: { fr: "Elle ne s’est pas habillée vite.", en: "She did not get dressed quickly." },
            question: { fr: "S’est-elle habillée vite ?", en: "Did she get dressed quickly?" }
          },
          {
            infinitive: "se trouver",
            infinitiveIpa: "/sə tʁuve/",
            meaning: "to be located / to find oneself",
            auxiliary: "être",
            pastParticiple: "trouvé(e)(s)",
            pastParticipleIpa: "/tʁuve/",
            pattern: "se trouver → trouvé",
            note: "With être in passé composé, it often means “found oneself / ended up” in a place.",
            statement: { fr: "Nous nous sommes trouvés devant la gare.", en: "We found ourselves in front of the train station." },
            negative: { fr: "Nous ne nous sommes pas trouvés devant la gare.", en: "We did not find ourselves in front of the train station." },
            question: { fr: "Nous sommes-nous trouvés devant la gare ?", en: "Did we find ourselves in front of the train station?" }
          },
          {
            infinitive: "se promener",
            infinitiveIpa: "/sə pʁɔmne/",
            meaning: "to take a walk / stroll",
            auxiliary: "être",
            pastParticiple: "promené(e)(s)",
            pastParticipleIpa: "/pʁɔmne/",
            pattern: "se promener → promené",
            note: "Pronominal verbs use être in passé composé.",
            statement: { fr: "Nous nous sommes promenés dans le parc.", en: "We took a walk in the park." },
            negative: { fr: "Nous ne nous sommes pas promenés dans le parc.", en: "We did not take a walk in the park." },
            question: { fr: "Nous sommes-nous promenés dans le parc ?", en: "Did we take a walk in the park?" }
          }
        ]
      }
    ];

    const etreAuxiliaryVerbs = [
      {
        infinitive: "aller",
        infinitiveIpa: "/ale/",
        pastParticiple: "allé(e)(s)",
        pastParticipleIpa: "/ale/",
        meaning: "to go",
        note: "Uses être for movement from one place to another.",
        etreExamples: [
          { fr: "Elle est allée au marché.", en: "She went to the market.", negative: "Elle n’est pas allée au marché.", negativeEn: "She did not go to the market.", question: "Est-elle allée au marché ?", questionEn: "Did she go to the market?" }
        ]
      },
      {
        infinitive: "venir",
        infinitiveIpa: "/vəniʁ/",
        pastParticiple: "venu(e)(s)",
        pastParticipleIpa: "/vəny/",
        meaning: "to come",
        note: "Uses être; the past participle agrees with the subject.",
        etreExamples: [
          { fr: "Ils sont venus dîner.", en: "They came to have dinner.", negative: "Ils ne sont pas venus dîner.", negativeEn: "They did not come to have dinner.", question: "Sont-ils venus dîner ?", questionEn: "Did they come to have dinner?" }
        ]
      },
      {
        infinitive: "arriver",
        infinitiveIpa: "/aʁive/",
        pastParticiple: "arrivé(e)(s)",
        pastParticipleIpa: "/aʁive/",
        meaning: "to arrive",
        note: "Uses être for arriving.",
        etreExamples: [
          { fr: "Nous sommes arrivés à huit heures.", en: "We arrived at eight o’clock.", negative: "Nous ne sommes pas arrivés à huit heures.", negativeEn: "We did not arrive at eight o’clock.", question: "Sommes-nous arrivés à huit heures ?", questionEn: "Did we arrive at eight o’clock?" }
        ]
      },
      {
        infinitive: "partir",
        infinitiveIpa: "/paʁtiʁ/",
        pastParticiple: "parti(e)(s)",
        pastParticipleIpa: "/paʁti/",
        meaning: "to leave",
        note: "Uses être for leaving.",
        etreExamples: [
          { fr: "Tu es parti tôt.", en: "You left early.", negative: "Tu n’es pas parti tôt.", negativeEn: "You did not leave early.", question: "Es-tu parti tôt ?", questionEn: "Did you leave early?" }
        ]
      },
      {
        infinitive: "entrer",
        infinitiveIpa: "/ɑ̃tʁe/",
        pastParticiple: "entré(e)(s)",
        pastParticipleIpa: "/ɑ̃tʁe/",
        meaning: "to enter / go in",
        note: "Uses être when the subject enters.",
        etreExamples: [
          { fr: "Il est entré dans la classe.", en: "He entered the classroom.", negative: "Il n’est pas entré dans la classe.", negativeEn: "He did not enter the classroom.", question: "Est-il entré dans la classe ?", questionEn: "Did he enter the classroom?" }
        ],
        avoirNote: "Uses avoir with a direct object, especially in practical phrases like entering a code.",
        avoirExamples: [
          { fr: "Tu as entré le code.", en: "You entered the code.", negative: "Tu n’as pas entré le code.", negativeEn: "You did not enter the code.", question: "As-tu entré le code ?", questionEn: "Did you enter the code?" }
        ]
      },
      {
        infinitive: "sortir",
        infinitiveIpa: "/sɔʁtiʁ/",
        pastParticiple: "sorti(e)(s)",
        pastParticipleIpa: "/sɔʁti/",
        meaning: "to go out / take out",
        note: "Uses être when the subject goes out.",
        etreExamples: [
          { fr: "Elle est sortie du bureau.", en: "She left the office.", negative: "Elle n’est pas sortie du bureau.", negativeEn: "She did not leave the office.", question: "Est-elle sortie du bureau ?", questionEn: "Did she leave the office?" }
        ],
        avoirNote: "Uses avoir when someone takes something out.",
        avoirExamples: [
          { fr: "Elle a sorti les clés de son sac.", en: "She took the keys out of her bag.", negative: "Elle n’a pas sorti les clés de son sac.", negativeEn: "She did not take the keys out of her bag.", question: "A-t-elle sorti les clés de son sac ?", questionEn: "Did she take the keys out of her bag?" }
        ]
      },
      {
        infinitive: "monter",
        infinitiveIpa: "/mɔ̃te/",
        pastParticiple: "monté(e)(s)",
        pastParticipleIpa: "/mɔ̃te/",
        meaning: "to go up / take up",
        note: "Uses être when the subject goes up.",
        etreExamples: [
          { fr: "Nous sommes montés au troisième étage.", en: "We went up to the third floor.", negative: "Nous ne sommes pas montés au troisième étage.", negativeEn: "We did not go up to the third floor.", question: "Sommes-nous montés au troisième étage ?", questionEn: "Did we go up to the third floor?" }
        ],
        avoirNote: "Uses avoir when someone carries or takes something up.",
        avoirExamples: [
          { fr: "Nous avons monté les valises.", en: "We carried the suitcases upstairs.", negative: "Nous n’avons pas monté les valises.", negativeEn: "We did not carry the suitcases upstairs.", question: "Avons-nous monté les valises ?", questionEn: "Did we carry the suitcases upstairs?" }
        ]
      },
      {
        infinitive: "descendre",
        infinitiveIpa: "/desɑ̃dʁ/",
        pastParticiple: "descendu(e)(s)",
        pastParticipleIpa: "/desɑ̃dy/",
        meaning: "to go down / take down",
        note: "Uses être when the subject goes down.",
        etreExamples: [
          { fr: "Il est descendu du train.", en: "He got off the train.", negative: "Il n’est pas descendu du train.", negativeEn: "He did not get off the train.", question: "Est-il descendu du train ?", questionEn: "Did he get off the train?" }
        ],
        avoirNote: "Uses avoir when someone takes something down.",
        avoirExamples: [
          { fr: "Il a descendu les cartons à la cave.", en: "He took the boxes down to the cellar.", negative: "Il n’a pas descendu les cartons à la cave.", negativeEn: "He did not take the boxes down to the cellar.", question: "A-t-il descendu les cartons à la cave ?", questionEn: "Did he take the boxes down to the cellar?" }
        ]
      },
      {
        infinitive: "rentrer",
        infinitiveIpa: "/ʁɑ̃tʁe/",
        pastParticiple: "rentré(e)(s)",
        pastParticipleIpa: "/ʁɑ̃tʁe/",
        meaning: "to return home / bring in",
        note: "Uses être when the subject returns home or goes back in.",
        etreExamples: [
          { fr: "Je suis rentré tard.", en: "I came home late.", negative: "Je ne suis pas rentré tard.", negativeEn: "I did not come home late.", question: "Suis-je rentré tard ?", questionEn: "Did I come home late?" }
        ],
        avoirNote: "Uses avoir when someone brings something in.",
        avoirExamples: [
          { fr: "J’ai rentré la voiture au garage.", en: "I brought the car into the garage.", negative: "Je n’ai pas rentré la voiture au garage.", negativeEn: "I did not bring the car into the garage.", question: "Ai-je rentré la voiture au garage ?", questionEn: "Did I bring the car into the garage?" }
        ]
      },
      {
        infinitive: "revenir",
        infinitiveIpa: "/ʁəvəniʁ/",
        pastParticiple: "revenu(e)(s)",
        pastParticipleIpa: "/ʁəvəny/",
        meaning: "to come back",
        note: "Uses être, like venir.",
        etreExamples: [
          { fr: "Elle est revenue hier soir.", en: "She came back last night.", negative: "Elle n’est pas revenue hier soir.", negativeEn: "She did not come back last night.", question: "Est-elle revenue hier soir ?", questionEn: "Did she come back last night?" }
        ]
      },
      {
        infinitive: "retourner",
        infinitiveIpa: "/ʁətuʁne/",
        pastParticiple: "retourné(e)(s)",
        pastParticipleIpa: "/ʁətuʁne/",
        meaning: "to return / turn over",
        note: "Uses être when the subject returns to a place.",
        etreExamples: [
          { fr: "Ils sont retournés en France.", en: "They returned to France.", negative: "Ils ne sont pas retournés en France.", negativeEn: "They did not return to France.", question: "Sont-ils retournés en France ?", questionEn: "Did they return to France?" }
        ],
        avoirNote: "Uses avoir when someone turns something over or sends something back.",
        avoirExamples: [
          { fr: "Il a retourné la crêpe.", en: "He flipped the crepe.", negative: "Il n’a pas retourné la crêpe.", negativeEn: "He did not flip the crepe.", question: "A-t-il retourné la crêpe ?", questionEn: "Did he flip the crepe?" }
        ]
      },
      {
        infinitive: "rester",
        infinitiveIpa: "/ʁɛste/",
        pastParticiple: "resté(e)(s)",
        pastParticipleIpa: "/ʁɛste/",
        meaning: "to stay",
        note: "Uses être even though it is not a big movement verb.",
        etreExamples: [
          { fr: "Nous sommes restés à la maison.", en: "We stayed home.", negative: "Nous ne sommes pas restés à la maison.", negativeEn: "We did not stay home.", question: "Sommes-nous restés à la maison ?", questionEn: "Did we stay home?" }
        ]
      },
      {
        infinitive: "passer",
        infinitiveIpa: "/pase/",
        pastParticiple: "passé(e)(s)",
        pastParticipleIpa: "/pase/",
        meaning: "to pass by / spend / take",
        note: "Uses être when the subject passes by or stops by.",
        etreExamples: [
          { fr: "Elle est passée chez moi.", en: "She stopped by my place.", negative: "Elle n’est pas passée chez moi.", negativeEn: "She did not stop by my place.", question: "Est-elle passée chez moi ?", questionEn: "Did she stop by my place?" }
        ],
        avoirNote: "Uses avoir for spending time, taking an exam, or passing something.",
        avoirExamples: [
          { fr: "Elle a passé deux heures au café.", en: "She spent two hours at the cafe.", negative: "Elle n’a pas passé deux heures au café.", negativeEn: "She did not spend two hours at the cafe.", question: "A-t-elle passé deux heures au café ?", questionEn: "Did she spend two hours at the cafe?" },
          { fr: "Il a passé l’examen.", en: "He took / passed the exam.", negative: "Il n’a pas passé l’examen.", negativeEn: "He did not take / pass the exam.", question: "A-t-il passé l’examen ?", questionEn: "Did he take / pass the exam?" }
        ]
      },
      {
        infinitive: "tomber",
        infinitiveIpa: "/tɔ̃be/",
        pastParticiple: "tombé(e)(s)",
        pastParticipleIpa: "/tɔ̃be/",
        meaning: "to fall",
        note: "Uses être.",
        etreExamples: [
          { fr: "Il est tombé dans la rue.", en: "He fell in the street.", negative: "Il n’est pas tombé dans la rue.", negativeEn: "He did not fall in the street.", question: "Est-il tombé dans la rue ?", questionEn: "Did he fall in the street?" }
        ]
      },
      {
        infinitive: "naître",
        infinitiveIpa: "/nɛtʁ/",
        pastParticiple: "né(e)(s)",
        pastParticipleIpa: "/ne/",
        meaning: "to be born",
        note: "Uses être.",
        etreExamples: [
          { fr: "Elle est née en avril.", en: "She was born in April.", negative: "Elle n’est pas née en avril.", negativeEn: "She was not born in April.", question: "Est-elle née en avril ?", questionEn: "Was she born in April?" }
        ]
      },
      {
        infinitive: "mourir",
        infinitiveIpa: "/muʁiʁ/",
        pastParticiple: "mort(e)(s)",
        pastParticipleIpa: "/mɔʁ/",
        meaning: "to die",
        note: "Uses être.",
        etreExamples: [
          { fr: "Le personnage est mort à la fin du film.", en: "The character died at the end of the movie.", negative: "Le personnage n’est pas mort à la fin du film.", negativeEn: "The character did not die at the end of the movie.", question: "Le personnage est-il mort à la fin du film ?", questionEn: "Did the character die at the end of the movie?" }
        ]
      },
      {
        infinitive: "devenir",
        infinitiveIpa: "/dəvəniʁ/",
        pastParticiple: "devenu(e)(s)",
        pastParticipleIpa: "/dəvəny/",
        meaning: "to become",
        note: "Uses être, like venir.",
        etreExamples: [
          { fr: "Ils sont devenus amis.", en: "They became friends.", negative: "Ils ne sont pas devenus amis.", negativeEn: "They did not become friends.", question: "Sont-ils devenus amis ?", questionEn: "Did they become friends?" }
        ]
      }
    ];

    const regularErEtreAuxiliaryVerbs = new Set([
      "entrer",
      "monter",
      "rester",
      "retourner",
      "tomber"
    ]);

    function addEtreAuxiliaryVerbsToPasseComposeGroups() {
      const knownInfinitives = new Set(
        passeComposeGroups.flatMap(group => group.verbs.map(verb => verb.infinitive))
      );

      etreAuxiliaryVerbs.forEach(verb => {
        if (knownInfinitives.has(verb.infinitive)) return;
        const example = verb.etreExamples && verb.etreExamples[0];
        if (!example) return;
        const groupKey = regularErEtreAuxiliaryVerbs.has(verb.infinitive) ? "er" : "irregular";
        const group = passeComposeGroups.find(item => item.key === groupKey);
        if (!group) return;

        group.verbs.push({
          infinitive: verb.infinitive,
          infinitiveIpa: verb.infinitiveIpa,
          meaning: verb.meaning,
          auxiliary: "être",
          pastParticiple: verb.pastParticiple,
          pastParticipleIpa: verb.pastParticipleIpa,
          pattern: `${verb.infinitive} → ${verb.pastParticiple.replace(/\(e\)\(s\)$/, "")}`,
          note: verb.note,
          statement: { fr: example.fr, en: example.en },
          negative: { fr: example.negative, en: example.negativeEn },
          question: { fr: example.question, en: example.questionEn }
        });
        knownInfinitives.add(verb.infinitive);
      });
    }

    addEtreAuxiliaryVerbsToPasseComposeGroups();

    (function registerVerbRuntime(FR) {
      const normalizeName = value => value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’‘]/g, "'")
        .toLowerCase()
        .replace(/^s'/, "se ")
        .replace(/\s+/g, " ")
        .trim();
      const impersonalNames = new Map([
        ["il faut", "falloir"],
        ["il y a", "avoir"],
        ["il fait", "faire"],
        ["il est", "être"]
      ]);
      const tenseEntries = passeComposeGroups.flatMap(group =>
        group.verbs.map(verb => ({ ...verb, groupKey: group.key }))
      );
      const tenseByName = new Map(tenseEntries.map(verb => [normalizeName(verb.infinitive), verb]));
      const etreByName = new Map(etreAuxiliaryVerbs.map(verb => [normalizeName(verb.infinitive), verb]));

      FR.data.tenses = {
        groups: passeComposeGroups,
        etreAuxiliaryVerbs
      };
      FR.data.verbs = {
        groups: verbStudyGroups,
        configs: verbConfigs,
        items: verbStudyItems.map(item => {
          const lookupName = item.syncInfinitive || impersonalNames.get(item.label) || item.label;
          const normalized = normalizeName(lookupName);
          return {
            ...item,
            passeCompose: tenseByName.get(normalized) || null,
            etreAuxiliary: etreByName.get(normalized) || null
          };
        })
      };
    })(window.FR);
