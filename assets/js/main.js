(function ($) {
	"use strict";

    jQuery(document).ready(function($){

$(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.staff-list').owlCarousel({
            items : 4,
            autoplay : false,
            loop : true,
            margin : 30,
            nav : true,
            navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            
            
        });
		
		$('.testimonial-carousel').owlCarousel({
            loop : true,
            nav : false,
            margin : 30,
            items : 3,
            dots : true,
            autoplay : true
            
            
        });

		 $('.product-list').masonry();

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	