    function shuffleFlashcards(list) {
      const shuffled = [...list];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
      }
      return shuffled;
    }

    function resetGrammarFlashcardDeck(avoidFirstCard = null) {
      grammarFlashcardDeck = shuffleFlashcards(grammarFlashcards);
      if (avoidFirstCard && grammarFlashcardDeck.length > 1 && grammarFlashcardDeck[0] === avoidFirstCard) {
        grammarFlashcardDeck.push(grammarFlashcardDeck.shift());
      }
      currentGrammarFlashcardIndex = 0;
    }

    function getGrammarFlashcardAnswerLines(card) {
      return [
        { label: "Statement", text: card.fr },
        card.negative ? { label: "Negation", text: card.negative } : null,
        card.question ? { label: "Question", text: card.question } : null
      ].filter(Boolean);
    }

    function renderGrammarFlashcardAnswer(card) {
      const lines = getGrammarFlashcardAnswerLines(card);
      grammarFlashcardFrench.replaceChildren();

      if (lines.length <= 1) {
        grammarFlashcardFrench.textContent = card.fr;
        return;
      }

      lines.forEach(line => {
        const row = document.createElement("span");
        row.className = "flashcard-answer-line";

        const label = document.createElement("span");
        label.className = "flashcard-answer-label";
        label.textContent = line.label;

        const sentence = document.createElement("span");
        sentence.className = "flashcard-answer-sentence";
        sentence.textContent = line.text;

        row.append(label, sentence);
        grammarFlashcardFrench.append(row);
      });
    }

    function updateGrammarFlashcard() {
      if (!currentGrammarFlashcard) return;
      grammarFlashcardEnglish.textContent = currentGrammarFlashcard.promptEn || currentGrammarFlashcard.en;
      renderGrammarFlashcardAnswer(currentGrammarFlashcard);
      grammarFlashcardAnswer.hidden = !grammarFlashcardRevealed;
      grammarFlashcardHint.textContent = grammarFlashcardRevealed
        ? "Answer revealed. Click the card again to replay audio."
        : "Click to reveal the French answer.";
      grammarFlashcard.classList.toggle("revealed", grammarFlashcardRevealed);
      grammarFlashcard.setAttribute("aria-expanded", String(grammarFlashcardRevealed));
    }

    function showGrammarFlashcard(index = currentGrammarFlashcardIndex) {
      if (!grammarFlashcards.length) return;
      if (!grammarFlashcardDeck.length) resetGrammarFlashcardDeck();
      currentGrammarFlashcardIndex = (index + grammarFlashcardDeck.length) % grammarFlashcardDeck.length;
      currentGrammarFlashcard = grammarFlashcardDeck[currentGrammarFlashcardIndex];
      grammarFlashcardRevealed = false;
      updateGrammarFlashcard();
    }

    function moveGrammarFlashcard(step) {
      stopPlayback();
      if (!grammarFlashcardDeck.length) resetGrammarFlashcardDeck();
      if (step > 0 && currentGrammarFlashcardIndex >= grammarFlashcardDeck.length - 1) {
        resetGrammarFlashcardDeck(currentGrammarFlashcard);
        showGrammarFlashcard(0);
        return;
      }
      showGrammarFlashcard(currentGrammarFlashcardIndex + step);
    }

    function revealGrammarFlashcard() {
      if (!currentGrammarFlashcard) showGrammarFlashcard();
      grammarFlashcardRevealed = true;
      updateGrammarFlashcard();
      const lines = getGrammarFlashcardAnswerLines(currentGrammarFlashcard);
      speakSequence(lines.map((line, index) => ({
        text: line.text,
        pauseBefore: index ? examplePauseMs : 0
      })), grammarFlashcard);
    }

    function resetPrepositionFlashcardDeck(avoidFirstCard = null) {
      prepositionFlashcardDeck = shuffleFlashcards(prepositionFlashcards);
      if (avoidFirstCard && prepositionFlashcardDeck.length > 1 && prepositionFlashcardDeck[0] === avoidFirstCard) {
        prepositionFlashcardDeck.push(prepositionFlashcardDeck.shift());
      }
      currentPrepositionFlashcardIndex = 0;
    }

    function updatePrepositionFlashcard() {
      if (!currentPrepositionFlashcard) return;
      prepositionFlashcardEnglish.textContent = currentPrepositionFlashcard.en;
      prepositionFlashcardFrench.textContent = currentPrepositionFlashcard.fr;
      prepositionFlashcardContext.textContent = currentPrepositionFlashcard.context;
      prepositionFlashcardAnswer.hidden = !prepositionFlashcardRevealed;
      prepositionFlashcardHint.textContent = prepositionFlashcardRevealed
        ? "Answer revealed. Click the card again to replay audio."
        : "Click to reveal the French answer.";
      prepositionFlashcard.classList.toggle("revealed", prepositionFlashcardRevealed);
      prepositionFlashcard.setAttribute("aria-expanded", String(prepositionFlashcardRevealed));
    }

    function showPrepositionFlashcard(index = currentPrepositionFlashcardIndex) {
      if (!prepositionFlashcards.length) return;
      if (!prepositionFlashcardDeck.length) resetPrepositionFlashcardDeck();
      currentPrepositionFlashcardIndex = (index + prepositionFlashcardDeck.length) % prepositionFlashcardDeck.length;
      currentPrepositionFlashcard = prepositionFlashcardDeck[currentPrepositionFlashcardIndex];
      prepositionFlashcardRevealed = false;
      updatePrepositionFlashcard();
    }

    function movePrepositionFlashcard(step) {
      stopPlayback();
      if (!prepositionFlashcardDeck.length) resetPrepositionFlashcardDeck();
      if (step > 0 && currentPrepositionFlashcardIndex >= prepositionFlashcardDeck.length - 1) {
        resetPrepositionFlashcardDeck(currentPrepositionFlashcard);
        showPrepositionFlashcard(0);
        return;
      }
      showPrepositionFlashcard(currentPrepositionFlashcardIndex + step);
    }

    function revealPrepositionFlashcard() {
      if (!currentPrepositionFlashcard) showPrepositionFlashcard();
      prepositionFlashcardRevealed = true;
      updatePrepositionFlashcard();
      speak(currentPrepositionFlashcard.fr, prepositionFlashcard);
    }
