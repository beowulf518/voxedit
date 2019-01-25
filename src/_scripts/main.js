// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Nav from '../_modules/nav/nav';
import Swiper from 'swiper';
require('../_modules/header/header');
require('./fileDownload.js');
import ScrollReveal from 'scrollreveal';


$(() => {


  $('.sub-menu-item').on('click', function(){
      this.classList.add('link-active');
  });
  
  
  
  $('.download_win').on('click', function(){
    window.location = "./voxeditor-confirm.html?version=win"
    
  }); 
  $('.download_mac').on('click', function(){
    window.location = "./voxeditor-confirm.html?version=mac"
    
  }); 
  $('.download_linux').on('click', function(){
    window.location = "./voxeditor-confirm.html?version=linux"
  }); 

  // $(document).on("click", "a.download_win", function () {
  //   $.fileDownload('../README.md.zip')
  //       .done(function () { alert('File download a success!'); })
  //       .fail(function () { alert('File download failed!'); });
 
  //   return false; //this is critical to stop the click event which will trigger a normal file download
  // });

  var swiper1 = new Swiper('.swiper-container1', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button1-next',
      prevEl: '.button1-prev'
    },
    pagination: {
      el: '.pag1',
    }
  });

  var swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button2-next',
      prevEl: '.button2-prev'
    },
    pagination: {
      el: '.pag2',
    }
  });

  var swiper3 = new Swiper('.swiper-container3', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.button3-next',
      prevEl: '.button3-prev'
    },
    pagination: {
      el: '.pag3',
    }
  });

  
  new Nav();

  $('.ga-event').on('click', function(){
    var elem = $(this);
    ga('send', 'event', elem.data('gacategory') , elem.data('gaactions'), elem.data('galabel'));
  });

  $('.nav-list_item-language').on('click', function(){
    var elem = $('.nav-list-language-items');
    var displayAttr = elem.css("display");
    var seletedLang = $('#language-title').text();

    if(displayAttr === "none"){
      var seletedCheck = $('.nav-language_'+seletedLang);
      seletedCheck.css("display", "block");
      seletedCheck.css("color", "#3abeef");
      elem.css("display", "block");

    }else{
      elem.css("display", "none"); 
    }
    
  });

  $('.language-item').on('click', function(){
    var thiselem = $(this);
    var elem = $('.nav-list-language-items');
    console.log(thiselem.children('p').text());
    //alert(thiselem.childNodes[1].val());
    var clickedLang = thiselem.children('p').text();
    var currentPath = window.location.pathname;
    //var currentPathArray = currentPath.split("/");
    var languageMarks = ['/cn', '/jp', '/kr'];
   
    if(clickedLang == "English"){
      for(var i=0; i<languageMarks.length; i++){
        if(currentPath.includes(languageMarks[i])){
          currentPath=currentPath.replace(languageMarks[i],"");
          window.location.pathname = currentPath;
        }
      }
    }else if(clickedLang == "Japanese"){
      if(currentPath.includes("/cn")){
        currentPath=currentPath.replace("/cn","/jp"); 
      }else if(currentPath.includes("/kr")){
        currentPath=currentPath.replace("/kr","/jp");
      }else if(currentPath.includes("/jp")){
        //do nothing.
      }else{
        currentPath="/jp"+currentPath;
      }
      window.location.pathname = currentPath;
    }else if(clickedLang == "Chinese"){
      if(currentPath.includes("/jp")){
        currentPath=currentPath.replace("/jp","/cn");     
      }else if(currentPath.includes("/kr")){
        currentPath=currentPath.replace("/kr","/cn");
      }else if(currentPath.includes("/cn")){
        //do nothing.
      }else{
        currentPath="/cn"+currentPath;
      }
      window.location.pathname = currentPath;
    }else if(clickedLang == "Korean"){
      if(currentPath.includes("/jp")){
        currentPath=currentPath.replace("/jp","/kr");     
      }else if(currentPath.includes("/cn")){
        currentPath=currentPath.replace("/cn","/kr");
      }else if(currentPath.includes("/kr")){
        //do nothing.
      }else{
        currentPath="/kr"+currentPath;
      }
      window.location.pathname = currentPath;
    }
    elem.css("display","none" );
    // var elem = $(this);
    // var clickedLang = elem.find("p").text();
    // $('.language-title').text(clickedLang);
    
  });
  

  // Faqs page accordion
  let $item = $('.collapsible');

  $item.on('click', function() {
    //$(this).toggleClass('active');
    //$(this).find('.content').toggleClass('active');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });


  // Not finished
  //*var ScrollReveal = require('scrollreveal');

  

  

});
