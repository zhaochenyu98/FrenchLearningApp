    function getPasseComposeSentenceForms(verb) {
      return [
        { label: "Statement", ...verb.statement },
        { label: "Negative", ...verb.negative },
        { label: "Question", ...verb.question }
      ];
    }

    function getPasseComposeVerbId(group, verb) {
      const slug = `${group.key}-${verb.infinitive}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return `tense-${slug}`;
    }

    function getEtreAuxiliaryVerbId(verb) {
      const slug = verb.infinitive
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return `tense-etre-${slug}`;
    }

    function getTenseVerbButtonHtml(verb) {
      return `
        <span class="noun-example-main">${verb.infinitive}</span>
        ${verb.infinitiveIpa ? `<span class="tense-ipa">${verb.infinitiveIpa}</span>` : ""}
        <span class="noun-example-main">→ ${verb.pastParticiple}</span>
        ${verb.pastParticipleIpa ? `<span class="tense-ipa">${verb.pastParticipleIpa}</span>` : ""}
      `;
    }

    function getTenseIndexButtonHtml(verb) {
      return `
        <span class="tense-index-main">${verb.infinitive}</span>
      `;
    }

    function getPastParticipleSpeech(verb) {
      return (verb.participleSpeech || verb.pastParticiple)
        .replace(/\s*\/[^/]+\/\s*/g, "")
        .replace(/\(.*?\)/g, "");
    }

    function getEtreAuxiliaryExampleForms(example) {
      return [
        { label: "Statement", fr: example.fr, en: example.en },
        ...(example.negative ? [{ label: "Negative", fr: example.negative, en: example.negativeEn }] : []),
        ...(example.question ? [{ label: "Question", fr: example.question, en: example.questionEn }] : [])
      ];
    }

    function renderEtreAuxiliaryExamples(examples, verbIndex, type) {
      return `
        <div class="noun-example-list">
          ${examples.map((example, exampleIndex) => `
            <button class="noun-example-btn tense-auxiliary-example-btn" type="button" data-verb-index="${verbIndex}" data-example-type="${type}" data-example-index="${exampleIndex}">
              ${getEtreAuxiliaryExampleForms(example).map(sentence => `
                <span class="tiny-label">${sentence.label}</span>
                <span class="noun-example-main">${sentence.fr}</span>
                <span class="translation">${sentence.en || ""}</span>
              `).join("")}
            </button>
          `).join("")}
        </div>
      `;
    }

    function renderEtreAuxiliaryVerbs(rows = etreAuxiliaryVerbs) {
      etreAuxiliaryVerbGrid.innerHTML = "";
      if (!rows.length) {
        etreAuxiliaryVerbGrid.innerHTML = `<div class="empty-state">No être auxiliary verbs available.</div>`;
        return;
      }

      etreAuxiliaryVerbGrid.innerHTML = `
        <div class="noun-rule-header">
          <div>Verb</div>
          <div>With être</div>
          <div>Avoir contrast</div>
        </div>
      `;

      rows.forEach((verb, verbIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card tense-row-card";
        row.id = getEtreAuxiliaryVerbId(verb);
        row.tabIndex = -1;
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Verb</span>
            <button class="noun-example-btn tense-verb-btn" type="button" data-verb-index="${verbIndex}">
              ${getTenseVerbButtonHtml(verb)}
            </button>
            <div class="translation">${verb.meaning}</div>
          </div>
          <div>
            <span class="question-cell-label">With être</span>
            <div class="grammar-note">${verb.note}</div>
            ${renderEtreAuxiliaryExamples(verb.etreExamples, verbIndex, "etre")}
          </div>
          <div>
            <span class="question-cell-label">Avoir contrast</span>
            ${verb.avoirExamples ? `
              <div class="grammar-note">${verb.avoirNote}</div>
              ${renderEtreAuxiliaryExamples(verb.avoirExamples, verbIndex, "avoir")}
            ` : `<div class="grammar-note">No common beginner avoir contrast for this list.</div>`}
          </div>
        `;

        row.querySelector(".tense-verb-btn").addEventListener("click", () => {
          speakSequence([
            { text: verb.infinitive },
            { text: getPastParticipleSpeech(verb), pauseBefore: examplePauseMs }
          ], row.querySelector(".tense-verb-btn"));
        });

        row.querySelectorAll(".tense-auxiliary-example-btn").forEach(button => {
          button.addEventListener("click", () => {
            const currentVerb = rows[Number(button.dataset.verbIndex)];
            const examples = button.dataset.exampleType === "avoir"
              ? currentVerb.avoirExamples
              : currentVerb.etreExamples;
            const example = examples[Number(button.dataset.exampleIndex)];
            speakSequence(getEtreAuxiliaryExampleForms(example).map((sentence, index) => ({
              text: sentence.fr,
              pauseBefore: index === 0 ? 0 : examplePauseMs
            })), button);
          });
        });

        etreAuxiliaryVerbGrid.appendChild(row);
      });
    }

    function renderPasseComposeGroup(container, group) {
      container.innerHTML = "";
      if (!group || !group.verbs || !group.verbs.length) {
        container.innerHTML = `<div class="empty-state">No passé composé examples available.</div>`;
        return;
      }

      container.innerHTML = `
        <div class="noun-rule-header tense-rule-header">
          <div>${group.headers.verb}</div>
          <div>${group.headers.participle}</div>
          <div>${group.headers.examples}</div>
        </div>
      `;

      const sortedVerbs = [...group.verbs].sort((a, b) => a.infinitive.localeCompare(b.infinitive, "fr"));

      sortedVerbs.forEach((verb, verbIndex) => {
        const row = document.createElement("div");
        row.className = "noun-rule-card tense-row-card";
        row.id = getPasseComposeVerbId(group, verb);
        row.tabIndex = -1;
        row.dataset.tenseGroup = group.key;
        row.dataset.tenseVerb = verb.infinitive;
        row.innerHTML = `
          <div>
            <span class="question-cell-label">Infinitive</span>
            <button class="noun-example-btn tense-verb-btn" type="button" data-verb-index="${verbIndex}">
              ${getTenseVerbButtonHtml(verb)}
            </button>
          </div>
          <div>
            <span class="question-cell-label">Past participle</span>
            <div class="french-line">${verb.auxiliary} + ${verb.pastParticiple}</div>
            ${verb.pastParticipleIpa ? `<div class="tense-ipa">${verb.pastParticipleIpa}</div>` : ""}
            <div class="grammar-note">${verb.pattern}</div>
            <div class="translation">${verb.note}</div>
          </div>
          <div>
            <span class="question-cell-label">Examples</span>
            <div class="noun-example-list tense-example-list">
              ${getPasseComposeSentenceForms(verb).map((sentence, sentenceIndex) => `
                <button class="noun-example-btn tense-example-btn" type="button" data-verb-index="${verbIndex}" data-sentence-index="${sentenceIndex}">
                  <span class="tiny-label">${sentence.label}</span>
                  <span class="noun-example-main">${sentence.fr}</span>
                  <span class="translation">${sentence.en}</span>
                </button>
              `).join("")}
            </div>
          </div>
        `;

        row.querySelector(".tense-verb-btn").addEventListener("click", () => {
          speakSequence([
            { text: verb.infinitive },
            { text: getPastParticipleSpeech(verb), pauseBefore: examplePauseMs }
          ], row.querySelector(".tense-verb-btn"));
        });

        row.querySelectorAll(".tense-example-btn").forEach(button => {
          button.addEventListener("click", event => {
            const currentVerb = sortedVerbs[Number(event.currentTarget.dataset.verbIndex)];
            const sentence = getPasseComposeSentenceForms(currentVerb)[Number(event.currentTarget.dataset.sentenceIndex)];
            speakSequence([{ text: sentence.fr }], event.currentTarget);
          });
        });

        container.appendChild(row);
      });
    }

    function renderPasseComposeGroups(groups = passeComposeGroups) {
      const containers = {
        er: passeComposeErGrid,
        ir: passeComposeIrGrid,
        irregular: passeComposeIrregularGrid,
        pronominal: passeComposePronominalGrid
      };

      groups.forEach(group => {
        const container = containers[group.key];
        if (container) renderPasseComposeGroup(container, group);
      });
    }
