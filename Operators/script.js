//? Arithmetic operator

let a = 10, b = 5;
console.log(a + b); // 15

//? Assignment Operator

let x = 10;
x += 5; // x is now 15
console.log(x)

//? Comparison Operators

let y = 10;
console.log(y === 10); // true
console.log(y !== 5);  // true

//? Logical Operators

let aa = true
let bb = false;
console.log(aa && bb); // false
console.log(aa || bb); // true
console.log(!aa);     // false

//? Bitwise Operators

let xx = 5, yy = 1;
console.log(xx & yy); // 1 (0101 & 0001 = 0001)

//? Ternary (Conditional) Operator

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

//? Type Operators

console.log(typeof "Hello"); // "string"
console.log([] instanceof Array); // true

//? Spread Operator (...)

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newArr)
