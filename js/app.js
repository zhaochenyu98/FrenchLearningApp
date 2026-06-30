    const imperativeConfigs = [
      { tableId: "etreImperativeTable", playButtonId: "playEtreImperative", rows: etreImperativeRows },
      { tableId: "avoirImperativeTable", playButtonId: "playAvoirImperative", rows: avoirImperativeRows }
    ];

    const studyIndexConfigs = {
      pronunciation: {
        title: "Pronunciation index",
        sections: [
          { id: "vowels", title: "Vowels", open: true, elements: ['[data-study-section="pronunciation-vowels"]', "#pronunciationGrid"] },
          { id: "consonants", title: "Consonants", elements: ['[data-study-section="pronunciation-consonants"]', "#consonantPronunciationGrid"] },
          { id: "liaison", title: "Mandatory liaison", elements: ['[data-study-section="pronunciation-liaison"]', "#mandatoryLiaisonGrid"] },
          { id: "matrix", title: "Consonant + vowel table", elements: ['[data-study-section="pronunciation-matrix-heading"]', '[data-study-section="pronunciation-matrix"]'] },
          { id: "practice", title: "Practice words", elements: ['[data-study-section="pronunciation-practice-heading"]', "#pronunciationPracticeGrid"] }
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
          { id: "special", title: "Special adjectives", elements: [{ heading: "特殊形容词: beau / nouveau / vieux" }] }
        ]
      },
      adverbs: {
        title: "Adverb index",
        sections: [
          { id: "quick-notes", title: "Quick notes", open: true, elements: ["#adverbsSection .panel"] },
          { id: "comparison", title: "Bon / bien / beau", open: true, elements: [{ heading: "Bon vs bien vs beau" }] },
          { id: "tout", title: "Tout forms", elements: [{ heading: "Tout forms" }] }
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
        renderVerbStudySections();
        renderVerbTables("verbs");
        initializeVerbGroups();
        renderVerbIndex();
      },
      tense() {
        renderPasseComposeGroups();
        initializeTenseIndex();
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
        renderModifierComparison();
        renderToutForms();
        initializeStudyIndex("adverbs");
      },
      prepositions() {
        showPrepositionFlashcard();
        renderPrepositions();
      },
      determiners() {
        renderArticleComparison();
        renderPartitiveArticles();
        renderDeterminerCards(aArticleGrid, aArticleRules);
        renderDeterminerCards(deArticleGrid, deArticleRules);
        renderDemonstrativeTable();
        initializeStudyIndex("determiners");
      },
      questions() {
        renderQuelForms();
        renderQuelExamples();
        renderQuelEtreExamples();
        renderQuelColorExamples();
        renderDayQuestionExamples();
        renderTimeQuestionExamples();
        renderQueExamples();
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

      const playButton = document.createElement("button");
      playButton.className = "action-btn";
      playButton.type = "button";
      playButton.textContent = "Play faire expressions";
      playButton.addEventListener("click", () => {
        speakSequence(faireExpressionRows.flatMap(getFaireExpressionAudioItems), playButton);
      });

      const table = document.createElement("div");
      table.id = "faireExpressionsTable";
      table.className = "noun-rules-table";

      heading.append(copy, playButton);
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

      const controls = document.createElement("div");
      controls.className = "verb-panel-controls";

      const formsButton = document.createElement("button");
      formsButton.className = "verb-audio-btn";
      formsButton.type = "button";
      formsButton.textContent = "Play forms";
      formsButton.addEventListener("click", () => {
        speakSequence(item.rows.flatMap(getVerbConjugationAudioItems), formsButton);
      });

      const examplesButton = document.createElement("button");
      examplesButton.className = "verb-audio-btn";
      examplesButton.type = "button";
      examplesButton.textContent = "Play examples";
      examplesButton.addEventListener("click", () => {
        speakSequence(item.rows.flatMap(getVerbExamplesAudioItems), examplesButton);
      });

      controls.append(formsButton, examplesButton);

      const header = document.createElement("div");
      header.className = "verb-panel-header";
      header.append(heading, controls);

      const description = document.createElement("p");
      description.innerHTML = item.descriptionHtml || "";

      const table = document.createElement("div");
      table.id = getVerbTableId(item);
      table.className = "verb-matrix";

      panel.append(header, description, table);

      (item.extras || []).forEach(extra => {
        if (extra === "faireExpressions") appendFaireExpressions(panel);
      });

      return panel;
    }

    function renderVerbStudySections() {
      if (!verbGroupStack) return;
      verbGroupStack.replaceChildren();

      verbStudyGroups.forEach((group, index) => {
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

        const groupItems = verbStudyItems.filter(item => item.group === group.key);
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
      verbConfigs
        .filter(config => config.tab === tabName)
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

    function setVerbGroupCollapsed(group, collapsed) {
      if (!group) return;
      const toggle = group.querySelector(".verb-group-toggle");
      group.classList.toggle("collapsed", collapsed);
      if (!toggle) return;
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.textContent = collapsed ? "Expand" : "Collapse";
    }

    function initializeVerbGroups() {
      document.querySelectorAll("#verbsSection .verb-group").forEach((group, index) => {
        setVerbGroupCollapsed(group, index > 0);
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

      const configs = verbConfigs.filter(config => config.tab === "verbs");
      verbStudyGroups.forEach(group => {
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

        groupConfigs.forEach(config => {
          const panel = getVerbPanel(config);
          if (!panel) return;

          const button = document.createElement("button");
          button.className = "verb-index-link";
          button.type = "button";
          button.textContent = config.label;
          button.addEventListener("click", () => {
            stopPlayback();
            setVerbGroupCollapsed(panel.closest(".verb-group"), false);
            panel.scrollIntoView({ behavior: "smooth", block: "start" });
            panel.focus({ preventScroll: true });
          });
          links.appendChild(button);
        });

        groupBlock.appendChild(links);
        index.appendChild(groupBlock);
      });
    }

    function initializeTenseIndex() {
      const section = Array.from(sections).find(item => item.dataset.tab === "tense");
      if (!section || section.querySelector(".study-nav-layout")) return;

      const layout = document.createElement("div");
      layout.className = "study-nav-layout";

      const aside = document.createElement("aside");
      aside.className = "study-index";
      aside.setAttribute("aria-label", "Tense index");

      const title = document.createElement("div");
      title.className = "study-index-title";
      title.textContent = "Tense index";

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
        quickCard.open = true;

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

      passeComposeGroups.forEach((group, groupIndex) => {
        const element = resolveStudyElement(section, `[data-study-section="tense-${group.key}"]`);
        if (!element) return;

        const card = document.createElement("details");
        card.className = "study-collapse-card";
        card.id = `tense-${group.key}-study-card`;
        card.open = groupIndex === 0;

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

        group.verbs.forEach(verb => {
          const button = document.createElement("button");
          button.className = "verb-index-link";
          button.type = "button";
          button.innerHTML = getTenseIndexButtonHtml(verb);
          button.addEventListener("click", () => {
            stopPlayback();
            card.open = true;
            const target = document.getElementById(getPasseComposeVerbId(group, verb));
            (target || card).scrollIntoView({ behavior: "smooth", block: "start" });
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
        card.scrollIntoView({ behavior: "smooth", block: "start" });
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
        card.open = item.open ?? index === 0;

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
      if (!playButtonId) return;
      const playButton = document.getElementById(playButtonId);
      if (!playButton) return;
      playButton.addEventListener("click", () => {
        speakSequence(rows.flatMap(getVerbAudioItems));
      });
    });

    imperativeConfigs.forEach(({ playButtonId, rows }) => {
      const playButton = document.getElementById(playButtonId);
      if (!playButton) return;
      playButton.addEventListener("click", () => {
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

    playReflexivePronounsBtn.addEventListener("click", () => {
      speakSequence(getReflexivePronounForms().map(form => ({
        text: form.speech || form.fr,
        pauseBefore: numberRepeatPauseMs
      })));
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

    playAdverbsBtn.addEventListener("click", () => {
      speakSequence([
        ...getModifierComparisonExamples().map(example => ({ text: example.fr, pauseBefore: examplePauseMs })),
        ...getToutExamples().map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
      ]);
    });

    playTenseExamplesBtn.addEventListener("click", () => {
      speakSequence(getPasseComposeAudioItems());
    });

    playPrepositionsBtn.addEventListener("click", () => {
      speakSequence(allPrepositionItems.flatMap(item => ([
        { text: item.fr },
        ...item.examples.map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
      ])));
    });

    playTimeSpanComparisonsBtn.addEventListener("click", () => {
      speakSequence(getTimeSpanComparisonAudioItems());
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
        getQuestionComparisonAudioItems(dayQuestionRows, dayQuestionColumns),
        getQuestionComparisonAudioItems(timeQuestionRows, timeQuestionColumns),
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
