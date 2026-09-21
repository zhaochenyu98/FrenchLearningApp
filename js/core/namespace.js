(function initializeFrenchLearningNamespace(global) {
  const FR = global.FR || {};

  FR.data = FR.data || {};
  FR.renderers = FR.renderers || {};
  FR.runtime = FR.runtime || {};
  FR.utils = FR.utils || {};

  FR.utils.jumpToVerb = function jumpToVerb(target, focusTarget = target) {
    if (!target) return;
    // Let the index finish closing on mobile before measuring the destination.
    global.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      if (focusTarget) focusTarget.focus({ preventScroll: true });
    });
  };

  FR.utils.addVerbIndexSearch = function addVerbIndexSearch(container, label) {
    if (!container || container.querySelector(".verb-index-search")) return;
    const normalize = value => value.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "")
      .replace(/œ/g, "oe")
      .toLocaleLowerCase("fr")
      .replace(/\s+/g, " ")
      .trim();
    const groups = Array.from(container.querySelectorAll(".verb-index-group"));
    const entries = Array.from(container.querySelectorAll(".verb-index-link"))
      .map(button => ({ button, text: normalize(button.textContent) }));
    const otherLinks = Array.from(container.querySelectorAll(":scope > .study-index-link"));

    const toolbar = document.createElement("div");
    toolbar.className = "verb-index-toolbar";
    const searchLabel = document.createElement("label");
    searchLabel.className = "verb-index-search-label";
    searchLabel.append("Search verbs");
    const input = document.createElement("input");
    input.type = "search";
    input.className = "verb-index-search";
    input.placeholder = "Type a verb…";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", `Search verbs in ${label}`);
    searchLabel.appendChild(input);
    const status = document.createElement("div");
    status.className = "verb-index-search-status";
    status.setAttribute("role", "status");
    toolbar.append(searchLabel, status);

    const controls = container.querySelector(":scope > .study-index-controls")
      || container.parentElement.querySelector(":scope > .study-index-controls");
    if (controls) toolbar.appendChild(controls);
    container.prepend(toolbar);

    function filter() {
      const query = normalize(input.value);
      let count = 0;
      entries.forEach(({ button, text }) => {
        button.hidden = !text.includes(query);
        if (!button.hidden) count += 1;
      });
      groups.forEach(group => {
        group.hidden = !group.querySelector(".verb-index-link:not([hidden])");
      });
      otherLinks.forEach(link => { link.hidden = Boolean(query); });
      status.textContent = count
        ? `${count} ${count === 1 ? "verb" : "verbs"}${query ? " found" : ""}`
        : "No matching verbs.";
    }
    input.addEventListener("input", filter);
    input.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      input.value = "";
      filter();
    });
    filter();
  };

  FR.utils.escapeAttribute = FR.utils.escapeAttribute || function escapeAttribute(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  FR.storage = FR.storage || {
    get(key, fallback = null) {
      try {
        const value = global.localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (error) {
        console.warn(`Could not read saved preference: ${key}`, error);
        return fallback;
      }
    },

    set(key, value) {
      try {
        global.localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn(`Could not save preference: ${key}`, error);
        return false;
      }
    },

    getJson(key, fallback) {
      const value = this.get(key);
      if (value === null) return fallback;
      try {
        return JSON.parse(value);
      } catch (error) {
        console.warn(`Could not parse saved preference: ${key}`, error);
        return fallback;
      }
    },

    setJson(key, value) {
      return this.set(key, JSON.stringify(value));
    }
  };

  global.FR = FR;
})(window);
