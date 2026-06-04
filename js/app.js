    const verbConfigs = [
      { tab: "grammar", tableId: "etreTable", playButtonId: "playEtre", rows: etreRows },
      { tab: "grammar", tableId: "avoirTable", playButtonId: "playAvoir", rows: avoirRows },
      { tab: "verbs", tableId: "allerTable", playButtonId: "playAller", rows: allerRows },
      { tab: "verbs", tableId: "venirTable", playButtonId: "playVenir", rows: venirRows },
      { tab: "verbs", tableId: "habiterTable", playButtonId: "playHabiter", rows: habiterRows },
      { tab: "verbs", tableId: "faireTable", playButtonId: "playFaire", rows: faireRows },
      { tab: "verbs", tableId: "trouverTable", playButtonId: "playTrouver", rows: trouverRows },
      { tab: "verbs", tableId: "couterTable", playButtonId: "playCouter", rows: couterRows }
    ];

    const tabInitializers = {
      pronunciation() {
        renderPronunciationRules();
        renderConsonantPronunciationRules();
        renderMandatoryLiaisons();
        renderPronunciationMatrix();
        renderPronunciationPractice();
      },
      pronouns() {
        renderTonicPronounForms();
        renderTonicPronounUsage();
      },
      grammar() {
        renderVerbTables("grammar");
        renderExamples();
        showGrammarFlashcard();
      },
      verbs() {
        renderVerbTables("verbs");
      },
      nouns() {
        renderNounPluralRules();
        renderJobGenderRules();
      },
      adjectives() {
        renderAdjectiveFeminineRules();
        renderAdjectivePluralRules();
        renderAdjectivePreposedPluralRules();
        renderSpecialAdjectiveForms();
      },
      prepositions() {
        showPrepositionFlashcard();
        renderPrepositions();
      },
      determiners() {
        renderArticleComparison();
        renderDeterminerCards(aArticleGrid, aArticleRules);
        renderDeterminerCards(deArticleGrid, deArticleRules);
        renderDeterminerCards(demonstrativeGrid, determinerCategories.demonstrative);
        renderPossessives();
        renderPossessiveExceptions();
      },
      questions() {
        renderQuelForms();
        renderQuelExamples();
        renderQuelEtreExamples();
        renderQueExamples();
        renderQueCestExamples();
        renderQuestionWords();
      },
      numbers() {
        renderNumbers();
        renderAgeYears();
        renderOperators();
      },
      calendar() {
        renderCalendarCards(weekdaysGrid, weekdays, "No days available.");
        renderCalendarCards(monthsGrid, months, "No months available.");
        renderCalendarCards(seasonsGrid, seasons, "No seasons available.");
      }
    };

    const initializedTabs = new Set();

    function renderVerbTables(tabName) {
      verbConfigs
        .filter(config => config.tab === tabName)
        .forEach(config => renderVerbTable(document.getElementById(config.tableId), config.rows));
    }

    function initializeTab(tabName) {
      if (initializedTabs.has(tabName)) return;
      const initializer = tabInitializers[tabName];
      if (initializer) initializer();
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

    verbConfigs.forEach(({ playButtonId, rows }) => {
      document.getElementById(playButtonId).addEventListener("click", () => {
        speakSequence(rows.flatMap(getVerbAudioItems));
      });
    });

    rateInput.addEventListener("input", () => {
      rateValue.textContent = `${Number(rateInput.value).toFixed(2)}x`;
    });

    themeToggle.addEventListener("click", () => {
      stopPlayback();
      const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
      setTheme(nextTheme);
    });

    stopAudioBtn.addEventListener("click", () => {
      stopPlayback();
    });

    grammarFlashcard.addEventListener("click", () => {
      revealGrammarFlashcard();
    });

    previousGrammarFlashcardBtn.addEventListener("click", () => {
      moveGrammarFlashcard(-1);
    });

    nextGrammarFlashcardBtn.addEventListener("click", () => {
      moveGrammarFlashcard(1);
    });

    prepositionFlashcard.addEventListener("click", () => {
      revealPrepositionFlashcard();
    });

    previousPrepositionFlashcardBtn.addEventListener("click", () => {
      movePrepositionFlashcard(-1);
    });

    nextPrepositionFlashcardBtn.addEventListener("click", () => {
      movePrepositionFlashcard(1);
    });

    playNumberSamplesBtn.addEventListener("click", () => {
      speakSequence(numberItems.map(item => ({ text: item.speech, pauseBefore: numberRepeatPauseMs })));
    });

    playAgeYearsBtn.addEventListener("click", () => {
      speakSequence(ageYearItems.map(item => ({ text: item.speech, pauseBefore: numberRepeatPauseMs })));
    });

    playPronunciationRulesBtn.addEventListener("click", () => {
      speakSequence([
        ...getPronunciationExamples(),
        ...getMandatoryLiaisonExamples(),
        ...getPronunciationMatrixWords(),
        ...getPronunciationPracticeWords()
      ].map(word => ({ text: word })));
    });

    playTonicPronounsBtn.addEventListener("click", () => {
      speakSequence([
        ...getTonicPronounForms().map(form => ({ text: form.fr, pauseBefore: numberRepeatPauseMs })),
        ...getTonicPronounUsageLines().map(text => ({ text, pauseBefore: examplePauseMs }))
      ]);
    });

    playNounPluralsBtn.addEventListener("click", () => {
      speakSequence(getNounPluralExamples().flatMap(example => ([
        { text: example.singular },
        { text: example.plural, pauseBefore: examplePauseMs }
      ])));
    });

    playJobNounGendersBtn.addEventListener("click", () => {
      speakSequence(getJobGenderExamples().flatMap(example => ([
        { text: example.masculine },
        { text: example.feminine, pauseBefore: examplePauseMs }
      ])));
    });

    playAdjectivesBtn.addEventListener("click", () => {
      speakSequence([
        ...getAdjectiveRuleExamples(adjectiveFeminineRules).flatMap(example => ([
          { text: example.from },
          { text: example.to, pauseBefore: examplePauseMs }
        ])),
        ...getAdjectiveRuleExamples(adjectivePluralRules).flatMap(example => ([
          { text: example.from },
          { text: example.to, pauseBefore: examplePauseMs }
        ])),
        ...getAdjectiveRuleExamples(adjectivePreposedPluralRules).flatMap(example => ([
          { text: example.from },
          { text: example.to, pauseBefore: examplePauseMs }
        ])),
        ...getSpecialAdjectiveExamples().map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
      ]);
    });

    playPrepositionsBtn.addEventListener("click", () => {
      speakSequence(placePrepositions.flatMap(item => ([
        { text: item.fr },
        ...item.examples.map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
      ])));
    });

    playDeterminersBtn.addEventListener("click", () => {
      speakSequence(allDeterminerItems.flatMap(item => ([
        { text: item.speech || item.fr },
        { text: item.example, pauseBefore: examplePauseMs }
      ])));
    });

    playPossessivesBtn.addEventListener("click", () => {
      speakSequence(
        [
          ...possessiveRows.flatMap(row => row.forms.flatMap(form => ([
            { text: form.form },
            { text: form.example, pauseBefore: examplePauseMs }
          ]))),
          ...possessiveExceptions.flatMap(item => ([
            { text: item.fr },
            { text: item.example, pauseBefore: examplePauseMs }
          ]))
        ]
      );
    });

    playQuestionWordsBtn.addEventListener("click", () => {
      speakSequence(questionWords.flatMap(item => ([
        { text: item.speech || item.fr },
        ...item.examples.flatMap(example =>
          getExampleVariants(example).map(variant => ({ text: variant.fr, pauseBefore: examplePauseMs }))
        )
      ])).concat(
        quelForms.flatMap(item => ([
          { text: item.form },
          { text: item.example, pauseBefore: examplePauseMs }
        ])),
        quelExampleRows.flatMap(row => quelExampleColumns.map(column => ({
          text: row.examples[column.key].fr,
          pauseBefore: examplePauseMs
        }))),
        quelEtreSpecialRows.flatMap(row => quelEtreSpecialColumns.map(column => ({
          text: row.examples[column.key].fr,
          pauseBefore: examplePauseMs
        }))),
        queExampleRows.flatMap(row => queExampleColumns.map(column => ({
          text: row.examples[column.key].fr,
          pauseBefore: examplePauseMs
        }))),
        queCestSpecialRows.flatMap(row => queCestSpecialColumns.map(column => ({
          text: row.examples[column.key].fr,
          pauseBefore: examplePauseMs
        })))
      ));
    });

    playWeekdaysBtn.addEventListener("click", () => {
      speakSequence(weekdays.flatMap(item => ([
        { text: item.fr },
        { text: item.example, pauseBefore: examplePauseMs }
      ])));
    });

    playMonthsBtn.addEventListener("click", () => {
      speakSequence(months.flatMap(item => ([
        { text: item.fr },
        { text: item.example, pauseBefore: examplePauseMs }
      ])));
    });

    playSeasonsBtn.addEventListener("click", () => {
      speakSequence(seasons.flatMap(item => ([
        { text: item.fr },
        { text: item.example, pauseBefore: examplePauseMs }
      ])));
    });

    initializeTabAccessibility();
    initTheme();
    loadVoices();
    activateTab(activeTab);

    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
