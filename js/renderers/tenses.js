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

    function getPasseComposeAudioItems(groups = passeComposeGroups) {
      return groups.flatMap(group => group.verbs.flatMap(verb =>
        getPasseComposeSentenceForms(verb).map(sentence => ({
          text: sentence.fr,
          pauseBefore: examplePauseMs
        }))
      ));
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

      group.verbs.forEach((verb, verbIndex) => {
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
            const currentVerb = group.verbs[Number(event.currentTarget.dataset.verbIndex)];
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
