// 1.insertadjacentelement:--------

var newElement = document.createElement("h2");

var newText = document.createTextNode("This is a paragraph");
newElement.appendChild(newText);

var target = document.getElementById("test");

target.insertAdjacentElement("beforebegin",newElement);

// target.insertAdjacentElement("afterbegin",newElement);
// target.insertAdjacentElement("afterend",newElement);
// target.insertAdjacentElement("beforeend",newElement);

// 2. insertadjacenthtml:----------
var newElement = "<h2>summary of web</h2>";
var target = document.getElementById("test");

target.insertAdjacentHTML("afterbegin",newElement);

// 3. insertadjacenttext:--------
var newText = "this is a ending of summary";
var target = document.getElementById("test");

target.insertAdjacentText("afterend",newText);