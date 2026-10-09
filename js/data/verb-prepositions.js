(function registerVerbPrepositions(global) {
  "use strict";

  const sources = Object.freeze({
    aimer: { title: "OQLF · Aimer suivi d’un infinitif", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/22165/la-syntaxe/le-complement-du-verbe/aimer-suivi-dun-infinitif" },
    commencer: { title: "OQLF · Commencer : à, de, par", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/22316/la-syntaxe/les-prepositions/preposition-apres-un-verbe/prepositions-a-employer-apres-le-verbe-commencer" },
    occuper: { title: "OQLF · S’occuper : à, de", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/22273/la-syntaxe/les-prepositions/preposition-apres-un-verbe/prepositions-a-employer-apres-le-verbe-soccuper" },
    rappeler: { title: "OQLF · Se rappeler et se souvenir", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/22881/la-syntaxe/les-prepositions/preposition-apres-un-verbe/preposition-a-employer-apres-les-verbes-se-rappeler-et-se-souvenir" },
    rever: { title: "OQLF · Rêver : de, à", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/22187/la-syntaxe/les-prepositions/preposition-apres-un-verbe/prepositions-a-employer-apres-le-verbe-rever" },
    depenser: { title: "Larousse · Dépenser", url: "https://www.larousse.fr/dictionnaires/francais/d%C3%A9penser/23749" },
    habiller: { title: "Académie française · Habiller", url: "https://www.dictionnaire-academie.fr/article/A9H0015" },
    laver: { title: "Larousse · Se laver de", url: "https://www.larousse.fr/dictionnaires/francais-anglais/laver/46391" },
    ennuyer: { title: "Académie française · Ennuyer", url: "https://www.dictionnaire-academie.fr/article/A9E1713" },
    marier: { title: "Larousse · Se marier à / avec", url: "https://www.larousse.fr/dictionnaires/francais-anglais/marier/49385" },
    souhaiter: { title: "Larousse · Souhaiter", url: "https://www.larousse.fr/dictionnaires/francais/souhaiter/73654" },
    demander: { title: "OQLF · Demander et ses compléments", url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/25220/la-syntaxe/le-complement-du-verbe/demander-et-ses-complements" }
  });

  // IDs describe the construction, never its position or its current wording.
  function usage(id, pattern, meaning, fr, en, note = "", sourceKey = "") {
    return Object.freeze({ id, pattern, meaning, fr, en, note,
      sources: Object.freeze(sourceKey ? [Object.freeze(sources[sourceKey])] : []) });
  }
  const u = usage;

  // Representative current constructions, including useful expressions and
  // destination/origin complements. Partitive articles (boire du café), generic
  // time/manner adjuncts, and archaic constructions are not verb government.
  const byVerb = {
    souhaiter: [
      u("a-person", "souhaiter quelque chose à quelqu’un", "wish someone something", "Je souhaite un bon voyage à Léa.", "I wish Léa a good trip."),
      u("a-person-de-infinitive", "souhaiter à quelqu’un de + infinitive", "wish that someone does something", "Je souhaite à Léa de réussir son examen.", "I hope Léa passes her exam.", "De introduces the action wished for someone else; for your own wish, use souhaiter + infinitive directly.", "souhaiter")
    ],
    occuper: [
      u("a-activity", "occuper quelqu’un à + infinitive", "keep someone busy doing something", "Cette activité occupe les enfants à dessiner.", "This activity keeps the children busy drawing.")
    ],
    sAbonner: [
      u("a-subscription", "s’abonner à + noun", "subscribe to", "Je m’abonne à ce magazine.", "I subscribe to this magazine."),
      u("a-contracted", "s’abonner au / aux", "à + le = au; à + les = aux", "Elle s’abonne aux cours en ligne.", "She subscribes to the online courses.")
    ],
    sOccuper: [
      u("de-person-thing", "s’occuper de + person / thing", "look after; take care of", "Je m’occupe du chat de ma voisine.", "I look after my neighbor’s cat."),
      u("de-infinitive", "s’occuper de + infinitive", "take responsibility for doing something", "Elle s’occupe de réserver les billets.", "She takes care of booking the tickets.", "De introduces a task you take responsibility for.", "occuper"),
      u("a-infinitive", "s’occuper à + infinitive", "keep oneself busy doing something", "Il s’occupe à dessiner pendant le trajet.", "He keeps himself busy drawing during the journey.", "À describes how you occupy your time, often a leisure activity.", "occuper")
    ],
    montrer: [
      u("a-person", "montrer quelque chose à quelqu’un", "show someone something", "Je montre cette photo à mes amis.", "I show this photo to my friends.")
    ],
    interesser: [
      u("a-thing", "intéresser quelqu’un à quelque chose", "get someone interested in something", "Ce professeur intéresse ses élèves à la science.", "This teacher gets his students interested in science.")
    ],
    sInteresser: [
      u("a-topic", "s’intéresser à + noun", "be interested in", "Elle s’intéresse à l’histoire.", "She is interested in history.")
    ],
    etreVerb: [
      u("a-owner", "être à quelqu’un", "belong to someone", "Ce livre est à Paul.", "This book belongs to Paul."),
      u("de-origin", "être de + place", "be from", "Je suis de Lyon.", "I am from Lyon."),
      u("a-infinitive", "être à + infinitive", "be to be done; need doing", "Ce formulaire est à remplir.", "This form needs to be filled in.", "A passive meaning: the form is the thing to be filled in.")
    ],
    avoirVerb: [
      u("a-infinitive", "avoir à + infinitive", "have to do something", "J’ai à préparer une présentation.", "I have to prepare a presentation."),
      u("besoin-de", "avoir besoin de + noun / infinitive", "need something; need to do something", "J’ai besoin de dormir.", "I need to sleep.", "De belongs to the expression avoir besoin de."),
      u("envie-de", "avoir envie de + noun / infinitive", "feel like; want", "Elle a envie de voyager.", "She feels like traveling.", "De belongs to the expression avoir envie de.")
    ],
    aller: [
      u("a-destination", "aller à + place", "go to", "Nous allons au cinéma.", "We are going to the cinema.")
    ],
    venir: [
      u("de-origin", "venir de + place", "come from", "Elle vient du Canada.", "She comes from Canada."),
      u("de-infinitive", "venir de + infinitive", "have just done something", "Je viens de finir le travail.", "I have just finished the work.", "Present venir de + infinitive expresses the recent past."),
      u("a-destination", "venir à + place", "come to", "Tu viens à la fête.", "You are coming to the party.")
    ],
    tenir: [
      u("a-noun", "tenir à + noun / person", "care about; be attached to", "Je tiens à cette amitié.", "I value this friendship."),
      u("a-infinitive", "tenir à + infinitive", "be keen to; insist on", "Je tiens à vous remercier.", "I would like to thank you."),
      u("de-person", "tenir de quelqu’un", "take after someone", "Elle tient de sa mère.", "She takes after her mother.")
    ],
    prendre: [
      u("a-person", "prendre quelque chose à quelqu’un", "take something from someone", "Il prend le ballon à son frère.", "He takes the ball from his brother."),
      u("soin-de", "prendre soin de + noun / person", "take care of", "Nous prenons soin de nos plantes.", "We take care of our plants.", "Learn prendre soin de as an expression."),
      u("part-a", "prendre part à + noun", "take part in", "Elle prend part à la réunion.", "She takes part in the meeting.")
    ],
    apprendre: [
      u("a-infinitive", "apprendre à + infinitive", "learn to", "J’apprends à conduire.", "I am learning to drive."),
      u("a-person", "apprendre quelque chose à quelqu’un", "teach someone something", "Il apprend le français aux enfants.", "He teaches the children French."),
      u("de-person", "apprendre de quelqu’un", "learn from someone", "Nous apprenons beaucoup de notre professeur.", "We learn a lot from our teacher.")
    ],
    comprendre: [
      u("rien-a", "ne rien comprendre à + noun", "not understand anything about", "Je ne comprends rien à cette règle.", "I do not understand this rule at all.", "Contrast with the direct object: Je comprends cette règle.")
    ],
    faire: [
      u("attention-a", "faire attention à + noun / infinitive", "pay attention to; take care to", "Je fais attention à bien prononcer les mots.", "I take care to pronounce the words properly."),
      u("part-de", "faire part de quelque chose à quelqu’un", "tell someone about; share", "Elle fait part de son projet à ses collègues.", "She tells her colleagues about her plan.", "De introduces what is shared; à introduces the people receiving the information.")
    ],
    mettre: [
      u("a-place", "mettre quelque chose à + place", "put something somewhere", "Je mets le lait au réfrigérateur.", "I put the milk in the refrigerator."),
      u("temps-a", "mettre du temps à + infinitive", "take time to", "Il met du temps à comprendre.", "He takes time to understand.", "The full expression is mettre du temps à.")
    ],
    devoir: [
      u("a-person", "devoir quelque chose à quelqu’un", "owe someone something", "Je dois dix euros à Paul.", "I owe Paul ten euros.", "For obligation, use devoir + infinitive directly: Je dois partir.")
    ],
    vouloir: [
      u("en-a-person", "en vouloir à quelqu’un", "be angry with; resent", "J’en veux à Paul.", "I am angry with Paul.", "En is part of this expression; ordinary vouloir + infinitive takes no preposition."),
      u("de-noun", "ne pas vouloir de + noun / person", "not want; reject", "Je ne veux pas de cette aide.", "I do not want this help.", "Common in negative sentences. De can precede a demonstrative, as here; it is not simply a partitive article.")
    ],
    savoir: [
      u("de-topic", "savoir quelque chose de + noun / person", "know something about", "Je ne sais rien de ce projet.", "I know nothing about this project.", "To know how to do something, use savoir + infinitive directly: Je sais nager.")
    ],
    connaitre: [
      u("de-vue", "connaître quelqu’un de vue", "know someone by sight", "Je connais cette voisine de vue.", "I know this neighbor by sight.", "De vue is a fixed expression; the person remains a direct object.")
    ],
    boire: [
      u("a-toast", "boire à + noun", "drink to; make a toast to", "Nous buvons à votre réussite.", "We drink to your success.", "This is a toast. In boire du café, du is a partitive article.")
    ],
    dire: [
      u("a-person", "dire quelque chose à quelqu’un", "say something to someone", "Je dis bonjour à Marie.", "I say hello to Marie."),
      u("de-infinitive", "dire à quelqu’un de + infinitive", "tell someone to do something", "Elle dit à Paul de patienter.", "She tells Paul to wait.")
    ],
    offrir: [
      u("a-person", "offrir quelque chose à quelqu’un", "give someone something", "J’offre un livre à mon frère.", "I give my brother a book."),
      u("de-infinitive", "offrir de + infinitive", "offer to do something", "Elle offre de nous aider.", "She offers to help us.")
    ],
    ouvrir: [
      u("a-person", "ouvrir à quelqu’un", "open the door for someone", "J’ouvre au facteur.", "I open the door for the mail carrier.", "The door can be left unstated.")
    ],
    ecrire: [
      u("a-person", "écrire à quelqu’un", "write to someone", "J’écris à ma sœur.", "I write to my sister.")
    ],
    lire: [
      u("a-person", "lire quelque chose à quelqu’un", "read something to someone", "Elle lit une histoire aux enfants.", "She reads a story to the children.")
    ],
    suivre: [
      u("de-pres", "suivre quelqu’un / quelque chose de près", "follow closely", "Je suis ce dossier de près.", "I follow this case closely.", "De près is a fixed expression; ce dossier remains a direct object.")
    ],
    vivre: [
      u("de-income", "vivre de + noun", "live on; earn a living from", "Elle vit de sa musique.", "She earns her living from her music.")
    ],
    courir: [
      u("a-destination", "courir à + place", "run to", "Il court à la gare.", "He runs to the station."),
      u("de-a-route", "courir de X à Y", "run from X to Y", "Elle court de la gare à l’hôtel.", "She runs from the station to the hotel.")
    ],
    partir: [
      u("de-origin", "partir de + place", "leave from; start from", "Le train part de Lyon.", "The train leaves from Lyon."),
      u("a-destination", "partir à + place", "leave for", "Elle part à Paris demain.", "She leaves for Paris tomorrow.")
    ],
    sortir: [
      u("de-origin", "sortir de + place", "come out of; leave", "Je sors du bureau.", "I leave the office.")
    ],
    servir: [
      u("a-infinitive", "servir à + infinitive", "be used to; serve to", "Ce couteau sert à couper le pain.", "This knife is used to cut bread."),
      u("de-role", "servir de + noun", "serve as; act as", "Cette boîte sert de table.", "This box serves as a table."),
      u("a-person", "servir quelque chose à quelqu’un", "serve someone something", "Je sers du thé à mes invités.", "I serve tea to my guests.", "À introduces the recipients; du thé is a partitive object.")
    ],
    parler: [
      u("a-person", "parler à quelqu’un", "speak to someone", "Je parle au professeur.", "I speak to the teacher."),
      u("de-topic", "parler de + noun", "talk about", "Nous parlons de notre voyage.", "We talk about our trip.")
    ],
    expliquer: [
      u("a-person", "expliquer quelque chose à quelqu’un", "explain something to someone", "J’explique la règle aux élèves.", "I explain the rule to the students.")
    ],
    proposer: [
      u("de-infinitive", "proposer de + infinitive", "suggest doing; offer to do", "Je propose de partir tôt.", "I suggest leaving early."),
      u("a-person", "proposer quelque chose à quelqu’un", "suggest / offer something to someone", "Elle propose son aide à Paul.", "She offers Paul her help."),
      u("a-person-de-infinitive", "proposer à quelqu’un de + infinitive", "suggest that someone do something", "Je propose à Léa de venir avec nous.", "I suggest that Léa come with us.")
    ],
    deposer: [
      u("a-place", "déposer quelque chose / quelqu’un à + place", "drop off somewhere", "Je dépose les enfants à l’école.", "I drop the children off at school.")
    ],
    depenser: [
      u("a-infinitive", "dépenser son énergie à + infinitive", "spend one’s energy doing something", "Elle dépense son énergie à organiser la fête.", "She spends her energy organizing the party.", "With money, pour / en are common. De l’argent is a partitive object.", "depenser")
    ],
    chercher: [
      u("a-infinitive", "chercher à + infinitive", "try to; seek to", "Je cherche à comprendre cette règle.", "I am trying to understand this rule.")
    ],
    changer: [
      u("de-noun", "changer de + noun", "change; switch", "Je change de train à Lyon.", "I change trains in Lyon."),
      u("a-thing", "changer quelque chose à quelque chose", "change something about something", "Je ne change rien à ce texte.", "I do not change anything in this text.")
    ],
    manger: [
      u("a-faim", "manger à sa faim", "eat one’s fill; have enough to eat", "Les enfants mangent à leur faim.", "The children have enough to eat.", "A fixed expression, not a general manger à + infinitive pattern.")
    ],
    inviter: [
      u("a-event", "inviter quelqu’un à + event", "invite someone to", "J’invite Léa au dîner.", "I invite Léa to dinner."),
      u("a-infinitive", "inviter quelqu’un à + infinitive", "invite someone to do something", "Elle nous invite à entrer.", "She invites us to come in.")
    ],
    aimer: [
      u("a-infinitive", "aimer à + infinitive", "like to; be pleased to", "J’aime à penser que tout ira bien.", "I like to think that everything will go well.", "Especially common with penser / croire. With other verbs, à is formal; ordinary speech usually uses aimer + infinitive directly. Aimer de is archaic.", "aimer")
    ],
    preferer: [
      u("a-comparison", "préférer X à Y", "prefer X to Y", "Je préfère le thé au café.", "I prefer tea to coffee.")
    ],
    envoyer: [
      u("a-person", "envoyer quelque chose à quelqu’un", "send something to someone", "J’envoie une photo à ma sœur.", "I send my sister a photo.")
    ],
    payer: [
      u("a-person", "payer quelque chose à quelqu’un", "pay someone for something", "Je paie le loyer au propriétaire.", "I pay the rent to the landlord."),
      u("de-poche", "payer de sa poche", "pay out of one’s own pocket", "Elle paie le billet de sa poche.", "She pays for the ticket out of her own pocket.", "A fixed expression.")
    ],
    essayer: [
      u("de-infinitive", "essayer de + infinitive", "try to", "J’essaie de parler français.", "I try to speak French.")
    ],
    gagner: [
      u("a-infinitive", "gagner à + infinitive", "benefit from doing something", "Tu gagnes à écouter les conseils de ton professeur.", "You benefit from listening to your teacher’s advice.", "This sense means benefit, not win a competition.")
    ],
    penser: [
      u("a-noun", "penser à + noun / person", "think about; think of", "Je pense à mes amis.", "I think about my friends."),
      u("a-infinitive", "penser à + infinitive", "remember to; think of doing", "Je pense à fermer la fenêtre.", "I remember to close the window."),
      u("de-opinion", "penser de + noun", "have an opinion of", "Je pense du bien de ce film.", "I have a good opinion of this film.", "De introduces the thing you are evaluating; à introduces what is on your mind. A common question is: Que penses-tu de ce film ?")
    ],
    porter: [
      u("a-destination", "porter quelque chose à quelqu’un / à un lieu", "carry / take something to", "Je porte les valises à la réception.", "I take the suitcases to reception."),
      u("atteinte-a", "porter atteinte à + noun", "harm; damage", "Ce bruit porte atteinte à notre tranquillité.", "This noise disturbs our peace.", "A fixed expression.")
    ],
    supprimer: [
      u("de-source", "supprimer quelque chose de quelque chose", "remove something from", "Je supprime ce nom de la liste.", "I remove this name from the list.")
    ],
    finir: [
      u("de-infinitive", "finir de + infinitive", "finish doing something", "Je finis de préparer le dîner.", "I finish preparing dinner.")
    ],
    agrandir: [
      u("de-amount", "agrandir quelque chose de + amount", "enlarge something by an amount", "Nous agrandissons la terrasse de deux mètres.", "We enlarge the terrace by two meters.", "De introduces the amount of the increase, not another verb.")
    ],
    choisir: [
      u("de-infinitive", "choisir de + infinitive", "choose to", "Je choisis de rester ici.", "I choose to stay here.")
    ],
    reussir: [
      u("a-infinitive", "réussir à + infinitive", "manage to; succeed in", "Je réussis à ouvrir la porte.", "I manage to open the door.")
    ],
    unir: [
      u("a-thing", "unir quelque chose à quelque chose", "join / unite something with something", "Cette passerelle unit le parc au quartier.", "This footbridge connects the park to the neighborhood.")
    ],
    attendre: [
      u("de-person", "attendre quelque chose de quelqu’un", "expect something from someone", "J’attends une réponse de Paul.", "I expect a reply from Paul.", "In this sense, attendre means expect. To wait for a bus: attendre le bus, with no preposition.")
    ],
    arriver: [
      u("a-infinitive", "arriver à + infinitive", "manage to", "J’arrive à comprendre ce texte.", "I manage to understand this text."),
      u("a-destination", "arriver à + place", "arrive at / in", "Nous arrivons à la gare.", "We arrive at the station.")
    ],
    habiter: [
      u("a-place", "habiter à + city / place", "live in", "J’habite à Paris.", "I live in Paris.", "For countries, the preposition varies: en France, au Canada, aux États-Unis.")
    ],
    trouver: [
      u("a-redire", "trouver à redire à quelque chose", "find fault with something", "Il trouve à redire à tout.", "He finds fault with everything.", "A fixed expression; ordinary trouver takes a direct object.")
    ],
    laisser: [
      u("a-person", "laisser quelque chose à quelqu’un", "leave something for / to someone", "Je laisse les clés à Paul.", "I leave the keys with Paul."),
      u("de-cote", "laisser de côté", "set aside; leave out", "Nous laissons ce problème de côté.", "We set this problem aside.", "A fixed expression.")
    ],
    reserver: [
      u("a-person", "réserver quelque chose à quelqu’un", "reserve something for someone", "Je réserve cette place à Léa.", "I reserve this seat for Léa.")
    ],
    passer: [
      u("de-a-transition", "passer de X à Y", "switch / move from X to Y", "Nous passons du français à l’anglais.", "We switch from French to English."),
      u("temps-a", "passer du temps à + infinitive", "spend time doing something", "Je passe du temps à lire.", "I spend time reading."),
      u("a-next", "passer à + noun", "move on to", "Nous passons à la question suivante.", "We move on to the next question.")
    ],
    commencer: [
      u("a-infinitive", "commencer à + infinitive", "start to; begin doing", "Je commence à comprendre.", "I begin to understand."),
      u("de-infinitive", "commencer de + infinitive", "begin doing (formal / literary)", "Elle commence de raconter son voyage.", "She begins to tell the story of her trip.", "Both à and de are correct. À is the usual choice; de is formal or literary.", "commencer")
    ],
    voyager: [
      u("de-a-route", "voyager de X à Y", "travel from X to Y", "Nous voyageons de Paris à Rome.", "We travel from Paris to Rome.", "De marks the starting point; à marks the destination.")
    ],
    travailler: [
      u("a-project", "travailler à + noun / infinitive", "work on; work to", "Elle travaille à améliorer le service.", "She works to improve the service.")
    ],
    dejeuner: [
      u("de-food", "déjeuner de + food", "have something for lunch", "Il déjeune d’une salade.", "He has a salad for lunch.", "More formal than manger une salade pour le déjeuner.")
    ],
    acheter: [
      u("a-seller", "acheter quelque chose à quelqu’un", "buy something from someone", "J’achète ce vélo à mon voisin.", "I buy this bicycle from my neighbor.", "Depending on context, à quelqu’un can also identify the person you buy something for.")
    ],
    rentrer: [
      u("a-destination", "rentrer à + place", "go / come back to", "Je rentre à la maison.", "I go home."),
      u("de-origin", "rentrer de + place / activity", "return from", "Elle rentre du travail.", "She returns from work.")
    ],
    demander: [
      u("a-person", "demander quelque chose à quelqu’un", "ask someone for something", "Je demande un conseil au professeur.", "I ask the teacher for advice."),
      u("a-person-de-infinitive", "demander à quelqu’un de + infinitive", "ask someone to do something", "Je demande à Paul de venir.", "I ask Paul to come."),
      u("de-infinitive", "demander de + infinitive", "request that something be done", "Le professeur demande de respecter le silence.", "The teacher asks everyone to remain quiet.", "When the person asked is specified, use demander à quelqu’un de.", "demander"),
      u("a-infinitive", "demander à + infinitive", "ask to do something", "Elle demande à parler au directeur.", "She asks to speak to the manager.", "The subject wants to do the action; with à quelqu’un de, someone else is asked to do it.", "demander")
    ],
    jouer: [
      u("a-game", "jouer à + game / sport", "play a game / sport", "Je joue au tennis.", "I play tennis.", "À + le = au; à + les = aux: jouer aux cartes."),
      u("de-instrument", "jouer de + instrument", "play an instrument", "Elle joue du piano.", "She plays the piano.", "De + le = du; de + les = des: jouer des cymbales.")
    ],
    nager: [
      u("a-contre-courant", "nager à contre-courant", "swim against the current", "Il nage à contre-courant.", "He swims against the current.", "A fixed expression, also used figuratively for opposing the prevailing view.")
    ],
    tourner: [
      u("a-direction", "tourner à gauche / à droite", "turn left / right", "Je tourne à gauche.", "I turn left."),
      u("a-result", "tourner à + noun", "turn into; end in", "La discussion tourne à la dispute.", "The discussion turns into an argument.")
    ],
    couter: [
      u("a-person", "coûter quelque chose à quelqu’un", "cost someone something", "Ce voyage coûte cent euros à Paul.", "This trip costs Paul one hundred euros.")
    ],
    entrer: [
      u("a-institution", "entrer à + institution / place", "enter; join", "Elle entre à l’université cette année.", "She starts university this year.", "For an ordinary room or building, dans is often used: entrer dans la salle.")
    ],
    monter: [
      u("a-destination", "monter à + place", "go up to", "Je monte au deuxième étage.", "I go up to the second floor."),
      u("a-level", "monter à + amount", "rise to; reach", "La température monte à trente degrés.", "The temperature rises to thirty degrees."),
      u("de-amount", "monter de + amount", "rise by", "La température monte de trois degrés.", "The temperature rises by three degrees.", "À gives the final level; de gives the amount of the increase.")
    ],
    retourner: [
      u("a-destination", "retourner à + place", "go back to", "Je retourne au bureau.", "I go back to the office.")
    ],
    rester: [
      u("a-place", "rester à + place", "stay at / in", "Je reste à la maison.", "I stay at home."),
      u("a-infinitive", "rester à + infinitive", "remain to be done", "Il reste à vérifier les dates.", "The dates still need to be checked.", "An impersonal construction with il: something remains to be done.")
    ],
    tomber: [
      u("de-origin", "tomber de + place", "fall from / off", "Le livre tombe de la table.", "The book falls off the table."),
      u("de-cause", "tomber de + cause", "collapse from", "Il tombe de fatigue.", "He collapses from exhaustion."),
      u("a-eau", "tomber à l’eau", "fall through; fail to happen", "Notre projet tombe à l’eau.", "Our plan falls through.", "A fixed expression; literally, fall into the water.")
    ],
    descendre: [
      u("de-origin", "descendre de + place / vehicle", "come down from; get off", "Je descends du bus.", "I get off the bus."),
      u("a-destination", "descendre à + place", "go down to; get off at", "Je descends à la prochaine station.", "I get off at the next station.")
    ],
    revenir: [
      u("de-origin", "revenir de + place", "come back from", "Je reviens de Paris.", "I come back from Paris."),
      u("a-destination", "revenir à + place / topic", "come back to; return to", "Nous revenons à la première question.", "We return to the first question."),
      u("a-person", "revenir à quelqu’un de + infinitive", "be someone’s responsibility to", "Il revient à Paul de décider.", "It is up to Paul to decide.", "An impersonal construction: à names the responsible person, de introduces the action.")
    ],
    naitre: [
      u("de-cause", "naître de + noun", "arise from; be born of", "Cette idée naît de notre discussion.", "This idea arises from our discussion."),
      u("a-place", "naître à + city", "be born in", "Dans ce roman, le héros naît à Lyon.", "In this novel, the hero is born in Lyon.", "Present tense is natural in a story summary; for a real birth, use est né(e) à.")
    ],
    mourir: [
      u("de-cause", "mourir de + noun", "die of / from", "La plante meurt de soif.", "The plant dies from lack of water."),
      u("de-rire", "mourir de rire", "laugh very hard", "Nous mourons de rire.", "We are laughing our heads off.", "A figurative expression.")
    ],
    ilYA: [
      u("a-infinitive", "il y a quelque chose à + infinitive", "there is something to do", "Il y a trois exercices à faire.", "There are three exercises to do.", "À describes what is to be done with the noun: exercices à faire.")
    ],
    impersonalFaire: [
      u("bien-de", "ça fait du bien de + infinitive", "it feels good to", "Ça fait du bien de se reposer.", "It feels good to rest.", "The preposition belongs to the whole expression; weather expressions such as il fait chaud use no à / de complement.")
    ],
    impersonalEtre: [
      u("temps-de", "il est temps de + infinitive", "it is time to", "Il est temps de partir.", "It is time to leave."),
      u("adjective-de", "il est + adjective + de + infinitive", "it is [adjective] to do something", "Il est important de pratiquer.", "It is important to practice.", "Common with important, facile, difficile, utile. The preposition is part of the adjective construction.")
    ],
    sAgir: [
      u("de-noun", "il s’agit de + noun", "it is about; it concerns", "Il s’agit du nouveau projet.", "It is about the new project."),
      u("de-infinitive", "il s’agit de + infinitive", "the task / point is to", "Il s’agit de trouver une solution.", "The task is to find a solution.")
    ],
    seLaver: [
      u("de-accusation", "se laver de + accusation / suspicion", "clear oneself of", "Il se lave de tout soupçon grâce à ces preuves.", "He clears himself of all suspicion with this evidence.", "A figurative use; washing oneself normally has no de complement.", "laver"),
      u("mains-de", "se laver les mains de quelque chose", "wash one’s hands of something", "Elle se lave les mains de cette affaire.", "She washes her hands of this affair.", "An idiom meaning to disclaim responsibility.")
    ],
    seLever: [
      u("de-place", "se lever de + seat / table", "get up from", "Elle se lève de table.", "She gets up from the table.")
    ],
    seReposer: [
      u("de-fatigue", "se reposer de + tiring activity", "rest / recover from", "Je me repose de mon long voyage.", "I rest after my long journey.")
    ],
    sHabiller: [
      u("de-color", "s’habiller de + color / material", "dress in", "Elle s’habille de noir.", "She dresses in black.", "En noir is also common; de can also introduce a fabric: s’habiller de laine.", "habiller")
    ],
    seTrouver: [
      u("a-place", "se trouver à + place", "be located at / in", "Le musée se trouve au centre de la ville.", "The museum is located in the city center.")
    ],
    sePasser: [
      u("de-noun", "se passer de + noun / person", "do without", "Je me passe de sucre dans mon café.", "I do without sugar in my coffee.", "This differs from se passer meaning happen: La réunion se passe bien."),
      u("de-infinitive", "se passer de + infinitive", "do without doing; refrain from", "Tu peux te passer de faire ce commentaire.", "You can refrain from making that comment.")
    ],
    sePromener: [
      u("a-place", "se promener à + place", "go for a walk in / at", "Nous nous promenons au bord de la mer.", "We go for a walk by the sea.", "A place complement; this does not introduce another infinitive.")
    ],
    seRappeler: [
      u("de-infinitive", "se rappeler de + present infinitive", "remember to do something", "Elle se rappelle de fermer la porte avant de sortir.", "She remembers to close the door before leaving.", "Accepted for an action not to forget. With a remembered noun, standard French uses a direct object: se rappeler ce voyage; compare se souvenir de ce voyage.", "rappeler")
    ],
    seConnaitre: [
      u("de-vue", "se connaître de vue", "know each other by sight", "Nous nous connaissons de vue.", "We know each other by sight.", "A fixed expression.")
    ],
    seMarier: [
      u("a-person", "se marier à quelqu’un", "get married to someone", "Elle se marie à Paul.", "She gets married to Paul.", "Se marier avec quelqu’un is also accepted and very common.", "marier")
    ],
    seVendre: [
      u("a-buyer", "se vendre à + buyer", "be sold to", "Ces livres se vendent à des collectionneurs.", "These books are sold to collectors.")
    ],
    seSouvenir: [
      u("de-memory", "se souvenir de + noun / person", "remember", "Je me souviens de ce voyage.", "I remember this trip."),
      u("de-infinitive", "se souvenir de + past infinitive", "remember having done something", "Elle se souvient d’avoir vu ce film.", "She remembers having seen this film.")
    ],
    sEnvoler: [
      u("de-origin", "s’envoler de + place", "fly away from", "L’oiseau s’envole de la branche.", "The bird flies away from the branch.")
    ],
    rever: [
      u("de-noun", "rêver de + noun / person", "dream of / about", "Je rêve d’une maison près de la mer.", "I dream of a house near the sea."),
      u("de-infinitive", "rêver de + infinitive", "dream of doing something", "Je rêve de voyager au Canada.", "I dream of traveling to Canada.", "Before an infinitive, use de, not à.", "rever"),
      u("a-noun", "rêver à + noun", "daydream about; imagine", "Elle rêve à son avenir.", "She daydreams about her future.", "À is used for imagining / daydreaming. For a desired material possession, use de.", "rever")
    ],
    arreter: [
      u("de-infinitive", "arrêter de + infinitive", "stop doing something", "J’arrête de travailler à six heures.", "I stop working at six o’clock.")
    ],
    sEnnuyer: [
      u("a-infinitive", "s’ennuyer à + infinitive", "be bored doing something", "Je m’ennuie à lire ce rapport.", "I am bored reading this report.", "À introduces the boring activity.", "ennuyer"),
      u("de-infinitive", "s’ennuyer de + infinitive", "be tired of doing something", "Il s’ennuie d’attendre.", "He is tired of waiting.", "De can introduce the activity causing boredom.", "ennuyer"),
      u("de-person", "s’ennuyer de quelqu’un", "miss someone", "Elle s’ennuie de sa famille.", "She misses her family.", "Especially common in Canadian French. Compare: Sa famille lui manque.", "ennuyer")
    ],
    croire: [
      u("a-noun", "croire à + noun", "believe in the existence / possibility of", "Je crois aux fantômes.", "I believe in ghosts.", "Compare croire en quelqu’un: have confidence in someone.")
    ],
    fermer: [
      u("a-cle", "fermer à clé", "lock", "Je ferme la porte à clé.", "I lock the door.", "A fixed expression describing how the door is closed.")
    ],
    sInquieter: [
      u("de-cause", "s’inquiéter de + noun", "worry about", "Elle s’inquiète de ce retard.", "She worries about this delay.", "De introduces the cause of concern; pour is also common when worrying about someone.")
    ]
  };

  // Audited verbs without a useful current à/de construction in this scope.
  // A direct infinitive, partitive article, or generic time/place adjunct alone
  // does not warrant inventing a prepositional verb pattern.
  const withoutUsage = [
    "seSouhaiter", "controler", "seControler", "pouvoir",
    "voir", "dormir", "sentir", "adorer", "detester", "regarder", "quitter",
    "devenir", "falloir", "pleuvoir", "sAppeler", "sAimer", "seVoir",
    "seRegarder", "seDire", "sAssumer", "seDetendre", "seCalmer", "seBaigner", "eteindre"
  ];

  Object.keys(byVerb).forEach(id => { byVerb[id] = Object.freeze(byVerb[id]); });
  const empty = Object.freeze([]);
  global.FR.data.verbPrepositions = Object.freeze({
    byVerb: Object.freeze(byVerb),
    withoutUsage: Object.freeze(withoutUsage),
    getByVerbId(id) { return byVerb[id] || empty; }
  });
})(window);
