document.querySelector("#myButton").onclick = function() {

    const h1 = document.querySelector("#myH1");
    const body = document.querySelector("body")
    console.log(h1.style);


    body.style.backgroundColor = "#454240";

    h1.style.color = "#b8bb26";
    h1.style.fontFamily = "Kabal";
    h1.style.textAlign = "center";
    h1.style.border = "4px dashed";
    h1.style.borderColor = "#dfe3d1";
    h1.style.fontSize = "55px";
}