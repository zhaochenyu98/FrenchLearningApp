(function registerConjunctionRenderers(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.renderers = FR.renderers || {};

  const TARGET_IDS = Object.freeze({
    quickNotes: "conjunctionQuickNotesGrid",
    sections: "conjunctionSections"
  });

  function createElement(tagName, className, text) {
    const element = global.document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function getData() {
    return FR.data && FR.data.conjunctions;
  }

  function getSpeaker() {
    if (typeof global.speakSequence === "function") return global.speakSequence;
    if (FR.runtime && typeof FR.runtime.speakSequence === "function") {
      return FR.runtime.speakSequence;
    }
    return null;
  }

  function reportAudioError(button, error) {
    button.classList.add("audio-error");
    button.setAttribute("aria-label", "French audio is currently unavailable");
    if (error) global.console.error("Conjunction audio failed.", error);
    else global.console.warn("Conjunction audio was requested before speakSequence was available.");
  }

  function playFrench(text, button) {
    const speaker = getSpeaker();
    if (!speaker) {
      reportAudioError(button);
      return;
    }

    try {
      speaker([{ text }], button);
    } catch (error) {
      reportAudioError(button, error);
    }
  }

  function createErrorCard(title, error) {
    const card = createElement("div", "inline-error-card");
    card.setAttribute("role", "alert");
    card.append(
      createElement("strong", "", title),
      createElement("span", "", error && error.message ? error.message : String(error))
    );
    return card;
  }

  function createQuickNote(note) {
    const card = createElement("article", "summary-chip conjunction-quick-note");
    const title = createElement("strong", "", note.title);
    title.lang = "fr";
    const english = createElement("span", "subject-form-tag", note.english);
    const summary = createElement("p", "grammar-note", note.summary);
    const example = createElement("span", "french-line conjunction-quick-example", note.example);
    example.lang = "fr";
    card.append(title, english, summary, example);
    return card;
  }

  function createWordButton(item) {
    const button = createElement("button", "conjunction-word-btn");
    button.type = "button";
    button.setAttribute("aria-label", `Play French conjunction: ${item.term}`);

    const label = createElement("span", "tiny-label", item.role);
    const term = createElement("span", "conjunction-word-main", item.term);
    term.lang = "fr";
    const ipa = createElement("span", "pronunciation-word-ipa", item.ipa);
    const english = createElement("span", "translation", item.english);
    button.append(label, term, ipa, english);
    button.addEventListener("click", () => playFrench(item.speech || item.term, button));
    return button;
  }

  function createNoteCard(note) {
    const card = createElement("article", "summary-chip conjunction-note-card");
    card.append(
      createElement("strong", "", note.title),
      createElement("span", "", note.text)
    );
    return card;
  }

  function createExampleButton(example) {
    if (!example || !example.fr || !example.en) {
      throw new Error("A conjunction example needs both French and English.");
    }

    const button = createElement("button", "noun-example-btn conjunction-example-btn");
    button.type = "button";
    button.setAttribute("aria-label", `Play French audio: ${example.fr}`);

    const label = createElement("span", "tiny-label", example.label || "Example");
    const french = createElement("span", "noun-example-main french-line", example.fr);
    french.lang = "fr";
    const english = createElement("span", "translation", example.en);
    english.lang = "en";
    button.append(label, french, english);
    button.addEventListener("click", () => playFrench(example.speech || example.fr, button));
    return button;
  }

  function createElisionCell(label, text, className) {
    const cell = createElement("div", className || "conjunction-elision-cell");
    cell.setAttribute("role", "cell");
    cell.append(
      createElement("span", "question-cell-label", label),
      createElement("span", "", text)
    );
    return cell;
  }

  function createElisionTable(rows) {
    const table = createElement("div", "conjunction-elision-table");
    table.setAttribute("role", "table");
    table.setAttribute("aria-label", "Si elision before French subject pronouns");

    const header = createElement("div", "conjunction-elision-header");
    header.setAttribute("role", "row");
    ["Following subject", "Correct form", "Rule"].forEach(label => {
      const cell = createElement("div", "", label);
      cell.setAttribute("role", "columnheader");
      header.appendChild(cell);
    });
    table.appendChild(header);

    rows.forEach(row => {
      const line = createElement("div", "conjunction-elision-row");
      line.setAttribute("role", "row");

      const subjectCell = createElisionCell("Following subject", row.subject);
      subjectCell.firstElementChild.nextElementSibling.lang = "fr";

      const formCell = createElement("div", "conjunction-elision-cell conjunction-elision-form");
      formCell.setAttribute("role", "cell");
      formCell.append(
        createElement("span", "question-cell-label", "Correct form"),
        createElement("strong", "french-line", row.form),
        createElement("span", "pronunciation-word-ipa", row.ipa)
      );
      formCell.querySelector(".french-line").lang = "fr";

      line.append(
        subjectCell,
        formCell,
        createElisionCell("Rule", row.explanation)
      );
      table.appendChild(line);
    });

    return table;
  }

  function createCrossLink(link) {
    const row = createElement("div", "study-cross-link-row");
    row.appendChild(createElement("span", "", "See the question-word use in its own lesson."));

    const button = createElement("button", "study-cross-link", link.label);
    button.type = "button";
    button.dataset.studyLinkTab = link.tab;
    button.dataset.studyLinkTarget = link.target;
    row.appendChild(button);
    return row;
  }

  function createLessonPanel(item) {
    if (!item || !item.id || !item.term || !item.ipa || !item.english) {
      throw new Error("A conjunction entry is missing its id, word, IPA, or English equivalent.");
    }

    const panel = createElement("div", "category-panel conjunction-panel");
    panel.id = `conjunction-${item.id}Section`;
    panel.dataset.studySection = `conjunction-${item.id}`;

    const intro = createElement("div", "conjunction-lesson-intro");
    const copy = createElement("div", "conjunction-lesson-copy");
    copy.append(
      createElement("h3", "", `${item.term}: ${item.english}`),
      createElement("p", "grammar-note", item.description)
    );

    if (item.callout) {
      const callout = createElement("div", "conjunction-rule-callout");
      callout.append(
        createElement("strong", "", "Important"),
        createElement("span", "", item.callout)
      );
      copy.appendChild(callout);
    }

    const notes = createElement("div", "summary-chips conjunction-note-grid");
    (item.notes || []).forEach(note => notes.appendChild(createNoteCard(note)));
    copy.appendChild(notes);
    if (item.crossLink) copy.appendChild(createCrossLink(item.crossLink));
    intro.append(createWordButton(item), copy);
    panel.appendChild(intro);

    if (item.elisionRows) {
      const heading = createElement("div", "verb-subtable-heading");
      const headingCopy = createElement("div");
      headingCopy.append(
        createElement("h4", "", "Si elision: the complete pattern"),
        createElement("p", "grammar-note", "The apostrophe belongs only with il and ils. The other vowel-initial subject pronouns keep si in full.")
      );
      heading.appendChild(headingCopy);
      panel.append(heading, createElisionTable(item.elisionRows));
    }

    const examplesHeading = createElement("div", "verb-subtable-heading conjunction-examples-heading");
    const examplesCopy = createElement("div");
    examplesCopy.append(
      createElement("h4", "", "Examples"),
      createElement("p", "grammar-note", "Click any sentence to hear the complete French example.")
    );
    examplesHeading.appendChild(examplesCopy);

    const examples = createElement("div", "conjunction-example-grid");
    (item.examples || []).forEach((example, index) => {
      try {
        examples.appendChild(createExampleButton(example));
      } catch (error) {
        examples.appendChild(createErrorCard(`${item.term} example ${index + 1} failed`, error));
      }
    });
    panel.append(examplesHeading, examples);
    return panel;
  }

  function renderQuickNotes() {
    const target = global.document.getElementById(TARGET_IDS.quickNotes);
    if (!target) {
      global.console.warn(`Skipped conjunction quick notes: #${TARGET_IDS.quickNotes} is missing.`);
      return false;
    }

    try {
      const data = getData();
      if (!data || !Array.isArray(data.quickNotes)) {
        throw new Error("FR.data.conjunctions.quickNotes is unavailable.");
      }
      target.replaceChildren();
      target.classList.add("summary-chips", "conjunction-overview-grid");
      data.quickNotes.forEach(note => target.appendChild(createQuickNote(note)));
      return true;
    } catch (error) {
      target.replaceChildren(createErrorCard("Conjunction quick notes failed to render", error));
      global.console.error("Conjunction quick notes failed to render.", error);
      return false;
    }
  }

  function renderSections() {
    const target = global.document.getElementById(TARGET_IDS.sections);
    if (!target) {
      global.console.warn(`Skipped conjunction lessons: #${TARGET_IDS.sections} is missing.`);
      return false;
    }

    const data = getData();
    target.replaceChildren();
    if (!data || !Array.isArray(data.items)) {
      const error = new Error("FR.data.conjunctions.items is unavailable.");
      target.appendChild(createErrorCard("Conjunction lessons failed to render", error));
      global.console.error("Conjunction lessons failed to render.", error);
      return false;
    }

    data.items.forEach(item => {
      try {
        target.appendChild(createLessonPanel(item));
      } catch (error) {
        const panel = createElement("div", "category-panel conjunction-panel");
        panel.dataset.studySection = `conjunction-${item && item.id ? item.id : "unknown"}`;
        panel.appendChild(createErrorCard(`${item && item.term ? item.term : "Conjunction"} failed to render`, error));
        target.appendChild(panel);
        global.console.error("A conjunction lesson failed to render.", error);
      }
    });
    return true;
  }

  function renderAll() {
    return {
      quickNotes: renderQuickNotes(),
      sections: renderSections()
    };
  }

  FR.renderers.conjunctions = Object.freeze({ renderAll });
})(window);
