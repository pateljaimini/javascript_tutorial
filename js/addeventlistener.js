// javascript addEventListener method--------------------
// 1. assign events using html dom------
// document.getElementById("ul").onmouseenter = test;

// function test()
// {
//     document.getElementById("ul").style.backgroundColor = "green"; 
// }


// 2.addeventlistener------------
/*document.getElementById("ul").addEventListener("mouseenter",test);

function test()
{
    document.getElementById("ul").style.backgroundColor = "green"; 
}

document.getElementById("ul").addEventListener("click",function()
{
    document.getElementById("ul").style.border = "1px solid red";  
});*/

// same event in one target and use "this" keyword ,this bcz if i don't write more targeting id,classname or tagname in {} braces

/*document.getElementById("ul").addEventListener("click",test);

function test()
{
    this.style.backgroundColor = "green"; 
}

document.getElementById("ul").addEventListener("click",function()
{
    this.style.border = "1px solid red";  
});*/

// use capture we can queryselector too. optional
/*
document.getElementById("inner").addEventListener("click",function(){
    alert("inner div");
},true);
document.getElementById("outer").addEventListener("click",function(){
    alert("outer div");
},true);
*/
// true value this first outer div then inner div otherwise ultu

// 3....removeeventlistener...........
// mouse navbar par lai ne leave kru to color change but mouse navbar par lai jai ne click kru ane p6i leave kru to color change nai thay
/*document.getElementById("ul").addEventListener("mouseleave",test);
document.getElementById("ul").addEventListener("click",abc);

function test()
{
    document.getElementById("ul").style.backgroundColor = "green"; 
}
function abc()
{
    document.getElementById("ul").removeEventListener("mouseleave",test);
}*/




