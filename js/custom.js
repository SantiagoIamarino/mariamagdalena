// Custom product slider 
var $ = jQuery

$('.slider-product.product-2').on('mouseenter', () => {
    $('.slider-product .texture-bg').css({
        'opacity': '1',
        'z-index': '999'
    })

    $('.slider-product.product-2 .texture-bg').css({
        'opacity': '0',
        'z-index': '-1'
    })

})

$('.slider-product.product-2').on('mouseleave', () => {
    $('.slider-product .texture-bg').css({
        'opacity': '0',
        'z-index': '-1'
    })

    $('.slider-product.product-2 .texture-bg').css({
        'opacity': '1',
        'z-index': '999'
    })
})

$('.menu-toggler').on('click', () => {
    $('.menu-toggler').toggleClass('active');
    $('header .main-menu').toggleClass('mobile-active');
})

$(window).scroll(function(){
    var sticky = $('.sticky-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 80) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
  });

  function toggleAboutUsImg(event) {
    const targetIndex = $(event.target).data('target');
    const target = $(`#about_us_img_${targetIndex}`);
    
    $(target).toggleClass('active');

    if(!$(target).hasClass('no-index')){
        setTimeout(() => {
            $(target).toggleClass('no-index');
        }, 600)
    } else {
        $(target).toggleClass('no-index');
    }
  }

  $('.about-us .background .background-container .trigger').on('mouseenter', toggleAboutUsImg);
  $('.about-us .background .background-container .trigger').on('mouseleave', toggleAboutUsImg);