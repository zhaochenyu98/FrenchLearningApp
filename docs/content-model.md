# Content model, version 1

`FR.content.catalog` provides one ID-based interface for verbs, tenses, learning
objectives, lessons, and searchable topic references. It works with classic
scripts and `file://`; no build step or external schema library is required.

```js
const lesson = FR.content.catalog.getLesson("parler", "imparfait");
// lesson.id === "lesson:parler:imparfait"
// lesson.forms: { id, person, form, fr, ipa, en }[]
// lesson.examples: { id, kind, fr, en }[]
// lesson.objectiveIds: ["objective:imparfait"]
```

IDs are authored identifiers, never translated labels or array positions. The
existing verb keys are now permanent verb IDs. Form IDs use grammatical persons;
sentence IDs use person, an authored example ID (where there are several senses),
and sentence kind. Do not change these IDs when editing a label, translation,
sentence, or display order.

`js/core/content.js` validates registration, including duplicate IDs, references
to known verbs/tenses/objectives, required French text and IPA, and editorial
fields. It exposes `createCatalog()` for isolated tests and `catalog.register()`,
`get()`, `getLesson()`, and `list(kind)` for consumers. Records and normalized
lesson arrays are frozen. Failed registration does not add a partial record.

Every record has `schemaVersion: 1` and an `editorial` object:

```js
{
  sources: [],                // { title, url } entries
  register: "unspecified",    // or neutral, informal, formal, literary
  acceptedVariants: [],       // authored alternative strings
  reviewStatus: "unreviewed"  // or needs-review, reviewed
}
```

Existing material defaults to unreviewed; passing code tests does not certify
linguistic review. Marking material reviewed requires a source. These fields are
ready for editorial enrichment without inventing provenance for existing text.

## Ownership and dependencies

- `verbs.js` owns authored present paradigms and permanent example IDs.
- `verb-registry.js` owns shared infinitives, IPA, and explicit `pastVerbId`
  links. For example, `ilYA` deliberately links to `avoirVerb` for its participle.
  The registry is available before any tense module.
- `tenses.js` references `verbId` explicitly. Both ordinary and être-auxiliary
  lookups use IDs; display-name normalization is no longer a runtime join.
- `verb-usage.js` owns named sentence complements shared across tense generators.
- `verb-prepositions.js` owns the audited à/de constructions, bilingual examples,
  and usage notes shared by ordinary and pronominal verb cards. Every verb is
  classified in `byVerb` or `withoutUsage`. Examples join the present lesson with
  permanent `preposition:<construction-id>:statement` IDs; existing sentence IDs
  stay unchanged. Partitive articles and generic time adjuncts are not counted
  as prepositional verb constructions.
- `simple-tense-morphology.js` owns future/conditional stems and form generation.
  Future and conditional can each load without the other, imperfect, or past data.
- `subjonctif-present.js` derives subjunctive stems and IPA from present nous/ils,
  with explicit exceptional forms and spelling adjustments. It owns complete
  bilingual examples with subjunctive triggers and preserves each entry's natural
  subjects. Pronominal cards reuse these forms and examples. This module loads
  independently of the other tenses.
- `gerondif.js` derives en + present participle from present nous, with exceptions
  for être, avoir, and savoir. It covers 142 entries with invariant forms, IPA,
  and authored bilingual contexts. Pronominal entries expose eight subject-linked
  reflexive forms without adding a finite subject to the gérondif. Seven
  impersonal entries have explicit exclusion notes; missing classifications fail
  catalog registration. Pronominal cards reuse the shared forms and examples.
- `content-catalog.js` adapts the current authoring structures into 149 verb
  records and 1148 available verb/tense lessons. Unsupported imperatives and
  excluded gérondif constructions are absent.
  Ordinary passé composé lessons expose the taught participle and sentences;
  pronominal lessons expose their full specialized paradigms.
- `app.js` registers topic references using stable section IDs and plain text.
  Global search consumes catalog forms/examples; destinations remain a UI concern.

Existing renderers continue to accept their specialized data through adapters.
New cross-topic features should read the catalog instead of inventing another
name-based join. Topic references are registered at section granularity; individual
reference cards have not all been converted into standalone lesson records.
DOM IDs are separate from content IDs; bookmarkable URLs remain deferred.

## Extending content

For a new verb, add its permanent key and present rows in `verbs.js`, its lexical
metadata in `verb-registry.js`, and an explicit `verbId` in the past data. Add
shared sentence usage or curated tense examples and any exceptional morphology.
Multiple examples on one present row need distinct authored `id` values.

For a new tense, add its own data module, a tense definition and objective in
`content-catalog.js`, and an adapter that registers its lessons. Reuse shared
morphology only where appropriate. Register prerequisites before lessons, then
add a renderer/navigation destination separately.

Run `node scripts/test-content.js`, `node scripts/test-search.js`, and
`node scripts/validate.js`. The content tests also load future, conditional, and
subjunctive in isolation and rename/reorder source records to detect accidental
identity coupling.

## Subjonctif présent references

The formation rules and selected linguistic fixtures were checked against the
[OQLF conjugation guide](https://vitrinelinguistique.oqlf.gouv.qc.ca/24237/la-grammaire/le-verbe/conjugaison/formes-du-subjonctif).
Usage notes follow OQLF's guidance on
[verbs introducing the subjunctive](https://vitrinelinguistique.oqlf.gouv.qc.ca/24253/la-grammaire/le-verbe/modes/subjonctif/subjonctif-apres-certains-verbes)
and [subordinators](https://vitrinelinguistique.oqlf.gouv.qc.ca/24238/la-grammaire/le-verbe/modes/subjonctif/subjonctif-ou-indicatif-apres-les-subordonnants-composes).
Larousse provides the exceptional paradigms for
[valoir](https://www.larousse.fr/conjugaison/francais/valoir/9253)
and [pleuvoir](https://www.larousse.fr/conjugaison/francais/pleuvoir/9824).
The affirmative espérer contrast follows the
[Language Portal of Canada](https://nos-langues.canada.ca/fr/cles-de-la-redaction/esperer-de-que).
Example sentences are authored for the app. These references do not change the
catalog's default editorial review status.

## Gérondif references

Formation, the three exceptional participles, and meanings follow the
[Universitat Oberta de Catalunya grammar guide](https://aprenentatge.recursos.uoc.edu/continguts/PID_00221043/def39.html).
The shared-subject teaching rule follows
[OQLF's subject guidance](https://vitrinelinguistique.oqlf.gouv.qc.ca/24712/la-syntaxe/constructions-syntaxiques-boiteuses/logique-syntaxique-sujet-sous-entendu-du-participe-present),
which also documents exceptions outside this introductory lesson.
The Académie française paradigms for
[falloir](https://www.dictionnaire-academie.fr/conjuguer/A9F0145) and
[pleuvoir](https://www.dictionnaire-academie.fr/conjuguer/A9P2886) distinguish the
missing present participle of falloir from the existing pleuvant. The app excludes
its weather use of pleuvoir because it does not supply a natural shared personal
subject, not because pleuvant is missing. Duplicate impersonal être/avoir/faire
entries point learners to the personal entries or a full clause.
Context sentences are authored for the app; editorial status remains unreviewed.
