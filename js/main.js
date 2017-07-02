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
    
});