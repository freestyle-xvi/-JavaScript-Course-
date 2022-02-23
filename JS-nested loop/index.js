// nested loops

//a loop inside of another loop

var symbol = window.prompt("Enter a symbol  ")

var rows = window.prompt("Enter a number of rows")

var columns = window.prompt("Enter a number of columns")

for (let i = 0; i < rows; i++) {
    for (let j = 0; i < columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}