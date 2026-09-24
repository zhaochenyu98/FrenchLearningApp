(function initializeContentModel(global) {
  "use strict";

  const kinds = new Set(["verb", "tense", "objective", "lesson", "reference"]);
  const registers = new Set(["unspecified", "neutral", "informal", "formal", "literary"]);
  const reviewStatuses = new Set(["unreviewed", "needs-review", "reviewed"]);
  const sentenceKinds = new Set(["statement", "affirmative", "negative", "question"]);

  function requireText(value, label) {
    if (typeof value !== "string" || !value.trim()) throw new Error(`${label} must be nonempty text.`);
  }

  function editorial(value = {}) {
    const result = { sources: [], register: "unspecified", acceptedVariants: [], reviewStatus: "unreviewed", ...value };
    if (!registers.has(result.register)) throw new Error(`Invalid register: ${result.register}.`);
    if (!reviewStatuses.has(result.reviewStatus)) throw new Error(`Invalid review status: ${result.reviewStatus}.`);
    if (!Array.isArray(result.sources) || !Array.isArray(result.acceptedVariants)) throw new Error("Sources and accepted variants must be arrays.");
    result.sources = Object.freeze(result.sources.map(source => {
      requireText(source.title, "Source title");
      requireText(source.url, "Source URL");
      if (!/^https?:\/\//u.test(source.url)) throw new Error("Source URL must use HTTP or HTTPS.");
      return Object.freeze({ ...source });
    }));
    result.acceptedVariants = Object.freeze(result.acceptedVariants.map(variant => {
      requireText(variant, "Accepted variant");
      return variant;
    }));
    if (result.reviewStatus === "reviewed" && !result.sources.length) throw new Error("Reviewed content needs a source.");
    return Object.freeze(result);
  }

  function createCatalog() {
    const records = new Map();
    function requireReference(id, kind) {
      if (records.get(id)?.kind !== kind) throw new Error(`Unknown ${kind}: ${id}.`);
    }
    function register(input) {
      requireText(input.id, "Content ID");
      requireText(input.title, `${input.id} title`);
      if (!kinds.has(input.kind)) throw new Error(`Unknown content kind: ${input.kind}.`);
      if (records.has(input.id)) throw new Error(`Duplicate content ID: ${input.id}.`);
      const record = { ...input, schemaVersion: 1, editorial: editorial(input.editorial) };
      if (record.kind === "verb") {
        requireText(record.verbId, "Verb ID");
        requireText(record.infinitive, "Infinitive");
        if (record.id !== `verb:${record.verbId}`) throw new Error("Verb ID and content ID disagree.");
      }
      if (record.kind === "tense") {
        requireText(record.tenseId, "Tense ID");
        if (record.id !== `tense:${record.tenseId}`) throw new Error("Tense ID and content ID disagree.");
      }
      if (record.kind === "reference") {
        requireText(record.topicId, "Reference topic ID");
        if (typeof record.body !== "string") throw new Error("Reference body must be plain text.");
      }
      if (record.kind === "lesson") {
        requireReference(`verb:${record.verbId}`, "verb");
        requireReference(`tense:${record.tenseId}`, "tense");
        if (record.id !== `lesson:${record.verbId}:${record.tenseId}`) throw new Error("Lesson ID and references disagree.");
        if (!Array.isArray(record.objectiveIds) || !record.objectiveIds.length) throw new Error("A lesson needs learning objectives.");
        record.objectiveIds.forEach(id => requireReference(id, "objective"));
        record.objectiveIds = Object.freeze([...record.objectiveIds]);
        ["forms", "examples"].forEach(field => {
          if (!Array.isArray(record[field]) || !record[field].length) throw new Error(`${record.id} needs ${field}.`);
          const ids = new Set();
          record[field] = Object.freeze(record[field].map(item => {
            requireText(item.id, `${field} ID`);
            if (!item.id.startsWith(`${record.id}:${field}:`) || ids.has(item.id)) throw new Error(`Invalid or duplicate ${field} ID: ${item.id}.`);
            ids.add(item.id);
            requireText(item.fr, `${item.id} French text`);
            if (field === "forms") requireText(item.ipa, `${item.id} IPA`);
            if (field === "examples" && !sentenceKinds.has(item.kind)) throw new Error(`Invalid sentence kind: ${item.kind}.`);
            return Object.freeze({ ...item });
          }));
        });
      }
      const frozen = Object.freeze(record);
      records.set(record.id, frozen);
      return frozen;
    }
    return Object.freeze({
      register,
      get(id) { return records.get(id) || null; },
      getLesson(verbId, tenseId) { return records.get(`lesson:${verbId}:${tenseId}`) || null; },
      list(kind) { return Array.from(records.values()).filter(record => !kind || record.kind === kind); }
    });
  }

  global.FR.content = Object.freeze({ createCatalog, editorial, catalog: createCatalog() });
})(window);
