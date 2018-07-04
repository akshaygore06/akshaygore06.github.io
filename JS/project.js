 // portfolio
$(document).ready(function() {
    $('.gallery ul li a').click(function() {
       var itemID = $(this).attr('href');
       $('.gallery ul').addClass('item_open');
       $(itemID).addClass('item_open');
       return false;
   });
   
   $('.close').click(function() {
       $('.port, .gallery ul').removeClass('item_open');
       return false;
   });

  });