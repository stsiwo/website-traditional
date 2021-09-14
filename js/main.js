/**
 * global variables
 */
var sizeTablet = 426;
var sizeLaptop = 769;

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
