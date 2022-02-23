//Template literals = another way of formatting output, can contain placeholders for formatters and inserting : strings/values/variables/etc
//                               1 backticks
//                                ${} placeholder
//                                 can use multiple lines embed expressions

let firstName = "freestyle";
let lastName = "XVI";


//long method be a lot of effort to type and stuff lmao
//console.log("Hello " + firstName + " " + lastName + "!")

//template literal methods ↓↓

console.log(`hello
 ${firstName}
 ${lastName}
  !!!`)

console.log("__________________________________________________________");

//template literals with an embedded expression, eg : a shopping site ↓↓

let price = 100;
let taxRate = 0.05;
let total;

console.log(`The price is : R ${price}`)
console.log(`The tax rate is : ${taxRate}%`)
console.log(`Tax is: R${price * taxRate}`);
console.log(`Total is : R${total = price + (price * taxRate)}`)