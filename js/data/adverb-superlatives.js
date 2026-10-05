// Grammar references (all examples below are original):
// https://www.laits.utexas.edu/tex/gr/adv4.html
// https://www.laits.utexas.edu/tex/gr/adv2.html
// https://www.laits.utexas.edu/tex/gr/adj8.html
// https://vitrinelinguistique.oqlf.gouv.qc.ca/23066/la-prononciation/prononciation-de-mots-particuliers/prononciation-de-plus
// https://vitrinelinguistique.oqlf.gouv.qc.ca/21603/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/cas-particuliers-daccord-du-verbe/accord-et-emploi-de-cest-et-ce-sont
// https://vitrinelinguistique.oqlf.gouv.qc.ca/21561/la-grammaire/ladjectif/accord-de-ladjectif/cas-particuliers-daccord-de-ladjectif/accord-de-ladjectif-possible
const adverbSuperlativeRules = [
  {
    fr: "le plus / le moins + adverbe",
    meaning: "the most / least … · 副词最高级",
    type: "How an action is performed · 动作的方式",
    note: "Use <strong>le plus / le moins + 副词</strong> to rank an action within a group. <strong>Le is always fixed</strong>, even with feminine or plural subjects: elles parlent le plus clairement. The adverb also stays unchanged. Add de + group when needed; the group may be understood from context.",
    examples: [
      { subject: "Feminine subject · le 不变", fr: "Léa court le plus vite de la classe.", en: "Léa runs the fastest in the class. · Léa 是班里跑得最快的。" },
      { subject: "Plural subject · le 不变", fr: "Elles répondent le plus poliment.", en: "They answer the most politely. · 她们回答得最有礼貌。" },
      { subject: "Le moins", fr: "Paul parle le moins fort du groupe.", en: "Paul speaks the least loudly in the group. · Paul 在组里说话声音最小。" }
    ]
  },
  {
    fr: "verbe + le plus / le moins · le plus / le moins de + nom",
    meaning: "the most / least; the most / fewest of something · 动作量 / 名词数量",
    type: "Quantity · 数量最高级",
    note: "For how much someone does, use <strong>动词 + le plus / le moins</strong>. For an unspecified noun quantity, use <strong>le plus de / le moins de + 无冠词名词</strong>: le plus de livres, le moins d’eau. After de, omit du / de la / de l’ / des. <strong>Le stays fixed</strong>, even before feminine or plural nouns: le plus de patience, le moins de fautes.",
    examples: [
      { subject: "Action amount", fr: "De tous mes amis, Zoé voyage le plus.", en: "Of all my friends, Zoé travels the most. · 在我所有朋友中，Zoé 旅行最多。" },
      { subject: "Feminine noun · le 不变", fr: "Elle a le plus de patience de nous tous.", en: "She has the most patience of all of us. · 她是我们当中最有耐心的。" },
      { subject: "Plural noun · 无冠词", fr: "Cette équipe fait le moins de fautes.", en: "This team makes the fewest mistakes. · 这支队伍犯的错误最少。" }
    ]
  },
  {
    fr: "le plus… possible / aussi… que possible",
    meaning: "as … as possible · 尽可能……",
    type: "Maximum or minimum within what is possible",
    note: "<strong>Le plus + adverbe + possible</strong> and <strong>aussi + adverbe + que possible</strong> can express the same goal: as…as possible. Say le plus vite possible or aussi vite que possible. Use <strong>le mieux possible</strong> for as well as possible. Quantities use <strong>le plus de / le moins de + 无冠词名词 + possible</strong>. Le stays fixed. Possible stays singular with an adverb; singular is also preferred in the quantity construction, even with a plural noun.",
    examples: [
      { subject: "Le plus… possible", fr: "Répondez le plus vite possible.", en: "Reply as quickly as possible. · 尽快回复。" },
      { subject: "Aussi… que possible", fr: "Répondez aussi vite que possible.", en: "Reply as quickly as possible. · 尽快回复。" },
      { subject: "Bien → le mieux", fr: "Faites-le le mieux possible.", en: "Do it as well as possible. · 尽可能做好。" },
      { subject: "As many as possible", fr: "J’essaie de lire le plus de livres possible.", en: "I try to read as many books as possible. · 我尽量多读书。" },
      { subject: "As few as possible", fr: "Faites le moins d’erreurs possible.", en: "Make as few mistakes as possible. · 尽量少犯错误。" }
    ]
  },
  {
    fr: "auxiliaire + le mieux / le plus + participe passé",
    meaning: "superlatives in compound tenses · 复合时态中的位置",
    type: "Placement · 副词位置",
    note: "With a compound tense, short adverb groups such as <strong>le mieux / le plus / le moins</strong> often go between the auxiliary and past participle. Longer groups such as <strong>le plus clairement</strong> commonly follow the participle. A noun quantity follows its verb: a lu le plus de livres. Position can vary with emphasis; these are useful default patterns.",
    examples: [
      { subject: "Short adverb group", fr: "De toutes les candidates, Nora a le mieux chanté.", en: "Of all the candidates, Nora sang the best. · 在所有候选人中，Nora 唱得最好。" },
      { subject: "Longer adverb group", fr: "Elle a répondu le plus clairement.", en: "She answered the most clearly. · 她回答得最清楚。" },
      { subject: "Noun quantity", fr: "De tous les élèves, il a lu le plus de livres cette semaine.", en: "Of all the students, he read the most books this week. · 这周他是所有学生中读书最多的。" }
    ]
  },
  {
    fr: "plus : /plys/ · /ply/ · /plyz/",
    meaning: "listen for the final s · 最高级中的 plus 发音",
    type: "Pronunciation · 发音重点",
    note: "For standalone quantity, <strong>beaucoup → le plus /lə plys/</strong>: final s is pronounced. Before an adverb beginning with a consonant, <strong>le plus vite → /lə ply vit/</strong>: s is silent. Before a vowel sound, liaison gives <strong>le plus efficacement → /lə plyz e.fi.kas.mɑ̃/</strong>: s becomes /z/. Quantity plus de commonly has /plys/; /ply/ also occurs depending on speaker and region.",
    examples: [
      { subject: "Quantity · pronounced s", fr: "C’est Nora qui lit le plus.", en: "Nora is the one who reads the most. · Nora 读得最多，plus 的 s 发音。" },
      { subject: "Before consonant · silent s", fr: "C’est Nora qui lit le plus vite.", en: "Nora is the one who reads the fastest. · Nora 读得最快，plus 的 s 不发音。" },
      { subject: "Before vowel · liaison z", fr: "C’est Nora qui travaille le plus efficacement.", en: "Nora is the one who works the most efficiently. · Nora 工作效率最高，plus 连读为 /plyz/。" }
    ]
  }
];

const adverbSuperlativeSpecialRows = [
  {
    fr: "bien → mieux → le mieux",
    meaning: "well → better → best · 好 → 更好 → 最好（动作）",
    type: "Quality of an action · 副词 bien",
    note: "<strong>Bien → le mieux</strong> describes how well an action is performed; use le mieux with every subject: elles chantent le mieux. <strong>Bon → le meilleur / la meilleure / les meilleurs / les meilleures</strong> describes a noun’s quality and agrees with it. The minimum form for bien is <strong>le moins bien</strong>.",
    examples: [
      { subject: "Action · le mieux", fr: "Elles chantent le mieux du groupe.", en: "They sing the best in the group. · 她们在组里唱得最好。" },
      { subject: "Noun · la meilleure", fr: "Nora est la meilleure chanteuse du groupe.", en: "Nora is the best singer in the group. · Nora 是组里最好的歌手。" },
      { subject: "Minimum · le moins bien", fr: "C’est dans le bruit que je travaille le moins bien.", en: "I work least well when it is noisy. · 环境吵闹时，我的工作表现最差。" }
    ]
  },
  {
    fr: "beaucoup → le plus · beaucoup de → le plus de",
    meaning: "a lot → the most · 很多 → 最多",
    type: "Amount · 数量重点",
    note: "Remember <strong>beaucoup → plus → le plus</strong>, with the pronounced s in standalone <strong>le plus /lə plys/</strong>. For a noun: <strong>beaucoup de → le plus de + 无冠词名词</strong>. This ranks quantity; le mieux ranks the quality of the action. Someone can read le plus without reading le mieux.",
    examples: [
      { subject: "Action quantity · pronounced s", fr: "Inès travaille beaucoup ; c’est elle qui travaille le plus.", en: "Inès works a lot; she is the one who works the most. · Inès 工作很多；她工作量最大。" },
      { subject: "Noun quantity · 无冠词", fr: "Cette bibliothèque a le plus de livres du quartier.", en: "This library has the most books in the neighborhood. · 这家图书馆是社区里藏书最多的。" },
      { subject: "de → d’", fr: "C’est elle qui boit le plus d’eau.", en: "She is the one who drinks the most water. · 她喝水最多。" }
    ]
  },
  {
    fr: "peu → moins → le moins · peu de → le moins de",
    meaning: "little → less → least; fewest · 少 → 更少 → 最少",
    type: "Smallest amount · 数量最少",
    note: "<strong>Peu → le moins</strong> ranks the smallest amount of an action. With a noun, use <strong>le moins de + 无冠词名词</strong> for both countable and uncountable quantities: le moins de problèmes, le moins de sucre. Keep le fixed; <strong>petit / petite</strong> describes size and belongs to adjective superlatives.",
    examples: [
      { subject: "Action quantity", fr: "De tous les voisins, Hugo sort le moins.", en: "Of all the neighbors, Hugo goes out the least. · 在所有邻居中，Hugo 出门最少。" },
      { subject: "Uncountable quantity", fr: "Ce dessert contient le moins de sucre.", en: "This dessert contains the least sugar. · 这款甜点含糖最少。" },
      { subject: "Countable quantity", fr: "Cette méthode pose le moins de problèmes.", en: "This method causes the fewest problems. · 这种方法产生的问题最少。" }
    ]
  },
  {
    fr: "mal → plus mal → le plus mal",
    meaning: "badly → worse → worst · 差 → 更差 → 最差（动作）",
    type: "Quality of an action · 副词 mal",
    note: "For an action performed badly, the everyday form is <strong>le plus mal</strong>. <strong>Pis</strong> is a literary comparative of mal and survives in set phrases such as tant pis. For a noun, <strong>mauvais → le pire / la pire</strong> or le plus mauvais / la plus mauvaise describes its quality and agrees with it.",
    examples: [
      { subject: "Action · le plus mal", fr: "De nous tous, je dors le plus mal.", en: "Of all of us, I sleep the worst. · 我是我们当中睡得最差的。" },
      { subject: "Action vs noun", fr: "Ce micro fonctionne le plus mal ; c’est le pire micro du studio.", en: "This microphone works the worst; it is the worst microphone in the studio. · 这个麦克风运行状况最差；它是录音室里最差的麦克风。" }
    ]
  }
];

const adverbSuperlativeEmphasisRows = [
  {
    fr: "de / du / des… · De tous / toutes…",
    meaning: "in / of the group; of all… · 比较范围与句首强调",
    type: "Reference group · 在……当中",
    note: "Use <strong>de + group</strong> to name the comparison set: de la classe, <strong>du = de + le</strong> groupe, <strong>des = de + les</strong> trois. Fronting <strong>De tous / De toutes…</strong> brings the group into focus. The group’s article stays; this de names a group, while le plus de livres uses de for quantity.",
    examples: [
      { subject: "de la / du", fr: "Léa parle le plus clairement de la classe, et Paul le plus calmement du groupe.", en: "Léa speaks the most clearly in the class, and Paul the most calmly in the group. · Léa 在班里说得最清楚，Paul 在组里说得最平静。" },
      { subject: "des = de + les", fr: "Des trois, Inès parle le moins vite.", en: "Of the three, Inès speaks the least quickly. · 三人中，Inès 说话最慢。" },
      { subject: "Fronted group · 句首强调", fr: "De toutes mes amies, Léa parle le mieux français.", en: "Of all my friends, Léa speaks French the best. · 在我所有女性朋友中，Léa 法语说得最好。" }
    ]
  },
  {
    fr: "C’est… qui… · Ce sont… qui… · de loin",
    meaning: "it is … who…; by far · 主语强调；远远最……",
    type: "Emphasis · 强调谁最……",
    note: "<strong>C’est + subject + qui + verb</strong> highlights who or what performs the action. With plural nouns or names, use <strong>Ce sont + plural subject + qui + plural verb</strong> in careful French. The verb after qui agrees with the highlighted subject: c’est moi qui parle, c’est toi qui parles. Add <strong>de loin</strong> for by far, before the superlative; the adverbial article le stays fixed.",
    examples: [
      { subject: "Singular · by far", fr: "C’est Léa qui travaille de loin le plus.", en: "Léa is the one who works by far the most. · Léa 的工作量远远最大。" },
      { subject: "Plural · qui chantent", fr: "Ce sont Léa et Inès qui chantent le mieux.", en: "Léa and Inès are the ones who sing the best. · Léa 和 Inès 唱得最好。" },
      { subject: "Moi · qui parle", fr: "C’est moi qui parle le moins dans ce groupe.", en: "I am the one who speaks the least in this group. · 我是这个组里说话最少的人。" }
    ]
  },
  {
    fr: "le plus… et le plus… · le mieux… et le plus de…",
    meaning: "several superlatives in one sentence · 一句中多个最高级",
    type: "Repeat each superlative · 每个维度单独表达",
    note: "For two adverbs, <strong>repeat le plus / le moins / le mieux</strong> before each one. Each superlative ranks its own quality or quantity. An action can be done <strong>le mieux</strong> while producing <strong>le plus de + 无冠词名词</strong>; the two expressions measure different things.",
    examples: [
      { subject: "Two adverbs", fr: "Léa parle le plus clairement et le plus calmement du groupe.", en: "Léa speaks the most clearly and the most calmly in the group. · Léa 在组里说话最清楚、最平静。" },
      { subject: "Quality + quantity", fr: "De toute l’équipe, Inès cuisine le mieux et prépare le plus de repas.", en: "Of the whole team, Inès cooks the best and prepares the most meals. · 全队中，Inès 做饭最好，准备的餐食也最多。" },
      { subject: "Two minimums", fr: "Hugo parle le moins fort et intervient le moins souvent du groupe.", en: "Hugo speaks the least loudly and contributes the least often in the group. · Hugo 在组里说话声音最小，发言也最少。" }
    ]
  }
];
