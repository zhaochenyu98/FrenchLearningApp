# Improvement checkpoints

Work is deliberately sequential. Complete and verify one item before starting the next.

- **4 — Complete:** lazy verb modes, groups, and compact tense summaries. Initial DOM reduced from 70,012 to 6,813 elements before the later UI changes.
- **5 — Complete:** mobile topic picker, collapsed audio/display settings, Start/Continue studying, and expandable verb examples. The entry button is 118 px from the top at 390 px width; the first card is 914 px down versus about 1,734 px in the audit. Verified keyboard examples, topic switching, resume across topics and reloads (including deferred tense groups), and no horizontal page overflow.
- **6 — Complete:** global search for topic references, verbs, and tense forms; accents/apostrophes normalized; bounded results with Show more; keyboard navigation and mobile dialog; destinations expand lazily. Bookmarkable URLs are explicitly deferred.
- **10 — Pending:** stable-ID content model.
- **12 — Pending:** behavioral browser tests and linguistic fixtures.

Validation after item 5: `node scripts/validate.js` and `git diff --check` passed; no browser errors.
