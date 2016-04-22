
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

$("a[href^='http://']").attr("target","_blank");
$("#icons a[href^='http://']").attr("target","_blank");

//scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});