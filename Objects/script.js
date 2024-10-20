//creating Object

//! using object Literal Syntax
// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA"
// }
// console.log(obj)

//! Using object constructor

// let obj=new Object()
// obj.name="rohit"
// obj.age=25
// obj.course="BCA"
// console.log(obj)

//! Accessing Object Properties

//? Dot notation:
// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA"
// }
// console.log(obj.name)

//? Bracket notation:
// console.log(obj['age'])

//!  Adding and Modifying Properties

// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA"
// }
// obj.city="Belgavi"
// console.log(obj)

//! Modify an existing property:

// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA"
// }
// obj.age=20
// console.log(obj)

//!Deleting Properties

// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA"
// }
// delete obj.course
// console.log(obj)

//! function in object

// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA",
//     greet: function(){
//         return "Good Morinig"
//     }
// }
// let result=obj.greet()
// console.log(result)

//! Looping Through Object Properties

// let obj={
//     name:"rohit",
//     age:25,
//     course:"BCA",
//     city:"Belagavi"
// }

// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`)
// }

//!Common Built-in Object Methods

// let obj = {
//     name: "rohit",
//     age: 25,
//     course: "BCA",
//     city: "Belagavi"
// }

// console.log(Object.keys(obj)) 
//return keys of an object in an array

// console.log(Object.values(obj)) 
//return values of an object in an array

// console.log(Object.entries(obj)) 
//return both keys and values of an object in an array