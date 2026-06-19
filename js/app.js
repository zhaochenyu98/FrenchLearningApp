    const verbConfigs = [
      { tab: "grammar", tableId: "etreTable", playButtonId: "playEtre", rows: etreRows },
      { tab: "grammar", tableId: "avoirTable", playButtonId: "playAvoir", rows: avoirRows },
      { tab: "verbs", tableId: "allerTable", playButtonId: "playAller", rows: allerRows },
      { tab: "verbs", tableId: "venirTable", playButtonId: "playVenir", rows: venirRows },
      { tab: "verbs", tableId: "prendreTable", playButtonId: "playPrendre", rows: prendreRows },
      { tab: "verbs", tableId: "habiterTable", playButtonId: "playHabiter", rows: habiterRows },
      { tab: "verbs", tableId: "faireTable", playButtonId: "playFaire", rows: faireRows },
      { tab: "verbs", tableId: "trouverTable", playButtonId: "playTrouver", rows: trouverRows },
      { tab: "verbs", tableId: "tournerTable", playButtonId: "playTourner", rows: tournerRows },
      { tab: "verbs", tableId: "couterTable", playButtonId: "playCouter", rows: couterRows }
    ];

    const imperativeConfigs = [
      { tableId: "etreImperativeTable", playButtonId: "playEtreImperative", rows: etreImperativeRows },
      { tableId: "avoirImperativeTable", playButtonId: "playAvoirImperative", rows: avoirImperativeRows }
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
        imperativeConfigs.forEach(config => {
          renderImperativeTable(document.getElementById(config.tableId), config.rows);
        });
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
        renderDemonstrativeTable();
        renderPossessives();
        renderPossessiveExceptions();
      },
      questions() {
        renderQuelForms();
        renderQuelExamples();
        renderQuelEtreExamples();
        renderQuelColorExamples();
        renderQueExamples();
        renderQueCestExamples();
        renderCommentExamples();
        renderCombienExamples();
        renderYaTilExamples();
        renderQuestionWords();
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
      },
      calendar() {
        renderCalendarCards(weekdaysGrid, weekdays, "No days available.");
        renderCalendarCards(monthsGrid, months, "No months available.");
        renderCalendarCards(seasonsGrid, seasons, "No seasons available.");
      }
    };

    const initializedTabs = new Set();

    function getQuestionComparisonAudioItems(rows, columns) {
      return rows.flatMap(row => columns.map(column => ({
        text: row.examples[column.key].fr,
        pauseBefore: examplePauseMs
      })));
    }

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

    imperativeConfigs.forEach(({ playButtonId, rows }) => {
      document.getElementById(playButtonId).addEventListener("click", () => {
        speakSequence(rows.flatMap(getImperativeAudioItems));
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

    numberFlashcard.addEventListener("click", () => {
      revealNumberFlashcard();
    });

    nextNumberFlashcardBtn.addEventListener("click", () => {
      stopPlayback();
      showNumberFlashcard();
    });

    playNumberQuizAudioBtn.addEventListener("click", () => {
      playNumberQuizAudio();
    });

    nextNumberQuizBtn.addEventListener("click", () => {
      stopPlayback();
      showNumberQuiz(randomInt(1000, 9999), true);
      numberQuizInput.focus();
    });

    checkNumberQuizAnswerBtn.addEventListener("click", () => {
      checkNumberQuizAnswer();
    });

    revealNumberQuizAnswerBtn.addEventListener("click", () => {
      revealNumberQuizAnswer();
    });

    numberQuizInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      checkNumberQuizAnswer();
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

    playHundredsLearningBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(hundredsLearningItems));
    });

    playThousandsLearningBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(thousandsLearningItems));
    });

    playYearLearningBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(yearLearningItems));
    });

    playYearQuizAudioBtn.addEventListener("click", () => {
      playYearQuizAudio();
    });

    nextYearQuizBtn.addEventListener("click", () => {
      stopPlayback();
      showYearQuiz(randomYearQuizValue(), true);
      yearQuizInput.focus();
    });

    checkYearQuizAnswerBtn.addEventListener("click", () => {
      checkYearQuizAnswer();
    });

    revealYearQuizAnswerBtn.addEventListener("click", () => {
      revealYearQuizAnswer();
    });

    yearQuizInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      checkYearQuizAnswer();
    });

    playTimeHoursBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(timeHourItems));
    });

    playTimeExpressionsBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(timeExpressionItems));
    });

    playOrdinalNumbersBtn.addEventListener("click", () => {
      speakSequence(getNumberLearningAudioItems(ordinalNumberItems));
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
        getQuestionComparisonAudioItems(quelExampleRows, quelExampleColumns),
        getQuestionComparisonAudioItems(quelEtreSpecialRows, quelEtreSpecialColumns),
        getQuestionComparisonAudioItems(quelColorRows, quelColorColumns),
        getQuestionComparisonAudioItems(queExampleRows, queExampleColumns),
        getQuestionComparisonAudioItems(queCestSpecialRows, queCestSpecialColumns),
        getQuestionComparisonAudioItems(commentExampleRows, commentExampleColumns),
        getQuestionComparisonAudioItems(combienExampleRows, combienExampleColumns),
        getQuestionComparisonAudioItems(yaTilExampleRows, yaTilExampleColumns)
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
