"use strict";


var replaceContent2 = function(){
  $("h2").html("Sam and Janet Evening!");
  $("button").hide();
};




var replaceContent1 = function(){
  $("h2").html("Sam and Janet!");
  $("button").html("Sam and Janet who?");
  $("button").on("click", replaceContent2);
};





var main = function () {

  $("button").on("click", replaceContent1);
  
};
 
  $(document).ready(main);