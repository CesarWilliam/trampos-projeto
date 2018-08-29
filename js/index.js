function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay:true,
    	autoplayTimeout:3000,
	    margin:10,
	    nav:false,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:3
	        },
	        1200:{
	            items:5
	        }
	    }
	});


	var iScrollPos = 0;
	var x = 0;

	$(window).scroll(function () {

	    var iCurScrollPos = $(this).scrollTop();
	    x ++ ;
	    x = x + 2 ;

	    if (iCurScrollPos > iScrollPos) {
	        
		    var srotate = "margin-top:" + x;
		    $(".div1").css({"margin-top:" : srotate, "margin-top:" : srotate});
	    
	    } else {
	       //Scrolling Up
	    }

	    iScrollPos = iCurScrollPos;
	});


});