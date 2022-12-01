'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

// eslint-disable-next-line no-new, no-undef
new Swiper('.swiper', {
  observer: true,
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
