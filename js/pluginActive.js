// Banner Slider 

$('#banner_part').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  dots: true,
  cssEase: 'linear',
});

// Video part popup video

new VenoBox({
  selector: '.my-video-links',
});

// Team slider 

$('.team_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.team_arrow_left',
  nextArrow: '.team_arrow_right',
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

// Testimonial slider 

$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Counter up plugin activation

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// AOS plugin activation

AOS.init();