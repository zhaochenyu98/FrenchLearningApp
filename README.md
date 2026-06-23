# French Learning App

A no-build, browser-based French study app. Open `index.html` directly or serve the
folder with a local HTTP server. The project intentionally uses classic deferred
scripts so it continues to work from `file://`.

## Project Structure

```text
index.html                         Page structure and tab markup
styles.css                         Shared visual styles
js/app.js                          Tab registration, event wiring, and startup
js/core/core.js                    DOM references, audio, theme, and shared state
js/renderers/                      Reusable renderers grouped by study topic
js/data/numbers.js                 Number generation and IPA
js/data/grammar.js                 Pronouns, verbs, and grammar flashcards
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
references, and tab/section pairing.

## Add Content

- Add or revise topic data in the matching file under `js/data/`.
- Reuse an existing renderer from the matching file under `js/renderers/` when possible.
- Keep audio text in the data object so display and playback stay synchronized.
- For long tabs that use the side index, mark major HTML blocks with a stable
  `data-study-section` value and reference that selector from `studyIndexConfigs`.
  Avoid relying on exact heading text when adding new indexed sections.

## Add a Verb

1. Add its conjugation rows to `js/data/grammar.js`.
2. Add its table and play button markup to the appropriate group in `index.html`.
3. Add one entry to `verbConfigs` in `js/app.js`.

The registry handles rendering and play-all behavior.

## Add a Tab

1. Add a `.tab-btn` with a unique `data-tab` value in `index.html`.
2. Add a `.section` using the same `data-tab` value.
3. Put the topic content in an existing or new `js/data/` file.
4. Add a first-render function to `tabInitializers` in `js/app.js`.
5. If adding a new data script, include it before the core scripts in `index.html`.

Tabs are initialized only when first opened. Accessibility attributes and tab
switching behavior are applied automatically.
