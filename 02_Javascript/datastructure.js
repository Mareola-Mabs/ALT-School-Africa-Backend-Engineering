// Javascript Data Structures

// Creating an Array

let users = new Array(); //Using class Method

let items = []; //Using Array Literal

items = [20, 40, "Ade", "Femi", "Tolu", "Sola", "Bola", "Tunde", 30, 50, {
    theme: "dark"
}];


console.log(users);

console.log(items);

console.log(items[10]);


// Creating an array of 1000 Items
const usernames = []

for (let i = 0; i < 1000; i++){
    usernames[i] = "user" + i
}

console.log (usernames[600])
console.log (usernames)

// Array ForEach Method
const people = ["Ade", "Femi", "Tolu", "Sola", "Bola", "Tunde"];


people.forEach((people) => {
    console.log(people);
});

// Array Map Method
const numbers = [10, 20, 30, 40, 50];
numbers.map((number) => {
    console.log(`The multiplying numbers are: ${number * 2}`);
});

// Array Filter Method
const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const filteredAges = ages.filter((age) => {
    return age > 30 && age < 90;
}
);
console.log(filteredAges);

// 2D Arrays
const matrix = [[1, 2, 3], [4, 5, 6], [7 ,8, 9]]

console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][2])


// Javascript Maps
// Create a map
const userMap = new Map()


// Adding Values to the map
userMap.set(1, "Hello")

userMap.set({
    name: "Ibukunola",
    age: 20
}, "First User")

userMap.set(items, "All Items")

console.log(userMap)

// DIsplay the Keys
console.log(userMap.keys())

// Getting Specific Keys from a Map
console.log(userMap.get(1)) // "Hello"


// Display the Values
console.log(userMap.values())


// Display both Keys and Values
console.log(userMap.entries())

// Display the Size
console.log(userMap.size)

// Check if a Key Exists in a Map
console.log(userMap.has(1)) //True
console.log(userMap.has(321)) //False


// Remove a Key and Its Value From a Map
userMap.delete(1)
console.log(userMap)


// Iterate Over a Map
for (entry of userMap){
    console.log(entry)

    console.log(`The keys are ${JSON.stringify(entry[0])}, and the Values are ${entry[1]}`)
}



// Convert Map to Array
console.log(Array.from(userMap))
console.log("The Map to Arrray is: "+JSON.stringify(Array.from(userMap)))



// Convert Map to Object
let newObject = Object.fromEntries(userMap)
console.log(newObject)


// Object JSON.stringify()

let children = {
    child11: "Ebuka",
    child2: "Femi"
}

console.log(`The Children names are  ${JSON.stringify(children)}`)



// SETS in Javascript
console.log(" \n \n \n")

// Create a Set
const userSet = new Set()



// Adding Values to the Set
userSet.add("Ade")
userSet.add("Tolu")
userSet.add("Bola")
userSet.add("10")
userSet.add(20)

let mary = {
    name: "Mary",
    age: 20
}

let john = {
    name: "John",
    age: 25
}
userSet.add(mary)
userSet.add(john)

userSet.add("Ade") // Adding a duplicate value, it will not be added again
userSet.add(mary) // Adding a duplicate value, it will not be added again

console.log(userSet)

// Get the Size of the Set
console.log(userSet.size) // 7


// Check if a Value Exists in the Set
console.log(userSet.has("Ade")) // True

// Delete a Value from the Set
userSet.delete("Ade")

userSet.delete("Tinubu") // Deleting a value that doesn't exist will not throw an error

console.log(userSet)


// Iterate over the Set
for(usersa of userSet){
    console.log(usersa)
}



// Convert Set to Array
console.log(Array.from(userSet))