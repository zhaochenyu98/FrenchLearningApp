// Usage references:
// https://vitrinelinguistique.oqlf.gouv.qc.ca/22465/la-syntaxe/la-comparaison/accord-de-le-dans-les-comparaisons-avec-le-plus-le-mieux-le-moins
// https://vitrinelinguistique.oqlf.gouv.qc.ca/23432/la-grammaire/ladjectif/accord-de-ladjectif/cas-particuliers-daccord-de-ladjectif/accord-de-ladjectif-moindre
// https://vitrinelinguistique.oqlf.gouv.qc.ca/22296/la-syntaxe/la-comparaison/emplois-de-ladjectif-pire
// https://research.jyu.fi/grfle/superlatif.html
// https://vitrinelinguistique.oqlf.gouv.qc.ca/21561/la-grammaire/ladjectif/accord-de-ladjectif/cas-particuliers-daccord-de-ladjectif/accord-de-ladjectif-possible

const adjectiveSuperlativeRules = [
  {
    fr: "le / la / les + plus / moins + adjectif",
    meaning: "最…… / 最不…… · the most / least …",
    type: "Compare different people or things",
    note: "The article and adjective agree with the noun: <strong>le plus grand, la plus grande, les plus grands, les plus grandes</strong>. Keep the adjective’s usual position. Before the noun: la plus grande maison. After the noun: la maison la plus chère — repeat the article after the noun. Use de to identify the comparison group.",
    examples: [
      { subject: "Before the noun", fr: "C’est la plus grande maison du village.", en: "It is the biggest house in the village." },
      { subject: "After the noun", fr: "Ce sont les maisons les moins chères du village.", en: "They are the least expensive houses in the village." },
      { subject: "After être", fr: "Léa est la plus jeune de la classe.", en: "Léa is the youngest in the class." }
    ]
  },
  {
    fr: "le / la + plus / moins + adjectif + possible",
    meaning: "as … as possible · 尽可能……",
    type: "The greatest or smallest achievable degree",
    note: "<strong>Le / la plus… possible</strong> expresses the greatest achievable degree; <strong>le / la moins… possible</strong> expresses the smallest. Keep normal adjective agreement and position. Another way to express the same goal is <strong>aussi + adjectif + que possible</strong>. Use que in the aussi pattern; put possible directly after the superlative pattern. The nouns in these examples are singular, so possible is singular too.",
    examples: [
      { subject: "Before the noun", fr: "Je cherche la plus grande chambre possible.", en: "I am looking for as large a room as possible. · 我想找一间尽可能大的房间。" },
      { subject: "Aussi… que possible", fr: "Je cherche une chambre aussi grande que possible.", en: "I am looking for a room as large as possible. · 我想找一间尽可能大的房间。" },
      { subject: "After the noun", fr: "Choisissez la solution la plus simple possible.", en: "Choose a solution as simple as possible. · 选择尽可能简单的方案。" },
      { subject: "Le moins", fr: "Je cherche une chambre la moins chère possible.", en: "I am looking for a room as inexpensive as possible. · 我想找一间尽可能便宜的房间。" }
    ]
  },
  {
    fr: "la plus heureuse / le plus heureuse",
    meaning: "最开心的人 / 她最开心的时候",
    type: "Different people vs one person at different times",
    note: "When comparing several people, the article agrees: <strong>la plus heureuse du groupe</strong>. In careful French, when comparing different states of the same person, keep <strong>le</strong>: elle est le plus heureuse quand… The adjective still agrees with that person. Très heureuse means very happy without ranking a group.",
    examples: [
      { subject: "Among people", fr: "Elle est la plus heureuse du groupe.", en: "She is the happiest person in the group." },
      { subject: "Her happiest moments", fr: "Elle est le plus heureuse quand elle chante.", en: "She is happiest when she sings." }
    ]
  }
];

const adjectiveSuperlativeSpecialRows = [
  {
    fr: "grand / grande → le plus grand / la plus grande",
    meaning: "最大 / 最高 · biggest / tallest",
    type: "Regular form · grand is still grand",
    note: "<strong>Grand / grande has a regular superlative</strong>. Use plus grand for size or height; the meaning can also be greatest in context. Majeur expresses importance or status; it is not the ordinary superlative form of grand. Le moins grand means least big / tall; le plus petit is the usual way to say smallest.",
    examples: [
      { fr: "C’est la plus grande salle de l’école.", en: "It is the largest room in the school." },
      { fr: "Paul est le plus grand des trois garçons.", en: "Paul is the tallest of the three boys." }
    ]
  },
  {
    fr: "petit / petite → le plus petit / la plus petite; le / la moindre",
    meaning: "最小 / 最微小 · smallest / slightest",
    type: "Physical size vs importance or intensity",
    note: "For physical size, use <strong>le plus petit / la plus petite</strong>. For the slightest amount, importance, or intensity, use <strong>le moindre / la moindre / les moindres</strong>. Moindre already contains the comparison, so do not add plus. It does not have a separate feminine spelling.",
    examples: [
      { subject: "Physical size", fr: "C’est la plus petite valise du magasin.", en: "It is the smallest suitcase in the shop." },
      { subject: "Slightest", fr: "Le moindre bruit la réveille.", en: "The slightest noise wakes her up." },
      { subject: "Abstract noun", fr: "Choisissons la solution qui présente le moindre risque.", en: "Let’s choose the solution that poses the least risk." }
    ]
  },
  {
    fr: "bon / bonne → le meilleur / la meilleure",
    meaning: "最好 · best quality",
    type: "Irregular · meilleur agrees",
    note: "Use <strong>le meilleur, la meilleure, les meilleurs, les meilleures</strong> for the best quality; do not add plus. With a lower degree, keep <strong>le / la / les moins bon(ne)(s)</strong>. Distinguish adjective <strong>la meilleure chanteuse</strong> from adverb <strong>elle chante le mieux</strong>.",
    examples: [
      { fr: "C’est la meilleure idée du groupe.", en: "It is the best idea in the group." },
      { fr: "Ce sont les meilleurs livres de cette collection.", en: "They are the best books in this collection." }
    ]
  },
  {
    fr: "mauvais / mauvaise → le pire / la pire; le plus mauvais",
    meaning: "最差 / 最坏 · worst",
    type: "Pire or plus mauvais, depending on context",
    note: "Worst can be <strong>le pire / la pire / les pires</strong> or <strong>le plus mauvais / la plus mauvaise</strong>. Pire is especially natural for harmful situations and consequences; the forms are not interchangeable in every expression. For least bad, use <strong>le moins mauvais / la moins mauvaise</strong>.",
    examples: [
      { fr: "C’est la pire solution de toutes.", en: "It is the worst solution of all." },
      { fr: "C’est le plus mauvais café du quartier.", en: "It is the worst coffee in the neighborhood." },
      { fr: "C’est la moins mauvaise des deux solutions.", en: "It is the least bad of the two solutions." }
    ]
  },
  {
    fr: "beau / belle → le plus beau / la plus belle",
    meaning: "最美 · most beautiful",
    type: "Regular comparison; bel before a vowel noun",
    note: "The superlative is regular: <strong>le plus beau / la plus belle / les plus beaux / les plus belles</strong>. Before a masculine singular noun starting with a vowel sound or mute h, use <strong>bel</strong>: le plus bel endroit. Compare this with bien → le mieux, which describes how an action is done.",
    examples: [
      { fr: "C’est la plus belle maison de la rue.", en: "It is the most beautiful house on the street." },
      { fr: "C’est le plus bel endroit du village.", en: "It is the most beautiful place in the village." }
    ]
  }
];

const adjectiveSuperlativePlacementRows = [
  {
    fr: "le plus grand et le plus beau + nom",
    meaning: "两个最高级都在名词前",
    type: "Both before the noun",
    note: "With two separate rankings, repeat the <strong>article + plus / moins</strong> for each adjective. Both adjectives describe the same noun here; normal agreement applies to each. Grand and beau can both go before the noun.",
    examples: [
      { fr: "C’est le plus grand et le plus beau jardin du village.", en: "It is the biggest and most beautiful garden in the village." },
      { fr: "C’est la plus petite et la plus jolie maison de la rue.", en: "It is the smallest and prettiest house on the street." }
    ]
  },
  {
    fr: "nom + la plus rapide et la plus confortable",
    meaning: "两个最高级都在名词后",
    type: "Both after the noun",
    note: "Keep the noun’s own article, then repeat <strong>la plus</strong> or the matching le / les before each adjective. The two rankings may also differ: la plus rapide et la moins chère.",
    examples: [
      { fr: "C’est la voiture la plus rapide et la plus confortable du garage.", en: "It is the fastest and most comfortable car in the garage." },
      { fr: "Ce sont les exercices les plus courts et les plus faciles du livre.", en: "They are the shortest and easiest exercises in the book." }
    ]
  },
  {
    fr: "la plus grande + nom + et la plus lumineuse",
    meaning: "一个在名词前，一个在名词后",
    type: "One on each side of the noun",
    note: "The first superlative comes before the noun; the second follows it, linked by <strong>et</strong>. Both describe the same thing, and the noun is understood with the second superlative. Keep each superlative’s article. You can also put both after être: cette salle est la plus grande et la plus lumineuse.",
    examples: [
      { fr: "C’est la plus grande salle et la plus lumineuse de l’école.", en: "It is the largest and brightest room in the school." },
      { fr: "C’est la plus petite maison et la moins chère du quartier.", en: "It is the smallest and least expensive house in the neighborhood." }
    ]
  }
];

const adjectiveSuperlativeEmphasisRows = [
  {
    fr: "de… / de tous… / de toutes…",
    meaning: "比较范围 / 把范围提前强调",
    type: "Name the group; put it first for emphasis",
    note: "Use <strong>de</strong> for the reference group: de la classe, du village, des trois maisons. De + le → du; de + les → des. To put the group first, use <strong>De toutes ces maisons, …</strong>. This des marks the reference group; it is different from a quantity phrase such as le plus de maisons.",
    examples: [
      { subject: "Group at the end", fr: "Cette maison est la plus grande du village.", en: "This house is the biggest in the village." },
      { subject: "Group first", fr: "De toutes ces maisons, celle-ci est la plus grande.", en: "Of all these houses, this one is the biggest." }
    ]
  },
  {
    fr: "c’est… qui… / ce sont… qui…",
    meaning: "强调“谁 / 哪一个”",
    type: "Highlight the subject",
    note: "Put the person or thing being emphasized between <strong>c’est</strong> and <strong>qui</strong>. Qui introduces the clause where that person or thing is the subject. With a plural noun, use <strong>ce sont… qui…</strong> in careful French and agree the following verb; the adjective superlative agrees too.",
    examples: [
      { fr: "De toutes ces maisons, c’est celle-ci qui est la plus grande.", en: "Of all these houses, this one is the biggest." },
      { fr: "Ce sont ces deux chambres qui sont les plus petites de l’hôtel.", en: "These two rooms are the smallest in the hotel." },
      { fr: "C’est moi qui suis le plus grand du groupe.", en: "I am the tallest in the group." }
    ]
  },
  {
    fr: "de loin / de beaucoup + superlatif",
    meaning: "遥遥领先 / 差距很大 · by far",
    type: "Emphasize the size of the difference",
    note: "<strong>De loin</strong> and <strong>de beaucoup</strong> mean by far: they strengthen the ranking. Keep agreement with the noun: de loin la plus grande, de loin les meilleurs. You can combine them with a fronted group and c’est… qui…. The comparison group can be understood from context.",
    examples: [
      { fr: "Cette maison est de loin la plus grande du village.", en: "This house is by far the biggest in the village." },
      { fr: "De toutes ces maisons, c’est celle-ci qui est de loin la plus grande.", en: "Of all these houses, this one is by far the biggest." },
      { fr: "Elle est de beaucoup la meilleure candidate.", en: "She is by far the best candidate." }
    ]
  }
];
