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
      { person: "tu", form: "sois", ipa: "/swa/", en: "be", example: "Sois calme.", exampleEn: "Be calm.", negative: "Ne sois pas nerveux.", negativeEn: "Do not be nervous." },
      { person: "nous", form: "soyons", ipa: "/swa.jɔ̃/", en: "let’s be", example: "Soyons prêts.", exampleEn: "Let’s be ready.", negative: "Ne soyons pas en retard.", negativeEn: "Let’s not be late." },
      { person: "vous", form: "soyez", ipa: "/swa.je/", en: "be", example: "Soyez prudents.", exampleEn: "Be careful.", negative: "Ne soyez pas imprudents.", negativeEn: "Do not be careless." }
    ];

    const avoirImperativeRows = [
      { person: "tu", form: "aie", ipa: "/ɛ/", en: "have", example: "Aie confiance.", exampleEn: "Have confidence.", negative: "N’aie pas peur.", negativeEn: "Do not be afraid." },
      { person: "nous", form: "ayons", ipa: "/ɛ.jɔ̃/", en: "let’s have", example: "Ayons du courage.", exampleEn: "Let’s have courage.", negative: "N’ayons pas peur.", negativeEn: "Let’s not be afraid." },
      { person: "vous", form: "ayez", ipa: "/ɛ.je/", en: "have", example: "Ayez confiance en vous.", exampleEn: "Have confidence in yourself.", negative: "N’ayez pas peur de demander.", negativeEn: "Do not be afraid to ask." }
    ];

    const parlerRows = [
      {
        pronoun: "je",
        form: "parle",
        full: "je parle",
        en: "I speak / talk",
        examples: [
          { meaning: "parler + direct object", fr: "Je parle français.", en: "I speak French.", negative: "Je ne parle pas français.", negativeEn: "I do not speak French.", question: "Quelle langue est-ce que je parle ?" },
          { meaning: "parler à quelqu’un", fr: "Je parle à mon professeur.", en: "I talk to my teacher.", negative: "Je ne parle pas à mon professeur.", negativeEn: "I do not talk to my teacher.", question: "À qui est-ce que je parle ?" },
          { meaning: "parler de quelque chose", fr: "Je parle de mon travail.", en: "I talk about my work.", negative: "Je ne parle pas de mon travail.", negativeEn: "I do not talk about my work.", question: "De quoi est-ce que je parle ?" }
        ]
      },
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

    const adorerRows = [
      { pronoun: "j’", form: "adore", full: "j’adore", ipa: "/ʒa.dɔʁ/", en: "I love / really like", example: "J’adore ce film.", exampleEn: "I love this movie.", negative: "Je n’adore pas ce film.", negativeEn: "I do not love this movie.", question: "Est-ce que j’adore ce film ?" },
      { pronoun: "tu", form: "adores", full: "tu adores", ipa: "/ty a.dɔʁ/", en: "you love / really like", example: "Tu adores les films français.", exampleEn: "You love French movies.", negative: "Tu n’adores pas les films français.", negativeEn: "You do not love French movies.", question: "Adores-tu les films français ?" },
      { pronoun: "il", form: "adore", full: "il adore", ipa: "/il a.dɔʁ/", en: "he loves / really likes", example: "Il adore cuisiner.", exampleEn: "He loves cooking.", negative: "Il n’adore pas cuisiner.", negativeEn: "He does not love cooking.", question: "Est-ce qu’il adore cuisiner ?" },
      { pronoun: "elle", form: "adore", full: "elle adore", ipa: "/ɛl a.dɔʁ/", en: "she loves / really likes", example: "Elle adore son chien.", exampleEn: "She loves her dog.", negative: "Elle n’adore pas son chien.", negativeEn: "She does not love her dog.", question: "Adore-t-elle son chien ?" },
      { pronoun: "nous", form: "adorons", full: "nous adorons", ipa: "/nu a.dɔ.ʁɔ̃/", en: "we love / really like", example: "Nous adorons voyager ensemble.", exampleEn: "We love traveling together.", negative: "Nous n’adorons pas voyager ensemble.", negativeEn: "We do not love traveling together.", question: "Adorons-nous voyager ensemble ?" },
      { pronoun: "vous", form: "adorez", full: "vous adorez", ipa: "/vu a.dɔ.ʁe/", en: "you love / really like", example: "Vous adorez ce restaurant.", exampleEn: "You love this restaurant.", negative: "Vous n’adorez pas ce restaurant.", negativeEn: "You do not love this restaurant.", question: "Est-ce que vous adorez ce restaurant ?" },
      { pronoun: "ils", form: "adorent", full: "ils adorent", ipa: "/il a.dɔʁ/", en: "they love / really like", example: "Ils adorent jouer au foot.", exampleEn: "They love playing soccer.", negative: "Ils n’adorent pas jouer au foot.", negativeEn: "They do not love playing soccer.", question: "Adorent-ils jouer au foot ?" },
      { pronoun: "elles", form: "adorent", full: "elles adorent", ipa: "/ɛl a.dɔʁ/", en: "they love / really like", example: "Elles adorent la musique classique.", exampleEn: "They love classical music.", negative: "Elles n’adorent pas la musique classique.", negativeEn: "They do not love classical music.", question: "Quelle musique adorent-elles ?" }
    ];

    const detesterRows = [
      { pronoun: "je", form: "déteste", full: "je déteste", ipa: "/ʒə de.tɛst/", en: "I hate / really dislike", example: "Je déteste attendre.", exampleEn: "I hate waiting.", negative: "Je ne déteste pas attendre.", negativeEn: "I do not hate waiting.", question: "Est-ce que je déteste attendre ?" },
      { pronoun: "tu", form: "détestes", full: "tu détestes", ipa: "/ty de.tɛst/", en: "you hate / really dislike", example: "Tu détestes te lever tôt.", exampleEn: "You hate getting up early.", negative: "Tu ne détestes pas te lever tôt.", negativeEn: "You do not hate getting up early.", question: "Détestes-tu te lever tôt ?" },
      { pronoun: "il", form: "déteste", full: "il déteste", ipa: "/il de.tɛst/", en: "he hates / really dislikes", example: "Il déteste le bruit.", exampleEn: "He hates noise.", negative: "Il ne déteste pas le bruit.", negativeEn: "He does not hate noise.", question: "Est-ce qu’il déteste le bruit ?" },
      { pronoun: "elle", form: "déteste", full: "elle déteste", ipa: "/ɛl de.tɛst/", en: "she hates / really dislikes", example: "Elle déteste faire la queue.", exampleEn: "She hates waiting in line.", negative: "Elle ne déteste pas faire la queue.", negativeEn: "She does not hate waiting in line.", question: "Pourquoi déteste-t-elle faire la queue ?" },
      { pronoun: "nous", form: "détestons", full: "nous détestons", ipa: "/nu de.tɛs.tɔ̃/", en: "we hate / really dislike", example: "Nous détestons être en retard.", exampleEn: "We hate being late.", negative: "Nous ne détestons pas être en retard.", negativeEn: "We do not hate being late.", question: "Détestons-nous être en retard ?" },
      { pronoun: "vous", form: "détestez", full: "vous détestez", ipa: "/vu de.tɛs.te/", en: "you hate / really dislike", example: "Vous détestez les embouteillages.", exampleEn: "You hate traffic jams.", negative: "Vous ne détestez pas les embouteillages.", negativeEn: "You do not hate traffic jams.", question: "Est-ce que vous détestez les embouteillages ?" },
      { pronoun: "ils", form: "détestent", full: "ils détestent", ipa: "/il de.tɛst/", en: "they hate / really dislike", example: "Ils détestent les devoirs.", exampleEn: "They hate homework.", negative: "Ils ne détestent pas les devoirs.", negativeEn: "They do not hate homework.", question: "Détestent-ils les devoirs ?" },
      { pronoun: "elles", form: "détestent", full: "elles détestent", ipa: "/ɛl de.tɛst/", en: "they hate / really dislike", example: "Elles détestent attendre le bus.", exampleEn: "They hate waiting for the bus.", negative: "Elles ne détestent pas attendre le bus.", negativeEn: "They do not hate waiting for the bus.", question: "Pourquoi détestent-elles attendre le bus ?" }
    ];

    const prefererRows = [
      { pronoun: "je", form: "préfère", full: "je préfère", ipa: "/ʒə pʁe.fɛʁ/", en: "I prefer", example: "Je préfère le thé au café.", exampleEn: "I prefer tea to coffee.", negative: "Je ne préfère pas le thé au café.", negativeEn: "I do not prefer tea to coffee.", question: "Est-ce que je préfère le thé au café ?" },
      { pronoun: "tu", form: "préfères", full: "tu préfères", ipa: "/ty pʁe.fɛʁ/", en: "you prefer", example: "Tu préfères le train à l’avion.", exampleEn: "You prefer the train to the plane.", negative: "Tu ne préfères pas le train à l’avion.", negativeEn: "You do not prefer the train to the plane.", question: "Que préfères-tu, le train ou l’avion ?" },
      { pronoun: "il", form: "préfère", full: "il préfère", ipa: "/il pʁe.fɛʁ/", en: "he prefers", example: "Il préfère rester à la maison.", exampleEn: "He prefers to stay home.", negative: "Il ne préfère pas rester à la maison.", negativeEn: "He does not prefer to stay home.", question: "Préfère-t-il rester à la maison ?" },
      { pronoun: "elle", form: "préfère", full: "elle préfère", ipa: "/ɛl pʁe.fɛʁ/", en: "she prefers", example: "Elle préfère le matin.", exampleEn: "She prefers the morning.", negative: "Elle ne préfère pas le matin.", negativeEn: "She does not prefer the morning.", question: "Est-ce qu’elle préfère le matin ?" },
      { pronoun: "nous", form: "préférons", full: "nous préférons", ipa: "/nu pʁe.fe.ʁɔ̃/", en: "we prefer", example: "Nous préférons marcher.", exampleEn: "We prefer to walk.", negative: "Nous ne préférons pas marcher.", negativeEn: "We do not prefer to walk.", question: "Préférons-nous marcher ?" },
      { pronoun: "vous", form: "préférez", full: "vous préférez", ipa: "/vu pʁe.fe.ʁe/", en: "you prefer", example: "Vous préférez cette table.", exampleEn: "You prefer this table.", negative: "Vous ne préférez pas cette table.", negativeEn: "You do not prefer this table.", question: "Quelle table préférez-vous ?" },
      { pronoun: "ils", form: "préfèrent", full: "ils préfèrent", ipa: "/il pʁe.fɛʁ/", en: "they prefer", example: "Ils préfèrent partir tôt.", exampleEn: "They prefer to leave early.", negative: "Ils ne préfèrent pas partir tôt.", negativeEn: "They do not prefer to leave early.", question: "Préfèrent-ils partir tôt ?" },
      { pronoun: "elles", form: "préfèrent", full: "elles préfèrent", ipa: "/ɛl pʁe.fɛʁ/", en: "they prefer", example: "Elles préfèrent la montagne à la plage.", exampleEn: "They prefer the mountains to the beach.", negative: "Elles ne préfèrent pas la montagne à la plage.", negativeEn: "They do not prefer the mountains to the beach.", question: "Est-ce qu’elles préfèrent la montagne à la plage ?" }
    ];

    const arriverRows = [
      { pronoun: "j’", form: "arrive", full: "j’arrive", en: "I arrive / I manage", example: "J’arrive à huit heures.", exampleEn: "I arrive at eight o’clock.", negative: "Je n’arrive pas à huit heures.", negativeEn: "I do not arrive at eight o’clock." },
      { pronoun: "tu", form: "arrives", full: "tu arrives", en: "you arrive / you manage", example: "Tu arrives avant moi.", exampleEn: "You arrive before me.", negative: "Tu n’arrives pas avant moi.", negativeEn: "You do not arrive before me.", question: "Arrives-tu avant moi ?" },
      { pronoun: "il", form: "arrive", full: "il arrive", en: "he arrives / it happens", example: "Il arrive à la gare.", exampleEn: "He arrives at the train station.", negative: "Il n’arrive pas à la gare.", negativeEn: "He does not arrive at the train station.", question: "Où arrive-t-il ?" },
      { pronoun: "elle", form: "arrive", full: "elle arrive", en: "she arrives / she manages", example: "Elle arrive en retard.", exampleEn: "She arrives late.", negative: "Elle n’arrive pas en retard.", negativeEn: "She does not arrive late." },
      { pronoun: "nous", form: "arrivons", full: "nous arrivons", en: "we arrive / we manage", example: "Nous arrivons ensemble.", exampleEn: "We arrive together.", negative: "Nous n’arrivons pas ensemble.", negativeEn: "We do not arrive together.", question: "Quand arrivons-nous ?" },
      { pronoun: "vous", form: "arrivez", full: "vous arrivez", en: "you arrive / you manage", example: "Vous arrivez à l’heure.", exampleEn: "You arrive on time.", negative: "Vous n’arrivez pas à l’heure.", negativeEn: "You do not arrive on time.", question: "Arrivez-vous à l’heure ?" },
      { pronoun: "ils", form: "arrivent", full: "ils arrivent", en: "they arrive / they manage", example: "Ils arrivent demain matin.", exampleEn: "They arrive tomorrow morning.", negative: "Ils n’arrivent pas demain matin.", negativeEn: "They do not arrive tomorrow morning." },
      { pronoun: "elles", form: "arrivent", full: "elles arrivent", en: "they arrive / they manage", example: "Elles arrivent après le cours.", exampleEn: "They arrive after class.", negative: "Elles n’arrivent pas après le cours.", negativeEn: "They do not arrive after class.", question: "Quand arrivent-elles ?" }
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
      { pronoun: "elle", form: "vient", full: "elle vient", en: "she comes / she is coming", example: "Elle vient à la fête.", exampleEn: "She is coming to the party.", negative: "Elle ne vient pas à la fête.", negativeEn: "She is not coming to the party.", question: "À quelle fête vient-elle ?" },
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

    const apprendreRows = [
      { pronoun: "j’", form: "apprends", full: "j’apprends", en: "I learn", example: "J’apprends le français.", exampleEn: "I am learning French.", negative: "Je n’apprends pas le français.", negativeEn: "I am not learning French.", question: "Qu’est-ce que j’apprends ?" },
      { pronoun: "tu", form: "apprends", full: "tu apprends", en: "you learn", example: "Tu apprends une nouvelle règle.", exampleEn: "You are learning a new rule.", negative: "Tu n’apprends pas de nouvelle règle.", negativeEn: "You are not learning a new rule.", question: "Qu’apprends-tu ?" },
      { pronoun: "il", form: "apprend", full: "il apprend", en: "he learns", example: "Il apprend à conduire.", exampleEn: "He is learning to drive.", negative: "Il n’apprend pas à conduire.", negativeEn: "He is not learning to drive.", question: "Apprend-il à conduire ?" },
      { pronoun: "elle", form: "apprend", full: "elle apprend", en: "she learns", example: "Elle apprend beaucoup en classe.", exampleEn: "She learns a lot in class.", negative: "Elle n’apprend pas beaucoup en classe.", negativeEn: "She does not learn a lot in class." },
      { pronoun: "nous", form: "apprenons", full: "nous apprenons", en: "we learn", example: "Nous apprenons les verbes irréguliers.", exampleEn: "We are learning irregular verbs.", negative: "Nous n’apprenons pas les verbes irréguliers.", negativeEn: "We are not learning irregular verbs.", question: "Quels verbes apprenons-nous ?" },
      { pronoun: "vous", form: "apprenez", full: "vous apprenez", en: "you learn", example: "Vous apprenez vite.", exampleEn: "You learn quickly.", negative: "Vous n’apprenez pas vite.", negativeEn: "You do not learn quickly.", question: "Apprenez-vous vite ?" },
      { pronoun: "ils", form: "apprennent", full: "ils apprennent", en: "they learn", example: "Ils apprennent une chanson.", exampleEn: "They are learning a song.", negative: "Ils n’apprennent pas de chanson.", negativeEn: "They are not learning a song." },
      { pronoun: "elles", form: "apprennent", full: "elles apprennent", en: "they learn", example: "Elles apprennent à nager.", exampleEn: "They are learning to swim.", negative: "Elles n’apprennent pas à nager.", negativeEn: "They are not learning to swim.", question: "Qu’apprennent-elles à faire ?" }
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

    const devoirRows = [
      {
        pronoun: "je",
        form: "dois",
        full: "je dois",
        en: "I must / have to / owe",
        examples: [
          { meaning: "obligation", fr: "Je dois partir tôt.", en: "I have to leave early.", negative: "Je ne dois pas partir tôt.", negativeEn: "I must not leave early.", question: "Dois-je partir tôt ?" },
          { meaning: "owe", fr: "Je dois dix euros à Paul.", en: "I owe Paul ten euros.", negative: "Je ne dois pas dix euros à Paul.", negativeEn: "I do not owe Paul ten euros.", question: "Combien est-ce que je dois à Paul ?" }
        ]
      },
      { pronoun: "tu", form: "dois", full: "tu dois", en: "you must / have to / owe", example: "Tu dois finir tes devoirs.", exampleEn: "You have to finish your homework.", negative: "Tu ne dois pas finir tes devoirs maintenant.", negativeEn: "You must not finish your homework now.", question: "Dois-tu finir tes devoirs maintenant ?" },
      { pronoun: "il", form: "doit", full: "il doit", en: "he must / has to / owes", example: "Il doit appeler sa mère.", exampleEn: "He has to call his mother.", negative: "Il ne doit pas appeler sa mère ce soir.", negativeEn: "He must not call his mother tonight.", question: "Doit-il appeler sa mère ce soir ?" },
      { pronoun: "elle", form: "doit", full: "elle doit", en: "she must / has to / owes", example: "Elle doit prendre le train.", exampleEn: "She has to take the train.", negative: "Elle ne doit pas prendre le train.", negativeEn: "She must not take the train.", question: "Quel train doit-elle prendre ?" },
      { pronoun: "nous", form: "devons", full: "nous devons", en: "we must / have to / owe", example: "Nous devons réserver une table.", exampleEn: "We have to reserve a table.", negative: "Nous ne devons pas réserver de table.", negativeEn: "We must not reserve a table.", question: "Devons-nous réserver une table ?" },
      { pronoun: "vous", form: "devez", full: "vous devez", en: "you must / have to / owe", example: "Vous devez remplir ce formulaire.", exampleEn: "You have to fill out this form.", negative: "Vous ne devez pas remplir ce formulaire.", negativeEn: "You must not fill out this form.", question: "Devez-vous remplir ce formulaire ?" },
      { pronoun: "ils", form: "doivent", full: "ils doivent", en: "they must / have to / owe", example: "Ils doivent travailler demain.", exampleEn: "They have to work tomorrow.", negative: "Ils ne doivent pas travailler demain.", negativeEn: "They must not work tomorrow.", question: "Doivent-ils travailler demain ?" },
      { pronoun: "elles", form: "doivent", full: "elles doivent", en: "they must / have to / owe", example: "Elles doivent étudier ce soir.", exampleEn: "They have to study tonight.", negative: "Elles ne doivent pas étudier ce soir.", negativeEn: "They must not study tonight.", question: "Que doivent-elles étudier ce soir ?" }
    ];

    const pouvoirRows = [
      {
        pronoun: "je",
        form: "peux",
        full: "je peux",
        en: "I can / may",
        examples: [
          { meaning: "ability", fr: "Je peux venir demain.", en: "I can come tomorrow.", negative: "Je ne peux pas venir demain.", negativeEn: "I cannot come tomorrow.", question: "Puis-je venir demain ?" },
          { meaning: "polite offer", fr: "Je peux vous aider.", en: "I can help you.", negative: "Je ne peux pas vous aider.", negativeEn: "I cannot help you.", question: "Puis-je vous aider ?" }
        ]
      },
      { pronoun: "tu", form: "peux", full: "tu peux", en: "you can / may", example: "Tu peux ouvrir la fenêtre.", exampleEn: "You can open the window.", negative: "Tu ne peux pas ouvrir la fenêtre.", negativeEn: "You cannot open the window.", question: "Peux-tu ouvrir la fenêtre ?" },
      { pronoun: "il", form: "peut", full: "il peut", en: "he can / may", example: "Il peut entrer maintenant.", exampleEn: "He can come in now.", negative: "Il ne peut pas entrer maintenant.", negativeEn: "He cannot come in now.", question: "Peut-il entrer maintenant ?" },
      { pronoun: "elle", form: "peut", full: "elle peut", en: "she can / may", example: "Elle peut finir ce soir.", exampleEn: "She can finish tonight.", negative: "Elle ne peut pas finir ce soir.", negativeEn: "She cannot finish tonight.", question: "Peut-elle finir ce soir ?" },
      { pronoun: "nous", form: "pouvons", full: "nous pouvons", en: "we can / may", example: "Nous pouvons réserver une table.", exampleEn: "We can reserve a table.", negative: "Nous ne pouvons pas réserver de table.", negativeEn: "We cannot reserve a table.", question: "Pouvons-nous réserver une table ?" },
      { pronoun: "vous", form: "pouvez", full: "vous pouvez", en: "you can / may", example: "Vous pouvez répéter cette phrase.", exampleEn: "You can repeat this sentence.", negative: "Vous ne pouvez pas répéter cette phrase.", negativeEn: "You cannot repeat this sentence.", question: "Pouvez-vous répéter cette phrase ?" },
      { pronoun: "ils", form: "peuvent", full: "ils peuvent", en: "they can / may", example: "Ils peuvent nous aider.", exampleEn: "They can help us.", negative: "Ils ne peuvent pas nous aider.", negativeEn: "They cannot help us.", question: "Peuvent-ils nous aider ?" },
      { pronoun: "elles", form: "peuvent", full: "elles peuvent", en: "they can / may", example: "Elles peuvent venir samedi.", exampleEn: "They can come on Saturday.", negative: "Elles ne peuvent pas venir samedi.", negativeEn: "They cannot come on Saturday.", question: "Peuvent-elles venir samedi ?" }
    ];

    const vouloirRows = [
      { pronoun: "je", form: "veux", full: "je veux", en: "I want", example: "Je veux apprendre le français.", exampleEn: "I want to learn French.", negative: "Je ne veux pas apprendre le français.", negativeEn: "I do not want to learn French.", question: "Qu’est-ce que je veux apprendre ?" },
      { pronoun: "tu", form: "veux", full: "tu veux", en: "you want", example: "Tu veux un café.", exampleEn: "You want a coffee.", negative: "Tu ne veux pas de café.", negativeEn: "You do not want coffee.", question: "Veux-tu un café ?" },
      { pronoun: "il", form: "veut", full: "il veut", en: "he wants", example: "Il veut partir tôt.", exampleEn: "He wants to leave early.", negative: "Il ne veut pas partir tôt.", negativeEn: "He does not want to leave early.", question: "Veut-il partir tôt ?" },
      { pronoun: "elle", form: "veut", full: "elle veut", en: "she wants", example: "Elle veut parler à Marie.", exampleEn: "She wants to talk to Marie.", negative: "Elle ne veut pas parler à Marie.", negativeEn: "She does not want to talk to Marie.", question: "À qui veut-elle parler ?" },
      { pronoun: "nous", form: "voulons", full: "nous voulons", en: "we want", example: "Nous voulons visiter le musée.", exampleEn: "We want to visit the museum.", negative: "Nous ne voulons pas visiter le musée.", negativeEn: "We do not want to visit the museum.", question: "Voulons-nous visiter le musée ?" },
      { pronoun: "vous", form: "voulez", full: "vous voulez", en: "you want", example: "Vous voulez une table près de la fenêtre.", exampleEn: "You want a table near the window.", negative: "Vous ne voulez pas de table près de la fenêtre.", negativeEn: "You do not want a table near the window.", question: "Voulez-vous une table près de la fenêtre ?" },
      { pronoun: "ils", form: "veulent", full: "ils veulent", en: "they want", example: "Ils veulent rester ici.", exampleEn: "They want to stay here.", negative: "Ils ne veulent pas rester ici.", negativeEn: "They do not want to stay here.", question: "Veulent-ils rester ici ?" },
      { pronoun: "elles", form: "veulent", full: "elles veulent", en: "they want", example: "Elles veulent acheter des billets.", exampleEn: "They want to buy tickets.", negative: "Elles ne veulent pas acheter de billets.", negativeEn: "They do not want to buy tickets.", question: "Que veulent-elles acheter ?" }
    ];

    const savoirRows = [
      {
        pronoun: "je",
        form: "sais",
        full: "je sais",
        en: "I know",
        examples: [
          { meaning: "know the answer", fr: "Je sais la réponse.", en: "I know the answer.", negative: "Je ne sais pas la réponse.", negativeEn: "I do not know the answer.", question: "Est-ce que je sais la réponse ?" },
          { meaning: "don’t know", fr: "Je ne sais pas où il habite.", en: "I do not know where he lives.", negative: "Je ne sais toujours pas où il habite.", negativeEn: "I still do not know where he lives.", question: "Sais-tu où il habite ?" }
        ]
      },
      {
        pronoun: "tu",
        form: "sais",
        full: "tu sais",
        en: "you know",
        examples: [
          { meaning: "savoir + que", fr: "Tu sais que le train part à huit heures.", en: "You know that the train leaves at eight.", negative: "Tu ne sais pas si le train part à huit heures.", negativeEn: "You do not know whether the train leaves at eight.", question: "Sais-tu que le train part à huit heures ?" },
          { meaning: "know how to", fr: "Tu sais nager.", en: "You know how to swim.", negative: "Tu ne sais pas nager.", negativeEn: "You do not know how to swim.", question: "Sais-tu nager ?" }
        ]
      },
      { pronoun: "il", form: "sait", full: "il sait", en: "he knows", example: "Il sait conduire.", exampleEn: "He knows how to drive.", negative: "Il ne sait pas conduire.", negativeEn: "He does not know how to drive.", question: "Sait-il conduire ?" },
      { pronoun: "elle", form: "sait", full: "elle sait", en: "she knows", example: "Elle sait que le magasin ferme tôt.", exampleEn: "She knows that the store closes early.", negative: "Elle ne sait pas si le magasin ferme tôt.", negativeEn: "She does not know whether the store closes early.", question: "Sait-elle que le magasin ferme tôt ?" },
      { pronoun: "nous", form: "savons", full: "nous savons", en: "we know", example: "Nous savons parler français.", exampleEn: "We know how to speak French.", negative: "Nous ne savons pas parler français.", negativeEn: "We do not know how to speak French.", question: "Savons-nous parler français ?" },
      { pronoun: "vous", form: "savez", full: "vous savez", en: "you know", example: "Vous savez utiliser cette application.", exampleEn: "You know how to use this app.", negative: "Vous ne savez pas utiliser cette application.", negativeEn: "You do not know how to use this app.", question: "Savez-vous utiliser cette application ?" },
      { pronoun: "ils", form: "savent", full: "ils savent", en: "they know", example: "Ils savent que le cours commence demain.", exampleEn: "They know that class starts tomorrow.", negative: "Ils ne savent pas si le cours commence demain.", negativeEn: "They do not know whether class starts tomorrow.", question: "Savent-ils que le cours commence demain ?" },
      { pronoun: "elles", form: "savent", full: "elles savent", en: "they know", example: "Elles savent jouer du piano.", exampleEn: "They know how to play piano.", negative: "Elles ne savent pas jouer du piano.", negativeEn: "They do not know how to play piano.", question: "Savent-elles jouer du piano ?" }
    ];

    const connaitreRows = [
      { pronoun: "je", form: "connais", full: "je connais", en: "I know / am familiar with", example: "Je connais Marie.", exampleEn: "I know Marie.", negative: "Je ne connais pas Marie.", negativeEn: "I do not know Marie.", question: "Est-ce que je connais Marie ?" },
      { pronoun: "tu", form: "connais", full: "tu connais", en: "you know / are familiar with", example: "Tu connais ce quartier.", exampleEn: "You know this neighborhood.", negative: "Tu ne connais pas ce quartier.", negativeEn: "You do not know this neighborhood.", question: "Connais-tu ce quartier ?" },
      { pronoun: "il", form: "connaît", full: "il connaît", en: "he knows / is familiar with", example: "Il connaît bien Paris.", exampleEn: "He knows Paris well.", negative: "Il ne connaît pas bien Paris.", negativeEn: "He does not know Paris well.", question: "Connaît-il bien Paris ?" },
      { pronoun: "elle", form: "connaît", full: "elle connaît", en: "she knows / is familiar with", example: "Elle connaît cette chanson.", exampleEn: "She knows this song.", negative: "Elle ne connaît pas cette chanson.", negativeEn: "She does not know this song.", question: "Quelle chanson connaît-elle ?" },
      { pronoun: "nous", form: "connaissons", full: "nous connaissons", en: "we know / are familiar with", example: "Nous connaissons un bon restaurant.", exampleEn: "We know a good restaurant.", negative: "Nous ne connaissons pas de bon restaurant.", negativeEn: "We do not know a good restaurant.", question: "Connaissons-nous un bon restaurant ?" },
      { pronoun: "vous", form: "connaissez", full: "vous connaissez", en: "you know / are familiar with", example: "Vous connaissez la règle.", exampleEn: "You know the rule.", negative: "Vous ne connaissez pas la règle.", negativeEn: "You do not know the rule.", question: "Connaissez-vous la règle ?" },
      { pronoun: "ils", form: "connaissent", full: "ils connaissent", en: "they know / are familiar with", example: "Ils connaissent le professeur.", exampleEn: "They know the teacher.", negative: "Ils ne connaissent pas le professeur.", negativeEn: "They do not know the teacher.", question: "Qui connaissent-ils ?" },
      { pronoun: "elles", form: "connaissent", full: "elles connaissent", en: "they know / are familiar with", example: "Elles connaissent cette adresse.", exampleEn: "They know this address.", negative: "Elles ne connaissent pas cette adresse.", negativeEn: "They do not know this address.", question: "Connaissent-elles cette adresse ?" }
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
      {
        pronoun: "je",
        form: "bois",
        full: "je bois",
        en: "I drink",
        examples: [
          { meaning: "drink water in general", fr: "Je bois de l’eau tous les jours.", en: "I drink water every day.", negative: "Je ne bois pas d’eau tous les jours.", negativeEn: "I do not drink water every day.", question: "Qu’est-ce que je bois tous les jours ?" },
          { meaning: "drink one bottle of water", fr: "Je bois une bouteille d’eau après le sport.", en: "I drink a bottle of water after sports.", negative: "Je ne bois pas de bouteille d’eau après le sport.", negativeEn: "I do not drink a bottle of water after sports.", question: "Est-ce que je bois une bouteille d’eau après le sport ?" }
        ]
      },
      { pronoun: "tu", form: "bois", full: "tu bois", en: "you drink", example: "Tu bois une bouteille d’eau après le cours.", exampleEn: "You drink a bottle of water after class.", negative: "Tu ne bois pas de bouteille d’eau après le cours.", negativeEn: "You do not drink a bottle of water after class.", question: "Bois-tu une bouteille d’eau après le cours ?" },
      { pronoun: "il", form: "boit", full: "il boit", en: "he drinks", example: "Il boit du jus d’orange.", exampleEn: "He drinks orange juice.", negative: "Il ne boit pas de jus d’orange.", negativeEn: "He does not drink orange juice.", question: "Que boit-il ?" },
      { pronoun: "elle", form: "boit", full: "elle boit", en: "she drinks", example: "Elle boit du thé vert.", exampleEn: "She drinks green tea.", negative: "Elle ne boit pas de thé vert.", negativeEn: "She does not drink green tea.", question: "Quel thé boit-elle ?" },
      { pronoun: "nous", form: "buvons", full: "nous buvons", en: "we drink", example: "Nous buvons de l’eau pendant le repas.", exampleEn: "We drink water during the meal.", negative: "Nous ne buvons pas d’eau pendant le repas.", negativeEn: "We do not drink water during the meal.", question: "Quand buvons-nous de l’eau ?" },
      { pronoun: "vous", form: "buvez", full: "vous buvez", en: "you drink", example: "Vous buvez une bouteille de vin rouge.", exampleEn: "You drink a bottle of red wine.", negative: "Vous ne buvez pas de bouteille de vin rouge.", negativeEn: "You do not drink a bottle of red wine.", question: "Que buvez-vous ?" },
      { pronoun: "ils", form: "boivent", full: "ils boivent", en: "they drink", example: "Ils boivent de la bière au café.", exampleEn: "They drink beer at the café.", negative: "Ils ne boivent pas de bière au café.", negativeEn: "They do not drink beer at the café.", question: "Où boivent-ils de la bière ?" },
      { pronoun: "elles", form: "boivent", full: "elles boivent", en: "they drink", example: "Elles boivent du chocolat chaud.", exampleEn: "They drink hot chocolate.", negative: "Elles ne boivent pas de chocolat chaud.", negativeEn: "They do not drink hot chocolate.", question: "Que boivent-elles ?" }
    ];

    const direRows = [
      {
        pronoun: "je",
        form: "dis",
        full: "je dis",
        en: "I say / tell",
        examples: [
          { meaning: "dire quelque chose à quelqu’un", fr: "Je dis la vérité à Marie.", en: "I tell Marie the truth.", negative: "Je ne dis pas la vérité à Marie.", negativeEn: "I do not tell Marie the truth.", question: "Qu’est-ce que je dis à Marie ?" },
          { meaning: "say hello to someone", fr: "Je dis bonjour à mon voisin.", en: "I say hello to my neighbor.", negative: "Je ne dis pas bonjour à mon voisin.", negativeEn: "I do not say hello to my neighbor.", question: "À qui est-ce que je dis bonjour ?" }
        ]
      },
      { pronoun: "tu", form: "dis", full: "tu dis", en: "you say / tell", example: "Tu dis merci au professeur.", exampleEn: "You say thank you to the teacher.", negative: "Tu ne dis pas merci au professeur.", negativeEn: "You do not say thank you to the teacher.", question: "Dis-tu merci au professeur ?" },
      { pronoun: "il", form: "dit", full: "il dit", en: "he says / tells", example: "Il dit que le train arrive bientôt.", exampleEn: "He says that the train is arriving soon.", negative: "Il ne dit pas que le train arrive bientôt.", negativeEn: "He does not say that the train is arriving soon.", question: "Que dit-il ?" },
      { pronoun: "elle", form: "dit", full: "elle dit", en: "she says / tells", example: "Elle dit son nom à la réceptionniste.", exampleEn: "She tells the receptionist her name.", negative: "Elle ne dit pas son nom à la réceptionniste.", negativeEn: "She does not tell the receptionist her name.", question: "À qui dit-elle son nom ?" },
      { pronoun: "nous", form: "disons", full: "nous disons", en: "we say / tell", example: "Nous disons la réponse au professeur.", exampleEn: "We tell the teacher the answer.", negative: "Nous ne disons pas la réponse au professeur.", negativeEn: "We do not tell the teacher the answer.", question: "Que disons-nous au professeur ?" },
      { pronoun: "vous", form: "dites", full: "vous dites", en: "you say / tell", example: "Vous dites votre adresse au chauffeur.", exampleEn: "You tell the driver your address.", negative: "Vous ne dites pas votre adresse au chauffeur.", negativeEn: "You do not tell the driver your address.", question: "Dites-vous votre adresse au chauffeur ?" },
      { pronoun: "ils", form: "disent", full: "ils disent", en: "they say / tell", example: "Ils disent la nouvelle à leurs amis.", exampleEn: "They tell their friends the news.", negative: "Ils ne disent pas la nouvelle à leurs amis.", negativeEn: "They do not tell their friends the news.", question: "À qui disent-ils la nouvelle ?" },
      { pronoun: "elles", form: "disent", full: "elles disent", en: "they say / tell", example: "Elles disent qu’elles arrivent demain.", exampleEn: "They say that they are arriving tomorrow.", negative: "Elles ne disent pas qu’elles arrivent demain.", negativeEn: "They do not say that they are arriving tomorrow.", question: "Que disent-elles ?" }
    ];

    const offrirRows = [
      { pronoun: "j’", form: "offre", full: "j’offre", en: "I offer / give", example: "J’offre un cadeau à ma mère.", exampleEn: "I give my mother a gift.", negative: "Je n’offre pas de cadeau à ma mère.", negativeEn: "I do not give my mother a gift.", question: "Qu’est-ce que j’offre à ma mère ?" },
      { pronoun: "tu", form: "offres", full: "tu offres", en: "you offer / give", example: "Tu offres des fleurs à ton amie.", exampleEn: "You give flowers to your friend.", negative: "Tu n’offres pas de fleurs à ton amie.", negativeEn: "You do not give flowers to your friend.", question: "À qui offres-tu des fleurs ?" },
      { pronoun: "il", form: "offre", full: "il offre", en: "he offers", example: "Il offre son aide.", exampleEn: "He offers his help.", negative: "Il n’offre pas son aide.", negativeEn: "He does not offer his help.", question: "Offre-t-il son aide ?" },
      { pronoun: "elle", form: "offre", full: "elle offre", en: "she offers / gives", example: "Elle offre un café à Paul.", exampleEn: "She buys Paul a coffee.", negative: "Elle n’offre pas de café à Paul.", negativeEn: "She does not buy Paul a coffee.", question: "Qu’offre-t-elle à Paul ?" },
      { pronoun: "nous", form: "offrons", full: "nous offrons", en: "we offer / treat", example: "Nous offrons le dîner.", exampleEn: "We are treating dinner.", negative: "Nous n’offrons pas le dîner.", negativeEn: "We are not treating dinner.", question: "Offrons-nous le dîner ?" },
      { pronoun: "vous", form: "offrez", full: "vous offrez", en: "you offer / give", example: "Vous offrez une place à Julie.", exampleEn: "You give Julie a seat.", negative: "Vous n’offrez pas de place à Julie.", negativeEn: "You do not give Julie a seat.", question: "Offrez-vous une place à Julie ?" },
      { pronoun: "ils", form: "offrent", full: "ils offrent", en: "they offer / give", example: "Ils offrent des billets.", exampleEn: "They give tickets.", negative: "Ils n’offrent pas de billets.", negativeEn: "They do not give tickets.", question: "Combien de billets offrent-ils ?" },
      { pronoun: "elles", form: "offrent", full: "elles offrent", en: "they offer", example: "Elles offrent leur soutien.", exampleEn: "They offer their support.", negative: "Elles n’offrent pas leur soutien.", negativeEn: "They do not offer their support.", question: "Offrent-elles leur soutien ?" }
    ];

    const ouvrirRows = [
      { pronoun: "j’", form: "ouvre", full: "j’ouvre", en: "I open", example: "J’ouvre la porte.", exampleEn: "I open the door.", negative: "Je n’ouvre pas la porte.", negativeEn: "I do not open the door.", question: "Quelle porte est-ce que j’ouvre ?" },
      { pronoun: "tu", form: "ouvres", full: "tu ouvres", en: "you open", example: "Tu ouvres la fenêtre.", exampleEn: "You open the window.", negative: "Tu n’ouvres pas la fenêtre.", negativeEn: "You do not open the window.", question: "Ouvres-tu la fenêtre ?" },
      { pronoun: "il", form: "ouvre", full: "il ouvre", en: "he opens", example: "Il ouvre son livre.", exampleEn: "He opens his book.", negative: "Il n’ouvre pas son livre.", negativeEn: "He does not open his book.", question: "Quel livre ouvre-t-il ?" },
      { pronoun: "elle", form: "ouvre", full: "elle ouvre", en: "she opens", example: "Elle ouvre un compte bancaire.", exampleEn: "She opens a bank account.", negative: "Elle n’ouvre pas de compte bancaire.", negativeEn: "She does not open a bank account.", question: "Ouvre-t-elle un compte bancaire ?" },
      { pronoun: "nous", form: "ouvrons", full: "nous ouvrons", en: "we open", example: "Nous ouvrons le magasin à neuf heures.", exampleEn: "We open the store at nine o’clock.", negative: "Nous n’ouvrons pas le magasin à neuf heures.", negativeEn: "We do not open the store at nine o’clock.", question: "À quelle heure ouvrons-nous le magasin ?" },
      { pronoun: "vous", form: "ouvrez", full: "vous ouvrez", en: "you open", example: "Vous ouvrez le document.", exampleEn: "You open the document.", negative: "Vous n’ouvrez pas le document.", negativeEn: "You do not open the document.", question: "Ouvrez-vous le document ?" },
      { pronoun: "ils", form: "ouvrent", full: "ils ouvrent", en: "they open", example: "Ils ouvrent les cadeaux.", exampleEn: "They open the gifts.", negative: "Ils n’ouvrent pas les cadeaux.", negativeEn: "They do not open the gifts.", question: "Quand ouvrent-ils les cadeaux ?" },
      { pronoun: "elles", form: "ouvrent", full: "elles ouvrent", en: "they open", example: "Elles ouvrent la réunion.", exampleEn: "They open the meeting.", negative: "Elles n’ouvrent pas la réunion.", negativeEn: "They do not open the meeting.", question: "Ouvrent-elles la réunion ?" }
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

    const laisserRows = [
      { pronoun: "je", form: "laisse", full: "je laisse", en: "I let / leave", example: "Je laisse mon frère utiliser mon ordinateur.", exampleEn: "I let my brother use my computer.", negative: "Je ne laisse pas mon frère utiliser mon ordinateur.", negativeEn: "I do not let my brother use my computer.", question: "Est-ce que je laisse mon frère utiliser mon ordinateur ?" },
      { pronoun: "tu", form: "laisses", full: "tu laisses", en: "you let / leave", example: "Tu laisses les enfants jouer dehors.", exampleEn: "You let the children play outside.", negative: "Tu ne laisses pas les enfants jouer dehors.", negativeEn: "You do not let the children play outside.", question: "Laisses-tu les enfants jouer dehors ?" },
      { pronoun: "il", form: "laisse", full: "il laisse", en: "he lets / leaves", example: "Il laisse sa sœur conduire la voiture.", exampleEn: "He lets his sister drive the car.", negative: "Il ne laisse pas sa sœur conduire la voiture.", negativeEn: "He does not let his sister drive the car.", question: "Qui laisse-t-il conduire la voiture ?" },
      { pronoun: "elle", form: "laisse", full: "elle laisse", en: "she lets / leaves", example: "Elle laisse Paul finir le travail.", exampleEn: "She lets Paul finish the work.", negative: "Elle ne laisse pas Paul finir le travail.", negativeEn: "She does not let Paul finish the work.", question: "Que laisse-t-elle Paul finir ?" },
      { pronoun: "nous", form: "laissons", full: "nous laissons", en: "we let / leave", example: "Nous laissons le chien dormir ici.", exampleEn: "We let the dog sleep here.", negative: "Nous ne laissons pas le chien dormir ici.", negativeEn: "We do not let the dog sleep here.", question: "Laissons-nous le chien dormir ici ?" },
      { pronoun: "vous", form: "laissez", full: "vous laissez", en: "you let / leave", example: "Vous laissez vos amis entrer.", exampleEn: "You let your friends come in.", negative: "Vous ne laissez pas vos amis entrer.", negativeEn: "You do not let your friends come in.", question: "Qui laissez-vous entrer ?" },
      { pronoun: "ils", form: "laissent", full: "ils laissent", en: "they let / leave", example: "Ils laissent leur fille choisir le dessert.", exampleEn: "They let their daughter choose dessert.", negative: "Ils ne laissent pas leur fille choisir le dessert.", negativeEn: "They do not let their daughter choose dessert.", question: "Que laissent-ils leur fille choisir ?" },
      { pronoun: "elles", form: "laissent", full: "elles laissent", en: "they let / leave", example: "Elles laissent les étudiants poser des questions.", exampleEn: "They let the students ask questions.", negative: "Elles ne laissent pas les étudiants poser de questions.", negativeEn: "They do not let the students ask questions.", question: "Laissent-elles les étudiants poser des questions ?" }
    ];

    const reserverRows = [
      { pronoun: "je", form: "réserve", full: "je réserve", en: "I reserve / book", example: "Je réserve une table pour ce soir.", exampleEn: "I reserve a table for tonight.", negative: "Je ne réserve pas de table pour ce soir.", negativeEn: "I do not reserve a table for tonight.", question: "Qu’est-ce que je réserve pour ce soir ?" },
      { pronoun: "tu", form: "réserves", full: "tu réserves", en: "you reserve / book", example: "Tu réserves une chambre en ligne.", exampleEn: "You book a room online.", negative: "Tu ne réserves pas de chambre en ligne.", negativeEn: "You do not book a room online.", question: "Réserves-tu une chambre en ligne ?" },
      { pronoun: "il", form: "réserve", full: "il réserve", en: "he reserves / books", example: "Il réserve deux billets de train.", exampleEn: "He books two train tickets.", negative: "Il ne réserve pas de billets de train.", negativeEn: "He does not book train tickets.", question: "Combien de billets réserve-t-il ?" },
      { pronoun: "elle", form: "réserve", full: "elle réserve", en: "she reserves / books", example: "Elle réserve une place près de la fenêtre.", exampleEn: "She reserves a seat near the window.", negative: "Elle ne réserve pas de place près de la fenêtre.", negativeEn: "She does not reserve a seat near the window.", question: "Quelle place réserve-t-elle ?" },
      { pronoun: "nous", form: "réservons", full: "nous réservons", en: "we reserve / book", example: "Nous réservons un hôtel à Paris.", exampleEn: "We book a hotel in Paris.", negative: "Nous ne réservons pas d’hôtel à Paris.", negativeEn: "We do not book a hotel in Paris.", question: "Où réservons-nous un hôtel ?" },
      { pronoun: "vous", form: "réservez", full: "vous réservez", en: "you reserve / book", example: "Vous réservez par téléphone.", exampleEn: "You book by phone.", negative: "Vous ne réservez pas par téléphone.", negativeEn: "You do not book by phone.", question: "Comment réservez-vous ?" },
      { pronoun: "ils", form: "réservent", full: "ils réservent", en: "they reserve / book", example: "Ils réservent une voiture pour le week-end.", exampleEn: "They book a car for the weekend.", negative: "Ils ne réservent pas de voiture pour le week-end.", negativeEn: "They do not book a car for the weekend.", question: "Que réservent-ils pour le week-end ?" },
      { pronoun: "elles", form: "réservent", full: "elles réservent", en: "they reserve / book", example: "Elles réservent une salle pour la réunion.", exampleEn: "They reserve a room for the meeting.", negative: "Elles ne réservent pas de salle pour la réunion.", negativeEn: "They do not reserve a room for the meeting.", question: "Pourquoi réservent-elles une salle ?" }
    ];

    const quitterRows = [
      { pronoun: "je", form: "quitte", full: "je quitte", en: "I leave / quit", example: "Je quitte la maison à huit heures.", exampleEn: "I leave the house at eight o’clock.", negative: "Je ne quitte pas la maison à huit heures.", negativeEn: "I do not leave the house at eight o’clock.", question: "À quelle heure est-ce que je quitte la maison ?" },
      { pronoun: "tu", form: "quittes", full: "tu quittes", en: "you leave / quit", example: "Tu quittes le bureau tard.", exampleEn: "You leave the office late.", negative: "Tu ne quittes pas le bureau tard.", negativeEn: "You do not leave the office late.", question: "Quittes-tu le bureau tard ?" },
      { pronoun: "il", form: "quitte", full: "il quitte", en: "he leaves / quits", example: "Il quitte Paris demain.", exampleEn: "He leaves Paris tomorrow.", negative: "Il ne quitte pas Paris demain.", negativeEn: "He does not leave Paris tomorrow.", question: "Quand quitte-t-il Paris ?" },
      { pronoun: "elle", form: "quitte", full: "elle quitte", en: "she leaves / quits", example: "Elle quitte son travail.", exampleEn: "She quits her job.", negative: "Elle ne quitte pas son travail.", negativeEn: "She does not quit her job.", question: "Pourquoi quitte-t-elle son travail ?" },
      { pronoun: "nous", form: "quittons", full: "nous quittons", en: "we leave / quit", example: "Nous quittons le restaurant.", exampleEn: "We leave the restaurant.", negative: "Nous ne quittons pas le restaurant.", negativeEn: "We do not leave the restaurant.", question: "Quittons-nous le restaurant ?" },
      { pronoun: "vous", form: "quittez", full: "vous quittez", en: "you leave / quit", example: "Vous quittez la réunion maintenant.", exampleEn: "You are leaving the meeting now.", negative: "Vous ne quittez pas la réunion maintenant.", negativeEn: "You are not leaving the meeting now.", question: "Quand quittez-vous la réunion ?" },
      { pronoun: "ils", form: "quittent", full: "ils quittent", en: "they leave / quit", example: "Ils quittent l’école à midi.", exampleEn: "They leave school at noon.", negative: "Ils ne quittent pas l’école à midi.", negativeEn: "They do not leave school at noon.", question: "À quelle heure quittent-ils l’école ?" },
      { pronoun: "elles", form: "quittent", full: "elles quittent", en: "they leave / quit", example: "Elles quittent la ville ce soir.", exampleEn: "They leave town tonight.", negative: "Elles ne quittent pas la ville ce soir.", negativeEn: "They do not leave town tonight.", question: "Quittent-elles la ville ce soir ?" }
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

    const seTrouverRows = [
      { pronoun: "je", form: "me trouve", full: "je me trouve", en: "I am located / find myself", example: "Je me trouve devant la gare.", exampleEn: "I am in front of the train station.", negative: "Je ne me trouve pas devant la gare.", negativeEn: "I am not in front of the train station.", question: "Où est-ce que je me trouve ?" },
      { pronoun: "tu", form: "te trouves", full: "tu te trouves", en: "you are located / find yourself", example: "Tu te trouves près du métro.", exampleEn: "You are near the metro.", negative: "Tu ne te trouves pas près du métro.", negativeEn: "You are not near the metro.", question: "Te trouves-tu près du métro ?" },
      { pronoun: "il", form: "se trouve", full: "il se trouve", en: "he / it is located", example: "Le musée se trouve au centre-ville.", exampleEn: "The museum is located downtown.", negative: "Le musée ne se trouve pas au centre-ville.", negativeEn: "The museum is not located downtown.", question: "Où se trouve le musée ?" },
      { pronoun: "elle", form: "se trouve", full: "elle se trouve", en: "she / it is located", example: "La banque se trouve en face de l’école.", exampleEn: "The bank is located across from the school.", negative: "La banque ne se trouve pas en face de l’école.", negativeEn: "The bank is not located across from the school.", question: "La banque se trouve-t-elle en face de l’école ?" },
      { pronoun: "nous", form: "nous trouvons", full: "nous nous trouvons", en: "we are located / find ourselves", example: "Nous nous trouvons dans une petite rue.", exampleEn: "We are on a small street.", negative: "Nous ne nous trouvons pas dans une petite rue.", negativeEn: "We are not on a small street.", question: "Nous trouvons-nous dans une petite rue ?" },
      { pronoun: "vous", form: "vous trouvez", full: "vous vous trouvez", en: "you are located / find yourself", example: "Vous vous trouvez au coin de la rue.", exampleEn: "You are at the street corner.", negative: "Vous ne vous trouvez pas au coin de la rue.", negativeEn: "You are not at the street corner.", question: "Où vous trouvez-vous ?" },
      { pronoun: "ils", form: "se trouvent", full: "ils se trouvent", en: "they are located", example: "Les toilettes se trouvent au fond du couloir.", exampleEn: "The restrooms are at the end of the hallway.", negative: "Les toilettes ne se trouvent pas au fond du couloir.", negativeEn: "The restrooms are not at the end of the hallway.", question: "Où se trouvent les toilettes ?" },
      { pronoun: "elles", form: "se trouvent", full: "elles se trouvent", en: "they are located", example: "Les clés se trouvent sur la table.", exampleEn: "The keys are on the table.", negative: "Les clés ne se trouvent pas sur la table.", negativeEn: "The keys are not on the table.", question: "Les clés se trouvent-elles sur la table ?" }
    ];

    const sePromenerRows = [
      { pronoun: "je", form: "me promène", full: "je me promène", en: "I take a walk / stroll", example: "Je me promène dans le parc.", exampleEn: "I take a walk in the park.", negative: "Je ne me promène pas dans le parc.", negativeEn: "I do not take a walk in the park.", question: "Où est-ce que je me promène ?" },
      { pronoun: "tu", form: "te promènes", full: "tu te promènes", en: "you take a walk / stroll", example: "Tu te promènes après le déjeuner.", exampleEn: "You take a walk after lunch.", negative: "Tu ne te promènes pas après le déjeuner.", negativeEn: "You do not take a walk after lunch.", question: "Te promènes-tu après le déjeuner ?" },
      { pronoun: "il", form: "se promène", full: "il se promène", en: "he takes a walk / strolls", example: "Il se promène avec son chien.", exampleEn: "He takes a walk with his dog.", negative: "Il ne se promène pas avec son chien.", negativeEn: "He does not take a walk with his dog.", question: "Avec qui se promène-t-il ?" },
      { pronoun: "elle", form: "se promène", full: "elle se promène", en: "she takes a walk / strolls", example: "Elle se promène près de la rivière.", exampleEn: "She takes a walk near the river.", negative: "Elle ne se promène pas près de la rivière.", negativeEn: "She does not take a walk near the river.", question: "Où se promène-t-elle ?" },
      { pronoun: "nous", form: "nous promenons", full: "nous nous promenons", en: "we take a walk / stroll", example: "Nous nous promenons le soir.", exampleEn: "We take a walk in the evening.", negative: "Nous ne nous promenons pas le soir.", negativeEn: "We do not take a walk in the evening.", question: "Quand nous promenons-nous ?" },
      { pronoun: "vous", form: "vous promenez", full: "vous vous promenez", en: "you take a walk / stroll", example: "Vous vous promenez en ville.", exampleEn: "You take a walk downtown.", negative: "Vous ne vous promenez pas en ville.", negativeEn: "You do not take a walk downtown.", question: "Vous promenez-vous en ville ?" },
      { pronoun: "ils", form: "se promènent", full: "ils se promènent", en: "they take a walk / stroll", example: "Ils se promènent tous les matins.", exampleEn: "They take a walk every morning.", negative: "Ils ne se promènent pas tous les matins.", negativeEn: "They do not take a walk every morning.", question: "Quand se promènent-ils ?" },
      { pronoun: "elles", form: "se promènent", full: "elles se promènent", en: "they take a walk / stroll", example: "Elles se promènent au bord de la mer.", exampleEn: "They take a walk by the sea.", negative: "Elles ne se promènent pas au bord de la mer.", negativeEn: "They do not take a walk by the sea.", question: "Où se promènent-elles ?" }
    ];

    const sAimerRows = [
      { pronoun: "je", form: "m’aime", full: "je m’aime", ipa: "/ʒə mɛm/", en: "I love myself", example: "Je m’aime comme je suis.", exampleEn: "I love myself as I am.", negative: "Je ne m’aime pas comme je suis.", negativeEn: "I do not love myself as I am.", question: "Est-ce que je m’aime comme je suis ?" },
      { pronoun: "tu", form: "t’aimes", full: "tu t’aimes", ipa: "/ty tɛm/", en: "you love yourself", example: "Tu t’aimes beaucoup.", exampleEn: "You love yourself a lot.", negative: "Tu ne t’aimes pas beaucoup.", negativeEn: "You do not love yourself very much.", question: "Est-ce que tu t’aimes beaucoup ?" },
      { pronoun: "il", form: "s’aime", full: "il s’aime", ipa: "/il sɛm/", en: "he loves himself", example: "Il s’aime tel qu’il est.", exampleEn: "He loves himself as he is.", negative: "Il ne s’aime pas tel qu’il est.", negativeEn: "He does not love himself as he is.", question: "S’aime-t-il tel qu’il est ?" },
      { pronoun: "elle", form: "s’aime", full: "elle s’aime", ipa: "/ɛl sɛm/", en: "she loves herself", example: "Elle s’aime comme elle est.", exampleEn: "She loves herself as she is.", negative: "Elle ne s’aime pas comme elle est.", negativeEn: "She does not love herself as she is.", question: "Est-ce qu’elle s’aime comme elle est ?" },
      { pronoun: "nous", form: "nous aimons", full: "nous nous aimons", ipa: "/nu nu.z‿ɛ.mɔ̃/", en: "we love each other", example: "Nous nous aimons depuis longtemps.", exampleEn: "We have loved each other for a long time.", negative: "Nous ne nous aimons pas depuis longtemps.", negativeEn: "We have not loved each other for a long time.", question: "Est-ce que nous nous aimons depuis longtemps ?" },
      { pronoun: "vous", form: "vous aimez", full: "vous vous aimez", ipa: "/vu vu.z‿ɛ.me/", en: "you love each other / yourself", example: "Vous vous aimez beaucoup.", exampleEn: "You love each other a lot.", negative: "Vous ne vous aimez pas beaucoup.", negativeEn: "You do not love each other very much.", question: "Est-ce que vous vous aimez beaucoup ?" },
      { pronoun: "ils", form: "s’aiment", full: "ils s’aiment", ipa: "/il sɛm/", en: "they love each other", example: "Ils s’aiment vraiment.", exampleEn: "They truly love each other.", negative: "Ils ne s’aiment pas vraiment.", negativeEn: "They do not truly love each other.", question: "S’aiment-ils vraiment ?" },
      { pronoun: "elles", form: "s’aiment", full: "elles s’aiment", ipa: "/ɛl sɛm/", en: "they love each other", example: "Elles s’aiment depuis l’enfance.", exampleEn: "They have loved each other since childhood.", negative: "Elles ne s’aiment pas depuis l’enfance.", negativeEn: "They have not loved each other since childhood.", question: "Depuis quand s’aiment-elles ?" }
    ];

    const seConnaitreRows = [
      { pronoun: "je", form: "me connais", full: "je me connais", ipa: "/ʒə mə kɔ.nɛ/", en: "I know myself", example: "Je me connais bien.", exampleEn: "I know myself well.", negative: "Je ne me connais pas bien.", negativeEn: "I do not know myself well.", question: "Est-ce que je me connais bien ?" },
      { pronoun: "tu", form: "te connais", full: "tu te connais", ipa: "/ty tə kɔ.nɛ/", en: "you know yourself", example: "Tu te connais mieux maintenant.", exampleEn: "You know yourself better now.", negative: "Tu ne te connais pas mieux maintenant.", negativeEn: "You do not know yourself better now.", question: "Est-ce que tu te connais mieux maintenant ?" },
      { pronoun: "il", form: "se connaît", full: "il se connaît", ipa: "/il sə kɔ.nɛ/", en: "he knows himself", example: "Il se connaît très bien.", exampleEn: "He knows himself very well.", negative: "Il ne se connaît pas très bien.", negativeEn: "He does not know himself very well.", question: "Se connaît-il très bien ?" },
      { pronoun: "elle", form: "se connaît", full: "elle se connaît", ipa: "/ɛl sə kɔ.nɛ/", en: "she knows herself", example: "Elle se connaît bien.", exampleEn: "She knows herself well.", negative: "Elle ne se connaît pas bien.", negativeEn: "She does not know herself well.", question: "Est-ce qu’elle se connaît bien ?" },
      { pronoun: "nous", form: "nous connaissons", full: "nous nous connaissons", ipa: "/nu nu kɔ.nɛ.sɔ̃/", en: "we know each other", example: "Nous nous connaissons depuis l’école.", exampleEn: "We have known each other since school.", negative: "Nous ne nous connaissons pas depuis l’école.", negativeEn: "We have not known each other since school.", question: "Est-ce que nous nous connaissons depuis l’école ?" },
      { pronoun: "vous", form: "vous connaissez", full: "vous vous connaissez", ipa: "/vu vu kɔ.nɛ.se/", en: "you know each other / yourself", example: "Vous vous connaissez bien.", exampleEn: "You know each other well.", negative: "Vous ne vous connaissez pas bien.", negativeEn: "You do not know each other well.", question: "Est-ce que vous vous connaissez bien ?" },
      { pronoun: "ils", form: "se connaissent", full: "ils se connaissent", ipa: "/il sə kɔ.nɛs/", en: "they know each other", example: "Ils se connaissent bien.", exampleEn: "They know each other well.", negative: "Ils ne se connaissent pas bien.", negativeEn: "They do not know each other well.", question: "Se connaissent-ils bien ?" },
      { pronoun: "elles", form: "se connaissent", full: "elles se connaissent", ipa: "/ɛl sə kɔ.nɛs/", en: "they know each other", example: "Elles se connaissent depuis longtemps.", exampleEn: "They have known each other for a long time.", negative: "Elles ne se connaissent pas depuis longtemps.", negativeEn: "They have not known each other for a long time.", question: "Depuis quand se connaissent-elles ?" }
    ];

    const seMarierRows = [
      { pronoun: "je", form: "me marie", full: "je me marie", ipa: "/ʒə mə ma.ʁi/", en: "I am getting married", example: "Je me marie en juin.", exampleEn: "I am getting married in June.", negative: "Je ne me marie pas en juin.", negativeEn: "I am not getting married in June.", question: "Est-ce que je me marie en juin ?" },
      { pronoun: "tu", form: "te maries", full: "tu te maries", ipa: "/ty tə ma.ʁi/", en: "you are getting married", example: "Tu te maries avec Paul.", exampleEn: "You are getting married to Paul.", negative: "Tu ne te maries pas avec Paul.", negativeEn: "You are not getting married to Paul.", question: "Avec qui te maries-tu ?" },
      { pronoun: "il", form: "se marie", full: "il se marie", ipa: "/il sə ma.ʁi/", en: "he is getting married", example: "Il se marie cet été.", exampleEn: "He is getting married this summer.", negative: "Il ne se marie pas cet été.", negativeEn: "He is not getting married this summer.", question: "Quand se marie-t-il ?" },
      { pronoun: "elle", form: "se marie", full: "elle se marie", ipa: "/ɛl sə ma.ʁi/", en: "she is getting married", example: "Elle se marie à la mairie.", exampleEn: "She is getting married at city hall.", negative: "Elle ne se marie pas à la mairie.", negativeEn: "She is not getting married at city hall.", question: "Où se marie-t-elle ?" },
      { pronoun: "nous", form: "nous marions", full: "nous nous marions", ipa: "/nu nu ma.ʁjɔ̃/", en: "we are getting married", example: "Nous nous marions en septembre.", exampleEn: "We are getting married in September.", negative: "Nous ne nous marions pas en septembre.", negativeEn: "We are not getting married in September.", question: "Est-ce que nous nous marions en septembre ?" },
      { pronoun: "vous", form: "vous mariez", full: "vous vous mariez", ipa: "/vu vu ma.ʁje/", en: "you are getting married", example: "Vous vous mariez bientôt.", exampleEn: "You are getting married soon.", negative: "Vous ne vous mariez pas bientôt.", negativeEn: "You are not getting married soon.", question: "Vous mariez-vous bientôt ?" },
      { pronoun: "ils", form: "se marient", full: "ils se marient", ipa: "/il sə ma.ʁi/", en: "they are getting married", example: "Ils se marient samedi.", exampleEn: "They are getting married on Saturday.", negative: "Ils ne se marient pas samedi.", negativeEn: "They are not getting married on Saturday.", question: "Se marient-ils samedi ?" },
      { pronoun: "elles", form: "se marient", full: "elles se marient", ipa: "/ɛl sə ma.ʁi/", en: "they are getting married", example: "Elles se marient après leurs études.", exampleEn: "They are getting married after their studies.", negative: "Elles ne se marient pas après leurs études.", negativeEn: "They are not getting married after their studies.", question: "Quand se marient-elles ?" }
    ];

    const seVoirRows = [
      { pronoun: "je", form: "me vois", full: "je me vois", ipa: "/ʒə mə vwa/", en: "I see myself", example: "Je me vois dans le miroir.", exampleEn: "I see myself in the mirror.", negative: "Je ne me vois pas dans le miroir.", negativeEn: "I do not see myself in the mirror.", question: "Est-ce que je me vois dans le miroir ?" },
      { pronoun: "tu", form: "te vois", full: "tu te vois", ipa: "/ty tə vwa/", en: "you see yourself", example: "Tu te vois dans la photo.", exampleEn: "You see yourself in the photo.", negative: "Tu ne te vois pas dans la photo.", negativeEn: "You do not see yourself in the photo.", question: "Te vois-tu dans la photo ?" },
      { pronoun: "il", form: "se voit", full: "il se voit", ipa: "/il sə vwa/", en: "he sees himself", example: "Il se voit dans le miroir.", exampleEn: "He sees himself in the mirror.", negative: "Il ne se voit pas dans le miroir.", negativeEn: "He does not see himself in the mirror.", question: "Se voit-il dans le miroir ?" },
      { pronoun: "elle", form: "se voit", full: "elle se voit", ipa: "/ɛl sə vwa/", en: "she sees herself", example: "Elle se voit sur l’écran.", exampleEn: "She sees herself on the screen.", negative: "Elle ne se voit pas sur l’écran.", negativeEn: "She does not see herself on the screen.", question: "Est-ce qu’elle se voit sur l’écran ?" },
      { pronoun: "nous", form: "nous voyons", full: "nous nous voyons", ipa: "/nu nu vwa.jɔ̃/", en: "we see each other", example: "Nous nous voyons chaque semaine.", exampleEn: "We see each other every week.", negative: "Nous ne nous voyons pas chaque semaine.", negativeEn: "We do not see each other every week.", question: "Est-ce que nous nous voyons chaque semaine ?" },
      { pronoun: "vous", form: "vous voyez", full: "vous vous voyez", ipa: "/vu vu vwa.je/", en: "you see each other / yourself", example: "Vous vous voyez souvent.", exampleEn: "You see each other often.", negative: "Vous ne vous voyez pas souvent.", negativeEn: "You do not see each other often.", question: "Vous voyez-vous souvent ?" },
      { pronoun: "ils", form: "se voient", full: "ils se voient", ipa: "/il sə vwa/", en: "they see each other", example: "Ils se voient souvent.", exampleEn: "They see each other often.", negative: "Ils ne se voient pas souvent.", negativeEn: "They do not see each other often.", question: "Se voient-ils souvent ?" },
      { pronoun: "elles", form: "se voient", full: "elles se voient", ipa: "/ɛl sə vwa/", en: "they see each other", example: "Elles se voient le week-end.", exampleEn: "They see each other on weekends.", negative: "Elles ne se voient pas le week-end.", negativeEn: "They do not see each other on weekends.", question: "Quand se voient-elles ?" }
    ];

    const seRegarderRows = [
      { pronoun: "je", form: "me regarde", full: "je me regarde", ipa: "/ʒə mə ʁə.ɡaʁd/", en: "I look at myself", example: "Je me regarde dans le miroir.", exampleEn: "I look at myself in the mirror.", negative: "Je ne me regarde pas dans le miroir.", negativeEn: "I do not look at myself in the mirror.", question: "Est-ce que je me regarde dans le miroir ?" },
      { pronoun: "tu", form: "te regardes", full: "tu te regardes", ipa: "/ty tə ʁə.ɡaʁd/", en: "you look at yourself", example: "Tu te regardes dans la vitre.", exampleEn: "You look at yourself in the window.", negative: "Tu ne te regardes pas dans la vitre.", negativeEn: "You do not look at yourself in the window.", question: "Te regardes-tu dans la vitre ?" },
      { pronoun: "il", form: "se regarde", full: "il se regarde", ipa: "/il sə ʁə.ɡaʁd/", en: "he looks at himself", example: "Il se regarde dans le miroir.", exampleEn: "He looks at himself in the mirror.", negative: "Il ne se regarde pas dans le miroir.", negativeEn: "He does not look at himself in the mirror.", question: "Se regarde-t-il dans le miroir ?" },
      { pronoun: "elle", form: "se regarde", full: "elle se regarde", ipa: "/ɛl sə ʁə.ɡaʁd/", en: "she looks at herself", example: "Elle se regarde dans la glace.", exampleEn: "She looks at herself in the mirror.", negative: "Elle ne se regarde pas dans la glace.", negativeEn: "She does not look at herself in the mirror.", question: "Est-ce qu’elle se regarde dans la glace ?" },
      { pronoun: "nous", form: "nous regardons", full: "nous nous regardons", ipa: "/nu nu ʁə.ɡaʁ.dɔ̃/", en: "we look at each other", example: "Nous nous regardons dans les yeux.", exampleEn: "We look into each other’s eyes.", negative: "Nous ne nous regardons pas dans les yeux.", negativeEn: "We do not look into each other’s eyes.", question: "Est-ce que nous nous regardons dans les yeux ?" },
      { pronoun: "vous", form: "vous regardez", full: "vous vous regardez", ipa: "/vu vu ʁə.ɡaʁ.de/", en: "you look at each other / yourself", example: "Vous vous regardez dans le miroir.", exampleEn: "You look at yourselves in the mirror.", negative: "Vous ne vous regardez pas dans le miroir.", negativeEn: "You do not look at yourselves in the mirror.", question: "Vous regardez-vous dans le miroir ?" },
      { pronoun: "ils", form: "se regardent", full: "ils se regardent", ipa: "/il sə ʁə.ɡaʁd/", en: "they look at each other", example: "Ils se regardent en silence.", exampleEn: "They look at each other silently.", negative: "Ils ne se regardent pas en silence.", negativeEn: "They do not look at each other silently.", question: "Se regardent-ils en silence ?" },
      { pronoun: "elles", form: "se regardent", full: "elles se regardent", ipa: "/ɛl sə ʁə.ɡaʁd/", en: "they look at each other", example: "Elles se regardent et sourient.", exampleEn: "They look at each other and smile.", negative: "Elles ne se regardent pas et ne sourient pas.", negativeEn: "They do not look at each other or smile.", question: "Pourquoi se regardent-elles ?" }
    ];

    const seDireRows = [
      { pronoun: "je", form: "me dis", full: "je me dis", ipa: "/ʒə mə di/", en: "I say to myself", example: "Je me dis que tout va bien.", exampleEn: "I tell myself that everything is fine.", negative: "Je ne me dis pas que tout va bien.", negativeEn: "I do not tell myself that everything is fine.", question: "Est-ce que je me dis que tout va bien ?" },
      { pronoun: "tu", form: "te dis", full: "tu te dis", ipa: "/ty tə di/", en: "you say to yourself", example: "Tu te dis qu’il faut essayer.", exampleEn: "You tell yourself that you have to try.", negative: "Tu ne te dis pas qu’il faut essayer.", negativeEn: "You do not tell yourself that you have to try.", question: "Que te dis-tu avant l’examen ?" },
      { pronoun: "il", form: "se dit", full: "il se dit", ipa: "/il sə di/", en: "he says to himself", example: "Il se dit qu’il est prêt.", exampleEn: "He tells himself that he is ready.", negative: "Il ne se dit pas qu’il est prêt.", negativeEn: "He does not tell himself that he is ready.", question: "Se dit-il qu’il est prêt ?" },
      { pronoun: "elle", form: "se dit", full: "elle se dit", ipa: "/ɛl sə di/", en: "she says to herself", example: "Elle se dit la vérité.", exampleEn: "She tells herself the truth.", negative: "Elle ne se dit pas la vérité.", negativeEn: "She does not tell herself the truth.", question: "Est-ce qu’elle se dit la vérité ?" },
      { pronoun: "nous", form: "nous disons", full: "nous nous disons", ipa: "/nu nu di.zɔ̃/", en: "we say to each other", example: "Nous nous disons bonjour en arrivant.", exampleEn: "We say hello to each other when we arrive.", negative: "Nous ne nous disons pas bonjour en arrivant.", negativeEn: "We do not say hello to each other when we arrive.", question: "Est-ce que nous nous disons bonjour en arrivant ?" },
      { pronoun: "vous", form: "vous dites", full: "vous vous dites", ipa: "/vu vu dit/", en: "you say to each other", example: "Vous vous dites la vérité.", exampleEn: "You tell each other the truth.", negative: "Vous ne vous dites pas la vérité.", negativeEn: "You do not tell each other the truth.", question: "Vous dites-vous la vérité ?" },
      { pronoun: "ils", form: "se disent", full: "ils se disent", ipa: "/il sə diz/", en: "they say to each other", example: "Ils se disent tout.", exampleEn: "They tell each other everything.", negative: "Ils ne se disent pas tout.", negativeEn: "They do not tell each other everything.", question: "Se disent-ils tout ?" },
      { pronoun: "elles", form: "se disent", full: "elles se disent", ipa: "/ɛl sə diz/", en: "they say to each other", example: "Elles se disent au revoir le soir.", exampleEn: "They say goodbye to each other in the evening.", negative: "Elles ne se disent pas au revoir le soir.", negativeEn: "They do not say goodbye to each other in the evening.", question: "Quand se disent-elles au revoir ?" }
    ];

    const seVendreRows = [
      { pronoun: "je", form: "me vends", full: "je me vends", ipa: "/ʒə mə vɑ̃/", en: "I market myself", example: "Je me vends bien en entretien.", exampleEn: "I market myself well in an interview.", negative: "Je ne me vends pas bien en entretien.", negativeEn: "I do not market myself well in an interview.", question: "Est-ce que je me vends bien en entretien ?" },
      { pronoun: "tu", form: "te vends", full: "tu te vends", ipa: "/ty tə vɑ̃/", en: "you market yourself", example: "Tu te vends bien auprès des clients.", exampleEn: "You market yourself well to clients.", negative: "Tu ne te vends pas bien auprès des clients.", negativeEn: "You do not market yourself well to clients.", question: "Comment te vends-tu auprès des clients ?" },
      { pronoun: "il", form: "se vend", full: "il se vend", ipa: "/il sə vɑ̃/", en: "it sells / is sold", example: "Ce livre se vend bien.", exampleEn: "This book sells well.", negative: "Ce livre ne se vend pas bien.", negativeEn: "This book does not sell well.", question: "Ce livre se vend-il bien ?" },
      { pronoun: "elle", form: "se vend", full: "elle se vend", ipa: "/ɛl sə vɑ̃/", en: "it sells / is sold", example: "Cette robe se vend bien en ligne.", exampleEn: "This dress sells well online.", negative: "Cette robe ne se vend pas bien en ligne.", negativeEn: "This dress does not sell well online.", question: "Cette robe se vend-elle bien en ligne ?" },
      { pronoun: "nous", form: "nous vendons", full: "nous nous vendons", ipa: "/nu nu vɑ̃.dɔ̃/", en: "we market ourselves", example: "Nous nous vendons bien comme équipe.", exampleEn: "We market ourselves well as a team.", negative: "Nous ne nous vendons pas bien comme équipe.", negativeEn: "We do not market ourselves well as a team.", question: "Est-ce que nous nous vendons bien comme équipe ?" },
      { pronoun: "vous", form: "vous vendez", full: "vous vous vendez", ipa: "/vu vu vɑ̃.de/", en: "you market yourself / yourselves", example: "Vous vous vendez bien en entretien.", exampleEn: "You market yourselves well in interviews.", negative: "Vous ne vous vendez pas bien en entretien.", negativeEn: "You do not market yourselves well in interviews.", question: "Vous vendez-vous bien en entretien ?" },
      { pronoun: "ils", form: "se vendent", full: "ils se vendent", ipa: "/il sə vɑ̃d/", en: "they sell / are sold", example: "Ces billets se vendent vite.", exampleEn: "These tickets sell quickly.", negative: "Ces billets ne se vendent pas vite.", negativeEn: "These tickets do not sell quickly.", question: "Ces billets se vendent-ils vite ?" },
      { pronoun: "elles", form: "se vendent", full: "elles se vendent", ipa: "/ɛl sə vɑ̃d/", en: "they sell / are sold", example: "Ces places se vendent rapidement.", exampleEn: "These seats sell quickly.", negative: "Ces places ne se vendent pas rapidement.", negativeEn: "These seats do not sell quickly.", question: "Ces places se vendent-elles rapidement ?" }
    ];

    const seSouvenirRows = [
      { pronoun: "je", form: "me souviens", full: "je me souviens", ipa: "/ʒə mə su.vjɛ̃/", en: "I remember", example: "Je me souviens de son nom.", exampleEn: "I remember his or her name.", negative: "Je ne me souviens pas de son nom.", negativeEn: "I do not remember his or her name.", question: "Est-ce que je me souviens de son nom ?" },
      { pronoun: "tu", form: "te souviens", full: "tu te souviens", ipa: "/ty tə su.vjɛ̃/", en: "you remember", example: "Tu te souviens de cette chanson.", exampleEn: "You remember this song.", negative: "Tu ne te souviens pas de cette chanson.", negativeEn: "You do not remember this song.", question: "De quoi te souviens-tu ?" },
      { pronoun: "il", form: "se souvient", full: "il se souvient", ipa: "/il sə su.vjɛ̃/", en: "he remembers", example: "Il se souvient de l’adresse.", exampleEn: "He remembers the address.", negative: "Il ne se souvient pas de l’adresse.", negativeEn: "He does not remember the address.", question: "Se souvient-il de l’adresse ?" },
      { pronoun: "elle", form: "se souvient", full: "elle se souvient", ipa: "/ɛl sə su.vjɛ̃/", en: "she remembers", example: "Elle se souvient de ce jour.", exampleEn: "She remembers that day.", negative: "Elle ne se souvient pas de ce jour.", negativeEn: "She does not remember that day.", question: "Est-ce qu’elle se souvient de ce jour ?" },
      { pronoun: "nous", form: "nous souvenons", full: "nous nous souvenons", ipa: "/nu nu su.və.nɔ̃/", en: "we remember", example: "Nous nous souvenons de ce voyage.", exampleEn: "We remember that trip.", negative: "Nous ne nous souvenons pas de ce voyage.", negativeEn: "We do not remember that trip.", question: "Est-ce que nous nous souvenons de ce voyage ?" },
      { pronoun: "vous", form: "vous souvenez", full: "vous vous souvenez", ipa: "/vu vu su.və.ne/", en: "you remember", example: "Vous vous souvenez de la règle.", exampleEn: "You remember the rule.", negative: "Vous ne vous souvenez pas de la règle.", negativeEn: "You do not remember the rule.", question: "Vous souvenez-vous de la règle ?" },
      { pronoun: "ils", form: "se souviennent", full: "ils se souviennent", ipa: "/il sə su.vjɛn/", en: "they remember", example: "Ils se souviennent du chemin.", exampleEn: "They remember the way.", negative: "Ils ne se souviennent pas du chemin.", negativeEn: "They do not remember the way.", question: "De quoi se souviennent-ils ?" },
      { pronoun: "elles", form: "se souviennent", full: "elles se souviennent", ipa: "/ɛl sə su.vjɛn/", en: "they remember", example: "Elles se souviennent de leur voyage.", exampleEn: "They remember their trip.", negative: "Elles ne se souviennent pas de leur voyage.", negativeEn: "They do not remember their trip.", question: "Se souviennent-elles de leur voyage ?" }
    ];

    const sEnvolerRows = [
      { pronoun: "je", form: "m’envole", full: "je m’envole", ipa: "/ʒə mɑ̃.vɔl/", en: "I fly away / take off", example: "Je m’envole demain matin.", exampleEn: "I fly out tomorrow morning.", negative: "Je ne m’envole pas demain matin.", negativeEn: "I am not flying out tomorrow morning.", question: "Est-ce que je m’envole demain matin ?" },
      { pronoun: "tu", form: "t’envoles", full: "tu t’envoles", ipa: "/ty tɑ̃.vɔl/", en: "you fly away / take off", example: "Tu t’envoles pour Paris.", exampleEn: "You are flying to Paris.", negative: "Tu ne t’envoles pas pour Paris.", negativeEn: "You are not flying to Paris.", question: "Quand t’envoles-tu pour Paris ?" },
      { pronoun: "il", form: "s’envole", full: "il s’envole", ipa: "/il sɑ̃.vɔl/", en: "it flies away / takes off", example: "L’avion s’envole à midi.", exampleEn: "The plane takes off at noon.", negative: "L’avion ne s’envole pas à midi.", negativeEn: "The plane does not take off at noon.", question: "À quelle heure s’envole l’avion ?" },
      { pronoun: "elle", form: "s’envole", full: "elle s’envole", ipa: "/ɛl sɑ̃.vɔl/", en: "she flies away / takes off", example: "Elle s’envole pour Montréal.", exampleEn: "She is flying to Montreal.", negative: "Elle ne s’envole pas pour Montréal.", negativeEn: "She is not flying to Montreal.", question: "Est-ce qu’elle s’envole pour Montréal ?" },
      { pronoun: "nous", form: "nous envolons", full: "nous nous envolons", ipa: "/nu nu.zɑ̃.vɔ.lɔ̃/", en: "we fly away / take off", example: "Nous nous envolons après le déjeuner.", exampleEn: "We fly out after lunch.", negative: "Nous ne nous envolons pas après le déjeuner.", negativeEn: "We do not fly out after lunch.", question: "Est-ce que nous nous envolons après le déjeuner ?" },
      { pronoun: "vous", form: "vous envolez", full: "vous vous envolez", ipa: "/vu vu.zɑ̃.vɔ.le/", en: "you fly away / take off", example: "Vous vous envolez bientôt.", exampleEn: "You are flying out soon.", negative: "Vous ne vous envolez pas bientôt.", negativeEn: "You are not flying out soon.", question: "Vous envolez-vous bientôt ?" },
      { pronoun: "ils", form: "s’envolent", full: "ils s’envolent", ipa: "/il sɑ̃.vɔl/", en: "they fly away / take off", example: "Les oiseaux s’envolent au coucher du soleil.", exampleEn: "The birds fly away at sunset.", negative: "Les oiseaux ne s’envolent pas au coucher du soleil.", negativeEn: "The birds do not fly away at sunset.", question: "Quand s’envolent les oiseaux ?" },
      { pronoun: "elles", form: "s’envolent", full: "elles s’envolent", ipa: "/ɛl sɑ̃.vɔl/", en: "they fly away / take off", example: "Elles s’envolent dès l’aube.", exampleEn: "They fly away at dawn.", negative: "Elles ne s’envolent pas dès l’aube.", negativeEn: "They do not fly away at dawn.", question: "Quand s’envolent-elles ?" }
    ];

    const reverRows = [
      { pronoun: "je", form: "rêve", full: "je rêve", ipa: "/ʒə ʁɛv/", en: "I dream", example: "Je rêve de vacances.", exampleEn: "I dream of a vacation.", negative: "Je ne rêve pas de vacances.", negativeEn: "I do not dream of a vacation.", question: "De quoi est-ce que je rêve ?" },
      { pronoun: "tu", form: "rêves", full: "tu rêves", ipa: "/ty ʁɛv/", en: "you dream", example: "Tu rêves souvent de voyages.", exampleEn: "You often dream of traveling.", negative: "Tu ne rêves pas souvent de voyages.", negativeEn: "You do not often dream of traveling.", question: "De quoi rêves-tu souvent ?" },
      { pronoun: "il", form: "rêve", full: "il rêve", ipa: "/il ʁɛv/", en: "he dreams", example: "Il rêve de devenir musicien.", exampleEn: "He dreams of becoming a musician.", negative: "Il ne rêve pas de devenir musicien.", negativeEn: "He does not dream of becoming a musician.", question: "De quoi rêve-t-il ?" },
      { pronoun: "elle", form: "rêve", full: "elle rêve", ipa: "/ɛl ʁɛv/", en: "she dreams", example: "Elle rêve en regardant les nuages.", exampleEn: "She dreams while looking at the clouds.", negative: "Elle ne rêve pas en regardant les nuages.", negativeEn: "She does not dream while looking at the clouds.", question: "Est-ce qu’elle rêve en regardant les nuages ?" },
      { pronoun: "nous", form: "rêvons", full: "nous rêvons", ipa: "/nu ʁɛ.vɔ̃/", en: "we dream", example: "Nous rêvons de vivre près de la mer.", exampleEn: "We dream of living near the sea.", negative: "Nous ne rêvons pas de vivre près de la mer.", negativeEn: "We do not dream of living near the sea.", question: "Est-ce que nous rêvons de vivre près de la mer ?" },
      { pronoun: "vous", form: "rêvez", full: "vous rêvez", ipa: "/vu ʁɛ.ve/", en: "you dream", example: "Vous rêvez d’un nouveau travail.", exampleEn: "You dream of a new job.", negative: "Vous ne rêvez pas d’un nouveau travail.", negativeEn: "You do not dream of a new job.", question: "Rêvez-vous d’un nouveau travail ?" },
      { pronoun: "ils", form: "rêvent", full: "ils rêvent", ipa: "/il ʁɛv/", en: "they dream", example: "Ils rêvent de voyager ensemble.", exampleEn: "They dream of traveling together.", negative: "Ils ne rêvent pas de voyager ensemble.", negativeEn: "They do not dream of traveling together.", question: "De quoi rêvent-ils ?" },
      { pronoun: "elles", form: "rêvent", full: "elles rêvent", ipa: "/ɛl ʁɛv/", en: "they dream", example: "Elles rêvent d’une grande maison.", exampleEn: "They dream of a big house.", negative: "Elles ne rêvent pas d’une grande maison.", negativeEn: "They do not dream of a big house.", question: "De quoi rêvent-elles ?" }
    ];

    const arreterRows = [
      { pronoun: "je", form: "arrête", full: "j’arrête", ipa: "/ʒa.ʁɛt/", en: "I stop", example: "J’arrête de travailler à six heures.", exampleEn: "I stop working at six o’clock.", negative: "Je n’arrête pas de travailler à six heures.", negativeEn: "I do not stop working at six o’clock.", question: "À quelle heure est-ce que j’arrête de travailler ?" },
      { pronoun: "tu", form: "arrêtes", full: "tu arrêtes", ipa: "/ty a.ʁɛt/", en: "you stop", example: "Tu arrêtes de parler pendant le film.", exampleEn: "You stop talking during the movie.", negative: "Tu n’arrêtes pas de parler pendant le film.", negativeEn: "You do not stop talking during the movie.", question: "Pourquoi arrêtes-tu de parler ?" },
      { pronoun: "il", form: "arrête", full: "il arrête", ipa: "/i.la.ʁɛt/", en: "he stops", example: "Il arrête la voiture devant l’école.", exampleEn: "He stops the car in front of the school.", negative: "Il n’arrête pas la voiture devant l’école.", negativeEn: "He does not stop the car in front of the school.", question: "Où arrête-t-il la voiture ?" },
      { pronoun: "elle", form: "arrête", full: "elle arrête", ipa: "/ɛ.la.ʁɛt/", en: "she stops", example: "Elle arrête de fumer.", exampleEn: "She stops smoking.", negative: "Elle n’arrête pas de fumer.", negativeEn: "She does not stop smoking.", question: "Est-ce qu’elle arrête de fumer ?" },
      { pronoun: "nous", form: "arrêtons", full: "nous arrêtons", ipa: "/nu.za.ʁɛ.tɔ̃/", en: "we stop", example: "Nous arrêtons le film ici.", exampleEn: "We stop the movie here.", negative: "Nous n’arrêtons pas le film ici.", negativeEn: "We do not stop the movie here.", question: "Est-ce que nous arrêtons le film ici ?" },
      { pronoun: "vous", form: "arrêtez", full: "vous arrêtez", ipa: "/vu.za.ʁɛ.te/", en: "you stop", example: "Vous arrêtez la musique.", exampleEn: "You stop the music.", negative: "Vous n’arrêtez pas la musique.", negativeEn: "You do not stop the music.", question: "Qu’est-ce que vous arrêtez ?" },
      { pronoun: "ils", form: "arrêtent", full: "ils arrêtent", ipa: "/il.za.ʁɛt/", en: "they stop", example: "Ils arrêtent de jouer à midi.", exampleEn: "They stop playing at noon.", negative: "Ils n’arrêtent pas de jouer à midi.", negativeEn: "They do not stop playing at noon.", question: "Quand arrêtent-ils de jouer ?" },
      { pronoun: "elles", form: "arrêtent", full: "elles arrêtent", ipa: "/ɛl.za.ʁɛt/", en: "they stop", example: "Elles arrêtent leur voiture devant la gare.", exampleEn: "They stop their car in front of the train station.", negative: "Elles n’arrêtent pas leur voiture devant la gare.", negativeEn: "They do not stop their car in front of the train station.", question: "Où arrêtent-elles leur voiture ?" }
    ];

    const sAssumerRows = [
      { pronoun: "je", form: "m’assume", full: "je m’assume", ipa: "/ʒə ma.sym/", en: "I accept myself", example: "Je m’assume comme je suis.", exampleEn: "I accept myself as I am.", negative: "Je ne m’assume pas comme je suis.", negativeEn: "I do not accept myself as I am.", question: "Est-ce que je m’assume comme je suis ?" },
      { pronoun: "tu", form: "t’assumes", full: "tu t’assumes", ipa: "/ty ta.sym/", en: "you accept yourself", example: "Tu t’assumes davantage maintenant.", exampleEn: "You accept yourself more now.", negative: "Tu ne t’assumes pas davantage maintenant.", negativeEn: "You do not accept yourself more now.", question: "Est-ce que tu t’assumes davantage maintenant ?" },
      { pronoun: "il", form: "s’assume", full: "il s’assume", ipa: "/il sa.sym/", en: "he accepts himself", example: "Il s’assume sans honte.", exampleEn: "He accepts himself without shame.", negative: "Il ne s’assume pas sans honte.", negativeEn: "He does not accept himself without shame.", question: "S’assume-t-il sans honte ?" },
      { pronoun: "elle", form: "s’assume", full: "elle s’assume", ipa: "/ɛl sa.sym/", en: "she accepts herself", example: "Elle s’assume complètement.", exampleEn: "She fully accepts herself.", negative: "Elle ne s’assume pas complètement.", negativeEn: "She does not fully accept herself.", question: "Est-ce qu’elle s’assume complètement ?" },
      { pronoun: "nous", form: "nous assumons", full: "nous nous assumons", ipa: "/nu nu.za.sy.mɔ̃/", en: "we accept ourselves", example: "Nous nous assumons tels que nous sommes.", exampleEn: "We accept ourselves as we are.", negative: "Nous ne nous assumons pas tels que nous sommes.", negativeEn: "We do not accept ourselves as we are.", question: "Est-ce que nous nous assumons tels que nous sommes ?" },
      { pronoun: "vous", form: "vous assumez", full: "vous vous assumez", ipa: "/vu vu.za.sy.me/", en: "you accept yourself / yourselves", example: "Vous vous assumez davantage.", exampleEn: "You accept yourselves more.", negative: "Vous ne vous assumez pas davantage.", negativeEn: "You do not accept yourselves more.", question: "Vous assumez-vous davantage ?" },
      { pronoun: "ils", form: "s’assument", full: "ils s’assument", ipa: "/il sa.sym/", en: "they accept themselves", example: "Ils s’assument malgré leurs défauts.", exampleEn: "They accept themselves despite their flaws.", negative: "Ils ne s’assument pas malgré leurs défauts.", negativeEn: "They do not accept themselves despite their flaws.", question: "S’assument-ils malgré leurs défauts ?" },
      { pronoun: "elles", form: "s’assument", full: "elles s’assument", ipa: "/ɛl sa.sym/", en: "they accept themselves", example: "Elles s’assument enfin.", exampleEn: "They finally accept themselves.", negative: "Elles ne s’assument pas encore.", negativeEn: "They do not accept themselves yet.", question: "Quand s’assument-elles enfin ?" }
    ];

    const sEnnuyerRows = [
      { pronoun: "je", form: "m’ennuie", full: "je m’ennuie", ipa: "/ʒə mɑ̃.nɥi/", en: "I am bored", example: "Je m’ennuie quand j’attends.", exampleEn: "I get bored when I wait.", negative: "Je ne m’ennuie pas quand j’attends.", negativeEn: "I do not get bored when I wait.", question: "Pourquoi est-ce que je m’ennuie quand j’attends ?" },
      { pronoun: "tu", form: "t’ennuies", full: "tu t’ennuies", ipa: "/ty tɑ̃.nɥi/", en: "you are bored", example: "Tu t’ennuies en classe.", exampleEn: "You are bored in class.", negative: "Tu ne t’ennuies pas en classe.", negativeEn: "You are not bored in class.", question: "Est-ce que tu t’ennuies en classe ?" },
      { pronoun: "il", form: "s’ennuie", full: "il s’ennuie", ipa: "/il sɑ̃.nɥi/", en: "he is bored", example: "Il s’ennuie le dimanche.", exampleEn: "He gets bored on Sundays.", negative: "Il ne s’ennuie pas le dimanche.", negativeEn: "He does not get bored on Sundays.", question: "Pourquoi s’ennuie-t-il le dimanche ?" },
      { pronoun: "elle", form: "s’ennuie", full: "elle s’ennuie", ipa: "/ɛl sɑ̃.nɥi/", en: "she is bored", example: "Elle s’ennuie sans ses amis.", exampleEn: "She is bored without her friends.", negative: "Elle ne s’ennuie pas sans ses amis.", negativeEn: "She is not bored without her friends.", question: "Est-ce qu’elle s’ennuie sans ses amis ?" },
      { pronoun: "nous", form: "nous ennuyons", full: "nous nous ennuyons", ipa: "/nu nu.zɑ̃.nɥi.jɔ̃/", en: "we are bored", example: "Nous nous ennuyons parfois au bureau.", exampleEn: "We are sometimes bored at the office.", negative: "Nous ne nous ennuyons pas au bureau.", negativeEn: "We are not bored at the office.", question: "Est-ce que nous nous ennuyons parfois au bureau ?" },
      { pronoun: "vous", form: "vous ennuyez", full: "vous vous ennuyez", ipa: "/vu vu.zɑ̃.nɥi.je/", en: "you are bored", example: "Vous vous ennuyez pendant le trajet.", exampleEn: "You get bored during the trip.", negative: "Vous ne vous ennuyez pas pendant le trajet.", negativeEn: "You do not get bored during the trip.", question: "Vous ennuyez-vous pendant le trajet ?" },
      { pronoun: "ils", form: "s’ennuient", full: "ils s’ennuient", ipa: "/il sɑ̃.nɥi/", en: "they are bored", example: "Ils s’ennuient pendant le film.", exampleEn: "They are bored during the movie.", negative: "Ils ne s’ennuient pas pendant le film.", negativeEn: "They are not bored during the movie.", question: "Pourquoi s’ennuient-ils pendant le film ?" },
      { pronoun: "elles", form: "s’ennuient", full: "elles s’ennuient", ipa: "/ɛl sɑ̃.nɥi/", en: "they are bored", example: "Elles s’ennuient quand il pleut.", exampleEn: "They get bored when it rains.", negative: "Elles ne s’ennuient pas quand il pleut.", negativeEn: "They do not get bored when it rains.", question: "Quand s’ennuient-elles ?" }
    ];

    const seDetendreRows = [
      { pronoun: "je", form: "me détends", full: "je me détends", ipa: "/ʒə mə de.tɑ̃/", en: "I relax", example: "Je me détends en lisant.", exampleEn: "I relax by reading.", negative: "Je ne me détends pas en lisant.", negativeEn: "I do not relax by reading.", question: "Est-ce que je me détends en lisant ?" },
      { pronoun: "tu", form: "te détends", full: "tu te détends", ipa: "/ty tə de.tɑ̃/", en: "you relax", example: "Tu te détends après le travail.", exampleEn: "You relax after work.", negative: "Tu ne te détends pas après le travail.", negativeEn: "You do not relax after work.", question: "Comment te détends-tu après le travail ?" },
      { pronoun: "il", form: "se détend", full: "il se détend", ipa: "/il sə de.tɑ̃/", en: "he relaxes", example: "Il se détend en écoutant de la musique.", exampleEn: "He relaxes by listening to music.", negative: "Il ne se détend pas en écoutant de la musique.", negativeEn: "He does not relax by listening to music.", question: "Comment se détend-il ?" },
      { pronoun: "elle", form: "se détend", full: "elle se détend", ipa: "/ɛl sə de.tɑ̃/", en: "she relaxes", example: "Elle se détend au bord de la mer.", exampleEn: "She relaxes by the sea.", negative: "Elle ne se détend pas au bord de la mer.", negativeEn: "She does not relax by the sea.", question: "Est-ce qu’elle se détend au bord de la mer ?" },
      { pronoun: "nous", form: "nous détendons", full: "nous nous détendons", ipa: "/nu nu de.tɑ̃.dɔ̃/", en: "we relax", example: "Nous nous détendons le week-end.", exampleEn: "We relax on weekends.", negative: "Nous ne nous détendons pas le week-end.", negativeEn: "We do not relax on weekends.", question: "Est-ce que nous nous détendons le week-end ?" },
      { pronoun: "vous", form: "vous détendez", full: "vous vous détendez", ipa: "/vu vu de.tɑ̃.de/", en: "you relax", example: "Vous vous détendez après le sport.", exampleEn: "You relax after sports.", negative: "Vous ne vous détendez pas après le sport.", negativeEn: "You do not relax after sports.", question: "Vous détendez-vous après le sport ?" },
      { pronoun: "ils", form: "se détendent", full: "ils se détendent", ipa: "/il sə de.tɑ̃d/", en: "they relax", example: "Ils se détendent à la maison.", exampleEn: "They relax at home.", negative: "Ils ne se détendent pas à la maison.", negativeEn: "They do not relax at home.", question: "Où se détendent-ils ?" },
      { pronoun: "elles", form: "se détendent", full: "elles se détendent", ipa: "/ɛl sə de.tɑ̃d/", en: "they relax", example: "Elles se détendent avant de dormir.", exampleEn: "They relax before sleeping.", negative: "Elles ne se détendent pas avant de dormir.", negativeEn: "They do not relax before sleeping.", question: "Quand se détendent-elles ?" }
    ];

    const seCalmerRows = [
      { pronoun: "je", form: "me calme", full: "je me calme", ipa: "/ʒə mə kalm/", en: "I calm down", example: "Je me calme en respirant profondément.", exampleEn: "I calm down by breathing deeply.", negative: "Je ne me calme pas en respirant profondément.", negativeEn: "I do not calm down by breathing deeply.", question: "Est-ce que je me calme en respirant profondément ?" },
      { pronoun: "tu", form: "te calmes", full: "tu te calmes", ipa: "/ty tə kalm/", en: "you calm down", example: "Tu te calmes vite.", exampleEn: "You calm down quickly.", negative: "Tu ne te calmes pas vite.", negativeEn: "You do not calm down quickly.", question: "Est-ce que tu te calmes vite ?" },
      { pronoun: "il", form: "se calme", full: "il se calme", ipa: "/il sə kalm/", en: "he calms down", example: "Il se calme après quelques minutes.", exampleEn: "He calms down after a few minutes.", negative: "Il ne se calme pas après quelques minutes.", negativeEn: "He does not calm down after a few minutes.", question: "Quand se calme-t-il ?" },
      { pronoun: "elle", form: "se calme", full: "elle se calme", ipa: "/ɛl sə kalm/", en: "she calms down", example: "Elle se calme avec de la musique.", exampleEn: "She calms down with music.", negative: "Elle ne se calme pas avec de la musique.", negativeEn: "She does not calm down with music.", question: "Est-ce qu’elle se calme avec de la musique ?" },
      { pronoun: "nous", form: "nous calmons", full: "nous nous calmons", ipa: "/nu nu kal.mɔ̃/", en: "we calm down", example: "Nous nous calmons avant de répondre.", exampleEn: "We calm down before answering.", negative: "Nous ne nous calmons pas avant de répondre.", negativeEn: "We do not calm down before answering.", question: "Est-ce que nous nous calmons avant de répondre ?" },
      { pronoun: "vous", form: "vous calmez", full: "vous vous calmez", ipa: "/vu vu kal.me/", en: "you calm down", example: "Vous vous calmez après la dispute.", exampleEn: "You calm down after the argument.", negative: "Vous ne vous calmez pas après la dispute.", negativeEn: "You do not calm down after the argument.", question: "Vous calmez-vous après la dispute ?" },
      { pronoun: "ils", form: "se calment", full: "ils se calment", ipa: "/il sə kalm/", en: "they calm down", example: "Ils se calment quand le professeur arrive.", exampleEn: "They calm down when the teacher arrives.", negative: "Ils ne se calment pas quand le professeur arrive.", negativeEn: "They do not calm down when the teacher arrives.", question: "Quand se calment-ils ?" },
      { pronoun: "elles", form: "se calment", full: "elles se calment", ipa: "/ɛl sə kalm/", en: "they calm down", example: "Elles se calment peu à peu.", exampleEn: "They calm down little by little.", negative: "Elles ne se calment pas tout de suite.", negativeEn: "They do not calm down right away.", question: "Comment se calment-elles ?" }
    ];

    const seBaignerRows = [
      { pronoun: "je", form: "me baigne", full: "je me baigne", ipa: "/ʒə mə bɛɲ/", en: "I swim / bathe", example: "Je me baigne dans la mer en été.", exampleEn: "I swim in the sea in summer.", negative: "Je ne me baigne pas dans la mer en été.", negativeEn: "I do not swim in the sea in summer.", question: "Est-ce que je me baigne dans la mer en été ?" },
      { pronoun: "tu", form: "te baignes", full: "tu te baignes", ipa: "/ty tə bɛɲ/", en: "you swim / bathe", example: "Tu te baignes à la piscine.", exampleEn: "You swim at the pool.", negative: "Tu ne te baignes pas à la piscine.", negativeEn: "You do not swim at the pool.", question: "Où te baignes-tu ?" },
      { pronoun: "il", form: "se baigne", full: "il se baigne", ipa: "/il sə bɛɲ/", en: "he swims / bathes", example: "Il se baigne tous les matins.", exampleEn: "He swims every morning.", negative: "Il ne se baigne pas tous les matins.", negativeEn: "He does not swim every morning.", question: "Quand se baigne-t-il ?" },
      { pronoun: "elle", form: "se baigne", full: "elle se baigne", ipa: "/ɛl sə bɛɲ/", en: "she swims / bathes", example: "Elle se baigne dans le lac.", exampleEn: "She swims in the lake.", negative: "Elle ne se baigne pas dans le lac.", negativeEn: "She does not swim in the lake.", question: "Est-ce qu’elle se baigne dans le lac ?" },
      { pronoun: "nous", form: "nous baignons", full: "nous nous baignons", ipa: "/nu nu bɛ.ɲɔ̃/", en: "we swim / bathe", example: "Nous nous baignons après le déjeuner.", exampleEn: "We swim after lunch.", negative: "Nous ne nous baignons pas après le déjeuner.", negativeEn: "We do not swim after lunch.", question: "Est-ce que nous nous baignons après le déjeuner ?" },
      { pronoun: "vous", form: "vous baignez", full: "vous vous baignez", ipa: "/vu vu bɛ.ɲe/", en: "you swim / bathe", example: "Vous vous baignez à la plage.", exampleEn: "You swim at the beach.", negative: "Vous ne vous baignez pas à la plage.", negativeEn: "You do not swim at the beach.", question: "Vous baignez-vous à la plage ?" },
      { pronoun: "ils", form: "se baignent", full: "ils se baignent", ipa: "/il sə bɛɲ/", en: "they swim / bathe", example: "Ils se baignent dans la rivière.", exampleEn: "They swim in the river.", negative: "Ils ne se baignent pas dans la rivière.", negativeEn: "They do not swim in the river.", question: "Où se baignent-ils ?" },
      { pronoun: "elles", form: "se baignent", full: "elles se baignent", ipa: "/ɛl sə bɛɲ/", en: "they swim / bathe", example: "Elles se baignent quand il fait chaud.", exampleEn: "They swim when it is hot.", negative: "Elles ne se baignent pas quand il fait chaud.", negativeEn: "They do not swim when it is hot.", question: "Quand se baignent-elles ?" }
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
      { pronoun: "je", form: "coûte", full: "je coûte", en: "I cost", example: "Je coûte cher à l’entreprise.", exampleEn: "I cost the company a lot.", negative: "Je ne coûte pas cher à l’entreprise.", negativeEn: "I do not cost the company much." },
      { pronoun: "tu", form: "coûtes", full: "tu coûtes", en: "you cost", example: "Tu coûtes beaucoup d’argent à tes parents.", exampleEn: "You cost your parents a lot of money.", negative: "Tu ne coûtes pas beaucoup d’argent à tes parents.", negativeEn: "You do not cost your parents much money." },
      { pronoun: "il", form: "coûte", full: "il coûte", en: "it costs", example: "Il coûte cinq euros.", exampleEn: "It costs five euros.", negative: "Il ne coûte pas cinq euros.", negativeEn: "It does not cost five euros.", question: "Combien coûte-t-il ?" },
      { pronoun: "elle", form: "coûte", full: "elle coûte", en: "it costs", example: "Elle coûte trop cher.", exampleEn: "It costs too much.", negative: "Elle ne coûte pas trop cher.", negativeEn: "It does not cost too much." },
      { pronoun: "nous", form: "coûtons", full: "nous coûtons", en: "we cost", example: "Nous coûtons trop cher à l’équipe.", exampleEn: "We cost the team too much.", negative: "Nous ne coûtons pas trop cher à l’équipe.", negativeEn: "We do not cost the team too much." },
      { pronoun: "vous", form: "coûtez", full: "vous coûtez", en: "you cost", example: "Vous coûtez moins cher que d’autres prestataires.", exampleEn: "You cost less than other service providers.", negative: "Vous ne coûtez pas moins cher que d’autres prestataires.", negativeEn: "You do not cost less than other service providers." },
      { pronoun: "ils", form: "coûtent", full: "ils coûtent", en: "they cost", example: "Ils coûtent trois euros.", exampleEn: "They cost three euros.", negative: "Ils ne coûtent pas trois euros.", negativeEn: "They do not cost three euros." },
      { pronoun: "elles", form: "coûtent", full: "elles coûtent", en: "they cost", example: "Elles coûtent cher.", exampleEn: "They cost a lot.", negative: "Elles ne coûtent pas cher.", negativeEn: "They do not cost a lot." }
    ];

    const entrerRows = [
      { pronoun: "je", form: "entre", full: "j’entre", ipa: "/ʒɑ̃tʁ/", en: "I enter / go in", example: "J’entre dans la salle.", exampleEn: "I enter the room.", negative: "Je n’entre pas dans la salle.", negativeEn: "I do not enter the room." },
      { pronoun: "tu", form: "entres", full: "tu entres", ipa: "/ty ɑ̃tʁ/", en: "you enter / go in", example: "Tu entres par cette porte.", exampleEn: "You enter through this door.", negative: "Tu n’entres pas par cette porte.", negativeEn: "You do not enter through this door." },
      { pronoun: "il", form: "entre", full: "il entre", ipa: "/il ɑ̃tʁ/", en: "he enters / goes in", example: "Il entre au bureau à neuf heures.", exampleEn: "He enters the office at nine.", negative: "Il n’entre pas au bureau à neuf heures.", negativeEn: "He does not enter the office at nine." },
      { pronoun: "elle", form: "entre", full: "elle entre", ipa: "/ɛl ɑ̃tʁ/", en: "she enters / goes in", example: "Elle entre dans la cuisine.", exampleEn: "She goes into the kitchen.", negative: "Elle n’entre pas dans la cuisine.", negativeEn: "She does not go into the kitchen." },
      { pronoun: "nous", form: "entrons", full: "nous entrons", ipa: "/nu.zɑ̃.tʁɔ̃/", en: "we enter / go in", example: "Nous entrons dans le musée.", exampleEn: "We enter the museum.", negative: "Nous n’entrons pas dans le musée.", negativeEn: "We do not enter the museum." },
      { pronoun: "vous", form: "entrez", full: "vous entrez", ipa: "/vu.zɑ̃.tʁe/", en: "you enter / go in", example: "Vous entrez sans bruit.", exampleEn: "You enter quietly.", negative: "Vous n’entrez pas sans bruit.", negativeEn: "You do not enter quietly." },
      { pronoun: "ils", form: "entrent", full: "ils entrent", ipa: "/il.zɑ̃tʁ/", en: "they enter / go in", example: "Ils entrent en classe.", exampleEn: "They enter the classroom.", negative: "Ils n’entrent pas en classe.", negativeEn: "They do not enter the classroom." },
      { pronoun: "elles", form: "entrent", full: "elles entrent", ipa: "/ɛl.zɑ̃tʁ/", en: "they enter / go in", example: "Elles entrent dans le magasin.", exampleEn: "They enter the store.", negative: "Elles n’entrent pas dans le magasin.", negativeEn: "They do not enter the store." }
    ];

    const monterRows = [
      { pronoun: "je", form: "monte", full: "je monte", ipa: "/ʒə mɔ̃t/", en: "I go up / take up", example: "Je monte au deuxième étage.", exampleEn: "I go up to the second floor.", negative: "Je ne monte pas au deuxième étage.", negativeEn: "I do not go up to the second floor." },
      { pronoun: "tu", form: "montes", full: "tu montes", ipa: "/ty mɔ̃t/", en: "you go up / take up", example: "Tu montes dans le bus.", exampleEn: "You get on the bus.", negative: "Tu ne montes pas dans le bus.", negativeEn: "You do not get on the bus." },
      { pronoun: "il", form: "monte", full: "il monte", ipa: "/il mɔ̃t/", en: "he goes up / takes up", example: "Il monte l’escalier.", exampleEn: "He goes up the stairs.", negative: "Il ne monte pas l’escalier.", negativeEn: "He does not go up the stairs." },
      { pronoun: "elle", form: "monte", full: "elle monte", ipa: "/ɛl mɔ̃t/", en: "she goes up / takes up", example: "Elle monte à cheval.", exampleEn: "She rides a horse.", negative: "Elle ne monte pas à cheval.", negativeEn: "She does not ride a horse." },
      { pronoun: "nous", form: "montons", full: "nous montons", ipa: "/nu mɔ̃.tɔ̃/", en: "we go up / take up", example: "Nous montons sur la colline.", exampleEn: "We climb the hill.", negative: "Nous ne montons pas sur la colline.", negativeEn: "We do not climb the hill." },
      { pronoun: "vous", form: "montez", full: "vous montez", ipa: "/vu mɔ̃.te/", en: "you go up / take up", example: "Vous montez dans le train.", exampleEn: "You get on the train.", negative: "Vous ne montez pas dans le train.", negativeEn: "You do not get on the train." },
      { pronoun: "ils", form: "montent", full: "ils montent", ipa: "/il mɔ̃t/", en: "they go up / take up", example: "Ils montent les valises.", exampleEn: "They take the suitcases upstairs.", negative: "Ils ne montent pas les valises.", negativeEn: "They do not take the suitcases upstairs." },
      { pronoun: "elles", form: "montent", full: "elles montent", ipa: "/ɛl mɔ̃t/", en: "they go up / take up", example: "Elles montent sur scène.", exampleEn: "They go onstage.", negative: "Elles ne montent pas sur scène.", negativeEn: "They do not go onstage." }
    ];

    const descendreRows = [
      { pronoun: "je", form: "descends", full: "je descends", ipa: "/ʒə de.sɑ̃/", en: "I go down / get off", example: "Je descends à la prochaine station.", exampleEn: "I get off at the next station.", negative: "Je ne descends pas à la prochaine station.", negativeEn: "I do not get off at the next station." },
      { pronoun: "tu", form: "descends", full: "tu descends", ipa: "/ty de.sɑ̃/", en: "you go down / get off", example: "Tu descends l’escalier.", exampleEn: "You go down the stairs.", negative: "Tu ne descends pas l’escalier.", negativeEn: "You do not go down the stairs." },
      { pronoun: "il", form: "descend", full: "il descend", ipa: "/il de.sɑ̃/", en: "he goes down / gets off", example: "Il descend du train.", exampleEn: "He gets off the train.", negative: "Il ne descend pas du train.", negativeEn: "He does not get off the train." },
      { pronoun: "elle", form: "descend", full: "elle descend", ipa: "/ɛl de.sɑ̃/", en: "she goes down / takes down", example: "Elle descend les cartons à la cave.", exampleEn: "She takes the boxes down to the cellar.", negative: "Elle ne descend pas les cartons à la cave.", negativeEn: "She does not take the boxes down to the cellar." },
      { pronoun: "nous", form: "descendons", full: "nous descendons", ipa: "/nu de.sɑ̃.dɔ̃/", en: "we go down / get off", example: "Nous descendons au rez-de-chaussée.", exampleEn: "We go down to the ground floor.", negative: "Nous ne descendons pas au rez-de-chaussée.", negativeEn: "We do not go down to the ground floor." },
      { pronoun: "vous", form: "descendez", full: "vous descendez", ipa: "/vu de.sɑ̃.de/", en: "you go down / get off", example: "Vous descendez du bus ici.", exampleEn: "You get off the bus here.", negative: "Vous ne descendez pas du bus ici.", negativeEn: "You do not get off the bus here." },
      { pronoun: "ils", form: "descendent", full: "ils descendent", ipa: "/il de.sɑ̃d/", en: "they go down / take down", example: "Ils descendent la rue à pied.", exampleEn: "They walk down the street.", negative: "Ils ne descendent pas la rue à pied.", negativeEn: "They do not walk down the street." },
      { pronoun: "elles", form: "descendent", full: "elles descendent", ipa: "/ɛl de.sɑ̃d/", en: "they go down / get off", example: "Elles descendent à la cave.", exampleEn: "They go down to the cellar.", negative: "Elles ne descendent pas à la cave.", negativeEn: "They do not go down to the cellar." }
    ];

    const revenirRows = [
      { pronoun: "je", form: "reviens", full: "je reviens", ipa: "/ʒə ʁə.vjɛ̃/", en: "I come back", example: "Je reviens demain matin.", exampleEn: "I am coming back tomorrow morning.", negative: "Je ne reviens pas demain matin.", negativeEn: "I am not coming back tomorrow morning." },
      { pronoun: "tu", form: "reviens", full: "tu reviens", ipa: "/ty ʁə.vjɛ̃/", en: "you come back", example: "Tu reviens de Paris ce soir.", exampleEn: "You are coming back from Paris tonight.", negative: "Tu ne reviens pas de Paris ce soir.", negativeEn: "You are not coming back from Paris tonight." },
      { pronoun: "il", form: "revient", full: "il revient", ipa: "/il ʁə.vjɛ̃/", en: "he comes back", example: "Il revient du travail à six heures.", exampleEn: "He comes back from work at six.", negative: "Il ne revient pas du travail à six heures.", negativeEn: "He does not come back from work at six." },
      { pronoun: "elle", form: "revient", full: "elle revient", ipa: "/ɛl ʁə.vjɛ̃/", en: "she comes back", example: "Elle revient dans une heure.", exampleEn: "She is coming back in an hour.", negative: "Elle ne revient pas dans une heure.", negativeEn: "She is not coming back in an hour." },
      { pronoun: "nous", form: "revenons", full: "nous revenons", ipa: "/nu ʁə.və.nɔ̃/", en: "we come back", example: "Nous revenons ensemble.", exampleEn: "We are coming back together.", negative: "Nous ne revenons pas ensemble.", negativeEn: "We are not coming back together." },
      { pronoun: "vous", form: "revenez", full: "vous revenez", ipa: "/vu ʁə.və.ne/", en: "you come back", example: "Vous revenez souvent ici.", exampleEn: "You often come back here.", negative: "Vous ne revenez pas souvent ici.", negativeEn: "You do not often come back here." },
      { pronoun: "ils", form: "reviennent", full: "ils reviennent", ipa: "/il ʁə.vjɛn/", en: "they come back", example: "Ils reviennent pour le dîner.", exampleEn: "They are coming back for dinner.", negative: "Ils ne reviennent pas pour le dîner.", negativeEn: "They are not coming back for dinner." },
      { pronoun: "elles", form: "reviennent", full: "elles reviennent", ipa: "/ɛl ʁə.vjɛn/", en: "they come back", example: "Elles reviennent de vacances.", exampleEn: "They are coming back from vacation.", negative: "Elles ne reviennent pas de vacances.", negativeEn: "They are not coming back from vacation." }
    ];

    const retournerRows = [
      { pronoun: "je", form: "retourne", full: "je retourne", ipa: "/ʒə ʁə.tuʁn/", en: "I return / turn over", example: "Je retourne au travail lundi.", exampleEn: "I return to work on Monday.", negative: "Je ne retourne pas au travail lundi.", negativeEn: "I do not return to work on Monday." },
      { pronoun: "tu", form: "retournes", full: "tu retournes", ipa: "/ty ʁə.tuʁn/", en: "you return / turn over", example: "Tu retournes la crêpe.", exampleEn: "You flip the crepe.", negative: "Tu ne retournes pas la crêpe.", negativeEn: "You do not flip the crepe." },
      { pronoun: "il", form: "retourne", full: "il retourne", ipa: "/il ʁə.tuʁn/", en: "he returns / turns over", example: "Il retourne en France cet été.", exampleEn: "He returns to France this summer.", negative: "Il ne retourne pas en France cet été.", negativeEn: "He does not return to France this summer." },
      { pronoun: "elle", form: "retourne", full: "elle retourne", ipa: "/ɛl ʁə.tuʁn/", en: "she returns / turns over", example: "Elle retourne chez elle.", exampleEn: "She returns home.", negative: "Elle ne retourne pas chez elle.", negativeEn: "She does not return home." },
      { pronoun: "nous", form: "retournons", full: "nous retournons", ipa: "/nu ʁə.tuʁ.nɔ̃/", en: "we return / turn over", example: "Nous retournons au même restaurant.", exampleEn: "We return to the same restaurant.", negative: "Nous ne retournons pas au même restaurant.", negativeEn: "We do not return to the same restaurant." },
      { pronoun: "vous", form: "retournez", full: "vous retournez", ipa: "/vu ʁə.tuʁ.ne/", en: "you return / turn over", example: "Vous retournez le document signé.", exampleEn: "You return the signed document.", negative: "Vous ne retournez pas le document signé.", negativeEn: "You do not return the signed document." },
      { pronoun: "ils", form: "retournent", full: "ils retournent", ipa: "/il ʁə.tuʁn/", en: "they return / turn over", example: "Ils retournent à l’hôtel.", exampleEn: "They return to the hotel.", negative: "Ils ne retournent pas à l’hôtel.", negativeEn: "They do not return to the hotel." },
      { pronoun: "elles", form: "retournent", full: "elles retournent", ipa: "/ɛl ʁə.tuʁn/", en: "they return / turn over", example: "Elles retournent les cartes.", exampleEn: "They turn over the cards.", negative: "Elles ne retournent pas les cartes.", negativeEn: "They do not turn over the cards." }
    ];

    const resterRows = [
      { pronoun: "je", form: "reste", full: "je reste", ipa: "/ʒə ʁɛst/", en: "I stay / remain", example: "Je reste à la maison ce soir.", exampleEn: "I am staying home tonight.", negative: "Je ne reste pas à la maison ce soir.", negativeEn: "I am not staying home tonight." },
      { pronoun: "tu", form: "restes", full: "tu restes", ipa: "/ty ʁɛst/", en: "you stay / remain", example: "Tu restes ici une semaine.", exampleEn: "You are staying here for a week.", negative: "Tu ne restes pas ici une semaine.", negativeEn: "You are not staying here for a week." },
      { pronoun: "il", form: "reste", full: "il reste", ipa: "/il ʁɛst/", en: "he stays / remains", example: "Il reste calme.", exampleEn: "He remains calm.", negative: "Il ne reste pas calme.", negativeEn: "He does not remain calm." },
      { pronoun: "elle", form: "reste", full: "elle reste", ipa: "/ɛl ʁɛst/", en: "she stays / remains", example: "Elle reste avec ses amis.", exampleEn: "She stays with her friends.", negative: "Elle ne reste pas avec ses amis.", negativeEn: "She does not stay with her friends." },
      { pronoun: "nous", form: "restons", full: "nous restons", ipa: "/nu ʁɛs.tɔ̃/", en: "we stay / remain", example: "Nous restons deux jours à Lyon.", exampleEn: "We are staying in Lyon for two days.", negative: "Nous ne restons pas deux jours à Lyon.", negativeEn: "We are not staying in Lyon for two days." },
      { pronoun: "vous", form: "restez", full: "vous restez", ipa: "/vu ʁɛs.te/", en: "you stay / remain", example: "Vous restez près de la porte.", exampleEn: "You stay near the door.", negative: "Vous ne restez pas près de la porte.", negativeEn: "You do not stay near the door." },
      { pronoun: "ils", form: "restent", full: "ils restent", ipa: "/il ʁɛst/", en: "they stay / remain", example: "Ils restent au bureau tard.", exampleEn: "They stay at the office late.", negative: "Ils ne restent pas au bureau tard.", negativeEn: "They do not stay at the office late." },
      { pronoun: "elles", form: "restent", full: "elles restent", ipa: "/ɛl ʁɛst/", en: "they stay / remain", example: "Elles restent en contact.", exampleEn: "They stay in touch.", negative: "Elles ne restent pas en contact.", negativeEn: "They do not stay in touch." }
    ];

    const tomberRows = [
      { pronoun: "je", form: "tombe", full: "je tombe", ipa: "/ʒə tɔ̃b/", en: "I fall", example: "Je tombe souvent sur ce mot.", exampleEn: "I often come across this word.", negative: "Je ne tombe pas souvent sur ce mot.", negativeEn: "I do not often come across this word." },
      { pronoun: "tu", form: "tombes", full: "tu tombes", ipa: "/ty tɔ̃b/", en: "you fall", example: "Tu tombes dans l’escalier.", exampleEn: "You fall on the stairs.", negative: "Tu ne tombes pas dans l’escalier.", negativeEn: "You do not fall on the stairs." },
      { pronoun: "il", form: "tombe", full: "il tombe", ipa: "/il tɔ̃b/", en: "he / it falls", example: "Il tombe à la fin de la course.", exampleEn: "He falls at the end of the race.", negative: "Il ne tombe pas à la fin de la course.", negativeEn: "He does not fall at the end of the race." },
      { pronoun: "elle", form: "tombe", full: "elle tombe", ipa: "/ɛl tɔ̃b/", en: "she / it falls", example: "La pluie tombe doucement.", exampleEn: "The rain falls gently.", negative: "La pluie ne tombe pas doucement.", negativeEn: "The rain does not fall gently." },
      { pronoun: "nous", form: "tombons", full: "nous tombons", ipa: "/nu tɔ̃.bɔ̃/", en: "we fall", example: "Nous tombons d’accord sur ce point.", exampleEn: "We agree on this point.", negative: "Nous ne tombons pas d’accord sur ce point.", negativeEn: "We do not agree on this point." },
      { pronoun: "vous", form: "tombez", full: "vous tombez", ipa: "/vu tɔ̃.be/", en: "you fall", example: "Vous tombez au bon moment.", exampleEn: "You arrive at just the right time.", negative: "Vous ne tombez pas au bon moment.", negativeEn: "You do not arrive at the right time." },
      { pronoun: "ils", form: "tombent", full: "ils tombent", ipa: "/il tɔ̃b/", en: "they fall", example: "Ils tombent de fatigue.", exampleEn: "They are exhausted.", negative: "Ils ne tombent pas de fatigue.", negativeEn: "They are not exhausted." },
      { pronoun: "elles", form: "tombent", full: "elles tombent", ipa: "/ɛl tɔ̃b/", en: "they fall", example: "Les feuilles tombent en automne.", exampleEn: "The leaves fall in autumn.", negative: "Les feuilles ne tombent pas en automne.", negativeEn: "The leaves do not fall in autumn." }
    ];

    const naitreRows = [
      { pronoun: "je", form: "nais", full: "je nais", ipa: "/ʒə nɛ/", en: "I am born", example: "Je nais dans un petit village dans ce roman.", exampleEn: "I am born in a small village in this novel.", negative: "Je ne nais pas dans un petit village dans ce roman.", negativeEn: "I am not born in a small village in this novel." },
      { pronoun: "tu", form: "nais", full: "tu nais", ipa: "/ty nɛ/", en: "you are born", example: "Tu nais libre dans cette histoire.", exampleEn: "You are born free in this story.", negative: "Tu ne nais pas libre dans cette histoire.", negativeEn: "You are not born free in this story." },
      { pronoun: "il", form: "naît", full: "il naît", ipa: "/il nɛ/", en: "he / it is born", example: "Il naît en hiver dans le récit.", exampleEn: "He is born in winter in the story.", negative: "Il ne naît pas en hiver dans le récit.", negativeEn: "He is not born in winter in the story." },
      { pronoun: "elle", form: "naît", full: "elle naît", ipa: "/ɛl nɛ/", en: "she / it is born", example: "Une idée naît pendant la réunion.", exampleEn: "An idea is born during the meeting.", negative: "Aucune idée ne naît pendant la réunion.", negativeEn: "No idea is born during the meeting." },
      { pronoun: "nous", form: "naissons", full: "nous naissons", ipa: "/nu nɛ.sɔ̃/", en: "we are born", example: "Nous naissons tous égaux.", exampleEn: "We are all born equal.", negative: "Nous ne naissons pas tous égaux dans ce monde imaginaire.", negativeEn: "We are not all born equal in this imaginary world." },
      { pronoun: "vous", form: "naissez", full: "vous naissez", ipa: "/vu nɛ.se/", en: "you are born", example: "Vous naissez sous une bonne étoile dans ce conte.", exampleEn: "You are born under a lucky star in this tale.", negative: "Vous ne naissez pas sous une bonne étoile dans ce conte.", negativeEn: "You are not born under a lucky star in this tale." },
      { pronoun: "ils", form: "naissent", full: "ils naissent", ipa: "/il nɛs/", en: "they are born", example: "Ils naissent au printemps.", exampleEn: "They are born in spring.", negative: "Ils ne naissent pas au printemps.", negativeEn: "They are not born in spring." },
      { pronoun: "elles", form: "naissent", full: "elles naissent", ipa: "/ɛl nɛs/", en: "they are born", example: "Elles naissent en bonne santé.", exampleEn: "They are born healthy.", negative: "Elles ne naissent pas en bonne santé.", negativeEn: "They are not born healthy." }
    ];

    const mourirRows = [
      { pronoun: "je", form: "meurs", full: "je meurs", ipa: "/ʒə mœʁ/", en: "I die / am dying", example: "Je meurs de faim.", exampleEn: "I am starving.", negative: "Je ne meurs pas de faim.", negativeEn: "I am not starving." },
      { pronoun: "tu", form: "meurs", full: "tu meurs", ipa: "/ty mœʁ/", en: "you die / are dying", example: "Tu meurs de rire.", exampleEn: "You are dying of laughter.", negative: "Tu ne meurs pas de rire.", negativeEn: "You are not dying of laughter." },
      { pronoun: "il", form: "meurt", full: "il meurt", ipa: "/il mœʁ/", en: "he / it dies", example: "Il meurt à la fin du film.", exampleEn: "He dies at the end of the movie.", negative: "Il ne meurt pas à la fin du film.", negativeEn: "He does not die at the end of the movie." },
      { pronoun: "elle", form: "meurt", full: "elle meurt", ipa: "/ɛl mœʁ/", en: "she / it dies", example: "La plante meurt sans eau.", exampleEn: "The plant dies without water.", negative: "La plante ne meurt pas sans eau.", negativeEn: "The plant does not die without water." },
      { pronoun: "nous", form: "mourons", full: "nous mourons", ipa: "/nu mu.ʁɔ̃/", en: "we die / are dying", example: "Nous mourons d’envie de partir.", exampleEn: "We are dying to leave.", negative: "Nous ne mourons pas d’envie de partir.", negativeEn: "We are not dying to leave." },
      { pronoun: "vous", form: "mourez", full: "vous mourez", ipa: "/vu mu.ʁe/", en: "you die / are dying", example: "Vous mourez de curiosité.", exampleEn: "You are dying of curiosity.", negative: "Vous ne mourez pas de curiosité.", negativeEn: "You are not dying of curiosity." },
      { pronoun: "ils", form: "meurent", full: "ils meurent", ipa: "/il mœʁ/", en: "they die / are dying", example: "Ils meurent de soif dans le désert.", exampleEn: "They are dying of thirst in the desert.", negative: "Ils ne meurent pas de soif dans le désert.", negativeEn: "They are not dying of thirst in the desert." },
      { pronoun: "elles", form: "meurent", full: "elles meurent", ipa: "/ɛl mœʁ/", en: "they die / are dying", example: "Elles meurent de peur.", exampleEn: "They are scared to death.", negative: "Elles ne meurent pas de peur.", negativeEn: "They are not scared to death." }
    ];

    const devenirRows = [
      { pronoun: "je", form: "deviens", full: "je deviens", ipa: "/ʒə də.vjɛ̃/", en: "I become", example: "Je deviens plus patient.", exampleEn: "I am becoming more patient.", negative: "Je ne deviens pas plus patient.", negativeEn: "I am not becoming more patient." },
      { pronoun: "tu", form: "deviens", full: "tu deviens", ipa: "/ty də.vjɛ̃/", en: "you become", example: "Tu deviens très bon en français.", exampleEn: "You are becoming very good at French.", negative: "Tu ne deviens pas très bon en français.", negativeEn: "You are not becoming very good at French." },
      { pronoun: "il", form: "devient", full: "il devient", ipa: "/il də.vjɛ̃/", en: "he / it becomes", example: "Il devient médecin.", exampleEn: "He becomes a doctor.", negative: "Il ne devient pas médecin.", negativeEn: "He does not become a doctor." },
      { pronoun: "elle", form: "devient", full: "elle devient", ipa: "/ɛl də.vjɛ̃/", en: "she / it becomes", example: "Elle devient célèbre.", exampleEn: "She becomes famous.", negative: "Elle ne devient pas célèbre.", negativeEn: "She does not become famous." },
      { pronoun: "nous", form: "devenons", full: "nous devenons", ipa: "/nu də.və.nɔ̃/", en: "we become", example: "Nous devenons amis.", exampleEn: "We become friends.", negative: "Nous ne devenons pas amis.", negativeEn: "We do not become friends." },
      { pronoun: "vous", form: "devenez", full: "vous devenez", ipa: "/vu də.və.ne/", en: "you become", example: "Vous devenez plus confiants.", exampleEn: "You are becoming more confident.", negative: "Vous ne devenez pas plus confiants.", negativeEn: "You are not becoming more confident." },
      { pronoun: "ils", form: "deviennent", full: "ils deviennent", ipa: "/il də.vjɛn/", en: "they become", example: "Ils deviennent voisins.", exampleEn: "They become neighbors.", negative: "Ils ne deviennent pas voisins.", negativeEn: "They do not become neighbors." },
      { pronoun: "elles", form: "deviennent", full: "elles deviennent", ipa: "/ɛl də.vjɛn/", en: "they become", example: "Elles deviennent indépendantes.", exampleEn: "They become independent.", negative: "Elles ne deviennent pas indépendantes.", negativeEn: "They do not become independent." }
    ];

    const falloirRows = [
      { pronoun: "il", form: "faut", full: "il faut", en: "one must / needs to", example: "Il faut réserver une table.", exampleEn: "We need to reserve a table.", negative: "Il ne faut pas réserver de table.", negativeEn: "We must not reserve a table.", question: "Faut-il réserver une table ?" }
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

    const vivreRows = [
      { pronoun: "je", form: "vis", full: "je vis", ipa: "/ʒə vi/", en: "I live / experience", example: "Je vis à Lyon.", exampleEn: "I live in Lyon.", negative: "Je ne vis pas à Lyon.", negativeEn: "I do not live in Lyon.", question: "Où est-ce que je vis ?" },
      { pronoun: "tu", form: "vis", full: "tu vis", ipa: "/ty vi/", en: "you live / experience", example: "Tu vis avec tes parents.", exampleEn: "You live with your parents.", negative: "Tu ne vis pas avec tes parents.", negativeEn: "You do not live with your parents.", question: "Avec qui vis-tu ?" },
      { pronoun: "il", form: "vit", full: "il vit", ipa: "/il vi/", en: "he lives / experiences", example: "Il vit en France.", exampleEn: "He lives in France.", negative: "Il ne vit pas en France.", negativeEn: "He does not live in France.", question: "Où vit-il ?" },
      { pronoun: "elle", form: "vit", full: "elle vit", ipa: "/ɛl vi/", en: "she lives / experiences", example: "Elle vit seule.", exampleEn: "She lives alone.", negative: "Elle ne vit pas seule.", negativeEn: "She does not live alone.", question: "Vit-elle seule ?" },
      { pronoun: "nous", form: "vivons", full: "nous vivons", ipa: "/nu vi.vɔ̃/", en: "we live / experience", example: "Nous vivons près de la mer.", exampleEn: "We live near the sea.", negative: "Nous ne vivons pas près de la mer.", negativeEn: "We do not live near the sea.", question: "Où vivons-nous ?" },
      { pronoun: "vous", form: "vivez", full: "vous vivez", ipa: "/vu vi.ve/", en: "you live / experience", example: "Vous vivez en ville.", exampleEn: "You live in the city.", negative: "Vous ne vivez pas en ville.", negativeEn: "You do not live in the city.", question: "Est-ce que vous vivez en ville ?" },
      { pronoun: "ils", form: "vivent", full: "ils vivent", ipa: "/il viv/", en: "they live / experience", example: "Ils vivent dans le même quartier.", exampleEn: "They live in the same neighborhood.", negative: "Ils ne vivent pas dans le même quartier.", negativeEn: "They do not live in the same neighborhood.", question: "Où vivent-ils ?" },
      { pronoun: "elles", form: "vivent", full: "elles vivent", ipa: "/ɛl viv/", en: "they live / experience", example: "Elles vivent une grande aventure.", exampleEn: "They are experiencing a great adventure.", negative: "Elles ne vivent pas de grande aventure.", negativeEn: "They are not experiencing a great adventure.", question: "Quelle aventure vivent-elles ?" }
    ];

    const comprendreRows = [
      { pronoun: "je", form: "comprends", full: "je comprends", ipa: "/ʒə kɔ̃.pʁɑ̃/", en: "I understand", example: "Je comprends cette règle.", exampleEn: "I understand this rule.", negative: "Je ne comprends pas cette règle.", negativeEn: "I do not understand this rule.", question: "Est-ce que je comprends cette règle ?" },
      { pronoun: "tu", form: "comprends", full: "tu comprends", ipa: "/ty kɔ̃.pʁɑ̃/", en: "you understand", example: "Tu comprends le message.", exampleEn: "You understand the message.", negative: "Tu ne comprends pas le message.", negativeEn: "You do not understand the message.", question: "Comprends-tu le message ?" },
      { pronoun: "il", form: "comprend", full: "il comprend", ipa: "/il kɔ̃.pʁɑ̃/", en: "he understands", example: "Il comprend bien le problème.", exampleEn: "He understands the problem well.", negative: "Il ne comprend pas bien le problème.", negativeEn: "He does not understand the problem well.", question: "Comprend-il bien le problème ?" },
      { pronoun: "elle", form: "comprend", full: "elle comprend", ipa: "/ɛl kɔ̃.pʁɑ̃/", en: "she understands", example: "Elle comprend le français.", exampleEn: "She understands French.", negative: "Elle ne comprend pas le français.", negativeEn: "She does not understand French.", question: "Est-ce qu’elle comprend le français ?" },
      { pronoun: "nous", form: "comprenons", full: "nous comprenons", ipa: "/nu kɔ̃.pʁə.nɔ̃/", en: "we understand", example: "Nous comprenons la leçon.", exampleEn: "We understand the lesson.", negative: "Nous ne comprenons pas la leçon.", negativeEn: "We do not understand the lesson.", question: "Comprenons-nous la leçon ?" },
      { pronoun: "vous", form: "comprenez", full: "vous comprenez", ipa: "/vu kɔ̃.pʁə.ne/", en: "you understand", example: "Vous comprenez la consigne.", exampleEn: "You understand the instruction.", negative: "Vous ne comprenez pas la consigne.", negativeEn: "You do not understand the instruction.", question: "Que comprenez-vous ?" },
      { pronoun: "ils", form: "comprennent", full: "ils comprennent", ipa: "/il kɔ̃.pʁɛn/", en: "they understand", example: "Ils comprennent le plan.", exampleEn: "They understand the plan.", negative: "Ils ne comprennent pas le plan.", negativeEn: "They do not understand the plan.", question: "Comprennent-ils le plan ?" },
      { pronoun: "elles", form: "comprennent", full: "elles comprennent", ipa: "/ɛl kɔ̃.pʁɛn/", en: "they understand", example: "Elles comprennent les explications.", exampleEn: "They understand the explanations.", negative: "Elles ne comprennent pas les explications.", negativeEn: "They do not understand the explanations.", question: "Comprennent-elles les explications ?" }
    ];

    const attendreRows = [
      { pronoun: "j’", form: "attends", full: "j’attends", ipa: "/ʒa.tɑ̃/", en: "I wait / expect", example: "J’attends le bus.", exampleEn: "I am waiting for the bus.", negative: "Je n’attends pas le bus.", negativeEn: "I am not waiting for the bus.", question: "Est-ce que j’attends le bus ?" },
      {
        pronoun: "tu",
        form: "attends",
        full: "tu attends",
        ipa: "/ty a.tɑ̃/",
        en: "you wait / expect",
        examples: [
          { meaning: "Wait for someone", fr: "Tu attends ta sœur.", en: "You are waiting for your sister.", negative: "Tu n’attends pas ta sœur.", negativeEn: "You are not waiting for your sister.", question: "Qui attends-tu ?" },
          { meaning: "Imperative + direct object", statementLabel: "Imperative", fr: "Attends-moi !", en: "Wait for me!", negative: "Ne m’attends pas !", negativeEn: "Do not wait for me!", question: "Peux-tu m’attendre ?" }
        ]
      },
      { pronoun: "il", form: "attend", full: "il attend", ipa: "/il a.tɑ̃/", en: "he waits / expects", example: "Il attend son ami devant le café.", exampleEn: "He is waiting for his friend in front of the café.", negative: "Il n’attend pas son ami devant le café.", negativeEn: "He is not waiting for his friend in front of the café.", question: "Qui attend-il devant le café ?" },
      { pronoun: "elle", form: "attend", full: "elle attend", ipa: "/ɛl a.tɑ̃/", en: "she waits / expects", example: "Elle attend le train.", exampleEn: "She is waiting for the train.", negative: "Elle n’attend pas le train.", negativeEn: "She is not waiting for the train.", question: "Quel train attend-elle ?" },
      { pronoun: "nous", form: "attendons", full: "nous attendons", ipa: "/nu za.tɑ̃.dɔ̃/", en: "we wait / expect", example: "Nous attendons devant le cinéma.", exampleEn: "We are waiting in front of the cinema.", negative: "Nous n’attendons pas devant le cinéma.", negativeEn: "We are not waiting in front of the cinema.", question: "Où attendons-nous ?" },
      { pronoun: "vous", form: "attendez", full: "vous attendez", ipa: "/vu za.tɑ̃.de/", en: "you wait / expect", example: "Vous attendez le médecin.", exampleEn: "You are waiting for the doctor.", negative: "Vous n’attendez pas le médecin.", negativeEn: "You are not waiting for the doctor.", question: "Attendez-vous le médecin ?" },
      { pronoun: "ils", form: "attendent", full: "ils attendent", ipa: "/il za.tɑ̃d/", en: "they wait / expect", example: "Ils attendent le début du cours.", exampleEn: "They are waiting for the start of class.", negative: "Ils n’attendent pas le début du cours.", negativeEn: "They are not waiting for the start of class.", question: "Attendent-ils le début du cours ?" },
      { pronoun: "elles", form: "attendent", full: "elles attendent", ipa: "/ɛl za.tɑ̃d/", en: "they wait / expect", example: "Elles attendent une réponse.", exampleEn: "They are waiting for an answer.", negative: "Elles n’attendent pas de réponse.", negativeEn: "They are not waiting for an answer.", question: "Qu’attendent-elles ?" }
    ];

    const penserRows = [
      { pronoun: "je", form: "pense", full: "je pense", ipa: "/ʒə pɑ̃s/", en: "I think", example: "Je pense à mes amis.", exampleEn: "I am thinking about my friends.", negative: "Je ne pense pas à mes amis.", negativeEn: "I am not thinking about my friends.", question: "À qui est-ce que je pense ?" },
      {
        pronoun: "tu",
        form: "penses",
        full: "tu penses",
        ipa: "/ty pɑ̃s/",
        en: "you think",
        examples: [
          { meaning: "penser de (have an opinion)", fr: "Tu penses du bien de ce film.", en: "You think highly of this movie.", negative: "Tu ne penses pas du bien de ce film.", negativeEn: "You do not think highly of this movie.", question: "Que penses-tu de ce film ?" },
          { meaning: "penser que (think that)", fr: "Tu penses que c’est une bonne idée.", en: "You think that it is a good idea.", negative: "Tu ne penses pas que ce soit une bonne idée.", negativeEn: "You do not think that it is a good idea.", question: "Est-ce que tu penses que c’est une bonne idée ?" },
          { meaning: "en penser (think of it)", fr: "Tu en penses du bien.", en: "You think highly of it.", negative: "Tu n’en penses pas beaucoup de bien.", negativeEn: "You do not think very highly of it.", question: "Qu’en penses-tu ?" }
        ]
      },
      { pronoun: "il", form: "pense", full: "il pense", ipa: "/il pɑ̃s/", en: "he thinks", example: "Il pense à son voyage.", exampleEn: "He is thinking about his trip.", negative: "Il ne pense pas à son voyage.", negativeEn: "He is not thinking about his trip.", question: "À quoi pense-t-il ?" },
      { pronoun: "elle", form: "pense", full: "elle pense", ipa: "/ɛl pɑ̃s/", en: "she thinks", example: "Elle pense à appeler sa mère.", exampleEn: "She is thinking about calling her mother.", negative: "Elle ne pense pas à appeler sa mère.", negativeEn: "She is not thinking about calling her mother.", question: "Est-ce qu’elle pense à appeler sa mère ?" },
      { pronoun: "nous", form: "pensons", full: "nous pensons", ipa: "/nu pɑ̃.sɔ̃/", en: "we think", example: "Nous pensons à nos vacances.", exampleEn: "We are thinking about our vacation.", negative: "Nous ne pensons pas à nos vacances.", negativeEn: "We are not thinking about our vacation.", question: "À quoi pensons-nous ?" },
      { pronoun: "vous", form: "pensez", full: "vous pensez", ipa: "/vu pɑ̃.se/", en: "you think", example: "Vous pensez à demain.", exampleEn: "You are thinking about tomorrow.", negative: "Vous ne pensez pas à demain.", negativeEn: "You are not thinking about tomorrow.", question: "À quoi pensez-vous ?" },
      { pronoun: "ils", form: "pensent", full: "ils pensent", ipa: "/il pɑ̃s/", en: "they think", example: "Ils pensent à leur projet.", exampleEn: "They are thinking about their project.", negative: "Ils ne pensent pas à leur projet.", negativeEn: "They are not thinking about their project.", question: "À quoi pensent-ils ?" },
      { pronoun: "elles", form: "pensent", full: "elles pensent", ipa: "/ɛl pɑ̃s/", en: "they think", example: "Elles pensent à leurs amis.", exampleEn: "They are thinking about their friends.", negative: "Elles ne pensent pas à leurs amis.", negativeEn: "They are not thinking about their friends.", question: "À qui pensent-elles ?" }
    ];

    const porterRows = [
      { pronoun: "je", form: "porte", full: "je porte", ipa: "/ʒə pɔʁt/", en: "I wear / carry", example: "Je porte un manteau noir.", exampleEn: "I am wearing a black coat.", negative: "Je ne porte pas de manteau noir.", negativeEn: "I am not wearing a black coat.", question: "Qu’est-ce que je porte aujourd’hui ?" },
      { pronoun: "tu", form: "portes", full: "tu portes", ipa: "/ty pɔʁt/", en: "you wear / carry", example: "Tu portes cette valise.", exampleEn: "You are carrying this suitcase.", negative: "Tu ne portes pas cette valise.", negativeEn: "You are not carrying this suitcase.", question: "Portes-tu cette valise ?" },
      { pronoun: "il", form: "porte", full: "il porte", ipa: "/il pɔʁt/", en: "he wears / carries", example: "Il porte des lunettes.", exampleEn: "He wears glasses.", negative: "Il ne porte pas de lunettes.", negativeEn: "He does not wear glasses.", question: "Porte-t-il des lunettes ?" },
      { pronoun: "elle", form: "porte", full: "elle porte", ipa: "/ɛl pɔʁt/", en: "she wears / carries", example: "Elle porte une robe rouge.", exampleEn: "She is wearing a red dress.", negative: "Elle ne porte pas de robe rouge.", negativeEn: "She is not wearing a red dress.", question: "Quelle robe porte-t-elle ?" },
      { pronoun: "nous", form: "portons", full: "nous portons", ipa: "/nu pɔʁ.tɔ̃/", en: "we wear / carry", example: "Nous portons ces cartons ensemble.", exampleEn: "We are carrying these boxes together.", negative: "Nous ne portons pas ces cartons ensemble.", negativeEn: "We are not carrying these boxes together.", question: "Que portons-nous ensemble ?" },
      { pronoun: "vous", form: "portez", full: "vous portez", ipa: "/vu pɔʁ.te/", en: "you wear / carry", example: "Vous portez un chapeau.", exampleEn: "You are wearing a hat.", negative: "Vous ne portez pas de chapeau.", negativeEn: "You are not wearing a hat.", question: "Portez-vous un chapeau ?" },
      { pronoun: "ils", form: "portent", full: "ils portent", ipa: "/il pɔʁt/", en: "they wear / carry", example: "Ils portent leurs sacs à dos.", exampleEn: "They are carrying their backpacks.", negative: "Ils ne portent pas leurs sacs à dos.", negativeEn: "They are not carrying their backpacks.", question: "Quels sacs portent-ils ?" },
      { pronoun: "elles", form: "portent", full: "elles portent", ipa: "/ɛl pɔʁt/", en: "they wear / carry", example: "Elles portent des chaussures confortables.", exampleEn: "They are wearing comfortable shoes.", negative: "Elles ne portent pas de chaussures confortables.", negativeEn: "They are not wearing comfortable shoes.", question: "Quelles chaussures portent-elles ?" }
    ];

    const gagnerRows = [
      { pronoun: "je", form: "gagne", full: "je gagne", ipa: "/ʒə ɡaɲ/", en: "I win / earn", example: "Je gagne du temps en prenant le métro.", exampleEn: "I save time by taking the metro.", negative: "Je ne gagne pas de temps en prenant le métro.", negativeEn: "I do not save time by taking the metro.", question: "Est-ce que je gagne du temps en prenant le métro ?" },
      { pronoun: "tu", form: "gagnes", full: "tu gagnes", ipa: "/ty ɡaɲ/", en: "you win / earn", example: "Tu gagnes le match.", exampleEn: "You win the match.", negative: "Tu ne gagnes pas le match.", negativeEn: "You do not win the match.", question: "Gagnes-tu le match ?" },
      { pronoun: "il", form: "gagne", full: "il gagne", ipa: "/il ɡaɲ/", en: "he wins / earns", example: "Il gagne sa vie comme professeur.", exampleEn: "He earns a living as a teacher.", negative: "Il ne gagne pas sa vie comme professeur.", negativeEn: "He does not earn a living as a teacher.", question: "Comment gagne-t-il sa vie ?" },
      { pronoun: "elle", form: "gagne", full: "elle gagne", ipa: "/ɛl ɡaɲ/", en: "she wins / earns", example: "Elle gagne la course.", exampleEn: "She wins the race.", negative: "Elle ne gagne pas la course.", negativeEn: "She does not win the race.", question: "Gagne-t-elle la course ?" },
      { pronoun: "nous", form: "gagnons", full: "nous gagnons", ipa: "/nu ɡa.ɲɔ̃/", en: "we win / earn", example: "Nous gagnons le concours.", exampleEn: "We win the competition.", negative: "Nous ne gagnons pas le concours.", negativeEn: "We do not win the competition.", question: "Gagnons-nous le concours ?" },
      { pronoun: "vous", form: "gagnez", full: "vous gagnez", ipa: "/vu ɡa.ɲe/", en: "you win / earn", example: "Vous gagnez beaucoup d’argent.", exampleEn: "You earn a lot of money.", negative: "Vous ne gagnez pas beaucoup d’argent.", negativeEn: "You do not earn a lot of money.", question: "Est-ce que vous gagnez beaucoup d’argent ?" },
      { pronoun: "ils", form: "gagnent", full: "ils gagnent", ipa: "/il ɡaɲ/", en: "they win / earn", example: "Ils gagnent du temps.", exampleEn: "They save time.", negative: "Ils ne gagnent pas de temps.", negativeEn: "They do not save time.", question: "Comment gagnent-ils du temps ?" },
      { pronoun: "elles", form: "gagnent", full: "elles gagnent", ipa: "/ɛl ɡaɲ/", en: "they win / earn", example: "Elles gagnent le premier prix.", exampleEn: "They win first prize.", negative: "Elles ne gagnent pas le premier prix.", negativeEn: "They do not win first prize.", question: "Quel prix gagnent-elles ?" }
    ];

    const grammarVerbConfigs = [
      { tab: "grammar", tableId: "etreTable", rows: etreRows },
      { tab: "grammar", tableId: "avoirTable", rows: avoirRows }
    ];

    const verbStudyGroups = [
      {
        key: "irregular",
        title: "Irregular Verbs",
        indexTitle: "Irregular",
        descriptionHtml: "These high-frequency verbs do not follow the regular present-tense patterns, so it helps to learn each full present-tense set."
      },
      {
        key: "modal",
        title: "Modal Verbs",
        indexTitle: "Modal",
        descriptionHtml: "Modal verbs usually pair with another infinitive to express obligation, ability, desire, permission, or intention: <strong>je dois partir</strong>, <strong>je peux venir</strong>, <strong>tu veux rester</strong>. They are irregular, but grouping them separately makes their sentence pattern easier to spot."
      },
      {
        key: "similar",
        title: "Similar Irregular Verbs",
        indexTitle: "Same pattern",
        descriptionHtml: "<strong>Dormir, partir, sortir, servir,</strong> and <strong>sentir</strong> share a useful pattern: singular forms drop part of the stem, while plural forms bring it back."
      },
      {
        key: "regularEr",
        title: "Regular -er Verbs",
        indexTitle: "Regular -er",
        descriptionHtml: "These verbs follow <strong>-e, -es, -e, -ons, -ez, -ent</strong>. The je/tu/il/elle/ils/elles endings are normally silent and often sound alike; <strong>-ons</strong> and <strong>-ez</strong> are pronounced. Some verbs still change spelling to preserve a sound: <strong>nous mangeons</strong>, <strong>nous commençons</strong>, <strong>nous voyageons</strong>."
      },
      {
        key: "regularIr",
        title: "Regular -ir Verbs",
        indexTitle: "Regular -ir",
        descriptionHtml: "These verbs follow the <strong>finir</strong> pattern: <strong>-is, -is, -it, -issons, -issez, -issent</strong>. The singular endings are silent and sound alike; the plural forms pronounce the <strong>-iss-</strong> stem. This differs from irregular <strong>-ir</strong> verbs like <strong>venir</strong>, <strong>tenir</strong>, <strong>dormir</strong>, and <strong>partir</strong>."
      },
      {
        key: "regularRe",
        title: "Regular -re Verbs",
        indexTitle: "Regular -re",
        descriptionHtml: "These verbs follow <strong>-s, -s, -, -ons, -ez, -ent</strong>. The singular forms <strong>j’attends / tu attends / il attend</strong> sound alike because their final consonants are silent. In <strong>ils attendent</strong>, however, the stem-final <strong>d</strong> is pronounced: singular <strong>/atɑ̃/</strong> versus plural <strong>/atɑ̃d/</strong>."
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
        key: "apprendre",
        group: "irregular",
        label: "apprendre",
        title: "Apprendre — to learn",
        tag: "irregular",
        descriptionHtml: "<strong>Apprendre</strong> follows the same family as <strong>prendre</strong>: <strong>apprends / apprend</strong>, <strong>apprenons</strong>, <strong>apprenez</strong>, <strong>apprennent</strong>.",
        rows: apprendreRows
      },
      {
        key: "comprendre",
        group: "irregular",
        label: "comprendre",
        title: "Comprendre — to understand",
        tag: "prendre family",
        descriptionHtml: "<strong>Comprendre</strong> follows the <strong>prendre</strong> family: <strong>comprends / comprend</strong>, <strong>comprenons</strong>, <strong>comprenez</strong>, <strong>comprennent</strong>. Its past participle is <strong>compris</strong>.",
        rows: comprendreRows
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
        key: "devoir",
        group: "modal",
        label: "devoir",
        title: "Devoir — must / to have to / to owe",
        tag: "irregular modal verb",
        descriptionHtml: "<strong>Devoir</strong> is often followed by an infinitive for obligation: <strong>je dois partir</strong>, <strong>nous devons réserver</strong>. With a noun or amount, it can also mean “to owe”: <strong>je dois dix euros</strong>. In the present tense, <strong>ne dois pas</strong> often means “must not / should not”; “don’t have to” is often clearer as <strong>ne pas être obligé de</strong>.",
        rows: devoirRows
      },
      {
        key: "pouvoir",
        group: "modal",
        label: "pouvoir",
        title: "Pouvoir — can / to be able to",
        tag: "irregular modal verb",
        descriptionHtml: "<strong>Pouvoir</strong> is a common modal verb before another infinitive: <strong>je peux venir</strong>, <strong>tu peux aider</strong>. In first-person inversion, <strong>je peux</strong> usually becomes <strong>puis-je</strong>: <strong>Puis-je vous aider ?</strong> Unlike the other verbs in this group, <strong>pouvoir has no standard modern imperative</strong>.",
        rows: pouvoirRows
      },
      {
        key: "vouloir",
        group: "modal",
        label: "vouloir",
        title: "Vouloir — to want",
        tag: "irregular modal verb",
        descriptionHtml: "<strong>Vouloir</strong> is often followed by an infinitive: <strong>je veux partir</strong>, <strong>nous voulons visiter</strong>. It is also useful in polite requests with <strong>vous voulez</strong> and <strong>voulez-vous</strong>.",
        rows: vouloirRows
      },
      {
        key: "savoir",
        group: "irregular",
        label: "savoir",
        title: "Savoir — to know / to know how to",
        tag: "irregular",
        descriptionHtml: "<strong>Savoir</strong> means “to know” facts or information, and <strong>savoir + infinitive</strong> means “to know how to do something”: <strong>je sais nager</strong>. For “I don’t know whether...,” French often uses <strong>je ne sais pas si...</strong>.",
        rows: savoirRows
      },
      {
        key: "connaitre",
        group: "irregular",
        label: "connaître",
        title: "Connaître — to know / be familiar with",
        tag: "irregular",
        descriptionHtml: "<strong>Connaître</strong> is for knowing a person, place, or being familiar with something: <strong>je connais Marie</strong>, <strong>tu connais Paris</strong>. Use <strong>savoir</strong> for facts or knowing how to do something.",
        rows: connaitreRows
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
        key: "dire",
        group: "irregular",
        label: "dire",
        title: "Dire — to say / to tell",
        tag: "irregular",
        descriptionHtml: "<strong>Dire</strong> means “to say” or “to tell.” To say or tell something to someone, use <strong>dire quelque chose à quelqu’un</strong>: <strong>je dis la vérité à Marie</strong>. Watch the irregular <strong>vous dites</strong> form.",
        rows: direRows
      },
      {
        key: "offrir",
        group: "irregular",
        label: "offrir",
        title: "Offrir — to offer / give",
        tag: "irregular -ir",
        descriptionHtml: "<strong>Offrir</strong> is an <strong>-ir</strong> verb, but in the present tense it behaves like an <strong>-er</strong> verb: <strong>j’offre</strong>, <strong>tu offres</strong>, <strong>nous offrons</strong>. Its past participle is irregular: <strong>offert</strong>.",
        rows: offrirRows
      },
      {
        key: "ouvrir",
        group: "irregular",
        label: "ouvrir",
        title: "Ouvrir — to open",
        tag: "irregular -ir",
        descriptionHtml: "<strong>Ouvrir</strong> follows the same present-tense pattern as <strong>offrir</strong>: <strong>j’ouvre</strong>, <strong>tu ouvres</strong>, <strong>nous ouvrons</strong>. Its past participle is irregular: <strong>ouvert</strong>.",
        rows: ouvrirRows
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
        key: "vivre",
        group: "irregular",
        label: "vivre",
        title: "Vivre — to live / experience",
        tag: "irregular",
        descriptionHtml: "<strong>Vivre</strong> changes across the present tense: <strong>vis / vit</strong>, <strong>vivons</strong>, <strong>vivez</strong>, <strong>vivent</strong>. Its past participle is <strong>vécu</strong>.",
        rows: vivreRows
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
        group: "regularEr",
        label: "parler",
        title: "Parler — to speak / talk",
        tag: "regular -er",
        descriptionHtml: "<strong>Parler</strong> follows the regular -er present-tense pattern. Learn its three common patterns: <strong>parler français</strong> (speak French), <strong>parler à quelqu’un</strong> (talk to someone), and <strong>parler de quelque chose / quelqu’un</strong> (talk about something/someone).",
        rows: parlerRows
      },
      {
        key: "chercher",
        group: "regularEr",
        label: "chercher",
        title: "Chercher — to look for",
        tag: "regular -er",
        descriptionHtml: "<strong>Chercher</strong> follows the regular -er pattern. It means “to look for”; French does not need an extra word for “for.”",
        rows: chercherRows
      },
      {
        key: "manger",
        group: "regularEr",
        label: "manger",
        title: "Manger — to eat",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Manger</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous mangeons</strong>.",
        rows: mangerRows
      },
      {
        key: "inviter",
        group: "regularEr",
        label: "inviter",
        title: "Inviter — to invite",
        tag: "regular -er",
        descriptionHtml: "<strong>Inviter</strong> follows the regular -er pattern. The <strong>je</strong> form becomes <strong>j’invite</strong>.",
        rows: inviterRows
      },
      {
        key: "adorer",
        group: "regularEr",
        label: "adorer",
        title: "Adorer — to love / really like",
        tag: "regular -er",
        descriptionHtml: "<strong>Adorer</strong> follows the regular -er pattern and means “to love / really like.” It is stronger than <strong>aimer</strong>: <strong>j’adore ce film</strong>.",
        rows: adorerRows
      },
      {
        key: "detester",
        group: "regularEr",
        label: "détester",
        title: "Détester — to hate / really dislike",
        tag: "regular -er",
        descriptionHtml: "<strong>Détester</strong> follows the regular -er pattern and expresses strong dislike: <strong>je déteste attendre</strong>.",
        rows: detesterRows
      },
      {
        key: "preferer",
        group: "regularEr",
        label: "préférer",
        title: "Préférer — to prefer",
        tag: "regular -er with accent change",
        descriptionHtml: "<strong>Préférer</strong> uses regular -er endings, but the second <strong>é</strong> becomes <strong>è</strong> in the singular and ils/elles forms: <strong>je préfère</strong>, <strong>ils préfèrent</strong>. <strong>Nous préférons</strong> and <strong>vous préférez</strong> keep <strong>é</strong>. Use <strong>préférer A à B</strong> for “to prefer A to B.”",
        rows: prefererRows
      },
      {
        key: "gagner",
        group: "regularEr",
        label: "gagner",
        title: "Gagner — to win / earn",
        tag: "regular -er",
        descriptionHtml: "<strong>Gagner</strong> follows the regular -er pattern. Use it to win a game or prize, earn money, or save time: <strong>gagner le match</strong>, <strong>gagner de l’argent</strong>, <strong>gagner du temps</strong>.",
        rows: gagnerRows
      },
      {
        key: "penser",
        group: "regularEr",
        label: "penser",
        title: "Penser — to think",
        tag: "regular -er",
        descriptionHtml: "<strong>Penser à</strong> means “to think about”; <strong>penser de</strong> asks for an opinion; and <strong>penser que</strong> means “to think that.” Use <strong>en</strong> for “what one thinks of it”: <strong>Qu’en penses-tu ?</strong> In a negative sentence, <strong>ne pas penser que</strong> often introduces the subjunctive, as in <strong>je ne pense pas que ce soit...</strong>.",
        rows: penserRows
      },
      {
        key: "porter",
        group: "regularEr",
        label: "porter",
        title: "Porter — to wear / carry",
        tag: "regular -er",
        descriptionHtml: "<strong>Porter</strong> follows the regular -er pattern. It means both “to wear” clothing or accessories (<strong>porter un manteau</strong>) and “to carry” something (<strong>porter une valise</strong>).",
        rows: porterRows
      },
      {
        key: "finir",
        group: "regularIr",
        label: "finir",
        title: "Finir — to finish",
        tag: "regular -ir",
        descriptionHtml: "<strong>Finir</strong> follows the regular -ir pattern: <strong>finis, finis, finit, finissons, finissez, finissent</strong>.",
        rows: finirRows
      },
      {
        key: "choisir",
        group: "regularIr",
        label: "choisir",
        title: "Choisir — to choose",
        tag: "regular -ir",
        descriptionHtml: "<strong>Choisir</strong> follows the regular -ir pattern and is useful for menus, plans, and options.",
        rows: choisirRows
      },
      {
        key: "reussir",
        group: "regularIr",
        label: "réussir",
        title: "Réussir — to succeed / pass",
        tag: "regular -ir",
        descriptionHtml: "<strong>Réussir</strong> follows the regular -ir pattern. It can mean “to succeed” or “to pass” an exam.",
        rows: reussirRows
      },
      {
        key: "unir",
        group: "regularIr",
        label: "unir",
        title: "Unir — to unite / join",
        tag: "regular -ir",
        descriptionHtml: "<strong>Unir</strong> follows the regular -ir pattern and is useful for phrases like <strong>unir nos forces</strong>.",
        rows: unirRows
      },
      {
        key: "attendre",
        group: "regularRe",
        label: "attendre",
        title: "Attendre — to wait / expect",
        tag: "regular -re",
        descriptionHtml: "<strong>Attendre</strong> takes a direct object: <strong>attendre quelqu’un / quelque chose</strong>, with no equivalent of English “for.” In the imperative, say <strong>Attends-moi !</strong> for “Wait for me!” Its past participle is <strong>attendu</strong>.",
        rows: attendreRows
      },
      {
        key: "arriver",
        group: "regularEr",
        label: "arriver",
        title: "Arriver — to arrive / to manage",
        tag: "regular -er / être in passé composé",
        descriptionHtml: "<strong>Arriver</strong> follows the regular -er pattern in the present tense. In passé composé, it usually uses <strong>être</strong>: <strong>je suis arrivé</strong>.",
        rows: arriverRows
      },
      {
        key: "habiter",
        group: "regularEr",
        label: "habiter",
        title: "Habiter — to live",
        tag: "regular -er",
        descriptionHtml: "<strong>Habiter</strong> follows the regular -er pattern. The <strong>je</strong> form becomes <strong>j’habite</strong>.",
        rows: habiterRows
      },
      {
        key: "trouver",
        group: "regularEr",
        label: "trouver",
        title: "Trouver — to find / to think",
        tag: "regular -er",
        descriptionHtml: "<strong>Trouver</strong> follows the regular -er pattern and is useful for both “find” and “think/find something to be.” The reflexive form <strong>se trouver</strong> commonly means “to be located.”",
        rows: trouverRows
      },
      {
        key: "regarder",
        group: "regularEr",
        label: "regarder",
        title: "Regarder — to watch / to look at",
        tag: "regular -er",
        descriptionHtml: "<strong>Regarder</strong> follows the regular -er pattern and is used for watching something or looking at something directly.",
        rows: regarderRows
      },
      {
        key: "laisser",
        group: "regularEr",
        label: "laisser",
        title: "Laisser — to let / to leave",
        tag: "regular -er",
        descriptionHtml: "<strong>Laisser</strong> follows the regular -er pattern. A very common structure is <strong>laisser quelqu’un faire quelque chose</strong>: “to let someone do something.”",
        rows: laisserRows
      },
      {
        key: "reserver",
        group: "regularEr",
        label: "réserver",
        title: "Réserver — to reserve / to book",
        tag: "regular -er",
        descriptionHtml: "<strong>Réserver</strong> keeps the same spelling pattern across its regular -er forms: <strong>je réserve</strong>, <strong>nous réservons</strong>, <strong>vous réservez</strong>, <strong>ils réservent</strong>. It is useful for restaurants, hotels, tickets, seats, and appointments.",
        rows: reserverRows
      },
      {
        key: "quitter",
        group: "regularEr",
        label: "quitter",
        title: "Quitter — to leave / quit",
        tag: "regular -er",
        descriptionHtml: "<strong>Quitter</strong> follows the regular -er pattern. It usually takes a direct object: <strong>quitter la maison</strong>, <strong>quitter Paris</strong>, <strong>quitter son travail</strong>.",
        rows: quitterRows
      },
      {
        key: "passer",
        group: "regularEr",
        label: "passer",
        title: "Passer — to pass / stop by / spend",
        tag: "regular -er",
        descriptionHtml: "<strong>Passer</strong> is flexible: use it for passing through a place, stopping by, taking an exam, or spending time.",
        rows: passerRows
      },
      {
        key: "commencer",
        group: "regularEr",
        label: "commencer",
        title: "Commencer — to begin / to start",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Commencer</strong> keeps the soft <strong>c</strong> sound in the nous form by changing <strong>c</strong> to <strong>ç</strong>: <strong>nous commençons</strong>.",
        rows: commencerRows
      },
      {
        key: "voyager",
        group: "regularEr",
        label: "voyager",
        title: "Voyager — to travel",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Voyager</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous voyageons</strong>.",
        rows: voyagerRows
      },
      {
        key: "travailler",
        group: "regularEr",
        label: "travailler",
        title: "Travailler — to work",
        tag: "regular -er",
        descriptionHtml: "<strong>Travailler</strong> follows the regular -er pattern and is useful for work, study, and schedule sentences.",
        rows: travaillerRows
      },
      {
        key: "dejeuner",
        group: "regularEr",
        label: "déjeuner",
        title: "Déjeuner — to have lunch",
        tag: "regular -er",
        descriptionHtml: "<strong>Déjeuner</strong> follows the regular -er pattern. In France, it usually means “to have lunch.”",
        rows: dejeunerRows
      },
      {
        key: "acheter",
        group: "regularEr",
        label: "acheter",
        title: "Acheter — to buy",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Acheter</strong> follows the regular -er endings, but the stem changes for pronunciation: <strong>j’achète</strong>, <strong>tu achètes</strong>, <strong>il/elle achète</strong>, <strong>ils/elles achètent</strong>, while <strong>nous achetons</strong> and <strong>vous achetez</strong> keep <strong>e</strong>.",
        rows: acheterRows
      },
      {
        key: "rentrer",
        group: "regularEr",
        label: "rentrer",
        title: "Rentrer — to return / go home",
        tag: "regular -er / auxiliary changes by use",
        descriptionHtml: "<strong>Rentrer</strong> follows the regular -er pattern. In passé composé, an intransitive return or going home normally uses <strong>être</strong> (<strong>je suis rentré</strong>); a transitive use with a direct object uses <strong>avoir</strong> (<strong>j’ai rentré la voiture</strong>).",
        rows: rentrerRows
      },
      {
        key: "demander",
        group: "regularEr",
        label: "demander",
        title: "Demander — to ask",
        tag: "regular -er",
        descriptionHtml: "<strong>Demander</strong> can mean “ask for” something, and <strong>demander à quelqu’un de faire quelque chose</strong> means “ask someone to do something.”",
        rows: demanderRows
      },
      {
        key: "jouer",
        group: "regularEr",
        label: "jouer",
        title: "Jouer — to play",
        tag: "regular -er",
        descriptionHtml: "Use <strong>jouer à / au / aux</strong> for sports and games, and <strong>jouer de / du / de la</strong> for instruments.",
        rows: jouerRows
      },
      {
        key: "nager",
        group: "regularEr",
        label: "nager",
        title: "Nager — to swim",
        tag: "regular -er with spelling change",
        descriptionHtml: "<strong>Nager</strong> keeps the soft <strong>g</strong> sound in the nous form by adding <strong>e</strong>: <strong>nous nageons</strong>.",
        rows: nagerRows
      },
      {
        key: "tourner",
        group: "regularEr",
        label: "tourner",
        title: "Tourner — to turn",
        tag: "regular -er",
        descriptionHtml: "<strong>Tourner</strong> follows the regular -er pattern. Use it for turning left or right, rotating an object, going around something, and filming a movie.",
        rows: tournerRows
      },
      {
        key: "couter",
        group: "regularEr",
        label: "coûter",
        title: "Coûter — to cost",
        tag: "regular -er",
        descriptionHtml: "<strong>Coûter</strong> follows the regular -er pattern. In everyday French it is used mostly in the third person with a product, service, trip, or other price: <strong>Le billet coûte vingt euros.</strong> First- and second-person forms are possible when discussing the cost a person creates for someone or an organization.",
        rows: couterRows
      },
      {
        key: "entrer",
        group: "regularEr",
        label: "entrer",
        title: "Entrer — to enter / go in",
        tag: "regular -er / être in passé composé",
        descriptionHtml: "<strong>Entrer</strong> follows the regular -er present pattern. It normally uses <strong>être</strong> when the subject goes in: <strong>elle est entrée</strong>. A transitive technical use such as <strong>entrer un code</strong> uses <strong>avoir</strong>.",
        rows: entrerRows
      },
      {
        key: "monter",
        group: "regularEr",
        label: "monter",
        title: "Monter — to go up / take up",
        tag: "regular -er / auxiliary changes by use",
        descriptionHtml: "<strong>Monter</strong> follows the regular -er present pattern. In passé composé, movement without a direct object commonly uses <strong>être</strong>; taking something upstairs uses <strong>avoir</strong>.",
        rows: monterRows
      },
      {
        key: "retourner",
        group: "regularEr",
        label: "retourner",
        title: "Retourner — to return / turn over",
        tag: "regular -er / auxiliary changes by use",
        descriptionHtml: "<strong>Retourner</strong> follows the regular -er pattern. Returning to a place commonly uses <strong>être</strong> in passé composé; turning or returning an object uses <strong>avoir</strong>.",
        rows: retournerRows
      },
      {
        key: "rester",
        group: "regularEr",
        label: "rester",
        title: "Rester — to stay / remain",
        tag: "regular -er / être in passé composé",
        descriptionHtml: "<strong>Rester</strong> follows the regular -er present pattern and uses <strong>être</strong> in passé composé: <strong>nous sommes restés</strong>.",
        rows: resterRows
      },
      {
        key: "tomber",
        group: "regularEr",
        label: "tomber",
        title: "Tomber — to fall",
        tag: "regular -er / être in passé composé",
        descriptionHtml: "<strong>Tomber</strong> follows the regular -er present pattern and uses <strong>être</strong> in passé composé: <strong>elle est tombée</strong>. It also appears in expressions such as <strong>tomber d’accord</strong>.",
        rows: tomberRows
      },
      {
        key: "descendre",
        group: "regularRe",
        label: "descendre",
        title: "Descendre — to go down / take down",
        tag: "regular -re / auxiliary changes by use",
        descriptionHtml: "<strong>Descendre</strong> has silent singular endings: <strong>descends / descend</strong> sound like <strong>/desɑ̃/</strong>. In passé composé, going down uses <strong>être</strong>; taking something down uses <strong>avoir</strong>.",
        rows: descendreRows
      },
      {
        key: "revenir",
        group: "irregular",
        label: "revenir",
        title: "Revenir — to come back",
        tag: "venir family / être in passé composé",
        descriptionHtml: "<strong>Revenir</strong> follows the same stem pattern as <strong>venir</strong>: <strong>reviens / revient</strong>, <strong>revenons</strong>, <strong>revenez</strong>, <strong>reviennent</strong>. It uses <strong>être</strong> in passé composé.",
        rows: revenirRows
      },
      {
        key: "devenir",
        group: "irregular",
        label: "devenir",
        title: "Devenir — to become",
        tag: "venir family / être in passé composé",
        descriptionHtml: "<strong>Devenir</strong> follows the <strong>venir</strong> family pattern and means “to become.” It uses <strong>être</strong> in passé composé: <strong>ils sont devenus amis</strong>.",
        rows: devenirRows
      },
      {
        key: "naitre",
        group: "irregular",
        label: "naître",
        title: "Naître — to be born / arise",
        tag: "irregular / être in passé composé",
        descriptionHtml: "<strong>Naître</strong> changes to <strong>nais / naît</strong>, <strong>naissons</strong>, <strong>naissez</strong>, and <strong>naissent</strong>. Present-tense first- and second-person uses are uncommon outside narration; everyday personal history normally uses passé composé: <strong>je suis né(e)</strong>.",
        rows: naitreRows
      },
      {
        key: "mourir",
        group: "irregular",
        label: "mourir",
        title: "Mourir — to die",
        tag: "irregular / être in passé composé",
        descriptionHtml: "<strong>Mourir</strong> changes to <strong>meurs / meurt</strong>, <strong>mourons</strong>, <strong>mourez</strong>, and <strong>meurent</strong>. It uses <strong>être</strong> in passé composé and appears in common figurative expressions such as <strong>mourir de rire</strong>.",
        rows: mourirRows
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
      },
      {
        key: "seTrouver",
        group: "pronominal",
        label: "se trouver",
        title: "Se trouver — to be located / find oneself",
        descriptionHtml: "<strong>Se trouver</strong> often means “to be located” for places and things: <strong>Le musée se trouve au centre-ville.</strong> The base verb <strong>trouver</strong> means “to find” or “to think/find something to be”: <strong>Je trouve la clé.</strong>",
        rows: seTrouverRows
      },
      {
        key: "sePromener",
        group: "pronominal",
        label: "se promener",
        title: "Se promener — to take a walk / stroll",
        descriptionHtml: "<strong>Se promener</strong> means “to take a walk / stroll.” It changes spelling in the singular and third-person plural: <strong>je me promène</strong>, <strong>nous nous promenons</strong>, <strong>ils se promènent</strong>. The base verb <strong>promener</strong> means “to walk / take someone or something out”: <strong>Je promène le chien.</strong>",
        rows: sePromenerRows
      },
      {
        key: "sAimer",
        group: "pronominal",
        label: "s’aimer",
        title: "S’aimer — to love oneself / each other",
        descriptionHtml: "<strong>S’aimer</strong> can mean “to love oneself,” but with a plural subject it often means “to love each other.” The base verb <strong>aimer</strong> means “to love / like” someone or something: <strong>J’aime ce film.</strong>",
        rows: sAimerRows
      },
      {
        key: "seConnaitre",
        group: "pronominal",
        label: "se connaître",
        title: "Se connaître — to know oneself / each other",
        descriptionHtml: "<strong>Se connaître</strong> means “to know oneself,” and with a plural subject it often means “to know each other / be acquainted.” The base verb <strong>connaître</strong> means “to know / be familiar with” a person, place, or thing: <strong>Je connais Marie.</strong>",
        rows: seConnaitreRows
      },
      {
        key: "seMarier",
        group: "pronominal",
        label: "se marier",
        title: "Se marier — to get married",
        descriptionHtml: "<strong>Se marier</strong> means “to get married”; use <strong>se marier avec quelqu’un</strong> to name the partner. The base verb <strong>marier</strong> means “to marry” someone in the sense of performing or arranging a marriage: <strong>Le maire marie les deux personnes.</strong>",
        rows: seMarierRows
      },
      {
        key: "seVoir",
        group: "pronominal",
        label: "se voir",
        title: "Se voir — to see oneself / each other",
        descriptionHtml: "<strong>Se voir</strong> means “to see oneself” or, with a plural subject, “to see each other / meet.” The base verb <strong>voir</strong> means “to see”: <strong>Je vois la gare.</strong>",
        rows: seVoirRows
      },
      {
        key: "seRegarder",
        group: "pronominal",
        label: "se regarder",
        title: "Se regarder — to look at oneself / each other",
        descriptionHtml: "<strong>Se regarder</strong> means “to look at oneself” or “to look at each other.” The base verb <strong>regarder</strong> means “to watch / look at”: <strong>Je regarde un film.</strong>",
        rows: seRegarderRows
      },
      {
        key: "seDire",
        group: "pronominal",
        label: "se dire",
        title: "Se dire — to say to oneself / each other",
        descriptionHtml: "<strong>Se dire</strong> means “to say to oneself” or “to say to each other.” The base verb <strong>dire</strong> means “to say / tell”: <strong>Je dis bonjour à mon voisin.</strong> In passé composé, <strong>se</strong> is normally indirect in <strong>dire quelque chose à quelqu’un</strong>, so use <strong>ils se sont dit bonjour</strong> (no agreement).",
        rows: seDireRows
      },
      {
        key: "seVendre",
        group: "pronominal",
        label: "se vendre",
        title: "Se vendre — to market oneself / sell",
        descriptionHtml: "<strong>Se vendre</strong> can literally mean “to sell oneself,” but it is also a common middle/passive structure: <strong>Ce livre se vend bien.</strong> (“This book sells well.”) The base verb <strong>vendre</strong> means “to sell” something: <strong>Je vends mon vélo.</strong>",
        rows: seVendreRows
      },
      {
        key: "seSouvenir",
        group: "pronominal",
        label: "se souvenir",
        title: "Se souvenir de — to remember",
        descriptionHtml: "<strong>Se souvenir de</strong> means “to remember.” It is a fixed pronominal verb; modern French does not use a standalone verb <strong><em>souvenir</em></strong>. Always keep <strong>de</strong>: <strong>Je me souviens de son nom.</strong>",
        rows: seSouvenirRows
      },
      {
        key: "sEnvoler",
        group: "pronominal",
        label: "s’envoler",
        title: "S’envoler — to fly away / take off",
        descriptionHtml: "<strong>S’envoler</strong> means “to fly away / take off,” for birds, planes, or figurative hopes. The base verb <strong>voler</strong> means “to fly” and can also mean “to steal”: <strong>L’oiseau vole au-dessus du parc.</strong>",
        rows: sEnvolerRows
      },
      {
        key: "rever",
        group: "regularEr",
        label: "rêver",
        title: "Rêver — to dream",
        tag: "regular -er",
        descriptionHtml: "<strong>Rêver de</strong> means “to dream of.” The written circumflex stays in every present form: <strong>je rêve</strong>, <strong>nous rêvons</strong>, <strong>vous rêvez</strong>.",
        rows: reverRows
      },
      {
        key: "arreter",
        group: "regularEr",
        label: "arrêter",
        title: "Arrêter — to stop",
        tag: "regular -er",
        descriptionHtml: "<strong>Arrêter</strong> can take a direct object (<strong>arrêter la voiture</strong>) or use <strong>arrêter de + infinitive</strong> to mean “to stop doing.” The written circumflex stays in every present form: <strong>j’arrête</strong>, <strong>nous arrêtons</strong>, <strong>vous arrêtez</strong>.",
        rows: arreterRows
      },
      {
        key: "sAssumer",
        group: "pronominal",
        label: "s’assumer",
        title: "S’assumer — to accept / own oneself",
        descriptionHtml: "<strong>S’assumer</strong> means “to accept / own oneself,” often in the sense of being comfortable with who one is. The base verb <strong>assumer</strong> means “to accept responsibility for / take on”: <strong>J’assume mes choix.</strong>",
        rows: sAssumerRows
      },
      {
        key: "sEnnuyer",
        group: "pronominal",
        label: "s’ennuyer",
        title: "S’ennuyer — to be bored",
        descriptionHtml: "<strong>S’ennuyer</strong> means “to be bored.” The base verb <strong>ennuyer</strong> means “to bore” someone: <strong>Ce film m’ennuie.</strong> Notice the spelling: <strong>je m’ennuie</strong>, but <strong>nous nous ennuyons</strong>.",
        rows: sEnnuyerRows
      },
      {
        key: "seDetendre",
        group: "pronominal",
        label: "se détendre",
        title: "Se détendre — to relax",
        descriptionHtml: "<strong>Se détendre</strong> means “to relax.” The base verb <strong>détendre</strong> means “to loosen / relax” something: <strong>Je détends mes épaules.</strong>",
        rows: seDetendreRows
      },
      {
        key: "seCalmer",
        group: "pronominal",
        label: "se calmer",
        title: "Se calmer — to calm down",
        descriptionHtml: "<strong>Se calmer</strong> means “to calm down.” The base verb <strong>calmer</strong> means “to calm” someone or something: <strong>Je calme le bébé.</strong>",
        rows: seCalmerRows
      },
      {
        key: "seBaigner",
        group: "pronominal",
        label: "se baigner",
        title: "Se baigner — to swim / bathe",
        descriptionHtml: "<strong>Se baigner</strong> means “to swim / bathe,” usually with <strong>dans</strong> for the body of water. The base verb <strong>baigner</strong> means “to bathe” someone or something: <strong>Je baigne le bébé.</strong>",
        rows: seBaignerRows
      }
    ];

    const presentVerbHighlights = {
      etreVerb: ["Highly irregular forms: <strong>suis / es / est / sommes / êtes / sont</strong>. Learn each form as a unit."],
      aller: ["Three visible stems appear in the present: <strong>v-</strong> in <strong>vais / vas / va</strong>, <strong>all-</strong> in <strong>allons / allez</strong>, and <strong>vont</strong> for ils/elles."],
      venir: ["Watch the stem and sound changes: <strong>viens / vient</strong>, <strong>venons / venez</strong>, <strong>viennent</strong>."],
      tenir: ["Same family as venir: <strong>tiens / tient</strong>, <strong>tenons / tenez</strong>, <strong>tiennent</strong>."],
      prendre: ["The plural changes twice: <strong>nous prenons</strong>, <strong>vous prenez</strong>, but <strong>ils prennent</strong> with written double n."],
      apprendre: ["Same present pattern as prendre: <strong>nous apprenons</strong>, but <strong>ils apprennent</strong>."],
      comprendre: ["Same present pattern as prendre: <strong>nous comprenons</strong>, but <strong>ils comprennent</strong>."],
      faire: ["Pronunciation changes noticeably: <strong>nous faisons</strong> has /z/, <strong>vous faites</strong> ends in /t/, and <strong>ils font</strong> is /fɔ̃/."],
      pouvoir: ["Watch <strong>peux / peut</strong>, <strong>pouvons / pouvez</strong>, and <strong>peuvent</strong>. Formal inversion uses the special form <strong>Puis-je... ?</strong>"],
      vouloir: ["Watch <strong>veux / veut</strong>, <strong>voulons / voulez</strong>, and <strong>veulent</strong>."],
      savoir: ["The stem changes across <strong>sais / sait</strong>, <strong>savons / savez</strong>, and <strong>savent</strong>."],
      connaitre: ["The singular has <strong>connais / connaît</strong>; nous/vous use <strong>connaiss-</strong>, and ils/elles use <strong>connaissent</strong>."],
      voir: ["Watch <strong>vois / voit</strong>, then <strong>voyons / voyez</strong>, but <strong>voient</strong>."],
      boire: ["Three stems appear: <strong>boi-</strong>, <strong>buv-</strong>, and <strong>boiv-</strong>: je bois, nous buvons, ils boivent."],
      dire: ["The vous form is <strong>vous dites</strong>, not <strong>*vous disez</strong>. Ils/elles use <strong>disent</strong>."],
      ecrire: ["Singular <strong>écris / écrit</strong> contrasts with plural <strong>écrivons / écrivez / écrivent</strong>."],
      lire: ["Singular <strong>lis / lit</strong> contrasts with plural <strong>lisons / lisez / lisent</strong>; the s in <strong>lisons</strong> is pronounced /z/."],
      acheter: ["The stem vowel changes in <strong>j’achète</strong> and <strong>ils achètent</strong>, but not in <strong>nous achetons</strong> or <strong>vous achetez</strong>."],
      preferer: ["The second accent changes in <strong>je préfère</strong> and <strong>ils préfèrent</strong>, but <strong>nous préférons / vous préférez</strong> keep é."],
      manger: ["Keep the soft g in <strong>nous mangeons</strong> by adding e before -ons."],
      voyager: ["Keep the soft g in <strong>nous voyageons</strong> by adding e before -ons."],
      nager: ["Keep the soft g in <strong>nous nageons</strong> by adding e before -ons."],
      commencer: ["Use ç before the a-sound ending in <strong>nous commençons</strong>, but c elsewhere: je commence, vous commencez."],
      offrir: ["Despite ending in -ir, offrir uses present endings like an -er verb: <strong>j’offre, nous offrons, ils offrent</strong>."],
      ouvrir: ["Despite ending in -ir, ouvrir uses present endings like an -er verb: <strong>j’ouvre, nous ouvrons, ils ouvrent</strong>."]
    };

    verbStudyItems.forEach(item => {
      item.presentHighlights = presentVerbHighlights[item.key] || [];
    });

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

      "j’arrive": "/ʒa.ʁiv/",
      "tu arrives": "/ty a.ʁiv/",
      "il arrive": "/i.la.ʁiv/",
      "elle arrive": "/ɛ.la.ʁiv/",
      "nous arrivons": "/nu.za.ʁi.vɔ̃/",
      "vous arrivez": "/vu.za.ʁi.ve/",
      "ils arrivent": "/il.za.ʁiv/",
      "elles arrivent": "/ɛl.za.ʁiv/",

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

      "j’apprends": "/ʒa.pʁɑ̃/",
      "tu apprends": "/ty a.pʁɑ̃/",
      "il apprend": "/i.la.pʁɑ̃/",
      "elle apprend": "/ɛ.la.pʁɑ̃/",
      "nous apprenons": "/nu.za.pʁə.nɔ̃/",
      "vous apprenez": "/vu.za.pʁə.ne/",
      "ils apprennent": "/il.za.pʁɛn/",
      "elles apprennent": "/ɛl.za.pʁɛn/",

      "je fais": "/ʒə fɛ/",
      "tu fais": "/ty fɛ/",
      "il fait": "/il fɛ/",
      "elle fait": "/ɛl fɛ/",
      "nous faisons": "/nu fə.zɔ̃/",
      "vous faites": "/vu fɛt/",
      "ils font": "/il fɔ̃/",
      "elles font": "/ɛl fɔ̃/",

      "je dois": "/ʒə dwa/",
      "tu dois": "/ty dwa/",
      "il doit": "/il dwa/",
      "elle doit": "/ɛl dwa/",
      "nous devons": "/nu də.vɔ̃/",
      "vous devez": "/vu də.ve/",
      "ils doivent": "/il dwav/",
      "elles doivent": "/ɛl dwav/",

      "je peux": "/ʒə pø/",
      "tu peux": "/ty pø/",
      "il peut": "/il pø/",
      "elle peut": "/ɛl pø/",
      "nous pouvons": "/nu pu.vɔ̃/",
      "vous pouvez": "/vu pu.ve/",
      "ils peuvent": "/il pœv/",
      "elles peuvent": "/ɛl pœv/",

      "je veux": "/ʒə vø/",
      "tu veux": "/ty vø/",
      "il veut": "/il vø/",
      "elle veut": "/ɛl vø/",
      "nous voulons": "/nu vu.lɔ̃/",
      "vous voulez": "/vu vu.le/",
      "ils veulent": "/il vœl/",
      "elles veulent": "/ɛl vœl/",

      "je sais": "/ʒə sɛ/",
      "tu sais": "/ty sɛ/",
      "il sait": "/il sɛ/",
      "elle sait": "/ɛl sɛ/",
      "nous savons": "/nu sa.vɔ̃/",
      "vous savez": "/vu sa.ve/",
      "ils savent": "/il sav/",
      "elles savent": "/ɛl sav/",

      "je connais": "/ʒə kɔ.nɛ/",
      "tu connais": "/ty kɔ.nɛ/",
      "il connaît": "/il kɔ.nɛ/",
      "elle connaît": "/ɛl kɔ.nɛ/",
      "nous connaissons": "/nu kɔ.nɛ.sɔ̃/",
      "vous connaissez": "/vu kɔ.nɛ.se/",
      "ils connaissent": "/il kɔ.nɛs/",
      "elles connaissent": "/ɛl kɔ.nɛs/",

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

      "je dis": "/ʒə di/",
      "tu dis": "/ty di/",
      "il dit": "/il di/",
      "elle dit": "/ɛl di/",
      "nous disons": "/nu di.zɔ̃/",
      "vous dites": "/vu dit/",
      "ils disent": "/il diz/",
      "elles disent": "/ɛl diz/",

      "j’offre": "/ʒɔfʁ/",
      "tu offres": "/ty ɔfʁ/",
      "il offre": "/il ɔfʁ/",
      "elle offre": "/ɛl ɔfʁ/",
      "nous offrons": "/nu.zɔ.fʁɔ̃/",
      "vous offrez": "/vu.zɔ.fʁe/",
      "ils offrent": "/il.zɔfʁ/",
      "elles offrent": "/ɛl.zɔfʁ/",

      "j’ouvre": "/ʒuvʁ/",
      "tu ouvres": "/ty uvʁ/",
      "il ouvre": "/il uvʁ/",
      "elle ouvre": "/ɛl uvʁ/",
      "nous ouvrons": "/nu.zuv.ʁɔ̃/",
      "vous ouvrez": "/vu.zuv.ʁe/",
      "ils ouvrent": "/il.zuvʁ/",
      "elles ouvrent": "/ɛl.zuvʁ/",

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

      "je laisse": "/ʒə lɛs/",
      "tu laisses": "/ty lɛs/",
      "il laisse": "/il lɛs/",
      "elle laisse": "/ɛl lɛs/",
      "nous laissons": "/nu lɛ.sɔ̃/",
      "vous laissez": "/vu lɛ.se/",
      "ils laissent": "/il lɛs/",
      "elles laissent": "/ɛl lɛs/",

      "je réserve": "/ʒə ʁe.zɛʁv/",
      "tu réserves": "/ty ʁe.zɛʁv/",
      "il réserve": "/il ʁe.zɛʁv/",
      "elle réserve": "/ɛl ʁe.zɛʁv/",
      "nous réservons": "/nu ʁe.zɛʁ.vɔ̃/",
      "vous réservez": "/vu ʁe.zɛʁ.ve/",
      "ils réservent": "/il ʁe.zɛʁv/",
      "elles réservent": "/ɛl ʁe.zɛʁv/",

      "je quitte": "/ʒə kit/",
      "tu quittes": "/ty kit/",
      "il quitte": "/il kit/",
      "elle quitte": "/ɛl kit/",
      "nous quittons": "/nu ki.tɔ̃/",
      "vous quittez": "/vu ki.te/",
      "ils quittent": "/il kit/",
      "elles quittent": "/ɛl kit/",

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

      "je me trouve": "/ʒə mə tʁuv/",
      "tu te trouves": "/ty tə tʁuv/",
      "il se trouve": "/il sə tʁuv/",
      "elle se trouve": "/ɛl sə tʁuv/",
      "nous nous trouvons": "/nu nu tʁu.vɔ̃/",
      "vous vous trouvez": "/vu vu tʁu.ve/",
      "ils se trouvent": "/il sə tʁuv/",
      "elles se trouvent": "/ɛl sə tʁuv/",

      "je me promène": "/ʒə mə pʁɔ.mɛn/",
      "tu te promènes": "/ty tə pʁɔ.mɛn/",
      "il se promène": "/il sə pʁɔ.mɛn/",
      "elle se promène": "/ɛl sə pʁɔ.mɛn/",
      "nous nous promenons": "/nu nu pʁɔm.nɔ̃/",
      "vous vous promenez": "/vu vu pʁɔm.ne/",
      "ils se promènent": "/il sə pʁɔ.mɛn/",
      "elles se promènent": "/ɛl sə pʁɔ.mɛn/",

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
