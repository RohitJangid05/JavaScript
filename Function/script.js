// Function 
function greet() {
    console.log("Hello world");
}
greet();

// Reusable function 
function sum(a, b) { // a, b are function parameters 
    return a + b; // Returns the sum of a and b
}
console.log(sum(10, 20)); // Outputs 30
console.log(sum(50, 10)); // Outputs 60

// Function expression 
var myFunc = function greet() {
    return "Hello world, this is a function expression";
}
console.log(myFunc); // Logs the function itself
console.log(myFunc()); // Executes the function

// Anonymous Function
var newFun = function() {
    return "Hello World, this is an anonymous function";
}
console.log(newFun()); // Calls the anonymous function

// IIFE - Immediately Invoked Function Expression
(function(x, y) {
    console.log(x + y); // Outputs 30
})(10, 20);

var IIFEfun = (function(x, y) {
    return x + y // Outputs 60
})(40, 20); // Immediately invokes the function with arguments 40 and 20

console.log(IIFEfun); // Logs the value of IIFEfun, which is undefined

