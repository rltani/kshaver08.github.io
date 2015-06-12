"use strict";

//P3, 4A
var arrAvg = function(s){
	var result = '';

	for(var i = 0; i < s.length; i++)
		result = result*1 + s[i];

	return result/(s.length);
};

/*
var arrSum = function(data){
	"use strict";
	// Compute the sum of the array elements
	var sum = 0;
	// Add each value to sum
	data.forEach(function(value) { sum += value; });
	return sum;      //15
}

arrSum([2, 3, 5]);*/




//P3, 4B;
var arrMax = function(k){
	k = k.sort();

	for(var i = 0; i < k.length; i++)
		return k[k.length-1];
};




//P3, 4C;
var isMember = function(array, string){
	if(array.indexOf(string) === -1)
		return "False";
	else
		return "True";
};








