(function initializeImparfaitRenderer(global) {
  "use strict";

  const FR = global.FR = global.FR || {};
  FR.renderers = FR.renderers || {};

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

  function playForm(text, button) {
    if (typeof global.speakSequence !== "function") {
      console.warn("Global speakSequence is not available for imparfait audio.");
      return;
    }
    global.speakSequence([{ text }], button);
  }

  function createFormCard(row) {
    const card = document.createElement("div");
    card.className = "verb-cell-card";

    const button = document.createElement("button");
    button.className = "verb-form-btn";
    button.type = "button";

    const label = document.createElement("div");
    label.className = "tiny-label";
    label.textContent = row.pronoun;
    const form = document.createElement("div");
    form.className = "conjugation-main";
    form.textContent = row.full;

    button.append(label, form);
    button.addEventListener("click", () => playForm(row.full, button));
    card.appendChild(button);
    return card;
  }

  function createPlaceholder(pronoun) {
    const placeholder = document.createElement("div");
    placeholder.className = "verb-cell-placeholder";

    const label = document.createElement("span");
    label.className = "tiny-label";
    label.textContent = pronoun;
    const message = document.createElement("span");
    message.textContent = "Not used for this verb";
    placeholder.append(label, message);
    return placeholder;
  }

  function createMatrix(item, data) {
    const matrix = document.createElement("div");
    matrix.className = "verb-matrix";

    const header = document.createElement("div");
    header.className = "verb-pair-header";
    const singular = document.createElement("div");
    singular.textContent = "Singular";
    const plural = document.createElement("div");
    plural.textContent = "Plural";
    header.append(singular, plural);
    matrix.appendChild(header);

    data.alignedPairs.forEach(pair => {
      const pairRow = document.createElement("div");
      pairRow.className = "verb-pair-row";
      pair.forEach(pronoun => {
        const row = item.rows.find(entry => entry.pronoun === pronoun);
        pairRow.appendChild(row ? createFormCard(row) : createPlaceholder(pronoun));
      });
      matrix.appendChild(pairRow);
    });

    const onRow = item.rows.find(row => row.pronoun === "on");
    if (onRow) {
      const column = document.createElement("div");
      column.className = "verb-extra-column";
      const title = document.createElement("div");
      title.className = "verb-column-title";
      title.textContent = "On: spoken French";
      column.append(title, createFormCard(onRow));
      matrix.appendChild(column);
    }

    return matrix;
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

  function createVerbCard(item, data) {
    if (item.error) throw item.error;
    if (!item.formula || !item.rows.length) {
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

    panel.append(header, formula, createMatrix(item, data));
    if (item.specialRules.length) panel.appendChild(createRuleCallouts(item.specialRules));
    return panel;
  }

  function setGroupCollapsed(group, collapsed) {
    const toggle = group.querySelector(".verb-group-toggle");
    group.classList.toggle("collapsed", collapsed);
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.textContent = collapsed ? "Expand" : "Collapse";
  }

  function createGroup(groupData, data, cardTargets, groupIndex, errors) {
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
        const card = createVerbCard(item, data);
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
        container.appendChild(createGroup(group, data, cardTargets, index, errors));
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
