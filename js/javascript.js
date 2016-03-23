
	
  $("#intro").backstretch("pic/intro2.jpg");
  $("#contact").backstretch("pic/aboutme.jpg");
  $('#about').backstretch('pic/aboutm.jpg');



        
   $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop()===0) {
                $('.navbar-default').css("background-color", "transparent");
            } else {
				$('.navbar-default').css("background-color", "white");
				
			}
        });
		
   })
   
  

	$(window).scroll(function(){
		if ($(window).scrollTop()===0){
			$('#my-nav').removeClass('scrolled');
		}
		else{
			$('#my-nav').addClass('scrolled');    
		}
	});
	
	
