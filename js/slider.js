const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

const lefBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 1;

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgSlides();
});

lefBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgSlides();
});

setBgSlides();
function setBgSlides() {
  sliderContainer.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}
