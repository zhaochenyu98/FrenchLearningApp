    function getTonicPronounForms(rows = tonicPronounRows) {
      return rows.flatMap(row => [...row.singularForms, ...row.pluralForms]);
    }

    function getReflexivePronounForms(rows = reflexivePronounRows) {
      return rows.flatMap(row => [...row.singularForms, ...row.pluralForms]);
    }

    function getPronounFormCardHtml(form) {
      const formSpeech = form.speech || form.fr;
      const exampleSpeech = form.exampleSpeech || form.example || "";
      return `
        <div class="pronoun-study-card">
          <button class="pronoun-card tonic-pronoun-form-btn pronoun-word-btn" type="button" data-speech="${FR.utils.escapeAttribute(formSpeech)}">
            <span class="pronoun-main">${form.fr}</span>
            ${form.ipa ? `<span class="pronoun-ipa">${form.ipa}</span>` : ""}
            <span class="translation">${form.en}</span>
          </button>
          ${form.example ? `
            <button class="pronoun-example-btn" type="button" data-example="${FR.utils.escapeAttribute(exampleSpeech)}">
              <span class="tiny-label">Example</span>
              <span class="noun-example-main">${form.example}</span>
              <span class="translation">${form.exampleEn || ""}</span>
            </button>
          ` : ""}
        </div>
      `;
    }

    function renderPronounFormsTable(targetGrid, rows, emptyMessage) {
      targetGrid.innerHTML = "";
      if (!rows.length) {
        targetGrid.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      targetGrid.innerHTML = `
        <div class="tonic-pronoun-header">
          <div>Singular Chinese</div>
          <div>Singular French</div>
          <div>Plural Chinese</div>
          <div>Plural French</div>
        </div>
      `;

      rows.forEach(rowData => {
        const row = document.createElement("div");
        row.className = "tonic-pronoun-row";
        row.innerHTML = `
          <div class="tonic-pronoun-cell tonic-pronoun-zh">
            <span class="tonic-pronoun-cell-label">Singular Chinese</span>
            <span>${rowData.singularZh}</span>
          </div>
          <div class="tonic-pronoun-cell">
            <span class="tonic-pronoun-cell-label">Singular French</span>
            <div class="tonic-pronoun-form-list">
              ${rowData.singularForms.map(getPronounFormCardHtml).join("")}
            </div>
          </div>
          <div class="tonic-pronoun-cell tonic-pronoun-zh">
            <span class="tonic-pronoun-cell-label">Plural Chinese</span>
            <span>${rowData.pluralZh}</span>
          </div>
          <div class="tonic-pronoun-cell">
            <span class="tonic-pronoun-cell-label">Plural French</span>
            <div class="tonic-pronoun-form-list">
              ${rowData.pluralForms.map(getPronounFormCardHtml).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".pronoun-word-btn").forEach(button => {
          button.addEventListener("click", () => speak(button.dataset.speech, button));
        });
        row.querySelectorAll(".pronoun-example-btn").forEach(button => {
          button.addEventListener("click", () => speak(button.dataset.example, button));
        });
        targetGrid.appendChild(row);
      });
    }

    function renderTonicPronounForms(rows = tonicPronounRows) {
      renderPronounFormsTable(tonicPronounGrid, rows, "No tonic pronouns available.");
    }

    function renderReflexivePronounForms(rows = reflexivePronounRows) {
      renderPronounFormsTable(reflexivePronounGrid, rows, "No reflexive pronouns available.");
    }

    function getCoiGuideSpeechLines(example) {
      if (example.speech) return example.speech;
      return [example.from, example.to].filter(Boolean);
    }

    function renderCoiGuideTable(targetGrid, rules, options) {
      if (!targetGrid) return;
      targetGrid.innerHTML = "";
      if (!rules.length) {
        targetGrid.innerHTML = `<div class="empty-state">${options.emptyMessage}</div>`;
        return;
      }

      targetGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>${options.titleHeader}</div>
          <div>${options.patternHeader}</div>
          <div>${options.examplesHeader}</div>
        </div>
      `;

      rules.forEach((rule, ruleIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">${options.titleHeader}</span>
            <div class="french-line">${rule.title}</div>
          </div>
          <div>
            <span class="question-cell-label">${options.patternHeader}</span>
            <div class="grammar-note">${rule.pattern}</div>
          </div>
          <div>
            <span class="question-cell-label">${options.examplesHeader}</span>
            <div class="noun-example-list">
              ${rule.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-rule-index="${ruleIndex}" data-example-index="${exampleIndex}">
                  <span class="tiny-label">${options.fromLabel}</span>
                  <span class="noun-example-main">${example.from}</span>
                  ${example.to ? `
                    <span class="tiny-label">${options.toLabel}</span>
                    <span class="noun-example-main">${example.to}</span>
                  ` : ""}
                  ${example.result ? `
                    <span class="tiny-label">Correct choice</span>
                    <span class="grammar-note">${example.result}</span>
                  ` : ""}
                  ${example.avoid ? `
                    <span class="tiny-label">Avoid</span>
                    <span class="grammar-note">${example.avoid}</span>
                  ` : ""}
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rules[Number(button.dataset.ruleIndex)].examples[Number(button.dataset.exampleIndex)];
            const lines = getCoiGuideSpeechLines(example);
            speakSequence(lines.map((text, index) => ({
              text,
              pauseBefore: index ? examplePauseMs : 0
            })), button);
          });
        });
        targetGrid.appendChild(row);
      });
    }

    function getObjectPronounPatternSentences(example, labels = {}) {
      return [
        { label: labels.statement || "Statement", ...example.statement },
        { label: labels.negative || "Negative", ...example.negative },
        { label: labels.question || "Question", ...example.question }
      ].filter(sentence => sentence.fr);
    }

    function renderObjectPronounPatterns(targetGrid, rows, emptyMessage) {
      if (!targetGrid) return;
      targetGrid.innerHTML = "";
      if (!rows.length) {
        targetGrid.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      targetGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Scenario</div>
          <div>Placement rule</div>
          <div>Examples</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Scenario</span>
            <div class="french-line">${rowData.title}</div>
          </div>
          <div>
            <span class="question-cell-label">Placement</span>
            <div class="grammar-note">${rowData.placement}</div>
            <div class="matrix-label">${rowData.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${rowData.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-row-index="${rowIndex}" data-example-index="${exampleIndex}">
                  <span class="subject-form-tag">${example.meaning}</span>
                  ${getObjectPronounPatternSentences(example, rowData.labels).map(sentence => `
                    <span class="tiny-label">${sentence.label}</span>
                    <span class="noun-example-main">${sentence.fr}</span>
                    <span class="translation">${sentence.en}</span>
                  `).join("")}
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const rowData = rows[Number(button.dataset.rowIndex)];
            const example = rowData.examples[Number(button.dataset.exampleIndex)];
            speakSequence(getObjectPronounPatternSentences(example, rowData.labels).map((sentence, index) => ({
              text: sentence.fr,
              pauseBefore: index ? examplePauseMs : 0
            })), button);
          });
        });
        targetGrid.appendChild(row);
      });
    }

    function renderCoiPatterns(rows = coiPatternRows) {
      renderObjectPronounPatterns(coiPatternGrid, rows, "No COI placement patterns available.");
    }

    function renderCodPatterns(rows = codPatternRows) {
      renderObjectPronounPatterns(codPatternGrid, rows, "No COD placement patterns available.");
    }

    function renderCodPronounForms(rows = codPronounRows) {
      renderPronounFormsTable(codPronounGrid, rows, "No COD pronouns available.");
    }

    function renderCodTriggerRules(rules = codTriggerRules) {
      renderCoiGuideTable(codTriggerGrid, rules, {
        titleHeader: "Trigger",
        patternHeader: "How it works",
        examplesHeader: "COD transformations",
        fromLabel: "Full phrase",
        toLabel: "COD version",
        emptyMessage: "No COD trigger examples available."
      });
    }

    function renderCodAvoidRules(rules = codAvoidRules) {
      renderCoiGuideTable(codAvoidGrid, rules, {
        titleHeader: "Do not use COD",
        patternHeader: "Why",
        examplesHeader: "Correct contrast",
        fromLabel: "Original",
        toLabel: "Correct replacement",
        emptyMessage: "No COD contrast examples available."
      });
    }

    function renderCoiPronounForms(rows = coiPronounRows) {
      renderPronounFormsTable(coiPronounGrid, rows, "No COI pronouns available.");
    }

    function renderCoiTriggerRules(rules = coiTriggerRules) {
      renderCoiGuideTable(coiTriggerGrid, rules, {
        titleHeader: "Trigger",
        patternHeader: "How it works",
        examplesHeader: "COI transformations",
        fromLabel: "Full phrase",
        toLabel: "COI version",
        emptyMessage: "No COI trigger examples available."
      });
    }

    function renderCoiAvoidRules(rules = coiAvoidRules) {
      renderCoiGuideTable(coiAvoidGrid, rules, {
        titleHeader: "Do not use COI",
        patternHeader: "Why",
        examplesHeader: "Correct contrast",
        fromLabel: "Original",
        toLabel: "Correct replacement",
        emptyMessage: "No COI contrast examples available."
      });
    }

    function renderTonicPronounUsage(rules = tonicPronounUsageRules) {
      tonicPronounUsageGrid.innerHTML = "";
      if (!rules.length) {
        tonicPronounUsageGrid.innerHTML = `<div class="empty-state">No tonic pronoun usage examples available.</div>`;
        return;
      }

      tonicPronounUsageGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>When to use</div>
          <div>Pattern</div>
          <div>Examples</div>
        </div>
      `;

      rules.forEach((rule, ruleIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">When</span>
            <div class="french-line">${rule.rule}</div>
          </div>
          <div>
            <span class="question-cell-label">Pattern</span>
            <div class="grammar-note">${rule.pattern}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${rule.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-rule-index="${ruleIndex}" data-example-index="${exampleIndex}">
                  ${example.lines.map(line => `
                    <span class="noun-example-main">${line.fr}</span>
                    <span class="translation">${line.en}</span>
                  `).join("")}
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rules[Number(button.dataset.ruleIndex)].examples[Number(button.dataset.exampleIndex)];
            speakSequence(example.lines.map((line, index) => ({
              text: line.fr,
              pauseBefore: index ? examplePauseMs : 0
            })), button);
          });
        });
        tonicPronounUsageGrid.appendChild(row);
      });
    }

    function getVerbExamples(item) {
      const examples = item.examples || [{
        fr: item.example,
        en: item.exampleEn,
        negative: item.negative,
        negativeEn: item.negativeEn,
        question: item.question
      }];
      return examples.map(example => normalizeVerbExample(example, item));
    }

    function createRenderErrorCard(title, error) {
      const card = document.createElement("div");
      card.className = "inline-error-card";
      card.setAttribute("role", "alert");
      card.innerHTML = `
        <strong>${title}</strong>
        <span>${error && error.message ? error.message : String(error)}</span>
      `;
      return card;
    }

    function stripSentenceEnding(text) {
      return text.trim().replace(/[.!?]\s*$/, "");
    }

    function lowerFirst(text) {
      return text.charAt(0).toLocaleLowerCase("fr-FR") + text.slice(1);
    }

    function upperFirst(text) {
      return text.charAt(0).toLocaleUpperCase("fr-FR") + text.slice(1);
    }

    function escapeRegExp(text) {
      return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function startsWithVerbPhrase(statement, full) {
      const body = stripSentenceEnding(statement);
      return new RegExp(`^${escapeRegExp(full)}(?=\\s|$)`, "iu").test(body);
    }

    function removeVerbPhrase(statement, full) {
      return stripSentenceEnding(statement)
        .replace(new RegExp(`^${escapeRegExp(full)}\\s*`, "iu"), "")
        .trim();
    }

    function needsInversionT(form, pronoun) {
      return /^(il|elle|on)$/i.test(pronoun) && /[aeiouyàâéèêëîïôùûü]$/i.test(form);
    }

    function buildInversionQuestion(item, statement) {
      if (!item || !item.full || !item.form || !item.pronoun || !startsWithVerbPhrase(statement, item.full)) {
        return "";
      }

      const pronoun = item.pronoun.replace("j’", "je");
      if (!/^(tu|nous|vous|il|elle|on|ils|elles)$/i.test(pronoun)) return "";

      const rest = removeVerbPhrase(statement, item.full);
      const bridge = needsInversionT(item.form, pronoun) ? "-t" : "";
      return `${upperFirst(item.form)}${bridge}-${pronoun}${rest ? ` ${rest}` : ""} ?`;
    }

    function buildVerbQuestion(statement, item) {
      const inversionQuestion = buildInversionQuestion(item, statement);
      if (inversionQuestion) return inversionQuestion;

      const statementBody = lowerFirst(stripSentenceEnding(statement));
      if (/^(il|ils|elle|elles|on)\b/.test(statementBody)) {
        return `Est-ce qu’${statementBody} ?`;
      }
      return `Est-ce que ${statementBody} ?`;
    }

    function normalizeVerbExample(example, item) {
      const statement = example.statement || example.fr;
      return {
        ...example,
        fr: statement,
        question: example.question || buildVerbQuestion(statement, item)
      };
    }

    function getVerbConjugationAudioItems(item) {
      return [{ text: item.full }];
    }

    function getVerbExampleAudioItems(example) {
      return [
        { text: example.fr },
        ...(example.negative ? [{ text: example.negative, pauseBefore: examplePauseMs }] : []),
        ...(example.question ? [{ text: example.question, pauseBefore: examplePauseMs }] : [])
      ];
    }

    function getImperativeAudioItems(item) {
      return [
        { text: item.form },
        { text: item.example, pauseBefore: examplePauseMs },
        { text: item.negative, pauseBefore: examplePauseMs }
      ];
    }

    function renderImperativeTable(container, rows) {
      container.innerHTML = "";
      if (!rows.length) {
        container.innerHTML = `<div class="empty-state">No imperative forms available.</div>`;
        return;
      }

      rows.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card imperative-card";
        button.type = "button";
        button.innerHTML = `
          <div class="tiny-label">${item.person} form — subject pronoun omitted</div>
          <div class="conjugation-main">${item.form}</div>
          ${item.ipa ? `<div class="verb-ipa">${item.ipa}</div>` : ""}
          <div class="translation">${item.en}</div>
          <div class="grammar-note"><strong>Example:</strong> ${item.example}</div>
          <div class="translation">${item.exampleEn}</div>
          <div class="grammar-note"><strong>Negative:</strong> ${item.negative}</div>
          <div class="translation">${item.negativeEn}</div>
        `;
        button.addEventListener("click", () => {
          speakSequence(getImperativeAudioItems(item), button);
        });
        container.appendChild(button);
      });
    }

    function renderVerbTable(container, rows) {
      container.innerHTML = "";
      if (!rows.length) {
        container.innerHTML = `<div class="empty-state">No conjugations available.</div>`;
        return;
      }

      function createVerbCellCard(item) {
        const examples = getVerbExamples(item);
        const ipa = item.ipa || verbPhraseIpa[item.full] || "";
        const card = document.createElement("div");
        card.className = "verb-cell-card";
        card.dataset.rowIndex = String(rows.indexOf(item));
        card.innerHTML = `
          <button class="verb-form-btn" type="button">
            <div class="tiny-label">Click for pronoun + verb only</div>
            <div class="conjugation-main">${item.full}</div>
            ${ipa ? `<div class="verb-ipa">${ipa}</div>` : ""}
            <div class="translation">${item.en}</div>
          </button>
          <div class="verb-example-list">
            ${examples.map((example, index) => `
              <button class="verb-example-btn" type="button" data-example-index="${index}">
                <div class="tiny-label">${example.meaning ? example.meaning : examples.length > 1 ? `Example ${index + 1}` : "Example"}</div>
                <div class="translation">${example.en}</div>
                <div class="verb-example-line"><strong>${example.statementLabel || "Statement"}:</strong> ${example.fr}</div>
                ${example.negative ? `<div class="verb-example-line"><strong>Negative:</strong> ${example.negative}</div>` : ""}
                ${example.question ? `<div class="verb-example-line"><strong>Question:</strong> ${example.question}</div>` : ""}
              </button>
            `).join("")}
          </div>
        `;
        return card;
      }

      function findVerbRow(pronouns) {
        return pronouns
          .map(pronoun => rows.find(item => item.pronoun === pronoun))
          .find(Boolean);
      }

      function createVerbAlignmentPlaceholder(label) {
        const placeholder = document.createElement("div");
        placeholder.className = "verb-cell-placeholder";
        placeholder.innerHTML = `
          <span class="tiny-label">${label}</span>
          <span>Not used for this verb</span>
        `;
        return placeholder;
      }

      const pairedRows = [
        { singularLabel: "je / j’", singular: findVerbRow(["je", "j’"]), pluralLabel: "nous", plural: findVerbRow(["nous"]) },
        { singularLabel: "tu", singular: findVerbRow(["tu"]), pluralLabel: "vous", plural: findVerbRow(["vous"]) },
        { singularLabel: "il", singular: findVerbRow(["il"]), pluralLabel: "ils", plural: findVerbRow(["ils"]) },
        { singularLabel: "elle", singular: findVerbRow(["elle"]), pluralLabel: "elles", plural: findVerbRow(["elles"]) }
      ].filter(pair => pair.singular || pair.plural);
      const endingItems = ["on"]
        .map(pronoun => rows.find(item => item.pronoun === pronoun))
        .filter(Boolean);

      if (!pairedRows.length && !endingItems.length) {
        container.innerHTML = `<div class="empty-state">No singular or plural conjugations available.</div>`;
        return;
      }

      if (pairedRows.length) {
        const header = document.createElement("div");
        header.className = "verb-pair-header";
        header.innerHTML = `
          <div>Singular</div>
          <div>Plural</div>
        `;
        container.appendChild(header);
      }

      pairedRows.forEach(pair => {
        const rowEl = document.createElement("div");
        rowEl.className = "verb-pair-row";

        [
          { item: pair.singular, fallbackLabel: pair.singularLabel },
          { item: pair.plural, fallbackLabel: pair.pluralLabel }
        ].forEach(entry => {
          try {
            rowEl.appendChild(entry.item ? createVerbCellCard(entry.item) : createVerbAlignmentPlaceholder(entry.fallbackLabel));
          } catch (error) {
            rowEl.appendChild(createRenderErrorCard(`${entry.item && entry.item.full ? entry.item.full : "Verb row"} failed to render`, error));
            console.error("Verb row failed to render", entry.item, error);
          }
        });

        container.appendChild(rowEl);
      });

      endingItems.forEach(item => {
        const columnEl = document.createElement("div");
        columnEl.className = "verb-extra-column";
        columnEl.innerHTML = `<div class="verb-column-title">On — spoken French</div>`;
        try {
          columnEl.appendChild(createVerbCellCard(item));
        } catch (error) {
          columnEl.appendChild(createRenderErrorCard(`${item && item.full ? item.full : "Verb row"} failed to render`, error));
          console.error("Verb row failed to render", item, error);
        }
        container.appendChild(columnEl);
      });

      container._verbRows = rows;
      if (container.dataset.audioDelegated !== "true") {
        container.dataset.audioDelegated = "true";
        container.addEventListener("click", event => {
          const button = event.target.closest(".verb-form-btn, .verb-example-btn");
          if (!button || !container.contains(button)) return;
          const card = button.closest(".verb-cell-card");
          const item = card && container._verbRows[Number(card.dataset.rowIndex)];
          if (!item) return;

          if (button.classList.contains("verb-form-btn")) {
            speakSequence(getVerbConjugationAudioItems(item), button);
            return;
          }

          const example = getVerbExamples(item)[Number(button.dataset.exampleIndex)];
          if (example) speakSequence(getVerbExampleAudioItems(example), button);
        });
      }
    }

    function getFaireExpressionAudioItems(item) {
      return [
        { text: item.expression },
        { text: item.example, pauseBefore: examplePauseMs },
        { text: item.negative, pauseBefore: examplePauseMs }
      ];
    }

    function renderFaireExpressionTable(container, list = faireExpressionRows) {
      const target = container;
      if (!target) return;
      target.innerHTML = "";
      if (!list.length) {
        target.innerHTML = `<div class="empty-state">No faire expressions available.</div>`;
        return;
      }

      target.innerHTML = `
        <div class="noun-rule-header">
          <div>Expression</div>
          <div>Meaning / rule</div>
          <div>Example + negation</div>
        </div>
      `;

      list.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Expression</span>
            <div class="french-line">${item.expression}</div>
          </div>
          <div>
            <span class="question-cell-label">Meaning</span>
            <div class="translation">${item.meaning}</div>
            <div class="grammar-note">${item.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Example</span>
            <button class="noun-example-btn" type="button" data-faire-expression-index="${index}">
              <span class="noun-example-main">${item.example}</span>
              <span class="translation">${item.exampleEn}</span>
              <span class="noun-example-main">Negative: ${item.negative}</span>
              <span class="translation">${item.negativeEn}</span>
            </button>
          </div>
        `;
        row.querySelector(".noun-example-btn").addEventListener("click", buttonEvent => {
          const expression = list[Number(buttonEvent.currentTarget.dataset.faireExpressionIndex)];
          speakSequence(getFaireExpressionAudioItems(expression), buttonEvent.currentTarget);
        });
        target.appendChild(row);
      });
    }

    function getAvoirExpressionAudioItems(example) {
      return [
        { text: example.fr },
        { text: example.negative, pauseBefore: examplePauseMs },
        { text: example.question, pauseBefore: examplePauseMs }
      ];
    }

    function renderAvoirExpressions(list = FR.data.grammar.avoirExpressions) {
      if (!avoirExpressionGrid) return;
      avoirExpressionGrid.innerHTML = "";
      if (!list.length) {
        avoirExpressionGrid.innerHTML = `<div class="empty-state">No avoir expressions available.</div>`;
        return;
      }

      avoirExpressionGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Expression</div>
          <div>Meaning / structure</div>
          <div>Noun and infinitive examples</div>
        </div>
      `;

      list.forEach((item, rowIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Expression</span>
            <button class="preposition-word-btn avoir-expression-word-btn" type="button">
              <span class="french-line">${item.expression}</span>
              <span class="verb-ipa">${item.ipa}</span>
              <span class="translation">${item.meaning}</span>
            </button>
          </div>
          <div>
            <span class="question-cell-label">Meaning / structure</span>
            <div class="grammar-note">${item.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${item.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-example-index="${exampleIndex}">
                  <span class="subject-form-tag">${example.label}</span>
                  <span class="noun-example-main"><strong>Statement:</strong> ${example.fr}</span>
                  <span class="translation">${example.en}</span>
                  <span class="noun-example-main"><strong>Negative:</strong> ${example.negative}</span>
                  <span class="translation">${example.negativeEn}</span>
                  <span class="noun-example-main"><strong>Question:</strong> ${example.question}</span>
                  <span class="translation">${example.questionEn}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;

        row.querySelector(".avoir-expression-word-btn").addEventListener("click", buttonEvent => {
          speak(item.expression, buttonEvent.currentTarget);
        });
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", buttonEvent => {
            const example = list[rowIndex].examples[Number(buttonEvent.currentTarget.dataset.exampleIndex)];
            speakSequence(getAvoirExpressionAudioItems(example), buttonEvent.currentTarget);
          });
        });
        avoirExpressionGrid.appendChild(row);
      });
    }

    function renderExamples(list = exampleSentences) {
      exampleGrid.innerHTML = "";
      list.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card";
        button.type = "button";
        button.innerHTML = `
          <div class="french-line">${item.fr}</div>
          <div class="translation">${item.en}</div>
          <div class="grammar-note">${item.note}</div>
          ${item.negative ? `
            <div class="grammar-note"><strong>Negative:</strong> ${item.negative}</div>
            <div class="translation">${item.negativeEn}</div>
          ` : ""}
        `;
        button.addEventListener("click", () => {
          speakSequence([
            { text: item.fr },
            ...(item.negative ? [{ text: item.negative, pauseBefore: examplePauseMs }] : [])
          ], button);
        });
        exampleGrid.appendChild(button);
      });
    }
