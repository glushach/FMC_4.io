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

  $('.right').click(function(){
    let currentImage = $('.mySlider-item.curry');
    let currentImageIndex = $('.mySlider-item.curry').index();
    let rightImageIndex = currentImageIndex + 1;
    let rightImade = $('.mySlider-item').eq(rightImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if(rightImageIndex == ($('.mySlider-item:last').index()+1)){
      $('mySlider-item').eq(0).fadeIn(1000);
      $('mySlider-item').eq(0).addClass('curry');
    } else {
      rightImade.fadeIn(1000);
      rightImade.addClass('curry');
    }
  });

  $('.left').click(function() {
		let currentImage = $('.mySlider-item.curry');
		let currentImageIndex = $('.mySlider-item.curry').index();
		let leftImageIndex = currentImageIndex - 1;
		let leftImage = $('.mySlider-item').eq(leftImageIndex);
  
    currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		leftImage.fadeIn(1000);
		leftImage.addClass('curry');
  });
  
});
