//String Methods
//useful string properties & methods

var myName = "Phoenix Isidore"
var myStreet = "53 Penlyn Avenue"
var myCity = "Get Good Town 2121"
var myPhone = "078-261-2121"


console.log("\n", myName);
console.log("\nthere are", myName.length, "letters in my name.")
console.log("\nThe 6th letter in my name is :", myName.charAt(6))
console.log("\nThe space in my name is at index number :", myName.indexOf(" "))
console.log("\nThe last instance of the letter 'o' in my name is at item index :", myName.lastIndexOf("o")); //last item index of a certain letter in a string
console.log("\n", myName.trim(" ")); // gets rid of all spaces
console.log("\nName all in caps : ", myName.toUpperCase());
console.log("\nName in lower case only :", myName.toLowerCase());

var firstName = myName.slice(0, 7)
console.log("\nMy First Name sliced :", firstName);

var lastName = myName.slice(7, 16)
console.log("\nThe last name in my full name is :", lastName);

var myAddress = myStreet.concat(", ", myCity)
console.log("\nMy address is :", myAddress);

myPhone = myPhone.replaceAll("-", " ") // replaces all '-' with spaces
console.log("\nMy phone number is :", myPhone);