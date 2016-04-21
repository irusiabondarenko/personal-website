
  $("#intro").backstretch("pic/intro.jpg");
  $("#contact").backstretch("pic/aboutme.jpg");
  $('#about').backstretch('pic/aboutm.jpg');


  $(document).scroll(function() {
  var top = $('.intro-section').outerHeight()-2;
    if( $(this).scrollTop() > top) {
         $('.navbar-default').css("background-color", "rgba(0, 0, 0, 0.5)");
         $('#my-nav').css("padding-top", "0");
         $('#my-nav').removeClass('scrolled');
    } else {
        $('.navbar-default').css("background-color", "transparent");
	    $('#my-nav').addClass('scrolled'); 
	    $('#my-nav').css("padding-top", "10px");
    }
})

