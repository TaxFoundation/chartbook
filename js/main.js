'use strict'

function setSlide() {
  var slide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  $(slide).addClass('active-slide');
};

function nextSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.next();
  if (newSlide.length) {
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
    window.location.hash = '#' + newSlide.attr('id');
  }
};

function previousSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  var newSlide = slide.prev();
  if (newSlide.length) {
    slide.removeClass('active-slide');
    newSlide.addClass('active-slide');
    window.location.hash = '#' + newSlide.attr('id');
  }
};

$('document').ready(function() {
  setSlide();
});
