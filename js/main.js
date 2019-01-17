$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#access-btn').on('click', function(e) {
        e.preventDefault();
        var first = $('#access-first').val();
        var last = $('#access-last').val(); 
        var email = $('#access-email').val(); 
        window.location.assign("https://app.legalgps.com/register?firstName="+ first+"&lastName="+ last+"&email="+ email);
    });


    // Quote
    $('.quote').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    // Quote
    $('.quote2').slick({
        arrows: false,
        autoplay: false,
        dots: true
    });

    // Quote
    $('.quote3').slick({
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
	
    // Video Lightbox
    $('.swipebox-video').swipebox();

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Stellar
    $.stellar({
        horizontalOffset: 50,
        verticalOffset: 50,
        responsive: true
    });

    // Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80) {
            $(".navbar-inverse").css("background", "#fff");
            $("#logo-header").attr("src", "images/logo_primary.png");

        } else {
            $(".navbar-inverse").css("background", "transparent");
            $("#logo-header").attr("src", "images/logo_primary_white.png");
        }
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80) {
            var w = window.innerWidth;
            if(w > 768){
                $(".navbar-lg .navbar-nav > li > a").css("color", "#111" );
            }
        } else {
            $(".navbar-lg .navbar-nav > li > a").css("color", "#fff"); 
        }
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-inverse").css("box-shadow", " 0 1px 8px rgba(0,0,0,.2)" );
        else
            $(".navbar-inverse").css("box-shadow", "none" );
    });

    // Product Feature
    $('.hl-point1 .trigger').on('click', function() {
        $('.hl-point1 .h1-point-info').toggleClass('active');
        $('.hl-point2 .h1-point-info').removeClass('active');
        $('.hl-point3 .h1-point-info').removeClass('active');
    });

    $('.hl-point2 .trigger').on('click', function() {
        $('.hl-point2 .h1-point-info').toggleClass('active');
        $('.hl-point1 .h1-point-info').removeClass('active');
        $('.hl-point3 .h1-point-info').removeClass('active');
    });

    $('.hl-point3 .trigger').on('click', function() {
        $('.hl-point3 .h1-point-info').toggleClass('active');
        $('.hl-point2 .h1-point-info').removeClass('active');
        $('.hl-point1 .h1-point-info').removeClass('active');
    });

});

// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.portfolio-grid');
    $container.isotope({
        layoutMode: "masonry",
        masonry: {
            columnWidth: 5
        },
        itemSelector: '.portfolio-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.portfolio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.portfolio-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

// SETTINGS PANEL
$('.btn-settings').on('click', function() {
    $(this).parent().toggleClass('active');
});

$('.switch-handle').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('boxed');
});

$('.color-list div').on('click', function() {
    if ($(this).hasClass('active')) return false;
    $('link.color-scheme-link').remove();
    $(this).addClass('active').siblings().removeClass('active');
    var src = $(this).attr('data-src'),
        colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
    colorScheme
        .attr('href', src)
        .appendTo('head');
});


$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(function() {
    $('.btn-circle').on('click', function() {
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
    });
});

$(document).ready(function() {

    $(".ai-list1").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide2-active");
        $(".ai-slide-img-inner").removeClass("ai-slide3-active");
    });

    $(".ai-list2").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide2-active");
        $(".ai-slide-img-inner").removeClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide3-active");
    });

    $(".ai-list3").hover(function(e) {
        $(".ai-slide-img-inner").addClass("ai-slide3-active");
        $(".ai-slide-img-inner").removeClass("ai-slide1-active");
        $(".ai-slide-img-inner").removeClass("ai-slide2-active");
    });

    // With and Without Legal GPS slides
    var paginatorData = [
        {goodTitle: 'Will setup an LLC.', goodConsequence: '$50,000+', badTitle: 'Will didn’t have an entity.' , badConsequence: '$50,000+', mainTitle: '<b style="font-size: 56px;">1.</b> Will wasn\'t sure what entity was best for him.'},
        {goodTitle: 'Will did a trademark search for his business name. ', goodConsequence: '$30,000 + Goodwill', badTitle: 'Will didn’t do a trademark search.' , badConsequence: '$30,000 + Goodwill', mainTitle: '<b style="font-size: 56px;">2.</b> Will was accidentally violating someone elses Trademark.'},
        {goodTitle: 'Will did all the right LLC formalities after he set up his company.', goodConsequence: '$30,000+', badTitle: 'Will didn’t do LLC formalities.' , badConsequence: '$30,000+', mainTitle: '<b style="font-size: 56px;">3.</b> Will wasn\'t familiar with LLC formalities.'},
        {goodTitle: 'Will protected his confidential info with an NDA.', goodConsequence: 'His Company', badTitle: 'Will didn’t have an NDA.' , badConsequence: 'His Company', mainTitle: '<b style="font-size: 56px;">4.</b> Will wasn\'t familiar with Non-disclosure Agreements.'},
        {goodTitle: 'Will had the IP created for him assigned to his company.', goodConsequence: 'His Company', badTitle: 'Will didn’t assign his IP.' , badConsequence: 'His Company', mainTitle: '<b style="font-size: 56px;">5.</b> Will\'s Intellectual Property wasn\'t protected.'},
    ];

    var videoData = [
        {src: 'https://fast.wistia.net/embed/iframe/2sjl8mornw?videoFoam=true'},    
        {src: 'https://fast.wistia.net/embed/iframe/8zd94ajsnc?videoFoam=true'},
        {src: 'https://fast.wistia.net/embed/iframe/x5ixvxcerg?videoFoam=true'},
        {src: 'https://fast.wistia.net/embed/iframe/ub8p6rdom1?videoFoam=true'},
        {src: 'https://fast.wistia.net/embed/iframe/b009im0c3x?videoFoam=true'}
    ];
    var trackNum = 0;
    $('.paginator').on('click', function(e) {
        e.preventDefault();
        var trackNumStart = $(this).data('track-num');
        if (isNaN(trackNumStart)) {
            console.log(trackNum);
            if(trackNumStart === 'next'){
                if (trackNum === 5) {
                    return false;
                }
                $('.paginator').removeClass('active');
                trackNum +=1;
                $('li[data-track-num="'+ (trackNum + 1) +'"]').addClass('active');
            }
            if (trackNumStart === 'prev'){
                if (trackNum === 0) {
                    return;
                }
                $('.paginator').removeClass('active');
                trackNum -=1;
                $('li[data-track-num="'+ (trackNum + 1) +'"]').addClass('active');
            }
        } else {
            $('.paginator').removeClass('active');
            trackNum = trackNumStart -1;
            $(this).addClass('active');
        }

        if (trackNum === 5){
            //$('.mainTitle').html('<b style="font-size: 0px;">&nbsp;</b>');
            $('.mainTitle').html('<div class="space10"></div>');
            $('.with-without-container').hide();
            $('.conclusion-container').show();
            return false;
        } else {
            $('.with-without-container').show();
            $('.conclusion-container').hide();
        }
        
        
        var dictionary = paginatorData[trackNum];
        $('.video-lesson').fadeOut().fadeIn();
        var dictionary = paginatorData[trackNum];
        var videoLink = videoData[trackNum];
        $('#will-iframe').attr('src', videoLink.src);
        for (var key in dictionary) {
            // check if the property/key is defined in the object itself, not in parent
            if (dictionary.hasOwnProperty(key)) {  
                $('.' + key).html(dictionary[key]);         
                //console.log(key, dictionary[key]);
            }
        }
        
    });



    $("#pricing-one").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#pricingTable").offset().top
        }, 1500);
    });

    $("#pricing-two").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#pricingTable").offset().top
        }, 500);
    });

    $("#pricing-three").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#pricingTable").offset().top
        }, 1000);
    });

    $("#pricing-four").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#pricingTable").offset().top
        }, 500);
    });

    $("#contact-scroll").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-form").offset().top
        }, 700);
    });

    $("#learn-more-target").on('click', function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#learn-more-result").offset().top
        }, 500);
    });

});

