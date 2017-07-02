'use strict';
$(function(){
    
$(window).scroll(function(){
    
if ($(document).scrollTop() > 50){
document.getElementById('nav-grab').classList.add('blue-background');
} 
if ($(document).scrollTop() < 50){
   document.getElementById('nav-grab').classList.remove('blue-background'); 
}

    });
    
});