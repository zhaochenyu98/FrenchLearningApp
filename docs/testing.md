# Behavioral and linguistic regression tests

Run `npm test` for the dependency-free Node checks. They include the original
structural/content validator, stable-ID catalog checks, search tests, and curated
linguistic fixtures. `scripts/load-data.js` uses the actual script order from
`index.html` so additions are exercised automatically.

Run `npm ci`, `npx playwright install chromium`, then `npm run test:browser` for
the browser suite. Playwright creates isolated contexts with fresh storage. The
test server binds only to `127.0.0.1:8893`, disables caching, and is stopped when
the run finishes. Tests execute sequentially with no retries.

## Behavior coverage

Each scenario runs at 1280 × 900 and 390 × 844:

- Bounded initial rendering; searching creates a deferred verb exactly once.
- Accent/apostrophe search, keyboard results, destination focus, and Escape.
- No-match feedback, 12-result batches, and Show more focus.
- Passé composé parent expansion and precise Continue behavior after reload.
- Concealed grammar answers, keyboard reveal, and resetting on Next.
- Listening answer concealment, explicit reveal, and clearing a new question.
- Desktop keyboard tabs, mobile topic picker, quick entry, and no page overflow.
- Direct local-file opening and navigation without a web server.

Every case fails on uncaught application errors or rendered error cards. Browser
tests use deterministic speech callbacks; they verify the UI flow, not audible
voice quality. Native voices and real-device listening still warrant manual checks.
Chromium is the automated target; this suite does not claim cross-browser coverage.

The suite exposed and now guards a resume bug: a selected passé composé row used
to save only its containing group. Resume now saves the row and its parent card,
so it can render the parent before focusing the original verb.

## Language fixtures

`tests/fixtures/language-cases.json` contains explicit expected forms, contextual
negative complements, agreement contrasts, and imperative pronoun examples.
`scripts/test-language.js` also checks contrasting liaison environments and keeps
accepted spelling variants documented. Expected results are authored separately
from the generators, with short explanations of what each case protects.

The article, imperative, and agreement expectations were checked against the
linked OQLF rules in the fixture file. Example sentences come from the app.
IPA assertions protect the app's pronunciation convention while ignoring syllable
separator differences; they do not require every French accent to sound identical.
This is a regression sample, not linguistic certification of the full corpus.

When adding an exception, include a nearby contrasting case: for example, a
negative partitive alongside a definite article that must remain unchanged, or
liaison before a vowel alongside a consonant where no liaison belongs. Do not
automatically regenerate expected outputs from the implementation under test.

## CI

`.github/workflows/test.yml` runs both suites on pull requests, pushes to `main`,
and manual dispatch. Browser traces are uploaded on failure. The Pages deployment
also runs `npm test`; browser results are a separate check. Branch protection must
require that check if it should block merges or releases.
