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
