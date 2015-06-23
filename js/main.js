'use strict'

function setSlide() {
  if ($('.active-slide').length) {
    $('.active-slide').removeClass('active-slide');
  }

  var slide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  $(slide).addClass('active-slide');
}

function nextSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.next();
  if (newSlide.length) {
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
    window.location.hash = '#' + newSlide.attr('id');
  }
}

function previousSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.prev();
  if (newSlide.length) {
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
    window.location.hash = '#' + newSlide.attr('id');
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

$('document').ready(function() {
  setSlide();
});
