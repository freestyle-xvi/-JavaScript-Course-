//math

// math is an object that provides basic mathematics functionality and constants

var myNum

//myNum = Math.round(3.9) //rounds up a given value 
//myNum = Math.floor(3.9) //rounds a number down
//myNum = Math.ceil(3.1) //rounds up to next whole number
//myNum = Math.pow(3, 3) // the power of a value
//myNum = Math.sqrt(64) //square root of a value
//myNum = Math.abs(-1) //finds the absolute value of a number
//myNum = Math.min(11, 23, 45, 54, 78) // finds the minimum value in a set of numbers
//myNum = Math.max(23, 65, 87, 12, 87, 76) //finds the maximum value in a set of  numbers
//myNum = Math.PI //displays the value of pi

//solve for the hypotenuse of a triangle

var a = window.prompt("Enter side A ")
var b = window.prompt("Enter side B ")
var c

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log("Side C =", c);