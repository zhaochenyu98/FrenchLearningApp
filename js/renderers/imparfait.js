(function initializeImparfaitRenderer(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.renderers = FR.renderers || {};

  const ALIGNED_PAIRS = Object.freeze([
    Object.freeze(["je", "nous"]),
    Object.freeze(["tu", "vous"]),
    Object.freeze(["il", "ils"]),
    Object.freeze(["elle", "elles"])
  ]);

  const EXAMPLE_TYPES = Object.freeze([
    Object.freeze({ key: "statement", label: "Statement" }),
    Object.freeze({ key: "negative", label: "Negative" }),
    Object.freeze({ key: "question", label: "Question" })
  ]);

  function errorMessage(error) {
    return error && error.message ? error.message : String(error);
  }

  function createErrorCard(title, error) {
    const card = document.createElement("div");
    card.className = "inline-error-card";
    card.setAttribute("role", "alert");

    const heading = document.createElement("strong");
    heading.textContent = title;
    const message = document.createElement("span");
    message.textContent = errorMessage(error);
    card.append(heading, message);
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

  function requiredText(value, label) {
    const text = typeof value === "string" ? value.trim() : "";
    if (!text) throw new Error(`${label} is missing.`);
    return text;
  }

  function normalizeSentence(value) {
    return String(value || "")
      .toLocaleLowerCase("fr")
      .replace(/[’]/g, "'")
      .replace(/[.!?…,:;]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function reportAudioError(button, error) {
    button.classList.add("audio-error");
    button.setAttribute("aria-label", "French audio is currently unavailable");
    if (error) console.error("Imparfait audio failed", error);
  }

  function playForm(text, button) {
    if (typeof global.speakSequence !== "function") {
      console.warn("Global speakSequence is not available for imparfait audio.");
      reportAudioError(button);
      return;
    }
    try {
      global.speakSequence([{ text }], button);
    } catch (error) {
      reportAudioError(button, error);
    }
  }

  function createFormCard(row) {
    if (!row || typeof row !== "object") {
      throw new Error("Conjugation row is malformed.");
    }

    const pronoun = requiredText(row.pronoun, "Pronoun");
    const full = requiredText(row.full, `${pronoun} conjugation`);
    const ipaText = requiredText(row.ipa, `${pronoun} IPA`);
    const card = document.createElement("div");
    card.className = "verb-cell-card";
    card.setAttribute("role", "cell");

    const button = document.createElement("button");
    button.className = "verb-form-btn";
    button.type = "button";
    button.setAttribute("aria-label", `Play French conjugation: ${full}. IPA: ${ipaText}`);

    const label = document.createElement("div");
    label.className = "tiny-label";
    label.textContent = pronoun;
    const form = document.createElement("div");
    form.className = "conjugation-main";
    form.lang = "fr";
    form.textContent = full;
    const ipa = document.createElement("div");
    ipa.className = "verb-ipa";
    ipa.setAttribute("aria-label", `IPA pronunciation: ${ipaText}`);
    ipa.textContent = ipaText;

    button.append(label, form, ipa);
    button.addEventListener("click", () => playForm(row.speech || full, button));
    card.appendChild(button);
    return card;
  }

  function createPlaceholder(pronoun) {
    const placeholder = document.createElement("div");
    placeholder.className = "verb-cell-placeholder";
    placeholder.setAttribute("role", "cell");

    const label = document.createElement("span");
    label.className = "tiny-label";
    label.textContent = pronoun;
    const message = document.createElement("span");
    message.textContent = "Not used for this verb";
    placeholder.append(label, message);
    return placeholder;
  }

  function createMatrix(item) {
    const matrix = document.createElement("div");
    matrix.className = "verb-matrix";
    matrix.setAttribute("role", "table");
    matrix.setAttribute("aria-label", `${item.label}: imparfait conjugations`);

    const header = document.createElement("div");
    header.className = "verb-pair-header";
    header.setAttribute("role", "row");
    const singular = document.createElement("div");
    singular.textContent = "Singular";
    singular.setAttribute("role", "columnheader");
    const plural = document.createElement("div");
    plural.textContent = "Plural";
    plural.setAttribute("role", "columnheader");
    header.append(singular, plural);
    matrix.appendChild(header);

    ALIGNED_PAIRS.forEach(pair => {
      const pairRow = document.createElement("div");
      pairRow.className = "verb-pair-row";
      pairRow.setAttribute("role", "row");
      pair.forEach(pronoun => {
        const row = item.rows.find(entry => entry && entry.pronoun === pronoun);
        if (!row) {
          pairRow.appendChild(createPlaceholder(pronoun));
          return;
        }
        try {
          pairRow.appendChild(createFormCard(row));
        } catch (error) {
          const failure = createErrorCard(`${pronoun} conjugation failed`, error);
          failure.setAttribute("role", "cell");
          pairRow.appendChild(failure);
        }
      });
      matrix.appendChild(pairRow);
    });

    const onRow = item.rows.find(row => row && row.pronoun === "on");
    if (onRow) {
      const column = document.createElement("div");
      column.className = "verb-extra-column";
      const title = document.createElement("div");
      title.className = "verb-column-title";
      title.textContent = "On: spoken French";
      try {
        column.append(title, createFormCard(onRow));
      } catch (error) {
        const failure = createErrorCard("on conjugation failed", error);
        failure.setAttribute("role", "cell");
        column.append(title, failure);
      }
      matrix.appendChild(column);
    }

    return matrix;
  }

  function validateExample(sentence, type, item) {
    if (!sentence || typeof sentence !== "object") {
      throw new Error(`${type.label} example is malformed.`);
    }

    const fr = requiredText(sentence.fr, `${type.label} French sentence`);
    const en = requiredText(sentence.en, `${type.label} English translation`);
    if (type.key === "question") {
      if (!/[?？]\s*$/.test(fr)) {
        throw new Error("Question example must end with a question mark.");
      }
      const statement = item.examples && item.examples.statement;
      if (statement && normalizeSentence(statement.fr) === normalizeSentence(fr)) {
        throw new Error("Question example must use a genuine question structure, not only add a question mark.");
      }
    }
    return { fr, en, speech: sentence.speech || fr };
  }

  function createExampleButton(sentence, type, item) {
    const example = validateExample(sentence, type, item);
    const button = document.createElement("button");
    button.className = "verb-example-btn";
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `Play ${type.label.toLowerCase()} example in French: ${example.fr}. English: ${example.en}`
    );

    const label = document.createElement("div");
    label.className = "tiny-label";
    label.textContent = type.label;
    const french = document.createElement("div");
    french.className = "verb-example-line french-line";
    french.lang = "fr";
    french.textContent = example.fr;
    const translation = document.createElement("div");
    translation.className = "translation";
    translation.lang = "en";
    translation.textContent = example.en;

    button.append(label, french, translation);
    button.addEventListener("click", () => playForm(example.speech, button));
    return button;
  }

  function createExamplesSection(item, panelId) {
    const section = document.createElement("section");
    const heading = document.createElement("div");
    heading.className = "verb-subtable-heading";
    const title = document.createElement("h4");
    title.id = `${panelId}-examples-title`;
    title.textContent = "Imparfait examples";
    heading.appendChild(title);
    section.setAttribute("aria-labelledby", title.id);

    const list = document.createElement("div");
    list.className = "verb-example-list";
    list.setAttribute("role", "list");
    EXAMPLE_TYPES.forEach(type => {
      const listItem = document.createElement("div");
      listItem.setAttribute("role", "listitem");
      try {
        const sentence = item.examples && item.examples[type.key];
        listItem.appendChild(createExampleButton(sentence, type, item));
      } catch (error) {
        listItem.appendChild(createErrorCard(`${item.label}: ${type.label} example failed`, error));
      }
      list.appendChild(listItem);
    });

    section.append(heading, list);
    return section;
  }

  function createRuleCallouts(rules) {
    const wrapper = document.createElement("div");
    wrapper.className = "summary-chips";
    rules.forEach(rule => {
      const card = document.createElement("div");
      card.className = "summary-chip";
      const title = document.createElement("strong");
      title.textContent = rule.title;
      const note = document.createElement("span");
      note.textContent = rule.note;
      card.append(title, note);
      wrapper.appendChild(card);
    });
    return wrapper;
  }

  function createVerbCard(item) {
    if (!item || typeof item !== "object") throw new Error("Imparfait item is malformed.");
    if (item.error) throw item.error;
    if (!item.formula || !Array.isArray(item.rows) || !item.rows.length) {
      throw new Error(`${item.label} has no derived imparfait paradigm.`);
    }

    const panel = document.createElement("div");
    panel.className = "panel verb-panel";
    panel.id = `imparfait-${slugify(item.key)}`;
    panel.tabIndex = -1;

    const header = document.createElement("div");
    header.className = "verb-panel-header";
    const title = document.createElement("h3");
    title.textContent = item.title || item.label;
    header.appendChild(title);

    const formula = document.createElement("div");
    formula.className = "grammar-note";
    const formulaLabel = document.createElement("strong");
    formulaLabel.textContent = "Formula: ";
    formula.append(formulaLabel, item.formula.text);

    panel.append(header, formula, createMatrix(item));
    if (Array.isArray(item.specialRules) && item.specialRules.length) {
      panel.appendChild(createRuleCallouts(item.specialRules));
    }
    panel.appendChild(createExamplesSection(item, panel.id));
    return panel;
  }

  function setGroupCollapsed(group, collapsed) {
    const toggle = group.querySelector(".verb-group-toggle");
    group.classList.toggle("collapsed", collapsed);
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.textContent = collapsed ? "Expand" : "Collapse";
  }

  function createGroup(groupData, cardTargets, groupIndex, errors) {
    const group = document.createElement("section");
    group.className = "category-panel verb-group";
    group.id = `imparfait-group-${slugify(groupData.key)}`;
    group.dataset.imparfaitGroup = groupData.key;

    const header = document.createElement("div");
    header.className = "verb-group-header";
    const intro = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = groupData.title;
    const description = document.createElement("p");
    description.innerHTML = groupData.descriptionHtml || "";
    intro.append(title, description);

    const toggle = document.createElement("button");
    toggle.className = "verb-group-toggle";
    toggle.type = "button";
    toggle.addEventListener("click", () => {
      setGroupCollapsed(group, !group.classList.contains("collapsed"));
    });
    header.append(intro, toggle);

    const content = document.createElement("div");
    content.className = "verb-group-content";
    groupData.items.forEach(item => {
      try {
        const card = createVerbCard(item);
        cardTargets.set(item.key, { card, group });
        content.appendChild(card);
      } catch (error) {
        errors.push({ key: item.key, error });
        const errorCard = createErrorCard(`${item.label || item.key} failed to render`, error);
        errorCard.id = `imparfait-${slugify(item.key)}`;
        errorCard.tabIndex = -1;
        cardTargets.set(item.key, { card: errorCard, group });
        content.appendChild(errorCard);
        console.error("Imparfait card failed to render", item, error);
      }
    });

    group.append(header, content);
    setGroupCollapsed(group, groupIndex > 0);
    return group;
  }

  function renderSpecialRules(container, data) {
    container.replaceChildren();
    const rules = Object.values(data.ruleCatalog);
    container.appendChild(createRuleCallouts(rules));
  }

  function renderGroups(container, data) {
    container.replaceChildren();
    container.classList.add("verb-group-stack");
    const cardTargets = new Map();
    const errors = [];

    if (!data.groups.length && Array.isArray(data.errors) && data.errors.length) {
      data.errors.forEach(entry => {
        const error = entry.error || entry;
        errors.push({ key: entry.key || "initialization", error });
        container.appendChild(createErrorCard(`${entry.label || "Imparfait"} failed to load`, error));
      });
      return { cardTargets, errors };
    }

    data.groups.forEach((group, index) => {
      try {
        container.appendChild(createGroup(group, cardTargets, index, errors));
      } catch (error) {
        errors.push({ key: group.key, error });
        container.appendChild(createErrorCard(`${group.title} failed to render`, error));
        console.error("Imparfait group failed to render", group, error);
      }
    });

    return { cardTargets, errors };
  }

  function createIndexControls(groups) {
    const controls = document.createElement("div");
    controls.className = "study-index-controls";

    const expand = document.createElement("button");
    expand.className = "study-index-control";
    expand.type = "button";
    expand.textContent = "Expand all";
    expand.addEventListener("click", () => groups.forEach(group => setGroupCollapsed(group, false)));

    const collapse = document.createElement("button");
    collapse.className = "study-index-control";
    collapse.type = "button";
    collapse.textContent = "Collapse all";
    collapse.addEventListener("click", () => groups.forEach(group => setGroupCollapsed(group, true)));

    controls.append(expand, collapse);
    return controls;
  }

  function renderIndex(container, data, cardTargets) {
    container.replaceChildren();
    container.classList.add("verb-index-groups");
    container.setAttribute("aria-label", "Imparfait index");

    const groups = Array.from(new Set(Array.from(cardTargets.values()).map(target => target.group)));
    container.appendChild(createIndexControls(groups));

    data.groups.forEach(groupData => {
      const block = document.createElement("div");
      block.className = "verb-index-group";
      const groupTitle = document.createElement("div");
      groupTitle.className = "verb-index-group-title";
      groupTitle.textContent = groupData.indexTitle;
      const links = document.createElement("div");
      links.className = "verb-index-links";

      groupData.items.forEach(item => {
        const target = cardTargets.get(item.key);
        if (!target) return;
        const button = document.createElement("button");
        button.className = "verb-index-link";
        button.type = "button";
        button.textContent = item.label;
        button.addEventListener("click", () => {
          setGroupCollapsed(target.group, false);
          target.card.scrollIntoView({ behavior: "smooth", block: "start" });
          target.card.focus({ preventScroll: true });
        });
        links.appendChild(button);
      });

      block.append(groupTitle, links);
      container.appendChild(block);
    });
  }

  function render() {
    const data = FR.data && FR.data.imparfait;
    const specialRules = document.getElementById("imparfaitSpecialRules");
    const index = document.getElementById("imparfaitIndex");
    const groupStack = document.getElementById("imparfaitGroupStack");
    const missingTargets = [];
    const errors = [];

    if (!specialRules) missingTargets.push("#imparfaitSpecialRules");
    if (!index) missingTargets.push("#imparfaitIndex");
    if (!groupStack) missingTargets.push("#imparfaitGroupStack");
    if (!data) {
      const error = new Error("FR.data.imparfait is not available.");
      [specialRules, index, groupStack].filter(Boolean).forEach(container => {
        container.replaceChildren(createErrorCard("Imparfait failed to initialize", error));
      });
      console.error("Imparfait renderer could not find its data", error);
      return { rendered: false, cards: 0, errors: [error], missingTargets };
    }

    try {
      if (specialRules) renderSpecialRules(specialRules, data);
    } catch (error) {
      errors.push(error);
      if (specialRules) specialRules.replaceChildren(createErrorCard("Special rules failed to render", error));
      console.error("Imparfait special rules failed to render", error);
    }

    let groupResult = { cardTargets: new Map(), errors: [] };
    try {
      if (groupStack) groupResult = renderGroups(groupStack, data);
    } catch (error) {
      errors.push(error);
      if (groupStack) groupStack.replaceChildren(createErrorCard("Imparfait groups failed to render", error));
      console.error("Imparfait groups failed to render", error);
    }
    errors.push(...groupResult.errors.map(entry => entry.error));

    try {
      if (index) renderIndex(index, data, groupResult.cardTargets);
    } catch (error) {
      errors.push(error);
      if (index) index.replaceChildren(createErrorCard("Imparfait index failed to render", error));
      console.error("Imparfait index failed to render", error);
    }

    return {
      rendered: Boolean(specialRules && index && groupStack),
      cards: groupResult.cardTargets.size,
      errors,
      missingTargets
    };
  }

  FR.renderers.imparfait = {
    render,
    renderSpecialRules,
    renderIndex,
    renderGroups
  };
})(window);
