// Date and Time Object
//date object = represents a moment in time since epoch (reference point)

//date = new Date(0) //gets date from argument
date = new Date() // gets current date
newDate = new Date()
    //date = new Date(2022, 8, 16, 3, 3, 3) // get a unique date by passing arguments (can pass through 7 arguments : Year, Month, Day, Hours, Minutes, seconds and milliseconds)
    //date = new Date("September 16, 2022 21:21:21:21") //passing a string through the argument

let year = date.getFullYear()
let month = date.getMonth()
let dayOfWeek = date.getDay()
let dayOfMonth = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()

console.log("The current year is :", year);
console.log("The current month is :", month);
console.log("The current day of the week is :", dayOfWeek);
console.log("The current day of the month is :", dayOfMonth);
console.log("The current hour is :", hours);
console.log("The current minute is :", minutes);
console.log("The current second is :", seconds);
console.log("The current millisecond is :", milliseconds);
console.log("the current date is :", date);

newDate.setFullYear(2023)
newDate.setMonth(8)
newDate.setDate(16)
newDate.setHours(21)
newDate.setMinutes(21)
newDate.setSeconds(21)
newDate.setMilliseconds(21)


console.log("THE NEW DATE IS :", newDate);