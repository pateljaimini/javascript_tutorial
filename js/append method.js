// 1.appendchild method:--------
/*var newElement = document.createElement("h2");
var newtext = document.createTextNode("inner div");


// now kya text kya element ma append karvano 6e te------

newElement.appendChild(newtext);
// document.getElementById("inner").appendChild(newElement);
document.getElementById("inner").insertBefore(newElement);


console.log(newElement);
console.log(newtext);*/

// 2.insertbefore method:----(kona this append karvu che,kona pehla append karvu che)
var newElement = document.createElement("h2");
var newtext = document.createTextNode("inner div");
newElement.appendChild(newtext);

var target = document.getElementById("inner");

target.insertBefore(newElement,target.childNodes[5]);

var target1 = document.getElementById("inner").childNodes;

console.log(target1);


