$('.cases-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    appendArrows: '.cases-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('[name="phone"]').mask('+7(999) 999-99-99');

