(function registerImperative(root) {
  "use strict";

  const FR = root.FR = root.FR || {};
  FR.data = FR.data || {};

  const personOrder = Object.freeze(["tu", "nous", "vous"]);
  const errors = [];

  function command(affirmativeFr, affirmativeEn, negativeFr, negativeEn, note) {
    return {
      examples: {
        affirmative: { fr: affirmativeFr, en: affirmativeEn },
        negative: { fr: negativeFr, en: negativeEn }
      },
      note: note || ""
    };
  }

  const curated = Object.freeze({
    etreVerb: command(
      "Sois patient pendant l’exercice !",
      "Be patient during the exercise!",
      "Ne sois pas impatient pendant l’exercice !",
      "Do not be impatient during the exercise!",
      "Être has a fully irregular imperative: sois, soyons, soyez."
    ),
    avoirVerb: command(
      "Aie confiance en toi !",
      "Have confidence in yourself!",
      "N’aie pas peur de poser des questions !",
      "Do not be afraid to ask questions!",
      "Avoir has a fully irregular imperative: aie, ayons, ayez."
    ),
    aller: command(
      "Va directement à la gare !",
      "Go directly to the train station!",
      "Ne va pas à la mauvaise gare !",
      "Do not go to the wrong train station!",
      "The tu form is va, but it regains -s before y or en: vas-y, vas-en."
    ),
    venir: command(
      "Viens dîner avec nous ce soir !",
      "Come have dinner with us tonight!",
      "Ne viens pas trop tard !",
      "Do not come too late!"
    ),
    tenir: command(
      "Tiens la porte, s’il te plaît !",
      "Hold the door, please!",
      "Ne tiens pas la porte ouverte trop longtemps !",
      "Do not hold the door open for too long!"
    ),
    prendre: command(
      "Prends un parapluie !",
      "Take an umbrella!",
      "Ne prends pas la voiture aujourd’hui !",
      "Do not take the car today!"
    ),
    apprendre: command(
      "Apprends ces mots par cœur !",
      "Learn these words by heart!",
      "N’apprends pas toute la liste en une seule fois !",
      "Do not learn the entire list all at once!"
    ),
    comprendre: command(
      "Comprends bien la consigne avant de commencer !",
      "Understand the instruction clearly before starting!",
      "Ne comprends pas ma remarque de travers !",
      "Do not misunderstand my comment!"
    ),
    faire: command(
      "Fais tes devoirs avant le dîner !",
      "Do your homework before dinner!",
      "Ne fais pas tout à la dernière minute !",
      "Do not do everything at the last minute!"
    ),
    devoir: command(
      "Dans ce jeu, dois dix euros à la banque !",
      "In this game, owe ten euros to the bank!",
      "Ne dois pas plus de vingt euros à la banque !",
      "Do not owe more than twenty euros to the bank!",
      "The imperative dois, devons, devez exists but is rare in everyday French. This example uses a game rule, where commanding a fictional debt is natural."
    ),
    vouloir: command(
      "Veuillez patienter ici !",
      "Please wait here!",
      "Veuillez ne pas entrer sans autorisation !",
      "Please do not enter without permission!",
      "Veuillez + infinitive is the common polite form. Veuille and veuillons are formal or rare; a polite negative normally uses veuillez ne pas + infinitive."
    ),
    savoir: command(
      "Sache que tu peux compter sur moi !",
      "Know that you can count on me!",
      "Ne sache pas seulement parler : sache aussi écouter !",
      "Do not merely know how to speak; know how to listen too!",
      "Savoir has the irregular forms sache, sachons, sachez. Its negative imperative is uncommon and is most natural in a contrast like this one."
    ),
    connaitre: command(
      "Connaissez vos droits avant de signer !",
      "Know your rights before signing!",
      "Ne connaissez pas seulement vos droits : connaissez aussi vos devoirs !",
      "Do not know only your rights; know your responsibilities too!",
      "The imperative of connaître is most natural in advice, instructions, and slogans."
    ),
    voir: command(
      "Vois le bon côté des choses !",
      "See the bright side of things!",
      "Ne vois pas seulement les difficultés !",
      "Do not see only the difficulties!"
    ),
    boire: command(
      "Bois un verre d’eau !",
      "Drink a glass of water!",
      "Ne bois pas trop de café !",
      "Do not drink too much coffee!"
    ),
    dire: command(
      "Dis-moi la vérité !",
      "Tell me the truth!",
      "Ne dis rien à personne !",
      "Do not tell anyone anything!"
    ),
    offrir: command(
      "Offre-lui des fleurs !",
      "Give them some flowers!",
      "N’offre pas un cadeau trop cher !",
      "Do not give an overly expensive gift!",
      "Although offrir ends in -ir, its tu imperative is offre without final -s, like an -er verb."
    ),
    ouvrir: command(
      "Ouvre la fenêtre !",
      "Open the window!",
      "N’ouvre pas cette porte !",
      "Do not open this door!",
      "Although ouvrir ends in -ir, its tu imperative is ouvre without final -s, like an -er verb."
    ),
    ecrire: command(
      "Écris ton nom ici !",
      "Write your name here!",
      "N’écris pas dans ce livre !",
      "Do not write in this book!"
    ),
    lire: command(
      "Lis les instructions avant de commencer !",
      "Read the instructions before starting!",
      "Ne lis pas la réponse tout de suite !",
      "Do not read the answer right away!"
    ),
    suivre: command(
      "Suis-moi jusqu’à la gare !",
      "Follow me to the train station!",
      "Ne suis pas cette route après la tombée de la nuit !",
      "Do not follow this route after nightfall!"
    ),
    vivre: command(
      "Vis pleinement chaque journée !",
      "Live every day fully!",
      "Ne vis pas dans le passé !",
      "Do not live in the past!"
    ),
    dormir: command(
      "Dors bien cette nuit !",
      "Sleep well tonight!",
      "Ne dors pas sur le canapé !",
      "Do not sleep on the sofa!"
    ),
    partir: command(
      "Pars avant huit heures !",
      "Leave before eight o’clock!",
      "Ne pars pas sans ton passeport !",
      "Do not leave without your passport!"
    ),
    sortir: command(
      "Sors prendre l’air !",
      "Go outside for some fresh air!",
      "Ne sors pas sans manteau !",
      "Do not go out without a coat!"
    ),
    servir: command(
      "Sers le dîner à huit heures !",
      "Serve dinner at eight o’clock!",
      "Ne sers pas le vin trop chaud !",
      "Do not serve the wine too warm!"
    ),
    sentir: command(
      "Sens ce parfum !",
      "Smell this perfume!",
      "Ne sens pas ce produit de trop près !",
      "Do not smell this product from too close!"
    ),
    parler: command(
      "Parle plus lentement !",
      "Speak more slowly!",
      "Ne parle pas pendant le film !",
      "Do not talk during the movie!"
    ),
    chercher: command(
      "Cherche tes clés dans l’entrée !",
      "Look for your keys in the entryway!",
      "Ne cherche pas une solution trop compliquée !",
      "Do not look for an overly complicated solution!"
    ),
    manger: command(
      "Mange tes légumes !",
      "Eat your vegetables!",
      "Ne mange pas trop vite !",
      "Do not eat too quickly!"
    ),
    inviter: command(
      "Invite Léa à dîner !",
      "Invite Léa to dinner!",
      "N’invite pas trop de monde !",
      "Do not invite too many people!"
    ),
    adorer: command(
      "Adore ce que tu fais !",
      "Love what you do!",
      "N’adore pas l’argent au point d’oublier tes proches !",
      "Do not love money so much that you forget those close to you!",
      "Commands with adorer are emotionally strong and are most natural in motivational, rhetorical, or religious language."
    ),
    detester: command(
      "Déteste-moi si tu veux !",
      "Hate me if you want!",
      "Ne déteste pas quelqu’un sans le connaître !",
      "Do not hate someone without knowing them!",
      "Commands with détester are grammatically regular but emotionally marked, so they usually appear in dramatic or moralizing contexts."
    ),
    preferer: command(
      "Préférez le train pour ce trajet !",
      "Choose the train for this trip!",
      "Ne préférez pas le prix à la qualité !",
      "Do not favor price over quality!",
      "The imperative of préférer is most natural when giving a recommendation, especially with vous."
    ),
    gagner: command(
      "Gagne cette partie sans tricher !",
      "Win this game without cheating!",
      "Ne gagne pas cette partie en trichant !",
      "Do not win this game by cheating!"
    ),
    penser: command(
      "Pense à fermer la porte !",
      "Remember to close the door!",
      "Ne pense pas seulement au travail !",
      "Do not think only about work!"
    ),
    porter: command(
      "Porte ce carton avec les deux mains !",
      "Carry this box with both hands!",
      "Ne porte pas cette valise tout seul !",
      "Do not carry this suitcase by yourself!"
    ),
    finir: command(
      "Finis tes devoirs avant de sortir !",
      "Finish your homework before going out!",
      "Ne finis pas tout le gâteau !",
      "Do not finish the entire cake!"
    ),
    choisir: command(
      "Choisis une réponse !",
      "Choose an answer!",
      "Ne choisis pas au hasard !",
      "Do not choose at random!"
    ),
    reussir: command(
      "Réussis ton examen !",
      "Pass your exam!",
      "Ne réussis pas ton examen en trichant !",
      "Do not pass your exam by cheating!",
      "The affirmative is encouragement. In the negative example, the command rejects the dishonest method rather than success itself."
    ),
    unir: command(
      "Unissons nos forces !",
      "Let us join forces!",
      "N’unissons pas ces deux équipes pour l’instant !",
      "Let us not combine these two teams for now!"
    ),
    attendre: command(
      "Attends-moi devant la gare !",
      "Wait for me in front of the train station!",
      "N’attends pas jusqu’à la dernière minute !",
      "Do not wait until the last minute!"
    ),
    arriver: command(
      "Arrive dix minutes en avance !",
      "Arrive ten minutes early!",
      "N’arrive pas en retard !",
      "Do not arrive late!"
    ),
    habiter: command(
      "Habitez près de votre lieu de travail si possible !",
      "Live near your workplace if possible!",
      "N’habitez pas trop loin des transports !",
      "Do not live too far from public transportation!"
    ),
    trouver: command(
      "Trouve une solution simple !",
      "Find a simple solution!",
      "Ne trouve pas d’excuses !",
      "Do not make excuses!"
    ),
    regarder: command(
      "Regarde cette photo !",
      "Look at this photo!",
      "Ne regarde pas directement le soleil !",
      "Do not look directly at the sun!"
    ),
    laisser: command(
      "Laisse la porte ouverte !",
      "Leave the door open!",
      "Ne laisse pas tes clés dans la voiture !",
      "Do not leave your keys in the car!"
    ),
    reserver: command(
      "Réserve une table pour ce soir !",
      "Reserve a table for tonight!",
      "Ne réserve pas avant de confirmer la date !",
      "Do not make a reservation before confirming the date!"
    ),
    quitter: command(
      "Quitte le bureau avant dix-huit heures !",
      "Leave the office before six p.m.!",
      "Ne quitte pas la réunion trop tôt !",
      "Do not leave the meeting too early!"
    ),
    passer: command(
      "Passe une bonne journée !",
      "Have a good day!",
      "Ne passe pas toute la journée devant l’écran !",
      "Do not spend the entire day in front of the screen!"
    ),
    commencer: command(
      "Commence par l’exercice le plus facile !",
      "Start with the easiest exercise!",
      "Ne commence pas sans lire les consignes !",
      "Do not start without reading the instructions!"
    ),
    voyager: command(
      "Voyage léger !",
      "Travel light!",
      "Ne voyage pas sans assurance !",
      "Do not travel without insurance!"
    ),
    travailler: command(
      "Travaille à ton rythme !",
      "Work at your own pace!",
      "Ne travaille pas toute la nuit !",
      "Do not work all night!"
    ),
    dejeuner: command(
      "Déjeune avec nous demain !",
      "Have lunch with us tomorrow!",
      "Ne déjeune pas trop tard !",
      "Do not have lunch too late!"
    ),
    acheter: command(
      "Achète du pain en rentrant !",
      "Buy some bread on your way home!",
      "N’achète pas ce produit sans comparer les prix !",
      "Do not buy this product without comparing prices!"
    ),
    rentrer: command(
      "Rentre avant minuit !",
      "Come home before midnight!",
      "Ne rentre pas seul !",
      "Do not come home alone!"
    ),
    demander: command(
      "Demande de l’aide si nécessaire !",
      "Ask for help if necessary!",
      "Ne demande pas la réponse tout de suite !",
      "Do not ask for the answer right away!"
    ),
    jouer: command(
      "Joue cette chanson au piano !",
      "Play this song on the piano!",
      "Ne joue pas avec ton téléphone à table !",
      "Do not play with your phone at the table!"
    ),
    nager: command(
      "Nage près du bord !",
      "Swim near the edge!",
      "Ne nage pas après le coucher du soleil !",
      "Do not swim after sunset!"
    ),
    tourner: command(
      "Tourne à gauche au prochain carrefour !",
      "Turn left at the next intersection!",
      "Ne tourne pas ici !",
      "Do not turn here!"
    ),
    couter: command(
      "Coûte-moi moins de cent euros, s’il te plaît !",
      "Please cost me less than one hundred euros!",
      "Ne me coûte pas une fortune !",
      "Do not cost me a fortune!",
      "Because coûter normally has a non-agent subject, its imperative is unusual and most natural as humorous personification addressed to a purchase, repair, or project."
    ),
    entrer: command(
      "Entrez, s’il vous plaît !",
      "Come in, please!",
      "N’entrez pas sans frapper !",
      "Do not enter without knocking!"
    ),
    monter: command(
      "Monte au deuxième étage !",
      "Go up to the second floor!",
      "Ne monte pas sur cette chaise !",
      "Do not climb onto this chair!"
    ),
    retourner: command(
      "Retourne la carte !",
      "Turn the card over!",
      "Ne retourne pas au bureau ce soir !",
      "Do not go back to the office tonight!"
    ),
    rester: command(
      "Reste ici quelques minutes !",
      "Stay here for a few minutes!",
      "Ne reste pas dehors sous la pluie !",
      "Do not stay outside in the rain!"
    ),
    tomber: command(
      "Tombe sur le tapis pendant la répétition !",
      "Fall onto the mat during rehearsal!",
      "Ne tombe pas en arrière !",
      "Do not fall backward!",
      "The affirmative imperative is mainly natural in staged movement, sports, or physical instructions; the negative is much more common."
    ),
    descendre: command(
      "Descends à la prochaine station !",
      "Get off at the next station!",
      "Ne descends pas avant l’arrêt final !",
      "Do not get off before the final stop!"
    ),
    revenir: command(
      "Reviens demain matin !",
      "Come back tomorrow morning!",
      "Ne reviens pas trop tard !",
      "Do not come back too late!"
    ),
    devenir: command(
      "Deviens la personne que tu veux être !",
      "Become the person you want to be!",
      "Ne deviens pas impatient !",
      "Do not become impatient!"
    ),
    naitre: command(
      "Nais à une vie nouvelle !",
      "Be born into a new life!",
      "Ne nais pas à une vie guidée par la peur !",
      "Do not be born into a life guided by fear!",
      "The imperative nais, naissons, naissez is rare and literary; these examples use metaphorical rebirth rather than literal birth."
    ),
    mourir: command(
      "Meurs de rire devant cette comédie !",
      "Die laughing at this comedy!",
      "Ne meurs pas d’ennui pendant le spectacle !",
      "Do not die of boredom during the show!",
      "The imperative meurs, mourons, mourez is potentially harsh literally, so these examples use harmless figurative expressions."
    ),
    rever: command(
      "Rêve de ton prochain voyage !",
      "Dream about your next trip!",
      "Ne rêve pas seulement de réussite !",
      "Do not dream only of success!"
    ),
    arreter: command(
      "Arrête la voiture ici !",
      "Stop the car here!",
      "N’arrête pas le moteur !",
      "Do not turn off the engine!"
    )
  });

  const excluded = Object.freeze({
    pouvoir: "Pouvoir has no standard modern imperative."
  });

  const explicitRows = Object.freeze({
    etreVerb: Object.freeze([
      Object.freeze({ person: "tu", form: "sois", ipa: "/swa/" }),
      Object.freeze({ person: "nous", form: "soyons", ipa: "/swa.jɔ̃/" }),
      Object.freeze({ person: "vous", form: "soyez", ipa: "/swa.je/" })
    ]),
    avoirVerb: Object.freeze([
      Object.freeze({ person: "tu", form: "aie", ipa: "/ɛ/" }),
      Object.freeze({ person: "nous", form: "ayons", ipa: "/ɛ.jɔ̃/" }),
      Object.freeze({ person: "vous", form: "ayez", ipa: "/ɛ.je/" })
    ]),
    aller: Object.freeze([
      Object.freeze({ person: "tu", form: "va", ipa: "/va/" }),
      Object.freeze({ person: "nous", form: "allons", ipa: "/a.lɔ̃/" }),
      Object.freeze({ person: "vous", form: "allez", ipa: "/a.le/" })
    ]),
    savoir: Object.freeze([
      Object.freeze({ person: "tu", form: "sache", ipa: "/saʃ/" }),
      Object.freeze({ person: "nous", form: "sachons", ipa: "/sa.ʃɔ̃/" }),
      Object.freeze({ person: "vous", form: "sachez", ipa: "/sa.ʃe/" })
    ]),
    vouloir: Object.freeze([
      Object.freeze({ person: "tu", form: "veuille", ipa: "/vœj/" }),
      Object.freeze({ person: "nous", form: "veuillons", ipa: "/vœ.jɔ̃/" }),
      Object.freeze({ person: "vous", form: "veuillez", ipa: "/vœ.je/" })
    ])
  });

  const erLikeTuKeys = new Set(["offrir", "ouvrir"]);

  function recordError(key, error) {
    errors.push(Object.freeze({
      key: key || "registry",
      message: error instanceof Error ? error.message : String(error)
    }));
  }

  function requireText(value, path) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error(`${path} must be a non-empty string.`);
    }
    return value.trim();
  }

  function sourceIpa(row) {
    if (row && typeof row.ipa === "string" && row.ipa.trim()) return row.ipa.trim();
    const phraseIpa = FR.data.grammar && FR.data.grammar.verbPhraseIpa;
    if (phraseIpa && row && typeof phraseIpa[row.full] === "string") return phraseIpa[row.full];
    return "";
  }

  function stripSubjectFromIpa(value, person) {
    const ipa = requireText(value, `${person} IPA`);
    if (!/^\/[^/]+\/$/.test(ipa)) throw new Error(`${person} IPA must be wrapped in slashes.`);

    let body = ipa.slice(1, -1).trim();
    if (person === "tu") {
      body = body.replace(/^ty(?:\s+|\.)/, "");
    } else {
      const subject = person === "nous" ? "nu" : "vu";
      const liaisonDot = `${subject}.z`;
      const liaisonSpace = `${subject} z`;
      if (body.startsWith(liaisonDot)) body = body.slice(liaisonDot.length);
      else if (body.startsWith(liaisonSpace)) body = body.slice(liaisonSpace.length);
      else if (body.startsWith(`${subject}.`)) body = body.slice(subject.length + 1);
      else if (body.startsWith(`${subject} `)) body = body.slice(subject.length + 1);
    }

    body = body.replace(/^[.\s‿]+/, "");
    if (!body) throw new Error(`Could not derive a bare ${person} IPA from ${ipa}.`);
    return `/${body}/`;
  }

  function deriveRows(source) {
    if (explicitRows[source.key]) return explicitRows[source.key];
    if (!Array.isArray(source.rows)) throw new Error("Present-tense rows are missing.");

    return Object.freeze(personOrder.map(person => {
      const present = source.rows.find(row => row && row.pronoun === person);
      if (!present) throw new Error(`Present-tense ${person} row is missing.`);

      let form = requireText(present.form, `${person} form`);
      const dropsTuS = person === "tu" && (source.group === "regularEr" || erLikeTuKeys.has(source.key));
      if (dropsTuS) form = form.replace(/s$/, "");

      return Object.freeze({
        person,
        form,
        ipa: stripSubjectFromIpa(sourceIpa(present), person)
      });
    }));
  }

  function freezeExamples(value, key) {
    const affirmative = value && value.affirmative;
    const negative = value && value.negative;
    return Object.freeze({
      affirmative: Object.freeze({
        fr: requireText(affirmative && affirmative.fr, `${key}.examples.affirmative.fr`),
        en: requireText(affirmative && affirmative.en, `${key}.examples.affirmative.en`)
      }),
      negative: Object.freeze({
        fr: requireText(negative && negative.fr, `${key}.examples.negative.fr`),
        en: requireText(negative && negative.en, `${key}.examples.negative.en`)
      })
    });
  }

  function buildItem(source, study) {
    const item = {
      key: requireText(source.key, "item key"),
      label: requireText(source.label, `${source.key}.label`),
      rows: deriveRows(source),
      examples: freezeExamples(study.examples, source.key)
    };
    if (study.note) item.note = requireText(study.note, `${source.key}.note`);
    return Object.freeze(item);
  }

  const verbRegistry = FR.data.verbs;
  const sourceItems = verbRegistry && Array.isArray(verbRegistry.items)
    ? verbRegistry.items
    : [];

  if (!sourceItems.length) {
    recordError("registry", "FR.data.verbs must be registered before js/data/imperative.js.");
  }

  const sourceKeys = new Set(sourceItems.map(item => item && item.key).filter(Boolean));
  const items = [];

  sourceItems.forEach(source => {
    if (!source || !source.key) {
      recordError("unknown", "Encountered a verb entry without a key.");
      return;
    }
    if (source.group === "pronominal" || source.group === "impersonal") return;
    if (excluded[source.key]) return;

    const study = curated[source.key];
    if (!study) {
      recordError(source.key, "No imperative inclusion or exclusion decision is registered.");
      return;
    }

    try {
      items.push(buildItem(source, study));
    } catch (error) {
      recordError(source.key, error);
    }
  });

  Object.keys(curated).forEach(key => {
    if (!sourceKeys.has(key)) recordError(key, "Curated imperative data has no matching FR.data.verbs item.");
  });

  const frozenItems = Object.freeze(items);
  const itemByKey = new Map(frozenItems.map(item => [item.key, item]));

  FR.data.imperative = Object.freeze({
    personOrder,
    items: frozenItems,
    errors: Object.freeze(errors),
    getItem(key) {
      return itemByKey.get(key) || null;
    }
  });
})(window);
