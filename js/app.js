// <!--
// ======================================================================
// Project Name    : Lab1 - JS
// Fiel Name       : app.js
// Encoding        : UTF-8
// Due Date   : February 23
//
// Copyright © 2018 Kenta Kodashima. All rights reserved.
//
// This source code or any portion thereof must not be
// reproduced or used in any manner whatsoever.
// ======================================================================
// -->

// Function1
function makeAbba(a, b) {
	return a + b + b + a
}

document.write("<h1>Function 1</h1>");
document.write(makeAbba("Hi", "Bye"));

// Function2
function endsLy(s) {
	if (s.includes("ly")) {
		return true
	} else {
		return false
	}
}

document.write("<h1>Function 2</h1>");
document.write("'oddly' is: " + endsLy("oddly"));
document.write("<br />");
document.write("'oddy' is: " + endsLy("oddy"));

// Function 3
function firstHalf(str) {
	//var separatedStr = str.split("");
	if (str.length % 2 == 0) {
		return str.substring(0, str.length / 2);
	} else {
		return "The length of the string must be even";
	}
}

//document.write("<h1>Function 3</h1>")
document.write("<h1>Function 3</h1>");
document.write("'WooHoo' is: "+ firstHalf("WooHoo"));

//Function 4
function right2(str) {
	var strArray = str.split("");
	var last2Chars = strArray.splice(strArray.length-2, 2);
	return last2Chars.concat(strArray).join("");
}

document.write("<h1>Function 4</h1>");
document.write(right2("Hello"));
document.write("<br />")
document.write(right2("java"));

// Function 5
function conCat(a, b) {
	var separatedA = a.split("");
	var separatedB = b.split("");
	if (separatedA[separatedA.length-1] == separatedB[0]) {
		separatedB.shift();
		return separatedA.concat(separatedB).join("");
	} else {
		return separatedA.concat(separatedB).join("");
	}
}

document.write("<h1>Function 5</h1>");
document.write("'abc' + 'cat' is: " + conCat("abc", "cat"));
document.write("<br />");
document.write("'dog' + 'cat' is " + conCat("dog", "cat"));

// Function 6
function frontAgain(str) {
	var separatedStr = str.split("");
	if (separatedStr[0] == separatedStr[separatedStr.length-2] &&
		 	separatedStr[1] == separatedStr[separatedStr.length-1]) {
				return true;
	} else {
		return false;
	}
}

document.write("<h1>Function 6</h1>");
document.write("'edited' is: " + frontAgain("edited"));
document.write("<br />");
document.write("'edit' is: " + frontAgain("edit"));

// Function 7
function deFront(str) {
	var strArray = str.split("");
	if (strArray[0] == "a" && strArray[1] == "b") {
		return strArray.join("");
	} else if (strArray[0] == "a") {
		strArray.splice(1, 1);
		return strArray.join("");
		//return strArray.shift().join("");
	} else if (strArray[1] == "b") {
		strArray.splice(0, 1);
		return strArray.join("");
	} else {
		strArray.splice(0, 2);
		return strArray.join("");
	}
}

document.write("<h1>Function 7</h1>");
document.write("'Hello' is: " + deFront("Hello"));
document.write("<br />");
document.write("'away' is: " + deFront("away"));

// Function 8
function withoutX2(str) {
	var strArray = str.split("");
	if (strArray[0] == "x" && strArray[1] == "x") {
		strArray.splice(0, 2);
		return strArray.join("");
	} else if (strArray[0] == "x") {
		strArray.splice(0, 1);
		return strArray.join("");
		//return strArray.shift().join("");
	} else if (strArray[1] == "x") {
		strArray.splice(1, 1);
		return strArray.join("");
	} else {
		return strArray.join("");
	}
}

document.write("<h1>Function 8</h1>");
document.write("'xHi' is: " + withoutX2("xHi"));
document.write("<br />");
document.write("'Hxi' is: " + withoutX2("Hxi"));
document.write("<br />");
document.write("'Hi' is: " + withoutX2("Hi"));

// Function 9
function lastChars(a, b) {
	var separatedA = a.split("");
	var separatedB = b.split("");
	return separatedA[0] + separatedB[separatedB.length-1];
}

document.write("<h1>Function 9</h1>");
document.write("'last' and 'chars' are: " + lastChars("last", "chars"));
document.write("<br />");
document.write("'yo' and 'java' are: " + lastChars("yo", "java"));

// Function 10
function middleTwo(str) {
	var strArray = str.split("");
	if (strArray.length == 2) {
		return "The string length must be at least 2.";
	} else if (strArray.length % 2 != 0) {
		return "The string length must be an even number.";
	} else {
		return strArray[strArray.length/2-1] + strArray[strArray.length/2];
	}
}

document.write("<h1>Function 10</h1>");
document.write("'string' becomes: " + middleTwo("string"));
document.write("<br />");
document.write("'Practice' becomes: " + middleTwo("Practice"));
