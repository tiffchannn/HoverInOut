$(document).ready(function() {
  console.log('This page is working!');


  // when hovering on img
    // use attr replace the src with alt src
  // when hovering out of img
    // change the attr src back to original

  $('.image1').hover(function() {
    console.log('this has been hovered over')
    $(this).attr('src', 'totoro2.png');
  }, function() {
    $(this).attr('src', 'totoro.png');

  });

  $('.image2').hover(function() {
    console.log('this has been hovered over')
    $(this).attr('src', 'totoro2.png');
  }, function() {
    $(this).attr('src', 'totoro.png');
  });

  $('.image3').hover(function() {
    console.log('this has been hovered over')
    $(this).attr('src', 'totoro2.png');
  }, function() {
    $(this).attr('src', 'totoro.png');
  });

  $('.image4').hover(function() {
    console.log('this has been hovered over')
    $(this).attr('src', 'totoro2.png');
  }, function() {
    $(this).attr('src', 'totoro.png');
  });

});