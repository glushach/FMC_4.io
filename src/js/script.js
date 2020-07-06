$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: true, //точеки внизу слайдера
    speed: 1200,
    adaptiveHeight: false, //высота слайда будет одинаковая, в независимости от высоты контента
    // autoplay: true,
    // autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/promoHeader-icon/prev-icon.png" ,alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/promoHeader-icon/next-icon.png" ,alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
        dots: true,
        arrows: false,
        }
      }
    ]
  });

  $('input[name=phone]').mask("+7 (999) 999-99-99");
});