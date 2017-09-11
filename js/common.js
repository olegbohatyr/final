$(document).ready(function () {
    $('.slider').slick({
        prevArrow:'<button type="button" class="prev"></button>',
        nextArrow:'<button type="button" class="next"></button>'
    });

    $('.menu-toggle').on('click', function () {
        $('.menu-items').slideToggle();
    })
})
