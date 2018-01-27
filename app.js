

function smoothScroll() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}

function hideNav() {
  // hide .navbar first
  $(".navbar").hide();

  // fade in .navbar
  $(function () {
      $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
          if ($(this).scrollTop() > 500) {
              $('.navbar').fadeIn();
          } else {
              $('.navbar').fadeOut();
          }
      });
  });
}

$(function (){
  smoothScroll();
  hideNav();
})