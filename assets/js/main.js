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
		
		
		$('.homepage-slides').owlCarousel({
            loop : true,
            nav : false,
            items : 1,
            dots : true,
            autoplay : true
            
            
        });

		 $('.product-list').masonry();
		 
		 

         $(".search-btn").on('click', function(){
            $(".search-box form").fadeToggle();
             return false;
        }); 

		
		jQuery(".project-hover a").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
            },
		});
		
		jQuery(window).load(function(){
		  jQuery(".projects-list").isotope();
		}); 
		
		jQuery(".projects-title li").on('click', function() {
            $(".projects-title li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
               filter: selector 
            });
        });
      
		

		var s = skrollr.init({
			 render: function(data){
				}
		 });


        $(".video-btn").magnificPopup({
			type: 'video',
		});

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