$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("body").addClass('down');
    } else {
      $("body").removeClass('down');
    }
  });

  $(".search-icon").click(function (event) {
    event.preventDefault();
    $("#searchbox-holder").addClass("show-searchbox-holder");
    $(".search-input").focus();
  });

  $(".search-close").click(function (event) {
    event.preventDefault();
    $("#searchbox-holder").removeClass("show-searchbox-holder");
    $(".search-input").blur();
  });

  $(".search-input").focus(function () {
    $(".search-suggestions").fadeIn("slow");
  });

  $(".search-input").blur(function () {
    $(".search-suggestions").fadeOut("slow");
  });

  $("#sidebar-toggle").click(function () {
    $("#sidenav").toggleClass("show-sidenav");
  });
  $("#sidenav-overlay").click(function (event) {
    event.preventDefault();
    $("#sidenav").removeClass("show-sidenav");
  });

  $('.cat-list .collapse').on('shown.bs.collapse', function () {
    $(this).parent().find(".icofont-plus").removeClass("icofont-plus").addClass("icofont-minus");
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find(".icofont-minus").removeClass("icofont-minus").addClass("icofont-plus");
  });

  $(".filter-option").click(function () {
    $(".collection-filter").addClass("show-collection-filter");
    $("body").addClass("scroll-off");
  });
  $(".filters-overlay,.filter-close").click(function () {
    $(".collection-filter").removeClass("show-collection-filter");
    $("body").removeClass("scroll-off");
  });

  // Home Brands slider

  $('.home-brands-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    speed: 700,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  });

  // Collection Slider/Slick
  let collectionSlider = $('.collection-slider');

  $('.prev').click(function () {
    collectionSlider.slick('slickPrev');
    return false;
  });

  $('.next').click(function () {
    collectionSlider.slick('slickNext');
    return false;
  });

  collectionSlider.slick({
    arrows: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 800,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  // Related Products slider

  $('.related-product-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 701,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $('data-fancybox').fancybox();

});
