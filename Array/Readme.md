In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays can contain elements of different types, such as numbers, strings, objects, or even other arrays. They are ordered and zero-indexed, meaning the first element has an index of 0.

Creating an Array
There are several ways to create an array in JavaScript:

Using square brackets:
    let fruits = ['apple', 'banana', 'orange'];

Using the Array constructor:
    let numbers = new Array(1, 2, 3, 4, 5);

Accessing Array Elements
You can access elements of an array using their index:
        let fruits = ['apple', 'banana', 'orange'];
    let firstFruit = fruits[0]; // 'apple'

Common Array Methods
JavaScript arrays have many useful methods for adding, removing, and manipulating elements.

push() – Adds an element to the end of the array:
    fruits.push('grape'); // ['apple', 'banana', 'orange', 'grape']

pop() – Removes the last element from the array:
    fruits.pop(); // ['apple', 'banana', 'orange']

shift() – Removes the first element:
    fruits.shift(); // ['banana', 'orange']

unshift() – Adds an element to the beginning:
    fruits.unshift('pear'); // ['pear', 'banana', 'orange']

splice() – Removes or replaces elements:
    fruits.splice(1, 1, 'mango'); // ['pear', 'mango', 'orange']

map() – Applies a function to each element and returns a new array:
    let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

filter() – Returns an array of elements that meet a condition:
    let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

reduce() function in JavaScript is used to reduce an array to a single value by executing a reducer function on each element of the array. It accumulates the results in an "accumulator," which is returned when the iteration is complete.

forEach() – Iterates over each element (does not return a new array):
    fruits.forEach(fruit => console.log(fruit));
