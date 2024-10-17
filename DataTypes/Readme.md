In JavaScript, data types refer to the different kinds of values that variables can hold. JavaScript has two main categories of data types: primitive and non-primitive (also known as reference types).

Primitive Data Types
These are immutable and stored by value.

Number: Represents both integer and floating-point numbers. Example: 42, 3.14.
String: A sequence of characters used for text. Example: "Hello, World!".
Boolean: Represents either true or false.
Null: Represents the intentional absence of any object value. Example: null.
Undefined: A variable that has been declared but not assigned a value. Example: let x;.
BigInt: Used for large integers beyond the safe limit of the Number type. Example: 123n.
Symbol: Represents a unique, immutable identifier. Example: Symbol("id").

Non-Primitive (Reference) Data Types
These are mutable and stored by reference.

Object: A collection of key-value pairs. Example: { name: "John", age: 30 }.
Array: An ordered collection of values. Example: [1, 2, 3].
Function: A reusable block of code that performs a specific task. Example: function() { return "Hello"; }.

Dynamic Typing
JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable when declaring it. The type is determined automatically at runtime.