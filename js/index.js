var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 10,
  mobile: true,
  live: true,
  callback: function (box) {},
  scrollContainer: null,
});
wow.init();

const swiperSlider = new Swiper(".slider-container", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const play = document.querySelector(".video-play");
const video = document.querySelector("video");
play.addEventListener("click", () => {
  document.querySelector(".video-thumbnail").classList.add("hidden");
  video.play();
});

// const swiperSliderFeedback = new Swiper(".feedback-slider", {
//   direction: "horizontal",
//   loop: true,
//   speed: 1000,
//   slidesPerView: 1,
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 25,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//   },
//   navigation: {
//     nextEl: ".feedback-home .swiper-button-next",
//     prevEl: ".feedback-home .swiper-button-prev",
//   },
// });
const swiperSliderFeedback = new Swiper(".feedback-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 800,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".feedback-home .swiper-button-next",
    prevEl: ".feedback-home .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

function clickProductImg(smallImg) {
  var fullImg = document.getElementById("imageBoxProductImg");
  fullImg.src = smallImg.src;
}
