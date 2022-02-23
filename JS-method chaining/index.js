// Method chaining
//calling one method after another , in one continous line of code

let user = "freestyle"

/*              long method more lines , inefficient.
let firstLetter = user.charAt(0)
firstLetter = firstLetter.toUpperCase()
user = firstLetter + user.slice(1)
*/

user = user.charAt(0).toUpperCase() + user.slice(1)

console.log(user);