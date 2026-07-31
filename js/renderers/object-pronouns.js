(function initializeObjectPronounRenderers(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.renderers = FR.renderers || {};

  const targetIds = Object.freeze({
    decision: "objectDecisionGrid",
    forms: "objectFormsGrid",
    totals: "objectToutGrid",
    placement: "objectPlacementGrid",
    contrasts: "objectContrastGrid"
  });

  function createElement(tagName, className, text) {
    const element = global.document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function getData() {
    return FR.data && FR.data.objectPronouns;
  }

  function getSpeaker() {
    if (typeof global.speakSequence === "function") return global.speakSequence;
    if (FR.runtime && typeof FR.runtime.speakSequence === "function") return FR.runtime.speakSequence;
    return null;
  }

  function reportAudioError(button) {
    button.classList.add("audio-error");
    button.setAttribute("aria-label", "French audio is currently unavailable");
    global.console.warn("Object-pronoun audio was requested before speakSequence was available.");
  }

  function playSentence(sentence, button) {
    const speaker = getSpeaker();
    if (!speaker) {
      reportAudioError(button);
      return;
    }

    try {
      speaker([{ text: sentence.speech || sentence.fr }], button);
    } catch (error) {
      reportAudioError(button);
      global.console.error("Object-pronoun audio failed.", error);
    }
  }

  function createAudioSentence(sentence, label) {
    const button = createElement("button", "object-pronoun-audio noun-example-btn");
    button.type = "button";
    button.setAttribute("aria-label", `Play French audio: ${sentence.fr}`);

    if (label) button.appendChild(createElement("span", "tiny-label", label));

    const french = createElement("span", "noun-example-main", sentence.fr);
    french.lang = "fr";
    button.appendChild(french);

    if (sentence.ipa) {
      button.appendChild(createElement("span", "ipa", sentence.ipa));
    }

    if (sentence.en) {
      const translation = createElement("span", "translation", sentence.en);
      translation.lang = "en";
      button.appendChild(translation);
    }

    button.addEventListener("click", () => playSentence(sentence, button));
    return button;
  }

  function createTable(columns, ariaLabel, modifierClass) {
    const table = createElement("div", `object-pronoun-table noun-rules-table ${modifierClass || ""}`.trim());
    table.setAttribute("role", "table");
    table.setAttribute("aria-label", ariaLabel);

    const header = createElement("div", "object-pronoun-header noun-rule-header");
    header.setAttribute("role", "row");
    columns.forEach(column => {
      const cell = createElement("div", "object-pronoun-column-header", column);
      cell.setAttribute("role", "columnheader");
      header.appendChild(cell);
    });
    table.appendChild(header);
    return table;
  }

  function createCell(label) {
    const cell = createElement("div", "object-pronoun-cell");
    cell.setAttribute("role", "cell");
    if (label) cell.appendChild(createElement("span", "question-cell-label", label));
    return cell;
  }

  function createNote(text, className = "grammar-note") {
    return createElement("p", className, text);
  }

  function createTransformation(example) {
    const pair = createElement("div", "object-pronoun-transformation");
    pair.appendChild(createAudioSentence(example.original, "Original"));
    pair.appendChild(createAudioSentence(example.replacement, "Replacement"));
    return pair;
  }

  function createSectionHeading(title, description) {
    const header = createElement("div", "object-pronoun-subsection-header verb-subtable-heading");
    const copy = createElement("div");
    copy.appendChild(createElement("h4", "", title));
    if (description) copy.appendChild(createNote(description));
    header.appendChild(copy);
    return header;
  }

  function createError(targetLabel, error) {
    const message = createElement("div", "empty-state object-pronoun-error");
    message.setAttribute("role", "alert");
    message.appendChild(createElement("strong", "", `${targetLabel} is unavailable.`));
    message.appendChild(createElement("span", "", " The rest of the object-pronoun lesson can still be used."));
    if (error && error.message) message.dataset.error = error.message;
    return message;
  }

  function renderSafely(targetId, label, renderContent) {
    if (!global.document) {
      return { ok: false, targetId, reason: "document-unavailable" };
    }

    const target = global.document.getElementById(targetId);
    if (!target) {
      global.console.warn(`Skipped ${label}: #${targetId} is missing.`);
      return { ok: false, targetId, reason: "missing-target" };
    }

    try {
      const data = getData();
      if (!data) throw new Error("FR.data.objectPronouns is missing.");
      target.replaceChildren();
      renderContent(target, data);
      return { ok: true, targetId };
    } catch (error) {
      target.replaceChildren(createError(label, error));
      global.console.error(`${label} failed to render.`, error);
      return { ok: false, targetId, reason: "render-error", error };
    }
  }

  function renderDecisionMatrix() {
    return renderSafely(targetIds.decision, "Object-pronoun decision matrix", (target, data) => {
      if (!Array.isArray(data.decisionMatrix) || !data.decisionMatrix.length) {
        throw new Error("The decision matrix has no rows.");
      }

      const table = createTable(
        ["Original complement", "Choose", "Decision rule", "Transformations"],
        "How to choose a French object pronoun",
        "object-decision-table"
      );

      data.decisionMatrix.forEach(item => {
        const row = createElement("div", "object-pronoun-row noun-rule-card");
        row.setAttribute("role", "row");
        row.dataset.pronounChoice = item.id;

        const cueCell = createCell("Original complement");
        cueCell.appendChild(createElement("strong", "french-line", item.cue));

        const choiceCell = createCell("Choose");
        choiceCell.appendChild(createElement("strong", "object-pronoun-choice", item.choice));
        choiceCell.appendChild(createElement("span", "matrix-label", item.forms));

        const ruleCell = createCell("Decision rule");
        ruleCell.appendChild(createNote(item.rule));
        if (item.warning) ruleCell.appendChild(createNote(item.warning, "object-pronoun-warning grammar-note"));

        const examplesCell = createCell("Transformations");
        const examples = createElement("div", "object-pronoun-transformations noun-example-list");
        item.examples.forEach(example => examples.appendChild(createTransformation(example)));
        examplesCell.appendChild(examples);

        row.append(cueCell, choiceCell, ruleCell, examplesCell);
        table.appendChild(row);
      });

      target.appendChild(table);
    });
  }

  function renderFormsAtAGlance() {
    return renderSafely(targetIds.forms, "Object-pronoun forms", (target, data) => {
      const forms = data.formsAtAGlance;
      if (!forms || !Array.isArray(forms.personalRows)) {
        throw new Error("The forms-at-a-glance data is missing.");
      }

      target.appendChild(createSectionHeading(
        "COD and COI side by side",
        "Me, te, nous, and vous look the same in both systems. The visible difference appears in the third person."
      ));

      const personalTable = createTable(
        ["Person", "Subject reference", "COD", "COI"],
        "COD and COI pronoun forms",
        "object-forms-table"
      );

      forms.personalRows.forEach(item => {
        const row = createElement("div", "object-pronoun-row noun-rule-card");
        row.setAttribute("role", "row");
        [item.person, item.subject, item.cod, item.coi].forEach((value, index) => {
          const labels = ["Person", "Subject reference", "COD", "COI"];
          const cell = createCell(labels[index]);
          cell.appendChild(createElement(index > 1 ? "strong" : "span", index > 1 ? "french-line" : "", value));
          row.appendChild(cell);
        });
        personalTable.appendChild(row);
      });
      target.appendChild(personalTable);

      target.appendChild(createSectionHeading(
        "Invariant and explicit forms",
        "Y and en are short pronouns placed with the verb. Ça is an independent demonstrative and keeps an explicit reference."
      ));

      const invariantList = createElement("div", "object-pronoun-card-grid");
      forms.invariantForms.forEach(item => {
        const card = createElement("article", "object-pronoun-info-card");
        card.appendChild(createElement("h5", "french-line", item.form));
        card.appendChild(createElement("span", "subject-form-tag", item.role));
        card.appendChild(createNote(item.replaces));
        card.appendChild(createAudioSentence(item.example, "Example"));
        invariantList.appendChild(card);
      });
      target.appendChild(invariantList);

      target.appendChild(createSectionHeading(
        "Fallback choices",
        "Use these when an ordinary object pronoun placed with the verb is not the right structure."
      ));

      const fallbackList = createElement("div", "object-pronoun-card-grid object-pronoun-fallbacks");
      forms.fallbacks.forEach(item => {
        const card = createElement("article", "object-pronoun-info-card");
        card.dataset.fallback = item.id;
        card.appendChild(createElement("h5", "", item.title));
        card.appendChild(createElement("div", "french-line", item.forms));
        card.appendChild(createNote(item.rule));
        const examples = createElement("div", "noun-example-list");
        item.examples.forEach(example => examples.appendChild(createAudioSentence(example, "Example")));
        card.appendChild(examples);
        fallbackList.appendChild(card);
      });
      target.appendChild(fallbackList);
    });
  }

  function renderPlacementRows(target, rows, ariaLabel = "Object-pronoun placement by sentence type") {
    const table = createTable(
      ["Sentence type", "Placement", "Examples"],
      ariaLabel,
      "object-placement-table"
    );

    rows.forEach(item => {
      const row = createElement("div", "object-pronoun-row noun-rule-card");
      row.setAttribute("role", "row");
      row.dataset.placement = item.id;

      const titleCell = createCell("Sentence type");
      titleCell.appendChild(createElement("strong", "french-line", item.title));

      const placementCell = createCell("Placement");
      placementCell.appendChild(createElement("div", "matrix-label", item.template));
      placementCell.appendChild(createNote(item.note));

      const examplesCell = createCell("Examples");
      const examples = createElement("div", "noun-example-list");
      item.examples.forEach(example => examples.appendChild(createAudioSentence(example, example.label)));
      examplesCell.appendChild(examples);

      row.append(titleCell, placementCell, examplesCell);
      table.appendChild(row);
    });

    target.appendChild(table);
  }

  function renderTotalWithObjects() {
    return renderSafely(targetIds.totals, "Tout with COD pronouns", (target, data) => {
      const guide = data.totalWithObjects;
      if (!guide || !Array.isArray(guide.forms) || !Array.isArray(guide.patterns)) {
        throw new Error("The tout-with-objects guide is incomplete.");
      }

      target.appendChild(createSectionHeading(
        "Choose the agreeing form",
        "The object pronoun remains les. Tout, tous, or toutes adds the idea of totality."
      ));

      const formCards = createElement("div", "object-pronoun-card-grid object-total-form-grid");
      guide.forms.forEach(item => {
        const card = createElement("article", "object-pronoun-info-card");
        card.dataset.totalForm = item.form;
        card.appendChild(createAudioSentence(
          { fr: item.form, ipa: item.ipa, en: item.meaning },
          item.label
        ));
        card.appendChild(createNote(item.note));
        card.appendChild(createAudioSentence(item.example, "Example"));
        formCards.appendChild(card);
      });
      target.appendChild(formCards);

      target.appendChild(createSectionHeading(
        "Placement with a COD pronoun",
        "The position changes with the verb structure. Click any example to hear the full sentence."
      ));
      renderPlacementRows(target, guide.patterns, "Tout, tous, and toutes with COD pronouns");
    });
  }

  function renderImperative(target, imperative) {
    target.appendChild(createSectionHeading(imperative.label, imperative.note));

    const sequence = createElement("div", "object-pronoun-order-banner");
    sequence.setAttribute("role", "note");
    sequence.appendChild(createElement("span", "tiny-label", "Order"));
    sequence.appendChild(createElement("strong", "french-line", imperative.sequence));
    target.appendChild(sequence);

    const examples = createElement("div", "object-pronoun-card-grid object-imperative-grid");
    imperative.examples.forEach(example => examples.appendChild(createAudioSentence(example, example.label)));
    target.appendChild(examples);
  }

  function renderAgreementNotes(target, notes) {
    target.appendChild(createSectionHeading(
      "Passé composé agreement",
      "First identify whether the preceding pronoun is COD, COI, or en; that function controls the agreement rule."
    ));

    const cards = createElement("div", "object-pronoun-card-grid object-agreement-grid");
    notes.forEach(item => {
      const card = createElement("article", "object-pronoun-info-card");
      card.dataset.agreementRule = item.id;
      card.appendChild(createElement("h5", "", item.title));
      card.appendChild(createNote(item.rule));
      const examples = createElement("div", "noun-example-list");
      item.examples.forEach(example => examples.appendChild(createAudioSentence(example, "Example")));
      card.appendChild(examples);
      cards.appendChild(card);
    });
    target.appendChild(cards);
  }

  function renderPlacementGuide() {
    return renderSafely(targetIds.placement, "Object-pronoun placement guide", (target, data) => {
      const guide = data.placement;
      if (!guide || !Array.isArray(guide.rows) || !guide.affirmativeImperative) {
        throw new Error("The placement guide is incomplete.");
      }

      const order = createElement("div", "object-pronoun-order-banner object-normal-order");
      order.setAttribute("role", "note");
      order.appendChild(createElement("span", "tiny-label", guide.regularOrder.label));
      order.appendChild(createElement("strong", "french-line", guide.regularOrder.sequence));
      order.appendChild(createNote(guide.regularOrder.note));
      target.appendChild(order);

      renderPlacementRows(target, guide.rows);
      renderImperative(target, guide.affirmativeImperative);
      renderAgreementNotes(target, guide.agreementNotes || []);
    });
  }

  function renderContrastTransformations() {
    return renderSafely(targetIds.contrasts, "Object-pronoun contrasts", (target, data) => {
      if (!Array.isArray(data.contrasts) || !data.contrasts.length) {
        throw new Error("The contrast transformations have no rows.");
      }

      const cards = createElement("div", "object-contrast-grid");
      data.contrasts.forEach(item => {
        const card = createElement("article", "object-contrast-card");
        card.dataset.contrast = item.id;
        card.appendChild(createElement("h4", "", item.title));
        card.appendChild(createNote(item.takeaway));

        const sides = createElement("div", "object-contrast-sides");
        item.sides.forEach(side => {
          const sideCard = createElement("section", "object-contrast-side");
          sideCard.setAttribute("aria-label", `${item.title}: ${side.label}`);
          sideCard.appendChild(createElement("h5", "subject-form-tag", side.label));
          sideCard.appendChild(createAudioSentence(side.original, "Original"));
          sideCard.appendChild(createAudioSentence(side.replacement, "Replacement"));
          sides.appendChild(sideCard);
        });
        card.appendChild(sides);
        cards.appendChild(card);
      });
      target.appendChild(cards);
    });
  }

  function renderAll() {
    return {
      decision: renderDecisionMatrix(),
      forms: renderFormsAtAGlance(),
      totals: renderTotalWithObjects(),
      placement: renderPlacementGuide(),
      contrasts: renderContrastTransformations()
    };
  }

  FR.renderers.objectPronouns = {
    targetIds,
    renderAll,
    renderDecisionMatrix,
    renderFormsAtAGlance,
    renderTotalWithObjects,
    renderPlacementGuide,
    renderContrastTransformations
  };
})(window);
