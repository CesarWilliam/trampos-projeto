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
    	autoplayTimeout:2000,
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
});