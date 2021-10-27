$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.scrollup').fadeIn();
      $("body").addClass('down');
      $(".floating-mheader").removeClass('slideUp');
      $(".floating-mheader").addClass('slideDown');
    } else {
      $('.scrollup').fadeOut();
      $("body").removeClass('down');
      $(".floating-mheader").addClass('slideUp');
      $(".floating-mheader").removeClass('slideDown');
    }
  });

  $('.scrollup').click(function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.scrollTo(0, 0);
    }
    else {
      $('html,body').animate({
        scrollTop: 0
      }, 500, function () {
        $('html,body').clearQueue();
      });
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

    $('.pd-mobile-slider').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 1
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
  
  $('.collection-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 800,
    nextArrow: '<button class="next"><svg height="30px" viewBox="0 0 1792 1792" width="30px"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></button>',
    prevArrow: '<button class="prev"><svg height="30px" viewBox="0 0 1792 1792" width="30px"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
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

  $(".pzoom").elevateZoom({
    borderSize: 0,
    gallery: 'thumb-control',
    galleryActiveClass: 'active',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    zoomWindowWidth: 880,
    zoomWindowHeight: 520,
    zoomWindowOffetx: 10
  });

  $('[data-fancybox]').fancybox({
    protect: true
  });

  // Cart Modal
  //$("#cartModal").modal();

});
