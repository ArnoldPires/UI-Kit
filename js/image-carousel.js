var btns = document.querySelectorAll(".slideBtn");
var backBtn = document.querySelector(".backBtn");
var fwdBtn = document.querySelector(".fwdBtn");
var slides = document.querySelectorAll(".slide");

var activeSlide = 0;
function advanceSlides(count) {
  if (!count) {
    count = 1;
  }
  activeSlide = activeSlide + count;
  if (activeSlide == slides.length) {
    activeSlide = 0;
  }
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  showSlide(activeSlide);
}

function showSlide(slideIndex) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    btns[i].classList.remove("active");
  }
  btns[slideIndex].classList.add("active");
  slides[slideIndex].classList.add("active");

}

var handleClick = function(evt) {
  var slideNumber = evt.target.getAttribute("data-slide-target");
  var slideIndex = slideNumber - 1;
  //if this is the first click stop the auto slide
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  showSlide(slideIndex);
  return false;
};

var fwdClick = function(evt) {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  advanceSlides();
};

var backClick = function(evt) {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  advanceSlides(-1);
};

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

backBtn.addEventListener("click", backClick);
fwdBtn.addEventListener("click", fwdClick);

//start slider
var intervalId = window.setInterval(advanceSlides, 3000);
