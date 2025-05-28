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

