const cl = console.log

const space = "  \n  \n  \n";

// Destructuring Assignment
const names = ['Alice', 'Bob', 'Charlie'];

let [firstName, secondName, lastName] = names;

cl(firstName); // Alice
cl(secondName); // Bob
cl(lastName); // Charlie

cl(space);

const animals = ["Lion", "Tiger", "Bear"];

let [firstAnimal, secondAnimal] = animals;

cl(firstAnimal); // Lion
cl(secondAnimal); // Tiger

cl(space);

const drinks = ["Coffee", "Tea", "Juice"];
let [firstDrink, , thirdDrink] = drinks;

cl(firstDrink); // Coffee
cl(thirdDrink); // Juice

try{
    cl(secondDrink); // undefined
}

catch (error) {
    cl(error);
}
cl(space);

// Destrucuring  nested arrays
const nestedArray = [1, [2, 3], [4, 5]];
let [first, [second, third], [fourth, fifth]] = nestedArray;
cl(first); // 1
cl(second); // 2
cl(third); // 3
cl(fourth); // 4
cl(fifth); // 5
cl(space);




// Rest Operator
const fruits = ["Apple", "Banana", "Cherry", "Date"];

let [firstFruit, ...remainingFruits] = fruits;

cl(firstFruit); // Apple
cl(remainingFruits); // [ 'Banana', 'Cherry', 'Date' ]

cl(space);


// Destructuring Objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Destructuring via key names
let {name, age, city} = person;
cl(name); // John
cl(age); // 30
cl(city); // New York

cl(space);

// Assigning key names to variables
let {name: personName, age: personAge, city: personCity} = person;
cl(personName); // John
cl(personAge); // 30
cl(personCity); // New York

cl(space);

// Using the rest operator with objects
let {name: personName2, ...restOfPerson} = person;
cl(personName2, "sdjgsjgj"); // John
cl(restOfPerson); // { age: 30, city: 'New York' }

cl(space);

// Nested Destructuring
const user = {
    id: 1,
    profile: {
        username: "johndoe",
        email: "johndoe@example.com"
    }
};

let {profile: {username, email}} = user;
cl(username); // johndoe
cl(email); // johndoe@example.com

cl(space);

// Destrucuring  nested object with default values
const settings = {
    theme: "dark",
    notifications: {
        email: true,
        sms: false
    }
};
let {theme, notifications: {email: emailNotifications, sms: smsNotifications}} = settings;
cl(theme); // dark
cl(emailNotifications); // true
cl(smsNotifications); // false

cl(space);


// Destructuring function parameters
function displayUser({name, age, city}) {
    cl(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const userInfo = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
displayUser(userInfo); // Name: Alice, Age: 25, City: Los Angeles
cl(space);


// Destructuring function return values
function getCoordinates() {
    return [10, 20];
}
let [x, y] = getCoordinates();
cl(x); // 10
cl(y); // 20
cl(space);


// Destructuring Functions With Arrays
const evenNum = [2, 4, 6, 8, 10]

function getTheNums ([one, two]){
    console.log(one, two)
}

getTheNums(evenNum)



