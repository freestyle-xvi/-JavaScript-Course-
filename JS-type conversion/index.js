// TYPE CONVERSION
//numbers, strings, boolean
//change the data type of a value to another

var age = window.prompt("enter your age : ")

console.log("happy birthday")

age++

age = Number(age)
console.log(typeof age)
console.log(age)

console.log("-----------------------");

var myvar
    //myvar = String(3.14)

myvar = Boolean("pizza")

console.log(typeof myvar)
console.log(myvar);