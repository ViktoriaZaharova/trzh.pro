$('.cases-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    appendArrows: '.cases-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                fade: true,
                variableWidth: false
            }
        }
    ]
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});


// animate star
$(document).ready(function () {
    let way = 100, // кол-во пройденных пикселей
        deg = 10;  // угол поворота за пройденный путь

    $(window).on('scroll', function () {
        let s = $(this).scrollTop();
        $('.star').css('transform', 'rotate(' + (s / way * deg) + 'deg)');
    });
});

// animate number
$(document).ready(function () {
    var target = $('.benefits__inner');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem) {
            $({blurRadius: 5}).animate(
                {blurRadius: 0},
                {
                    duration: 3500,
                    easing: "swing",
                }
            );
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
                " "
            );
            $(".benefits__number").each(function () {
                var tcount = $(this).data("count");
                $(this).animateNumber(
                    {
                        number: tcount,
                        easing: "easeInQuad",
                        numberStep: comma_separator_number_step
                    },
                    3000
                );
            });
        }
    });
});

new WOW().init();