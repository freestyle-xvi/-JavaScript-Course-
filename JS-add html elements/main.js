// create html  elements
// h1.innterHTML (vulnerable to XSS attacks)
// h1.innerText (better)


//not safe because inner html is vulnerable to cross site scripting
const h1 = document.createElement("h1");
h1.innerHTML = "<u>Phoenix Isidore</u>";
document.body.append(h1)


//is safer due to it bing innerText instead of innerHTML
const h2 = document.createElement("h2");
const underline = document.createElement("u");
underline.innerText = "Callahan-Kingsley";
h2.append(underline);
document.body.append(h2);

const h3 = document.createElement("h3");
const italic = document.createElement("i")
italic.innerText = "Freestyle";
h3.append(italic);
document.body.append(h3);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "| XVI |  XXV | VI |";
p.append(bold);
document.body.append(p)