    function getTonicPronounForms(rows = tonicPronounRows) {
      return rows.flatMap(row => [...row.singularForms, ...row.pluralForms]);
    }

    function getTonicPronounUsageLines(rules = tonicPronounUsageRules) {
      return rules.flatMap(rule => rule.examples.flatMap(example => example.lines.map(line => line.fr)));
    }

    function renderTonicPronounForms(rows = tonicPronounRows) {
      tonicPronounGrid.innerHTML = "";
      if (!rows.length) {
        tonicPronounGrid.innerHTML = `<div class="empty-state">No tonic pronouns available.</div>`;
        return;
      }

      tonicPronounGrid.innerHTML = `
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
              ${rowData.singularForms.map(form => `
                <button class="pronoun-card tonic-pronoun-form-btn" type="button" data-speech="${form.fr}">
                  <span class="pronoun-main">${form.fr}</span>
                  <span class="translation">${form.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="tonic-pronoun-cell tonic-pronoun-zh">
            <span class="tonic-pronoun-cell-label">Plural Chinese</span>
            <span>${rowData.pluralZh}</span>
          </div>
          <div class="tonic-pronoun-cell">
            <span class="tonic-pronoun-cell-label">Plural French</span>
            <div class="tonic-pronoun-form-list">
              ${rowData.pluralForms.map(form => `
                <button class="pronoun-card tonic-pronoun-form-btn" type="button" data-speech="${form.fr}">
                  <span class="pronoun-main">${form.fr}</span>
                  <span class="translation">${form.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;
        row.querySelectorAll(".tonic-pronoun-form-btn").forEach(button => {
          button.addEventListener("click", () => speak(button.dataset.speech, button));
        });
        tonicPronounGrid.appendChild(row);
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
              pauseBefore: index < example.lines.length - 1 ? examplePauseMs : 0
            })), button);
          });
        });
        tonicPronounUsageGrid.appendChild(row);
      });
    }

    function getVerbExamples(item) {
      if (item.examples) return item.examples;
      return [{
        fr: item.example,
        en: item.exampleEn,
        negative: item.negative,
        negativeEn: item.negativeEn
      }];
    }

    function getVerbAudioItems(item) {
      return [
        { text: item.full },
        ...getVerbExamples(item).flatMap(example => ([
          { text: example.fr, pauseBefore: examplePauseMs },
          ...(example.negative ? [{ text: example.negative, pauseBefore: examplePauseMs }] : [])
        ]))
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

      const columns = [
        { title: "Singular", order: ["je", "j’", "tu", "il", "elle"] },
        { title: "Plural", order: ["nous", "vous", "ils", "elles"] }
      ].map(column => ({
        title: column.title,
        items: column.order
          .map(pronoun => rows.find(item => item.pronoun === pronoun))
          .filter(Boolean)
      }));

      if (!columns.some(column => column.items.length)) {
        container.innerHTML = `<div class="empty-state">No singular or plural conjugations available.</div>`;
        return;
      }

      columns.forEach(column => {
        const columnEl = document.createElement("div");
        columnEl.className = "verb-column";
        columnEl.innerHTML = `<div class="verb-column-title">${column.title}</div>`;

        column.items.forEach(item => {
          const examples = getVerbExamples(item);
          const ipa = verbPhraseIpa[item.full] || "";
          const button = document.createElement("button");
          button.className = "verb-cell-btn";
          button.type = "button";
          button.innerHTML = `
            <div class="tiny-label">Pronoun + verb</div>
            <div class="conjugation-main">${item.full}</div>
            ${ipa ? `<div class="verb-ipa">${ipa}</div>` : ""}
            <div class="translation">${item.en}</div>
            ${examples.map((example, index) => `
              <div class="verb-example-block">
                <div class="grammar-note">
                  <strong>${example.meaning ? `${example.meaning}:` : examples.length > 1 ? `Example ${index + 1}:` : "Example:"}</strong>
                  ${example.fr}
                </div>
                <div class="translation">${example.en}</div>
                ${example.negative ? `
                  <div class="grammar-note"><strong>Negative:</strong> ${example.negative}</div>
                  <div class="translation">${example.negativeEn}</div>
                ` : ""}
              </div>
            `).join("")}
          `;
          button.addEventListener("click", () => speakSequence(getVerbAudioItems(item), button));
          columnEl.appendChild(button);
        });

        container.appendChild(columnEl);
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
