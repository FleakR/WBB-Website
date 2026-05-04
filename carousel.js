const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  images[index].classList.remove("active");

  index = (i + images.length) % images.length;

  images[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});