"use strict";



$(document).ready(function () {
  const slides = $('.slide');
  const slider = $('.slider');
  const btnLeft = $('.slider__btn--left');
  const btnRight = $('.slider__btn--right');
  const dotContainer = $('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
      slides.each(function (i) {
          dotContainer.append(`<button class="dots__dot" data-slide="${i}"></button>`);
      });
  };

  const activeDot = function (slide) {
      $('.dots__dot').removeClass('dots__dot--active');
      $(`.dots__dot[data-slide="${slide}"]`).addClass('dots__dot--active');
  };

  slides.each(function (i) {
      $(this).css('transform', `translateX(${100 * i}%)`);
  });

  const goToSlide = function (slide) {
      slides.each(function (i) {
          $(this).css('transform', `translateX(${100 * (i - slide)}%)`);
      });
  };

  const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
          curSlide = 0;
      } else {
          curSlide++;
      }
      goToSlide(curSlide);
      activeDot(curSlide);
  };

  const previousSlide = function () {
      if (curSlide === 0) {
          curSlide = maxSlide - 1;
      } else {
          curSlide--;
      }
      goToSlide(curSlide);
      activeDot(curSlide);
  };

  const init = function () {
      goToSlide(0);
      createDots();
      activeDot(0);
  };

  init();
  btnRight.on('click', nextSlide);
  btnLeft.on('click', previousSlide);

  $(document).on('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
          previousSlide();
      } else if (e.key === 'ArrowRight') {
          nextSlide();
      }
  });
  dotContainer.on('click', '.dots__dot', function () {
      const slide = $(this).data('slide');
      goToSlide(slide);
      activeDot(slide);
  });
});