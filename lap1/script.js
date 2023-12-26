const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach(
  (slide,index) => {
    slide.style.left = `${index * 100}%`;
  }
)

const goPrev = function() {
  counter++;
  slideimage();
}

const goNext = function() {
  counter--;
  slideimage();
}

const slideimage = function () {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(${counter * 100}%)`
    }
  )
}