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

    function renderAgreementMatrixRows(container, rows, emptyMessage) {
      container.innerHTML = "";
      if (!rows.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      const genders = ["Masculine", "Feminine"];
      const numbers = ["Singular", "Plural"];
      const findForm = (forms, gender, number) => forms.find(form => form.gender === gender && form.number === number);

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "agreement-family-card";
        row.innerHTML = `
          <div class="adjective-family">
            <strong>${rowData.family}</strong>
            <span class="grammar-note">${rowData.note}</span>
          </div>
          <div class="agreement-matrix">
            <div class="demonstrative-corner">Number / gender</div>
            ${genders.map(gender => `<div class="demonstrative-axis-header">${gender}</div>`).join("")}
            ${numbers.map(number => `
              <div class="demonstrative-row-header">${number}</div>
              ${genders.map(gender => {
                const form = findForm(rowData.forms, gender, number);
                if (!form) {
                  return `<div class="agreement-cell"><div class="empty-state">No ${number.toLowerCase()} ${gender.toLowerCase()} form.</div></div>`;
                }
                const formIndex = rowData.forms.indexOf(form);
                return `
                  <div class="agreement-cell">
                    <div class="demonstrative-mobile-label">${number} · ${gender}</div>
                    <div class="french-line">${form.fr || form.label}</div>
                    <div class="grammar-note">${form.label}</div>
                    <div class="adjective-form-list">
                      ${form.examples.map((example, exampleIndex) => `
                        <button class="adjective-form-btn" type="button" data-row-index="${rowIndex}" data-form-index="${formIndex}" data-example-index="${exampleIndex}">
                          <span class="noun-example-main">${example.fr}</span>
                          <span class="translation">${example.en}</span>
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `;
              }).join("")}
            `).join("")}
          </div>
        `;
        row.querySelectorAll(".adjective-form-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rows[Number(button.dataset.rowIndex)]
              .forms[Number(button.dataset.formIndex)]
              .examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        container.appendChild(row);
      });
    }

    function renderSpecialAdjectiveForms(rows = specialAdjectiveForms) {
      renderAgreementMatrixRows(specialAdjectiveGrid, rows, "No special adjective forms available.");
    }

    function getAdverbialPronounForms(example, labels = {}) {
      return [
        { label: labels.statement || "Statement", ...example.statement },
        { label: labels.negative || "Negative", ...example.negative },
        { label: labels.question || "Question", ...example.question }
      ];
    }

    function renderAdverbAmountComparison(rows = adverbAmountComparisonRows) {
      if (!adverbAmountComparisonGrid) return;
      adverbAmountComparisonGrid.innerHTML = "";
      if (!rows.length) {
        adverbAmountComparisonGrid.innerHTML = `<div class="empty-state">No adverb comparison examples available.</div>`;
        return;
      }

      adverbAmountComparisonGrid.innerHTML = `
        <div class="amount-comparison-header">
          <div>Situation</div>
          <div>Beaucoup</div>
          <div>Un peu</div>
          <div>Peu</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "amount-comparison-card";
        row.innerHTML = `
          <div class="amount-scenario-cell">
            <span class="question-cell-label">Situation</span>
            <div class="french-line">${rowData.title}</div>
            <div class="grammar-note">${rowData.note}</div>
          </div>
          ${rowData.forms.map((form, formIndex) => `
            <div class="amount-comparison-cell">
              <span class="question-cell-label">${form.fr}</span>
              <button class="preposition-word-btn amount-word-btn" type="button" data-row-index="${rowIndex}" data-form-index="${formIndex}">
                <div class="french-line">${form.fr}</div>
                <div class="calendar-ipa">${form.ipa}</div>
                <div class="translation">${form.en}</div>
              </button>
              <div class="grammar-note">${form.note}</div>
              <div class="noun-example-list">
                ${form.examples.map((example, exampleIndex) => `
                  <button class="noun-example-btn" type="button" data-row-index="${rowIndex}" data-form-index="${formIndex}" data-example-index="${exampleIndex}">
                    <span class="noun-example-main">${example.fr}</span>
                    <span class="translation">${example.en}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        `;

        row.querySelectorAll(".amount-word-btn").forEach(button => {
          button.addEventListener("click", () => {
            const form = rows[Number(button.dataset.rowIndex)].forms[Number(button.dataset.formIndex)];
            speak(form.speech || form.fr, button);
          });
        });
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const form = rows[Number(button.dataset.rowIndex)].forms[Number(button.dataset.formIndex)];
            const example = form.examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        adverbAmountComparisonGrid.appendChild(row);
      });
    }

    function renderTransitionWords(rows = transitionWordRows) {
      if (!transitionWordsGrid) return;
      transitionWordsGrid.innerHTML = "";
      if (!rows.length) {
        transitionWordsGrid.innerHTML = `<div class="empty-state">No transition words available.</div>`;
        return;
      }

      transitionWordsGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Transition word</div>
          <div>Use</div>
          <div>Examples</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Word</span>
            <button class="preposition-word-btn" type="button" data-row-index="${rowIndex}">
              <div class="french-line">${rowData.fr}</div>
              <div class="calendar-ipa">${rowData.ipa}</div>
              <div class="translation">${rowData.en}</div>
            </button>
          </div>
          <div>
            <span class="question-cell-label">Use</span>
            <div class="grammar-note">${rowData.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${rowData.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-row-index="${rowIndex}" data-example-index="${exampleIndex}">
                  <span class="noun-example-main">${example.fr}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelector(".preposition-word-btn").addEventListener("click", () => {
          speak(rowData.speech || rowData.fr, row.querySelector(".preposition-word-btn"));
        });
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rows[Number(button.dataset.rowIndex)].examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        transitionWordsGrid.appendChild(row);
      });
    }

    function renderAdverbialPronouns(rows = adverbialPronounRows) {
      if (!adverbialPronounGrid) return;
      adverbialPronounGrid.innerHTML = "";
      if (!rows.length) {
        adverbialPronounGrid.innerHTML = `<div class="empty-state">No adverbial pronoun examples available.</div>`;
        return;
      }

      adverbialPronounGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Pattern</div>
          <div>Placement rule</div>
          <div>Examples</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Pattern</span>
            <div class="french-line">${rowData.title}</div>
            <div class="matrix-label">${rowData.pattern}</div>
          </div>
          <div>
            <span class="question-cell-label">Placement</span>
            <div class="grammar-note">${rowData.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${rowData.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-row-index="${rowIndex}" data-example-index="${exampleIndex}">
                  <span class="subject-form-tag">${example.label}</span>
                  <span class="translation">${example.meaning}</span>
                  ${getAdverbialPronounForms(example, rowData.labels).map(sentence => `
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
            const currentRow = rows[Number(button.dataset.rowIndex)];
            const example = currentRow.examples[Number(button.dataset.exampleIndex)];
            speakSequence(getAdverbialPronounForms(example, currentRow.labels).map((sentence, index) => ({
              text: sentence.fr,
              pauseBefore: index ? examplePauseMs : 0
            })), button);
          });
        });
        adverbialPronounGrid.appendChild(row);
      });
    }

    function renderModifierRuleTable(target, rows, emptyMessage) {
      if (!target) return;
      target.innerHTML = "";
      if (!rows.length) {
        target.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      target.innerHTML = `
        <div class="noun-rule-header">
          <div>Word</div>
          <div>Use</div>
          <div>Examples</div>
        </div>
      `;

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card";
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Word</span>
            <div class="french-line">${rowData.fr}</div>
            <div class="translation">${rowData.meaning}</div>
          </div>
          <div>
            <span class="question-cell-label">Use</span>
            <div class="matrix-label">${rowData.type}</div>
            <div class="grammar-note">${rowData.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list">
              ${rowData.examples.map((example, exampleIndex) => `
                <button class="noun-example-btn" type="button" data-row-index="${rowIndex}" data-example-index="${exampleIndex}">
                  ${example.subject ? `<span class="subject-form-tag">${example.subject}</span>` : ""}
                  <span class="noun-example-main">${example.fr}</span>
                  <span class="translation">${example.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".noun-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rows[Number(button.dataset.rowIndex)].examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        target.appendChild(row);
      });
    }

    function renderModifierComparison(rows = modifierComparisonRows) {
      renderModifierRuleTable(modifierComparisonGrid, rows, "No modifier comparison examples available.");
    }

    function renderToutAdverbUsage(rows = toutAdverbRows) {
      renderModifierRuleTable(toutAdverbGrid, rows, "No adverbial tout examples available.");
    }

    function renderToutForms(rows = toutFormRows) {
      renderAgreementMatrixRows(toutFormsGrid, rows, "No tout forms available.");
    }

    function renderPrepositionTable(targetGrid, list, emptyMessage) {
      if (!targetGrid) return;
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
        const examples = getPrepositionExamples(item);
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
              ${examples.map((example, exampleIndex) => `
                <button class="preposition-example-btn" type="button" data-item-index="${itemIndex}" data-example-index="${exampleIndex}">
                  <div class="translation"><strong>${example.fr}</strong></div>
                  <div class="translation">${example.en}</div>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelector(".preposition-word-btn").addEventListener("click", () => {
          speak(item.speech || item.fr, row.querySelector(".preposition-word-btn"));
        });
        row.querySelectorAll(".preposition-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const currentItem = list[Number(button.dataset.itemIndex)];
            const example = getPrepositionExamples(currentItem)[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        targetGrid.appendChild(row);
      });
    }

    function renderPrepositions(list = placePrepositions) {
      renderPrepositionTable(corePrepositionTable, corePrepositions, "No core prepositions available.");
      renderPrepositionTable(commonPrepositionUsageTable, commonPrepositionUsages, "No common preposition usage patterns available.");
      renderPrepositionTable(prepositionAArticleGrid, aArticleRules, "No à + article rules available.");
      renderPrepositionTable(prepositionDeArticleGrid, deArticleRules, "No de + article rules available.");
      renderPrepositionTable(prepositionTable, list, "No prepositions available.");
      renderPrepositionTable(timePrepositionTable, timePrepositions, "No time prepositions available.");
      renderPrepositionTable(dePrepositionVsArticleGrid, dePrepositionVsArticleRows, "No de comparison examples available.");
    }
