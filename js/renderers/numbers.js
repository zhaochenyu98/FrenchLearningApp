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

