$(function(){

    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();
        
        var target = $(this).attr("href");
        
        $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
        location.hash = target;
        });
        
        return false;
    });

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

});

