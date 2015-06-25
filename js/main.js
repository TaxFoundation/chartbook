'use strict';

// Initialize slide to display given any hash route
function setSlide() {
  if ($('.active-slide').length) {
    $('.active-slide').removeClass('active-slide');
    $('.active-li').removeClass('active-li');
  }

  var firstSlide = '#' + document.getElementsByTagName('section')[0].id;
  var slide = window.location.hash || firstSlide;
  var slideSection = $(slide);
  if (slideSection.length) {
    setSlideClasses(slideSection);
    $('li[onclick*="' + slide + '"').addClass('active-li');
  } else {
    window.location.hash = firstSlide;
    setSlideClasses($(firstSlide));
  }
}

function setSlideClasses(slide) {
  var nextSlide = slide.nextAll();
  var previousSlide = slide.prevAll();
  slide.removeAttr('class').addClass('active-slide');
  if (nextSlide.length) {
    nextSlide.removeAttr('class').addClass('next-slide');
  }

  if (previousSlide.length) {
    previousSlide.removeAttr('class').addClass('previous-slide');
  }
}

function nextSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.next();
  if (newSlide.length) {
    slideTransition(slide, newSlide, 'next');
  }
}

function previousSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.prev();
  if (newSlide.length) {
    slideTransition(slide, newSlide, 'previous');
  }
}

function slideTransition(slide, newSlide, direction) {
  var otherDirection;
  if (direction === 'next') {
    otherDirection = 'previous';
  } else if (direction === 'previous') {
    otherDirection = 'next';
  }

  window.location.hash = '#' + newSlide.attr('id');
  $('.active-li').removeClass('active-li');
  $('li[onclick*="#' + newSlide.attr('id') + '"').addClass('active-li');
  slide.addClass(otherDirection + '-slide').removeClass('active-slide');
  newSlide.removeClass(direction + '-slide').addClass('active-slide');
}

function changeSlide(slide) {
  window.location.hash = slide;
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
var chartbook = document.getElementById('slides');
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
