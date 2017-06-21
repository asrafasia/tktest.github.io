(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



     $('.product-list').masonry();
        
        
     $('.homepage-slider').owlCarousel({
         items : 1,
         loops : true,
         autoplay : false,
         dots : false,
         nav : true,
         navText : ["<i class='fa fa-long-arrow-left'></i>" , "<i class='fa fa-long-arrow-right'></i>"]
     });
       
        
        $('.product-promotion').owlCarousel({
         items : 1,
         loops : true,
         autoplay : false,
         dots : true,
        nav : false,
         
     });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	