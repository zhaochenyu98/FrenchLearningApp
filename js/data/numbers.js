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

      return String(n);
    }

    function frenchNumberIpa(n) {
      if (n in basicNumberIpa) return `/${basicNumberIpa[n]}/`;
      if (n === 17) return "/dis.sɛt/";
      if (n === 18) return "/diz.ɥit/";
      if (n === 19) return "/diz.nœf/";
      if (n === 100) return "/sɑ̃/";

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
