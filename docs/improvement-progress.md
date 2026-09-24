# Improvement checkpoints

Work is deliberately sequential. Complete and verify one item before starting the next.

- **4 — Complete:** lazy verb modes, groups, and compact tense summaries. Initial DOM reduced from 70,012 to 6,813 elements before the later UI changes.
- **5 — Complete:** mobile topic picker, collapsed audio/display settings, Start/Continue studying, and expandable verb examples. The entry button is 118 px from the top at 390 px width; the first card is 914 px down versus about 1,734 px in the audit. Verified keyboard examples, topic switching, resume across topics and reloads (including deferred tense groups), and no horizontal page overflow.
- **6 — Complete:** global search for topic references, verbs, and tense forms; accents/apostrophes normalized; bounded results with Show more; keyboard navigation and mobile dialog; destinations expand lazily. Bookmarkable URLs are explicitly deferred.
- **10 — Complete:** independent registry for 119 stable verb IDs; explicit past-tense links; shared usage/morphology independent of tense loading; validated catalog with 682 lessons, stable form/example IDs, objectives, and editorial fields. Global search consumes the catalog. Specialized renderers use adapters; references are modeled at section granularity.
- **12 — Complete:** 16 passing desktop/mobile browser checks, contextual linguistic fixtures, PR/main CI checks, and failure traces. A newly exposed passé composé resume bug was fixed and is protected by the suite.

Validation after item 5: `node scripts/validate.js` and `git diff --check` passed; no browser errors.

Validation after item 10: structural, search, and content tests passed. The latter
cover label/order changes, independent tense loading, duplicate IDs, missing
references, and invalid schema/editorial fields. Generated tense content matched
the pre-refactor baseline. Browser checks passed for past-tense search, deferred
navigation, conditional form search, and destination focus on a fresh preview origin.

Final validation: `npm test`, `npm run test:browser` (16 passed), and
`git diff --check` passed. Items 4, 5, 6 (search), 10, and 12 are complete; no item
is left partly implemented. Bookmarkable URLs remain intentionally deferred.
The catalog retains specialized renderer adapters and models references at section
granularity. Automated browser coverage is Chromium with mocked speech.
