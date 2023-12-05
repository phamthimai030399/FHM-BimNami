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
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
const swiperSliderLibrary = new Swiper(".slider-library", {
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 5,
      }},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function clickProductImg(smallImg)
  {
      var fullImg = document.getElementById("imageBoxProductImg");
      fullImg.src = smallImg.src;
  }