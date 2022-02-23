document.querySelector("#myButton").onclick = function() {

    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerHTML = "M.HASAN";
    h1.innerHTML = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "WHOAAAAAA!";
    p.forEach(element => element.innerText = "WHOA!");

    const buttons = document.querySelectorAll("button");
    //buttons[0].remove();
    buttons.forEach(element => element.remove());
}