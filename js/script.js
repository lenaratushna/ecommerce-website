"use strict";

$(function(){
   $('.category__title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.category__list').toggleClass('open');
   });
});