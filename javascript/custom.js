var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 15,
         // Responsive breakpoints
         breakpoints: {
          // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40
  }
      
      }
  });

  var swiper = new Swiper(".titanSwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40
  }
      
      }
  });