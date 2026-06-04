    function renderCalendarCards(container, list, emptyMessage) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
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
        container.appendChild(button);
      });
    }

    function renderDeterminerCards(container, list) {
      container.innerHTML = "";
      if (!list.length) {
        container.innerHTML = `<div class="empty-state">No matches in this category.</div>`;
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
        container.appendChild(button);
      });
    }

    function renderArticleComparison(rows = articleComparisonRows) {
      articleComparisonGrid.innerHTML = "";
      if (!rows.length) {
        articleComparisonGrid.innerHTML = `<div class="empty-state">No article pairs available.</div>`;
        return;
      }

      articleComparisonGrid.innerHTML = `
        <div class="article-comparison-header">Definite: the</div>
        <div class="article-comparison-header">Indefinite: a / an / some</div>
      `;

      rows.forEach(row => {
        [row.definite, row.indefinite].forEach(item => {
          const button = document.createElement("button");
          button.className = "example-card article-comparison-cell";
          button.type = "button";
          button.innerHTML = `
            <div class="matrix-label">${row.label}</div>
            <div class="french-line">${item.fr}</div>
            <div class="translation">${item.en}</div>
            <div class="grammar-note">${item.note}</div>
            <div class="translation"><strong>Example:</strong> ${item.example}</div>
            <div class="translation">${item.exampleEn}</div>
          `;
          button.addEventListener("click", () => speakWithPause(item.speech || item.fr, item.example, button));
          articleComparisonGrid.appendChild(button);
        });
      });
    }

    function renderPossessives(list = possessiveRows) {
      possessiveGrid.innerHTML = "";
      if (!list.length) {
        possessiveGrid.innerHTML = `<div class="empty-state">No possessive determiners available.</div>`;
        return;
      }

      list.forEach(row => {
        const rowEl = document.createElement("div");
        rowEl.className = "poss-row";

        const ownerEl = document.createElement("div");
        ownerEl.className = "poss-owner";
        ownerEl.innerHTML = `
          <strong>${row.owner}</strong>
          <div class="matrix-label">${row.note}</div>
        `;
        rowEl.appendChild(ownerEl);

        row.forms.forEach(form => {
          const button = document.createElement("button");
          button.className = "poss-cell-btn";
          button.type = "button";
          button.innerHTML = `
            <span class="matrix-label">${form.label}</span>
            <span class="poss-form">${form.form}</span>
            <span class="poss-example">${form.example}</span>
            <span class="poss-example">${form.exampleEn}</span>
          `;
          button.addEventListener("click", () => speakWithPause(form.form, form.example, button));
          rowEl.appendChild(button);
        });

        possessiveGrid.appendChild(rowEl);
      });
    }

    function renderPossessiveExceptions(list = possessiveExceptions) {
      renderDeterminerCards(possessiveExceptionGrid, list);
    }

