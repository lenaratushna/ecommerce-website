"use strict";

$(function(){
   $('.category__title').click(function(){
      $(this).toggleClass('open');
      $(this).next('.category__list').toggleClass('open');
   });

   $('.header__cart, .cart__title, .cart__button').click(function(){
       $('.cart').toggleClass('open');
   });

   $('.header__sign-in').click(function(){
       $('.black-fill,.modal').toggleClass('open');
       $('body').css('overflow', 'hidden');
   });

   $('.modal__close, .black-fill').click(function(){
       $('.black-fill,.modal').toggleClass('open');
       $('body').css('overflow', '');
   });
});
