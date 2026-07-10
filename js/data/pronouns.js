    const tonicPronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "moi", ipa: "/mwa/", en: "me / myself", example: "C’est moi.", exampleEn: "It’s me." }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", ipa: "/nu/", en: "us / ourselves", example: "C’est nous.", exampleEn: "It’s us." }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "toi", ipa: "/twa/", en: "you / yourself", example: "Et toi ?", exampleEn: "And you?" }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", ipa: "/vu/", en: "you / yourselves", example: "Je pense à vous.", exampleEn: "I am thinking of you." }]
      },
      {
        singularZh: "他 / 她",
        singularForms: [
          { fr: "lui", ipa: "/lɥi/", en: "him / himself", example: "Je parle avec lui.", exampleEn: "I am speaking with him." },
          { fr: "elle", ipa: "/ɛl/", en: "her / herself", example: "Je vais avec elle.", exampleEn: "I am going with her." }
        ],
        pluralZh: "他们 / 她们",
        pluralForms: [
          { fr: "eux", ipa: "/ø/", en: "them / themselves (masculine or mixed)", example: "C’est pour eux.", exampleEn: "It’s for them." },
          { fr: "elles", ipa: "/ɛl/", en: "them / themselves (feminine)", example: "Je parle avec elles.", exampleEn: "I am speaking with them." }
        ]
      }
    ];
    const reflexivePronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "me / m’", speech: "me", ipa: "/mə/", en: "myself", example: "Je me lave les mains.", exampleEn: "I wash my hands." }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", ipa: "/nu/", en: "ourselves", example: "Nous nous levons ensemble.", exampleEn: "We get up together." }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "te / t’", speech: "te", ipa: "/tə/", en: "yourself", example: "Tu te lèves tôt.", exampleEn: "You get up early." }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", ipa: "/vu/", en: "yourselves", example: "Vous vous habillez vite.", exampleEn: "You get dressed quickly." }]
      },
      {
        singularZh: "他 / 她",
        singularForms: [{ fr: "se / s’", speech: "se", ipa: "/sə/", en: "himself / herself", example: "Il se repose l’après-midi.", exampleEn: "He rests in the afternoon." }],
        pluralZh: "他们 / 她们",
        pluralForms: [{ fr: "se / s’", speech: "se", ipa: "/sə/", en: "themselves", example: "Elles se reposent après le cours.", exampleEn: "They rest after class." }]
      }
    ];

    const coiPronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "me / m’", speech: "me", ipa: "/mə/", en: "to me / for me", example: "Elle me parle.", exampleEn: "She speaks to me." }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", ipa: "/nu/", en: "to us / for us", example: "Elle nous parle.", exampleEn: "She speaks to us." }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "te / t’", speech: "te", ipa: "/tə/", en: "to you / for you", example: "Je te téléphone.", exampleEn: "I call you." }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", ipa: "/vu/", en: "to you / for you", example: "Je vous téléphone demain.", exampleEn: "I will call you tomorrow." }]
      },
      {
        singularZh: "他 / 她",
        singularForms: [{ fr: "lui", ipa: "/lɥi/", en: "to him / to her; for him / for her", example: "Je lui réponds.", exampleEn: "I answer him / her." }],
        pluralZh: "他们 / 她们",
        pluralForms: [{ fr: "leur", ipa: "/lœʁ/", en: "to them / for them", example: "Je leur donne les clés.", exampleEn: "I give them the keys." }]
      }
    ];

    const codPronounRows = [
      {
        singularZh: "我",
        singularForms: [{ fr: "me / m’", speech: "me", ipa: "/mə/", en: "me", example: "Il me voit.", exampleEn: "He sees me." }],
        pluralZh: "我们",
        pluralForms: [{ fr: "nous", ipa: "/nu/", en: "us", example: "Elle nous aide.", exampleEn: "She helps us." }]
      },
      {
        singularZh: "你",
        singularForms: [{ fr: "te / t’", speech: "te", ipa: "/tə/", en: "you", example: "Je te regarde.", exampleEn: "I look at you." }],
        pluralZh: "你们",
        pluralForms: [{ fr: "vous", ipa: "/vu/", en: "you", example: "Je vous invite.", exampleEn: "I invite you." }]
      },
      {
        singularZh: "他 / 她 / 它",
        singularForms: [
          { fr: "le / l’", speech: "le", ipa: "/lə/", en: "him / it masculine", example: "Je le vois.", exampleEn: "I see him / it." },
          { fr: "la / l’", speech: "la", ipa: "/la/", en: "her / it feminine", example: "Je la regarde.", exampleEn: "I look at her / it." }
        ],
        pluralZh: "他们 / 她们 / 它们",
        pluralForms: [{ fr: "les", ipa: "/le/", en: "them", example: "Je les attends.", exampleEn: "I am waiting for them." }]
      }
    ];

    const codTriggerRules = [
      {
        title: "Direct object person",
        pattern: "When the verb acts directly on a person with no à or de, use me / te / le / la / nous / vous / les.",
        examples: [
          { from: "Je vois Marie.", to: "Je la vois.", en: "I see Marie. → I see her." },
          { from: "Il invite Paul.", to: "Il l’invite.", en: "He invites Paul. → He invites him." },
          { from: "Nous aidons nos amis.", to: "Nous les aidons.", en: "We help our friends. → We help them." }
        ]
      },
      {
        title: "Direct object thing",
        pattern: "When a specific thing directly receives the action, replace it with le / la / l’ / les.",
        examples: [
          { from: "Tu lis le message.", to: "Tu le lis.", en: "You read the message. → You read it." },
          { from: "Elle regarde la photo.", to: "Elle la regarde.", en: "She looks at the photo. → She looks at it." },
          { from: "Je prends les clés.", to: "Je les prends.", en: "I take the keys. → I take them." }
        ]
      },
      {
        title: "French direct-object verbs",
        pattern: "Some verbs that feel like they need a preposition in English are direct in French, so they trigger COD.",
        examples: [
          { from: "J’attends le bus.", to: "Je l’attends.", en: "I wait for the bus. → I wait for it." },
          { from: "Tu écoutes ta sœur.", to: "Tu l’écoutes.", en: "You listen to your sister. → You listen to her." },
          { from: "Il regarde le professeur.", to: "Il le regarde.", en: "He looks at the teacher. → He looks at him." }
        ]
      }
    ];

    const codAvoidRules = [
      {
        title: "à + person usually becomes COI",
        pattern: "If the verb points to a person through à, use COI me / te / lui / nous / vous / leur, not COD le / la / les.",
        examples: [
          { from: "Je parle à Marie.", to: "Je lui parle.", avoid: "Not: Je la parle.", en: "I speak to Marie. → I speak to her." },
          { from: "Tu téléphones à Paul.", to: "Tu lui téléphones.", avoid: "Not: Tu le téléphones.", en: "You call Paul. → You call him." },
          { from: "Nous répondons aux enfants.", to: "Nous leur répondons.", avoid: "Not: Nous les répondons.", en: "We answer the children. → We answer them." }
        ]
      },
      {
        title: "de + thing often becomes en",
        pattern: "For de + thing, quantity, or partitive idea, use en rather than COD.",
        examples: [
          { from: "Je parle de ce film.", to: "J’en parle.", avoid: "Not: Je le parle.", en: "I talk about this movie. → I talk about it." },
          { from: "Elle boit de l’eau.", to: "Elle en boit.", avoid: "Not: Elle la boit.", en: "She drinks water. → She drinks some." },
          { from: "Tu as besoin de ce livre.", to: "Tu en as besoin.", avoid: "Not: Tu l’as besoin.", en: "You need this book. → You need it." }
        ]
      },
      {
        title: "After most prepositions, use tonic pronouns",
        pattern: "After avec, chez, pour, sans, devant, and many other prepositions, keep the preposition and use a tonic pronoun.",
        examples: [
          { from: "Je vais avec Paul.", to: "Je vais avec lui.", avoid: "Not: Je le vais avec.", en: "I go with Paul. → I go with him." },
          { from: "Elle est chez Marie.", to: "Elle est chez elle.", avoid: "Not: Elle la est.", en: "She is at Marie’s place. → She is at her place." },
          { from: "Ce cadeau est pour toi.", to: "Ce cadeau est pour toi.", avoid: "Not: Ce cadeau te est.", en: "This gift is for you." }
        ]
      },
      {
        title: "Reflexive or no-object action is not COD",
        pattern: "When the subject acts on itself, use reflexive pronouns; when the verb has no direct object, there is no COD to replace.",
        examples: [
          { from: "Je lave mes mains.", to: "Je me lave les mains.", avoid: "Usually not: Je les lave, unless les is already clear from context.", en: "I wash my hands." },
          { from: "Elle met ses vêtements.", to: "Elle s’habille.", avoid: "Elle l’habille means she dresses someone else.", en: "She gets dressed." },
          { from: "Ils se reposent après le cours.", result: "No COD; se belongs to the pronominal verb.", avoid: "Not: Ils les reposent.", en: "They rest after class." }
        ]
      }
    ];

    const codPatternRows = [
      {
        title: "1. Statement",
        placement: "Before the conjugated verb.",
        note: "In a normal sentence, the COD pronoun goes directly before the verb it belongs to.",
        examples: [
          {
            meaning: "see him / it",
            statement: { fr: "Je le vois.", en: "I see him / it." },
            negative: { fr: "Je ne le vois pas.", en: "I do not see him / it." },
            question: { fr: "Le vois-tu ?", en: "Do you see him / it?" }
          },
          {
            meaning: "help us",
            statement: { fr: "Elle nous aide.", en: "She helps us." },
            negative: { fr: "Elle ne nous aide pas.", en: "She does not help us." },
            question: { fr: "Est-ce qu’elle nous aide ?", en: "Does she help us?" }
          },
          {
            meaning: "wait for them",
            statement: { fr: "Nous les attendons.", en: "We wait for them." },
            negative: { fr: "Nous ne les attendons pas.", en: "We do not wait for them." },
            question: { fr: "Les attendons-nous ?", en: "Are we waiting for them?" }
          }
        ]
      },
      {
        title: "2. Imperative",
        placement: "Affirmative command: after the verb with a hyphen. Negative command: before the verb.",
        note: "Special case: me / te become moi / toi in affirmative commands, but return to me / te in negative commands.",
        labels: {
          statement: "Affirmative command",
          negative: "Negative command",
          question: "Question / request"
        },
        examples: [
          {
            meaning: "look at me",
            statement: { fr: "Regarde-moi.", en: "Look at me." },
            negative: { fr: "Ne me regarde pas.", en: "Do not look at me." },
            question: { fr: "Peux-tu me regarder ?", en: "Can you look at me?" }
          },
          {
            meaning: "wait for her",
            statement: { fr: "Attends-la.", en: "Wait for her." },
            negative: { fr: "Ne l’attends pas.", en: "Do not wait for her." },
            question: { fr: "Peux-tu l’attendre ?", en: "Can you wait for her?" }
          },
          {
            meaning: "help them",
            statement: { fr: "Aidez-les.", en: "Help them." },
            negative: { fr: "Ne les aidez pas.", en: "Do not help them." },
            question: { fr: "Pouvez-vous les aider ?", en: "Can you help them?" }
          }
        ]
      },
      {
        title: "3. Verb + infinitive",
        placement: "Before the infinitive, not before the conjugated helper verb.",
        note: "With aller + infinitive, pouvoir + infinitive, il faut + infinitive, etc., place COD before the infinitive.",
        examples: [
          {
            meaning: "going to watch it",
            statement: { fr: "Je vais le regarder.", en: "I am going to watch it." },
            negative: { fr: "Je ne vais pas le regarder.", en: "I am not going to watch it." },
            question: { fr: "Vas-tu le regarder ?", en: "Are you going to watch it?" }
          },
          {
            meaning: "can help me",
            statement: { fr: "Tu peux m’aider.", en: "You can help me." },
            negative: { fr: "Tu ne peux pas m’aider.", en: "You cannot help me." },
            question: { fr: "Peux-tu m’aider ?", en: "Can you help me?" }
          },
          {
            meaning: "must invite them",
            statement: { fr: "Il faut les inviter.", en: "We need to invite them." },
            negative: { fr: "Il ne faut pas les inviter.", en: "We must not invite them." },
            question: { fr: "Faut-il les inviter ?", en: "Do we need to invite them?" }
          }
        ]
      },
      {
        title: "4. Passé composé",
        placement: "Before the auxiliary verb.",
        note: "COD comes before avoir / être in passé composé. When the COD comes before the auxiliary, the past participle agrees with that COD.",
        examples: [
          {
            meaning: "saw her",
            statement: { fr: "Je l’ai vue.", en: "I saw her." },
            negative: { fr: "Je ne l’ai pas vue.", en: "I did not see her." },
            question: { fr: "L’ai-je vue ?", en: "Did I see her?" }
          },
          {
            meaning: "invited them",
            statement: { fr: "Nous les avons invités.", en: "We invited them." },
            negative: { fr: "Nous ne les avons pas invités.", en: "We did not invite them." },
            question: { fr: "Les avons-nous invités ?", en: "Did we invite them?" }
          },
          {
            meaning: "helped us",
            statement: { fr: "Elle nous a aidés.", en: "She helped us." },
            negative: { fr: "Elle ne nous a pas aidés.", en: "She did not help us." },
            question: { fr: "Nous a-t-elle aidés ?", en: "Did she help us?" }
          }
        ]
      }
    ];

    const coiTriggerRules = [
      {
        title: "à + person after verbs like parler",
        pattern: "When the verb asks “to whom?” and the answer is a person, replace à + person with me / te / lui / nous / vous / leur.",
        examples: [
          { from: "Je parle à Marie.", to: "Je lui parle.", en: "I speak to Marie. → I speak to her." },
          { from: "Tu téléphones à Paul.", to: "Tu lui téléphones.", en: "You call Paul. → You call him." },
          { from: "Nous répondons aux enfants.", to: "Nous leur répondons.", en: "We answer the children. → We answer them." }
        ]
      },
      {
        title: "Giving / sending / showing something à + person",
        pattern: "The person who receives the thing is COI. The thing itself stays as the direct object.",
        examples: [
          { from: "Elle donne le livre à son ami.", to: "Elle lui donne le livre.", en: "She gives the book to her friend. → She gives him the book." },
          { from: "J’envoie un message à mes parents.", to: "Je leur envoie un message.", en: "I send a message to my parents. → I send them a message." },
          { from: "Nous montrons la photo à Julie.", to: "Nous lui montrons la photo.", en: "We show the photo to Julie. → We show her the photo." }
        ]
      },
      {
        title: "Request / loan / explain à + person",
        pattern: "Verbs such as demander, prêter, expliquer, and raconter often put the person in COI position.",
        examples: [
          { from: "Il demande l’adresse à la serveuse.", to: "Il lui demande l’adresse.", en: "He asks the waitress for the address. → He asks her for the address." },
          { from: "Je prête mon stylo à Léa.", to: "Je lui prête mon stylo.", en: "I lend my pen to Léa. → I lend her my pen." },
          { from: "Vous expliquez la règle aux étudiants.", to: "Vous leur expliquez la règle.", en: "You explain the rule to the students. → You explain the rule to them." }
        ]
      },
      {
        title: "pour + person as beneficiary",
        pattern: "When pour + person means “for someone / on someone’s behalf” and the verb allows a beneficiary, COI can replace that person.",
        examples: [
          { from: "Je prépare le dîner pour mes parents.", to: "Je leur prépare le dîner.", en: "I prepare dinner for my parents. → I prepare them dinner." },
          { from: "Elle achète un cadeau pour Paul.", to: "Elle lui achète un cadeau.", en: "She buys a gift for Paul. → She buys him a gift." },
          { from: "Tu fais un café pour moi.", to: "Tu me fais un café.", en: "You make coffee for me. → You make me coffee." }
        ]
      }
    ];

    const coiAvoidRules = [
      {
        title: "Direct object, not indirect object",
        pattern: "If the person directly receives the action with no à/pour pattern, use COD pronouns le / la / les instead.",
        examples: [
          { from: "Je vois Marie.", to: "Je la vois.", avoid: "Not: Je lui vois.", en: "I see Marie. → I see her." },
          { from: "Il invite Paul.", to: "Il l’invite.", avoid: "Not: Il lui invite.", en: "He invites Paul. → He invites him." },
          { from: "Nous attendons nos amis.", to: "Nous les attendons.", avoid: "Not: Nous leur attendons.", en: "We wait for our friends. → We wait for them." }
        ]
      },
      {
        title: "French direct-object verbs that mislead English learners",
        pattern: "Some verbs that feel indirect in English are direct in French. Learn the French verb pattern first.",
        examples: [
          { from: "J’aide Paul.", to: "Je l’aide.", avoid: "Not: Je lui aide.", en: "I help Paul. → I help him." },
          { from: "Elle écoute son professeur.", to: "Elle l’écoute.", avoid: "Not: Elle lui écoute.", en: "She listens to her teacher. → She listens to him / her." },
          { from: "Tu regardes ta sœur.", to: "Tu la regardes.", avoid: "Not: Tu lui regardes.", en: "You look at your sister. → You look at her." }
        ]
      },
      {
        title: "Intransitive verb: no object to replace",
        pattern: "If the verb has no object or recipient, there is no COI pronoun to insert.",
        examples: [
          { from: "Je dors.", result: "No COI replacement.", avoid: "Not: Je lui dors.", en: "I sleep." },
          { from: "Elle arrive demain.", result: "No COI replacement.", avoid: "Not: Elle lui arrive demain.", en: "She arrives tomorrow." },
          { from: "Nous partons tôt.", result: "No COI replacement.", avoid: "Not: Nous leur partons tôt.", en: "We leave early." }
        ]
      },
      {
        title: "à + place or à + thing: usually y",
        pattern: "COI pronouns are mainly for people. For places, things, and ideas after à, use y.",
        examples: [
          { from: "Je vais à Paris.", to: "J’y vais.", avoid: "Not: Je lui vais.", en: "I am going to Paris. → I am going there." },
          { from: "Je pense à ce problème.", to: "J’y pense.", avoid: "Not: Je lui pense.", en: "I think about this problem. → I think about it." },
          { from: "Elle s’intéresse à ce cours.", to: "Elle s’y intéresse.", avoid: "Not: Elle lui s’intéresse.", en: "She is interested in this class. → She is interested in it." }
        ]
      },
      {
        title: "Some à + person verbs keep tonic pronouns",
        pattern: "With verbs like penser à and tenir à, a person is normally kept as à + tonic pronoun; a thing still becomes y.",
        examples: [
          { from: "Je pense à Marie.", to: "Je pense à elle.", avoid: "Not: Je lui pense.", en: "I think about Marie. → I think about her." },
          { from: "Il tient à ses parents.", to: "Il tient à eux.", avoid: "Not: Il leur tient.", en: "He cares about his parents. → He cares about them." },
          { from: "Nous pensons à toi.", to: "Nous pensons à toi.", avoid: "Not: Nous te pensons.", en: "We are thinking about you." }
        ]
      },
      {
        title: "de + noun/person is not COI",
        pattern: "For de + thing, often use en. For de + person, usually keep de + tonic pronoun.",
        examples: [
          { from: "Je parle de ce film.", to: "J’en parle.", avoid: "Not: Je lui parle.", en: "I talk about this movie. → I talk about it." },
          { from: "Je parle de Marie.", to: "Je parle d’elle.", avoid: "Not: Je lui parle.", en: "I talk about Marie. → I talk about her." },
          { from: "Tu as besoin de ton frère.", to: "Tu as besoin de lui.", avoid: "Not: Tu lui as besoin.", en: "You need your brother. → You need him." }
        ]
      },
      {
        title: "Real prepositional phrases stay after the preposition",
        pattern: "After prepositions such as avec, chez, sans, devant, and many pour phrases, use tonic pronouns instead.",
        examples: [
          { from: "Je viens avec Paul.", to: "Je viens avec lui.", avoid: "Not: Je lui viens.", en: "I come with Paul. → I come with him." },
          { from: "Je suis chez mes amis.", to: "Je suis chez eux.", avoid: "Not: Je leur suis.", en: "I am at my friends’ place. → I am at their place." },
          { from: "Ce cadeau est pour toi.", to: "Ce cadeau est pour toi.", avoid: "Not: Ce cadeau te est.", en: "This gift is for you." }
        ]
      }
    ];

    const coiPatternRows = [
      {
        title: "1. Statement",
        placement: "Before the conjugated verb.",
        note: "In a normal sentence, the COI pronoun goes directly before the verb it belongs to.",
        examples: [
          {
            meaning: "speak to him / her",
            statement: { fr: "Je lui parle.", en: "I speak to him / her." },
            negative: { fr: "Je ne lui parle pas.", en: "I do not speak to him / her." },
            question: { fr: "Est-ce que je lui parle ?", en: "Do I speak to him / her?" }
          },
          {
            meaning: "answer them",
            statement: { fr: "Nous leur répondons.", en: "We answer them." },
            negative: { fr: "Nous ne leur répondons pas.", en: "We do not answer them." },
            question: { fr: "Leur répondons-nous ?", en: "Do we answer them?" }
          },
          {
            meaning: "call me",
            statement: { fr: "Elle me téléphone.", en: "She calls me." },
            negative: { fr: "Elle ne me téléphone pas.", en: "She does not call me." },
            question: { fr: "Est-ce qu’elle me téléphone ?", en: "Does she call me?" }
          }
        ]
      },
      {
        title: "2. Imperative",
        placement: "Affirmative command: after the verb with a hyphen. Negative command: before the verb.",
        note: "Special case: me / te become moi / toi in affirmative commands, but return to me / te in negative commands.",
        labels: {
          statement: "Affirmative command",
          negative: "Negative command",
          question: "Question / request"
        },
        examples: [
          {
            meaning: "talk to me",
            statement: { fr: "Parle-moi.", en: "Talk to me." },
            negative: { fr: "Ne me parle pas.", en: "Do not talk to me." },
            question: { fr: "Peux-tu me parler ?", en: "Can you talk to me?" }
          },
          {
            meaning: "give him / her the book",
            statement: { fr: "Donne-lui le livre.", en: "Give him / her the book." },
            negative: { fr: "Ne lui donne pas le livre.", en: "Do not give him / her the book." },
            question: { fr: "Peux-tu lui donner le livre ?", en: "Can you give him / her the book?" }
          },
          {
            meaning: "answer them",
            statement: { fr: "Répondez-leur.", en: "Answer them." },
            negative: { fr: "Ne leur répondez pas.", en: "Do not answer them." },
            question: { fr: "Pouvez-vous leur répondre ?", en: "Can you answer them?" }
          }
        ]
      },
      {
        title: "3. Verb + infinitive",
        placement: "Before the infinitive, not before the conjugated helper verb.",
        note: "With aller + infinitive, pouvoir + infinitive, il faut + infinitive, etc., place COI before the infinitive.",
        examples: [
          {
            meaning: "going to call him / her",
            statement: { fr: "Je vais lui téléphoner.", en: "I am going to call him / her." },
            negative: { fr: "Je ne vais pas lui téléphoner.", en: "I am not going to call him / her." },
            question: { fr: "Vais-je lui téléphoner ?", en: "Am I going to call him / her?" }
          },
          {
            meaning: "must answer them",
            statement: { fr: "Il faut leur répondre.", en: "We need to answer them." },
            negative: { fr: "Il ne faut pas leur répondre.", en: "We must not answer them." },
            question: { fr: "Faut-il leur répondre ?", en: "Do we need to answer them?" }
          },
          {
            meaning: "can give me your number",
            statement: { fr: "Tu peux me donner ton numéro.", en: "You can give me your number." },
            negative: { fr: "Tu ne peux pas me donner ton numéro.", en: "You cannot give me your number." },
            question: { fr: "Peux-tu me donner ton numéro ?", en: "Can you give me your number?" }
          }
        ]
      },
      {
        title: "4. Passé composé",
        placement: "Before the auxiliary verb.",
        note: "COI comes before avoir / être in passé composé. The past participle does not agree with the COI pronoun.",
        examples: [
          {
            meaning: "spoke to him / her",
            statement: { fr: "Je lui ai parlé.", en: "I spoke to him / her." },
            negative: { fr: "Je ne lui ai pas parlé.", en: "I did not speak to him / her." },
            question: { fr: "Lui ai-je parlé ?", en: "Did I speak to him / her?" }
          },
          {
            meaning: "sent them a message",
            statement: { fr: "Elle leur a envoyé un message.", en: "She sent them a message." },
            negative: { fr: "Elle ne leur a pas envoyé de message.", en: "She did not send them a message." },
            question: { fr: "Leur a-t-elle envoyé un message ?", en: "Did she send them a message?" }
          },
          {
            meaning: "answered him / her",
            statement: { fr: "Nous lui avons répondu.", en: "We answered him / her." },
            negative: { fr: "Nous ne lui avons pas répondu.", en: "We did not answer him / her." },
            question: { fr: "Lui avons-nous répondu ?", en: "Did we answer him / her?" }
          }
        ]
      }
    ];

    const tonicPronounUsageRules = [
      {
        rule: "用在 c’est / ce sont 后",
        pattern: "Use tonic pronouns after c’est / ce sont, especially when answering “who?”",
        examples: [
          {
            lines: [
              { fr: "Qui est-ce ?", en: "Who is it?" },
              { fr: "C’est moi.", en: "It’s me." }
            ]
          },
          {
            lines: [
              { fr: "Ce sont eux.", en: "It’s them." }
            ]
          },
          {
            lines: [
              { fr: "Qui est à la porte ?", en: "Who is at the door?" },
              { fr: "C’est nous.", en: "It’s us." }
            ]
          },
          {
            lines: [
              { fr: "Est-ce que c’est toi sur la photo ?", en: "Is that you in the photo?" }
            ]
          },
          {
            lines: [
              { fr: "Ce sont elles, mes amies.", en: "It’s them, my friends." }
            ]
          }
        ]
      },
      {
        rule: "用在没有谓语的省略句中",
        pattern: "Use them when the pronoun stands alone in a short answer or elliptical sentence.",
        examples: [
          {
            lines: [
              { fr: "Je vais à l’école.", en: "I am going to school." },
              { fr: "Moi aussi.", en: "Me too." }
            ]
          },
          {
            lines: [
              { fr: "Il est japonais, et vous ?", en: "He is Japanese, and you?" }
            ]
          },
          {
            lines: [
              { fr: "Est-ce que tu viens avec nous ?", en: "Are you coming with us?" },
              { fr: "Oui, moi aussi.", en: "Yes, me too." }
            ]
          },
          {
            lines: [
              { fr: "Moi, non.", en: "Me, no." }
            ]
          },
          {
            lines: [
              { fr: "Et toi ?", en: "And you?" }
            ]
          }
        ]
      },
      {
        rule: "强调另一个人称代词",
        pattern: "Place the tonic pronoun before a subject pronoun to emphasize or contrast people.",
        examples: [
          {
            lines: [
              { fr: "Moi, je suis chinois.", en: "Me, I am Chinese." }
            ]
          },
          {
            lines: [
              { fr: "Il est français, mais elle, elle est italienne.", en: "He is French, but she is Italian." }
            ]
          },
          {
            lines: [
              { fr: "Toi, tu parles français.", en: "You, you speak French." }
            ]
          },
          {
            lines: [
              { fr: "Nous, nous habitons ici.", en: "We live here." }
            ]
          },
          {
            lines: [
              { fr: "Eux, ils vont au marché.", en: "They are going to the market." }
            ]
          }
        ]
      },
      {
        rule: "用在介词之后",
        pattern: "Use them after prepositions like avec, pour, chez, and à. For parler à, lui / leur is common too; à elle / à elles adds emphasis.",
        examples: [
          {
            lines: [
              { fr: "Est-ce qu’ils vont avec nous ?", en: "Are they going with us?" }
            ]
          },
          {
            lines: [
              { fr: "J’ai un cadeau pour toi.", en: "I have a gift for you." }
            ]
          },
          {
            lines: [
              { fr: "Je suis chez moi.", en: "I am at my place." }
            ]
          },
          {
            lines: [
              { fr: "À qui parles-tu ?", en: "Who are you speaking to?" },
              { fr: "Je parle à elles.", en: "I am speaking to them." }
            ]
          },
          {
            lines: [
              { fr: "Elle vient avec moi.", en: "She is coming with me." }
            ]
          },
          {
            lines: [
              { fr: "Ce livre est pour lui.", en: "This book is for him." }
            ]
          },
          {
            lines: [
              { fr: "Nous mangeons chez eux.", en: "We are eating at their place." }
            ]
          },
          {
            lines: [
              { fr: "Je pense à toi.", en: "I am thinking of you." }
            ]
          }
        ]
      }
    ];
