// Create a New Element
const newElement = document.createElement("div");

// Set the ID of the New Element
newElement.id = "newElement";

// Set the Class of the New Element
newElement.className = "newClass";

// Set the Content of the New Element
newElement.textContent = "This is a new element created using JavaScript.";

// Append the New Element to the Body
// document.body.append(newElement);

// Prepend the New Element to the Body
// document.body.prepend(newElement);

// Insert the new Element  Before another Element
document.body.insertBefore(newElement, document.querySelector("footer"));

// Insert the New Element at Any Position Before, Inside, or After the Body
// document.body.insertAdjacentElement("afterend", newElement);



// Removing an Element
// First you select thee element you want to remove
const elementToRemove = document.querySelector("footer");
elementToRemove.remove();

newElement.remove(); // This will remove the new element we just created

// Clone an Element
const elementToClone = document.querySelector("header");
const clonedElement = elementToClone.cloneNode(true); // true for deep clone, false for shallow clone
clonedElement.textContent = "This is a cloned header element.";

elementToClone.insertAdjacentElement("afterend", clonedElement); // Insert the cloned element after the original header


// Log the New Element to the Console
console.log(newElement);