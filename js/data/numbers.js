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

    function makeYearLearningItem(year, note, example = "") {
      const word = frenchNumber(year);
      return {
        number: year,
        word,
        note,
        example: example || `en ${word}`,
        speech: word
      };
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
      makeYearLearningItem(1789, "Use en + year for dates and historical years.", "en mille sept cent quatre-vingt-neuf"),
      makeYearLearningItem(1900, "Exact hundreds keep cents with s.", "en mille neuf cents"),
      makeYearLearningItem(1998, "A common birth-year pattern.", "Je suis né en mille neuf cent quatre-vingt-dix-huit."),
      makeYearLearningItem(2000, "For 2000, say deux mille.", "en deux mille"),
      makeYearLearningItem(2001, "After 2000, read the remaining number normally.", "en deux mille un"),
      makeYearLearningItem(2010, "2010 is deux mille dix.", "en deux mille dix"),
      makeYearLearningItem(2024, "2024 is deux mille vingt-quatre.", "en deux mille vingt-quatre"),
      makeYearLearningItem(2026, "Useful for the current decade.", "Nous sommes en deux mille vingt-six."),
      makeYearLearningItem(2031, "The et un pattern appears again in 31.", "en deux mille trente et un")
    ];
