// Loader page 
setTimeout(function(){
	$('#loader').fadeToggle();
}, 5000)
// wow js
new WOW().init();
// For adding active class in Nav menu item
$(window).scroll(function(){
	console.log($(window).scrollTop())
	
	var couting_scroll = $(window).scrollTop()
	if(couting_scroll<=609){
		$(".home1").addClass("active").siblings().removeClass("active")
	}
	else if(couting_scroll>610 && couting_scroll<1015){
		$(".about2").addClass("active").siblings().removeClass("active")   
	}
	else if(couting_scroll>1015 && couting_scroll<1530){
		$(".game3").addClass("active").siblings().removeClass("active")
	}
	else if(couting_scroll>1530 && couting_scroll<2240){
		$(".spin4").addClass("active").siblings().removeClass("active")   
	}
	else if(couting_scroll>2240 && couting_scroll<3100){
		$(".price5").addClass("active").siblings().removeClass("active")
	}
	else if(couting_scroll>3100 && couting_scroll<3800){
		$(".faq6").addClass("active").siblings().removeClass("active")
	}
	else if(couting_scroll>=3801){
		$(".payment7").addClass("active").siblings().removeClass("active")   
	}
})
// Register and Login button
$(".close").click(function(){
    $(".form").fadeOut();
})
$(".register").click(function(){
    $(".register_form").fadeIn();
})
$(".log_in").click(function(){
    $(".login_form").fadeIn();
})
// Nav Bar Fixed
	$(window).scroll(function(){
		var couting_scroll = $(window).scrollTop()
		if(couting_scroll>90){
			$(".nav_fix").addClass("fixed")
		}
		else{
			$(".nav_fix").removeClass("fixed")   
		}
	})
// For adding active class in accordian plugin
	$(".card").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
// Nice scroll js
	$("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true}); 
  
// parallax in about us section
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// Go To Top Button 
const toTop = document.querySelector("#backTotop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// $("#backTotop").click(function(){
// 	$('html').animate({ scrollTop:0 },1000);
// })
// about us slick slider in 320 device
// $('.about_us_slider').slick({
// 	dots: true,
// 	infinite: false,
// 	speed: 300,
// 	autoplay: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	responsive: [
// 	  {
// 		breakpoint: 1024,
// 		settings: {
// 		  slidesToShow: 3,
// 		  slidesToScroll: 3,
// 		  infinite: true,
// 		  dots: true
// 		}
// 	  },
// 	  {
// 		breakpoint: 600,
// 		settings: {
// 		  slidesToShow: 2,
// 		  slidesToScroll: 2
// 		}
// 	  },
// 	  {
// 		breakpoint: 320,
// 		settings: {
// 		  slidesToShow: 1,
// 		  slidesToScroll: 1,
// 		  dots: true,
// 		  infinite: true,
// 		  speed: 300,
// 		  autoplay: true,
// 		  arrows: true,
// 		}
// 	  }
// 	]
//   });
