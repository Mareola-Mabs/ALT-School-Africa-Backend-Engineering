// Javascript Objects

const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    profile_settings: {theme:"dark"}
}

user["age"] = 31;
user["account_no"] = 4832076010
user["Bank Name"] = "FCMB"
user["profile"] = {name: "Mareola", gender: "male", font_size: "20px"}

console.log(user);
console.log(user.bankName);
console.log(user.profile_settings.theme)

const user3 = {
    "first $name"  : "John",
}

console.log(user3["first $name"]);

delete user3["first $name"];
console.log(user3["first $name"]);
console.log(user3);

console.log(Object.values(user));
console.log(Object.values(user).length);

const array1 = Object.values(user);
console.log(array1[2]);

console.log(Object.keys(user));

// Conditionals
// Javascript Bitwise  Operators

// Bitwise AND
// The bitwise AND operator (&) compares each bit of two numbers and returns a new number whose bits are set to 1 only if both corresponding bits of the operands are also 1.
// For example, if we have two numbers a = 5 (binary 0101) and b = 3 (binary 0011), the bitwise AND of a and b would be 1 (binary 0001).

const a = 5; // 0101
const b = 3; // 0011
const c = a & b; // 0001
console.log(c); // 1

// Bitwise OR
// The bitwise OR operator (|) compares each bit of two numbers and returns a new number whose bits are set to 1 if either of the corresponding bits of the operands is 1.
const d = a | b; // 0111
console.log(d); // 7

// Bitwise XOR
// The bitwise XOR operator (^) compares each bit of two numbers and returns a new number whose bits are set to 1 if the corresponding bits of the operands are different.
const e = a ^ b; // 0110
console.log(e); // 6

// Bitwise NOT
// The bitwise NOT operator (~) inverts the bits of a number, changing all 0s to 1s and all 1s to 0s.
const f = ~a; // 1010
console.log(f); // -6 (in two's complement representation)

// Bitwise Left Shift
// The bitwise left shift operator (<<) shifts the bits of a number to the left by a specified number of positions, filling the vacated bits with 0s.
const g = a << 1; // 1010
console.log(g); // 10

// Bitwise Right Shift
// The bitwise right shift operator (>>) shifts the bits of a number to the right by a specified number of positions, discarding the bits that fall off.
const h = a >> 1; // 0010
console.log(h); // 2

// Bitwise Unsigned Right Shift
// The bitwise unsigned right shift operator (>>>) shifts the bits of a number to the right by a specified number of positions, filling the vacated bits with 0s regardless of the sign of the number.
const i = -8 >>> 1; // 0110.
console.log(i); // 2147483646 (in two's complement representation)


// Bitwise Operators in JavaScript are used to perform operations on binary numbers at the bit level. They are often used in low-level programming, graphics, and performance-critical applications.
// They can be used to manipulate individual bits of numbers, perform bitwise arithmetic, and optimize memory usage.
// They are also used in cryptography, network programming, and other areas where low-level data manipulation is required.
// Bitwise operators are not commonly used in high-level programming, but they can be useful in certain situations where performance is critical or when working with low-level data structures.
// They can also be used to perform bitwise arithmetic, such as addition, subtraction, and multiplication, using bitwise operations instead of traditional arithmetic operators.



// Javascript Object Iteration Using For In Loop

const user20 = {
    name: "John Doe",
    age: 30,
    email: "bulun1001@gmail.com"
}

for (key in user20) {
    console.log(user20[key]);
}

