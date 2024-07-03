// Слайдер для головної сторінки
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.setAttribute("aria-hidden", i !== index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Зміна слайду кожні 3 секунди




// Код для обробки пошуку

document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.getElementById("searchForm");
  var searchInput = document.getElementById("searchInput");
  var searchButton = document.getElementById("searchButton");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var query = searchInput.value.toLowerCase();
    if (query.length >= 3) {
      localStorage.setItem("searchQuery", query);
      window.location.href = "search_results.html";
    } else {
      alert("Будь ласка, введіть мінімум 3 символи для пошуку.");
    }
  });

  if (window.location.pathname.endsWith("search_results.html")) {
    var query = localStorage.getItem("searchQuery");
    if (query) {
      searchInput.value = query;
      performSearch(query);
    }

    searchInput.addEventListener("input", function () {
      if (searchInput.value.length >= 3) {
        searchButton.disabled = false;
      } else {
        searchButton.disabled = true;
      }
    });

    document
      .getElementById("backToList")
      .addEventListener("click", function () {
        window.location.href = "research.html";
      });
  }
});

function performSearch(query) {
  var articles = [
    {
      title: "Дослідження у галузі машинного навчання",
      description:
        "Наші дослідження спрямовані на розвиток нових алгоритмів машинного навчання.",
      author: "Дмитро Іваненко",
      category: "Машинне навчання",
    },
    {
      title: "Розробка штучного інтелекту",
      description:
        "Ми працюємо над створенням інтелектуальних систем, які можуть аналізувати та обробляти великі обсяги даних.",
      author: "Ольга Петрова",
      category: "Штучний інтелект",
    },
    // Додайте більше статей тут
  ];

  var results = articles.filter(function (article) {
    var title = article.title.toLowerCase();
    var description = article.description.toLowerCase();
    var category = article.category.toLowerCase();

    return (
      title.includes(query) ||
      description.includes(query) ||
      category.includes(query)
    );
  });

  displayResults(results);
}

function displayResults(results) {
  var resultsList = document.querySelector(".results-list");
  var resultCount = document.getElementById("resultCount");
  var loadMoreButton = document.getElementById("loadMore");

  resultsList.innerHTML = "";
  resultCount.textContent = "Знайдено результатів: " + results.length;

  results.forEach(function (result, index) {
    if (index < 6) {
      var articleElement = document.createElement("article");
      articleElement.classList.add("card", "mb-4");
      articleElement.innerHTML = `
                <div class="card-body">
                    <h4 class="card-title">${result.title}</h4>
                    <p class="card-text">${result.description}</p>
                    <p class="card-author"><strong>Автор:</strong> ${result.author}</p>
                    <button class="btn btn-primary">Читати далі</button>
                </div>
            `;
      resultsList.appendChild(articleElement);
    }
  });

  if (results.length > 6) {
    loadMoreButton.style.display = "block";
    loadMoreButton.addEventListener("click", function () {
      var currentCount = document.querySelectorAll(
        ".results-list .card"
      ).length;
      for (
        var i = currentCount;
        i < currentCount + 6 && i < results.length;
        i++
      ) {
        var articleElement = document.createElement("article");
        articleElement.classList.add("card", "mb-4");
        articleElement.innerHTML = `
                    <div class="card-body">
                        <h4 class="card-title">${results[i].title}</h4>
                        <p class="card-text">${results[i].description}</p>
                        <p class="card-author"><strong>Автор:</strong> ${results[i].author}</p>
                        <button class="btn btn-primary">Читати далі</button>
                    </div>
                `;
        resultsList.appendChild(articleElement);
      }
      if (
        document.querySelectorAll(".results-list .card").length >=
        results.length
      ) {
        loadMoreButton.style.display = "none";
      }
    });
  }
}








// Валідація форми контактів
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    formFeedback.innerHTML =
      "<p>Дякуємо за ваше повідомлення, ми зв'яжемося з вами найближчим часом.</p>";
    formFeedback.style.color = "green";
    contactForm.reset();
  } else {
    formFeedback.innerHTML = "<p>Будь ласка, заповніть всі поля.</p>";
    formFeedback.style.color = "red";
  }
});
