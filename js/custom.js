/*global jQuery:false */
var sitebasepath = "js/";

includejs = function (url) {
  document.write('<script src="' + url + '"></script>');
};

// includejs(sitebasepath+"jquery.min.js");
includejs(sitebasepath + "bootstrap.bundle.min.js");
includejs(sitebasepath + "slick.js");

addAllListeners = function () {};



$(document).ready(function () {
  $("#slickHero").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 1000,
    fade: true,
    adaptiveHeight: true,
    cssEase: "linear",
  });
  $(".socks-slider").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 7000,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

wow = new WOW({
	boxClass: "wow", // default
	animateClass: "animated", // default
	offset: 0, // default
	mobile: true, // default
  });
  wow.init()

  $(function() {
    var header = $("header");
    var toplink = $(".sub-top-links");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("fixed-header");
            toplink.addClass("d-none");
        } else {
            header.removeClass("fixed-header");
            toplink.removeClass("d-none");
        }
    });
  
});
