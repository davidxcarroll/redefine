// STICKY NAV

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()*.8) {
    $("#navigation").addClass("head-collapsed").removeClass("head-home");
  } else {
    $("#navigation").addClass("head-home").removeClass("head-collapsed");
  }
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation").addClass("head-fixed");
  } else {
    $("#navigation").removeClass("head-fixed");
  }
});

// MOBILE NAV EXPANDED

$(document).ready(function(){
  $("#mobile-nav-button").click(function(){
    $("#navigation").toggleClass("mobile-nav-expanded");
    $("#icon-nav-mobile").toggleClass("icon-nav-hide");
    $("#icon-nav-mobile-close").toggleClass("icon-nav-hide");
  });
});