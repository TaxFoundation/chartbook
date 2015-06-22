'use strict'

function setSlide() {
  var slide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  $(slide).addClass('active-slide');
};

function nextSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  slide.removeClass('active-slide').next().addClass('active-slide');
  window.location.hash = '#' + slide.next().attr('id');
};

function previousSlide() {
  var currentSlide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  var slide = $(currentSlide);
  slide.removeClass('active-slide').prev().addClass('active-slide');
  window.location.hash = '#' + slide.prev().attr('id');
};

$('document').ready(function() {
  setSlide();
});
