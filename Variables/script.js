//! Var
var x = 5;
console.log(x);  // Output: 5

function testVar() {
    var y = 10;
    console.log(y);  // Output: 10
}
testVar();
//console.log(y); // Error: y is not defined (y is function-scoped)

//!Let
// let x = 5;
if (true) {
    let x = 10;  // This `x` is different from the outer `x`
    console.log(x);  // Output: 10 (block-scoped)
}
console.log(x);  // Output: 5 (outer `x`)

//! const
const z = 100;
// z = 200; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4);  // Modifying array is allowed
console.log(arr);  // Output: [1, 2, 3, 4]
