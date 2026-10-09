(function registerVerbPrepositionRenderer(global) {
  "use strict";
  const FR = global.FR;

  function element(tag, className, text) {
    const node = global.document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function createSection(verbId) {
    const usages = FR.data.verbPrepositions.getByVerbId(verbId);
    if (!usages.length) return null;

    const section = element("details", "verb-examples-disclosure verb-preposition-usage");
    section.dataset.verbId = verbId;
    section.append(
      element("summary", "", "À / de usage"),
      element("p", "grammar-note", "Choose the preposition for the meaning and complement shown. À + le = au; à + les = aux; de + le = du; de + les = des; de becomes d’ before a vowel or silent h.")
    );
    const list = element("div", "noun-example-list");
    usages.forEach(usage => {
      const card = element("div", "summary-chip verb-preposition-card");
      card.dataset.constructionId = usage.id;
      const pattern = element("strong", "french-line", usage.pattern);
      pattern.lang = "fr";
      card.append(pattern, element("span", "translation", usage.meaning));

      const button = element("button", "noun-example-btn");
      button.type = "button";
      button.setAttribute("aria-label", `Play French audio: ${usage.fr}`);
      const french = element("span", "noun-example-main french-line", usage.fr);
      french.lang = "fr";
      const english = element("span", "translation", usage.en);
      english.lang = "en";
      button.append(french, english);
      button.addEventListener("click", () => global.speakSequence([{ text: usage.fr }], button));
      card.appendChild(button);
      if (usage.note) card.appendChild(element("p", "grammar-note", usage.note));
      usage.sources.forEach(source => {
        const link = element("a", "translation", source.title);
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      });
      list.appendChild(card);
    });
    section.appendChild(list);
    return section;
  }

  FR.renderers.verbPrepositions = Object.freeze({ createSection });
})(window);
