window.addEventListener('load',function() {
  // Swipper slide side-bar

var swiper = new Swiper(".swiper", {
pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
},
autoplay: {
    delay:3000
},
loop:true
});

// Swipper slide side-bar

var saleSwiper = new Swiper(".sale-sec.mySwiper", {
  pagination: {
    el: ".sale-sec .sale-pagination", 
  },
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween:15
    },
    1200: {
      slidesPerView: 4,
      spaceBetween:30
    },
    700: {
      slidesPerView: 3,
      spaceBetween:15
    },
    0: {
      slidesPerView:2,
      spaceBetween:10
    }
  },
  loop:true,
});

// other product swiper 

var otherProducts = new Swiper(".product-swip.mySwiper", {
  pagination: {
    el: ".product-swip-pagination",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
    breakpoints: {
    1500: {
      slidesPerView: 4,
      spaceBetween:15
    },
    1200: {
      slidesPerView: 3,
      spaceBetween:30
    },
    900: {
      slidesPerView: 2,
      spaceBetween:15
    },
    200: {
      slidesPerView: 3,
      spaceBetween:15
    },
    0: {
      slidesPerView:2,
      spaceBetween:10
    }
  },
  loop:true,
});
})