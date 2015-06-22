'use strict'

function setSlide() {
  var slide = window.location.hash || '#' + document.getElementsByTagName('section')[0].id;
  $(slide).addClass('active-slide');
};

function nextSlide() {
  //TODO write next slide function
};

function previousSlide() {
  //TODO write previous slide function
};

$('document').ready(function() {
  setSlide();
});
