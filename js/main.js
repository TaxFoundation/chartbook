'use strict'

// Initialize slide to display given any hash route
function setSlide() {
  if ($('.active-slide').length) {
    $('.active-slide').removeClass('active-slide');
  }

  var firstSlide = '#' + document.getElementsByTagName('section')[0].id;
  var slide = window.location.hash || firstSlide;
  var slideSection = $(slide);
  if (slideSection.length) {
    slideSection.addClass('active-slide');
  } else {
    window.location.hash = firstSlide;
    $(firstSlide).addClass('active-slide');
  }
}

function nextSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.next();
  if (newSlide.length) {
    window.location.hash = '#' + newSlide.attr('id');
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
  }
}

function previousSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.prev();
  if (newSlide.length) {
    window.location.hash = '#' + newSlide.attr('id');
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
  }
}

function changeSlide(slide) {
  window.location.hash = '#' + slide;
  setSlide();
  toggleNavMenu();
}

function toggleNavMenu() {
  var navMenu = $('#nav-menu');
  if (navMenu.hasClass('nav-open-mobile')) {
    navMenu.removeClass('nav-open-mobile');
  } else {
    navMenu.addClass('nav-open-mobile');
  }
}

// Use Hammer.js for swipe actions
var chartbook = document.getElementById('chartbook');
var menu = document.getElementById('nav-menu');

var slideSwipe = new Hammer(chartbook);
var menuSwipe = new Hammer(menu);

slideSwipe.on('swipeleft', function() {
  nextSlide();
});

slideSwipe.on('swiperight', function() {
  previousSlide();
});

menuSwipe.on('swipeleft', function() {
  toggleNavMenu();
})

$('document').ready(function() {
  setSlide();
});
