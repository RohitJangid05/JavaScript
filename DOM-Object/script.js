//! Difference between outerHTML, innerHTML, textContent and innertext

// const div = document.getElementById('exampleDiv');

// innerHTML returns the content inside the element
// console.log('innerHTML:', div.innerHTML);
// Output: <p><strong>Hello</strong>, <em>world!</em></p>

// outerHTML returns the entire element, including the tag
// console.log('outerHTML:', div.outerHTML);
// Output: <div id="exampleDiv"><p><strong>Hello</strong>, <em>world!</em></p></div>

// innerText returns the visible text inside the element, ignoring HTML tags
// console.log('innerText:', div.innerText);
// Output: Hello, world!, it will not display <em>World</em> as its display property is none

// textContent returns all the text inside the element, without HTML tags
// console.log('textContent:', div.textContent);
// Output: Hello, world!, worldit will display <em>World</em> though display property is none

//! Navagating through DOM Tree

// let documentInfo = document
// console.log(documentInfo)

// let headInfo = document.head
// console.log(headInfo.outerHTML)

// let bodyInfo = document.body
// console.log(bodyInfo.outerHTML)

//? Fetching the HTML elements

// let bodyInfo = document.body

// let child=bodyInfo.childNodes 
//* it will return complete DOM data

// let child=bodyInfo.children 
//* it will return the HTML collection

// console.log(child)

//? getting/fetching the first element of the body

// let bodyInfo=document.body

// let firstChild=bodyInfo.firstChild
// console.log(firstChild)
//* these will return objects as JavaScript objects, which by default are displayed as references to their object types rather than the actual content of the elements, 
//* these will return text, bcz the first child of body is text(next line in html is known as text)

// let firstChild=bodyInfo.firstElementChild
// console.log(firstChild)
//* these will return element i,e H1

//? getting/fetching the last element of the body

// let bodyInfo=document.body

// let lastChild=bodyInfo.lastChild
// console.log(lastChild)
//* these will return objects as JavaScript objects, which by default are displayed as references to their object types rather than the actual content of the elements. 
//* these script, bcz the last child of body is script tag

// let lastChild=bodyInfo.lastElementChild
// console.log(lastChild)
//* these will return element i,e script

//? tracing element siblings 

// let bodyInfo=document.body
// let firstChild=bodyInfo.firstElementChild

// let nextSibling =firstChild.nextElementSibling
// console.log(nextSibling.outerHTML)
//* it will reture the next sibling of the firstChild

// let previousSibling =nextSibling.previousElementSibling
// console.log(previousSibling.outerHTML)
//* it will return the previous sibling of the element

//! DOM searching

// let head=document.getElementById("head")
// console.log(head)
//* it will return the element with id of head

// let heading=document.getElementsByClassName("heading")
// console.log(heading)
//* it will return the element with class name heading

// let h2=document.querySelector("h2")
// console.log(h2)
//* it will return only first h2 element
// let heading=document.querySelector(".heading")
// console.log(heading)
//* it will return only the first element whose class name is heading

// let a=document.querySelectorAll("a")
// console.log(a)
//* it will return the collection of element/ node list ,

// let footer = document.getElementsByTagName("footer")
// console.log(footer)
//* it will returnnthe element searched based on the tag name

//! CRUD in DOM

const div = document.getElementById('exampleDiv');
const para =document.getElementsByClassName("para")[0];

//?createElement

let newSpan=document.createElement("span")
newSpan.innerText="span created by Javascript"

let newH1=document.createElement("h1")
newH1.innerText="H1 Created using JavaScript"

//?appendChild

div.appendChild(newSpan)

//?insertBefore

div.insertBefore(newH1, para);



