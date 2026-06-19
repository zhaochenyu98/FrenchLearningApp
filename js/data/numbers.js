    const basic = {
      0: "zéro",
      1: "un",
      2: "deux",
      3: "trois",
      4: "quatre",
      5: "cinq",
      6: "six",
      7: "sept",
      8: "huit",
      9: "neuf",
      10: "dix",
      11: "onze",
      12: "douze",
      13: "treize",
      14: "quatorze",
      15: "quinze",
      16: "seize"
    };

    const tens = {
      20: "vingt",
      30: "trente",
      40: "quarante",
      50: "cinquante",
      60: "soixante"
    };

    const basicNumberIpa = {
      0: "zeʁo",
      1: "œ̃",
      2: "dø",
      3: "tʁwa",
      4: "katʁ",
      5: "sɛ̃k",
      6: "sis",
      7: "sɛt",
      8: "ɥit",
      9: "nœf",
      10: "dis",
      11: "ɔ̃z",
      12: "duz",
      13: "tʁɛz",
      14: "katɔʁz",
      15: "kɛ̃z",
      16: "sɛz"
    };

    const tensNumberIpa = {
      20: { base: "vɛ̃", stem: "vɛ̃t", etUn: "vɛ̃.te.œ̃" },
      30: { base: "tʁɑ̃t", stem: "tʁɑ̃t", etUn: "tʁɑ̃.te.œ̃" },
      40: { base: "kaʁɑ̃t", stem: "kaʁɑ̃t", etUn: "kaʁɑ̃.te.œ̃" },
      50: { base: "sɛ̃.kɑ̃t", stem: "sɛ̃.kɑ̃t", etUn: "sɛ̃.kɑ̃.te.œ̃" },
      60: { base: "swa.sɑ̃t", stem: "swa.sɑ̃t", etUn: "swa.sɑ̃.te.œ̃" }
    };

    function frenchNumber(n) {
      if (n in basic) return basic[n];
      if (n === 100) return "cent";

      if (n >= 17 && n <= 19) {
        return `dix-${basic[n - 10]}`;
      }

      if (n >= 20 && n <= 69) {
        const ten = Math.floor(n / 10) * 10;
        const unit = n % 10;
        if (unit === 0) return tens[ten];
        if (unit === 1) return `${tens[ten]} et un`;
        return `${tens[ten]}-${basic[unit]}`;
      }

      if (n >= 70 && n <= 79) {
        const remainder = n - 60;
        if (remainder === 11) return "soixante et onze";
        return `soixante-${frenchNumber(remainder)}`;
      }

      if (n === 80) return "quatre-vingts";

      if (n >= 81 && n <= 89) {
        return `quatre-vingt-${basic[n - 80]}`;
      }

      if (n >= 90 && n <= 99) {
        return `quatre-vingt-${frenchNumber(n - 80)}`;
      }

      if (n >= 101 && n <= 999) {
        const hundreds = Math.floor(n / 100);
        const remainder = n % 100;
        const hundredPart = hundreds === 1
          ? "cent"
          : `${frenchNumber(hundreds)} cent${remainder === 0 ? "s" : ""}`;
        if (remainder === 0) return hundredPart;
        return `${hundredPart} ${frenchNumber(remainder)}`;
      }

      if (n >= 1000 && n <= 9999) {
        const thousands = Math.floor(n / 1000);
        const remainder = n % 1000;
        const thousandPart = thousands === 1
          ? "mille"
          : `${frenchNumber(thousands)} mille`;
        if (remainder === 0) return thousandPart;
        return `${thousandPart} ${frenchNumber(remainder)}`;
      }

      return String(n);
    }

    function stripIpaSlashes(ipa) {
      return ipa ? ipa.replace(/^\/|\/$/g, "") : "";
    }

    function frenchNumberBeforeConsonantIpa(n) {
      if (n === 6) return "si";
      if (n === 8) return "ɥi";
      if (n === 10) return "di";
      return stripIpaSlashes(frenchNumberIpa(n));
    }

    function frenchNumberIpa(n) {
      if (n in basicNumberIpa) return `/${basicNumberIpa[n]}/`;
      if (n === 17) return "/dis.sɛt/";
      if (n === 18) return "/diz.ɥit/";
      if (n === 19) return "/diz.nœf/";
      if (n === 100) return "/sɑ̃/";
      if (n === 1000) return "/mil/";

      if (n >= 20 && n <= 69) {
        const ten = Math.floor(n / 10) * 10;
        const unit = n % 10;
        const tenIpa = tensNumberIpa[ten];
        if (unit === 0) return `/${tenIpa.base}/`;
        if (unit === 1) return `/${tenIpa.etUn}/`;
        return `/${tenIpa.stem}.${basicNumberIpa[unit]}/`;
      }

      if (n >= 70 && n <= 79) {
        const remainder = n - 60;
        if (remainder === 11) return "/swa.sɑ̃.te.ɔ̃z/";
        return `/swa.sɑ̃t.${frenchNumberIpa(remainder).slice(1, -1)}/`;
      }

      if (n === 80) return "/katʁə.vɛ̃/";

      if (n >= 81 && n <= 99) {
        return `/katʁə.vɛ̃.${frenchNumberIpa(n - 80).slice(1, -1)}/`;
      }

      if (n >= 101 && n <= 999) {
        const hundreds = Math.floor(n / 100);
        const remainder = n % 100;
        const hundredIpa = hundreds === 1
          ? "sɑ̃"
          : `${frenchNumberBeforeConsonantIpa(hundreds)}.sɑ̃`;
        if (remainder === 0) return `/${hundredIpa}/`;
        return `/${hundredIpa}.${stripIpaSlashes(frenchNumberIpa(remainder))}/`;
      }

      if (n >= 1000 && n <= 9999) {
        const thousands = Math.floor(n / 1000);
        const remainder = n % 1000;
        const thousandIpa = thousands === 1
          ? "mil"
          : `${frenchNumberBeforeConsonantIpa(thousands)}.mil`;
        if (remainder === 0) return `/${thousandIpa}/`;
        return `/${thousandIpa}.${stripIpaSlashes(frenchNumberIpa(remainder))}/`;
      }

      return "";
    }

    const ageYearIpa = {
      1: "/œ̃n‿ɑ̃/",
      2: "/dø.zɑ̃/",
      3: "/tʁwa.zɑ̃/",
      4: "/katʁ‿ɑ̃/",
      5: "/sɛ̃.kɑ̃/",
      6: "/si.zɑ̃/",
      7: "/sɛ.tɑ̃/",
      8: "/ɥi.tɑ̃/",
      9: "/nœ.vɑ̃/",
      10: "/di.zɑ̃/",
      11: "/ɔ̃.zɑ̃/",
      12: "/du.zɑ̃/",
      13: "/tʁɛ.zɑ̃/",
      14: "/ka.tɔʁ.zɑ̃/",
      15: "/kɛ̃.zɑ̃/",
      16: "/sɛ.zɑ̃/",
      17: "/dis.sɛ.tɑ̃/",
      18: "/diz.ɥi.tɑ̃/",
      19: "/diz.nœ.vɑ̃/",
      20: "/vɛ̃.tɑ̃/"
    };

    function frenchAgeYearsPhrase(n) {
      if (n === 1) return "un an";
      return `${frenchNumber(n)} ans`;
    }

    function frenchAgeYearsIpa(n) {
      return ageYearIpa[n] || "";
    }

    function makeNumberLearningItem(number, note, example = "") {
      return {
        number,
        word: frenchNumber(number),
        note,
        example,
        speech: frenchNumber(number)
      };
    }

    function makeYearLearningItem(year, note) {
      const word = frenchNumber(year);
      return {
        number: year,
        word,
        note,
        example: "",
        speech: word
      };
    }

    function makeNumberTopicItem(label, word, note, example = "", speech = word, ipa = "") {
      return {
        number: label,
        word,
        note,
        example,
        speech,
        ipa
      };
    }

    function frenchHourWord(hour) {
      if (hour === 0) return "zéro heure";
      if (hour === 1) return "une heure";
      return `${frenchNumber(hour)} heures`;
    }

    function makeHourLearningItem(hour) {
      const label = `${String(hour).padStart(2, "0")}:00`;
      if (hour === 0) {
        return makeNumberTopicItem(
          label,
          "minuit / zéro heure",
          "Midnight is minuit. In schedules, 00 h can be read as zéro heure.",
          "",
          "minuit"
        );
      }
      if (hour === 12) {
        return makeNumberTopicItem(
          label,
          "midi / douze heures",
          "Noon is midi. In schedules, 12 h can be read as douze heures.",
          "",
          "midi"
        );
      }
      const word = frenchHourWord(hour);
      return makeNumberTopicItem(
        label,
        word,
        hour > 12
          ? "24-hour time reads the hour number directly: 13 h = treize heures."
          : "Use heure only with 1; other hours use heures.",
        ""
      );
    }

    const hundredsLearningItems = [
      makeNumberLearningItem(100, "100 is simply cent, not un cent."),
      makeNumberLearningItem(101, "Put the rest after cent: cent un."),
      makeNumberLearningItem(121, "The et un pattern still works after cent."),
      makeNumberLearningItem(171, "70 keeps the 60 + 11 pattern: soixante et onze."),
      makeNumberLearningItem(180, "quatre-vingts keeps the final s when 80 ends the number."),
      makeNumberLearningItem(181, "quatre-vingt loses s when another number follows."),
      makeNumberLearningItem(199, "90 still uses quatre-vingt + teen."),
      makeNumberLearningItem(200, "cent becomes cents with s when an exact plural hundred ends the number."),
      makeNumberLearningItem(201, "cent loses s when another number follows."),
      makeNumberLearningItem(280, "cent has no s because another number follows; quatre-vingts keeps s because 80 ends."),
      makeNumberLearningItem(281, "Both cent and vingt have no final s when followed."),
      makeNumberLearningItem(600, "Pronunciation trap: x in six is silent before cent; six cents sounds like si cents. The final s in cents is also silent."),
      makeNumberLearningItem(601, "Same trap: six before cent sounds si, then add the rest: six cent un."),
      makeNumberLearningItem(800, "Pronunciation trap: t in huit is usually silent before cent; huit cents sounds like hui cents."),
      makeNumberLearningItem(801, "Same trap: huit before cent sounds hui; cent loses written s because another number follows."),
      makeNumberLearningItem(999, "A compact test of hundreds + the 90s pattern.")
    ];

    const thousandsLearningItems = [
      makeNumberLearningItem(1000, "1000 is mille, not un mille."),
      makeNumberLearningItem(1001, "Put the rest after mille: mille un."),
      makeNumberLearningItem(1010, "Thousands can be followed directly by tens."),
      makeNumberLearningItem(1100, "Use mille cent for 1,100."),
      makeNumberLearningItem(1200, "cents keeps s when the exact hundred ends the number."),
      makeNumberLearningItem(1201, "cent loses s when another number follows."),
      makeNumberLearningItem(1800, "huit cents keeps s because the hundred ends the number."),
      makeNumberLearningItem(1999, "Useful for years and long-number listening practice."),
      makeNumberLearningItem(2000, "mille never takes s: deux mille."),
      makeNumberLearningItem(2024, "Modern years after 2000 are read normally."),
      makeNumberLearningItem(6000, "Pronunciation trap: x in six is silent before mille; six mille sounds like si mille."),
      makeNumberLearningItem(8000, "Pronunciation trap: t in huit is usually silent before mille; huit mille sounds like hui mille."),
      makeNumberLearningItem(2080, "quatre-vingts keeps s when 80 ends the number."),
      makeNumberLearningItem(2181, "quatre-vingt loses s when 1 follows."),
      makeNumberLearningItem(9999, "A full stress test: thousands + hundreds + 90s.")
    ];

    const yearLearningItems = [
      makeYearLearningItem(1789, "Use en + year for dates and historical years."),
      makeYearLearningItem(1900, "Exact hundreds keep cents with s."),
      makeYearLearningItem(1998, "A common birth-year pattern."),
      makeYearLearningItem(2000, "For 2000, say deux mille."),
      makeYearLearningItem(2001, "After 2000, read the remaining number normally."),
      makeYearLearningItem(2010, "2010 is deux mille dix."),
      makeYearLearningItem(2024, "2024 is deux mille vingt-quatre."),
      makeYearLearningItem(2026, "Useful for the current decade."),
      makeYearLearningItem(2031, "The et un pattern appears again in 31.")
    ];

    const timeHourItems = Array.from({ length: 24 }, (_, hour) => makeHourLearningItem(hour));

    const timeExpressionItems = [
      makeNumberTopicItem("01:15", "une heure et quart", ":15 is et quart in everyday speech.", "Il est une heure et quart."),
      makeNumberTopicItem("13:15", "treize heures quinze", "In 24-hour schedule style, read the minutes directly.", "Le train part à treize heures quinze."),
      makeNumberTopicItem("02:30", "deux heures et demie", ":30 is et demie in everyday speech.", "Il est deux heures et demie."),
      makeNumberTopicItem("14:30", "quatorze heures trente", "In 24-hour schedule style, use trente for :30.", "Le cours commence à quatorze heures trente."),
      makeNumberTopicItem("03:45", "quatre heures moins le quart", ":45 is often the next hour moins le quart in everyday speech.", "Il est quatre heures moins le quart."),
      makeNumberTopicItem("15:45", "quinze heures quarante-cinq", "In 24-hour schedule style, read 45 directly.", "La réunion finit à quinze heures quarante-cinq."),
      makeNumberTopicItem("08:05", "huit heures cinq", "For :05, say the hour plus cinq. In schedules you may see 8 h 05.", "Il est huit heures cinq."),
      makeNumberTopicItem("09:10", "neuf heures dix", "For :10, say the hour plus dix.", "Il est neuf heures dix."),
      makeNumberTopicItem("10:20", "dix heures vingt", "For :20, say the hour plus vingt.", "Il est dix heures vingt."),
      makeNumberTopicItem("11:25", "onze heures vingt-cinq", "For :25, say the hour plus vingt-cinq.", "Il est onze heures vingt-cinq."),
      makeNumberTopicItem("05:35", "six heures moins vingt-cinq", "After :30, everyday speech often counts down to the next hour.", "Il est six heures moins vingt-cinq."),
      makeNumberTopicItem("06:40", "sept heures moins vingt", ":40 can be the next hour moins vingt.", "Il est sept heures moins vingt."),
      makeNumberTopicItem("07:50", "huit heures moins dix", ":50 can be the next hour moins dix.", "Il est huit heures moins dix."),
      makeNumberTopicItem("12:00", "midi", "Noon is midi.", "On mange à midi."),
      makeNumberTopicItem("00:00", "minuit", "Midnight is minuit.", "Je dors à minuit."),
      makeNumberTopicItem("sharp", "pile", "Pile means exactly / on the dot.", "Il est huit heures pile.")
    ];

    const ordinalNumberItems = [
      makeNumberTopicItem("1st", "premier / première", "First is special: premier is masculine, première is feminine.", "C’est mon premier cours. C’est ma première fois.", "premier, première", "/pʁə.mje/ /pʁə.mjɛʁ/"),
      makeNumberTopicItem("2nd", "deuxième / second(e)", "Deuxième is the general word for second. Second/seconde is common when there are only two.", "J’habite au deuxième étage.", "deuxième", "/dø.zjɛm/"),
      makeNumberTopicItem("3rd", "troisième", "Most ordinals add -ième to the number form.", "C’est la troisième question.", "troisième", "/tʁwa.zjɛm/"),
      makeNumberTopicItem("4th", "quatrième", "Drop the final e in quatre before adding -ième.", "C’est le quatrième jour.", "quatrième", "/ka.tʁi.jɛm/"),
      makeNumberTopicItem("5th", "cinquième", "Cinq becomes cinquième with qu.", "C’est la cinquième leçon.", "cinquième", "/sɛ̃.kjɛm/"),
      makeNumberTopicItem("6th", "sixième", "The x in sixième sounds like z.", "C’est le sixième chapitre.", "sixième", "/si.zjɛm/"),
      makeNumberTopicItem("7th", "septième", "Sept becomes septième.", "C’est la septième page.", "septième", "/sɛ.tjɛm/"),
      makeNumberTopicItem("8th", "huitième", "Huit becomes huitième.", "C’est le huitième exemple.", "huitième", "/ɥi.tjɛm/"),
      makeNumberTopicItem("9th", "neuvième", "Neuf changes f to v: neuvième.", "C’est la neuvième rue.", "neuvième", "/nœ.vjɛm/"),
      makeNumberTopicItem("10th", "dixième", "The x in dixième sounds like z.", "C’est le dixième exercice.", "dixième", "/di.zjɛm/"),
      makeNumberTopicItem("11th", "onzième", "Onze becomes onzième.", "C’est la onzième question.", "onzième", "/ɔ̃.zjɛm/"),
      makeNumberTopicItem("12th", "douzième", "Douze becomes douzième.", "C’est le douzième mois.", "douzième", "/du.zjɛm/"),
      makeNumberTopicItem("13th", "treizième", "Treize becomes treizième.", "C’est la treizième phrase.", "treizième", "/tʁɛ.zjɛm/"),
      makeNumberTopicItem("14th", "quatorzième", "Quatorze becomes quatorzième.", "C’est le quatorzième arrondissement.", "quatorzième", "/ka.tɔʁ.zjɛm/"),
      makeNumberTopicItem("15th", "quinzième", "Quinze becomes quinzième.", "C’est la quinzième minute.", "quinzième", "/kɛ̃.zjɛm/"),
      makeNumberTopicItem("16th", "seizième", "Seize becomes seizième.", "C’est le seizième jour.", "seizième", "/sɛ.zjɛm/"),
      makeNumberTopicItem("17th", "dix-septième", "Compound ordinals keep the compound number, then add -ième.", "C’est la dix-septième leçon.", "dix-septième", "/dis.sɛ.tjɛm/"),
      makeNumberTopicItem("18th", "dix-huitième", "Dix-huit becomes dix-huitième.", "C’est le dix-huitième exemple.", "dix-huitième", "/di.zɥi.tjɛm/"),
      makeNumberTopicItem("19th", "dix-neuvième", "Dix-neuf changes to dix-neuvième.", "C’est la dix-neuvième page.", "dix-neuvième", "/diz.nœ.vjɛm/"),
      makeNumberTopicItem("20th", "vingtième", "Vingt becomes vingtième.", "C’est le vingtième siècle.", "vingtième", "/vɛ̃.tjɛm/"),
      makeNumberTopicItem("21st", "vingt et unième", "For numbers ending in 1, use unième after the full number.", "C’est le vingt et unième chapitre.", "vingt et unième"),
      makeNumberTopicItem("30th", "trentième", "Trente becomes trentième.", "C’est la trentième minute.", "trentième", "/tʁɑ̃.tjɛm/"),
      makeNumberTopicItem("80th", "quatre-vingtième", "The final s disappears before -ième: quatre-vingtième.", "C’est le quatre-vingtième anniversaire.", "quatre-vingtième"),
      makeNumberTopicItem("100th", "centième", "Cent becomes centième.", "C’est la centième fois.", "centième", "/sɑ̃.tjɛm/"),
      makeNumberTopicItem("1000th", "millième", "Mille becomes millième.", "C’est le millième visiteur.", "millième", "/mi.ljɛm/")
    ];
