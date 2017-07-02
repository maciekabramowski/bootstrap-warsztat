'use strict';
$(function(){
    
//if ($(document).scrollTop() > 50){
////document.getElementById('nav-grab').classList.add('blue-background');
//$('#nav-grab').addClass('blue-background');
//} 

scrollNav();
    
$(window).scroll(function(){
    scrollNav();
});
    
//if ($(document).scrollTop() > 50){
////document.getElementById('nav-grab').classList.add('blue-background');
//$('#nav-grab').addClass('blue-background');
//} 
//else {
////   document.getElementById('nav-grab').classList.remove('blue-background'); 
//    $('#nav-grab').removeClass('blue-background');
//}

    
    
function scrollNav(){
    if ($(window).scrollTop() > 50){
//document.getElementById('nav-grab').classList.add('blue-background');
$('#nav-grab').addClass('blue-background');
} 
else {
//   document.getElementById('nav-grab').classList.remove('blue-background'); 
    $('#nav-grab').removeClass('blue-background');
}
}
    
    
    
    
 $("a[href*='#']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
//    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
//      var hash = this.hash;
        

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('body').animate({
        scrollTop: $(this.hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
      });
//    } // End if
  });
    
});