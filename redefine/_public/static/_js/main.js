// STICKY NAV - HOME

// $(window).on('scroll', function() {
//   var mq = window.matchMedia('@media all and (min s-width: 1100px)');
//   if(mq.matches) {
//     scrollPosition = $(this).scrollTop();
//     if (scrollPosition >= $('#hero').height()) {
//       $("#navigation-home").addClass("head-collapsed head-fixed").removeClass("head-home");
//     } else {
//       $("#navigation-home").addClass("head-home").removeClass("head-collapsed head-fixed");
//     }
//   }
// });

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation-home").addClass("head-collapsed head-fixed").removeClass("head-home");
  } else {
    $("#navigation-home").addClass("head-home").removeClass("head-collapsed head-fixed");
  }
});

// STICKY NAV - DEFAULT

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#hero').height()) {
    $("#navigation-default").addClass("head-collapsed head-fixed").removeClass("head-default");
  } else {
    $("#navigation-default").addClass("head-default").removeClass("head-collapsed head-fixed");
  }
});

// FAQ - LIST

$(window).on('scroll', function() {
  scrollPosition = $(this).scrollTop();
  if (scrollPosition >= $('#navigation-default').height() + $('#hero').height()) {
    $("#faq-list").addClass("faq-list-fixed");
  } else {
    $("#faq-list").removeClass("faq-list-fixed");
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
              'bg-image-07.jpg',
              'bg-image-08.jpg'];
$('<img src="_img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#bg-image-hero');

// FAQ - SCROLL TO AND CLICK HIGHLIGHT

$("#faq-general-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-general").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-general-button").addClass("selected");
});
$("#faq-about-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-about").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-about-button").addClass("selected");
});
$("#faq-services-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-services").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-services-button").addClass("selected");
});
$("#faq-equipment_chemicals-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-equipment_chemicals").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-equipment_chemicals-button").addClass("selected");
});
$("#faq-careers-button").click(function() {
  $('body').animate({ scrollTop: $("#faq-careers").offset().top-60 }, 500);
  $(".faq-list li").removeClass("selected");
  $("#faq-careers-button").addClass("selected");
});

