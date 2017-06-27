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
        
        
     $(".menu-trigger").on("click",function(){
         $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
         return false;
     });

         $(".menu-close,.off-canvas-overlay").on("click",function(){
         $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
      
     });

         $(".search-trigger").on("click", function(){
            $(".big-search, .big-search-overlay").addClass("active");
            return false;
        });

           $(".search-close, .big-search-overlay").on("click", function(){
            $(".big-search, .big-search-overlay").removeClass("active");
            
        });
        
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	