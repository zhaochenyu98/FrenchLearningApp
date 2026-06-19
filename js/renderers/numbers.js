    function renderNumberCards(container, list, emptyMessage) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }
      list.forEach(item => {
        const button = document.createElement("button");
        button.className = "card";
        button.type = "button";
        button.innerHTML = `
          <div class="num">${item.number}</div>
          <div class="word">${item.word}</div>
          <div class="number-ipa">${item.ipa}</div>
        `;
        button.addEventListener("click", () => speak(item.speech || item.word, button));
        container.appendChild(button);
      });
    }

    function renderAgeYears(list = ageYearItems) {
      renderNumberCards(ageYearsGrid, list, "No age phrases available.");
    }

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getSilentCompoundPronunciationHint(n) {
      const thousands = Math.floor(n / 1000);
      const hundreds = Math.floor((n % 1000) / 100);
      if (thousands === 6) return "Pronunciation trap: x in six is silent before mille.";
      if (thousands === 8) return "Pronunciation trap: t in huit is usually silent before mille.";
      if (hundreds === 6) return "Pronunciation trap: x in six is silent before cent.";
      if (hundreds === 8) return "Pronunciation trap: t in huit is usually silent before cent.";
      return "";
    }

    function getNumberRuleHint(n) {
      const pronunciationHint = getSilentCompoundPronunciationHint(n);
      if (pronunciationHint) return pronunciationHint;
      if (n >= 1000) {
        if (n === 1000) return "1000 is mille, not un mille.";
        if (n % 1000 === 0) return "mille never takes a final s.";
        return "Read thousands first, then the remaining number.";
      }
      if (n >= 100) {
        if (n === 100) return "100 is cent.";
        if (n % 100 === 0) return "Exact plural hundreds take cents with final s.";
        return "cent loses final s when another number follows.";
      }
      if (n >= 70 && n <= 79) return "70s use the 60 + teen pattern.";
      if (n === 80) return "80 is quatre-vingts with final s.";
      if (n >= 81 && n <= 99) return "80 loses s when another number follows; 90s use quatre-vingt + teen.";
      if (n % 10 === 1 && n > 20 && n < 70) return "Most 21/31/41/51/61 forms use et un.";
      return "Read the number normally.";
    }

    function updateNumberFlashcard() {
      if (!currentNumberFlashcard) return;
      numberFlashcardDigits.textContent = String(currentNumberFlashcard.number);
      numberFlashcardHint.hidden = numberFlashcardRevealed;
      numberFlashcardAnswer.hidden = !numberFlashcardRevealed;
      numberFlashcardFrench.textContent = currentNumberFlashcard.word;
      numberFlashcardIpa.textContent = currentNumberFlashcard.ipa || "";
      numberFlashcardIpa.hidden = !currentNumberFlashcard.ipa;
      numberFlashcardRule.textContent = currentNumberFlashcard.rule;
      numberFlashcard.classList.toggle("revealed", numberFlashcardRevealed);
      numberFlashcard.setAttribute("aria-expanded", String(numberFlashcardRevealed));
    }

    function showNumberFlashcard(number = randomInt(1, 9999)) {
      currentNumberFlashcard = {
        number,
        word: frenchNumber(number),
        ipa: frenchNumberIpa(number),
        rule: getNumberRuleHint(number)
      };
      numberFlashcardRevealed = false;
      updateNumberFlashcard();
    }

    function revealNumberFlashcard() {
      if (!currentNumberFlashcard) showNumberFlashcard();
      if (!numberFlashcardRevealed) {
        numberFlashcardRevealed = true;
        updateNumberFlashcard();
      }
      speak(currentNumberFlashcard.word, numberFlashcard);
    }

    function normalizeNumberQuizAnswer(value) {
      return value.replace(/\D/g, "");
    }

    function updateNumberQuiz() {
      if (!currentNumberQuiz) return;
      const shouldShowResult = numberQuizChecked || numberQuizRevealed;
      const shouldShowAnswer = numberQuizRevealed;
      numberQuizPrompt.textContent = numberQuizRevealed
        ? "Answer revealed. Try another number when you’re ready."
        : numberQuizChecked
          ? "Checked. Use Reveal answer only if you want to compare."
          : "Listen, then type the 4-digit number you hear.";
      numberQuizResult.hidden = !shouldShowResult;
      [numberQuizAnswerDigits.parentElement, numberQuizAnswerFrench.parentElement].forEach(row => {
        if (row) row.hidden = !shouldShowAnswer;
      });
      numberQuizAnswerDigits.textContent = shouldShowAnswer ? String(currentNumberQuiz.number) : "";
      numberQuizAnswerFrench.textContent = shouldShowAnswer ? currentNumberQuiz.word : "";
      numberQuizAnswerIpa.textContent = shouldShowAnswer ? currentNumberQuiz.ipa || "" : "";
      numberQuizAnswerIpa.hidden = !shouldShowAnswer || !currentNumberQuiz.ipa;
      numberQuizCard.classList.toggle("correct", numberQuizChecked && Boolean(currentNumberQuiz.isCorrect));
      numberQuizCard.classList.toggle("incorrect", numberQuizChecked && !currentNumberQuiz.isCorrect);
    }

    function showNumberQuiz(number = randomInt(1000, 9999), shouldPlay = false) {
      currentNumberQuiz = {
        number,
        word: frenchNumber(number),
        ipa: frenchNumberIpa(number),
        isCorrect: false
      };
      numberQuizChecked = false;
      numberQuizRevealed = false;
      numberQuizInput.value = "";
      numberQuizFeedback.textContent = "";
      updateNumberQuiz();
      if (shouldPlay) playNumberQuizAudio();
    }

    function playNumberQuizAudio() {
      if (!currentNumberQuiz) showNumberQuiz();
      speak(currentNumberQuiz.word, numberQuizCard);
    }

    function checkNumberQuizAnswer() {
      if (!currentNumberQuiz) showNumberQuiz();
      const submittedAnswer = normalizeNumberQuizAnswer(numberQuizInput.value);
      if (!submittedAnswer) {
        numberQuizPrompt.textContent = "Type the number you hear first, then check your answer.";
        numberQuizInput.focus();
        return;
      }
      const correctAnswer = String(currentNumberQuiz.number);
      numberQuizChecked = true;
      currentNumberQuiz.isCorrect = submittedAnswer === correctAnswer;
      numberQuizFeedback.textContent = currentNumberQuiz.isCorrect
        ? "Correct. Nice ear."
        : "Not quite. Try replaying it, or reveal the answer when you’re ready.";
      updateNumberQuiz();
    }

    function revealNumberQuizAnswer() {
      if (!currentNumberQuiz) showNumberQuiz();
      numberQuizRevealed = true;
      if (!numberQuizFeedback.textContent) {
        numberQuizFeedback.textContent = "Answer revealed.";
      }
      updateNumberQuiz();
    }

    function randomYearQuizValue() {
      const anchorYears = yearLearningItems.map(item => item.number);
      if (Math.random() < 0.35) {
        return anchorYears[randomInt(0, anchorYears.length - 1)];
      }
      return randomInt(1789, 2035);
    }

    function formatYearQuizFrench(year) {
      return `en ${frenchNumber(year)}`;
    }

    function formatYearQuizIpa(year) {
      const numberIpa = stripIpaSlashes(frenchNumberIpa(year));
      return numberIpa ? `/ɑ̃ ${numberIpa}/` : "";
    }

    function updateYearQuiz() {
      if (!currentYearQuiz) return;
      const shouldShowResult = yearQuizChecked || yearQuizRevealed;
      const shouldShowAnswer = yearQuizRevealed;
      yearQuizPrompt.textContent = yearQuizRevealed
        ? "Answer revealed. Try another year when you’re ready."
        : yearQuizChecked
          ? "Checked. Use Reveal answer only if you want to compare."
          : "Listen, then type the year you hear.";
      yearQuizResult.hidden = !shouldShowResult;
      [yearQuizAnswerDigits.parentElement, yearQuizAnswerFrench.parentElement].forEach(row => {
        if (row) row.hidden = !shouldShowAnswer;
      });
      yearQuizAnswerDigits.textContent = shouldShowAnswer ? String(currentYearQuiz.year) : "";
      yearQuizAnswerFrench.textContent = shouldShowAnswer ? currentYearQuiz.word : "";
      yearQuizAnswerIpa.textContent = shouldShowAnswer ? currentYearQuiz.ipa || "" : "";
      yearQuizAnswerIpa.hidden = !shouldShowAnswer || !currentYearQuiz.ipa;
      yearQuizCard.classList.toggle("correct", yearQuizChecked && Boolean(currentYearQuiz.isCorrect));
      yearQuizCard.classList.toggle("incorrect", yearQuizChecked && !currentYearQuiz.isCorrect);
    }

    function showYearQuiz(year = randomYearQuizValue(), shouldPlay = false) {
      currentYearQuiz = {
        year,
        word: formatYearQuizFrench(year),
        ipa: formatYearQuizIpa(year),
        isCorrect: false
      };
      yearQuizChecked = false;
      yearQuizRevealed = false;
      yearQuizInput.value = "";
      yearQuizFeedback.textContent = "";
      updateYearQuiz();
      if (shouldPlay) playYearQuizAudio();
    }

    function playYearQuizAudio() {
      if (!currentYearQuiz) showYearQuiz();
      speak(currentYearQuiz.word, yearQuizCard);
    }

    function checkYearQuizAnswer() {
      if (!currentYearQuiz) showYearQuiz();
      const submittedAnswer = normalizeNumberQuizAnswer(yearQuizInput.value);
      if (!submittedAnswer) {
        yearQuizPrompt.textContent = "Type the year you hear first, then check your answer.";
        yearQuizInput.focus();
        return;
      }
      const correctAnswer = String(currentYearQuiz.year);
      yearQuizChecked = true;
      currentYearQuiz.isCorrect = submittedAnswer === correctAnswer;
      yearQuizFeedback.textContent = currentYearQuiz.isCorrect
        ? "Correct. That year landed."
        : "Not quite. Replay it, or reveal the answer when you’re ready.";
      updateYearQuiz();
    }

    function revealYearQuizAnswer() {
      if (!currentYearQuiz) showYearQuiz();
      yearQuizRevealed = true;
      if (!yearQuizFeedback.textContent) {
        yearQuizFeedback.textContent = "Answer revealed.";
      }
      updateYearQuiz();
    }

    function renderNumbers(list = numberItems) {
      renderNumberCards(grid, list, "No numbers available.");
      renderNumberCards(
        tensGrid,
        list.filter(item => tensNumberSet.has(item.number)),
        "No tens available."
      );
      renderNumberCards(
        trickyNumbersGrid,
        list.filter(item => trickyNumberSet.has(item.number)),
        "No tricky numbers available."
      );
    }

    function renderNumberLearningCards(container, list, emptyMessage) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
        return;
      }
      list.forEach(item => {
        const ipa = item.ipa || (typeof item.number === "number" ? frenchNumberIpa(item.number) : "");
        const button = document.createElement("button");
        button.className = "example-card number-learning-card";
        button.type = "button";
        button.innerHTML = `
          <div class="num">${item.number}</div>
          <div class="word">${item.word}</div>
          ${ipa ? `<div class="number-ipa">${ipa}</div>` : ""}
          <div class="grammar-note">${item.note}</div>
          ${item.example ? `<div class="translation"><strong>Example:</strong> ${item.example}</div>` : ""}
        `;
        button.addEventListener("click", () => {
          speakSequence(getNumberLearningAudioItems([item]), button);
        });
        container.appendChild(button);
      });
    }

    function getNumberLearningAudioItems(list) {
      return list.flatMap(item => ([
        { text: item.speech || item.word },
        ...(item.example ? [{ text: item.example, pauseBefore: examplePauseMs }] : [])
      ]));
    }

    function renderLargeNumberSections() {
      renderNumberLearningCards(hundredsLearningGrid, hundredsLearningItems, "No 100–999 examples available.");
      renderNumberLearningCards(thousandsLearningGrid, thousandsLearningItems, "No 1000–9999 examples available.");
      renderNumberLearningCards(yearLearningGrid, yearLearningItems, "No year examples available.");
    }

    function renderTimeSections() {
      renderNumberLearningCards(timeHoursGrid, timeHourItems, "No time/hour examples available.");
      renderNumberLearningCards(timeExpressionsGrid, timeExpressionItems, "No time expression examples available.");
    }

    function renderOrdinalNumbers() {
      renderNumberLearningCards(ordinalNumbersGrid, ordinalNumberItems, "No ordinal number examples available.");
    }

    function renderOperators(list = calculationOperators) {
      operatorGrid.innerHTML = "";
      if (!list.length) {
        operatorGrid.innerHTML = `<div class="empty-state">No operators available.</div>`;
        return;
      }
      list.forEach(item => {
        const button = document.createElement("button");
        button.className = "example-card";
        button.type = "button";
        button.innerHTML = `
          <div class="french-line">${item.fr}</div>
          <div class="translation">${item.en}</div>
          <div class="grammar-note">${item.note}</div>
          <div class="translation"><strong>Example:</strong> ${item.example}</div>
          <div class="translation">${item.exampleEn}</div>
        `;
        button.addEventListener("click", () => speakWithPause(item.speech || item.fr, item.example, button));
        operatorGrid.appendChild(button);
      });
    }
