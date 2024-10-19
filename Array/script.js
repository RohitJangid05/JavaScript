//! Creating array
// let fruits = ['apple', 'banana', 'orange'];

//! creating array using constructor
// let numbers = new Array(1, 2, 3, 4, 5);

//! accessing array element
// let firstFruit = fruits[0]; // 'apple'

//! adding element to array at the end
// fruits.push('grape'); // ['apple', 'banana', 'orange', 'grape']
// console.log(fruits)

//! adding the element at the begning
// fruits.unshift('pear'); // ['pear', 'banana', 'orange']
// console.log(fruits)

//! removing element from last
// fruits.pop(); // ['apple', 'banana', 'orange']
// console.log(fruits)

//! removing element from start
// fruits.shift(); // ['banana', 'orange']
// console.log(fruits)

//!Removing or replaces elements:
// fruits.splice(1, 1, 'mango'); //here the 1: strat index 1:delete count i,e no of element to be deleted, mango: elemente to be added ['pear', 'mango', 'orange']
// console.log(fruits)

// let newarr=["apple","mango","pinapple","banana","grape","papaya"]
// newarr.splice(2,3,"hello")
// console.log(newarr)

//! .at() these function index/points to the last element of an array
// let names=["rohit","rahul","virat","ashwin"]
// console.log(names.at(-1).length)
// console.log(names.at(-2))

//! map() Applies a function (perform a activity on each element) to each element and returns a new array:

//?the map method takes a callback i,e function as an input which has two paramaters i,e element and index
//? ex:map((ele,index)=>{return ele}) here ele refers to each element of an array and index refers to index of each element

//?let multiply each number by 2
// let num=[1,2,3,4,5] 
// let multiple=num.map((element)=>{
//     return element*2
// })
// console.log(multiple)

//!filter() – Returns an array of elements that meet a condition:
//? it aslo take a call back

//? let filter out even number
// let num1=[1,2,3,4,5,6,7,8,9,10]
// let even=num1.filter((ele)=>{
//     return ele%2==0
// })
// console.log(even)

//!reduce() function in JavaScript is used to reduce an array to a single value by executing a reducer function on each element of the array. It accumulates the results in an "accumulator," which is returned when the iteration is complete.
//!array.reduce(callback(accumulator, currentValue, index, array), initialValue);

//? it aslo take a callback
//?accumulator: The accumulated result of the previous iterations (or the initialValue in the first iteration).
//? currentValue: The current element being processed.
//? index (optional): The index of the current element.
//? array (optional): The array on which reduce() was called.
//?initialValue (optional): A value to initialize the accumulator. If omitted, the first array element will be used as the initial value, and the iteration will start from the second element.

//? let get the sum of an array
// let num2=[1,2,3,4,5,6,7,8,9,10]
// let arrSum=num2.reduce((acc,curr)=>{return acc+curr})
// console.log(arrSum)

//? combining nested array in a single array
// let nestArr=[[1,2],[3,4],[5,6]]
// let mergeArr=nestArr.reduce((acc,curr)=>{
//     return acc.concat(curr);
// },[])
// console.log(mergeArr)

//! forEach() – Iterates over each element (does not return a new array):

// let fruits = ['apple', 'banana', 'orange'];
// fruits.forEach(fruit => console.log(fruit));



//! for of and for in loop with array

// let arr=["rohit","rahul","virat","sachin"]
// for(let ele of arr){
//     console.log(ele)
// }

// for(let index in arr){
//     console.log(index)
// }

//! indexOf()
// let arr=[1,2,3,4,5,4,6,7,8,9,4]
// console.log(arr.indexOf(4))
// console.log(arr.indexOf(4,6))

//!lastIndexOf()
// let arr=[1,2,3,4,5,4,4,6,7,8,9,4]
// console.log(arr.lastIndexOf(7))

//!includes
let arr=[1,2,3,4,5]
console.log(arr.includes(4))
console.log(arr.includes(7))