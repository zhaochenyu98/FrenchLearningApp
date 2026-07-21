(function registerPronominalVerbRenderers(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.renderers = FR.renderers || {};

  const TARGET_IDS = Object.freeze({
    overview: "pronominalOverviewGrid",
    agreement: "pronominalAgreementGrid",
    index: "pronominalVerbIndex",
    stack: "pronominalVerbStack"
  });

  const TENSES = Object.freeze([
    { key: "present", label: "Present" },
    { key: "imperfect", label: "Imparfait" },
    { key: "passeCompose", label: "Passé composé" }
  ]);

  const MATRIX_PAIRS = Object.freeze([
    ["je", "nous"],
    ["tu", "vous"],
    ["il", "ils"],
    ["elle", "elles"]
  ]);

  function createElement(tagName, className, text) {
    const element = global.document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function errorMessage(error) {
    return error && error.message ? error.message : String(error);
  }

  function createErrorCard(title, error) {
    const card = createElement("div", "inline-error-card pronominal-error-card");
    card.setAttribute("role", "alert");
    card.append(
      createElement("strong", "", title),
      createElement("span", "", errorMessage(error))
    );
    return card;
  }

  function slugify(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function getData() {
    return FR.data && FR.data.pronominalVerbs;
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
    if (error) global.console.error("Pronominal-verb audio failed.", error);
    else global.console.warn("Pronominal-verb audio was requested before speakSequence was available.");
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

  function createAudioSentence(sentence, label, className) {
    if (!sentence || !sentence.fr) {
      throw new Error(`${label || "Example"} is missing its French sentence.`);
    }

    const button = createElement(
      "button",
      `${className || "noun-example-btn"} pronominal-audio-button`.trim()
    );
    button.type = "button";
    button.setAttribute("aria-label", `Play French audio: ${sentence.fr}`);

    if (label) button.appendChild(createElement("span", "tiny-label", label));
    const french = createElement("span", "noun-example-main french-line", sentence.fr);
    french.lang = "fr";
    button.appendChild(french);

    if (sentence.en) {
      const translation = createElement("span", "translation", sentence.en);
      translation.lang = "en";
      button.appendChild(translation);
    }

    button.addEventListener("click", () => playFrench(sentence.speech || sentence.fr, button));
    return button;
  }

  function parseDefinitionExample(value) {
    const parts = String(value || "").split(" — ");
    return {
      fr: parts.shift() || "",
      en: parts.join(" — ")
    };
  }

  function createDefinitionCard(definition) {
    const card = createElement("article", "summary-chip pronominal-overview-card");
    const title = createElement("strong", "", definition.title);
    const type = createElement("span", "subject-form-tag", definition.zh);
    const explanation = createElement("p", "grammar-note", definition.description);
    card.append(title, type, explanation);

    if (definition.example) {
      card.appendChild(createAudioSentence(
        parseDefinitionExample(definition.example),
        "Example"
      ));
    }
    return card;
  }

  function renderOverview(target, data) {
    target.replaceChildren();
    target.classList.add("summary-chips", "pronominal-overview-grid");

    data.typeOrder.forEach(typeKey => {
      const definition = data.types.find(type => type.key === typeKey);
      if (!definition) {
        target.appendChild(createErrorCard(
          `Type ${typeKey} is unavailable`,
          new Error("The semantic-type definition is missing.")
        ));
        return;
      }

      try {
        target.appendChild(createDefinitionCard(definition));
      } catch (error) {
        target.appendChild(createErrorCard(`${definition.title} failed to render`, error));
      }
    });
  }

  function createAgreementModeCard(mode) {
    const card = createElement("article", "summary-chip pronominal-agreement-card");
    card.append(
      createElement("strong", "", mode.title),
      createElement("p", "grammar-note", mode.explanation)
    );
    if (mode.example) {
      card.appendChild(createAudioSentence({ fr: mode.example }, "Example"));
    }
    return card;
  }

  function createContrastCard(contrast, compact) {
    const card = createElement(
      "article",
      compact
        ? "grammar-note pronominal-contrast-card pronominal-contrast-compact"
        : "summary-chip pronominal-contrast-card"
    );
    card.dataset.contrast = contrast.id;
    card.append(
      createElement("strong", "", contrast.title),
      createElement("p", "grammar-note", contrast.explanation)
    );

    const examples = createElement("div", "noun-example-list pronominal-contrast-examples");
    contrast.forms.forEach((form, index) => {
      try {
        examples.appendChild(createAudioSentence(form, `Contrast ${index + 1}`));
      } catch (error) {
        examples.appendChild(createErrorCard(`${contrast.title}: example ${index + 1}`, error));
      }
    });
    card.appendChild(examples);
    return card;
  }

  function renderAgreement(target, data) {
    target.replaceChildren();
    target.classList.add("pronominal-agreement-grid");

    const modes = createElement("div", "summary-chips pronominal-agreement-modes");
    Object.values(data.agreementModes).forEach(mode => {
      try {
        modes.appendChild(createAgreementModeCard(mode));
      } catch (error) {
        modes.appendChild(createErrorCard(`${mode.title} failed to render`, error));
      }
    });

    const contrasts = createElement("div", "summary-chips pronominal-agreement-contrasts");
    data.agreementContrasts.forEach(contrast => {
      try {
        contrasts.appendChild(createContrastCard(contrast, false));
      } catch (error) {
        contrasts.appendChild(createErrorCard(`${contrast.title} failed to render`, error));
      }
    });

    target.append(modes, contrasts);
  }

  function createFormCard(row, tenseLabel) {
    if (!row || !row.pronoun || !row.full) {
      throw new Error(`${tenseLabel} has an incomplete conjugation row.`);
    }

    const card = createElement("div", "verb-cell-card pronominal-form-card");
    const button = createElement("button", "verb-form-btn pronominal-form-button");
    button.type = "button";
    button.setAttribute("aria-label", `Play ${tenseLabel}: ${row.full}`);

    const pronoun = createElement("span", "tiny-label", row.pronoun);
    pronoun.lang = "fr";
    const form = createElement("span", "conjugation-main", row.form || row.full);
    form.lang = "fr";
    button.append(pronoun, form);

    if (row.ipa) button.appendChild(createElement("span", "verb-ipa", row.ipa));
    button.addEventListener("click", () => playFrench(row.speech || row.full, button));
    card.appendChild(button);
    return card;
  }

  function createParadigmMatrix(item, tense) {
    const rows = item.paradigms && item.paradigms[tense.key];
    if (!Array.isArray(rows) || rows.length !== 8) {
      throw new Error(`${item.infinitive} needs eight ${tense.label.toLowerCase()} forms.`);
    }

    const section = createElement("section", "pronominal-tense-section");
    const heading = createElement("div", "verb-subtable-heading pronominal-tense-heading");
    const copy = createElement("div");
    copy.appendChild(createElement("h4", "", tense.label));
    if (tense.key === "passeCompose") {
      copy.appendChild(createElement(
        "p",
        "grammar-note",
        item.agreementMode === "indirect-se"
          ? "The participle is invariant here because se is indirect."
          : "Parentheses show the gender and number endings that depend on the subject or preceding direct object."
      ));
    }
    heading.appendChild(copy);

    const matrix = createElement("div", "verb-matrix pronominal-tense-matrix");
    matrix.setAttribute("role", "table");
    matrix.setAttribute("aria-label", `${item.infinitive}: ${tense.label} conjugation`);

    const header = createElement("div", "verb-pair-header");
    header.setAttribute("role", "row");
    const singular = createElement("div", "", "Singular");
    singular.setAttribute("role", "columnheader");
    const plural = createElement("div", "", "Plural");
    plural.setAttribute("role", "columnheader");
    header.append(singular, plural);
    matrix.appendChild(header);

    MATRIX_PAIRS.forEach(pair => {
      const pairRow = createElement("div", "verb-pair-row");
      pairRow.setAttribute("role", "row");
      pair.forEach(pronoun => {
        const row = rows.find(entry => entry.pronoun === pronoun);
        try {
          const card = createFormCard(row, tense.label);
          card.setAttribute("role", "cell");
          pairRow.appendChild(card);
        } catch (error) {
          const failure = createErrorCard(`${pronoun}: ${tense.label}`, error);
          failure.setAttribute("role", "cell");
          pairRow.appendChild(failure);
        }
      });
      matrix.appendChild(pairRow);
    });

    section.append(heading, matrix);
    return section;
  }

  function createExamplesTable(item) {
    const section = createElement("section", "pronominal-examples-section");
    const heading = createElement("div", "verb-subtable-heading");
    heading.appendChild(createElement("h4", "", "Examples by tense"));

    const table = createElement("div", "amount-comparison-table pronominal-examples-table");
    table.setAttribute("role", "table");
    table.setAttribute("aria-label", `${item.infinitive}: examples by tense and sentence type`);

    const header = createElement("div", "amount-comparison-header pronominal-examples-header");
    header.setAttribute("role", "row");
    ["Tense", "Statement", "Negative", "Question"].forEach(label => {
      const cell = createElement("div", "", label);
      cell.setAttribute("role", "columnheader");
      header.appendChild(cell);
    });
    table.appendChild(header);

    TENSES.forEach(tense => {
      const examples = item.examples && item.examples[tense.key];
      if (!examples) {
        throw new Error(`${item.infinitive} is missing its ${tense.label} examples.`);
      }

      const row = createElement("div", "amount-comparison-card pronominal-examples-row");
      row.setAttribute("role", "row");
      const tenseCell = createElement("div", "pronominal-tense-label", tense.label);
      tenseCell.setAttribute("role", "rowheader");
      row.appendChild(tenseCell);

      ["statement", "negative", "question"].forEach(kind => {
        const cell = createElement("div", "pronominal-example-cell");
        cell.setAttribute("role", "cell");
        try {
          cell.appendChild(createAudioSentence(examples[kind], kind));
        } catch (error) {
          cell.appendChild(createErrorCard(`${tense.label}: ${kind}`, error));
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    section.append(heading, table);
    return section;
  }

  function createMetadata(item, data) {
    const metadata = createElement("div", "summary-chips pronominal-metadata");
    const type = data.types.find(entry => entry.key === item.type);
    const agreement = data.agreementModes[item.agreementMode];
    const lexicalStatus = data.lexicalStatuses[item.lexicalStatus];
    const values = [
      { label: "Semantic type", value: type ? `${type.zh} · ${type.title}` : item.type },
      { label: "Agreement mode", value: agreement ? agreement.title : item.agreementMode },
      {
        label: "Lexical status",
        value: lexicalStatus ? lexicalStatus.title : item.lexicalStatus,
        detail: lexicalStatus ? lexicalStatus.explanation : ""
      }
    ];

    if (item.secondaryTypes && item.secondaryTypes.length) {
      const secondaryLabels = item.secondaryTypes.map(key => {
        const secondary = data.types.find(entry => entry.key === key);
        return secondary ? secondary.title : key;
      });
      values.splice(1, 0, {
        label: "Also used as",
        value: secondaryLabels.join(" / ")
      });
    }

    values.forEach(entry => {
      const badge = createElement("div", "summary-chip pronominal-badge");
      badge.append(
        createElement("strong", "tiny-label", entry.label),
        createElement("span", "", entry.value)
      );
      if (entry.detail) badge.appendChild(createElement("span", "translation", entry.detail));
      metadata.appendChild(badge);
    });
    return metadata;
  }

  function appendItemContrasts(body, item, data) {
    if (!item.contrastIds || !item.contrastIds.length) return;
    const wrapper = createElement("div", "pronominal-card-contrasts");
    item.contrastIds.forEach(id => {
      const contrast = data.agreementContrasts.find(entry => entry.id === id);
      if (!contrast) {
        wrapper.appendChild(createErrorCard(
          `${item.infinitive}: agreement contrast`,
          new Error(`Contrast ${id} is missing.`)
        ));
        return;
      }
      wrapper.appendChild(createContrastCard(contrast, true));
    });
    body.appendChild(wrapper);
  }

  function createVerbCard(item, data) {
    if (item.error) throw new Error(item.error);
    if (!item.infinitive || !item.meaning || !item.agreementExplanation) {
      throw new Error("Required card metadata is incomplete.");
    }

    const card = createElement("details", "study-collapse-card pronominal-verb-card");
    card.id = `pronominal-verb-${slugify(item.id || item.infinitive)}`;
    card.dataset.pronominalType = item.type;

    const summary = createElement("summary", "study-collapse-summary pronominal-verb-summary");
    const title = createElement("span", "pronominal-verb-title");
    const french = createElement("strong", "french-line", item.infinitive);
    french.lang = "fr";
    title.appendChild(french);
    if (item.ipa) title.appendChild(createElement("span", "verb-ipa", ` ${item.ipa}`));
    title.appendChild(createElement("span", "translation", ` · ${item.meaning}`));
    summary.appendChild(title);

    const body = createElement("div", "study-collapse-body pronominal-verb-body");
    body.appendChild(createMetadata(item, data));

    const agreement = createElement("div", "grammar-note pronominal-agreement-callout");
    agreement.append(
      createElement("strong", "", item.agreementTitle),
      createElement("p", "", item.agreementExplanation)
    );
    body.appendChild(agreement);

    if (item.specialNote) {
      const note = createElement("div", "grammar-note pronominal-special-note");
      note.append(
        createElement("strong", "", "Usage nuance"),
        createElement("p", "", item.specialNote)
      );
      body.appendChild(note);
    }

    appendItemContrasts(body, item, data);
    TENSES.forEach(tense => body.appendChild(createParadigmMatrix(item, tense)));
    body.appendChild(createExamplesTable(item));
    card.append(summary, body);
    return card;
  }

  function createFailedVerbCard(item, error) {
    const card = createElement("details", "study-collapse-card pronominal-verb-card pronominal-verb-error");
    card.id = `pronominal-verb-${slugify(item.id || item.infinitive || "unknown")}`;
    const summary = createElement(
      "summary",
      "study-collapse-summary pronominal-verb-summary",
      item.infinitive || item.id || "Unavailable verb"
    );
    const body = createElement("div", "study-collapse-body");
    body.appendChild(createErrorCard(`${item.infinitive || item.id} failed to render`, error));
    card.append(summary, body);
    return card;
  }

  function renderVerbStack(target, data) {
    target.replaceChildren();
    target.classList.add("verb-group-stack", "pronominal-verb-stack");
    const cards = new Map();
    const errors = [];
    let isFirstCard = true;

    data.typeOrder.forEach((typeKey, typeIndex) => {
      const definition = data.types.find(type => type.key === typeKey);
      const group = createElement("section", "category-panel verb-group pronominal-type-group");
      group.id = `pronominal-type-${slugify(typeKey)}`;

      const header = createElement("div", "verb-group-header");
      const intro = createElement("div");
      intro.append(
        createElement("h3", "", definition ? definition.title : typeKey),
        createElement("p", "", definition ? definition.description : "")
      );
      header.appendChild(intro);

      const content = createElement("div", "verb-group-content");
      const typeItems = data.items.filter(item => item.type === typeKey);
      if (!typeItems.length) {
        content.appendChild(createErrorCard(
          `${definition ? definition.title : typeKey} has no verbs`,
          new Error("At least one card is required for this semantic type.")
        ));
      }

      typeItems.forEach(item => {
        let card;
        try {
          card = createVerbCard(item, data);
        } catch (error) {
          errors.push({ id: item.id, error });
          card = createFailedVerbCard(item, error);
          global.console.error("Pronominal verb card failed to render.", item, error);
        }
        if (isFirstCard) {
          card.open = true;
          isFirstCard = false;
        }
        cards.set(item.id, card);
        content.appendChild(card);
      });

      group.append(header, content);
      group.dataset.typeIndex = String(typeIndex);
      target.appendChild(group);
    });

    return { cards, errors };
  }

  function getVerbCards(stack) {
    if (!stack || typeof stack.querySelectorAll !== "function") return [];
    return Array.from(stack.querySelectorAll("details.pronominal-verb-card"));
  }

  function expandAll(stack) {
    getVerbCards(stack).forEach(card => { card.open = true; });
  }

  function collapseAll(stack) {
    getVerbCards(stack).forEach(card => { card.open = false; });
  }

  function createIndexControls(stack) {
    const controls = createElement("div", "study-index-controls");
    const expand = createElement("button", "study-index-control", "Expand all");
    expand.type = "button";
    expand.addEventListener("click", () => expandAll(stack));

    const collapse = createElement("button", "study-index-control", "Collapse all");
    collapse.type = "button";
    collapse.addEventListener("click", () => collapseAll(stack));
    controls.append(expand, collapse);
    return controls;
  }

  function focusVerbCard(item, stack) {
    const selector = `#pronominal-verb-${slugify(item.id || item.infinitive)}`;
    const card = stack && stack.querySelector(selector);
    if (!card) {
      global.console.warn(`Cannot find the pronominal card ${selector}.`);
      return;
    }

    card.open = true;
    const reduceMotion = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    const summary = card.querySelector("summary");
    if (summary) summary.focus({ preventScroll: true });
  }

  function renderIndex(target, data, stack) {
    target.replaceChildren();
    target.classList.add("pronominal-verb-index");
    target.setAttribute("aria-label", "Pronominal verb index");

    const targetIsGroupContainer = target.classList.contains("verb-index-groups");
    const body = targetIsGroupContainer
      ? target
      : createElement("div", "verb-index-groups");
    body.appendChild(createIndexControls(stack));

    data.typeOrder.forEach(typeKey => {
      const definition = data.types.find(type => type.key === typeKey);
      const group = createElement("div", "verb-index-group");
      group.appendChild(createElement(
        "div",
        "verb-index-group-title",
        definition ? `${definition.zh} · ${definition.title}` : typeKey
      ));

      const links = createElement("div", "verb-index-links");
      data.items.filter(item => item.type === typeKey).forEach(item => {
        const button = createElement("button", "verb-index-link", item.infinitive);
        button.type = "button";
        button.setAttribute("aria-controls", `pronominal-verb-${slugify(item.id || item.infinitive)}`);
        button.addEventListener("click", () => focusVerbCard(item, stack));
        links.appendChild(button);
      });
      group.appendChild(links);
      body.appendChild(group);
    });

    if (!targetIsGroupContainer) {
      target.classList.add("verb-index");
      target.append(
        createElement("div", "verb-index-title", "Pronominal verb index"),
        body
      );
    }
  }

  function findTarget(root, id) {
    if (!root) return null;
    if (root.id === id) return root;
    if (typeof root.getElementById === "function") return root.getElementById(id);
    if (typeof root.querySelector === "function") return root.querySelector(`#${id}`);
    return null;
  }

  function renderSafely(target, label, callback) {
    if (!target) return { ok: false, reason: "missing-target" };
    try {
      callback();
      return { ok: true };
    } catch (error) {
      target.replaceChildren(createErrorCard(`${label} failed to render`, error));
      global.console.error(`${label} failed to render.`, error);
      return { ok: false, reason: "render-error", error };
    }
  }

  function render(root) {
    const scope = root || global.document;
    const data = getData();
    const targets = {
      overview: findTarget(scope, TARGET_IDS.overview),
      agreement: findTarget(scope, TARGET_IDS.agreement),
      index: findTarget(scope, TARGET_IDS.index),
      stack: findTarget(scope, TARGET_IDS.stack)
    };
    const missingTargets = Object.entries(targets)
      .filter(([, target]) => !target)
      .map(([key]) => `#${TARGET_IDS[key]}`);

    if (!data) {
      const error = new Error("FR.data.pronominalVerbs is not available.");
      Object.values(targets).filter(Boolean).forEach(target => {
        target.replaceChildren(createErrorCard("Pronominal verbs failed to initialize", error));
      });
      global.console.error("Pronominal verb renderer could not find its data.", error);
      return { rendered: false, cards: 0, errors: [error], missingTargets };
    }

    const results = {};
    results.overview = renderSafely(targets.overview, "Pronominal overview", () => {
      renderOverview(targets.overview, data);
    });
    results.agreement = renderSafely(targets.agreement, "Pronominal agreement guide", () => {
      renderAgreement(targets.agreement, data);
    });

    let stackResult = { cards: new Map(), errors: [] };
    results.stack = renderSafely(targets.stack, "Pronominal verb cards", () => {
      stackResult = renderVerbStack(targets.stack, data);
    });
    results.index = renderSafely(targets.index, "Pronominal verb index", () => {
      renderIndex(targets.index, data, targets.stack);
    });

    const sectionErrors = Object.values(results)
      .filter(result => result.error)
      .map(result => result.error);
    const cardErrors = stackResult.errors.map(entry => entry.error);
    return {
      rendered: missingTargets.length === 0 && sectionErrors.length === 0,
      cards: stackResult.cards.size,
      errors: [...sectionErrors, ...cardErrors],
      missingTargets,
      sections: results
    };
  }

  FR.renderers.pronominalVerbs = {
    targetIds: TARGET_IDS,
    render,
    renderAll: render,
    renderOverview,
    renderAgreement,
    renderIndex,
    renderVerbStack,
    expandAll,
    collapseAll
  };
})(window);
