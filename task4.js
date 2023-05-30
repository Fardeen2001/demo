let items=document.querySelector('#items');
//ParentNode
//console.log(items);
//console.log(items.parentNode.parentNode.parentNode);
//items.parentNode.style.backgroundColor="blue"

//ParentElement
//console.log(items.parentElement.parentElement.parentElement);
//items.parentElement.style.backgroundColor="blue"

//LastChild
//console.log(items.lastChild)

//firstChild
//console.log(items.firstChild)

//LastelementChild
//console.log(items.lastElementChild)
//items.lastElementChild.style.color="green"

//FirstelementChild
//console.log(items.firstElementChild)
//items.firstElementChild.textContent="hello 1"

//nextsiblings
//console.log(items.nextSibling)

//nextElementsiblings
// console.log(items.nextElementSibling)

//pervioussiblings
// console.log(items.previousSibling)

//previousElementsiblings
//console.log(items.previousElementSibling)

// createElement
let newDiv=document.createElement('div');

newDiv.className="newDiv";

newDiv.id="newDiv1";

newDiv.setAttribute("title","hello");

let textnode=document.createTextNode("hello there")

newDiv.appendChild(textnode)

//console.log(newDiv);


//adding before itemlister
let container=document.querySelector("header .container");
let h1=document.querySelector("header h1");
container.insertBefore(newDiv,h1)


//adding before item1
let container1=document.querySelector("#items");
let h=document.querySelector(".list-group-item");
container1.insertBefore(newDiv,h)
