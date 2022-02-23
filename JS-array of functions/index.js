//array of functions

function jump() {
    console.log("You jumped!")
}

function punch() {
    console.log("You punched!")
}

function kick() {
    console.log("You kicked!")
}

function block() {
    console.log("You blocked!")
}

let actions = [];

actions = [jump, punch, kick, block];
/*  this aint the best way to do it

for (let i = 0; i < actions.length; i++) {
    actions[i]();
}
*/

// better way to do it lmfao

actions.forEach(func => func());