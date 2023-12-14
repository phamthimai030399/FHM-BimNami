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

if (play) {
  play.addEventListener("click", () => {
    const thumbnail = document.querySelector(".video-thumbnail");
    if (thumbnail) {
      thumbnail.classList.add("hidden");
    }
    if (video) {
      video.play();
    }
  });
}

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

const quantityForms = document.querySelectorAll('.detail-quantity');

Array.from(quantityForms).forEach((quantityForm) => {
  const increButton = quantityForm.querySelector('.qtyplus');
  const decreButton = quantityForm.querySelector('.qtyminus');
  const inputQuantity = quantityForm.querySelector('.qty');

  increButton.addEventListener('click', () => {
    inputQuantity.value = Number(inputQuantity.value) + 1;
  });

  decreButton.addEventListener('click', () => {
    if (inputQuantity.value > 0) {
      inputQuantity.value = Number(inputQuantity.value) - 1;
    } else {
      inputQuantity.value = 0;
    }
  });
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
