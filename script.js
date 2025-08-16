document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");

  fetch("news.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <img class="news-image" src="${news.image}" alt="Новость">
          <h3 class="news-title">${news.title}</h3>
          <p class="news-date">${news.date}</p>
          <p class="news-desc">${news.desc}</p>
          <a class="news-link" href="${news.link}">Читать далее</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Ошибка загрузки новостей:", error));
});
