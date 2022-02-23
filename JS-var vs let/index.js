//var vs let

//js standard meant to ensure the interoperability of web pasges across different web browsers.
//scope = where a variable is accesible
//let = variables with a blocked scope
//var = variables with a function scope

function doSomething() {
    for (var i = 1; i <= 3; i++) {
        console.log(i);
    }
}

doSomething()
console.log(i);

var name = "Phoenix"
let name = "Isidore"