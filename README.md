# French Learning App

A no-build, browser-based French study app. Open `index.html` directly or serve the
folder with a local HTTP server. The project intentionally uses classic deferred
scripts so it continues to work from `file://`.

## Project Structure

```text
index.html                         Page structure and tab markup
styles.css                         Shared visual styles
js/app.js                          Tab registration, event wiring, and startup
js/core/namespace.js               Shared FR registry and safe saved preferences
js/core/core.js                    DOM references, audio, theme, and shared state
js/renderers/                      Reusable renderers grouped by study topic
js/data/numbers.js                 Number generation and IPA
js/data/pronouns.js                COD, COI, tonic, reflexive, and possessive data
js/data/verbs.js                   Present-tense verb paradigms, IPA, and registry data
js/data/grammar.js                 Être/avoir examples and grammar flashcards
js/data/tenses.js                  Passé composé forms and example sentences
js/data/imparfait.js               Derived Imparfait forms, IPA, and examples
js/data/futur-simple.js            Derived futur-simple forms, IPA, stems, and examples
js/data/imperative.js              Imperative paradigms, IPA, and examples
js/data/pronominal-verbs.js        Pronominal paradigms, agreement, IPA, and examples
js/data/pronunciation.js           Pronunciation rules and practice words
js/data/questions.js               Question-word learning content
js/data/vocabulary.js              Calendar, nouns, and adjectives
js/data/determiners-prepositions.js Articles, determiners, and prepositions
scripts/validate.js                Structural and JavaScript validation
```

## Validate Changes

Run this after editing content or adding a tab:

```bash
node scripts/validate.js
```

It checks JavaScript syntax, referenced assets, duplicate IDs, missing DOM
references, tab/section pairing, verb data integrity, verb/tense synchronization,
and important number spelling and IPA edge cases. The deployment workflow runs
the same validator before publishing.

## Add Content

- Add or revise topic data in the matching file under `js/data/`.
- Reuse an existing renderer from the matching file under `js/renderers/` when possible.
- Keep audio text in the data object so display and playback stay synchronized.
- For long tabs that use the side index, mark major HTML blocks with a stable
  `data-study-section` value and reference that selector from `studyIndexConfigs`.
  Avoid relying on exact heading text when adding new indexed sections.

## Add a Verb

1. Add its conjugation rows and `verbStudyItems` entry to `js/data/verbs.js`.
2. Add its passé composé study entry to `js/data/tenses.js`. Movement verbs
   already listed in `etreAuxiliaryVerbs` are derived automatically when possible.
3. Add imperative metadata to `js/data/imperative.js` when the verb has a natural
   imperative. Imparfait and futur-simple rows are derived from the shared verb registry;
   add an explicit stem override only when the new verb needs one.
4. Run `node scripts/validate.js` to confirm all pronouns, examples, IPA, groups,
   and present/past/future entries stay synchronized.

Verb panels, tables, index buttons, and compact tense summaries are generated
from the data. Do not add verb markup to `index.html`.

## Add a Tab

1. Add a `.tab-btn` with a unique `data-tab` value in `index.html`.
2. Add a `.section` using the same `data-tab` value.
3. Put the topic content in an existing or new `js/data/` file.
4. Add a first-render function to `tabInitializers` in `js/app.js`.
5. If adding a new data script, include it before the core scripts in `index.html`.

Tabs are initialized only when first opened. Accessibility attributes and tab
switching behavior are applied automatically.
