    const pronunciationRules = [
      {
        sound: "[a]",
        rules: [
          {
            rule: "字母a",
            examples: [
              { fr: "la", zh: "阴性定冠词“the”" },
              { fr: "papa", zh: "爸爸" },
              { fr: "table", zh: "桌子" },
              { fr: "chat", zh: "猫" }
            ]
          },
          {
            rule: "字母à, â",
            examples: [
              { fr: "là", zh: "那里" },
              { fr: "âge", zh: "年龄" },
              { fr: "pâte", zh: "面团；意面" },
              { fr: "âne", zh: "驴" }
            ]
          },
          {
            rule: "femme 中的字母 e，以及大多数以 -emment 结尾的副词中的字母 e",
            examples: [
              { fr: "femme", zh: "女人；妻子" },
              { fr: "évidemment", zh: "当然" },
              { fr: "apparemment", zh: "看起来；显然" },
              { fr: "récemment", zh: "最近" }
            ]
          }
        ]
      },
      {
        sound: "[ɛ]",
        rules: [
          {
            rule: "字母è, ê, ë",
            examples: [
              { fr: "mère", zh: "妈妈；母亲" },
              { fr: "frère", zh: "兄弟" },
              { fr: "fête", zh: "节日；派对" },
              { fr: "Noël", zh: "圣诞节" }
            ]
          },
          {
            rule: "字母e在闭音节中",
            examples: [
              { fr: "sel", zh: "盐" },
              { fr: "merci", zh: "谢谢" },
              { fr: "avec", zh: "和；跟" },
              { fr: "mer", zh: "海" }
            ]
          },
          {
            rule: "字母e在两个相同的辅音字母前",
            examples: [
              { fr: "elle", zh: "她" },
              { fr: "cette", zh: "这个；这位（阴性）" },
              { fr: "belle", zh: "漂亮的（阴性）" },
              { fr: "baguette", zh: "法棍" }
            ]
          },
          {
            rule: "字母组合et在词末",
            examples: [
              { fr: "ticket", zh: "票" },
              { fr: "billet", zh: "票" },
              { fr: "paquet", zh: "包裹；一包" },
              { fr: "poulet", zh: "鸡肉；鸡" }
            ]
          },
          {
            rule: "字母组合ai, aî, ei, ay, ey",
            examples: [
              { fr: "mai", zh: "五月" },
              { fr: "maison", zh: "房子" },
              { fr: "lait", zh: "牛奶" },
              { fr: "neige", zh: "雪" },
              { fr: "peine", zh: "难过；麻烦" },
              { fr: "maître", zh: "老师；大师" },
              { fr: "seize", zh: "十六" },
              { fr: "Orsay", zh: "奥赛（地名）" },
              { fr: "jersey", zh: "运动衫；泽西" }
            ]
          }
        ]
      },
      {
        sound: "[e]",
        rules: [
          {
            rule: "字母é",
            examples: [
              { fr: "été", zh: "夏天" },
              { fr: "café", zh: "咖啡；咖啡馆" },
              { fr: "bébé", zh: "婴儿" },
              { fr: "école", zh: "学校" }
            ]
          },
          {
            rule: "字母e在词首且后面接-ff, -ss, -ll时",
            examples: [
              { fr: "effet", zh: "效果" },
              { fr: "essai", zh: "尝试；试验" },
              { fr: "essayer", zh: "尝试" },
              { fr: "effacer", zh: "擦掉；删除" },
              { fr: "ellipse", zh: "椭圆" }
            ]
          },
          {
            rule: "字母组合ai在少数词词末或作为动词第一人称变位的结尾",
            examples: [
              { fr: "quai", zh: "站台；码头" },
              { fr: "j’ai", zh: "我有" },
              { fr: "j’irai", zh: "我会去" },
              { fr: "j’aurai", zh: "我会有" },
              { fr: "je serai", zh: "我会是" }
            ]
          },
          {
            rule: "多数动词不定式词末的字母组合 -er（不适用于 hiver、cancer、super 等非动词）",
            examples: [
              { fr: "parler", zh: "说话" },
              { fr: "manger", zh: "吃" },
              { fr: "aller", zh: "去" },
              { fr: "aimer", zh: "喜欢；爱" },
              { fr: "écouter", zh: "听" },
              { fr: "laisser", zh: "让；留下" },
              { fr: "répéter", zh: "重复" }
            ]
          },
          {
            rule: "字母组合es在单音节词末",
            examples: [
              { fr: "les", zh: "复数定冠词“the”" },
              { fr: "des", zh: "一些" },
              { fr: "mes", zh: "我的（复数）" },
              { fr: "tes", zh: "你的（复数）" },
              { fr: "ses", zh: "他/她的（复数）" }
            ]
          },
          {
            rule: "字母组合ez在词末",
            examples: [
              { fr: "chez", zh: "在……家；在……处" },
              { fr: "allez", zh: "去吧；你们去" },
              { fr: "avez", zh: "你/你们有" },
              { fr: "voulez", zh: "你/你们想要" },
              { fr: "prenez", zh: "拿；乘坐" }
            ]
          }
        ]
      },
      {
        sound: "[i]",
        rules: [
          {
            rule: "字母i, î, ï, y",
            examples: [
              { fr: "si", zh: "如果；是的" },
              { fr: "ici", zh: "这里" },
              { fr: "lit", zh: "床" },
              { fr: "île", zh: "岛" },
              { fr: "maïs", zh: "玉米" },
              { fr: "lycée", zh: "高中" }
            ]
          }
        ]
      },
      {
        sound: "[y]",
        rules: [
          {
            rule: "字母u, û",
            examples: [
              { fr: "tu", zh: "你" },
              { fr: "une", zh: "一个（阴性）" },
              { fr: "sur", zh: "在……上" },
              { fr: "sûr", zh: "确定的" },
              { fr: "lune", zh: "月亮" }
            ]
          }
        ]
      },
      {
        sound: "[u]",
        rules: [
          {
            rule: "字母组合ou, où, oû, août",
            examples: [
              { fr: "nous", zh: "我们" },
              { fr: "vous", zh: "您；你们" },
              { fr: "pour", zh: "为了；给" },
              { fr: "où", zh: "哪里" },
              { fr: "coût", zh: "费用" },
              { fr: "août", zh: "八月" }
            ]
          }
        ]
      },
      {
        sound: "[o]",
        rules: [
          {
            rule: "字母组合au, eau",
            examples: [
              { fr: "eau", ipa: "/o/", zh: "水" },
              { fr: "beau", ipa: "/bo/", zh: "美丽的（阳性）" },
              { fr: "seau", ipa: "/so/", zh: "桶" },
              { fr: "cadeau", ipa: "/kado/", zh: "礼物" },
              { fr: "animaux", ipa: "/animo/", zh: "动物（复数）" }
            ]
          },
          {
            rule: "字母o在词末开音节中",
            examples: [
              { fr: "mot", ipa: "/mo/", zh: "词；单词" },
              { fr: "vélo", ipa: "/velo/", zh: "自行车" },
              { fr: "métro", ipa: "/metʁo/", zh: "地铁" },
              { fr: "stylo", ipa: "/stilo/", zh: "笔" },
              { fr: "canot", ipa: "/kano/", zh: "小船" }
            ]
          },
          {
            rule: "字母o在[z]音前",
            examples: [
              { fr: "rose", ipa: "/ʁoz/", zh: "玫瑰；粉色的" },
              { fr: "chose", ipa: "/ʃoz/", zh: "东西；事情" },
              { fr: "oser", ipa: "/oze/", zh: "敢于" },
              { fr: "poser", ipa: "/poze/", zh: "放；提出问题" },
              { fr: "prose", ipa: "/pʁoz/", zh: "散文" }
            ]
          },
          {
            rule: "字母ô",
            examples: [
              { fr: "tôt", ipa: "/to/", zh: "早" },
              { fr: "hôtel", ipa: "/otɛl/", zh: "酒店" },
              { fr: "hôpital", ipa: "/opital/", zh: "医院" },
              { fr: "côté", ipa: "/kote/", zh: "旁边；侧面" },
              { fr: "drôle", ipa: "/dʁol/", zh: "有趣的；奇怪的" }
            ]
          }
        ]
      },
      {
        sound: "[ɔ]",
        rules: [
          {
            rule: "字母o",
            examples: [
              { fr: "comme", ipa: "/kɔm/", zh: "像；如同" },
              { fr: "homme", ipa: "/ɔm/", zh: "男人" },
              { fr: "bonne", ipa: "/bɔn/", zh: "好的（阴性）" },
              { fr: "porte", ipa: "/pɔʁt/", zh: "门" },
              { fr: "normaux", ipa: "/nɔʁmo/", zh: "正常的（阳性复数）" }
            ]
          },
          {
            rule: "字母组合um在词末有时读[ɔm]",
            examples: [
              { fr: "minimum", ipa: "/minimɔm/", zh: "最小值；最低限度" },
              { fr: "maximum", ipa: "/maksimɔm/", zh: "最大值；最高限度" },
              { fr: "album", ipa: "/albɔm/", zh: "相册；专辑" },
              { fr: "forum", ipa: "/fɔʁɔm/", zh: "论坛" }
            ]
          }
        ]
      },
      {
        sound: "[ə]",
        rules: [
          {
            rule: "字母e在单音节词末",
            examples: [
              { fr: "le", ipa: "/lə/", zh: "阳性定冠词“the”" },
              { fr: "ne", ipa: "/nə/", zh: "否定词的一部分" },
              { fr: "de", ipa: "/də/", zh: "的；从" },
              { fr: "ce", ipa: "/sə/", zh: "这个" },
              { fr: "je", ipa: "/ʒə/", zh: "我" }
            ]
          },
          {
            rule: "字母e在词首开音节中",
            examples: [
              { fr: "petit", ipa: "/pəti/", zh: "小的" },
              { fr: "semaine", ipa: "/səmɛn/", zh: "星期；周" },
              { fr: "demain", ipa: "/dəmɛ̃/", zh: "明天" },
              { fr: "devant", ipa: "/dəvɑ̃/", zh: "在……前面" }
            ]
          },
          {
            rule: "字母e在“辅辅e辅元”组合中",
            examples: [
              { fr: "mercredi", ipa: "/mɛʁkʁədi/", zh: "星期三" },
              { fr: "vendredi", ipa: "/vɑ̃dʁədi/", zh: "星期五" },
              { fr: "premier", ipa: "/pʁəmje/", zh: "第一的" },
              { fr: "grenier", ipa: "/ɡʁənje/", zh: "阁楼" }
            ]
          }
        ]
      },
      {
        sound: "[ø]",
        rules: [
          {
            rule: "字母组合eu, œu在词末开音节中",
            examples: [
              { fr: "peu", ipa: "/pø/", zh: "少量；一点" },
              { fr: "deux", ipa: "/dø/", zh: "二" },
              { fr: "feu", ipa: "/fø/", zh: "火" },
              { fr: "pleut", ipa: "/plø/", zh: "下雨" },
              { fr: "fameux", ipa: "/famø/", zh: "著名的（阳性）" },
              { fr: "nœud", ipa: "/nø/", zh: "结" }
            ]
          },
          {
            rule: "字母组合eu在[z]音前",
            examples: [
              { fr: "heureuse", ipa: "/øʁøz/", zh: "开心的（阴性）" },
              { fr: "fameuse", ipa: "/famøz/", zh: "著名的（阴性）" },
              { fr: "creuser", ipa: "/kʁøze/", zh: "挖" },
              { fr: "danseuse", ipa: "/dɑ̃søz/", zh: "女舞者" },
              { fr: "vendeuse", ipa: "/vɑ̃døz/", zh: "女售货员" }
            ]
          },
          {
            rule: "字母组合eu在词首开音节中",
            examples: [
              { fr: "euro", ipa: "/øʁo/", zh: "欧元" },
              { fr: "Europe", ipa: "/øʁɔp/", zh: "欧洲" },
              { fr: "européen", ipa: "/øʁopeɛ̃/", zh: "欧洲的；欧洲人" },
              { fr: "Eugène", ipa: "/øʒɛn/", zh: "欧仁（人名）" }
            ]
          }
        ]
      },
      {
        sound: "[œ]",
        rules: [
          {
            rule: "字母组合eu, œu, œ",
            examples: [
              { fr: "seul", ipa: "/sœl/", zh: "独自的" },
              { fr: "sœur", ipa: "/sœʁ/", zh: "姐妹" },
              { fr: "œil", ipa: "/œj/", zh: "眼睛" },
              { fr: "jeune", ipa: "/ʒœn/", zh: "年轻的" },
              { fr: "neuf", ipa: "/nœf/", zh: "九；新的" }
            ]
          },
          {
            rule: "字母组合ue在字母c或g后",
            examples: [
              { fr: "accueil", ipa: "/akœj/", zh: "接待；欢迎" },
              { fr: "cueillir", ipa: "/kœjiʁ/", zh: "采摘" },
              { fr: "recueillir", ipa: "/ʁəkœjiʁ/", zh: "收集；接纳" },
              { fr: "orgueil", ipa: "/ɔʁɡœj/", zh: "骄傲" }
            ]
          }
        ]
      }
    ];

    const consonantPronunciationRules = [
      {
        sound: "[p]",
        rules: [
          {
            rule: "字母p, pp",
            examples: [
              { fr: "papa", zh: "爸爸" },
              { fr: "porte", zh: "门" },
              { fr: "pomme", zh: "苹果" },
              { fr: "pipe", zh: "烟斗" },
              { fr: "appel", zh: "电话；呼叫" }
            ]
          }
        ]
      },
      {
        sound: "[t]",
        rules: [
          {
            rule: "字母t, tt",
            examples: [
              { fr: "tu", zh: "你" },
              { fr: "toi", zh: "你" },
              { fr: "table", zh: "桌子" },
              { fr: "tête", zh: "头" },
              { fr: "attaque", zh: "攻击" }
            ]
          }
        ]
      },
      {
        sound: "[k]",
        rules: [
          {
            rule: "字母c在字母a, o, u之前",
            examples: [
              { fr: "café", zh: "咖啡；咖啡馆" },
              { fr: "carte", zh: "卡片；地图" },
              { fr: "cassette", zh: "盒式磁带" },
              { fr: "cou", zh: "脖子" },
              { fr: "cube", zh: "立方体" }
            ]
          },
          {
            rule: "字母 c 在辅音字母前；部分词末 c 读 [k]（blanc、tabac、porc 等词末 c 不发音）",
            examples: [
              { fr: "clé", zh: "钥匙" },
              { fr: "crème", zh: "奶油" },
              { fr: "acte", zh: "行为；法令" },
              { fr: "sac", zh: "包" },
              { fr: "avec", zh: "和；跟" },
              { fr: "parc", zh: "公园" }
            ]
          },
          {
            rule: "字母组合ch在少数单词中",
            examples: [
              { fr: "technique", zh: "技术；技巧" },
              { fr: "orchestre", zh: "管弦乐队" },
              { fr: "écho", zh: "回声" },
              { fr: "chronique", zh: "纪事；专栏" },
              { fr: "archéologie", zh: "考古学" }
            ]
          },
          {
            rule: "字母k",
            examples: [
              { fr: "kilo", zh: "公斤" },
              { fr: "kiwi", zh: "猕猴桃" },
              { fr: "parking", zh: "停车场" },
              { fr: "kayak", zh: "皮划艇" },
              { fr: "kaki", zh: "卡其色；柿子" }
            ]
          },
          {
            rule: "字母q在词末",
            examples: [
              { fr: "coq", zh: "公鸡" },
              { fr: "cinq", zh: "五" },
              { fr: "faq", zh: "常见问题" }
            ]
          },
          {
            rule: "字母组合qu在元音字母e, i, y前",
            examples: [
              { fr: "quel", zh: "哪个；什么" },
              { fr: "qui", zh: "谁" },
              { fr: "question", zh: "问题" },
              { fr: "quitter", zh: "离开" },
              { fr: "casque", zh: "头盔；耳机" }
            ]
          }
        ]
      },
      {
        sound: "[f]",
        rules: [
          {
            rule: "字母f, ff",
            examples: [
              { fr: "faire", zh: "做" },
              { fr: "femme", zh: "女人；妻子" },
              { fr: "frère", zh: "兄弟" },
              { fr: "paf", zh: "啪的一声" },
              { fr: "effet", zh: "效果" }
            ]
          },
          {
            rule: "字母组合ph",
            examples: [
              { fr: "photo", zh: "照片" },
              { fr: "téléphone", zh: "电话" },
              { fr: "pharmacie", zh: "药店" },
              { fr: "phare", zh: "灯塔；车灯" },
              { fr: "Sisyphe", zh: "西西弗斯" }
            ]
          }
        ]
      },
      {
        sound: "[s]",
        rules: [
          {
            rule: "字母c在字母e, i, y前",
            examples: [
              { fr: "ce", zh: "这个" },
              { fr: "cinq", zh: "五" },
              { fr: "ici", zh: "这里" },
              { fr: "merci", zh: "谢谢" },
              { fr: "cycle", zh: "周期；自行车" },
              { fr: "cesser", zh: "停止" }
            ]
          },
          {
            rule: "字母ç",
            examples: [
              { fr: "ça", zh: "这；那" },
              { fr: "français", zh: "法语；法国的" },
              { fr: "garçon", zh: "男孩；服务员" },
              { fr: "leçon", zh: "课；教训" },
              { fr: "reçu", zh: "收据；收到的" }
            ]
          },
          {
            rule: "字母s（不在两个元音之间）, ss",
            examples: [
              { fr: "salut", zh: "你好；再见" },
              { fr: "site", zh: "地点；网站" },
              { fr: "sac", zh: "包" },
              { fr: "passe", zh: "经过；通行证" },
              { fr: "classe", zh: "班级；教室" }
            ]
          },
          {
            rule: "字母组合 ti + 元音在 -tion、-tiel 等许多词中 t 读 [s]（question、amitié、sortie 等不适用）",
            examples: [
              { fr: "nation", zh: "国家；民族" },
              { fr: "station", zh: "车站；站点" },
              { fr: "attention", zh: "注意" },
              { fr: "initiative", zh: "主动性；倡议" },
              { fr: "partiel", zh: "部分的；期中考试" }
            ]
          },
          {
            rule: "字母x在少数情况下",
            examples: [
              { fr: "six", zh: "六" },
              { fr: "dix", zh: "十" },
              { fr: "soixante", zh: "六十" }
            ]
          }
        ]
      },
      {
        sound: "[ʃ]",
        rules: [
          {
            rule: "字母组合ch, sch",
            examples: [
              { fr: "chat", zh: "猫" },
              { fr: "chien", zh: "狗" },
              { fr: "chercher", zh: "寻找" },
              { fr: "cher", zh: "亲爱的；贵的" },
              { fr: "fiche", zh: "卡片；表格" },
              { fr: "schéma", zh: "图表；方案" }
            ]
          }
        ]
      },
      {
        sound: "[l]",
        rules: [
          {
            rule: "字母l, ll",
            examples: [
              { fr: "la", zh: "阴性定冠词“the”" },
              { fr: "les", zh: "复数定冠词“the”" },
              { fr: "livre", zh: "书" },
              { fr: "elle", zh: "她" },
              { fr: "animal", zh: "动物" }
            ]
          }
        ]
      },
      {
        sound: "[m]",
        rules: [
          {
            rule: "字母m, mm",
            examples: [
              { fr: "maman", zh: "妈妈" },
              { fr: "maison", zh: "房子" },
              { fr: "manger", zh: "吃" },
              { fr: "masse", zh: "大量；质量" },
              { fr: "lime", zh: "锉刀；青柠" },
              { fr: "immaculé", zh: "洁白无瑕的" }
            ]
          }
        ]
      },
      {
        sound: "[n]",
        rules: [
          {
            rule: "字母n, nn",
            examples: [
              { fr: "non", zh: "不" },
              { fr: "nous", zh: "我们" },
              { fr: "nuit", zh: "夜晚" },
              { fr: "nul", zh: "无效的；差劲的" },
              { fr: "année", zh: "年" },
              { fr: "bonne", zh: "好的（阴性）" }
            ]
          }
        ]
      },
      {
        sound: "[r]",
        rules: [
          {
            rule: "字母r, rr",
            examples: [
              { fr: "rue", zh: "街道" },
              { fr: "rouge", zh: "红色的" },
              { fr: "frère", zh: "兄弟" },
              { fr: "rire", zh: "笑" },
              { fr: "hurle", zh: "喊叫" },
              { fr: "terrible", zh: "可怕的；很棒的" }
            ]
          }
        ]
      },
      {
        sound: "[b]",
        rules: [
          {
            rule: "字母b, bb",
            examples: [
              { fr: "bon", ipa: "/bɔ̃/", zh: "好的" },
              { fr: "beau", ipa: "/bo/", zh: "美丽的（阳性）" },
              { fr: "bébé", ipa: "/bebe/", zh: "婴儿" },
              { fr: "beauté", ipa: "/bote/", zh: "美丽" },
              { fr: "aube", ipa: "/ob/", zh: "黎明" },
              { fr: "abbé", ipa: "/abe/", zh: "神父" }
            ]
          }
        ]
      },
      {
        sound: "[d]",
        rules: [
          {
            rule: "字母d",
            examples: [
              { fr: "dans", ipa: "/dɑ̃/", zh: "在……里面" },
              { fr: "deux", ipa: "/dø/", zh: "二" },
              { fr: "dimanche", ipa: "/dimɑ̃ʃ/", zh: "星期日" },
              { fr: "dos", ipa: "/do/", zh: "背" },
              { fr: "chaude", ipa: "/ʃod/", zh: "热的（阴性）" }
            ]
          }
        ]
      },
      {
        sound: "[ɡ]",
        rules: [
          {
            rule: "字母g在字母a, o, u前",
            examples: [
              { fr: "gare", ipa: "/ɡaʁ/", zh: "火车站" },
              { fr: "garçon", ipa: "/ɡaʁsɔ̃/", zh: "男孩；服务员" },
              { fr: "gomme", ipa: "/ɡɔm/", zh: "橡皮" },
              { fr: "égal", ipa: "/eɡal/", zh: "相等的" },
              { fr: "goût", ipa: "/ɡu/", zh: "味道" },
              { fr: "légume", ipa: "/leɡym/", zh: "蔬菜" }
            ]
          },
          {
            rule: "字母g在辅音前",
            examples: [
              { fr: "grand", ipa: "/ɡʁɑ̃/", zh: "大的" },
              { fr: "gris", ipa: "/ɡʁi/", zh: "灰色的" },
              { fr: "glace", ipa: "/ɡlas/", zh: "冰；冰淇淋" },
              { fr: "glisser", ipa: "/ɡlise/", zh: "滑动" },
              { fr: "énigmatique", ipa: "/eniɡmatik/", zh: "神秘的" }
            ]
          },
          {
            rule: "字母组合gu在元音字母e, i, y前",
            examples: [
              { fr: "guide", ipa: "/ɡid/", zh: "导游；指南" },
              { fr: "guitare", ipa: "/ɡitaʁ/", zh: "吉他" },
              { fr: "guerre", ipa: "/ɡɛʁ/", zh: "战争" },
              { fr: "langue", ipa: "/lɑ̃ɡ/", zh: "语言；舌头" },
              { fr: "digue", ipa: "/diɡ/", zh: "堤坝" }
            ]
          }
        ]
      },
      {
        sound: "[v]",
        rules: [
          {
            rule: "字母v",
            examples: [
              { fr: "vous", ipa: "/vu/", zh: "您；你们" },
              { fr: "ville", ipa: "/vil/", zh: "城市" },
              { fr: "vélo", ipa: "/velo/", zh: "自行车" },
              { fr: "voir", ipa: "/vwaʁ/", zh: "看见" },
              { fr: "vive", ipa: "/viv/", zh: "活的；万岁" },
              { fr: "vœux", ipa: "/vø/", zh: "祝愿（复数）" }
            ]
          }
        ]
      },
      {
        sound: "[z]",
        rules: [
          {
            rule: "字母s在两个元音之间",
            examples: [
              { fr: "maison", ipa: "/mɛzɔ̃/", zh: "房子" },
              { fr: "cuisine", ipa: "/kɥizin/", zh: "厨房；烹饪" },
              { fr: "oser", ipa: "/oze/", zh: "敢于" },
              { fr: "rose", ipa: "/ʁoz/", zh: "玫瑰；粉色的" },
              { fr: "isoler", ipa: "/izɔle/", zh: "隔离" }
            ]
          },
          {
            rule: "字母z",
            examples: [
              { fr: "zéro", ipa: "/zeʁo/", zh: "零" },
              { fr: "zone", ipa: "/zon/", zh: "区域" },
              { fr: "zèbre", ipa: "/zɛbʁ/", zh: "斑马" },
              { fr: "zèle", ipa: "/zɛl/", zh: "热忱" },
              { fr: "nazi", ipa: "/nazi/", zh: "纳粹" }
            ]
          }
        ]
      },
      {
        sound: "[ʒ]",
        rules: [
          {
            rule: "字母g在字母e, i, y前",
            examples: [
              { fr: "gens", ipa: "/ʒɑ̃/", zh: "人们" },
              { fr: "girafe", ipa: "/ʒiʁaf/", zh: "长颈鹿" },
              { fr: "âge", ipa: "/aʒ/", zh: "年龄" },
              { fr: "gèle", ipa: "/ʒɛl/", zh: "结冰；冻住" },
              { fr: "argile", ipa: "/aʁʒil/", zh: "黏土" },
              { fr: "gymnase", ipa: "/ʒimnaz/", zh: "体育馆" }
            ]
          },
          {
            rule: "字母j",
            examples: [
              { fr: "je", ipa: "/ʒə/", zh: "我" },
              { fr: "jour", ipa: "/ʒuʁ/", zh: "天；日子" },
              { fr: "jeune", ipa: "/ʒœn/", zh: "年轻的" },
              { fr: "jouer", ipa: "/ʒwe/", zh: "玩；演奏" },
              { fr: "déjà", ipa: "/deʒa/", zh: "已经" }
            ]
          }
        ]
      },
      {
        sound: "[ɲ]",
        rules: [
          {
            rule: "字母组合gn",
            examples: [
              { fr: "ligne", ipa: "/liɲ/", zh: "线；行" },
              { fr: "signal", ipa: "/siɲal/", zh: "信号" },
              { fr: "montagne", ipa: "/mɔ̃taɲ/", zh: "山" },
              { fr: "gagner", ipa: "/ɡaɲe/", zh: "赢；赚" },
              { fr: "agneau", ipa: "/aɲo/", zh: "羊羔" },
              { fr: "magnifique", ipa: "/maɲifik/", zh: "极好的；美丽的" }
            ]
          }
        ]
      }
    ];

    const mandatoryLiaisonRules = [
      {
        sound: "限定词 + 名词",
        rule: "冠词、物主限定词、指示限定词 + 元音/哑音 h 开头的名词",
        note: "词尾 s / x 通常联成 [z]，n 通常联成 [n]。",
        examples: [
          { fr: "les amis", ipa: "/le.z‿ami/", zh: "朋友们" },
          { fr: "des enfants", ipa: "/de.z‿ɑ̃fɑ̃/", zh: "一些孩子" },
          { fr: "un ami", ipa: "/œ̃.n‿ami/", zh: "一个朋友（男）" },
          { fr: "mon école", ipa: "/mɔ̃.n‿ekɔl/", zh: "我的学校" }
        ]
      },
      {
        sound: "前置形容词 + 名词",
        rule: "放在名词前的常见形容词 + 元音/哑音 h 开头的名词",
        note: "grand 的 d 在联诵中读 [t]；复数 s / x 常读 [z]。",
        examples: [
          { fr: "petit ami", ipa: "/pəti.t‿ami/", zh: "男朋友；小朋友（男）" },
          { fr: "grand homme", ipa: "/ɡʁɑ̃.t‿ɔm/", zh: "伟人" },
          { fr: "bons amis", ipa: "/bɔ̃.z‿ami/", zh: "好朋友们" },
          { fr: "beaux appartements", ipa: "/bo.z‿apaʁtəmɑ̃/", zh: "漂亮的公寓们" }
        ]
      },
      {
        sound: "主语代词 + 动词",
        rule: "主语代词 + 元音/哑音 h 开头的动词",
        note: "nous / vous / ils / elles 后面很常见；s 在联诵中读 [z]。",
        examples: [
          { fr: "nous avons", ipa: "/nu.z‿avɔ̃/", zh: "我们有" },
          { fr: "vous êtes", ipa: "/vu.z‿ɛt/", zh: "您/你们是" },
          { fr: "ils ont", ipa: "/il.z‿ɔ̃/", zh: "他们有" },
          { fr: "elles aiment", ipa: "/ɛl.z‿ɛm/", zh: "她们喜欢" }
        ]
      },
      {
        sound: "短介词/副词 + 后词",
        rule: "常见短词 chez / dans / en / sans / très，以及表示‘更……’的 plus + 元音/哑音 h 开头的词",
        note: "chez / dans / sans / très 的词尾 s/z 多读 [z]；en 的 n 读 [n]；比较级 plus 在元音前通常读 [z]。",
        examples: [
          { fr: "chez elle", ipa: "/ʃe.z‿ɛl/", zh: "在她家；在她那里" },
          { fr: "dans un sac", ipa: "/dɑ̃.z‿œ̃ sak/", zh: "在一个包里" },
          { fr: "en été", ipa: "/ɑ̃.n‿ete/", zh: "在夏天" },
          { fr: "très intéressant", ipa: "/tʁɛ.z‿ɛ̃teʁesɑ̃/", zh: "非常有趣" }
        ]
      },
      {
        sound: "固定表达",
        rule: "一些固定搭配中，联诵基本固定要读",
        note: "把它们当作整块短语记忆最轻松。",
        examples: [
          { fr: "de temps en temps", ipa: "/də tɑ̃.z‿ɑ̃ tɑ̃/", zh: "时不时" },
          { fr: "tout à fait", ipa: "/tu.t‿a fɛ/", zh: "完全；确实" },
          { fr: "petit à petit", ipa: "/pəti.t‿a pəti/", zh: "一点一点地" }
        ]
      }
    ];

    const optionalLiaisonRules = [
      {
        sound: "être 后",
        rule: "être 的变位后面遇到元音时，联诵常见于较正式、较仔细的语音，但日常口语中也可以不联诵",
        note: "先学会听懂两种读法；不要把可选联诵当成每次都必须读。",
        examples: [
          { fr: "Il est arrivé.", ipa: "/il ɛ(t)‿aʁive/", zh: "他到了" },
          { fr: "Elle est heureuse.", ipa: "/ɛl ɛ(t)‿øʁøz/", zh: "她很开心" },
          { fr: "C’est intéressant.", ipa: "/sɛ(t)‿ɛ̃teʁesɑ̃/", zh: "这很有趣" }
        ]
      },
      {
        sound: "部分副词后",
        rule: "pas / plus / trop 等词后面的联诵会随语速、语体和强调而变化",
        note: "仔细语音中更容易听到联诵；自然口语中常省略。",
        examples: [
          { fr: "pas encore", ipa: "/pɑ(z)‿ɑ̃kɔʁ/", zh: "还没有" },
          { fr: "beaucoup apprécié", ipa: "/boku(p)‿apʁesje/", zh: "很受欢迎" },
          { fr: "trop aimable", ipa: "/tʁo(p)‿ɛmabl/", zh: "太客气了" }
        ]
      },
      {
        sound: "复数名词后",
        rule: "复数名词 + 元音开头的形容词之间，联诵多见于正式或朗读语体，日常口语通常不读",
        note: "初学时可以不主动读，但要能辨认正式语音中的 [z]。",
        examples: [
          { fr: "des étudiants intelligents", ipa: "/de.zetydjɑ̃(z)‿ɛ̃teliʒɑ̃/", zh: "聪明的学生们" },
          { fr: "des enfants adorables", ipa: "/de.zɑ̃fɑ̃(z)‿adɔʁabl/", zh: "可爱的孩子们" },
          { fr: "des savants anglais", ipa: "/de savɑ̃(z)‿ɑ̃ɡlɛ/", zh: "英国学者们" }
        ]
      }
    ];

    const forbiddenLiaisonRules = [
      {
        sound: "et 后禁止",
        rule: "连词 et 后面不做联诵，即使下一个词以元音开头",
        note: "et 的 t 不读，也不要把它连到后面的词。",
        examples: [
          { fr: "toi et elle", ipa: "/twa e ɛl/", zh: "你和她" },
          { fr: "un café et un thé", ipa: "/œ̃ kafe e œ̃ te/", zh: "一杯咖啡和一杯茶" },
          { fr: "petit et agréable", ipa: "/pəti e aɡʁeabl/", zh: "小巧而舒适" }
        ]
      },
      {
        sound: "嘘音 h 前禁止",
        rule: "嘘音 h（h aspiré）前面既不省音，也不联诵",
        note: "字典常用特殊符号标出嘘音 h；需要跟着单词一起记。",
        examples: [
          { fr: "les héros", ipa: "/le eʁo/", zh: "英雄们" },
          { fr: "des haricots", ipa: "/de aʁiko/", zh: "一些四季豆" },
          { fr: "un haut mur", ipa: "/œ̃ o myʁ/", zh: "一堵高墙" }
        ]
      },
      {
        sound: "单数名词后禁止",
        rule: "单数名词的静音词尾后面通常不与形容词联诵",
        note: "这和限定词 + 名词的必读联诵不同。",
        examples: [
          { fr: "un étudiant intelligent", ipa: "/œ̃.n‿etydjɑ̃ ɛ̃teliʒɑ̃/", zh: "一名聪明的学生" },
          { fr: "un repas excellent", ipa: "/œ̃ ʁəpɑ ɛksɛlɑ̃/", zh: "一顿很棒的饭" },
          { fr: "un chat adorable", ipa: "/œ̃ ʃa adɔʁabl/", zh: "一只可爱的猫" }
        ]
      },
      {
        sound: "onze / oui 前禁止",
        rule: "onze 和 oui 开头时通常阻止前面的联诵",
        note: "把 les onze 和 mais oui 当作固定听辨块来记。",
        examples: [
          { fr: "les onze élèves", ipa: "/le ɔ̃.ze.lɛv/", zh: "这十一名学生" },
          { fr: "des oui et des non", ipa: "/de wi e de nɔ̃/", zh: "一些赞成和反对" },
          { fr: "mais oui", ipa: "/mɛ wi/", zh: "当然；是啊" }
        ]
      }
    ];

    const hPronunciationRules = [
      {
        sound: "h muet",
        rules: [
          {
            rule: "哑音 h 不发音，并允许省音和联诵；把它当作元音开头处理",
            examples: [
              { fr: "l’homme", ipa: "/lɔm/", zh: "男人" },
              { fr: "les hôtels", ipa: "/le.z‿otɛl/", zh: "酒店们" },
              { fr: "une histoire", ipa: "/y.n‿istwaʁ/", zh: "一个故事" }
            ]
          }
        ]
      },
      {
        sound: "h aspiré",
        rules: [
          {
            rule: "嘘音 h 本身也不发音，但会阻止省音和联诵；要说 le / la，不说 l’",
            examples: [
              { fr: "le héros", ipa: "/lə eʁo/", zh: "英雄" },
              { fr: "les haricots", ipa: "/le aʁiko/", zh: "四季豆" },
              { fr: "la honte", ipa: "/la ɔ̃t/", zh: "羞耻" }
            ]
          }
        ]
      }
    ];

    const connectedSpeechRules = [
      {
        sound: "enchaînement",
        rules: [
          {
            rule: "连音：前一个词本来就发音的词尾辅音，会自然移到下一个元音开头词的音节中；这不是把静音辅音重新读出的联诵",
            examples: [
              { fr: "avec elle", ipa: "/a.vɛ.kɛl/", zh: "和她一起" },
              { fr: "il arrive", ipa: "/i.la.ʁiv/", zh: "他到了" },
              { fr: "une amie", ipa: "/y.na.mi/", zh: "一位女性朋友" }
            ]
          }
        ]
      },
      {
        sound: "e caduc",
        rules: [
          {
            rule: "弱化 e（e caduc）在自然口语中有时省略；是否省略取决于语速和周围辅音，先熟悉完整读法，再练习听缩读",
            examples: [
              { fr: "samedi", ipa: "/sam(ə)di/", zh: "星期六" },
              { fr: "petite fenêtre", ipa: "/p(ə)tit f(ə)nɛtʁ/", zh: "小窗户" },
              { fr: "je te le donne", ipa: "/ʒə tə lə dɔn/", zh: "我把它给你" }
            ]
          }
        ]
      }
    ];

    const pronunciationContrastRules = [
      {
        sound: "鼻化 / 非鼻化",
        rules: [
          {
            rule: "元音 + n / m 在词尾或另一个辅音前常鼻化；后面再有元音或 n / m 双写时，元音通常不鼻化",
            examples: [
              { fr: "bon / bonne", ipa: "/bɔ̃/ — /bɔn/", zh: "好的（阳性 / 阴性）" },
              { fr: "un / une", ipa: "/œ̃/ — /yn/", zh: "一个（阳性 / 阴性）" },
              { fr: "vin / vinaigre", ipa: "/vɛ̃/ — /vinɛɡʁ/", zh: "葡萄酒 / 醋" }
            ]
          }
        ]
      },
      {
        sound: "[y] / [u]",
        rules: [
          {
            rule: "[y] 要保持舌位像 [i]，同时圆唇；[u] 的舌位更靠后",
            examples: [
              { fr: "tu / tout", ipa: "/ty/ — /tu/", zh: "你 / 全部" },
              { fr: "rue / roue", ipa: "/ʁy/ — /ʁu/", zh: "街道 / 轮子" },
              { fr: "dessus / dessous", ipa: "/dəsy/ — /dəsu/", zh: "在上面 / 在下面" }
            ]
          }
        ]
      },
      {
        sound: "[e] / [ɛ]",
        rules: [
          {
            rule: "[e] 比较闭，[ɛ] 比较开；注意词尾拼写和语法形式造成的对比",
            examples: [
              { fr: "été / était", ipa: "/ete/ — /etɛ/", zh: "夏天；曾经是 / 当时是" },
              { fr: "mes / mais", ipa: "/me/ — /mɛ/", zh: "我的（复数）/ 但是" },
              { fr: "parler / parlait", ipa: "/paʁle/ — /paʁlɛ/", zh: "说话（原形）/ 当时说" }
            ]
          }
        ]
      }
    ];

    const pronunciationIpa = {
      "la": "/la/",
      "papa": "/papa/",
      "table": "/tabl/",
      "chat": "/ʃa/",
      "là": "/la/",
      "âge": "/aʒ/",
      "pâte": "/pat/",
      "âne": "/an/",
      "femme": "/fam/",
      "évidemment": "/evidamɑ̃/",
      "apparemment": "/apaʁamɑ̃/",
      "récemment": "/ʁesamɑ̃/",
      "mère": "/mɛʁ/",
      "frère": "/fʁɛʁ/",
      "fête": "/fɛt/",
      "Noël": "/nɔɛl/",
      "sel": "/sɛl/",
      "merci": "/mɛʁsi/",
      "avec": "/avɛk/",
      "mer": "/mɛʁ/",
      "elle": "/ɛl/",
      "cette": "/sɛt/",
      "belle": "/bɛl/",
      "baguette": "/baɡɛt/",
      "ticket": "/tikɛ/",
      "billet": "/bijɛ/",
      "paquet": "/pakɛ/",
      "poulet": "/pulɛ/",
      "mai": "/mɛ/",
      "maison": "/mɛzɔ̃/",
      "lait": "/lɛ/",
      "neige": "/nɛʒ/",
      "peine": "/pɛn/",
      "maître": "/mɛtʁ/",
      "seize": "/sɛz/",
      "Orsay": "/ɔʁsɛ/",
      "jersey": "/ʒɛʁzɛ/",
      "été": "/ete/",
      "café": "/kafe/",
      "bébé": "/bebe/",
      "école": "/ekɔl/",
      "effet": "/efɛ/",
      "essai": "/esɛ/",
      "essayer": "/eseje/",
      "effacer": "/efase/",
      "ellipse": "/elips/",
      "quai": "/ke/",
      "j’ai": "/ʒe/",
      "j’irai": "/ʒiʁe/",
      "j’aurai": "/ʒoʁe/",
      "je serai": "/ʒə səʁe/",
      "parler": "/paʁle/",
      "manger": "/mɑ̃ʒe/",
      "aller": "/ale/",
      "aimer": "/eme/",
      "écouter": "/ekute/",
      "laisser": "/lese/",
      "répéter": "/ʁepete/",
      "les": "/le/",
      "des": "/de/",
      "mes": "/me/",
      "tes": "/te/",
      "ses": "/se/",
      "chez": "/ʃe/",
      "allez": "/ale/",
      "avez": "/ave/",
      "voulez": "/vule/",
      "prenez": "/pʁəne/",
      "si": "/si/",
      "ici": "/isi/",
      "lit": "/li/",
      "île": "/il/",
      "maïs": "/ma.is/",
      "lycée": "/lise/",
      "tu": "/ty/",
      "une": "/yn/",
      "sur": "/syʁ/",
      "sûr": "/syʁ/",
      "lune": "/lyn/",
      "nous": "/nu/",
      "vous": "/vu/",
      "pour": "/puʁ/",
      "où": "/u/",
      "coût": "/ku/",
      "août": "/ut/",
      "porte": "/pɔʁt/",
      "pomme": "/pɔm/",
      "pipe": "/pip/",
      "appel": "/apɛl/",
      "toi": "/twa/",
      "tête": "/tɛt/",
      "attaque": "/atak/",
      "carte": "/kaʁt/",
      "cassette": "/kasɛt/",
      "cou": "/ku/",
      "cube": "/kyb/",
      "clé": "/kle/",
      "crème": "/kʁɛm/",
      "acte": "/akt/",
      "sac": "/sak/",
      "parc": "/paʁk/",
      "technique": "/tɛknik/",
      "orchestre": "/ɔʁkɛstʁ/",
      "écho": "/eko/",
      "chronique": "/kʁɔnik/",
      "archéologie": "/aʁkeɔlɔʒi/",
      "kilo": "/kilo/",
      "kiwi": "/kiwi/",
      "parking": "/paʁkiŋ/",
      "kayak": "/kajak/",
      "kaki": "/kaki/",
      "coq": "/kɔk/",
      "cinq": "/sɛ̃k/",
      "faq": "/fak/",
      "quel": "/kɛl/",
      "qui": "/ki/",
      "question": "/kɛstjɔ̃/",
      "quitter": "/kite/",
      "casque": "/kask/",
      "faire": "/fɛʁ/",
      "paf": "/paf/",
      "photo": "/foto/",
      "téléphone": "/telefɔn/",
      "pharmacie": "/faʁmasi/",
      "phare": "/faʁ/",
      "Sisyphe": "/sizif/",
      "ce": "/sə/",
      "cycle": "/sikl/",
      "cesser": "/sese/",
      "ça": "/sa/",
      "français": "/fʁɑ̃sɛ/",
      "garçon": "/ɡaʁsɔ̃/",
      "leçon": "/ləsɔ̃/",
      "reçu": "/ʁəsy/",
      "salut": "/saly/",
      "site": "/sit/",
      "passe": "/pas/",
      "classe": "/klas/",
      "nation": "/nasjɔ̃/",
      "station": "/stasjɔ̃/",
      "attention": "/atɑ̃sjɔ̃/",
      "initiative": "/inisjativ/",
      "partiel": "/paʁsjɛl/",
      "six": "/sis/",
      "dix": "/dis/",
      "soixante": "/swasɑ̃t/",
      "chien": "/ʃjɛ̃/",
      "chercher": "/ʃɛʁʃe/",
      "cher": "/ʃɛʁ/",
      "fiche": "/fiʃ/",
      "schéma": "/ʃema/",
      "livre": "/livʁ/",
      "animal": "/animal/",
      "maman": "/mamɑ̃/",
      "masse": "/mas/",
      "lime": "/lim/",
      "immaculé": "/imakyle/",
      "non": "/nɔ̃/",
      "nuit": "/nɥi/",
      "nul": "/nyl/",
      "année": "/ane/",
      "bonne": "/bɔn/",
      "rue": "/ʁy/",
      "rouge": "/ʁuʒ/",
      "rire": "/ʁiʁ/",
      "hurle": "/yʁl/",
      "terrible": "/tɛʁibl/"
    };

    const pronunciationPracticeGroups = [
      {
        label: "第 1 组",
        words: [
          { fr: "mais", ipa: "/mɛ/", zh: "但是" },
          { fr: "sa", ipa: "/sa/", zh: "他的/她的（阴性单数）" },
          { fr: "père", ipa: "/pɛʁ/", zh: "父亲" },
          { fr: "tête", ipa: "/tɛt/", zh: "头" },
          { fr: "bel", ipa: "/bɛl/", zh: "漂亮的（阳性，元音前）" },
          { fr: "mer", ipa: "/mɛʁ/", zh: "海" },
          { fr: "nette", ipa: "/nɛt/", zh: "清楚的；明显的" },
          { fr: "lait", ipa: "/lɛ/", zh: "牛奶" },
          { fr: "Seine", ipa: "/sɛn/", zh: "塞纳河" }
        ]
      },
      {
        label: "第 2 组",
        words: [
          { fr: "allé", ipa: "/ale/", zh: "去了" },
          { fr: "chercher", ipa: "/ʃɛʁʃe/", zh: "寻找" },
          { fr: "été", ipa: "/ete/", zh: "夏天；曾经是" },
          { fr: "des", ipa: "/de/", zh: "一些" },
          { fr: "mes", ipa: "/me/", zh: "我的（复数）" },
          { fr: "chez", ipa: "/ʃe/", zh: "在……家；在……处" },
          { fr: "parlez", ipa: "/paʁle/", zh: "你/你们说" }
        ]
      },
      {
        label: "第 3 组",
        words: [
          { fr: "île", ipa: "/il/", zh: "岛" },
          { fr: "mur", ipa: "/myʁ/", zh: "墙" },
          { fr: "nous", ipa: "/nu/", zh: "我们" },
          { fr: "louer", ipa: "/lwe/", zh: "租；出租" },
          { fr: "capitale", ipa: "/kapital/", zh: "首都" },
          { fr: "citer", ipa: "/site/", zh: "引用；列举" },
          { fr: "cube", ipa: "/kyb/", zh: "立方体" },
          { fr: "cycle", ipa: "/sikl/", zh: "周期；自行车" }
        ]
      },
      {
        label: "第 4 组",
        words: [
          { fr: "quel", ipa: "/kɛl/", zh: "哪个；什么" },
          { fr: "équitation", ipa: "/ekitasjɔ̃/", zh: "骑马" },
          { fr: "natation", ipa: "/natasjɔ̃/", zh: "游泳" },
          { fr: "masque", ipa: "/mask/", zh: "面具；口罩" },
          { fr: "coq", ipa: "/kɔk/", zh: "公鸡" },
          { fr: "pharmacie", ipa: "/faʁmasi/", zh: "药店" },
          { fr: "faire", ipa: "/fɛʁ/", zh: "做" }
        ]
      },
      {
        label: "今日作业 第 1 组",
        words: [
          { fr: "Bordeaux", ipa: "/bɔʁdo/", zh: "波尔多" },
          { fr: "animaux", ipa: "/animo/", zh: "动物（复数）" },
          { fr: "chapeau", ipa: "/ʃapo/", zh: "帽子" },
          { fr: "beaucoup", ipa: "/boku/", zh: "很多" },
          { fr: "jaune", ipa: "/ʒon/", zh: "黄色的" }
        ]
      },
      {
        label: "今日作业 第 2 组",
        words: [
          { fr: "le", ipa: "/lə/", zh: "阳性定冠词“the”" },
          { fr: "me", ipa: "/mə/", zh: "我（宾语/反身代词）" },
          { fr: "de", ipa: "/də/", zh: "的；从" },
          { fr: "je", ipa: "/ʒə/", zh: "我" },
          { fr: "chemise", ipa: "/ʃəmiz/", zh: "衬衫" },
          { fr: "semaine", ipa: "/səmɛn/", zh: "星期；周" },
          { fr: "petit", ipa: "/pəti/", zh: "小的" }
        ]
      },
      {
        label: "今日作业 第 3 组",
        words: [
          { fr: "euro", ipa: "/øʁo/", zh: "欧元" },
          { fr: "Europe", ipa: "/øʁɔp/", zh: "欧洲" },
          { fr: "beurre", ipa: "/bœʁ/", zh: "黄油" },
          { fr: "jeune", ipa: "/ʒœn/", zh: "年轻的" },
          { fr: "bleu", ipa: "/blø/", zh: "蓝色的" },
          { fr: "pleut", ipa: "/plø/", zh: "下雨" }
        ]
      },
      {
        label: "今日作业 第 4 组",
        words: [
          { fr: "garçon", ipa: "/ɡaʁsɔ̃/", zh: "男孩；服务员" },
          { fr: "génial", ipa: "/ʒenjal/", zh: "很棒的" },
          { fr: "gilet", ipa: "/ʒilɛ/", zh: "背心；马甲" },
          { fr: "légume", ipa: "/leɡym/", zh: "蔬菜" },
          { fr: "guerre", ipa: "/ɡɛʁ/", zh: "战争" },
          { fr: "goûter", ipa: "/ɡute/", zh: "品尝；点心" }
        ]
      },
      {
        label: "今日作业 5/14 第 1 组",
        words: [
          { fr: "pendant", ipa: "/pɑ̃dɑ̃/", zh: "在……期间； pendant que 表示“当……时”" },
          { fr: "enfant", ipa: "/ɑ̃fɑ̃/", zh: "孩子" },
          { fr: "campagne", ipa: "/kɑ̃paɲ/", zh: "乡村；活动" },
          { fr: "emporter", ipa: "/ɑ̃pɔʁte/", zh: "带走；外带" },
          { fr: "blouson", ipa: "/bluzɔ̃/", zh: "夹克" },
          { fr: "pantalon", ipa: "/pɑ̃talɔ̃/", zh: "裤子" }
        ]
      },
      {
        label: "今日作业 5/14 第 2 组",
        words: [
          { fr: "boulangère", ipa: "/bulɑ̃ʒɛʁ/", zh: "女面包师；面包店老板娘" },
          { fr: "matin", ipa: "/matɛ̃/", zh: "早晨" },
          { fr: "institution", ipa: "/ɛ̃stitysjɔ̃/", zh: "机构；制度" },
          { fr: "pain", ipa: "/pɛ̃/", zh: "面包" },
          { fr: "certaine", ipa: "/sɛʁtɛn/", zh: "某个的；确定的（阴性）" },
          { fr: "voisin", ipa: "/vwazɛ̃/", zh: "邻居" }
        ]
      },
      {
        label: "今日作业 5/14 第 3 组",
        words: [
          { fr: "fille", ipa: "/fij/", zh: "女孩；女儿" },
          { fr: "famille", ipa: "/famij/", zh: "家庭" },
          { fr: "miel", ipa: "/mjɛl/", zh: "蜂蜜" },
          { fr: "lui", ipa: "/lɥi/", zh: "他；给他" },
          { fr: "oui", ipa: "/wi/", zh: "是；对" },
          { fr: "noir", ipa: "/nwaʁ/", zh: "黑色的" },
          { fr: "soir", ipa: "/swaʁ/", zh: "晚上" },
          { fr: "chinois", ipa: "/ʃinwa/", zh: "中文；中国的" }
        ]
      },
      {
        label: "今日作业 5/18 第 1 组",
        words: [
          { fr: "entrer", ipa: "/ɑ̃tʁe/", zh: "进入" },
          { fr: "création", ipa: "/kʁeasjɔ̃/", zh: "创造；创作" },
          { fr: "prendre", ipa: "/pʁɑ̃dʁ/", zh: "拿；乘坐；吃喝" },
          { fr: "métro", ipa: "/metʁo/", zh: "地铁" },
          { fr: "propre", ipa: "/pʁɔpʁ/", zh: "干净的；自己的" },
          { fr: "crépuscule", ipa: "/kʁepyskyl/", zh: "黄昏" }
        ]
      },
      {
        label: "今日作业 5/18 第 2 组",
        words: [
          { fr: "expliquer", ipa: "/ɛksplike/", zh: "解释" },
          { fr: "exister", ipa: "/ɛɡziste/", zh: "存在" },
          { fr: "exprimer", ipa: "/ɛkspʁime/", zh: "表达" },
          { fr: "exagérer", ipa: "/ɛɡzaʒeʁe/", zh: "夸张；夸大" },
          { fr: "expédier", ipa: "/ɛkspedje/", zh: "寄出；发送" },
          { fr: "excellent", ipa: "/ɛksɛlɑ̃/", zh: "优秀的；极好的" }
        ]
      },
      {
        label: "今日作业 5/18 第 3 组",
        words: [
          { fr: "un ami", ipa: "/œ̃n‿ami/", zh: "一个男朋友；一个男性朋友" },
          { fr: "une amie", ipa: "/yn ami/", zh: "一个女朋友；一个女性朋友" },
          { fr: "des amis", ipa: "/dez‿ami/", zh: "一些朋友（阳性或混合）" },
          { fr: "des amies", ipa: "/dez‿ami/", zh: "一些女性朋友" }
        ]
      }
    ];

    const pronunciationMatrixColumns = ["[a]", "[e]", "[ɛ]", "[i]", "[y]", "[u]"];
    const pronunciationMatrixRows = [
      {
        sound: "[p]",
        cells: [
          { fr: "pape", ipa: "/pap/", zh: "教皇" },
          { fr: "épée", ipa: "/epe/", zh: "剑" },
          { fr: "père", ipa: "/pɛʁ/", zh: "父亲" },
          { fr: "pipe", ipa: "/pip/", zh: "烟斗" },
          { fr: "puce", ipa: "/pys/", zh: "跳蚤；芯片" },
          { fr: "pour", ipa: "/puʁ/", zh: "为了；给" }
        ]
      },
      {
        sound: "[t]",
        cells: [
          { fr: "tasse", ipa: "/tas/", zh: "杯子" },
          { fr: "été", ipa: "/ete/", zh: "夏天；曾经是" },
          { fr: "terre", ipa: "/tɛʁ/", zh: "土地；地球" },
          { fr: "style", ipa: "/stil/", zh: "风格" },
          { fr: "têtu", ipa: "/tety/", zh: "固执的" },
          { fr: "toute", ipa: "/tut/", zh: "全部的（阴性）" }
        ]
      },
      {
        sound: "[k]",
        cells: [
          { fr: "car", ipa: "/kaʁ/", zh: "因为；长途汽车" },
          { fr: "pique-niquer", ipa: "/piknike/", zh: "野餐" },
          { fr: "caisse", ipa: "/kɛs/", zh: "箱子；收银台" },
          { fr: "qui", ipa: "/ki/", zh: "谁" },
          { fr: "piqûre", ipa: "/pikyʁ/", zh: "针刺；叮咬" },
          { fr: "écouter", ipa: "/ekute/", zh: "听" }
        ]
      },
      {
        sound: "[f]",
        cells: [
          { fr: "phare", ipa: "/faʁ/", zh: "灯塔；车灯" },
          { fr: "fée", ipa: "/fe/", zh: "仙女" },
          { fr: "fête", ipa: "/fɛt/", zh: "节日；派对" },
          { fr: "fil", ipa: "/fil/", zh: "线" },
          { fr: "futur", ipa: "/fytyʁ/", zh: "未来的" },
          { fr: "fou", ipa: "/fu/", zh: "疯狂的" }
        ]
      },
      {
        sound: "[s]",
        cells: [
          { fr: "salle", ipa: "/sal/", zh: "房间；大厅" },
          { fr: "cesser", ipa: "/sese/", zh: "停止" },
          { fr: "Seine", ipa: "/sɛn/", zh: "塞纳河" },
          { fr: "système", ipa: "/sistɛm/", zh: "系统" },
          { fr: "sur", ipa: "/syʁ/", zh: "在……上" },
          { fr: "soupe", ipa: "/sup/", zh: "汤" }
        ]
      },
      {
        sound: "[ʃ]",
        cells: [
          { fr: "chasse", ipa: "/ʃas/", zh: "打猎" },
          { fr: "chercher", ipa: "/ʃɛʁʃe/", zh: "寻找" },
          { fr: "chaîne", ipa: "/ʃɛn/", zh: "链条；频道" },
          { fr: "schisme", ipa: "/ʃism/", zh: "分裂" },
          { fr: "chute", ipa: "/ʃyt/", zh: "坠落；下跌" },
          { fr: "chouchou", ipa: "/ʃuʃu/", zh: "宠儿；最喜欢的人/物" }
        ]
      },
      {
        sound: "[l]",
        cells: [
          { fr: "la", ipa: "/la/", zh: "阴性定冠词“the”" },
          { fr: "les", ipa: "/le/", zh: "复数定冠词“the”" },
          { fr: "laine", ipa: "/lɛn/", zh: "羊毛" },
          { fr: "Lille", ipa: "/lil/", zh: "里尔" },
          { fr: "lune", ipa: "/lyn/", zh: "月亮" },
          { fr: "louche", ipa: "/luʃ/", zh: "汤勺；可疑的" }
        ]
      },
      {
        sound: "[m]",
        cells: [
          { fr: "ma", ipa: "/ma/", zh: "我的（阴性）" },
          { fr: "mes", ipa: "/me/", zh: "我的（复数）" },
          { fr: "mer", ipa: "/mɛʁ/", zh: "海" },
          { fr: "mille", ipa: "/mil/", zh: "一千" },
          { fr: "mur", ipa: "/myʁ/", zh: "墙" },
          { fr: "mouche", ipa: "/muʃ/", zh: "苍蝇" }
        ]
      },
      {
        sound: "[n]",
        cells: [
          { fr: "nappe", ipa: "/nap/", zh: "桌布" },
          { fr: "nez", ipa: "/ne/", zh: "鼻子" },
          { fr: "nef", ipa: "/nɛf/", zh: "中殿；船" },
          { fr: "Nice", ipa: "/nis/", zh: "尼斯" },
          { fr: "nul", ipa: "/nyl/", zh: "差劲的；无效的" },
          { fr: "nourrice", ipa: "/nuʁis/", zh: "保姆；奶妈" }
        ]
      },
      {
        sound: "[r]",
        cells: [
          { fr: "rare", ipa: "/ʁaʁ/", zh: "稀有的" },
          { fr: "réel", ipa: "/ʁeɛl/", zh: "真实的" },
          { fr: "reste", ipa: "/ʁɛst/", zh: "剩余；其余" },
          { fr: "rime", ipa: "/ʁim/", zh: "押韵" },
          { fr: "ruche", ipa: "/ʁyʃ/", zh: "蜂箱" },
          { fr: "route", ipa: "/ʁut/", zh: "路" }
        ]
      }
    ];
