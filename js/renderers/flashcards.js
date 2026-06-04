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

    function updateGrammarFlashcard() {
      if (!currentGrammarFlashcard) return;
      grammarFlashcardEnglish.textContent = currentGrammarFlashcard.en;
      grammarFlashcardFrench.textContent = currentGrammarFlashcard.fr;
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
      speak(currentGrammarFlashcard.fr, grammarFlashcard);
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

