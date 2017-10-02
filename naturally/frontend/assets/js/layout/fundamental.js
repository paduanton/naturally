// Click outside of offcanvass
var clickFora = function () {

    $(document).click(function (e) {
        var container = $("#fh5co-offcanvas, .js-fh5co-close-offcanvas");
        if (!container.is(e.target) && container.has(e.target).length === 0) {

            if ($('#fh5co-offcanvas').hasClass('animated fadeInRight')) {

                $('#fh5co-offcanvas').addClass('animated fadeOutRight');
                setTimeout(function () {
                    $('#fh5co-offcanvas').css('display', 'none');
                    $('#fh5co-offcanvas').removeClass('animated fadeOutRight fadeInRight');
                }, 1000);
                $('.js-perfil-toggle').removeClass('active');

            }


        }
    });

    $('body').on('click', '.js-fh5co-close-offcanvas', function (event) {


        $('#fh5co-offcanvas').addClass('animated fadeOutRight');
        setTimeout(function () {
            $('#fh5co-offcanvas').css('display', 'none');
            $('#fh5co-offcanvas').removeClass('animated fadeOutRight fadeInRight');
        }, 1000);
        $('.js-perfil-toggle').removeClass('active');

        event.preventDefault();

    });

};


// Burger Menu
var menuTop = function () {

    $('body').on('click', '.js-perfil-toggle', function (event) {

        var $this = $(this);

        $('#fh5co-offcanvas').css('display', 'block');
        setTimeout(function () {
            $('#fh5co-offcanvas').addClass('animated fadeInRight');
        }, 100);

        // $('body').toggleClass('fh5co-overflow offcanvas-visible');
        $this.toggleClass('active');
        event.preventDefault();

    });

};


// Document on load.
$(function () {
    clickFora();
    menuTop();
});


/* --------------------------------------------------------------------------------------------------------*/


;(function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.js-gtco-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var scrollNavBar = function () {

        if ($(window).scrollTop() > 50) {
            $('body').addClass('scrolled');
            $('.js-gtco-nav-toggle').removeClass('gtco-nav-white');
        } else {
            $('body').removeClass('scrolled');
            $('.js-gtco-nav-toggle').addClass('gtco-nav-white');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('body').addClass('scrolled');
                $('.js-gtco-nav-toggle').removeClass('gtco-nav-white');
            } else {
                $('body').removeClass('scrolled');
                $('.js-gtco-nav-toggle').addClass('gtco-nav-white');
            }
        });


    };

    var offcanvasMenu = function () {

        $('#page').prepend('<div id="gtco-offcanvas" />');
        $('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#gtco-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#gtco-offcanvas').append(clone2);

        $('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#gtco-offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function () {
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function () {

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function () {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-gtco-nav-toggle').removeClass('active');

            }
        });
    };


    var burgerMenu = function () {

        $('body').on('click', '.js-gtco-nav-toggle', function (event) {
            var $this = $(this);


            if ($('body').hasClass('overflow offcanvas')) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };


    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);
            }
        }, {offset: '85%'});
    };


    var dropdown = function () {

        $('.has-dropdown').mouseenter(function () {

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function () {
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var goToTop = function () {
        $('.js-gotop').on('click', function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 720)
            return false;
            /*window.scrollTo(0,0)*/
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    // Loading page
    var loaderPage = function () {
        $(".gtco-loader").fadeOut("slow");
    };

    var counter = function () {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };


    $(function () {
        mobileMenuOutsideClick();
        scrollNavBar();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        dropdown();
        goToTop();
        loaderPage();
    });


}());


/*---------------------------------------------
                             ------------------------------------------------*/

jQuery(document).ready(function () {
    /*
        Wow
    */
    new WOW().init();

    /*
        Search form
    */
    $('.navbar-search-button .search-button').on('click', function (e) {
        e.preventDefault();
        $(this).blur();
        $('.navbar-menu-items').toggleClass('disabled');
        $('.navbar-search-form').toggleClass('disabled');
        $('.navbar-search-form input.search').val('').focus();
    });


});

/* ------------solid----------------------*/
;(function () {
    var counter = function () {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };
    var counterWayPoint = function () {
        if ($('#fh5co-counter-section').length > 0) {
            $('#fh5co-counter-section').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };
    // Document on load.
    $(function () {
        counterWayPoint();
    });
}());



/* SIDE BAR FIXADA E NÃO FIXADA */
/*
var windw = this;
$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function(e){
        if ($window.scrollTop() >= pos) {
            $this.css({
                position: 'fixed',
                top: 130,
                left: 20
            });
        } else {
            $this.css({
                position: 'absolute',
                top: 0
            });
        }
    });
};
$('#fh5co-aside').followTo(600);*/
/*
var windw = this;


$.fn.followTo = function (elem) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function () {
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $('#fh5co-aside').fadeOut(2000);
            } else {
                $('#fh5co-aside').fadeIn(2000);
            }
        };
    $window.resize(function () {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('#fh5co-aside').followTo('#rolagem');*/

// TOOLTIP
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});



