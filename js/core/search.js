(function initializeSearch(global) {
  "use strict";
  const FR = global.FR;

  function plainText(value) {
    if (typeof value === "string") return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    if (Array.isArray(value)) return value.map(plainText).join(" ");
    if (value && typeof value === "object") return Object.values(value).map(plainText).join(" ");
    return "";
  }

  function normalize(value) {
    return String(value || "").toLocaleLowerCase("fr").normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").replace(/[’‘']/g, "")
      .replace(/œ/g, "oe").replace(/æ/g, "ae")
      .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  }

  function createIndex(entries) {
    const documents = entries.map(entry => ({
      ...entry,
      text: plainText(entry.text),
      titleKey: normalize(entry.title),
      categoryKey: normalize(entry.category),
      bodyKey: normalize(plainText(entry.text))
    }));
    return function search(query, limit = 12) {
      const key = normalize(query);
      if (!key) return { total: 0, results: [] };
      const tokens = key.split(/\s+/);
      const matches = documents.filter(entry => tokens.every(token =>
        `${entry.titleKey} ${entry.categoryKey} ${entry.bodyKey}`.includes(token)
      )).map(entry => {
        const score = (entry.titleKey === key ? 200 : 0)
          + (entry.titleKey.startsWith(key) ? 100 : 0)
          + tokens.reduce((sum, token) => sum + (entry.titleKey.split(" ").includes(token) ? 25 : entry.titleKey.includes(token) ? 15 : 0), 0)
          + (entry.categoryKey.includes(key) ? 10 : 0);
        return { entry, score };
      }).sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "fr") || a.entry.id.localeCompare(b.entry.id));
      return { total: matches.length, results: matches.slice(0, limit).map(({ entry }) => entry) };
    };
  }

  function initializeDialog(entries, navigate) {
    const dialog = document.getElementById("globalSearchDialog");
    const input = document.getElementById("globalSearchInput");
    const results = document.getElementById("globalSearchResults");
    const status = document.getElementById("globalSearchStatus");
    const more = document.getElementById("globalSearchMore");
    const search = createIndex(entries);
    let limit = 12;
    function render() {
      const found = search(input.value, limit);
      results.replaceChildren();
      found.results.forEach(entry => {
        const item = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "global-search-result";
        const title = document.createElement("strong");
        title.textContent = entry.title;
        const category = document.createElement("span");
        category.textContent = entry.category;
        button.append(title, category);
        if (entry.text) {
          const preview = document.createElement("span");
          const start = Math.max(0, normalize(entry.text).indexOf(normalize(input.value).split(" ")[0]) - 45);
          preview.textContent = `${start ? "…" : ""}${entry.text.slice(start, start + 150)}${entry.text.length > start + 150 ? "…" : ""}`;
          button.appendChild(preview);
        }
        button.addEventListener("click", () => {
          dialog.close();
          navigate(entry.destination);
        });
        item.appendChild(button);
        results.appendChild(item);
      });
      status.textContent = !normalize(input.value) ? "Search a verb, form, or concept—for example, être, agreement, or depuis."
        : found.total ? `${found.total} results. Showing ${found.results.length}.`
          : "No matches. Try another word or a shorter phrase.";
      more.hidden = found.total <= found.results.length;
    }
    function open() {
      if (!dialog.open) dialog.showModal();
      input.focus();
      input.select();
      render();
    }
    document.getElementById("openGlobalSearch").addEventListener("click", open);
    document.getElementById("closeGlobalSearch").addEventListener("click", () => dialog.close());
    dialog.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      dialog.close();
    });
    input.addEventListener("input", () => { limit = 12; render(); });
    input.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        results.querySelector("button")?.focus();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        results.querySelector("button")?.click();
      }
    });
    results.addEventListener("keydown", event => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      const buttons = Array.from(results.querySelectorAll("button"));
      const index = buttons.indexOf(event.target);
      if (index < 0) return;
      event.preventDefault();
      if (event.key === "ArrowUp" && index === 0) { input.focus(); return; }
      const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1
        : Math.max(0, Math.min(buttons.length - 1, index + (event.key === "ArrowDown" ? 1 : -1)));
      buttons[next].focus();
    });
    more.addEventListener("click", () => { limit += 12; render(); results.querySelectorAll("button")[limit - 12]?.focus(); });
    document.addEventListener("keydown", event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open();
      }
    });
  }
  FR.search = { plainText, normalize, createIndex, initializeDialog };
})(window);
