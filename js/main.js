/**
 * global variables
 */
var sizeTablet = 426;
var sizeLaptop = 769;

/**
 * plugin initializations
 */
// swiperjs (services)
//const swiper = new Swiper(".swiper", {
//  slidesPerView: 1,
//  spaceBetween: 10,
//  breakpoints: {
//    425: {
//      slidesPerView: 1,
//      spaceBetween: 10,
//    },
//    956: {
//      slidesPerView: 2,
//      spaceBetween: 10,
//    },
//  },
//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true,
//  },
//});

/**
 * when add multiple swipers, the second one does not work. esp the width overflow
 */

//const swiper2 = new Swiper(".swiper-2", {
//  // Optional parameters
//  // If we need pagination
//  pagination: {
//    el: ".swiper-pagination",
//  },
//
//  // Navigation arrows
//  navigation: {
//    nextEl: ".swiper-button-next",
//    prevEl: ".swiper-button-prev",
//  },
//
//  // And if we need scrollbar
//  scrollbar: {
//    el: ".swiper-scrollbar",
//  },
//});
//
//const toArticleSectionSwiper = new Swiper(".to-article-section__swiper", {
//  slidesPerView: 1,
//  spaceBetween: 10,
//  breakpoints: {
//    425: {
//      slidesPerView: 1,
//      spaceBetween: 10,
//    },
//    956: {
//      slidesPerView: 3,
//      spaceBetween: 10,
//    },
//  },
//  pagination: {
//    el: ".to-article-section-swiper-pagination",
//    clickable: true,
//  },
//});

$(document).ready(function () {
  /**
   * initializer:
   */

  /**
   * service list at service page
   */
  $(".service-list__slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    //centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1417,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 973,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /**
   * article list at to-artist section
   */
  // to-article-secstion__slick
  $(".to-article-secstion__slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    //centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1227,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /**
   * team member slick at our-team-section
   */
  $(".our-team-section__slick").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1227,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 916,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /**
   * careers carousel
   */
  $(".carousel-section__slick").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    //variableWidth: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  });

  /**
   * reset nav's display: none to display: block when large screen
   */
  $(window).on("resize", function () {
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
  $(".nav__item").on("mouseenter", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      const subItemEl = $(this).find(".nav__sub-nav");
      subItemEl.fadeIn();
    }
  });

  $(".nav__item").on("mouseleave", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeLaptop) {
      const subItemEl = $(this).find(".nav__sub-nav");
      subItemEl.fadeOut();
    }
  });

  /**
   * add border line on target text-input div when the child input is focused.
   */
  $(".form__text-input > input, .form__text-input > textarea").on(
    "focus",
    function () {
      console.log("focused");
      const parentEl = $(this).parent();
      parentEl.addClass("form__text-input_focus");
    }
  );

  $(".form__text-input > input, .form__text-input > textarea").on(
    "blur",
    function () {
      const parentEl = $(this).parent();
      parentEl.removeClass("form__text-input_focus");
    }
  );

  /**
   * slidetoggle at career-card desc when hover
   */
  $(".card-v2").on("mouseenter", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeTablet) {
      const targetDescEl = $(this).find(".card-v2__desc-box");
      //targetDescEl.removeClass("card-v2__desc-box-hidden");
      targetDescEl.slideToggle();
    }
  });
  $(".card-v2").on("mouseleave", function () {
    let currentScreenWidth = $(window).width();
    if (currentScreenWidth > sizeTablet) {
      const targetDescEl = $(this).find(".card-v2__desc-box");
      //targetDescEl.addClass("card-v2__desc-box-hidden");
      targetDescEl.slideToggle();
    }
  });

  /**
   * header animation
   * ref: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
   */
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();

  $(window).on("scroll", function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    console.log("called hasScrolled");
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    console.log("math.abs");

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      console.log("scroll down");
      // Scroll Down
      $("header").addClass("header__nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        console.log("scroll up");
        $("header").removeClass("header__nav-up");
      }
    }

    lastScrollTop = st;
  }
});
