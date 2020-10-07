"use strict";
$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: true, //точеки внизу слайдера
    speed: 1200,
    adaptiveHeight: false, //высота слайда будет одинаковая, в независимости от высоты контента
    // autoplay: true,
    // autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/promoHeader-icon/prev-icon.png" ,alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/promoHeader-icon/next-icon.png" ,alt=""></button>',
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

  $('.header__block').click(function(header){
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.block__title').click(function(event){
    if($('.block').hasClass('one')){
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

