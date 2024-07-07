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
