//array.reduce()
//reduces an array to a single value. The return value of the call back function is the accumulated result, and is provided  as an argument in the next call to the callback function

let letters = ["F", "R", "E", "E", "S", "T", "Y", "L", "E"]

function combineLetters(total, nextLetter, index, array) {
    return total + nextLetter
}
let word = letters.reduce(combineLetters) //in the array 'letters' there are multiple single letters stored in it, the reduce method then puts all individual values in array into one value 

console.log(word);