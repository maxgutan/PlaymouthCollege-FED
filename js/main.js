$(document).ready(function () {

    //We Enrich popup!
    $('.hover').click(function () {
        $('.twitter-popup').addClass('active');
    });
    $('.close-btn').click(function () {
        $('.twitter-popup').removeClass('active');
    });


    //Notice Message
    $('.notice').click(function () {
        $('.notice-overlay').addClass('active');
    });
    $('.close-btn').click(function () {
        $('.notice-overlay').removeClass('active');
    });


    //Alert-message
    $('.alert').click(function () {
        $('.alert-overlay').addClass('active');
    });
    $('.close-btn').click(function () {
        $('.alert-overlay').removeClass('active');
    });

    //scroll button
    $('.scroll-down').on('click', function () {
       $('html,body').animate({
           scrollTop: $(window).scrollTop()+getWindowHeight()
       }, 1200);

    });


    //menu
    $('.menu-holder .menu-trigger').click(function () {
       $('.menu-overlay').toggleClass('menu-open');
    });

    $('.main-nav > li > ul').each(function () {
        $(this).parent().addClass("has-sub").append('<span />');
    });

    $('.navigation-holder').on('click', '.main-nav > li > span, .main-nav > li.has-sub > a', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var $menuObj = $(this).parent().find('>ul').clone().addClass('second-level-menu'),
            anchorTxt = $(this).parent().find('>a').text(),
            subMenuHtml = '<div class="sub-menu-header"><span class="back-btn" data-target="1">Back</span><h3 class="current-selection">' + anchorTxt + '</h3></div>';

        $('.layer2 .vertical-align').html('').append(subMenuHtml).append($menuObj);

        $('.navigation-holder').addClass('lvl-2-active');

    });

    $('body').on('click', '.sub-menu-header .back-btn', function (e) {
        e.preventDefault();

            $('.navigation-holder').removeClass('lvl-2-active');
            setTimeout(function () {
                $('.layer2 .vertical-align').html('');
            }, 320);

    });

    $('.navigation-holder').on('click', '.main-nav > ul > li.has-sub > a',function () {
        $('.menu-addons-holder').addClass('remove');
    });


    //scroll
    $('.scroll-top').click(function () {
       window.scrollTo(0,0);
    });

    //scroll text

    var controller = new ScrollMagic.Controller();

    $(function () {
        var scene = new ScrollMagic.Scene({triggerElement: '#pin',duration: 300})
            .setPin('#pin')
            .addIndicators({name: "1 (duration: 300)"})
            .addTo(controller);
    });

    //progress bar


});


