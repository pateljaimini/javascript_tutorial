// 1.parentelement :-   jo koi parent nai hoy to null return karse
/*document.getElementById("inner").parentElement.style.background = "green";

var a = document.getElementById("inner").parentElement;
console.log(a);*/


// 2. parentnode
/*var a = document.getElementById("main").parentNode;
console.log(a);*/

// 3.children :- only return inner tags....not all details like comment or text..etc
/*document.getElementById("outer").children[1].style.background = "red";

var a = document.getElementById("outer").children[1];
console.log(a);*/


// 4. childnodes :-  return everything inner tags,text,comment etc
/*document.getElementById("outer").childNodes[1].style.background = "red";

var a = document.getElementById("outer").childNodes[1];
console.log(a);*/

// 5.firstelementchild :---  return first tag
/*document.getElementById("inner").firstElementChild.style.background = "red";
var a = document.getElementById("inner").firstElementChild;

console.log(a);*/

// 6.lastelementchild :-  return last tag

/*document.getElementById("inner").lastElementChild.style.background = "red";
var a = document.getElementById("inner").lastElementChild;

console.log(a);*/

// 7.firstchild
// document.getElementById("inner").firstChild.style.background = "red"; not possible bcz first occured text and it has space.so,
// we can not styling of space
/*var a = document.getElementById("inner").firstChild;

console.log(a);*/

// 8.lastchild :- similar to first child but it returns last element
/*var a = document.getElementById("inner").lastChild;

console.log(a);
*/

/*
var a = document.getElementById("child-c").firstChild;
var a = document.getElementById("child-c").lastChild;
console.log(a);*/

// 9.previous element sibling :- return previous tag
/*document.getElementById("child-c").previousElementSibling.style.background = "red";
var a = document.getElementById("child-c").previousElementSibling;
console.log(a);*/

// 10.next element sibling :- return next tag
/*document.getElementById("child-c").nextElementSibling.style.background = "red";
var a = document.getElementById("child-c").nextElementSibling;
console.log(a);*/

// 11.previoussibling :- return previous tag,text,commet etc
/*
var a = document.getElementById("child-c").previousSibling;
console.log(a);*/

// 12.nextsibling :- return next tag,text,commet etc
/*
var a = document.getElementById("child-c").nextSibling;
console.log(a);*/