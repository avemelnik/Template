$(".hide-navigation").hide();
$(document).ready(function () {
    $(".hide-navigation").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){
            $('header').addClass("bg-scroll-change");
        }
        else{
            $('header').removeClass("bg-scroll-change");
        }
    })



    var flag = 0;
    $(".btn-tog").on("click", function () {

        if (flag === 0) {
            $("header").addClass("menu")
            $(".logo").hide();
            $(".hide-navigation").show();
            flag = 1;
        }
        else{
            $("header").removeClass("menu");
            $(".hide-navigation").hide();
            $(".logo").show();
            flag = 0;
        }
        }
    );

    $(".hide-link").on("click", function () {
        $(".hide-navigation").hide();
        $("header").removeClass("menu")
        $(".logo").show();
    })


    $(document).ready(function() {
        $("a.first").fancybox();
        $("a.two").fancybox();
        $("a.video").fancybox({"frameWidth":520,"frameHeight":400});
        $("a.content").fancybox({"frameWidth":600,"frameHeight":300});
    });

    $(".second-switcher").on("click", function () {
        $(".first-carousel-title").hide(0);
        $(".third-carousel-title").hide(0);
        $(".first-carousel-img").hide(0);
        $(".third-carousel-img").hide(0);
        $(".second-carousel-img").fadeIn(1000);
        $(".second-carousel-title").fadeIn(1000);

    })
    $(".third-switcher").on("click", function () {
        $(".first-carousel-title").hide(0);
        $(".second-carousel-title").hide(0);
        $(".first-carousel-img").hide(0);
        $(".second-carousel-img").hide(0);
        $(".third-carousel-img").fadeIn(1000);
        $(".third-carousel-title").fadeIn(1000);
    })
    $(".first-switcher").on("click", function () {
        $(".second-carousel-title").hide(0);
        $(".third-carousel-title").hide(0);
        $(".second-carousel-img").hide(0);
        $(".third-carousel-img").hide(0);
        $(".first-carousel-img").fadeIn(1000);
        $(".first-carousel-title").fadeIn(1000);
    })



















    const setActive = function() {
        const self = $(this);
        const listMenu = $('.navigation-list .nav-item .nav-link');
        var curIndex = -1;

        $('section').each(function(index) {
            if (self.scrollTop() > $(this).offset().top) {
                curIndex = index;
            }
        });

        if (curIndex === -1) {
            listMenu.removeClass('active');
        }
        else {
            const curItemMenu = listMenu.eq(curIndex);

            if (!curItemMenu.hasClass('active')) {
                curItemMenu.addClass('active');
                curItemMenu.siblings().removeClass('active');
            }
        }
    };

    setActive();

    $('.navigation-list li').on('click', function(e) {
        e.preventDefault();

        const index = $(this).index();
        const curHeader = $('section').eq(index+1).offset().top;

        $('html, body').animate({
            scrollTop: curHeader - 70
        }, 1000);
    });

    $(document).on('scroll', function() {
        const posDoc = $(this).scrollTop();

        $('section').each(function(index, item) {
            const topHeader = $(this).offset().top - 38;
            const botHeader = topHeader + $(this).height();

            if (
                posDoc > topHeader &&
                posDoc < botHeader
            ) {
                $('.navigation-list li').removeClass('active');
                $('.navigation-list li').eq(index).addClass('active');
            }

        });
    });
    $('.hide-navigation-list li').on('click', function(e) {
        e.preventDefault();

        const index = $(this).index();
        const curHeader = $('section').eq(index+1).offset().top;

        $('html, body').animate({
            scrollTop: curHeader - 70
        }, 1000);
    });

    $(document).on('scroll', function() {
        const posDoc = $(this).scrollTop();

        $('section').each(function(index, item) {
            const topHeader = $(this).offset().top - 38;
            const botHeader = topHeader + $(this).height();

            if (
                posDoc > topHeader &&
                posDoc < botHeader
            ) {
                $('.hide-navigation-list li').removeClass('active');
                $('.hide-navigation-list li').eq(index).addClass('active');
            }

        });
    });







});
