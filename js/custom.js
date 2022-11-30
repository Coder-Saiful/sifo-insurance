$(document).ready(function () { // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // Preloader

    var win = $(window);

    win.on('load', function () {
        $('.preloader').fadeOut();
        $('main').css({
            visibility: "visible"
        });
    });

    // Scroll to top button
    var scrollToTop = $(".scrollToTop");
    win.on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    scrollToTop.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });



});