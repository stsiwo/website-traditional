/**
 * global variables
 */
var sizeTablet = 426;
var sizeLaptop = 769;

/**
 * plugin initializations
 */
// swiperjs (services)
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    956: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toArticleSectionSwiper = new Swiper(".to-article-section__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    956: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".to-article-section-swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  /**
   * reset nav's display: none to display: block when large screen
   */
  $(window).on("resize", function () {
    console.log($(window).width());
    let currentScreenWidth = $(window).width();
    let targetNavDisplay = $("#header-nav").css("display");
    if (currentScreenWidth > sizeLaptop && targetNavDisplay == "none") {
      $("#header-nav").css("display", "block");
    }

    if (currentScreenWidth < sizeLaptop && targetNavDisplay == "block") {
      $("#header-nav").css("display", "none");
    }
  });

  /**
   * fix the height of swiperjs esp when use the swiper element inside another element.
   *
   * see: https://github.com/nolimits4web/swiper/issues/48
   */
  //$(window).on("resize", function () {
  //  var height = $(window).height();
  //  var width = $(window).width();
  //  $(".swiper-container, .swiper-slide").height(height);
  //  $(".swiper-container, .swiper-slide").width(width);
  //});
  //$(window).trigger("resize");

  /**
   * toggle nav bar on mobile/tablet
   */
  $("#header-nav-icon").on("click", function () {
    $("#header-nav").slideToggle();
  });

  /**
   * close nav bar on mobile/tablet
   */
  $("#header-close-icon").on("click", function () {
    $("#header-nav").slideUp();
  });

  /**
   * toggle sub nav on mobile/tablet
   */

  // services
  $("#services-nav-item").on("mouseenter", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      $("#services-sub-nav-item").slideToggle();
    }
  });

  $("#services-nav-item").on("mouseleave", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      $("#services-sub-nav-item").slideToggle();
    }
  });

  // careers
  $("#careers-nav-item").on("mouseenter", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      $("#careers-sub-nav-item").slideToggle();
    }
  });

  $("#careers-nav-item").on("mouseleave", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      $("#careers-sub-nav-item").slideToggle();
    }
  });
});
