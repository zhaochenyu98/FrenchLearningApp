    function getPronunciationIpa(example) {
      return example.ipa || pronunciationIpa[example.fr] || "";
    }

    function renderPronunciationRuleGroups(container, list, emptyMessage) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      list.forEach(group => {
        const row = document.createElement("div");
        row.className = "pronunciation-row";
        const examplesMarkup = group.rules.map((rule, ruleIndex) => `
          <div class="pronunciation-example-group">
            <strong class="pronunciation-rule">${rule.rule}</strong>
            <div class="pronunciation-word-list">
              ${rule.examples.map((example, exampleIndex) => `
                <button class="pronunciation-word-btn" type="button" data-rule-index="${ruleIndex}" data-example-index="${exampleIndex}">
                  <span class="pronunciation-word-fr">${example.fr}</span>
                  <span class="pronunciation-word-ipa">${getPronunciationIpa(example)}</span>
                  <span class="pronunciation-word-zh">${example.zh}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `).join("");
        row.innerHTML = `
          <div class="pronunciation-sound">${group.sound}</div>
          <div class="pronunciation-examples">${examplesMarkup}</div>
        `;
        row.querySelectorAll(".pronunciation-word-btn").forEach(button => {
          button.addEventListener("click", () => {
            const rule = group.rules[Number(button.dataset.ruleIndex)];
            const example = rule.examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        container.appendChild(row);
      });
    }

    function renderPronunciationRules(list = pronunciationRules) {
      renderPronunciationRuleGroups(pronunciationGrid, list, "No vowel pronunciation rules available.");
    }

    function renderConsonantPronunciationRules(list = consonantPronunciationRules) {
      renderPronunciationRuleGroups(consonantPronunciationGrid, list, "No consonant pronunciation rules available.");
    }

    function renderLiaisonRules(container, list, emptyMessage) {
      if (!container) return;
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      list.forEach((group, groupIndex) => {
        const row = document.createElement("div");
        row.className = "pronunciation-row";
        row.innerHTML = `
          <div class="pronunciation-sound liaison-sound">${group.sound}</div>
          <div class="pronunciation-examples">
            <div class="pronunciation-example-group">
              <strong class="pronunciation-rule">${group.rule}</strong>
              <p class="liaison-rule-note">${group.note}</p>
              <div class="pronunciation-word-list">
                ${group.examples.map((example, exampleIndex) => `
                  <button class="pronunciation-word-btn" type="button" data-group-index="${groupIndex}" data-example-index="${exampleIndex}">
                    <span class="pronunciation-word-fr">${example.fr}</span>
                    <span class="pronunciation-word-ipa">${example.ipa}</span>
                    <span class="pronunciation-word-zh">${example.zh}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        `;
        row.querySelectorAll(".pronunciation-word-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = list[Number(button.dataset.groupIndex)].examples[Number(button.dataset.exampleIndex)];
            speak(example.fr, button);
          });
        });
        container.appendChild(row);
      });
    }

    function renderMandatoryLiaisons(list = mandatoryLiaisonRules) {
      renderLiaisonRules(mandatoryLiaisonGrid, list, "No mandatory liaison rules available.");
    }

    function renderOptionalLiaisons(list = optionalLiaisonRules) {
      renderLiaisonRules(optionalLiaisonGrid, list, "No optional liaison rules available.");
    }

    function renderForbiddenLiaisons(list = forbiddenLiaisonRules) {
      renderLiaisonRules(forbiddenLiaisonGrid, list, "No forbidden liaison rules available.");
    }

    function renderHPronunciationRules(list = hPronunciationRules) {
      renderPronunciationRuleGroups(hPronunciationGrid, list, "No h pronunciation rules available.");
    }

    function renderConnectedSpeechRules(list = connectedSpeechRules) {
      renderPronunciationRuleGroups(connectedSpeechGrid, list, "No connected-speech rules available.");
    }

    function renderPronunciationContrasts(list = pronunciationContrastRules) {
      renderPronunciationRuleGroups(pronunciationContrastGrid, list, "No pronunciation contrasts available.");
    }

    function renderPronunciationMatrix(rows = pronunciationMatrixRows) {
      pronunciationMatrixGrid.innerHTML = "";
      if (!rows.length) {
        pronunciationMatrixGrid.innerHTML = `<div class="empty-state">No pronunciation table words available.</div>`;
        return;
      }

      pronunciationMatrixGrid.innerHTML = `
        <div class="pronunciation-matrix-header"></div>
        ${pronunciationMatrixColumns.map(column => `<div class="pronunciation-matrix-header">${column}</div>`).join("")}
      `;

      rows.forEach((row, rowIndex) => {
        const rowLabel = document.createElement("div");
        rowLabel.className = "pronunciation-matrix-row-label";
        rowLabel.textContent = row.sound;
        pronunciationMatrixGrid.appendChild(rowLabel);

        row.cells.forEach((item, cellIndex) => {
          const cell = document.createElement("div");
          cell.className = "pronunciation-matrix-cell";
          cell.innerHTML = `
            <button class="pronunciation-word-btn" type="button" data-row-index="${rowIndex}" data-cell-index="${cellIndex}">
              <span class="pronunciation-word-fr">${item.fr}</span>
              <span class="pronunciation-word-ipa">${getPronunciationIpa(item)}</span>
              <span class="pronunciation-word-zh">${item.zh}</span>
            </button>
          `;
          cell.querySelector(".pronunciation-word-btn").addEventListener("click", (event) => {
            const word = rows[Number(event.currentTarget.dataset.rowIndex)].cells[Number(event.currentTarget.dataset.cellIndex)];
            speak(word.fr, event.currentTarget);
          });
          pronunciationMatrixGrid.appendChild(cell);
        });
      });
    }

    function renderPronunciationPractice(groups = pronunciationPracticeGroups) {
      pronunciationPracticeGrid.innerHTML = "";
      if (!groups.length) {
        pronunciationPracticeGrid.innerHTML = `<div class="empty-state">No practice words available.</div>`;
        return;
      }

      groups.forEach((group, groupIndex) => {
        const section = document.createElement("div");
        section.className = "pronunciation-example-group";
        section.innerHTML = `
          <strong>${group.label}</strong>
          <div class="pronunciation-word-list">
            ${group.words.map((item, wordIndex) => `
              <button class="pronunciation-word-btn" type="button" data-group-index="${groupIndex}" data-word-index="${wordIndex}">
                <span class="pronunciation-word-fr">${item.fr}</span>
                <span class="pronunciation-word-ipa">${getPronunciationIpa(item)}</span>
                <span class="pronunciation-word-zh">${item.zh}</span>
              </button>
            `).join("")}
          </div>
        `;
        section.querySelectorAll(".pronunciation-word-btn").forEach(button => {
          button.addEventListener("click", () => {
            const word = group.words[Number(button.dataset.wordIndex)];
            speak(word.fr, button);
          });
        });
        pronunciationPracticeGrid.appendChild(section);
      });
    }
