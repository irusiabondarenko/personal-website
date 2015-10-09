//$.backstretch('pic/intro.jpg');

/*$('body').append('<img class="preload-image" src="pic/contact.jpg"/>');

	$('#about').waypoint(function(direction){
	
		if($('.preload-image').length){
			$('.preload-image').remove();
		}
		
		$('.backstretch').remove();
	
		if (direction=='down'){
			$.backstretch('pic/contact.jpg');
		}else{
			$.backstretch('pic/intro.jpg');
		}
	});*/
	
  $("#intro").backstretch("pic/intro.jpg");
  $("#contact").backstretch("pic/contact.jpg")
   $("#about").backstretch("pic/about.jpg")