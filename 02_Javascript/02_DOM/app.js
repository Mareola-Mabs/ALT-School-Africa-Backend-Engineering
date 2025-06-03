const space = "\n  \n  \n"

// // Display the Titile of the Current Page
// console.log(document.title);
// console.log(space);

// // Display the URL of the Current Page
// console.log(document.URL);
// console.log(space);

// // Display the Full URL of the Current Page
// console.log(document.documentURI);
// console.log(space);


// // Display the Domain of the Current Page
// console.log("the domain is"+document.domain);
// console.log(space);

// // Display the Body of the Current Page
// console.log(document.body);
// console.log(space);

// // Display the Head of the Current Page
// console.log(document.head);
// console.log(space);

// // Display the First Element of the Body
// console.log(document.body.firstElementChild);
// console.log(space);

// // Display the Last Element of the Body
// console.log(document.body.lastElementChild);
// console.log(space);

// // Display the First Child of the Body
// console.log(document.body.firstChild);
// console.log(space);

// // Display the Last Child of the Body
// console.log(document.body.lastChild);
// console.log(space);

// // Display the First Child Element of the Body
// console.log(document.body.firstElementChild.firstElementChild);
// console.log(space);

// // Display the Last Child Element of the Body
// console.log(document.body.lastElementChild.lastElementChild);
// console.log(space);

// // Display the Parent Element of the Body
// console.log(document.body.parentElement);
// console.log(space);

// // Display the Parent Node of the Body
// console.log(document.body.parentNode);
// console.log(space);

// // Display the Child Nodes of the Body
// console.log(document.body.childNodes);
// console.log(space);

// // Display the Children of the Body
// console.log(document.body.children);
// console.log(space);

console.log(document.body.childNodes[document.body.childNodes.length - 12]) //<footer> this is a footer</footer>

// Diisplay the Siblings of an Element
console.log(document.body.previousSibling); // #text
console.log(document.body.nextSibling); // null


console.log(document.body.previousElementSibling); // <head>...</head>
console.log(document.body.nextElementSibling); // null
