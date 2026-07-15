    function getPrepositionExamples(item) {
      return item.examples || (item.example ? [{ fr: item.example, en: item.exampleEn }] : []);
    }

    const prepositionFlashcards = allPrepositionItems.flatMap(item =>
      getPrepositionExamples(item).map(example => ({
        fr: example.fr,
        en: example.en,
        context: `${item.fr} = ${item.en}; ${item.note}`
      }))
    );

    const allDeterminerItems = [
      ...articleComparisonRows.flatMap(row => [row.definite, row.indefinite]),
      ...partitiveArticleRows,
      ...aArticleRules,
      ...deArticleRules,
      ...determinerCategories.demonstrative
    ];

    const numberItems = Array.from({ length: 100 }, (_, index) => {
      const n = index + 1;
      return {
        number: n,
        word: frenchNumber(n),
        ipa: frenchNumberIpa(n),
        speech: frenchNumber(n)
      };
    });
    const ageYearItems = Array.from({ length: 20 }, (_, index) => {
      const n = index + 1;
      return {
        number: n,
        word: frenchAgeYearsPhrase(n),
        ipa: frenchAgeYearsIpa(n),
        speech: frenchAgeYearsPhrase(n)
      };
    });
    const calculationOperators = [
      { fr: "plus", en: "plus / add", note: "used for addition", example: "deux plus trois égal cinq", exampleEn: "two plus three equals five" },
      { fr: "moins", en: "minus / subtract", note: "used for subtraction", example: "dix moins quatre égal six", exampleEn: "ten minus four equals six" },
      { fr: "fois", en: "times / multiply", note: "used for multiplication", example: "trois fois quatre égal douze", exampleEn: "three times four equals twelve" },
      { fr: "divisé par", en: "divided by", note: "used for division", example: "huit divisé par deux égal quatre", exampleEn: "eight divided by two equals four" },
      { fr: "égal", en: "equals", note: "used to give the result", example: "sept plus un égal huit", exampleEn: "seven plus one equals eight" }
    ];
    const tensNumberSet = new Set([20, 30, 40, 50, 60, 70, 80, 90]);
    const trickyNumberSet = new Set([11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 31, 41, 51, 61, 70, 71, 72, 79, 80, 81, 90, 91, 99]);

    const grid = document.getElementById("grid");
    const ageYearsGrid = document.getElementById("ageYearsGrid");
    const tensGrid = document.getElementById("tensGrid");
    const trickyNumbersGrid = document.getElementById("trickyNumbersGrid");
    const numberFlashcard = document.getElementById("numberFlashcard");
    const numberFlashcardDigits = document.getElementById("numberFlashcardDigits");
    const numberFlashcardHint = document.getElementById("numberFlashcardHint");
    const numberFlashcardAnswer = document.getElementById("numberFlashcardAnswer");
    const numberFlashcardFrench = document.getElementById("numberFlashcardFrench");
    const numberFlashcardIpa = document.getElementById("numberFlashcardIpa");
    const numberFlashcardRule = document.getElementById("numberFlashcardRule");
    const numberQuizCard = document.getElementById("numberQuizCard");
    const numberQuizPrompt = document.getElementById("numberQuizPrompt");
    const numberQuizInput = document.getElementById("numberQuizInput");
    const numberQuizResult = document.getElementById("numberQuizResult");
    const numberQuizFeedback = document.getElementById("numberQuizFeedback");
    const numberQuizAnswerDigits = document.getElementById("numberQuizAnswerDigits");
    const numberQuizAnswerFrench = document.getElementById("numberQuizAnswerFrench");
    const numberQuizAnswerIpa = document.getElementById("numberQuizAnswerIpa");
    const hundredsLearningGrid = document.getElementById("hundredsLearningGrid");
    const thousandsLearningGrid = document.getElementById("thousandsLearningGrid");
    const yearLearningGrid = document.getElementById("yearLearningGrid");
    const yearQuizCard = document.getElementById("yearQuizCard");
    const yearQuizPrompt = document.getElementById("yearQuizPrompt");
    const yearQuizInput = document.getElementById("yearQuizInput");
    const yearQuizResult = document.getElementById("yearQuizResult");
    const yearQuizFeedback = document.getElementById("yearQuizFeedback");
    const yearQuizAnswerDigits = document.getElementById("yearQuizAnswerDigits");
    const yearQuizAnswerFrench = document.getElementById("yearQuizAnswerFrench");
    const yearQuizAnswerIpa = document.getElementById("yearQuizAnswerIpa");
    const timeHoursGrid = document.getElementById("timeHoursGrid");
    const timeExpressionsGrid = document.getElementById("timeExpressionsGrid");
    const ordinalNumbersGrid = document.getElementById("ordinalNumbersGrid");
    const operatorGrid = document.getElementById("operatorGrid");
    const pronunciationGrid = document.getElementById("pronunciationGrid");
    const consonantPronunciationGrid = document.getElementById("consonantPronunciationGrid");
    const mandatoryLiaisonGrid = document.getElementById("mandatoryLiaisonGrid");
    const optionalLiaisonGrid = document.getElementById("optionalLiaisonGrid");
    const forbiddenLiaisonGrid = document.getElementById("forbiddenLiaisonGrid");
    const hPronunciationGrid = document.getElementById("hPronunciationGrid");
    const connectedSpeechGrid = document.getElementById("connectedSpeechGrid");
    const pronunciationContrastGrid = document.getElementById("pronunciationContrastGrid");
    const pronunciationMatrixGrid = document.getElementById("pronunciationMatrixGrid");
    const pronunciationPracticeGrid = document.getElementById("pronunciationPracticeGrid");
    const codPronounGrid = document.getElementById("codPronounGrid");
    const codTriggerGrid = document.getElementById("codTriggerGrid");
    const codAvoidGrid = document.getElementById("codAvoidGrid");
    const codPatternGrid = document.getElementById("codPatternGrid");
    const coiPronounGrid = document.getElementById("coiPronounGrid");
    const coiTriggerGrid = document.getElementById("coiTriggerGrid");
    const coiAvoidGrid = document.getElementById("coiAvoidGrid");
    const coiPatternGrid = document.getElementById("coiPatternGrid");
    const tonicPronounGrid = document.getElementById("tonicPronounGrid");
    const reflexivePronounGrid = document.getElementById("reflexivePronounGrid");
    const possessiveGrid = document.getElementById("possessiveGrid");
    const possessiveExceptionGrid = document.getElementById("possessiveExceptionGrid");
    const tonicPronounUsageGrid = document.getElementById("tonicPronounUsageGrid");
    const exampleGrid = document.getElementById("exampleGrid");
    const verbGroupStack = document.getElementById("verbGroupStack");
    const passeComposeErGrid = document.getElementById("passeComposeErGrid");
    const passeComposeIrGrid = document.getElementById("passeComposeIrGrid");
    const passeComposeReGrid = document.getElementById("passeComposeReGrid");
    const etreAuxiliaryVerbGrid = document.getElementById("etreAuxiliaryVerbGrid");
    const passeComposeIrregularGrid = document.getElementById("passeComposeIrregularGrid");
    const passeComposePronominalGrid = document.getElementById("passeComposePronominalGrid");
    const grammarFlashcard = document.getElementById("grammarFlashcard");
    const grammarFlashcardEnglish = document.getElementById("grammarFlashcardEnglish");
    const grammarFlashcardHint = document.getElementById("grammarFlashcardHint");
    const grammarFlashcardAnswer = document.getElementById("grammarFlashcardAnswer");
    const grammarFlashcardFrench = document.getElementById("grammarFlashcardFrench");
    const prepositionFlashcard = document.getElementById("prepositionFlashcard");
    const prepositionFlashcardEnglish = document.getElementById("prepositionFlashcardEnglish");
    const prepositionFlashcardHint = document.getElementById("prepositionFlashcardHint");
    const prepositionFlashcardAnswer = document.getElementById("prepositionFlashcardAnswer");
    const prepositionFlashcardFrench = document.getElementById("prepositionFlashcardFrench");
    const prepositionFlashcardContext = document.getElementById("prepositionFlashcardContext");
    const questionWordsGrid = document.getElementById("questionWordsGrid");
    const quiExamplesGrid = document.getElementById("quiExamplesGrid");
    const quelFormsGrid = document.getElementById("quelFormsGrid");
    const quelExamplesGrid = document.getElementById("quelExamplesGrid");
    const quelEtreExamplesGrid = document.getElementById("quelEtreExamplesGrid");
    const quelColorExamplesGrid = document.getElementById("quelColorExamplesGrid");
    const dayQuestionExamplesGrid = document.getElementById("dayQuestionExamplesGrid");
    const timeQuestionExamplesGrid = document.getElementById("timeQuestionExamplesGrid");
    const queExamplesGrid = document.getElementById("queExamplesGrid");
    const queConnectorExamplesGrid = document.getElementById("queConnectorExamplesGrid");
    const queCestExamplesGrid = document.getElementById("queCestExamplesGrid");
    const commentExamplesGrid = document.getElementById("commentExamplesGrid");
    const combienExamplesGrid = document.getElementById("combienExamplesGrid");
    const yaTilExamplesGrid = document.getElementById("yaTilExamplesGrid");
    const nounRulesGrid = document.getElementById("nounRulesGrid");
    const jobGenderRulesGrid = document.getElementById("jobGenderRulesGrid");
    const uncountableNounsGrid = document.getElementById("uncountableNounsGrid");
    const adjectiveFeminineGrid = document.getElementById("adjectiveFeminineGrid");
    const adjectivePluralGrid = document.getElementById("adjectivePluralGrid");
    const adjectivePreposedPluralGrid = document.getElementById("adjectivePreposedPluralGrid");
    const specialAdjectiveGrid = document.getElementById("specialAdjectiveGrid");
    const adverbAmountComparisonGrid = document.getElementById("adverbAmountComparisonGrid");
    const degreeWordsGrid = document.getElementById("degreeWordsGrid");
    const frequencyWordsGrid = document.getElementById("frequencyWordsGrid");
    const transitionWordsGrid = document.getElementById("transitionWordsGrid");
    const yAdverbialPronounGrid = document.getElementById("yAdverbialPronounGrid");
    const enAdverbialPronounGrid = document.getElementById("enAdverbialPronounGrid");
    const caPronounGrid = document.getElementById("caPronounGrid");
    const modifierComparisonGrid = document.getElementById("modifierComparisonGrid");
    const toutAdverbGrid = document.getElementById("toutAdverbGrid");
    const toutFormsGrid = document.getElementById("toutFormsGrid");
    const toutPronounGrid = document.getElementById("toutPronounGrid");
    const corePrepositionTable = document.getElementById("corePrepositionTable");
    const commonPrepositionUsageTable = document.getElementById("commonPrepositionUsageTable");
    const prepositionAArticleGrid = document.getElementById("prepositionAArticleGrid");
    const prepositionDeArticleGrid = document.getElementById("prepositionDeArticleGrid");
    const prepositionTable = document.getElementById("prepositionTable");
    const timePrepositionTable = document.getElementById("timePrepositionTable");
    const dePrepositionVsArticleGrid = document.getElementById("dePrepositionVsArticleGrid");
    const timeSpanComparisonGrid = document.getElementById("timeSpanComparisonGrid");
    const relativeTimeGrid = document.getElementById("relativeTimeGrid");
    const weekdaysGrid = document.getElementById("weekdaysGrid");
    const monthsGrid = document.getElementById("monthsGrid");
    const seasonsGrid = document.getElementById("seasonsGrid");

    const articleComparisonGrid = document.getElementById("articleComparisonGrid");
    const partitiveArticleGrid = document.getElementById("partitiveArticleGrid");
    const partitiveUsageGrid = document.getElementById("partitiveUsageGrid");
    const aArticleGrid = document.getElementById("aArticleGrid");
    const deArticleGrid = document.getElementById("deArticleGrid");
    const demonstrativeGrid = document.getElementById("demonstrativeGrid");

    const voiceSelect = document.getElementById("voiceSelect");
    const rateInput = document.getElementById("rate");
    const rateValue = document.getElementById("rateValue");
    const themeToggle = document.getElementById("themeToggle");
    const stopAudioBtn = document.getElementById("stopAudio");
    const practiceModeToggle = document.getElementById("practiceModeToggle");
    const playbackStatus = document.getElementById("playbackStatus");
    const playbackStatusText = document.getElementById("playbackStatusText");

    const tabButtons = document.querySelectorAll(".tab-btn[data-tab]");
    const sections = document.querySelectorAll(".section[data-tab]");

    const nextNumberFlashcardBtn = document.getElementById("nextNumberFlashcard");
    const playNumberQuizAudioBtn = document.getElementById("playNumberQuizAudio");
    const nextNumberQuizBtn = document.getElementById("nextNumberQuiz");
    const checkNumberQuizAnswerBtn = document.getElementById("checkNumberQuizAnswer");
    const revealNumberQuizAnswerBtn = document.getElementById("revealNumberQuizAnswer");
    const playYearQuizAudioBtn = document.getElementById("playYearQuizAudio");
    const nextYearQuizBtn = document.getElementById("nextYearQuiz");
    const checkYearQuizAnswerBtn = document.getElementById("checkYearQuizAnswer");
    const revealYearQuizAnswerBtn = document.getElementById("revealYearQuizAnswer");
    const previousPrepositionFlashcardBtn = document.getElementById("previousPrepositionFlashcard");
    const nextPrepositionFlashcardBtn = document.getElementById("nextPrepositionFlashcard");
    const previousGrammarFlashcardBtn = document.getElementById("previousGrammarFlashcard");
    const nextGrammarFlashcardBtn = document.getElementById("nextGrammarFlashcard");

    let voices = [];
    let currentCard = null;
    let currentGrammarFlashcard = null;
    let grammarFlashcardDeck = [];
    let currentGrammarFlashcardIndex = 0;
    let grammarFlashcardRevealed = false;
    let currentNumberFlashcard = null;
    let numberFlashcardRevealed = false;
    let currentNumberQuiz = null;
    let numberQuizChecked = false;
    let numberQuizRevealed = false;
    let currentYearQuiz = null;
    let yearQuizChecked = false;
    let yearQuizRevealed = false;
    let currentPrepositionFlashcard = null;
    let prepositionFlashcardDeck = [];
    let currentPrepositionFlashcardIndex = 0;
    let prepositionFlashcardRevealed = false;
    const savedActiveTab = FR.storage.get("frenchStudyActiveTab", "verbs");
    let activeTab = Array.from(tabButtons).some(button => button.dataset.tab === savedActiveTab)
      ? savedActiveTab
      : "verbs";
    const examplePauseMs = 900;
    const numberRepeatPauseMs = 700;
    let playbackToken = 0;
    let playbackTimeout = null;

    function on(target, eventName, handler, options) {
      if (!target || typeof target.addEventListener !== "function") {
        console.warn(`Skipped ${eventName} listener because its target is missing.`);
        return false;
      }
      target.addEventListener(eventName, handler, options);
      return true;
    }

    function updatePlaybackStatus(text = "French audio") {
      if (!playbackStatus) return;
      if (playbackStatusText) playbackStatusText.textContent = text;
      playbackStatus.hidden = false;
    }

    function clearPlaying(hideStatus = true) {
      if (currentCard) currentCard.classList.remove("playing");
      currentCard = null;
      if (hideStatus && playbackStatus) playbackStatus.hidden = true;
    }

    function stopPlayback() {
      playbackToken += 1;
      if (playbackTimeout) {
        clearTimeout(playbackTimeout);
        playbackTimeout = null;
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      clearPlaying();
    }

    function setPlaying(card, text) {
      clearPlaying(false);
      currentCard = card;
      if (currentCard) currentCard.classList.add("playing");
      updatePlaybackStatus(text);
    }

    function updateThemeButton() {
      const isDark = document.body.classList.contains("dark");
      if (!themeToggle) return;
      themeToggle.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    function setTheme(theme) {
      const useDark = theme === "dark";
      document.body.classList.toggle("dark", useDark);
      FR.storage.set("frenchStudyTheme", useDark ? "dark" : "light");
      updateThemeButton();
    }

    function initTheme() {
      const saved = FR.storage.get("frenchStudyTheme");
      if (saved === "dark" || saved === "light") {
        document.body.classList.toggle("dark", saved === "dark");
      } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.body.classList.toggle("dark", prefersDark);
      }
      updateThemeButton();
    }

    function loadVoices() {
      if (!window.speechSynthesis || !voiceSelect) return;
      voices = window.speechSynthesis.getVoices();
      const frenchVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("fr"));
      const usable = frenchVoices.length ? frenchVoices : voices;
      const savedVoice = FR.storage.get("frenchStudyVoice", "");
      const previousValue = voiceSelect.value || savedVoice;
      const preferredVoice = getPreferredVoice(usable);
      voiceSelect.innerHTML = "";

      usable.forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (!previousValue && preferredVoice && voice.name === preferredVoice.name) option.selected = true;
        voiceSelect.appendChild(option);
      });

      if (previousValue) {
        const match = Array.from(voiceSelect.options).find(o => o.value === previousValue);
        if (match) match.selected = true;
      } else if (preferredVoice) {
        voiceSelect.value = preferredVoice.name;
      }
    }

    function isFrenchVoice(voice) {
      return voice.lang && voice.lang.toLowerCase().startsWith("fr");
    }

    function isGoogleVoice(voice) {
      return /google/i.test(`${voice.name} ${voice.voiceURI || ""}`);
    }

    function getPreferredVoice(list = voices) {
      const frenchVoices = list.filter(isFrenchVoice);
      return (
        frenchVoices.find(isGoogleVoice) ||
        frenchVoices[0] ||
        list.find(isGoogleVoice) ||
        list[0] ||
        null
      );
    }

    function getSelectedVoice() {
      const selectedName = voiceSelect ? voiceSelect.value : "";
      return voices.find(v => v.name === selectedName) || getPreferredVoice(voices);
    }

    function setPracticeMode(enabled) {
      document.body.classList.toggle("practice-mode", enabled);
      if (practiceModeToggle) {
        practiceModeToggle.textContent = enabled ? "Study: show English" : "Practice: hide English";
        practiceModeToggle.setAttribute("aria-pressed", String(enabled));
      }
      FR.storage.set("frenchStudyPracticeMode", enabled ? "true" : "false");
    }

    function initStudyPreferences() {
      const savedRate = Number(FR.storage.get("frenchStudyRate", rateInput ? rateInput.value : "0.75"));
      if (rateInput && Number.isFinite(savedRate) && savedRate >= 0.25 && savedRate <= 1.2) {
        rateInput.value = String(savedRate);
      }
      if (rateValue && rateInput) rateValue.textContent = `${Number(rateInput.value).toFixed(2)}x`;
      setPracticeMode(FR.storage.get("frenchStudyPracticeMode", "false") === "true");
    }

    function speak(text, card) {
      speakSequence([{ text }], card);
    }

    function speakWithPause(firstText, secondText, card) {
      const items = [{ text: firstText }];
      if (secondText) items.push({ text: secondText, pauseBefore: examplePauseMs });
      speakSequence(items, card);
    }

    function getExampleVariants(example) {
      return [example, ...(example.variants || [])];
    }

    function speakSequence(items, activeCard = null) {
      if (!window.speechSynthesis) {
        alert("Your browser does not support speech synthesis.");
        return;
      }
      if (!items.length) {
        clearPlaying();
        return;
      }
      stopPlayback();
      const runToken = playbackToken;

      const queue = [...items];
      const voice = getSelectedVoice();
      const rate = Number(rateInput ? rateInput.value : 0.75);

      function speakCurrent(current) {
        if (runToken !== playbackToken) return;
        const utterance = new SpeechSynthesisUtterance(current.text);
        utterance.lang = "fr-FR";
        utterance.rate = rate;
        if (voice) utterance.voice = voice;
        utterance.onend = () => {
          if (runToken !== playbackToken) return;
          next();
        };
        utterance.onerror = () => {
          if (runToken !== playbackToken) return;
          next();
        };
        window.speechSynthesis.speak(utterance);
      }

      function next() {
        if (runToken !== playbackToken) return;
        if (!queue.length) {
          clearPlaying();
          return;
        }
        const current = queue.shift();
        setPlaying(current.card || activeCard || null, current.label || current.text);
        if (current.pauseBefore) {
          playbackTimeout = setTimeout(() => {
            playbackTimeout = null;
            speakCurrent(current);
          }, current.pauseBefore);
          return;
        }
        speakCurrent(current);
      }

      next();
    }
