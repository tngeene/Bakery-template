$(function () {
    $('.hamburger-menu').on('click', function() {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
    // animations code
    AOS.init({
        easing: 'ease',
        duration: 1000
    })
});
