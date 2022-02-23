// for in loop

let letters = ["G", "E", "T", " ", "G", "O", "0 ", "D"]

let Car = {
        make: "Honda",
        model: "NSX",
        year: 2005,
        color: "Cherry Red"

    }
    /*
    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
    }
    */

// for (let i in letters) {
//     console.log(letters[i]);
// }

for (let property in Car) {
    console.log(property);
}