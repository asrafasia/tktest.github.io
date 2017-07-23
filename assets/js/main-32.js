(function ($) {
	"use strict";

    jQuery(document).ready(function($){



		jQuery(window).scroll(function() {
					if ($(this).scrollTop() > 100) {
						$('.scrollToTop').fadeIn();
					} else {
						$('.scrollToTop').fadeOut();
					}
				});


				jQuery('.scrollToTop').click(function() {
					$('html, body').animate({ scrollTop: 0 }, 800);
					return false;
				});
		

    });




}(jQuery));	