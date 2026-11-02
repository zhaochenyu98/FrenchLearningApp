(function initializeGerondifData(global) {
  "use strict";

  const { data } = global.FR;
  // Formation and subject restrictions: see the references in docs/content-model.md.
  // This module uses only the present-tense registry; no other tense is required.
  const alignedPairs = Object.freeze([["je", "nous"], ["tu", "vous"], ["il", "ils"], ["elle", "elles"]].map(Object.freeze));
  const ruleCatalog = Object.freeze(Object.fromEntries([
    ["formation", "En + present participle", "Remove -ons from the present nous form and add -ant, then put en before it: nous parlons → parlant → en parlant; nous finissons → en finissant. The participle never agrees in gender or number."],
    ["same-subject", "Both actions share a subject", "Je lis en mangeant means that I both read and eat. Keep the subject of the gérondif the same as the main verb. Use pendant que with a separate subject when two different people act."],
    ["irregular", "Three exceptional participles", "Learn être → en étant, avoir → en ayant, and savoir → en sachant. Other irregular verbs normally use their present nous stem: faisons → en faisant, prenons → en prenant."],
    ["ger-cer", "Keep e and ç before -ant", "Retain the spelling of the present nous stem: mangeons → en mangeant, bougeons → en bougeant, commençons → en commençant."],
    ["reflexive", "Keep the reflexive pronoun after en", "The participle stays the same; only the reflexive pronoun changes: en me levant, en te levant, en se levant, en nous levant, en vous levant. Elide before a vowel or mute h: en m’habillant, en s’habillant."],
    ["negative", "Negation follows en", "Put ne/n’ before the participle (and reflexive pronoun), and pas after the participle: en ne parlant pas, en n’ayant pas, en ne me levant pas, en ne m’habillant pas."],
    ["meaning", "While, by, or if", "Use the gérondif for simultaneous actions, means, or a condition: Je chante en cuisinant (while); On apprend en pratiquant (by). Tout en can emphasize simultaneity or contrast: tout en étant fatiguée, elle continue."],
    ["pronunciation", "Pronounce en and the ending", "Both en and the ending -ant contain the nasal vowel /ɑ̃/; final t is silent. Before a vowel, en links with /n/: en allant /ɑ̃ n‿alɑ̃/. Keep the verb’s stem consonants: en finissant /ɑ̃ finisɑ̃/."]
  ].map(([id, title, note]) => [id, Object.freeze({ id, title, note })])));

  // These entries teach an impersonal expression, rather than a personal use of
  // the lexical verb. Do not manufacture a shared personal subject for them.
  const exclusions = Object.freeze({
    falloir: "Falloir has no present participle, so no present gérondif is taught. Use a clause such as comme il faut réserver (since booking is necessary).",
    impersonalValoir: "This entry teaches il vaut mieux, an impersonal expression. Use comme il vaut mieux réserver. Personal valoir has valant, but that is a different construction.",
    ilYA: "Il y a is an impersonal existence expression. Use comme il y a du monde. The personal verb avoir has en ayant in its own entry.",
    impersonalFaire: "Weather expressions such as il fait beau have an impersonal subject. Use comme il fait beau. Personal faire has en faisant in its own entry.",
    impersonalEtre: "Time expressions such as il est huit heures have an impersonal subject. Use comme il est tard. Personal être has en étant in its own entry.",
    pleuvoir: "This entry teaches impersonal weather il pleut. Use pendant qu’il pleut (while it is raining). Pleuvant exists, especially for figurative uses, but it does not give a shared-subject weather example here.",
    sAgir: "Il s’agit de is impersonal. Use comme il s’agit d’une erreur. S’agissant de is a separate formal participial expression, not a personal gérondif pattern."
  });
  const overrides = Object.freeze({
    etreVerb: ["étant", "etɑ̃"], avoirVerb: ["ayant", "ɛjɑ̃"], savoir: ["sachant", "saʃɑ̃"]
  });
  const reflexives = Object.freeze({ je: "me", tu: "te", il: "se", elle: "se", nous: "nous", vous: "vous", ils: "se", elles: "se" });
  const reflexiveIpa = Object.freeze({ me: "mə", te: "tə", se: "sə", nous: "nu", vous: "vu" });
  const vowelSpelling = value => /^[aeiouyhàâäéèêëîïôöùûüœ]/iu.test(value);
  const vowelSound = value => /^[aeiouyɑɛɔœøəɥ]/u.test(value);

  // One authored, translated context per verb. {g} is a complete gérondif;
  // no finite subject is inserted into it. Both actions always share a subject.
  const contexts = Object.freeze({
    dessiner: ["Nous écoutons de la musique {g} les plans de la maison.", "We listen to music while drawing the plans for the house."],
    paraitre: ["Elle gagne en notoriété {g} à la télévision.", "She becomes better known by appearing on television."],
    plaire: ["Le spectacle attire des visiteurs {g} à un large public.", "The show attracts visitors by appealing to a wide audience."],
    rire: ["Nous dédramatisons la situation {g} de nos erreurs.", "We put the situation in perspective by laughing at our mistakes."],
    reagir: ["Nous évitons un accident {g} rapidement.", "We avoid an accident by reacting quickly."],
    accueillir: ["Nous sourions {g} les nouveaux élèves.", "We smile while welcoming the new students."],
    creer: ["Nous aidons les élèves {g} des exercices adaptés.", "We help the students by creating suitable exercises."],
    allumer: ["Nous éclairons la pièce {g} la lampe.", "We light up the room by switching on the lamp."],
    aider: ["Nous apprenons la patience {g} les enfants.", "We learn patience by helping the children."],
    tuer: ["Nous discutons {g} le temps avant le départ.", "We chat while killing time before departure."],
    eviter: ["Nous réduisons les risques {g} de conduire la nuit.", "We reduce the risks by avoiding driving at night."],
    permettre: ["Nous facilitons l’exercice {g} aux élèves d’utiliser un dictionnaire.", "We make the exercise easier by allowing the students to use a dictionary."],
    recevoir: ["Nous sourions {g} de bonnes nouvelles.", "We smile on receiving good news."],
    completer: ["Nous vérifions les dates {g} le dossier.", "We check the dates while completing the file."],
    reflechir: ["Nous trouvons une solution {g} à la question.", "We find a solution by thinking about the question."],
    donner: ["Nous partageons notre expérience {g} des conseils.", "We share our experience by giving advice."],
    perdre: ["Nous arrivons en retard {g} du temps dans les embouteillages.", "We arrive late after losing time in traffic."],
    bouger: ["Nous nous réchauffons {g} un peu.", "We warm up by moving around a little."],
    souhaiter: ["Nous sourions {g} la bienvenue aux invités.", "We smile while welcoming the guests."],
    seSouhaiter: ["Nous sourions {g} bonne chance.", "We smile while wishing each other good luck."],
    controler: ["Nous vérifions les noms {g} les billets.", "We check the names while checking the tickets."],
    seControler: ["Nous évitons une dispute {g}.", "We avoid an argument by controlling ourselves."],
    occuper: ["Nous les aidons à patienter {g} les enfants avec des jeux.", "We help the children wait by keeping them busy with games."],
    sAbonner: ["Nous soutenons la presse locale {g} au journal.", "We support the local press by subscribing to the newspaper."],
    sOccuper: ["Nous apprenons beaucoup {g} de ce projet.", "We learn a lot by taking care of this project."],
    montrer: ["Nous racontons notre voyage {g} nos photos.", "We tell the story of our trip while showing our photos."],
    interesser: ["Nous encourageons la lecture {g} les élèves à l’histoire.", "We encourage reading by getting the students interested in history."],
    sInteresser: ["Nous découvrons le quartier {g} à son histoire.", "We discover the neighborhood by taking an interest in its history."],
    etreVerb: ["Nous aidons nos amis {g} à leur écoute.", "We help our friends by being ready to listen to them."],
    avoirVerb: ["Nous travaillons mieux {g} assez de temps.", "We work better when we have enough time."],
    aller: ["Nous discutons {g} à l’école.", "We chat while going to school."],
    venir: ["Nous passons devant la gare {g} chez toi.", "We pass the station on our way to your place."],
    tenir: ["Nous aidons les voisins {g} la porte ouverte.", "We help the neighbors by holding the door open."],
    prendre: ["Nous gagnons du temps {g} le métro.", "We save time by taking the metro."],
    apprendre: ["Nous découvrons une culture {g} sa langue.", "We discover a culture by learning its language."],
    comprendre: ["Nous progressons {g} nos erreurs.", "We make progress by understanding our mistakes."],
    faire: ["Nous restons en forme {g} du sport.", "We stay fit by exercising."],
    mettre: ["Nous préparons le dîner {g} la table.", "We get dinner ready by setting the table."],
    devoir: ["Tout {g} partir tôt, nous prenons le temps de dire au revoir.", "Even though we have to leave early, we take the time to say goodbye."],
    pouvoir: ["Tout {g} prendre la voiture, nous préférons marcher.", "Although we could take the car, we prefer to walk."],
    vouloir: ["Nous faisons une erreur {g} aller trop vite.", "We make a mistake by wanting to go too fast."],
    savoir: ["Nous partons sereinement {g} que tout est prêt.", "We leave with peace of mind, knowing that everything is ready."],
    connaitre: ["Nous nous orientons facilement {g} bien le quartier.", "We find our way easily because we know the neighborhood well."],
    voir: ["Nous sourions {g} nos amis.", "We smile on seeing our friends."],
    boire: ["Nous nous rafraîchissons {g} de l’eau.", "We cool down by drinking water."],
    dire: ["Nous gagnons leur confiance {g} la vérité.", "We gain their trust by telling the truth."],
    offrir: ["Nous lui faisons plaisir {g} un livre à Léa.", "We make Léa happy by giving her a book."],
    ouvrir: ["Nous aérons la chambre {g} la fenêtre.", "We air the bedroom by opening the window."],
    ecrire: ["Nous pratiquons le français {g} à nos amis.", "We practice French by writing to our friends."],
    lire: ["Nous apprenons de nouveaux mots {g} le journal.", "We learn new words by reading the newspaper."],
    suivre: ["Nous trouvons la sortie {g} les panneaux.", "We find the exit by following the signs."],
    vivre: ["Nous découvrons la culture locale {g} ici.", "We discover the local culture by living here."],
    dormir: ["Nous récupérons {g} suffisamment.", "We recover by getting enough sleep."],
    courir: ["Nous nous échauffons {g} lentement.", "We warm up by running slowly."],
    partir: ["Nous fermons la porte {g}.", "We close the door as we leave."],
    sortir: ["Nous éteignons la lumière {g}.", "We turn off the light as we go out."],
    servir: ["Nous discutons {g} le dîner.", "We chat while serving dinner."],
    sentir: ["Nous sourions {g} le parfum des fleurs.", "We smile on smelling the flowers’ fragrance."],
    parler: ["Nous progressons {g} français chaque jour.", "We improve by speaking French every day."],
    expliquer: ["Nous vérifions nos connaissances {g} la règle.", "We check our understanding by explaining the rule."],
    proposer: ["Nous lançons la discussion {g} une idée.", "We start the discussion by suggesting an idea."],
    deposer: ["Nous discutons {g} les enfants à l’école.", "We chat while dropping the children off at school."],
    depenser: ["Nous dépassons notre budget {g} trop d’argent.", "We go over our budget by spending too much money."],
    chercher: ["Nous retrouvons une photo {g} nos clés.", "We find a photo while looking for our keys."],
    changer: ["Nous gagnons du temps {g} de train à Lyon.", "We save time by changing trains in Lyon."],
    manger: ["Nous discutons {g} à la cantine.", "We chat while eating in the cafeteria."],
    inviter: ["Nous créons des liens {g} nos voisins à dîner.", "We build relationships by inviting our neighbors to dinner."],
    aimer: ["Nous acceptons ses défauts {g} cette personne.", "We accept this person’s faults as part of loving them."],
    adorer: ["Tout {g} ce café, nous essayons d’autres endroits.", "Although we love this café, we try other places."],
    detester: ["Tout {g} attendre, nous restons patients.", "Although we hate waiting, we remain patient."],
    preferer: ["Nous réduisons nos dépenses {g} le train à la voiture.", "We reduce our expenses by choosing the train over the car."],
    envoyer: ["Nous gardons le contact {g} des nouvelles.", "We keep in touch by sending news."],
    payer: ["Nous gagnons du temps {g} en ligne.", "We save time by paying online."],
    essayer: ["Nous apprenons {g} de nouvelles méthodes.", "We learn by trying new methods."],
    gagner: ["Elle se qualifie pour la finale {g} ce match.", "She qualifies for the final by winning this match."],
    penser: ["Nous sourions {g} aux vacances.", "We smile while thinking about the holidays."],
    porter: ["Nous restons au chaud {g} des manteaux.", "We keep warm by wearing coats."],
    supprimer: ["Nous libérons de l’espace {g} les anciens fichiers.", "We free up space by deleting the old files."],
    finir: ["Nous vérifions les détails {g} le travail.", "We check the details as we finish the work."],
    agrandir: ["Nous voyons les détails {g} la photo.", "We see the details by enlarging the photo."],
    choisir: ["Nous économisons {g} un menu moins cher.", "We save money by choosing a cheaper set menu."],
    reussir: ["Nous obtenons le diplôme {g} nos examens.", "We earn the diploma by passing our exams."],
    unir: ["Nous avançons plus vite {g} nos efforts.", "We move forward faster by joining forces."],
    attendre: ["Nous lisons {g} le bus.", "We read while waiting for the bus."],
    arriver: ["Nous saluons les voisins {g}.", "We greet the neighbors as we arrive."],
    habiter: ["Nous réduisons les trajets {g} près du travail.", "We shorten our journeys by living near work."],
    trouver: ["Nous résolvons le problème {g} la bonne adresse.", "We solve the problem by finding the right address."],
    regarder: ["Nous apprenons {g} un documentaire.", "We learn by watching a documentary."],
    laisser: ["Nous aérons la pièce {g} la porte ouverte.", "We air the room by leaving the door open."],
    reserver: ["Nous obtenons un meilleur prix {g} à l’avance.", "We get a better price by booking in advance."],
    quitter: ["Nous disons au revoir {g} le bureau.", "We say goodbye as we leave the office."],
    passer: ["Nous visitons le musée {g} par Lyon.", "We visit the museum while passing through Lyon."],
    commencer: ["Nous gagnons du temps {g} tôt.", "We save time by starting early."],
    voyager: ["Nous découvrons le pays {g} en train.", "We discover the country by traveling by train."],
    travailler: ["Nous apprenons beaucoup {g} ensemble.", "We learn a lot by working together."],
    dejeuner: ["Nous discutons du projet {g}.", "We discuss the project over lunch."],
    acheter: ["Nous soutenons les producteurs {g} des produits locaux.", "We support producers by buying local products."],
    rentrer: ["Nous passons à la boulangerie {g} à la maison.", "We stop at the bakery on our way home."],
    demander: ["Nous évitons une erreur {g} de l’aide.", "We avoid a mistake by asking for help."],
    jouer: ["Nous apprenons {g} à des jeux de mots.", "We learn by playing word games."],
    nager: ["Nous nous détendons {g} dans la piscine.", "We relax by swimming in the pool."],
    tourner: ["Nous atteignons la place {g} à droite.", "We reach the square by turning right."],
    couter: ["Ce billet reste intéressant tout {g} plus cher.", "This ticket remains attractive even though it costs more."],
    entrer: ["Nous saluons le professeur {g} dans la classe.", "We greet the teacher as we enter the classroom."],
    monter: ["Nous nous fatiguons {g} les escaliers.", "We get tired while climbing the stairs."],
    retourner: ["Nous retrouvons nos amis {g} au village.", "We see our friends again when we return to the village."],
    rester: ["Nous économisons {g} à la maison.", "We save money by staying at home."],
    tomber: ["Elle se blesse {g} de vélo.", "She hurts herself by falling off her bike."],
    descendre: ["Nous faisons attention {g} les escaliers.", "We are careful while going down the stairs."],
    revenir: ["Nous achetons du pain {g} du marché.", "We buy bread on our way back from the market."],
    devenir: ["Nous apprenons la patience {g} parents.", "We learn patience as we become parents."],
    naitre: ["Le bébé pousse son premier cri {g}.", "The baby lets out its first cry as it is born."],
    mourir: ["Le héros sauve ses amis {g} pour eux.", "The hero saves his friends by dying for them."],
    seLaver: ["Nous économisons l’eau {g} rapidement.", "We save water by washing ourselves quickly."],
    seLever: ["Nous gagnons du temps {g} tôt.", "We save time by getting up early."],
    seReposer: ["Nous reprenons des forces {g}.", "We regain our strength by resting."],
    sAppeler: ["Il risque d’être confondu avec son père {g} comme lui.", "He risks being mistaken for his father because he has the same name.", "il"],
    sHabiller: ["Nous écoutons la radio {g}.", "We listen to the radio while getting dressed."],
    seTrouver: ["Nous pouvons visiter le musée {g} déjà dans ce quartier.", "We can visit the museum since we are already in this neighborhood."],
    sePasser: ["Nous économisons {g} de voiture.", "We save money by doing without a car."],
    sePromener: ["Nous découvrons le quartier {g}.", "We discover the neighborhood by taking a walk."],
    seRappeler: ["Nous sourions {g} nos vacances.", "We smile while remembering our holidays."],
    sAimer: ["Ils se soutiennent {g} malgré leurs différences.", "They support each other by loving one another despite their differences.", "ils"],
    seConnaitre: ["Nous collaborons mieux {g} depuis longtemps.", "We work together better because we have known each other for a long time."],
    seMarier: ["Nous réunissons nos familles {g}.", "We bring our families together by getting married."],
    seVoir: ["Nous gardons le contact {g} chaque semaine.", "We keep in touch by seeing each other every week."],
    seRegarder: ["Nous éclatons de rire {g}.", "We burst out laughing as we look at each other."],
    seDire: ["Nous nous encourageons {g} que tout ira bien.", "We encourage ourselves by telling ourselves that everything will be fine."],
    seVendre: ["Ce produit gagne en popularité {g} dans plusieurs pays.", "This product gains popularity by being sold in several countries.", "il"],
    seSouvenir: ["Nous évitons une erreur {g} de la règle.", "We avoid a mistake by remembering the rule."],
    sEnvoler: ["Les oiseaux quittent l’arbre {g} au-dessus du jardin.", "The birds leave the tree by flying away over the garden.", "ils"],
    rever: ["Nous sourions {g} à nos prochaines vacances.", "We smile while dreaming about our next holiday."],
    arreter: ["Nous économisons l’énergie {g} le moteur.", "We save energy by stopping the engine."],
    sAssumer: ["Nous gagnons en confiance {g} pleinement.", "We gain confidence by fully accepting ourselves."],
    sEnnuyer: ["Nous regardons l’heure {g} pendant la réunion.", "We check the time while feeling bored during the meeting."],
    seDetendre: ["Nous respirons mieux {g}.", "We breathe more easily as we relax."],
    seCalmer: ["Nous réfléchissons mieux {g}.", "We think more clearly as we calm down."],
    seBaigner: ["Nous nous rafraîchissons {g} dans le lac.", "We cool down by swimming in the lake."],
    croire: ["Nous gardons espoir {g} à une solution.", "We keep hoping by believing in a solution."],
    eteindre: ["Nous économisons l’électricité {g} la lumière.", "We save electricity by turning off the light."],
    fermer: ["Nous réduisons le bruit {g} la fenêtre.", "We reduce the noise by closing the window."],
    sInquieter: ["Nous dormons mal {g} pour nos amis.", "We sleep badly because we are worrying about our friends."]
  });

  function deriveParticiple(source) {
    if (overrides[source.key]) return { form: overrides[source.key][0], ipa: overrides[source.key][1], irregular: true };
    const row = source.rows.find(entry => entry.pronoun === "nous");
    const lexical = row?.form.replace(/^nous\s+/u, "");
    if (!lexical?.endsWith("ons")) throw new Error(`${source.key}: missing usable present nous form.`);
    // Keep the original -ge- and -ç- spelling, unlike before imparfait -ions.
    const form = lexical.slice(0, -3) + "ant";
    const raw = (row.ipa || verbPhraseIpa[row.full] || "").replace(/[/.\s‿]/gu, "");
    const base = source.infinitive.replace(/^(?:se\s+|s[’'])/iu, "");
    const prefix = source.group === "pronominal"
      ? vowelSpelling(base) ? "nunuz" : "nunu"
      : vowelSpelling(base) ? "nuz" : "nu";
    // Adorer's authored present IPA omits the otherwise required liaison.
    const actualPrefix = source.key === "adorer" ? "nu" : prefix;
    if (!raw.startsWith(actualPrefix) || !raw.endsWith("ɔ̃")) throw new Error(`${source.key}: cannot extract present nous IPA.`);
    return { form, ipa: raw.slice(actualPrefix.length, -2) + "ɑ̃", irregular: false };
  }

  function createRows(source, participle) {
    if (source.group !== "pronominal") {
      const full = `en ${participle.form}`;
      return [Object.freeze({ pronoun: "invariable", form: participle.form, full, speech: full,
        ipa: `/ɑ̃ ${vowelSound(participle.ipa) ? "n‿" : ""}${participle.ipa}/` })];
    }
    return Object.entries(reflexives).map(([pronoun, reflexive]) => {
      const elided = vowelSpelling(participle.form) && ["me", "te", "se"].includes(reflexive);
      const form = `${elided ? reflexive[0] + "’" : reflexive + " "}${participle.form}`;
      let prefix = reflexiveIpa[reflexive];
      if (vowelSound(participle.ipa)) prefix = elided ? prefix[0] : `${prefix}z‿`;
      const full = `en ${form}`;
      return Object.freeze({ pronoun, form, full, speech: full,
        ipa: `/ɑ̃ ${prefix}${elided || prefix.endsWith("‿") ? "" : " "}${participle.ipa}/` });
    });
  }

  const items = [];
  const errors = [];
  data.verbs.items.forEach(source => {
    if (exclusions[source.key]) return;
    try {
      const participle = deriveParticiple(source);
      const rows = Object.freeze(createRows(source, participle));
      const context = contexts[source.key];
      if (!context) throw new Error(`${source.key}: missing gérondif context.`);
      const person = context[2] || "nous";
      const sample = rows.find(row => row.pronoun === person) || rows[0];
      const rules = ["formation", "same-subject"];
      if (participle.irregular) rules.push("irregular");
      if (/(?:ger|cer)$/u.test(source.infinitive)) rules.push("ger-cer");
      if (source.group === "pronominal") rules.push("reflexive");
      const nous = source.rows.find(row => row.pronoun === "nous");
      items.push(Object.freeze({
        key: source.key, group: source.group, label: source.label, infinitive: source.infinitive,
        title: `${source.label} — gérondif`, participle: participle.form,
        formula: Object.freeze({ text: participle.irregular
          ? `${source.infinitive} → ${participle.form} (exceptional present participle); add en.`
          : `Present nous ${nous.form} → ${participle.form}; add en${source.group === "pronominal" ? " before the reflexive pronoun" : ""}.` }),
        singleFormLabel: "Invariable participle · all subjects",
        rows, examples: Object.freeze({ statement: Object.freeze({ fr: context[0].replace("{g}", sample.full), en: context[1] }) }),
        specialRules: Object.freeze(rules.map(id => ruleCatalog[id]))
      }));
    } catch (error) {
      errors.push(Object.freeze({ key: source.key, label: source.label, error }));
    }
  });
  const byKey = new Map(items.map(item => [item.key, item]));
  const groups = data.verbs.groups.map(group => Object.freeze({
    key: group.key, title: group.title, indexTitle: group.indexTitle || group.title,
    descriptionHtml: "Practice en + present participle, pronunciation, and a translated example with a shared subject.",
    items: Object.freeze(items.filter(item => item.group === group.key).sort((a, b) => a.label.localeCompare(b.label, "fr")))
  })).filter(group => group.items.length);
  data.gerondif = Object.freeze({
    alignedPairs, ruleCatalog, exclusions, items: Object.freeze(items), groups: Object.freeze(groups), errors: Object.freeze(errors),
    getItem(key) { return byKey.get(key) || null; },
    getExclusion(key) { return exclusions[key] || null; }
  });
})(window);
