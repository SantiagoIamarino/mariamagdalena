var $ = jQuery
let flotantIndex = 1;

// Header

$(window).scroll(function(){
    var sticky = $('.sticky-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 80) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
});

// Custom product slider 

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

// About us

$('.about-us .background .background-container .trigger').on('mouseenter', toggleAboutUsImg);
$('.about-us .background .background-container .trigger').on('mouseleave', toggleAboutUsImg);

// Flotant imgs

const flotantOffsetTop = $('.nuestros-pilares').offset().top - 200;

$(window).scroll(function(){
    const scroll = $(window).scrollTop();
  
    if (scroll >= flotantOffsetTop) {
        $('.flotant-img').removeClass('initial');
    }
});

if(window.innerWidth <= 1200) {
    initFlotantSlider();
} else {
    $('.flotant-img .flotant').on('mouseenter', toggleFlotant);
    $('.flotant-img .flotant').on('mouseleave', toggleFlotant);

}

function toggleFlotant(event) {

    $('#flotants_section_title').toggleClass('no-show');

    const parent = $(event.target).parents('.flotant-img')[0];
    const target = $(parent).data('target');

    const title = $(parent).data('title');
    $('#flotant_section_name').html(title);

    $(`.nuestros-pilares #content_${target}`).toggleClass('active');
    $(parent).toggleClass('active');
    
}


function initFlotantSlider() {

    // Controls
    if(flotantIndex == 1) {
        $('.nuestros-pilares .slider-controls .right').show();
        $('.nuestros-pilares .slider-controls .left').hide();
        $('.nuestros-pilares .slider-controls').css({
            'justify-content': 'flex-end'
        })
    } else if(flotantIndex == 3) {
        $('.nuestros-pilares .slider-controls .right').hide();
        $('.nuestros-pilares .slider-controls .left').show();
        $('.nuestros-pilares .slider-controls').css({
            'justify-content': 'flex-start'
        })
    } else {
        $('.nuestros-pilares .slider-controls .right').show();
        $('.nuestros-pilares .slider-controls .left').show();
        $('.nuestros-pilares .slider-controls').css({
            'justify-content': 'space-between'
        })
    }


    const parent = $(`.nuestros-pilares .img-${flotantIndex}`);
    const sectionTitle = $(parent).data('title');
    const target = $(parent).data('target');

    $('#flotants_section_title h2').html(sectionTitle);

    $(`.nuestros-pilares .content.active`).removeClass('active');
    $(`.nuestros-pilares #content_${target}`).toggleClass('active');

    const left = (-100 * (flotantIndex - 1));
    $('.nuestros-pilares .flotant-imgs').css({
        'left': `${left}%`
    })

}

$('.nuestros-pilares .slider-controls .left').on('click', () => {
    flotantIndex--;
    initFlotantSlider();
})

$('.nuestros-pilares .slider-controls .right').on('click', () => {
    flotantIndex++;
    initFlotantSlider();
})

$(document).ready(function(){
    $('[data-showme]').on('click', function(){
        var showme = $(this).attr('data-showme')
        
        $('.prods').hide()
        $('#' + showme).show()
    })
})