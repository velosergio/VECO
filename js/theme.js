;
(function ($) {
    "use strict";

    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.main_header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    /*----------------------------------------------------*/
    /*  Our Project isotope
    /*----------------------------------------------------*/
    function latest_project1() {
        if ($('.our_project_details').length) {
            // Activate isotope in container
            $(".our_project_details").imagesLoaded(function () {
                $(".our_project_details").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
            // Add isotope click function
            $(".our_project_filter li").on('click', function () {
                $(".our_project_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".our_project_details").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    latest_project1();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function team_slider() {
        if ($('.team_slider').length) {
            $('.team_slider').owlCarousel({
                loop: false,
                margin: 30,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                navContainer: ".our_latest_slider",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    }
                }
            })
        }
    }
    team_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function latest_slider() {
        if ($('.our_latest_slider').length) {
            $('.our_latest_slider').owlCarousel({
                loop: false,
                margin: 30,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                navContainer: ".our_latest_slider",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    }
                }
            })
        }
    }
    latest_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function team_slider() {
        if ($('.team_slider').length) {
            $('.team_slider').owlCarousel({
                loop: false,
                margin: 30,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                navContainer: ".our_latest_slider",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    }
                }
            })
        }
    }
    team_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function team_slider2() {
        if ($('.team_slider2_inner').length) {
            $('.team_slider2_inner').owlCarousel({
                loop: true,
                margin: 30,
                items: 4,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    team_slider2();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function other_slider() {
        if ($('.other_service_slider').length) {
            $('.other_service_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                nav: true,
                autoplay: false,
                smartSpeed: 1500,
                dots: false,
                navContainer: ".other_service_slider",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1050: {
                        items: 3,
                    }
                }
            })
        }
    }
    other_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function quoto_slider() {
        if ($('.quoto_slider').length) {
            $('.quoto_slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots: false,
                navContainer: ".quoto_slider_inner",
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                //                responsive: {
                //                    0: {
                //                        items: 1,
                //                    },
                //                    480: {
                //                        items: 2,
                //                    },
                //                    600: {
                //                        items: 4,
                //                    },
                //                    800: {
                //                        items: 6,
                //                    }
                //                }
            })
        }
    }
    quoto_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function testimonials_slider() {
        if ($('.testimonials_slider').length) {
            $('.testimonials_slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots: true,
                responsiveClass: true,
                //                responsive: {
                //                    0: {
                //                        items: 1,
                //                    },
                //                    480: {
                //                        items: 2,
                //                    },
                //                    600: {
                //                        items: 4,
                //                    },
                //                    800: {
                //                        items: 6,
                //                    }
                //                }
            })
        }
    }
    testimonials_slider();

    /*----------------------------------------------------*/
    /*  Clients Slider2
    /*----------------------------------------------------*/
    function client_slider() {
        if ($('.clients_slider').length) {
            $('.clients_slider').owlCarousel({
                loop: true,
                margin: 15,
                items: 6,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    500: {
                        items: 4,
                    },
                    768: {
                        items: 6,
                    }
                }
            })
        }
    }
    client_slider();

    $(".our_skill_inner").each(function () {
        $(this).waypoint(function () {
            var progressBar = $(".progress-bar");
            progressBar.each(function (indx) {
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });

})(jQuery)