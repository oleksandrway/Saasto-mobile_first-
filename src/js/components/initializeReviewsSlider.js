import Swiper, { Autoplay, Keyboard, Pagination } from 'swiper'
import 'swiper/css'

function initializeReviewsSlider() {
  const swiper = new Swiper('.swiper', {
    modules: [Autoplay, Keyboard, Pagination],
    loop: true,
    keyboard: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      540: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 30,

      },
      1024: {
        spaceBetween: 50,

      },
    },

  })
}

export { initializeReviewsSlider }
