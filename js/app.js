(function initializeFrenchLearningApp() {
    const imperativeConfigs = [
      { tableId: "etreImperativeTable", rows: etreImperativeRows },
      { tableId: "avoirImperativeTable", rows: avoirImperativeRows }
    ];

    const studyIndexConfigs = {
      pronunciation: {
        title: "Pronunciation index",
        sections: [
          { id: "vowels", title: "Vowels", open: true, elements: ['[data-study-section="pronunciation-vowels"]', "#pronunciationGrid"] },
          { id: "consonants", title: "Consonants", elements: ['[data-study-section="pronunciation-consonants"]', "#consonantPronunciationGrid"] },
          { id: "liaison", title: "Mandatory liaison", elements: ['[data-study-section="pronunciation-liaison"]', "#mandatoryLiaisonGrid"] },
          { id: "liaison-boundaries", title: "Optional / forbidden liaison", elements: ['[data-study-section="pronunciation-liaison-boundaries"]', "#liaisonBoundaryContent"] },
          { id: "connected-speech", title: "h & connected speech", elements: ['[data-study-section="pronunciation-connected-speech"]', "#hPronunciationGrid", "#connectedSpeechGrid"] },
          { id: "contrasts", title: "Listening contrasts", elements: ['[data-study-section="pronunciation-contrasts"]', "#pronunciationContrastGrid"] },
          { id: "matrix", title: "Consonant + vowel table", elements: ['[data-study-section="pronunciation-matrix-heading"]', '[data-study-section="pronunciation-matrix"]'] },
          { id: "practice", title: "Practice words", elements: ['[data-study-section="pronunciation-practice-heading"]', "#pronunciationPracticeGrid"] }
        ]
      },
      pronouns: {
        title: "Pronoun index",
        sections: [
          { id: "tonic", title: "Tonic pronouns", open: true, elements: ['[data-study-section="pronoun-tonic"]'] },
          { id: "tonic-usage", title: "When to use tonic", elements: ['[data-study-section="pronoun-tonic-usage"]'] },
          { id: "reflexive", title: "Reflexive pronouns", open: true, elements: ['[data-study-section="pronoun-reflexive"]'] },
          { id: "possessive", title: "Possessives", elements: ['[data-study-section="pronoun-possessive"]'] },
          { id: "possessive-exceptions", title: "Possessive exceptions", elements: ['[data-study-section="pronoun-possessive-exceptions"]'] }
        ]
      },
      objects: {
        title: "Object pronoun index",
        sections: [
          { id: "start", title: "Start here", open: true, elements: ['[data-study-section="object-start"]'] },
          { id: "cod", title: "COD", open: true, elements: ['[data-study-section="object-cod"]'] },
          { id: "coi", title: "COI", open: true, elements: ['[data-study-section="object-coi"]'] },
          { id: "y", title: "Y", elements: ['[data-study-section="object-y"]'] },
          { id: "en", title: "En", elements: ['[data-study-section="object-en"]'] },
          { id: "ca", title: "Ça & tonic fallback", elements: ['[data-study-section="object-ca"]'] },
          { id: "placement", title: "Placement & order", elements: ['[data-study-section="object-placement"]'] },
          { id: "contrast", title: "Contrast practice", elements: ['[data-study-section="object-contrast"]'] }
        ]
      },
      grammar: {
        title: "Être / Avoir index",
        sections: [
          { id: "flashcards", title: "Flash cards", open: true, elements: [{ heading: "Être / Avoir flash card test" }] },
          { id: "etre", title: "Être", open: true, elements: [{ heading: "Être — to be" }] },
          { id: "avoir", title: "Avoir", open: true, elements: [{ heading: "Avoir — to have" }] },
          { id: "imperative", title: "Imperative", elements: [{ heading: "Imperative: être and avoir" }] },
          { id: "notes", title: "Notes & examples", elements: ["#grammarSection > .two-col"] }
        ]
      },
      adjectives: {
        title: "Adjective index",
        sections: [
          { id: "quick-notes", title: "Quick notes", open: true, elements: [{ heading: "Quick Notes" }] },
          { id: "feminine", title: "Feminine rules", open: true, elements: [{ heading: "Adjective Feminine Rules" }] },
          { id: "plural", title: "Plural rules", elements: [{ heading: "Adjective Plural Rules" }] },
          { id: "preposed", title: "Before plural noun", elements: [{ heading: "Important: adjective before plural noun" }] },
          { id: "special", title: "Special adjectives", elements: ['[data-study-section="adjective-special"]'] }
        ]
      },
      adverbs: {
        title: "Adverb index",
        sections: [
          { id: "quick-notes", title: "Quick notes", open: true, elements: ['[data-study-section="adverb-quick-notes"]'] },
          { id: "amounts", title: "Amounts & degree", open: true, elements: ['[data-study-section="adverb-amounts"]'] },
          { id: "frequency", title: "Frequency", open: true, elements: ['[data-study-section="adverb-frequency"]'] },
          { id: "transitions", title: "Transitions", open: true, elements: ['[data-study-section="adverb-transitions"]'] },
          { id: "comparison", title: "Bon / bien / beau", open: true, elements: ['[data-study-section="adverb-comparison"]'] },
          { id: "tout", title: "Tout: 3 roles", elements: ['[data-study-section="adverb-tout"]'] }
        ]
      },
      prepositions: {
        title: "Preposition index",
        sections: [
          { id: "flashcards", title: "Flash cards", open: true, elements: ['[data-study-section="preposition-flashcards"]'] },
          { id: "quick-notes", title: "Quick notes", open: true, elements: ['[data-study-section="preposition-quick-notes"]'] },
          { id: "common-usages", title: "Common usages", open: true, elements: ['[data-study-section="preposition-common-usages"]'] },
          { id: "core", title: "Core prepositions", open: true, elements: ['[data-study-section="preposition-core"]'] },
          { id: "article-combos", title: "À / De + articles", open: true, elements: ['[data-study-section="preposition-article-combos"]'] },
          { id: "place", title: "Place phrases", elements: ['[data-study-section="preposition-place"]'] },
          { id: "time", title: "Time duration", elements: ['[data-study-section="preposition-time"]'] },
          { id: "de-vs-article", title: "De vs article", elements: ['[data-study-section="preposition-de-article"]'] }
        ]
      },
      nouns: {
        title: "Noun index",
        sections: [
          { id: "plurals", title: "Plural rules", open: true, elements: ['[data-study-section="nouns-plurals"]'] },
          { id: "uncountable", title: "Uncountable & abstract", open: true, elements: ['[data-study-section="nouns-uncountable"]'] },
          { id: "jobs", title: "Job noun genders", elements: ['[data-study-section="nouns-jobs"]'] }
        ]
      },
      determiners: {
        title: "Determiner index",
        sections: [
          { id: "quick-notes", title: "Quick notes", open: true, elements: ['[data-study-section="determiners-quick-notes"]'] },
          { id: "articles", title: "Articles", open: true, elements: ['[data-study-section="determiners-articles"]'] },
          { id: "partitives", title: "Partitives", open: true, elements: ['[data-study-section="determiners-partitives"]'] },
          { id: "a-de", title: "À / De + articles", elements: ['[data-study-section="determiners-a-de"]'] },
          { id: "demonstratives", title: "Demonstratives", elements: ['[data-study-section="determiners-demonstratives"]'] }
        ],
        cleanupSelectors: [".determiner-sections"]
      },
      questions: {
        title: "Question index",
        sections: [
          { id: "quick-notes", title: "Quick notes", open: true, elements: ['[data-study-section="question-quick-notes"]'] },
          { id: "qui", title: "Qui", open: true, elements: ['[data-study-section="question-qui"]'] },
          { id: "quel", title: "Quel", open: true, elements: ['[data-study-section="question-quel"]'] },
          { id: "que-quoi", title: "Que / Quoi", elements: ['[data-study-section="question-que-quoi"]'] },
          { id: "comment", title: "Comment", elements: ['[data-study-section="question-comment"]'] },
          { id: "combien", title: "Combien", elements: ['[data-study-section="question-combien"]'] },
          { id: "ya-til", title: "Y a-t-il", elements: ['[data-study-section="question-ya-til"]'] },
          { id: "common-reference", title: "Common reference", elements: ['[data-study-section="question-common-reference"]'] }
        ]
      },
      numbers: {
        title: "Number index",
        sections: [
          {
            id: "practice",
            title: "Practice",
            open: true,
            elements: ['[data-study-section="number-flashcard"]', '[data-study-section="number-digit-quiz"]', '[data-study-section="number-year-quiz"]']
          },
          {
            id: "core",
            title: "Core 1–100",
            open: true,
            elements: ['[data-study-section="numbers-1-100"]', '[data-study-section="numbers-ages"]', '[data-study-section="numbers-focus-sets"]']
          },
          {
            id: "large-years",
            title: "Large numbers & years",
            elements: ['[data-study-section="numbers-hundreds"]', '[data-study-section="numbers-thousands"]', '[data-study-section="numbers-years"]']
          },
          {
            id: "time-order",
            title: "Time & order",
            elements: ['[data-study-section="numbers-time"]', '[data-study-section="numbers-ordinals"]']
          },
          { id: "operators", title: "Math operators", elements: ['[data-study-section="numbers-operators"]'] }
        ]
      }
    };

    const tabInitializers = {
      pronunciation() {
        renderPronunciationRules();
        renderConsonantPronunciationRules();
        renderMandatoryLiaisons();
        renderOptionalLiaisons();
        renderForbiddenLiaisons();
        renderHPronunciationRules();
        renderConnectedSpeechRules();
        renderPronunciationContrasts();
        renderPronunciationMatrix();
        renderPronunciationPractice();
        initializeStudyIndex("pronunciation");
      },
      pronouns() {
        renderTonicPronounForms();
        renderReflexivePronounForms();
        renderPossessives();
        renderPossessiveExceptions();
        renderTonicPronounUsage();
        initializeStudyIndex("pronouns");
      },
      objects() {
        FR.renderers.objectPronouns.renderAll();
        renderCodPronounForms();
        renderCodTriggerRules();
        renderCodAvoidRules();
        renderCodPatterns();
        renderCoiPronounForms();
        renderCoiTriggerRules();
        renderCoiAvoidRules();
        renderCoiPatterns();
        renderYAdverbialPronouns();
        renderEnAdverbialPronouns();
        renderCaPronoun();
        initializeStudyIndex("objects");
      },
      pronominal() {
        FR.renderers.pronominalVerbs.render();
      },
      grammar() {
        renderVerbTables("grammar");
        imperativeConfigs.forEach(config => {
          renderImperativeTable(document.getElementById(config.tableId), config.rows);
        });
        renderExamples();
        showGrammarFlashcard();
        initializeStudyIndex("grammar");
      },
      verbs() {
        initializeVerbModeTabs();
        renderVerbStudySections();
        renderVerbTables("verbs");
        initializeVerbGroups();
        renderVerbIndex();
        renderEtreAuxiliaryVerbs();
        renderPasseComposeGroups();
        initializeTenseIndex();
        FR.renderers.imparfait.render();
      },
      nouns() {
        renderNounPluralRules();
        renderUncountableNounExamples();
        renderJobGenderRules();
        initializeStudyIndex("nouns");
      },
      adjectives() {
        renderAdjectiveFeminineRules();
        renderAdjectivePluralRules();
        renderAdjectivePreposedPluralRules();
        renderSpecialAdjectiveForms();
        initializeStudyIndex("adjectives");
      },
      adverbs() {
        renderAdverbAmountComparison();
        renderDegreeWords();
        renderFrequencyWords();
        renderTransitionWords();
        renderModifierComparison();
        renderToutAdverbUsage();
        renderToutAdverbPhrases();
        renderToutForms();
        renderToutPronouns();
        initializeStudyIndex("adverbs");
      },
      prepositions() {
        showPrepositionFlashcard();
        renderPrepositions();
        initializeStudyIndex("prepositions");
      },
      determiners() {
        renderArticleComparison();
        renderPartitiveArticles();
        renderPartitiveUsageRules();
        renderDeterminerCards(aArticleGrid, aArticleRules);
        renderDeterminerCards(deArticleGrid, deArticleRules);
        renderDemonstrativeTable();
        initializeStudyIndex("determiners");
      },
      questions() {
        renderQuiExamples();
        renderQuelForms();
        renderQuelExamples();
        renderQuelEtreExamples();
        renderQuelColorExamples();
        renderDayQuestionExamples();
        renderTimeQuestionExamples();
        renderQueExamples();
        renderQueConnectorExamples();
        renderQueCestExamples();
        renderCommentExamples();
        renderCombienExamples();
        renderYaTilExamples();
        renderQuestionWords();
        initializeStudyIndex("questions");
      },
      numbers() {
        showNumberFlashcard();
        showNumberQuiz();
        showYearQuiz();
        renderNumbers();
        renderAgeYears();
        renderLargeNumberSections();
        renderTimeSections();
        renderOrdinalNumbers();
        renderOperators();
        initializeStudyIndex("numbers");
      },
      calendar() {
        renderTimeSpanComparisons();
        renderCalendarCards(relativeTimeGrid, relativeTimeWords, "No relative time words available.");
        renderCalendarCards(weekdaysGrid, weekdays, "No days available.");
        renderCalendarCards(monthsGrid, months, "No months available.");
        renderCalendarCards(seasonsGrid, seasons, "No seasons available.");
      }
    };

    const initializedTabs = new Set();
    const studySectionStateKey = "frenchStudySectionState";
    const verbGroupStateKey = "frenchStudyVerbGroupState";

    function getPreferredScrollBehavior() {
      return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
    }

    function rememberStudyCard(card) {
      if (!card || !card.id) return;
      const state = FR.storage.getJson(studySectionStateKey, {});
      state[card.id] = card.open;
      FR.storage.setJson(studySectionStateKey, state);
    }

    function restoreStudyCard(card, defaultOpen) {
      const state = FR.storage.getJson(studySectionStateKey, {});
      card.open = typeof state[card.id] === "boolean" ? state[card.id] : defaultOpen;
      on(card, "toggle", () => rememberStudyCard(card));
    }

    function initializeMobileIndex(aside) {
      if (!aside || aside.querySelector(".mobile-index-toggle")) return;
      const title = aside.querySelector(".verb-index-title, .study-index-title");
      if (!title) return;

      const toggle = document.createElement("button");
      toggle.className = "mobile-index-toggle";
      toggle.type = "button";
      toggle.textContent = "Show index";
      toggle.setAttribute("aria-expanded", "false");
      title.insertAdjacentElement("afterend", toggle);

      on(toggle, "click", () => {
        const expanded = !aside.classList.contains("mobile-index-open");
        aside.classList.toggle("mobile-index-open", expanded);
        toggle.textContent = expanded ? "Hide index" : "Show index";
        toggle.setAttribute("aria-expanded", String(expanded));
      });

      on(aside, "click", event => {
        if (!event.target.closest(".verb-index-link, .study-index-link")) return;
        if (!window.matchMedia || !window.matchMedia("(max-width: 860px)").matches) return;
        aside.classList.remove("mobile-index-open");
        toggle.textContent = "Show index";
        toggle.setAttribute("aria-expanded", "false");
      });
    }

    function applyLanguageMetadata(root) {
      if (!root) return;
      root.querySelectorAll([
        ".french-line",
        ".noun-example-main",
        ".pronoun-main",
        ".conjugation-main",
        ".verb-form-main",
        ".adjective-form-main",
        ".preposition-main",
        ".pronunciation-word-fr",
        ".number-word",
        ".calendar-word",
        ".agreement-form-main",
        ".agreement-form-ipa"
      ].join(",")).forEach(element => {
        element.lang = "fr";
      });
      root.querySelectorAll(".pronunciation-rule, .pronunciation-word-zh, .tonic-pronoun-zh").forEach(element => {
        element.lang = "zh-Hans";
      });
    }

    function getErrorMessage(error) {
      return error && error.message ? error.message : String(error);
    }

    function createInlineError(title, error) {
      const card = document.createElement("div");
      card.className = "inline-error-card";
      card.setAttribute("role", "alert");
      card.innerHTML = `
        <strong>${title}</strong>
        <span>${getErrorMessage(error)}</span>
      `;
      return card;
    }

    function renderInlineError(container, title, error) {
      if (!container) return;
      container.replaceChildren(createInlineError(title, error));
      console.error(title, error);
    }

    function initializeVerbModeTabs() {
      const buttons = Array.from(document.querySelectorAll(".verb-mode-btn[data-verb-mode]"));
      const panels = Array.from(document.querySelectorAll(".verb-mode-panel[data-verb-mode-panel]"));
      if (!buttons.length || !panels.length) return;

      function activateMode(mode) {
        buttons.forEach(button => {
          const isActive = button.dataset.verbMode === mode;
          button.classList.toggle("active", isActive);
          button.setAttribute("aria-selected", String(isActive));
          button.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach(panel => {
          const isActive = panel.dataset.verbModePanel === mode;
          panel.classList.toggle("active", isActive);
          panel.hidden = !isActive;
        });
        FR.storage.set("frenchStudyVerbMode", mode);
      }

      buttons.forEach((button, index) => {
        if (button.dataset.initialized === "true") return;
        button.dataset.initialized = "true";
        button.addEventListener("click", () => {
          stopPlayback();
          activateMode(button.dataset.verbMode);
        });
        button.addEventListener("keydown", event => {
          const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
          if (!keys.includes(event.key)) return;
          event.preventDefault();
          const nextIndex = event.key === "Home"
            ? 0
            : event.key === "End"
              ? buttons.length - 1
              : (index + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
          buttons[nextIndex].focus();
          stopPlayback();
          activateMode(buttons[nextIndex].dataset.verbMode);
        });
      });

      const savedMode = FR.storage.get("frenchStudyVerbMode", "verb");
      const initialMode = buttons.some(button => button.dataset.verbMode === savedMode)
        ? savedMode
        : buttons[0].dataset.verbMode;
      activateMode(initialMode);
    }

    const impersonalVerbSyncMap = new Map([
      ["il faut", "falloir"],
      ["il y a", "avoir"],
      ["il fait", "faire"],
      ["il est", "être"]
    ]);

    function canonicalStudyVerbName(value) {
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’‘]/g, "'")
        .toLowerCase()
        .replace(/^s'/, "se ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function getVerbTenseInfinitive(item) {
      return item.syncInfinitive || impersonalVerbSyncMap.get(item.label) || item.label;
    }

    function findPasseComposeVerb(item) {
      if (Object.prototype.hasOwnProperty.call(item, "passeCompose")) return item.passeCompose;
      const target = canonicalStudyVerbName(getVerbTenseInfinitive(item));
      return passeComposeGroups
        .flatMap(group => group.verbs)
        .find(verb => canonicalStudyVerbName(verb.infinitive) === target);
    }

    function findEtreAuxiliaryVerb(item) {
      if (Object.prototype.hasOwnProperty.call(item, "etreAuxiliary")) return item.etreAuxiliary;
      const target = canonicalStudyVerbName(getVerbTenseInfinitive(item));
      return etreAuxiliaryVerbs.find(verb => canonicalStudyVerbName(verb.infinitive) === target);
    }

    function appendCompactTenseExampleList(parent, sentences) {
      const list = document.createElement("div");
      list.className = "verb-tense-example-list";

      sentences.forEach(sentence => {
        const button = document.createElement("button");
        button.className = "verb-tense-example-btn";
        button.type = "button";
        button.innerHTML = `
          <span class="tiny-label">${sentence.label}</span>
          <span class="noun-example-main">${sentence.fr}</span>
          <span class="translation">${sentence.en || ""}</span>
        `;
        button.addEventListener("click", () => {
          speakSequence([{ text: sentence.fr }], button);
        });
        list.appendChild(button);
      });

      parent.appendChild(list);
    }

    function appendCompactTenseSequence(parent, title, note, example) {
      if (!example) return;
      const block = document.createElement("div");
      block.className = "verb-tense-usage";
      block.innerHTML = `
        <div class="tiny-label">${title}</div>
        ${note ? `<div class="grammar-note">${note}</div>` : ""}
      `;

      const button = document.createElement("button");
      button.className = "verb-tense-example-btn verb-tense-sequence-btn";
      button.type = "button";
      const forms = getEtreAuxiliaryExampleForms(example);
      button.innerHTML = forms.map(sentence => `
        <span class="tiny-label">${sentence.label}</span>
        <span class="noun-example-main">${sentence.fr}</span>
        <span class="translation">${sentence.en || ""}</span>
      `).join("");
      button.addEventListener("click", () => {
        speakSequence(forms.map((sentence, index) => ({
          text: sentence.fr,
          pauseBefore: index === 0 ? 0 : examplePauseMs
        })), button);
      });

      block.appendChild(button);
      parent.appendChild(block);
    }

    function createVerbPasseComposeSummary(item) {
      const tenseVerb = findPasseComposeVerb(item);
      const etreVerb = findEtreAuxiliaryVerb(item);
      if (!tenseVerb && !etreVerb) return null;

      const primaryVerb = tenseVerb || etreVerb;
      const details = document.createElement("details");
      details.className = "verb-tense-summary";

      const summary = document.createElement("summary");
      summary.className = "verb-tense-summary-toggle";
      summary.innerHTML = `
        <span>Passé composé</span>
        <span class="verb-tense-summary-form">
          ${primaryVerb.auxiliary || "être"} + ${primaryVerb.pastParticiple}
          ${primaryVerb.pastParticipleIpa ? `<span class="tense-ipa">${primaryVerb.pastParticipleIpa}</span>` : ""}
        </span>
      `;

      const body = document.createElement("div");
      body.className = "verb-tense-summary-body";

      const formButton = document.createElement("button");
      formButton.className = "verb-tense-form-btn";
      formButton.type = "button";
      formButton.innerHTML = `
        <span class="noun-example-main">${primaryVerb.infinitive}</span>
        ${primaryVerb.infinitiveIpa ? `<span class="tense-ipa">${primaryVerb.infinitiveIpa}</span>` : ""}
        <span class="noun-example-main">→ ${primaryVerb.pastParticiple}</span>
        ${primaryVerb.pastParticipleIpa ? `<span class="tense-ipa">${primaryVerb.pastParticipleIpa}</span>` : ""}
      `;
      formButton.addEventListener("click", () => {
        speakSequence([
          { text: primaryVerb.infinitive },
          { text: getPastParticipleSpeech(primaryVerb), pauseBefore: examplePauseMs }
        ], formButton);
      });
      body.appendChild(formButton);

      if (tenseVerb) {
        const usage = document.createElement("div");
        usage.className = "verb-tense-usage";
        usage.innerHTML = `
          <div class="tiny-label">Core past form</div>
          <div class="grammar-note">${tenseVerb.note || tenseVerb.pattern || ""}</div>
        `;
        appendCompactTenseExampleList(usage, getPasseComposeSentenceForms(tenseVerb));
        body.appendChild(usage);
      }

      if (etreVerb && tenseVerb && tenseVerb.auxiliary !== "être") {
        appendCompactTenseSequence(body, "Être movement use", etreVerb.note, etreVerb.etreExamples[0]);
      }

      if (etreVerb && etreVerb.avoirExamples && tenseVerb && tenseVerb.auxiliary === "être") {
        appendCompactTenseSequence(body, "Avoir contrast", etreVerb.avoirNote, etreVerb.avoirExamples[0]);
      }

      if (etreVerb && !tenseVerb) {
        appendCompactTenseSequence(body, "Être movement use", etreVerb.note, etreVerb.etreExamples[0]);
      }

      details.append(summary, body);
      return details;
    }

    function createVerbImparfaitSummary(item) {
      const imparfait = FR.data.imparfait && FR.data.imparfait.getItem(item.key);
      if (!imparfait || !imparfait.rows || !imparfait.rows.length) return null;

      const details = document.createElement("details");
      details.className = "verb-tense-summary verb-imparfait-summary";

      const sample = imparfait.rows.find(row => row.pronoun === "je") || imparfait.rows[0];
      const summary = document.createElement("summary");
      summary.className = "verb-tense-summary-toggle";
      summary.innerHTML = `
        <span>Imparfait</span>
        <span class="verb-tense-summary-form">${sample.full}</span>
      `;

      const body = document.createElement("div");
      body.className = "verb-tense-summary-body";

      const formula = document.createElement("div");
      formula.className = "grammar-note";
      formula.innerHTML = `<strong>Formula:</strong> ${imparfait.formula.text}`;
      body.appendChild(formula);

      const createImparfaitFormCard = row => {
        const card = document.createElement("div");
        card.className = "verb-cell-card";
        const button = document.createElement("button");
        button.className = "verb-tense-form-btn verb-imparfait-form-btn";
        button.type = "button";
        button.setAttribute("aria-label", `Play Imparfait: ${row.full}`);
        button.innerHTML = `
          <span class="tiny-label">${row.pronoun}</span>
          <span class="noun-example-main">${row.full}</span>
          ${row.ipa ? `<span class="verb-ipa">${row.ipa}</span>` : ""}
        `;
        button.addEventListener("click", () => {
          speakSequence([{ text: row.speech || row.full }], button);
        });
        card.appendChild(button);
        return card;
      };

      if (imparfait.rows.length === 1) {
        const fixedForm = document.createElement("div");
        fixedForm.className = "verb-extra-column verb-tense-fixed-form";
        const fixedTitle = document.createElement("div");
        fixedTitle.className = "verb-column-title";
        fixedTitle.textContent = "Fixed impersonal form";
        fixedForm.append(fixedTitle, createImparfaitFormCard(imparfait.rows[0]));
        body.appendChild(fixedForm);
      } else {
        const matrix = document.createElement("div");
        matrix.className = "verb-matrix verb-tense-mini-matrix";
        matrix.setAttribute("role", "table");
        matrix.setAttribute("aria-label", `${item.label}: Imparfait conjugation`);

        const matrixHeader = document.createElement("div");
        matrixHeader.className = "verb-pair-header";
        matrixHeader.setAttribute("role", "row");
        ["Singular", "Plural"].forEach(label => {
          const cell = document.createElement("div");
          cell.setAttribute("role", "columnheader");
          cell.textContent = label;
          matrixHeader.appendChild(cell);
        });
        matrix.appendChild(matrixHeader);

        FR.data.imparfait.alignedPairs.forEach(pair => {
          const pairRow = document.createElement("div");
          pairRow.className = "verb-pair-row";
          pairRow.setAttribute("role", "row");
          pair.forEach(pronoun => {
            const row = imparfait.rows.find(entry => entry.pronoun === pronoun);
            if (row) {
              const card = createImparfaitFormCard(row);
              card.setAttribute("role", "cell");
              pairRow.appendChild(card);
              return;
            }
            const placeholder = document.createElement("div");
            placeholder.className = "verb-cell-placeholder";
            placeholder.setAttribute("role", "cell");
            placeholder.innerHTML = `<span class="tiny-label">${pronoun}</span><span>Not used for this verb</span>`;
            pairRow.appendChild(placeholder);
          });
          matrix.appendChild(pairRow);
        });
        body.appendChild(matrix);

        const onRow = imparfait.rows.find(row => row.pronoun === "on");
        if (onRow) {
          const onColumn = document.createElement("div");
          onColumn.className = "verb-extra-column verb-tense-on-form";
          const onTitle = document.createElement("div");
          onTitle.className = "verb-column-title";
          onTitle.textContent = "On: spoken French";
          onColumn.append(onTitle, createImparfaitFormCard(onRow));
          body.appendChild(onColumn);
        }
      }

      if (imparfait.examples) {
        const usage = document.createElement("div");
        usage.className = "verb-tense-usage";
        usage.innerHTML = `<div class="tiny-label">Sentence practice</div>`;
        appendCompactTenseExampleList(usage, [
          { label: "Statement", ...imparfait.examples.statement },
          { label: "Negative", ...imparfait.examples.negative },
          { label: "Question", ...imparfait.examples.question }
        ].filter(sentence => sentence.fr));
        body.appendChild(usage);
      }

      if (imparfait.specialRules.length) {
        const noteList = document.createElement("div");
        noteList.className = "verb-imparfait-notes";
        imparfait.specialRules.forEach(rule => {
          const note = document.createElement("div");
          note.className = "verb-form-highlight";
          note.innerHTML = `<strong>${rule.title}</strong><span>${rule.note}</span>`;
          noteList.appendChild(note);
        });
        body.appendChild(noteList);
      }

      details.append(summary, body);
      return details;
    }

    function createVerbImperativeSummary(item) {
      const imperative = FR.data.imperative && FR.data.imperative.getItem(item.key);
      if (!imperative || !Array.isArray(imperative.rows) || !imperative.rows.length) return null;

      const details = document.createElement("details");
      details.className = "verb-tense-summary verb-imperative-summary";

      const sample = imperative.rows.find(row => row.person === "tu") || imperative.rows[0];
      const summary = document.createElement("summary");
      summary.className = "verb-tense-summary-toggle";
      summary.innerHTML = `
        <span>Imperative</span>
        <span class="verb-tense-summary-form">${sample.form}</span>
      `;

      const body = document.createElement("div");
      body.className = "verb-tense-summary-body";

      const rule = document.createElement("div");
      rule.className = "grammar-note";
      rule.innerHTML = `<strong>Command forms:</strong> use tu, nous, or vous without saying the subject pronoun.`;
      body.appendChild(rule);

      const formGrid = document.createElement("div");
      formGrid.className = "imperative-grid verb-imperative-form-grid";
      imperative.rows.forEach(row => {
        const button = document.createElement("button");
        button.className = "verb-tense-form-btn verb-imperative-form-btn";
        button.type = "button";
        button.setAttribute("aria-label", `Play Imperative: ${row.form}`);
        button.innerHTML = `
          <span class="tiny-label">${row.person}</span>
          <span class="noun-example-main">${row.form}</span>
          ${row.ipa ? `<span class="verb-ipa">${row.ipa}</span>` : ""}
        `;
        button.addEventListener("click", () => {
          speakSequence([{ text: row.speech || row.form }], button);
        });
        formGrid.appendChild(button);
      });
      body.appendChild(formGrid);

      if (imperative.note) {
        const note = document.createElement("div");
        note.className = "verb-form-highlight";
        note.innerHTML = `<strong>Usage note</strong><span>${imperative.note}</span>`;
        body.appendChild(note);
      }

      if (imperative.examples) {
        const usage = document.createElement("div");
        usage.className = "verb-tense-usage";
        usage.innerHTML = `<div class="tiny-label">Command examples</div>`;
        appendCompactTenseExampleList(usage, [
          { label: "Affirmative", ...imperative.examples.affirmative },
          { label: "Negative", ...imperative.examples.negative }
        ].filter(sentence => sentence.fr));
        body.appendChild(usage);
      }

      details.append(summary, body);
      return details;
    }

    function getVerbTableId(item) {
      return item.tableId || `${item.key}Table`;
    }

    function appendFaireExpressions(panel) {
      const heading = document.createElement("div");
      heading.className = "verb-subtable-heading";

      const copy = document.createElement("div");
      copy.innerHTML = `
        <h4>Common faire expressions</h4>
        <p>These expressions are best learned as phrases. They do not need every pronoun form.</p>
      `;

      const table = document.createElement("div");
      table.id = "faireExpressionsTable";
      table.className = "noun-rules-table";

      heading.append(copy);
      panel.append(heading, table);
      try {
        renderFaireExpressionTable(table);
      } catch (error) {
        renderInlineError(table, "Faire expressions failed to render", error);
      }
    }

    function createVerbStudyPanel(item) {
      if (!item || !item.key || !item.title || !item.rows) {
        throw new Error("Verb item needs key, title, and rows.");
      }

      const panel = document.createElement("div");
      panel.className = "panel verb-panel";
      panel.id = item.panelId || `${item.key}VerbPanel`;
      panel.tabIndex = -1;

      const heading = document.createElement("h3");
      heading.append(item.title);
      if (item.tag) {
        const tag = document.createElement("span");
        tag.className = "translation";
        tag.textContent = `(${item.tag})`;
        heading.append(" ", tag);
      }

      const header = document.createElement("div");
      header.className = "verb-panel-header";
      header.append(heading);

      const description = document.createElement("p");
      description.innerHTML = item.descriptionHtml || "";

      const highlights = document.createElement("div");
      highlights.className = "verb-form-highlights";
      (item.presentHighlights || []).forEach(note => {
        const callout = document.createElement("div");
        callout.className = "verb-form-highlight";
        callout.innerHTML = `
          <span class="tiny-label">Spelling / pronunciation watch</span>
          <span>${note}</span>
        `;
        highlights.appendChild(callout);
      });

      const table = document.createElement("div");
      table.id = getVerbTableId(item);
      table.className = "verb-matrix";

      panel.append(header, description);
      if (highlights.children.length) panel.appendChild(highlights);
      panel.appendChild(table);

      const imparfaitSummary = createVerbImparfaitSummary(item);
      if (imparfaitSummary) panel.appendChild(imparfaitSummary);

      const tenseSummary = createVerbPasseComposeSummary(item);
      if (tenseSummary) panel.appendChild(tenseSummary);

      const imperativeSummary = createVerbImperativeSummary(item);
      if (imperativeSummary) panel.appendChild(imperativeSummary);

      (item.extras || []).forEach(extra => {
        if (extra === "faireExpressions") appendFaireExpressions(panel);
      });

      return panel;
    }

    function renderVerbStudySections() {
      if (!verbGroupStack) return;
      verbGroupStack.replaceChildren();

      FR.data.verbs.groups
        .filter(group => group.key !== "pronominal")
        .forEach((group, index) => {
        const groupPanel = document.createElement("div");
        groupPanel.className = "category-panel verb-group";
        groupPanel.dataset.verbGroup = group.key;

        const header = document.createElement("div");
        header.className = "verb-group-header";

        const intro = document.createElement("div");
        const heading = document.createElement("h3");
        heading.textContent = group.title;
        const description = document.createElement("p");
        description.innerHTML = group.descriptionHtml || "";
        intro.append(heading, description);

        const toggle = document.createElement("button");
        toggle.className = "verb-group-toggle";
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", index === 0 ? "true" : "false");
        toggle.textContent = index === 0 ? "Collapse" : "Expand";
        header.append(intro, toggle);

        const content = document.createElement("div");
        content.className = "verb-group-content";

        const groupItems = FR.data.verbs.items
          .filter(item => item.group === group.key)
          .sort((a, b) => a.label.localeCompare(b.label, "fr"));
        if (!groupItems.length) {
          content.appendChild(createInlineError(`${group.title} has no verbs`, "Add at least one verbStudyItems entry for this group."));
        }

        groupItems.forEach(item => {
          try {
            content.appendChild(createVerbStudyPanel(item));
          } catch (error) {
            content.appendChild(createInlineError(`${item && item.label ? item.label : "Verb"} failed to render`, error));
          }
        });

        groupPanel.append(header, content);
        verbGroupStack.appendChild(groupPanel);
        });
    }

    function renderVerbTables(tabName) {
      FR.data.verbs.configs
        .filter(config => config.tab === tabName && !(tabName === "verbs" && config.group === "pronominal"))
        .forEach(config => {
          const table = document.getElementById(config.tableId);
          if (!table) {
            const fallback = tabName === "verbs" ? verbGroupStack : document.getElementById(`${tabName}Section`);
            if (fallback) fallback.appendChild(createInlineError(`Missing table for ${config.label || config.tableId}`, `Expected #${config.tableId}.`));
            return;
          }
          try {
            renderVerbTable(table, config.rows);
          } catch (error) {
            renderInlineError(table, `${config.label || config.tableId} failed to render`, error);
          }
        });
    }

    function getVerbPanel(config) {
      const table = document.getElementById(config.tableId);
      const panel = table ? table.closest(".verb-panel") : null;
      if (!panel) return null;
      panel.id = panel.id || `${config.tableId.replace(/Table$/, "")}VerbPanel`;
      panel.tabIndex = -1;
      return panel;
    }

    function setVerbGroupCollapsed(group, collapsed, persist = true) {
      if (!group) return;
      const toggle = group.querySelector(".verb-group-toggle");
      group.classList.toggle("collapsed", collapsed);
      if (!toggle) return;
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.textContent = collapsed ? "Expand" : "Collapse";
      if (persist && group.dataset.verbGroup) {
        const state = FR.storage.getJson(verbGroupStateKey, {});
        state[group.dataset.verbGroup] = collapsed;
        FR.storage.setJson(verbGroupStateKey, state);
      }
    }

    function initializeVerbGroups() {
      const savedState = FR.storage.getJson(verbGroupStateKey, {});
      document.querySelectorAll("#verbsSection .verb-group").forEach((group, index) => {
        const savedCollapsed = savedState[group.dataset.verbGroup];
        setVerbGroupCollapsed(group, typeof savedCollapsed === "boolean" ? savedCollapsed : index > 0, false);
        const toggle = group.querySelector(".verb-group-toggle");
        if (!toggle || toggle.dataset.initialized === "true") return;
        toggle.dataset.initialized = "true";
        toggle.addEventListener("click", () => {
          setVerbGroupCollapsed(group, !group.classList.contains("collapsed"));
        });
      });
    }

    function setAllVerbGroupsCollapsed(collapsed) {
      document.querySelectorAll("#verbsSection .verb-group").forEach(group => {
        setVerbGroupCollapsed(group, collapsed);
      });
    }

    function renderVerbIndex() {
      const index = document.getElementById("verbIndex");
      if (!index) return;
      index.replaceChildren();

      const controls = document.createElement("div");
      controls.className = "study-index-controls";

      const expandAll = document.createElement("button");
      expandAll.className = "study-index-control";
      expandAll.type = "button";
      expandAll.textContent = "Expand all";
      expandAll.addEventListener("click", () => {
        stopPlayback();
        setAllVerbGroupsCollapsed(false);
      });

      const collapseAll = document.createElement("button");
      collapseAll.className = "study-index-control";
      collapseAll.type = "button";
      collapseAll.textContent = "Collapse all";
      collapseAll.addEventListener("click", () => {
        stopPlayback();
        setAllVerbGroupsCollapsed(true);
      });

      controls.append(expandAll, collapseAll);
      index.appendChild(controls);

      const configs = FR.data.verbs.configs.filter(config => config.tab === "verbs" && config.group !== "pronominal");
      FR.data.verbs.groups.filter(group => group.key !== "pronominal").forEach(group => {
        const groupConfigs = configs.filter(config => config.group === group.key);
        if (!groupConfigs.length) return;

        const groupBlock = document.createElement("div");
        groupBlock.className = "verb-index-group";

        const title = document.createElement("div");
        title.className = "verb-index-group-title";
        title.textContent = group.indexTitle || group.title;
        groupBlock.appendChild(title);

        const links = document.createElement("div");
        links.className = "verb-index-links";

        [...groupConfigs]
          .sort((a, b) => a.label.localeCompare(b.label, "fr"))
          .forEach(config => {
            const panel = getVerbPanel(config);
            if (!panel) return;

            const button = document.createElement("button");
            button.className = "verb-index-link";
            button.type = "button";
            button.textContent = config.label;
            button.addEventListener("click", () => {
              stopPlayback();
              setVerbGroupCollapsed(panel.closest(".verb-group"), false);
              panel.scrollIntoView({ behavior: getPreferredScrollBehavior(), block: "start" });
              panel.focus({ preventScroll: true });
            });
            links.appendChild(button);
          });

        groupBlock.appendChild(links);
        index.appendChild(groupBlock);
      });
      initializeMobileIndex(index.closest(".verb-index"));
    }

    function initializeTenseIndex() {
      const section = document.getElementById("tenseSection");
      if (!section || section.querySelector(".study-nav-layout")) return;

      const layout = document.createElement("div");
      layout.className = "study-nav-layout";

      const aside = document.createElement("aside");
      aside.className = "study-index";
      aside.setAttribute("aria-label", "Passé composé index");

      const title = document.createElement("div");
      title.className = "study-index-title";
      title.textContent = "Passé composé index";

      const controls = document.createElement("div");
      controls.className = "study-index-controls";

      const expandAll = document.createElement("button");
      expandAll.className = "study-index-control";
      expandAll.type = "button";
      expandAll.textContent = "Expand all";

      const collapseAll = document.createElement("button");
      collapseAll.className = "study-index-control";
      collapseAll.type = "button";
      collapseAll.textContent = "Collapse all";

      controls.append(expandAll, collapseAll);

      const links = document.createElement("div");
      links.className = "verb-index-groups";

      aside.append(title, controls, links);

      const stack = document.createElement("div");
      stack.className = "study-section-stack";

      const cards = [];
      const quickNotes = resolveStudyElement(section, '[data-study-section="tense-quick-notes"]');
      if (quickNotes) {
        const quickCard = document.createElement("details");
        quickCard.className = "study-collapse-card";
        quickCard.id = "tense-quick-notes-study-card";
        restoreStudyCard(quickCard, true);

        const summary = document.createElement("summary");
        summary.className = "study-collapse-summary";
        summary.textContent = "Quick notes";

        const body = document.createElement("div");
        body.className = "study-collapse-body";
        body.appendChild(quickNotes);

        quickCard.append(summary, body);
        stack.appendChild(quickCard);
        links.appendChild(createStudyIndexButton("Quick notes", quickCard));
        cards.push(quickCard);
      }

      const etreAuxiliarySection = resolveStudyElement(section, '[data-study-section="tense-etre-auxiliary"]');
      if (etreAuxiliarySection) {
        const etreCard = document.createElement("details");
        etreCard.className = "study-collapse-card";
        etreCard.id = "tense-etre-auxiliary-study-card";
        restoreStudyCard(etreCard, true);

        const summary = document.createElement("summary");
        summary.className = "study-collapse-summary";
        summary.textContent = "17 verbs that usually use être";

        const body = document.createElement("div");
        body.className = "study-collapse-body";
        body.appendChild(etreAuxiliarySection);

        etreCard.append(summary, body);
        stack.appendChild(etreCard);
        cards.push(etreCard);

        const groupBlock = document.createElement("div");
        groupBlock.className = "verb-index-group";

        const groupTitle = document.createElement("div");
        groupTitle.className = "verb-index-group-title";
        groupTitle.textContent = "17 être verbs";
        groupBlock.appendChild(groupTitle);

        const groupLinks = document.createElement("div");
        groupLinks.className = "verb-index-links";

        etreAuxiliaryVerbs.forEach(verb => {
          const button = document.createElement("button");
          button.className = "verb-index-link";
          button.type = "button";
          button.textContent = verb.infinitive;
          button.addEventListener("click", () => {
            stopPlayback();
            etreCard.open = true;
            const target = document.getElementById(getEtreAuxiliaryVerbId(verb));
            (target || etreCard).scrollIntoView({ behavior: getPreferredScrollBehavior(), block: "start" });
            if (target) target.focus({ preventScroll: true });
          });
          groupLinks.appendChild(button);
        });

        groupBlock.appendChild(groupLinks);
        links.appendChild(groupBlock);
      }

      passeComposeGroups
        .filter(group => group.key !== "pronominal")
        .forEach((group, groupIndex) => {
        const element = resolveStudyElement(section, `[data-study-section="tense-${group.key}"]`);
        if (!element) return;

        const card = document.createElement("details");
        card.className = "study-collapse-card";
        card.id = `tense-${group.key}-study-card`;
        restoreStudyCard(card, groupIndex === 0);

        const summary = document.createElement("summary");
        summary.className = "study-collapse-summary";
        summary.textContent = group.title;

        const body = document.createElement("div");
        body.className = "study-collapse-body";
        body.appendChild(element);

        card.append(summary, body);
        stack.appendChild(card);
        cards.push(card);

        const groupBlock = document.createElement("div");
        groupBlock.className = "verb-index-group";

        const groupTitle = document.createElement("div");
        groupTitle.className = "verb-index-group-title";
        groupTitle.textContent = group.indexTitle || group.title;
        groupBlock.appendChild(groupTitle);

        const groupLinks = document.createElement("div");
        groupLinks.className = "verb-index-links";

        [...group.verbs]
          .sort((a, b) => a.infinitive.localeCompare(b.infinitive, "fr"))
          .forEach(verb => {
            const button = document.createElement("button");
            button.className = "verb-index-link";
            button.type = "button";
            button.innerHTML = getTenseIndexButtonHtml(verb);
            button.addEventListener("click", () => {
              stopPlayback();
              card.open = true;
              const target = document.getElementById(getPasseComposeVerbId(group, verb));
              (target || card).scrollIntoView({ behavior: getPreferredScrollBehavior(), block: "start" });
              if (target) target.focus({ preventScroll: true });
            });
            groupLinks.appendChild(button);
          });

        groupBlock.appendChild(groupLinks);
        links.appendChild(groupBlock);
        });

      if (!cards.length) return;

      expandAll.addEventListener("click", () => {
        cards.forEach(card => {
          card.open = true;
        });
      });

      collapseAll.addEventListener("click", () => {
        cards.forEach(card => {
          card.open = false;
        });
      });

      const header = section.querySelector(".section-header");
      layout.append(aside, stack);
      if (header) {
        header.insertAdjacentElement("afterend", layout);
      } else {
        section.prepend(layout);
      }
      initializeMobileIndex(aside);
    }

    function findDirectChildByHeading(section, heading) {
      const headingElement = Array.from(section.querySelectorAll("h3, h4"))
        .find(childHeading => childHeading.textContent.trim() === heading);
      return headingElement
        ? headingElement.closest(".panel, .category-panel, .two-col, .pronunciation-table-wrap")
        : null;
    }

    function resolveStudyElement(section, descriptor) {
      if (typeof descriptor === "string") return section.querySelector(descriptor);
      if (descriptor.heading) return findDirectChildByHeading(section, descriptor.heading);
      if (descriptor.selector) return section.querySelector(descriptor.selector);
      return null;
    }

    function createStudyIndexButton(label, card) {
      const button = document.createElement("button");
      button.className = "study-index-link";
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        stopPlayback();
        card.open = true;
        card.scrollIntoView({ behavior: getPreferredScrollBehavior(), block: "start" });
      });
      return button;
    }

    function initializeStudyIndex(tabName) {
      const config = studyIndexConfigs[tabName];
      const section = Array.from(sections).find(item => item.dataset.tab === tabName);
      if (!config || !section || section.querySelector(".study-nav-layout")) return;

      const layout = document.createElement("div");
      layout.className = "study-nav-layout";

      const aside = document.createElement("aside");
      aside.className = "study-index";
      aside.setAttribute("aria-label", config.title);

      const title = document.createElement("div");
      title.className = "study-index-title";
      title.textContent = config.title;

      const controls = document.createElement("div");
      controls.className = "study-index-controls";

      const expandAll = document.createElement("button");
      expandAll.className = "study-index-control";
      expandAll.type = "button";
      expandAll.textContent = "Expand all";

      const collapseAll = document.createElement("button");
      collapseAll.className = "study-index-control";
      collapseAll.type = "button";
      collapseAll.textContent = "Collapse all";

      controls.append(expandAll, collapseAll);

      const links = document.createElement("div");
      links.className = "study-index-links";

      aside.append(title, controls, links);

      const stack = document.createElement("div");
      stack.className = "study-section-stack";

      const cards = [];
      config.sections.forEach((item, index) => {
        const elements = item.elements
          .map(descriptor => resolveStudyElement(section, descriptor))
          .filter(Boolean);
        if (!elements.length) return;

        const card = document.createElement("details");
        card.className = "study-collapse-card";
        card.id = `${tabName}-${item.id}-study-card`;
        restoreStudyCard(card, item.open ?? index === 0);

        const summary = document.createElement("summary");
        summary.className = "study-collapse-summary";
        summary.textContent = item.title;

        const body = document.createElement("div");
        body.className = "study-collapse-body";
        elements.forEach(element => body.appendChild(element));

        card.append(summary, body);
        stack.appendChild(card);
        links.appendChild(createStudyIndexButton(item.title, card));
        cards.push(card);
      });

      if (!cards.length) return;

      expandAll.addEventListener("click", () => {
        cards.forEach(card => {
          card.open = true;
        });
      });

      collapseAll.addEventListener("click", () => {
        cards.forEach(card => {
          card.open = false;
        });
      });

      const header = section.querySelector(".section-header");
      layout.append(aside, stack);
      if (header) {
        header.insertAdjacentElement("afterend", layout);
      } else {
        section.prepend(layout);
      }
      initializeMobileIndex(aside);

      (config.cleanupSelectors || []).forEach(selector => {
        const element = section.querySelector(selector);
        if (element && !element.children.length) element.remove();
      });
    }

    function initializeTab(tabName) {
      if (initializedTabs.has(tabName)) return;
      const initializer = tabInitializers[tabName];
      if (initializer) {
        try {
          initializer();
        } catch (error) {
          const section = Array.from(sections).find(item => item.dataset.tab === tabName);
          const target = section && (section.querySelector(".section-header") || section);
          if (target) target.insertAdjacentElement("afterend", createInlineError(`${tabName} tab failed to initialize`, error));
          console.error(`${tabName} tab failed to initialize`, error);
        }
      }
      const section = Array.from(sections).find(item => item.dataset.tab === tabName);
      applyLanguageMetadata(section);
      initializedTabs.add(tabName);
    }

    function initializeTabAccessibility() {
      tabButtons.forEach((button) => {
        const tabName = button.dataset.tab;
        const section = Array.from(sections).find(item => item.dataset.tab === tabName);
        button.id = button.id || `tab-${tabName}`;
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", section ? section.id : "");
        if (section) {
          section.setAttribute("role", "tabpanel");
          section.setAttribute("aria-labelledby", button.id);
        }
      });
    }

    function activateTab(tabName) {
      activeTab = tabName;
      FR.storage.set("frenchStudyActiveTab", tabName);
      tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === tabName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
      });
      sections.forEach((section) => {
        const isActive = section.dataset.tab === tabName;
        section.classList.toggle("active", isActive);
        section.setAttribute("aria-hidden", String(!isActive));
      });
      initializeTab(tabName);
    }

    function navigateStudyLink(trigger) {
      const tabName = trigger.dataset.studyLinkTab;
      const targetId = trigger.dataset.studyLinkTarget;
      const hasDestinationTab = Array.from(tabButtons).some(button => button.dataset.tab === tabName);
      if (!tabName || !targetId || !hasDestinationTab) {
        console.warn("Skipped study link because its destination is invalid.", trigger);
        return;
      }

      stopPlayback();
      activateTab(tabName);

      const target = document.getElementById(targetId);
      if (!target) {
        console.warn(`Skipped study link because #${targetId} is missing.`);
        return;
      }

      const card = target.closest(".study-collapse-card");
      if (card) card.open = true;

      window.requestAnimationFrame(() => {
        const scrollTarget = card || target;
        scrollTarget.scrollIntoView({ behavior: getPreferredScrollBehavior(), block: "start" });
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      });
    }

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        stopPlayback();
        activateTab(button.dataset.tab);
      });
      button.addEventListener("keydown", (event) => {
        const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home"
          ? 0
          : event.key === "End"
            ? tabButtons.length - 1
            : (index + (event.key === "ArrowRight" ? 1 : -1) + tabButtons.length) % tabButtons.length;
        const nextButton = tabButtons[nextIndex];
        stopPlayback();
        activateTab(nextButton.dataset.tab);
        nextButton.focus();
      });
    });

    on(document, "click", (event) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest("[data-study-link-tab][data-study-link-target]");
      if (trigger) navigateStudyLink(trigger);
    });

    on(rateInput, "input", () => {
      if (rateValue) rateValue.textContent = `${Number(rateInput.value).toFixed(2)}x`;
      FR.storage.set("frenchStudyRate", rateInput.value);
    });

    on(voiceSelect, "change", () => {
      FR.storage.set("frenchStudyVoice", voiceSelect.value);
    });

    on(themeToggle, "click", () => {
      stopPlayback();
      const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
      setTheme(nextTheme);
    });

    on(practiceModeToggle, "click", () => {
      setPracticeMode(!document.body.classList.contains("practice-mode"));
    });

    on(stopAudioBtn, "click", () => {
      stopPlayback();
    });

    on(grammarFlashcard, "click", () => {
      revealGrammarFlashcard();
    });

    on(previousGrammarFlashcardBtn, "click", () => {
      moveGrammarFlashcard(-1);
    });

    on(nextGrammarFlashcardBtn, "click", () => {
      moveGrammarFlashcard(1);
    });

    on(prepositionFlashcard, "click", () => {
      revealPrepositionFlashcard();
    });

    on(numberFlashcard, "click", () => {
      revealNumberFlashcard();
    });

    on(nextNumberFlashcardBtn, "click", () => {
      stopPlayback();
      showNumberFlashcard();
    });

    on(playNumberQuizAudioBtn, "click", () => {
      playNumberQuizAudio();
    });

    on(nextNumberQuizBtn, "click", () => {
      stopPlayback();
      showNumberQuiz(randomInt(1000, 9999), true);
      numberQuizInput.focus();
    });

    on(checkNumberQuizAnswerBtn, "click", () => {
      checkNumberQuizAnswer();
    });

    on(revealNumberQuizAnswerBtn, "click", () => {
      revealNumberQuizAnswer();
    });

    on(numberQuizInput, "keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      checkNumberQuizAnswer();
    });

    on(previousPrepositionFlashcardBtn, "click", () => {
      movePrepositionFlashcard(-1);
    });

    on(nextPrepositionFlashcardBtn, "click", () => {
      movePrepositionFlashcard(1);
    });

    on(playYearQuizAudioBtn, "click", () => {
      playYearQuizAudio();
    });

    on(nextYearQuizBtn, "click", () => {
      stopPlayback();
      showYearQuiz(randomYearQuizValue(), true);
      yearQuizInput.focus();
    });

    on(checkYearQuizAnswerBtn, "click", () => {
      checkYearQuizAnswer();
    });

    on(revealYearQuizAnswerBtn, "click", () => {
      revealYearQuizAnswer();
    });

    on(yearQuizInput, "keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      checkYearQuizAnswer();
    });

    initializeTabAccessibility();
    initTheme();
    initStudyPreferences();
    loadVoices();
    activateTab(activeTab);

    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
})();
