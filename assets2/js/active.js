(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        // add mobile menu calss funtion
         $('.navbar-toggle').click(function(){
             $('.navigation-area').addClass('mobile-menu');
         });
         // Remove class in function
         $('ul.nav.navbar-nav li a').click(function(){
             $('.navbar-collapse').removeClass('in');
         });
         // Stiky Navigation
         $(".stickyNav").sticky({ 
             topSpacing: 0,
             zIndex: 11,
         });
         // Smoot Scroll Effect
         $('li.smooth-scroll a') .bind('click', function(event){
             var $anchor = $(this);
             var headerHeight = '60';
             $('html, body').stop().animate({
                 scrollTop : $($anchor.attr('href')) .offset().top - headerHeight + "px"
             }, 1200, 'easeInOutExpo');
             event.preventDefault();
         });
         // Scrollspy
         $('body').scrollspy({
             target : '.navigation-area',
             offset : 62,
         });

        //Scroll To top Function apply
        jQuery(window).scroll(function(){
            var ScrollToTop = jQuery(window).scrollTop();

            //ScrollToTop Function
            if( ScrollToTop > 500){
                jQuery(".ScrollToTop").fadeIn();
            }
            else{
                jQuery(".ScrollToTop").fadeOut();
            }
        });

        //Scroll To top With animate
        jQuery(".ScrollToTop").click(function(){
            jQuery("body, html").animate({'scrollTop' : 0}, 1000);

            return false
        });

        // Counter Up
        $('.counter').counterUp({
            delay: 10,
            time: 2500
        });
        
    	// Pogo slider script
    	var mySlider = $('#home-slider').pogoSlider({
    	   pauseOnHover: false,
    	   autoplay : true,
    	   autoplayTimeout : 7000,
    	}).data('plugin_pogoSlider');

        // Mixitup
        $(function(){
            $('.mixItup-Area').mixItUp();
        });
        
        // magnificPopup
        $('.test-popup-link').magnificPopup({
                type: 'image',
                gallery: {
                    // options for gallery
                    enabled: true
                },
                removalDelay: 300,
                mainClass: 'mfp-fade',
        });

        // owlCarousel
        $("#testimonial-slide").owlCarousel({
            loop:true,
            autoplay: true,
            autoPlay : 8000,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });

        // WOW JS
        new WOW().init();

        // Parallax
        $('.parallax-bg').scrolly({bgParallax: true});
        // Footer Widget Popup
       $('.fw-gallerry-popup').magnificPopup({
                type: 'image',
                gallery: {
                    // options for gallery
                    enabled: true
                },
                removalDelay: 300,
                mainClass: 'mfp-fade',
        });
    });

    jQuery(window).load(function(){
        jQuery(".Preloder").fadeOut(500);
    });


}(jQuery));


