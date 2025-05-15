      const scholarships = [
        {
          title: "DAAD Scholarship for Master's Studies in Germany",
          date: "April 15, 2025",
          city: "Berlin",
          level: "Master",
          img: "assets/daad.png"
        },
        {
          title: "Erasmus Mundus Joint Master Degree",
          date: "March 30, 2025",
          city: "Multiple",
          level: "Master",
          img: "assets/erasmus.png"
        },
        {
          title: "Fulbright Foreign Student Program",
          date: "February 20, 2025",
          city: "Washington D.C.",
          level: "Master",
          img: "assets/fulbright.png"
        },
        {
          title: "Chevening Scholarship",
          date: "January 10, 2025",
          city: "London",
          level: "Master",
          img: "assets/chevening.png"
        },
        {
          title: "Nazarbayev University Undergraduate Scholarship",
          date: "May 1, 2025",
          city: "Nur-Sultan",
          level: "Bachelor",
          img: "assets/nazarbayev.png"
        },
        {
          title: "Golden Apples Government Scholarship",
          date: "March 10, 2025",
          city: "Almaty",
          level: "Bachelor",
          img: "assets/golden_apples.png"
        },
        {
          title: "DAAD Undergraduate Scholarship",
          date: "April 1, 2025",
          city: "Frankfurt",
          level: "Bachelor",
          img: "assets/daad.png"
        },
        {
          title: "Global Korea Scholarship (PhD)",
          date: "May 2, 2025",
          city: "Seoul",
          level: "PhD",
          img: "assets/gks.png"
        }
      ];

      const citySelect = document.getElementById('city-select');
      const levelSelect = document.getElementById('level-select');
      const searchBtn   = document.getElementById('search-btn');
      const cardGrid    = document.getElementById('card-grid');
      const resultCount = document.getElementById('result-count');

      function renderCards(list) {
        cardGrid.innerHTML = '';
        if (!list.length) {
          cardGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">No scholarships match your filters.</p>';
        } else {
          list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
              <img src="${item.img}" alt="${item.title}">
              <h4>${item.title}</h4>
              <p class="date">${item.date}</p>
            `;
            cardGrid.appendChild(card);
          });
        }
        resultCount.textContent = list.length;
      }

      searchBtn.addEventListener('click', () => {
        const city  = citySelect.value;
        const level = levelSelect.value;
        const filtered = scholarships.filter(s =>
          (!city  || s.city  === city) &&
          (!level || s.level === level)
        );
        renderCards(filtered);
      });

      // initial load
      renderCards(scholarships);