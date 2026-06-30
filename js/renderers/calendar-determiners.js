    function renderCalendarCards(container, list, emptyMessage) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }
      list.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card";
        button.type = "button";
        button.innerHTML = `
          <div class="french-line">${item.fr}</div>
          ${item.ipa ? `<div class="calendar-ipa">${item.ipa}</div>` : ""}
          <div class="translation">${item.en}</div>
          <div class="grammar-note">${item.note}</div>
          <div class="translation"><strong>Example:</strong> ${item.example}</div>
          <div class="translation">${item.exampleEn}</div>
        `;
        button.addEventListener("click", () => speakWithPause(item.speech || item.fr, item.example, button));
        container.appendChild(button);
      });
    }

    function renderDeterminerCards(container, list) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">No matches in this category.</div>`;
        return;
      }
      list.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card";
        button.type = "button";
        button.innerHTML = `
          <div class="french-line">${item.fr}</div>
          <div class="translation">${item.en}</div>
          <div class="grammar-note">${item.note}</div>
          <div class="translation"><strong>Example:</strong> ${item.example}</div>
          <div class="translation">${item.exampleEn}</div>
        `;
        button.addEventListener("click", () => speakWithPause(item.speech || item.fr, item.example, button));
        container.appendChild(button);
      });
    }

    function renderArticleComparison(rows = articleComparisonRows) {
      articleComparisonGrid.innerHTML = "";
      if (!rows.length) {
        articleComparisonGrid.innerHTML = `<div class="empty-state">No article pairs available.</div>`;
        return;
      }

      articleComparisonGrid.innerHTML = `
        <div class="article-comparison-header">Definite: the</div>
        <div class="article-comparison-header">Indefinite: a / an / some</div>
      `;

      rows.forEach(row => {
        [row.definite, row.indefinite].forEach(item => {
          const button = document.createElement("button");
          button.className = "example-card article-comparison-cell";
          button.type = "button";
          button.innerHTML = `
            <div class="matrix-label">${row.label}</div>
            <div class="french-line">${item.fr}</div>
            <div class="translation">${item.en}</div>
            <div class="grammar-note">${item.note}</div>
            <div class="translation"><strong>Example:</strong> ${item.example}</div>
            <div class="translation">${item.exampleEn}</div>
          `;
          button.addEventListener("click", () => speakWithPause(item.speech || item.fr, item.example, button));
          articleComparisonGrid.appendChild(button);
        });
      });
    }

    function renderPartitiveArticles(rows = partitiveArticleRows) {
      partitiveArticleGrid.innerHTML = "";
      if (!rows.length) {
        partitiveArticleGrid.innerHTML = `<div class="empty-state">No partitive article examples available.</div>`;
        return;
      }

      rows.forEach(row => {
        const examples = row.examples || [{ fr: row.example, en: row.exampleEn }];
        const button = document.createElement("button");
        button.className = "example-card partitive-article-card";
        button.type = "button";
        button.innerHTML = `
          <div class="matrix-label">${row.label}</div>
          <div class="french-line">${row.fr}</div>
          <div class="translation">${row.en}</div>
          <div class="grammar-note">${row.note}</div>
          <div class="noun-example-list">
            ${examples.map(example => `
              <span>
                <span class="noun-example-main">${example.fr}</span>
                <span class="translation">${example.en}</span>
              </span>
            `).join("")}
          </div>
        `;
        button.addEventListener("click", () => {
          speakSequence([
            { text: row.speech || row.fr },
            ...examples.map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
          ], button);
        });
        partitiveArticleGrid.appendChild(button);
      });
    }

    function renderDemonstrativeTable(rows = demonstrativeRows) {
      demonstrativeGrid.innerHTML = "";
      if (!rows.length) {
        demonstrativeGrid.innerHTML = `<div class="empty-state">No demonstrative determiners available.</div>`;
        return;
      }

      const genders = ["Masculine", "Feminine"];
      const numbers = ["Singular", "Plural"];
      const findRow = (gender, number) => rows.find(row => row.gender === gender && row.number === number);

      demonstrativeGrid.innerHTML = `
        <div class="demonstrative-corner">Gender / number</div>
        ${numbers.map(number => `<div class="demonstrative-axis-header">${number}</div>`).join("")}
      `;

      genders.forEach(gender => {
        const rowHeader = document.createElement("div");
        rowHeader.className = "demonstrative-row-header";
        rowHeader.textContent = gender;
        demonstrativeGrid.appendChild(rowHeader);

        numbers.forEach(number => {
          const row = findRow(gender, number);
          if (!row) {
            const emptyCell = document.createElement("div");
            emptyCell.className = "demonstrative-card";
            emptyCell.innerHTML = `<div class="empty-state">No ${gender.toLowerCase()} ${number.toLowerCase()} form.</div>`;
            demonstrativeGrid.appendChild(emptyCell);
            return;
          }

          const cell = document.createElement("div");
          cell.className = "demonstrative-card";
          cell.innerHTML = `
            <div class="demonstrative-mobile-label">${row.gender} · ${row.number}</div>
            <div class="demonstrative-form-list"></div>
          `;

          const formList = cell.querySelector(".demonstrative-form-list");
          row.forms.forEach((form) => {
            const examples = form.examples || [{ fr: form.example, en: form.exampleEn }];
            const button = document.createElement("button");
            button.className = "demonstrative-form-btn";
            button.type = "button";
            button.innerHTML = `
              <span class="demonstrative-form">${form.fr}</span>
              <span class="translation">${form.en}</span>
              <span class="grammar-note">${form.note}</span>
              <span class="demonstrative-examples">
                ${examples.map(example => `
                  <span>
                    <span class="french-line">${example.fr}</span>
                    <span class="translation">${example.en}</span>
                  </span>
                `).join("")}
              </span>
            `;
            button.addEventListener("click", () => {
              speakSequence([
                { text: form.fr },
                ...examples.map(example => ({ text: example.fr, pauseBefore: examplePauseMs }))
              ], button);
            });
            formList.appendChild(button);
          });

          demonstrativeGrid.appendChild(cell);
        });
      });
    }

    function renderPossessives(list = possessiveRows) {
      possessiveGrid.innerHTML = "";
      if (!list.length) {
        possessiveGrid.innerHTML = `<div class="empty-state">No possessive determiners available.</div>`;
        return;
      }

      const rowPairs = [
        { singularZh: "我", singular: list[0], pluralZh: "我们", plural: list[3] },
        { singularZh: "你", singular: list[1], pluralZh: "你们", plural: list[4] },
        { singularZh: "他 / 她", singular: list[2], pluralZh: "他们 / 她们", plural: list[5] }
      ].filter(row => row.singular && row.plural);

      possessiveGrid.innerHTML = `
        <div class="tonic-pronoun-header">
          <div>Singular Chinese</div>
          <div>Singular French</div>
          <div>Plural Chinese</div>
          <div>Plural French</div>
        </div>
      `;

      const renderForms = row => `
        <div class="tonic-pronoun-form-list">
          ${row.forms.map(form => `
            <div class="pronoun-study-card poss-study-card">
              <button class="pronoun-card tonic-pronoun-form-btn pronoun-word-btn poss-word-btn" type="button" data-speech="${form.form}">
                <span class="matrix-label">${form.label}</span>
                <span class="pronoun-main">${form.form}</span>
                ${form.ipa ? `<span class="pronoun-ipa">${form.ipa}</span>` : ""}
              </button>
              <button class="pronoun-example-btn poss-example-btn" type="button" data-example="${form.example}">
                <span class="tiny-label">Example</span>
                <span class="noun-example-main">${form.example}</span>
                <span class="translation">${form.exampleEn}</span>
              </button>
            </div>
          `).join("")}
        </div>
      `;

      rowPairs.forEach(rowData => {
        const rowEl = document.createElement("div");
        rowEl.className = "tonic-pronoun-row";
        rowEl.innerHTML = `
          <div class="tonic-pronoun-cell tonic-pronoun-zh">
            <span class="tonic-pronoun-cell-label">Singular Chinese</span>
            <span>${rowData.singularZh}</span>
            <span class="matrix-label">${rowData.singular.owner}</span>
          </div>
          <div class="tonic-pronoun-cell">
            <span class="tonic-pronoun-cell-label">Singular French</span>
            <div class="matrix-label">${rowData.singular.note}</div>
            ${renderForms(rowData.singular)}
          </div>
          <div class="tonic-pronoun-cell tonic-pronoun-zh">
            <span class="tonic-pronoun-cell-label">Plural Chinese</span>
            <span>${rowData.pluralZh}</span>
            <span class="matrix-label">${rowData.plural.owner}</span>
          </div>
          <div class="tonic-pronoun-cell">
            <span class="tonic-pronoun-cell-label">Plural French</span>
            <div class="matrix-label">${rowData.plural.note}</div>
            ${renderForms(rowData.plural)}
          </div>
        `;
        rowEl.querySelectorAll(".poss-word-btn").forEach(button => {
          button.addEventListener("click", () => speak(button.dataset.speech, button));
        });
        rowEl.querySelectorAll(".poss-example-btn").forEach(button => {
          button.addEventListener("click", () => speak(button.dataset.example, button));
        });

        possessiveGrid.appendChild(rowEl);
      });
    }

    function renderPossessiveExceptions(list = possessiveExceptions) {
      renderDeterminerCards(possessiveExceptionGrid, list);
    }
