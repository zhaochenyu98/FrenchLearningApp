    function renderQuelForms() {
      quelFormsGrid.innerHTML = "";

      quelForms.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card quel-form-card";
        button.type = "button";
        button.innerHTML = `
          <div class="matrix-label">${item.gender} ${item.number}</div>
          <div class="quel-form-main">${item.form}</div>
          <div class="translation">${item.example}</div>
          <div class="translation">${item.exampleEn}</div>
        `;
        button.addEventListener("click", () => speakWithPause(item.form, item.example, button));
        quelFormsGrid.appendChild(button);
      });
    }

    function renderQuestionComparison(container, columns, rows, emptyMessage) {
      container.innerHTML = "";
      if (!rows.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }

      const header = document.createElement("div");
      header.className = "quel-comparison-header";
      header.style.setProperty("--comparison-cols", columns.length);
      header.innerHTML = `
        <div>Same idea</div>
        ${columns.map(column => `<div>${column.title}<br><span>${column.note}</span></div>`).join("")}
      `;
      container.appendChild(header);

      rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.className = "quel-comparison-row";
        row.style.setProperty("--comparison-cols", columns.length);
        row.innerHTML = `
          <div class="quel-comparison-topic">
            <strong>${rowData.en}</strong>
            <span>${rowData.topic}</span>
            ${rowData.agreement ? `<span>${rowData.agreement}</span>` : ""}
          </div>
          ${columns.map(column => {
            const example = rowData.examples[column.key];
            return `
              <div class="quel-comparison-cell">
                <span class="quel-comparison-cell-label">${column.title}</span>
                <button class="question-example-btn" type="button" data-row-index="${rowIndex}" data-column-key="${column.key}">
                  <div class="translation"><strong>${example.fr}</strong></div>
                  <div class="translation">${example.en}</div>
                </button>
              </div>
            `;
          }).join("")}
        `;
        row.querySelectorAll(".question-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const example = rows[Number(button.dataset.rowIndex)].examples[button.dataset.columnKey];
            speak(example.fr, button);
          });
        });
        container.appendChild(row);
      });
    }

    function renderQuelExamples(rows = quelExampleRows) {
      renderQuestionComparison(quelExamplesGrid, quelExampleColumns, rows, "No quel examples available.");
    }

    function renderQuelEtreExamples(rows = quelEtreSpecialRows) {
      renderQuestionComparison(quelEtreExamplesGrid, quelEtreSpecialColumns, rows, "No quel + être examples available.");
    }

    function renderQueExamples(rows = queExampleRows) {
      renderQuestionComparison(queExamplesGrid, queExampleColumns, rows, "No que / quoi examples available.");
    }

    function renderQueCestExamples(rows = queCestSpecialRows) {
      renderQuestionComparison(queCestExamplesGrid, queCestSpecialColumns, rows, "No c’est quoi examples available.");
    }

    function renderQuestionWords(list = questionWords) {
      questionWordsGrid.innerHTML = "";
      if (!list.length) {
        questionWordsGrid.innerHTML = `<div class="empty-state">No question words available.</div>`;
        return;
      }
      questionWordsGrid.innerHTML = `
        <div class="question-table-header">
          <div>French question word</div>
          <div>English equivalent</div>
          <div>Example sentences</div>
        </div>
      `;
      list.forEach(item => {
        const row = document.createElement("div");
        row.className = "question-row-card";
        const examplesMarkup = item.examples.map((example, index) => `
          <div class="question-example">
            <button class="question-example-btn" type="button" data-example-index="${index}">
              ${getExampleVariants(example).map((variant, variantIndex) => `
                <div class="${variantIndex ? "question-variant" : ""}">
                  <div class="translation"><strong>${variant.fr}</strong></div>
                  <div class="translation">${variant.en}</div>
                </div>
              `).join("")}
            </button>
          </div>
        `).join("");
        row.innerHTML = `
          <div>
            <span class="question-cell-label">French</span>
            <button class="question-word-btn" type="button">
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
            <div class="question-examples">${examplesMarkup}</div>
          </div>
        `;
        row.querySelector(".question-word-btn").addEventListener("click", (event) => {
          speak(item.speech || item.fr, event.currentTarget);
        });
        row.querySelectorAll(".question-example-btn").forEach(exampleButton => {
          exampleButton.addEventListener("click", () => {
            const example = item.examples[Number(exampleButton.dataset.exampleIndex)];
            speakSequence(getExampleVariants(example).map((variant, index) => ({
              text: variant.fr,
              pauseBefore: index ? examplePauseMs : 0
            })), exampleButton);
          });
        });
        questionWordsGrid.appendChild(row);
      });
    }

