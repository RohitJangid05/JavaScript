In JavaScript, Objects are collections of key-value pairs, where the key is a string (or symbol) and the value can be anything, including other objects, functions, arrays, or primitives (such as strings, numbers, and booleans).

Creating an Object
You can create an object using one of the following methods:

1.Object Literal Syntax:

   const person = {
       name: "John",
       age: 30,
       greet: function() {
           console.log("Hello, my name is " + this.name);
       }
   };

2.Using the new Object() Constructor:

   const car = new Object();
   car.make = "Toyota";
   car.model = "Corolla";
   car.year = 2020;

Accessing Object Properties

Dot notation:
    console.log(person.name); // "John"

Bracket notation:
    console.log(person['age']); // 30

Adding and Modifying Properties

Add a new property:
    person.job = "Developer";

Modify an existing property:
    person.age = 31;

Deleting Properties
    You can remove properties using the `delete` keyword:

delete person.age;

Object Methods

Objects can have functions as values, and such functions are called methods:

const person = {
    name: "John",
    greet() {
        console.log("Hello!");
    }
};
person.greet(); // "Hello!"

Looping Through Object Properties
You can loop through an object’s properties using `for...in`:

for (let key in person) {
    console.log(key + ": " + person[key]);
}


Common Built-in Object Methods
    Object.keys(obj) returns an array of a given object's property names.
    Object.values(obj) returns an array of a given object's property values.
    Object.entries(obj) returns an array of a given object's key-value pairs.

Object Constructor Functions
  Sometimes we need to create many objects of the same type.
  To create an object type we use an object constructor function.
  It is considered good practice to name constructor functions with an upper-case first letter.