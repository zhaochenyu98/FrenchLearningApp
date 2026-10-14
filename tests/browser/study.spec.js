const { test, expect } = require("@playwright/test");
const { pathToFileURL } = require("node:url");
const path = require("node:path");

async function selectTopic(page, id) {
  if (await page.locator("#topicPicker").isVisible()) await page.locator("#topicPicker").selectOption(id);
  else await page.locator(`.tab-btn[data-tab="${id}"]`).click();
  await expect(page.locator(`.section.active[data-tab="${id}"]`)).toBeVisible();
}

async function search(page, query) {
  await page.locator("#openGlobalSearch").click();
  await page.locator("#globalSearchInput").fill(query);
}

test.beforeEach(async ({ page }) => {
  page.testErrors = [];
  page.on("pageerror", error => page.testErrors.push(error.message));
  // Deterministic audio: no device voices or spoken output required in CI.
  await page.addInitScript(() => {
    Object.defineProperty(window, "speechSynthesis", { value: {
      getVoices: () => [], cancel() {}, speaking: false,
      speak(utterance) { queueMicrotask(() => utterance.onend?.()); },
      addEventListener() {}, removeEventListener() {}
    } });
  });
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  expect(page.testErrors, "No uncaught application errors").toEqual([]);
  await expect(page.locator(".inline-error-card")).toHaveCount(0);
});

test("initial content is bounded; search creates a deferred destination only once", async ({ page }) => {
  expect(await page.locator("*").count()).toBeLessThan(15000);
  await expect(page.locator("#futur-simple-finir")).toHaveCount(0);
  await search(page, "finir futur");
  await page.locator("#globalSearchInput").press("Enter");
  await expect(page.locator("#futur-simple-finir")).toBeFocused();
  await expect(page.locator("#futur-simple-finir")).toContainText("nous finirons");
  const count = await page.locator("*").count();
  await search(page, "finir futur");
  await page.locator("#globalSearchInput").press("Enter");
  await expect(page.locator("#futur-simple-finir")).toBeFocused();
  expect(await page.locator("*").count()).toBe(count);
  expect(await page.locator("[id]").evaluateAll(elements => {
    const ids = elements.map(element => element.id);
    return ids.filter((id, index) => ids.indexOf(id) !== index);
  })).toEqual([]);
});

test("search handles accents, apostrophes, keyboard navigation, and Escape", async ({ page }) => {
  await page.locator("#openGlobalSearch").press("ControlOrMeta+k");
  await expect(page.locator("#globalSearchInput")).toBeFocused();
  await page.locator("#globalSearchInput").fill("etre");
  await expect(page.locator("#globalSearchResults strong").first()).toContainText("Être");
  await page.locator("#globalSearchInput").fill("s'habiller futur");
  await expect(page.locator("#globalSearchResults strong").first()).toHaveText("s’habiller · Futur simple");
  await page.locator("#globalSearchInput").press("ArrowDown");
  await expect(page.locator("#globalSearchResults button").first()).toBeFocused();
  await page.locator("#globalSearchResults button").first().press("Enter");
  await expect(page.locator("#futur-simple-shabiller")).toBeFocused();
  await search(page, "depuis");
  await page.locator("#globalSearchInput").press("Escape");
  await expect(page.locator("#globalSearchDialog")).not.toBeVisible();
  await expect(page.locator("#openGlobalSearch")).toBeFocused();
});

test("search has no-match feedback and bounded, expandable results", async ({ page }) => {
  await search(page, "zzzz-no-match");
  await expect(page.locator("#globalSearchStatus")).toContainText("No matches");
  await expect(page.locator("#globalSearchResults button")).toHaveCount(0);
  await page.locator("#globalSearchInput").fill("verbs");
  await expect(page.locator("#globalSearchResults button")).toHaveCount(12);
  await page.locator("#globalSearchMore").click();
  await expect(page.locator("#globalSearchResults button")).toHaveCount(24);
  await expect(page.locator("#globalSearchResults button").nth(12)).toBeFocused();
});

test("past-tense search expands its parent and Continue restores the lesson", async ({ page }) => {
  await search(page, "finir passe compose");
  await page.locator("#globalSearchInput").press("Enter");
  await expect(page.locator("#tense-ir-finir")).toBeFocused();
  await expect(page.locator("#tense-ir-study-card")).toHaveAttribute("open", "");
  await page.reload();
  await expect(page.locator("#continueStudy")).toHaveText("Continue studying");
  await page.locator("#continueStudy").click();
  await expect(page.locator("#tense-ir-finir")).toBeFocused();
});

test("flashcards conceal answers, reveal by keyboard, and reset on Next", async ({ page }) => {
  await selectTopic(page, "grammar");
  await expect(page.locator("#grammarFlashcardAnswer")).not.toBeVisible();
  await expect(page.locator("#grammarFlashcard")).toHaveAttribute("aria-expanded", "false");
  await page.locator("#grammarFlashcard").press("Enter");
  await expect(page.locator("#grammarFlashcardAnswer")).toBeVisible();
  await expect(page.locator("#grammarFlashcardFrench")).not.toHaveText("");
  await page.locator("#nextGrammarFlashcard").click();
  await expect(page.locator("#grammarFlashcardAnswer")).not.toBeVisible();
  await expect(page.locator("#grammarFlashcard")).toHaveAttribute("aria-expanded", "false");
});

test("number listening conceals the answer until reveal and clears it on Next", async ({ page }) => {
  await selectTopic(page, "numbers");
  const summary = page.locator("#numbers-practice-study-card > summary");
  if (await summary.count() && !(await page.locator("#numberQuizInput").isVisible())) await summary.click();
  await expect(page.locator("#numberQuizResult")).not.toBeVisible();
  await page.locator("#playNumberQuizAudio").click();
  await expect(page.locator("#numberQuizResult")).not.toBeVisible();
  await page.locator("#revealNumberQuizAnswer").click();
  await expect(page.locator("#numberQuizResult")).toBeVisible();
  await expect(page.locator("#numberQuizAnswerDigits")).toHaveText(/^\d+$/);
  await page.locator("#nextNumberQuiz").click();
  await expect(page.locator("#numberQuizResult")).not.toBeVisible();
  await expect(page.locator("#numberQuizInput")).toHaveValue("");
});

test("topic controls and search fit the viewport", async ({ page }, testInfo) => {
  if (testInfo.project.name === "mobile") {
    await expect(page.locator("#topicPicker")).toBeVisible();
    await expect(page.locator(".section-shell > .tabs")).not.toBeVisible();
    const entry = await page.locator("#continueStudy").boundingBox();
    expect(entry.y).toBeLessThan(200);
    await selectTopic(page, "calendar");
  } else {
    await page.locator(".tab-btn[data-tab=verbs]").press("ArrowRight");
    await expect(page.locator(".tab-btn[data-tab=nouns]")).toBeFocused();
    await expect(page.locator(".section.active[data-tab=nouns]")).toBeVisible();
  }
  await search(page, "agreement");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const dialog = await page.locator("#globalSearchDialog").boundingBox();
  expect(dialog.x).toBeGreaterThanOrEqual(0);
  expect(dialog.x + dialog.width).toBeLessThanOrEqual(page.viewportSize().width);
});

test("direct file opening still supports search and tense navigation", async ({ page }) => {
  await page.goto(pathToFileURL(path.resolve(__dirname, "../../index.html")).href);
  await search(page, "parler imparfait");
  await page.locator("#globalSearchInput").press("Enter");
  await expect(page.locator("#imparfait-parler")).toBeFocused();
  await expect(page.locator("#imparfait-parler")).toContainText("nous parlions");
  await search(page, "aller subjonctif");
  await page.locator("#globalSearchInput").press("Enter");
  await expect(page.locator("#subjonctif-present-aller")).toBeFocused();
  await expect(page.locator("#subjonctif-present-aller")).toContainText("que j’aille");
});

test("subjunctive search opens forms, contextual examples, audio, and restricted impersonal verbs", async ({ page }) => {
  const spoken = [];
  await page.exposeFunction("recordSubjunctiveSpeech", text => spoken.push(text));
  await page.evaluate(() => {
    window.speakSequence = items => window.recordSubjunctiveSpeech(items.map(item => item.text));
  });

  await expect(page.locator("#subjonctif-present-pouvoir")).toHaveCount(0);
  await search(page, "puisse");
  await page.locator("#globalSearchResults button").filter({ hasText: "pouvoir · Subjonctif présent" }).click();
  const card = page.locator("#subjonctif-present-pouvoir");
  await expect(card).toBeFocused();
  await expect(page.locator("#verbModeSubjonctifPresent")).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#subjonctifPresentIndex .verb-index-link")).toHaveCount(138);
  await expect(card).toContainText("que nous puissions");
  await card.locator(".verb-form-btn").filter({ hasText: "que je puisse" }).click();
  await card.locator(".verb-examples-disclosure > summary").click();
  await expect(card).toContainText("Je souhaite que tu puisses venir.");
  await expect(card).toContainText("I hope you can come.");
  await card.locator(".verb-example-btn").first().click();
  await expect.poll(() => spoken).toEqual([["que je puisse"], ["Je souhaite que tu puisses venir."]]);

  await search(page, "pleuvoir subjonctif");
  await page.locator("#globalSearchInput").press("Enter");
  const rain = page.locator("#subjonctif-present-pleuvoir");
  await expect(rain).toBeFocused();
  await expect(rain.locator(".verb-form-btn")).toHaveCount(1);
  await expect(rain.locator(".conjugation-main")).toHaveText("qu’il pleuve");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.reload();
  await page.locator("#continueStudy").click();
  await expect(page.locator("#subjonctif-present-pleuvoir")).toBeFocused();
});

test("subjunctive forms and translations appear on ordinary and pronominal verb cards", async ({ page }) => {
  await search(page, "parler present");
  await page.locator("#globalSearchResults button").filter({ hasText: "parler · Present" }).click();
  const compact = page.locator("#parlerVerbPanel .verb-subjonctif-present-summary");
  await expect(compact.locator(".verb-tense-summary-body")).toHaveCount(0);
  await compact.locator("summary").click();
  await expect(compact.locator(".verb-subjonctif-present-form-btn")).toHaveCount(8);
  await expect(compact).toContainText("que nous parlions");
  await expect(compact).toContainText("Je veux que tu parles français avec moi.");
  await expect(compact).toContainText("I want you to speak French with me.");

  await search(page, "s'habiller pronominal");
  await page.locator("#globalSearchResults button").filter({ hasText: "s’habiller · Pronominal verb" }).click();
  const reflexive = page.locator("#pronominal-verb-shabiller");
  const table = reflexive.locator(".pronominal-tense-section").filter({ hasText: "Subjonctif présent" });
  await expect(table.locator(".pronominal-form-button")).toHaveCount(8);
  await expect(table).toContainText("que je m’habille");
  await expect(table).toContainText("que nous nous habillions");
  const practice = reflexive.locator(".pronominal-examples-row").filter({ hasText: "Subjonctif présent" });
  await expect(practice).toContainText("Il est possible que nous ne nous habillions pas avant le dîner.");
  await expect(practice).toContainText("It is possible that we might not get dressed before dinner.");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("à/de examples are searchable, readable, and playable for ordinary and pronominal verbs", async ({ page }) => {
  const spoken = [];
  await page.exposeFunction("recordPrepositionSpeech", text => spoken.push(text));
  await page.evaluate(() => {
    window.speakSequence = items => window.recordPrepositionSpeech(items.map(item => item.text));
  });

  await search(page, "chercher à");
  await page.locator("#globalSearchResults button").filter({ hasText: "chercher · Present" }).click();
  const ordinary = page.locator('#chercherVerbPanel .verb-preposition-usage');
  await ordinary.locator("summary").click();
  await expect(ordinary).toContainText("Je cherche à comprendre cette règle.");
  await expect(ordinary).toContainText("I am trying to understand this rule.");
  await ordinary.locator(".noun-example-btn").click();
  await expect.poll(() => spoken).toEqual([["Je cherche à comprendre cette règle."]]);

  await search(page, "se passer de");
  await page.locator("#globalSearchResults button").filter({ hasText: "se passer · Pronominal verb" }).click();
  const pronominal = page.locator('#pronominal-verb-sepasser .verb-preposition-usage');
  await pronominal.locator("summary").click();
  await expect(pronominal).toContainText("Je me passe de sucre dans mon café.");
  await expect(pronominal).toContainText("I do without sugar in my coffee.");
  await pronominal.locator(".noun-example-btn").first().click();
  await expect.poll(() => spoken).toEqual([
    ["Je cherche à comprendre cette règle."], ["Je me passe de sucre dans mon café."]
  ]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
