// random numbers
//Math.random() = generates a pseudo-random between 0-1

var randomNum
var randomNum1
var randomNum2
var randomNum3
var randomNum4
var randomNum5
var randomNum6


randomNum = Math.floor(Math.random() * 6) //generates a random number between 0 - 5
randomNum1 = Math.floor(Math.random() * 6) + 1 // random number between 0 -6, uses the floor method to round down to a whole number
randomNum3 = Math.floor(Math.random() * 100) //generates a random number between 0 - 999
randomNum2 = Math.floor(Math.random() * 1000) //generates a random number between 0 - 999

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max = min + 1) + min)
}

randomNum4 = getRandomNum(1, 6)
randomNum5 = getRandomNum(1, 6)
randomNum6 = getRandomNum(1, 6)

console.log("\tRandom number betweeen 0-5 :", randomNum)
console.log("\t\tRandom number betweeen 0-6 :", randomNum1)
console.log("\t\t\tRandom number betweeen 0-999 :", randomNum2)
console.log("\t\t\t\tRandom number betweeen 0-99 :", randomNum3)

console.log("-----------------------------------------------------------------------------------------");
console.log(" |THE DICE.IO |");
console.log("\t\t\t\tRandom number on dice #1 :", randomNum4)
console.log("\t\t\t\tRandom number on dice #2 :", randomNum5)
console.log("\t\t\t\tRandom number on dice #3 :", randomNum6)