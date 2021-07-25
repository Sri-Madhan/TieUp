$(window).on("load",function(){
	$(".perloader").fadeOut("slow");
});


$(document).ready(function(){
	// NavBar Shrink
	$(window).on("scroll",function(){
		if($(this).scrollTop() > 90){
			$(".navbar").addClass("navbar-shrink");
		}else{
			$(".navbar").removeClass("navbar-shrink");
		}
	});

	$('.features-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    autoplay:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	            nav:true
	        }
	    }
	})

	$('.screenshots-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    autoplay:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	            nav:true
	        }
	    }
	})
});