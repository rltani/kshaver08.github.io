"use strict";
//1. Define the onclick handler
function display() {

	var output = $("#gallons").val();

	$("#gallonsDisplay").html(output);

  //var gallons = $("#gallons").val();
  //$("#gallonsDisplay").html() = gallons;

}

//2. Grab the button
$("button").on("click", display);