'use strict'

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
}

function toggleNavMenu() {
  var navMenu = $('nav');
  if (navMenu.hasClass('nav-open-mobile')) {
    navMenu.removeClass('nav-open-mobile');
  } else {
    navMenu.addClass('nav-open-mobile');
  }
}

var chartbook = document.getElementById('chartbook');

var hammer = new Hammer(chartbook);

hammer.on('swipeleft', function() {
  nextSlide();
});

hammer.on('swiperight', function() {
  previousSlide();
});

$('document').ready(function() {
  setSlide();
});
