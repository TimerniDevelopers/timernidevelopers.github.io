$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // Banner slider
    var $companiesSlider = $(".home-slider");
    $companiesSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        smartSpeed: 5000,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
        }
    });

    // Magnific popup
    $('.videos-icon').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });
    // focusSlider 
    var $focusSlider = $(".focus-slider");
    $focusSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
        }
    });
    // collaborator-slider 
    var $partnerSlider = $(".partner-slider");
    $partnerSlider.owlCarousel({
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>',
        ],
        dots: false,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3,
            },
        }
    });
    // student-slider 
    var $studentSlider = $(".student-slider");
    $studentSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1300: {
                items: 3,
            },

        }
    });
    var $trierSlider = $(".trier-slider");
    $trierSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 1,
            },
            1300: {
                items: 1,
            },

        }
    });
    var $onlineSlider = $(".online-slider");
    $onlineSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1300: {
                items: 3,
            },

        }
    });

    // WOW active
    new WOW().init();
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-transparent ").removeClass("sticky ");
        } else {
            $(".header-transparent ").addClass("sticky ");
        }
    });
    $(function() {

        $(".sub-menu ").parent("li ").on("click ", function(e) {
            $("sub-menu ").removeClass("close ");
            $(this).find(".sub-menu ").toggleClass("open ");
        });

    });



}(jQuery));