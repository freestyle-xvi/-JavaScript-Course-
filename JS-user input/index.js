// easy method not good to use though

//var myName = window.prompt("Enter your name?")
//console.log("Hello", myName)

//harder but more practical method
document.getElementById("myButton").onclick = function() {
    var myName = document.getElementById("myText").value
    console.log("Hello", myName)
}