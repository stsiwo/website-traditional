/**
 * global variables
 */
var sizeTablet = 426;
var sizeLaptop = 769;

$(document).ready(function () {
  /**
   * initializer:
   */
  /**
   * aos
   */
  AOS.init();

  /**
   * some cases, aos does not trigger esp when initial loading.
   */
  $(window).on("load", function () {
    AOS.refresh();
  });

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
   * function lists
   */
  function handlHeaderNavClose(event) {
    $("#header-nav").animate({
      left: "100%",
      boxShadow: "none",
    });
  }

  /**
   * close header nav when user resize / change orientation.
   *
   * - be careful esp when resize this is run every time resize so this causes wierd behavior. but usual users never resize the screen so leave it as it is.
   * - if you need to fix this you need to do this: debounce so only run once in a while https://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
   */
  $(window).on("resize orientationchange", handlHeaderNavClose);

  /**
   * outside click handler close header nav on mobile
   */
  $("html").on("click", handlHeaderNavClose);
  $("#header-nav").on("click", function (event) {
    event.stopPropagation();
  });

  /**
   * toggle nav bar on mobile/tablet
   */
  $("#header-nav-icon").on("click", function (event) {
    //$("#header-nav").slideToggle();
    //$("#header-nav").addClass("nav_active");

    // must match with css
    const toggleWidth = 150;

    $("#header-nav").animate({
      left: `-=${toggleWidth}px`,
      boxShadow: "-1px 0px 5px rgba(0, 0, 0, 0.25)",
    });

    event.stopPropagation();
  });

  /**
   * close nav bar on mobile/tablet
   */
  $("#header-close-icon").on("click", handlHeaderNavClose);

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

  /**
   * background fading out feature
   */

  function createBgElement() {
    // check current path
    const currentPath = window.location.pathname;

    console.log("currnet path: " + currentPath);

    // if index.html
    if (
      currentPath == "/" ||
      currentPath == "" ||
      currentPath == "/index.html"
    ) {
      console.log("you are here");
      const bgEle = $('<div class="bg"></div>');
      bgEle.insertAfter($("header"));
    }
  }

  function fadingOutBg(event) {
    const screenHeight = $(window).height();
    const curScrollTop = $(window).scrollTop();
    const curScrollPosRatio = curScrollTop / screenHeight;

    console.log("screen height: " + screenHeight);
    console.log("cur scroll top: " + curScrollTop);
    console.log("cur scroll pos ratio: " + curScrollPosRatio);

    $(".bg").css({
      opacity: 1 - curScrollPosRatio,
    });
  }

  $(window).on("scroll", fadingOutBg);

  // if current scroll position is is not the top and index.html
  fadingOutBg();

  // if index.html, create bg element dynamically. this because html always load first and display the bg element and js try to hide this element so
  // users can see the bg in a instant moment when loading this page.
  //createBgElement();
});
