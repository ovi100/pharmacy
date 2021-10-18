$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("body").addClass('down');
      $(".floating-mheader").removeClass('slideUp');
      $(".floating-mheader").addClass('slideDown');
    } else {
      $("body").removeClass('down');
      $(".floating-mheader").addClass('slideUp');
      $(".floating-mheader").removeClass('slideDown');
    }
  });

  $(".mSearchBox").click(function (event) {
    event.preventDefault();
    $("body").addClass('scroll-off');
    $(".mSearch-option").fadeIn("slow");
  });

  $(".mSearch-close").click(function (event) {
    event.preventDefault();
    $("body").removeClass('scroll-off');
    $(".mSearch-option").fadeOut("slow");
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

  if ($(window).width() < 1024) {
    $('.home-mobile-slider').slick({
      arrows: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });

    $('.category-box-slider').slick({
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  }

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
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
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
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
