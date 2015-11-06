// STICKY NAV - HOME

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()*.8) {
    $("#navigation-home").addClass("head-collapsed").removeClass("head-home");
  } else {
    $("#navigation-home").addClass("head-home").removeClass("head-collapsed");
  }
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation-home").addClass("head-fixed");
  } else {
    $("#navigation-home").removeClass("head-fixed");
  }
});

// STICKY NAV - DEFAULT

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()*.8) {
    $("#navigation-default").addClass("head-collapsed").removeClass("head-default");
  } else {
    $("#navigation-default").addClass("head-default").removeClass("head-collapsed");
  }
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation-default").addClass("head-fixed");
  } else {
    $("#navigation-default").removeClass("head-fixed");
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

// LOAD RANDOM HERO IMAGES

var images = ['bg-image-01.jpg',
              // 'bg-image-03.jpg',
              'bg-image-07.jpg',
              'bg-image-08.jpg'];
$('<img src="_img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#bg-image-hero');