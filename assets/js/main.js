$(document).ready(function(){

  // Expand menu item
  $('.menu li:has(ul)').click(function(e) {
		e.preventDefault();

		if($(this).hasClass('activado')) {
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}

		$('.menu li ul li a').click(function() {
			window.location.href = $(this).attr('href');
		})
	});


    // Scroll Menu

  $(window).on('scroll', function(){
    if($(window).scrollTop()>20){
        $('.header').addClass('menu_bg');
    }else{
        $('.header').removeClass('menu_bg');
    }
    
    
  });



    //Banner Book carousel
    $(".banner-book").owlCarousel({
        autoplay:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: true,
        responsive:{
            0:{
              items:1,
              nav:true,
              loop:true,
              dots: true
            },
            1050:{
              items:1,
              nav:true,
              loop:true,
              dots: true
            },
            1240:{
              items:1,
              nav:true,
              loop:true,
              dots: true
            },
            1241:{
                items:1,
                nav:true,
                loop:true,
                dots: true
            }
        }
    });


    //Banner Book carousel
    $(".books-slider").owlCarousel({
      autoplay:true,
      loop:true,
      margin:10,
      responsiveClass:true,
      dots: false,
      nab: true,
      responsive:{
          0:{
            items:1,
            nav:true,
            loop:true
          },
          570:{
            items:2,
            nav:true,
            loop:true
          },
          768:{
            items:3,
            nav:true,
            loop:true
          },
          997:{
            items:4,
            nav:true,
            loop:true
          },
          1241:{
              items:5,
              nav:true,
              loop:true
          }
      }
  });


  // Bangladesh Telephone
  $("#telephone").intlTelInput({
    allowDropdown:true,
    separateDialCode:true,
    preferredCountries: ["bd","gb" ]

  });

   







  });