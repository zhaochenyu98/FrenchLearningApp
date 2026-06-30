    function getNounPluralExamples(rules = nounPluralRules) {
      return rules.flatMap(rule => rule.examples);
    }

    function getJobGenderExamples(rules = jobGenderRules) {
      return rules.flatMap(rule => rule.examples);
    }

    function getUncountableNounExamples(groups = uncountableNounGroups) {
      return groups.flatMap(group => group.examples);
    }

    function speakNounPluralExample(example, card) {
      speakSequence([
        { text: example.singular },
        { text: example.plural, pauseBefore: examplePauseMs }
      ], card);
    }

    function speakJobGenderExample(example, card) {
      speakSequence([
        { text: example.masculine },
        { text: example.feminine, pauseBefore: examplePauseMs }
      ], card);
    }

    function speakUncountableNounExample(example, card) {
      speakSequence([
        { text: example.phrase },
        { text: example.example, pauseBefore: examplePauseMs }
      ], card);
    }

    function getAdjectiveRuleExamples(rules) {
      return rules.flatMap(rule => rule.examples);
    }

    function getSpecialAdjectiveExamples(rows = specialAdjectiveForms) {
      return rows.flatMap(row => row.forms.flatMap(form => form.examples));
    }

    function speakAdjectivePair(example, card) {
      speakSequence([
        { text: example.from },
        { text: example.to, pauseBefore: examplePauseMs }
      ], card);
    }

    function renderNounPluralRules(list = nounPluralRules) {
      nounRulesGrid.innerHTML = "";
      if (!list.length) {
        nounRulesGrid.innerHTML = `<div class="empty-state">No noun plural rules available.</div>`;
        return;
      }

      nounRulesGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Plural rule</div>
          <div>How it changes</div>
          <div>Practice examples</div>
        </div>
      `;

      list.forEach((rule, ruleIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Rule</span>
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
                  <span class="noun-example-main">${example.singular} → ${example.plural}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = list[Number(button.dataset.ruleIndex)].examples[Number(button.dataset.exampleIndex)];
            speakNounPluralExample(example, button);
          });
        });
        nounRulesGrid.appendChild(row);
      });
    }

    function renderJobGenderRules(list = jobGenderRules) {
      jobGenderRulesGrid.innerHTML = "";
      if (!list.length) {
        jobGenderRulesGrid.innerHTML = `<div class="empty-state">No job noun gender rules available.</div>`;
        return;
      }

      jobGenderRulesGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Feminine rule</div>
          <div>How it changes</div>
          <div>Practice examples</div>
        </div>
      `;

      list.forEach((rule, ruleIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Rule</span>
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
                  <span class="noun-example-main">${example.masculine} → ${example.feminine}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = list[Number(button.dataset.ruleIndex)].examples[Number(button.dataset.exampleIndex)];
            speakJobGenderExample(example, button);
          });
        });
        jobGenderRulesGrid.appendChild(row);
      });
    }

    function renderUncountableNounExamples(groups = uncountableNounGroups) {
      uncountableNounsGrid.innerHTML = "";
      if (!groups.length) {
        uncountableNounsGrid.innerHTML = `<div class="empty-state">No uncountable noun examples available.</div>`;
        return;
      }

      uncountableNounsGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Noun type</div>
          <div>What to notice</div>
          <div>Common examples</div>
        </div>
      `;

      groups.forEach((group, groupIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Type</span>
            <div class="french-line">${group.category}</div>
          </div>
          <div>
            <span class="question-cell-label">Pattern</span>
            <div class="grammar-note">${group.pattern}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${group.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-group-index="${groupIndex}" data-example-index="${exampleIndex}">
                  <span class="noun-example-main">${example.phrase}</span>
                  <span class="translation">${example.en} · ${example.note}</span>
                  <span class="grammar-note">${example.example}</span>
                  <span class="translation">${example.exampleEn}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = groups[Number(button.dataset.groupIndex)].examples[Number(button.dataset.exampleIndex)];
            speakUncountableNounExample(example, button);
          });
        });
        uncountableNounsGrid.appendChild(row);
      });
    }

    function renderAdjectiveRuleTable(container, list, emptyMessage, headers) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      container.innerHTML = `
        <div class="noun-rule-header">
          <div>${headers.rule}</div>
          <div>${headers.pattern}</div>
          <div>${headers.examples}</div>
        </div>
      `;

      list.forEach((rule, ruleIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Rule</span>
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
                  <span class="noun-example-main">${example.from} → ${example.to}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = list[Number(button.dataset.ruleIndex)].examples[Number(button.dataset.exampleIndex)];
            speakAdjectivePair(example, button);
          });
        });
        container.appendChild(row);
      });
    }

    function renderAdjectiveFeminineRules(list = adjectiveFeminineRules) {
      renderAdjectiveRuleTable(
        adjectiveFeminineGrid,
        list,
        "No adjective feminine rules available.",
        { rule: "Feminine rule", pattern: "How it changes", examples: "Masculine → feminine examples" }
      );
    }

    function renderAdjectivePluralRules(list = adjectivePluralRules) {
      renderAdjectiveRuleTable(
        adjectivePluralGrid,
        list,
        "No adjective plural rules available.",
        { rule: "Plural rule", pattern: "How it changes", examples: "Singular → plural examples" }
      );
    }

    function renderAdjectivePreposedPluralRules(list = adjectivePreposedPluralRules) {
      renderAdjectiveRuleTable(
        adjectivePreposedPluralGrid,
        list,
        "No preposed adjective rules available.",
        { rule: "Article rule", pattern: "How it changes", examples: "Singular → plural examples" }
      );
    }

    function renderSpecialAdjectiveForms(rows = specialAdjectiveForms) {
      specialAdjectiveGrid.innerHTML = "";
      if (!rows.length) {
        specialAdjectiveGrid.innerHTML = `<div class="empty-state">No special adjective forms available.</div>`;
        return;
      }

      specialAdjectiveGrid.innerHTML = `
        <div class="adjective-forms-header">
          <div>Adjective family</div>
          <div>Masculine singular</div>
          <div>Feminine singular</div>
          <div>Masculine plural</div>
          <div>Feminine plural</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "adjective-forms-row";
        row.innerHTML = `
          <div class="adjective-family">
            <strong>${rowData.family}</strong>
            <span class="grammar-note">${rowData.note}</span>
          </div>
          ${rowData.forms.map((form, formIndex) => `
            <div class="adjective-form-list">
              <span class="question-cell-label">${form.label}</span>
              ${form.examples.map((example, exampleIndex) => `
                <button class="adjective-form-btn" type="button" data-row-index="${rowIndex}" data-form-index="${formIndex}" data-example-index="${exampleIndex}">
                  <span class="noun-example-main">${example.fr}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          `).join("")}
        `;
        row.querySelectorAll(".adjective-form-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rows[Number(button.dataset.rowIndex)]
              .forms[Number(button.dataset.formIndex)]
              .examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        specialAdjectiveGrid.appendChild(row);
      });
    }

    function renderPrepositionTable(targetGrid, list, emptyMessage) {
      targetGrid.innerHTML = "";
      if (!list.length) {
        targetGrid.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      targetGrid.innerHTML = `
        <div class="preposition-header">
          <div>French preposition</div>
          <div>English meaning</div>
          <div>Example sentences</div>
        </div>
      `;

      list.forEach((item, itemIndex) => {
        const row = document.createElement("div");
        row.className = "preposition-row-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">French</span>
            <button class="preposition-word-btn" type="button" data-item-index="${itemIndex}">
              <div class="french-line">${item.fr}</div>
              <div class="grammar-note">${item.note}</div>
            </button>
          </div>
          <div>
            <span class="question-cell-label">English</span>
            <div class="translation">${item.en}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="preposition-example-list">
              ${item.examples.map((example, exampleIndex) => `
                <button class="preposition-example-btn" type="button" data-item-index="${itemIndex}" data-example-index="${exampleIndex}">
                  <div class="translation"><strong>${example.fr}</strong></div>
                  <div class="translation">${example.en}</div>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelector(".preposition-word-btn").addEventListener("click", () => {
          speak(item.fr, row.querySelector(".preposition-word-btn"));
        });
        row.querySelectorAll(".preposition-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = list[Number(button.dataset.itemIndex)].examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        targetGrid.appendChild(row);
      });
    }

    function renderPrepositions(list = placePrepositions) {
      renderPrepositionTable(prepositionTable, list, "No prepositions available.");
      renderPrepositionTable(timePrepositionTable, timePrepositions, "No time prepositions available.");
    }
