//* Let 

let data = 10
// let data=20 //! it will throw an error as we cant declare the same variable with let in the same scope
{
    let data = 20
    console.log(data)
}
console.log(data)

//*Const 

const pi = 3.14
// pi=452 //!Error

{
    const NewData = 20
    console.log(data)
}
// console.log(NewData) //! it will trow error as const is a block scoped variable

//! Templet string

let fname = "Rohit"
let lname = "jangid"
console.log("my first name is " + fname + " my last name is " + lname)
// in these if we need to add the space between the variable while concating we need to give space to the variable/statments itself we cant give space while printing

console.log(`My first name is ${fname} my last name is ${lname}`)

//we can also write multi line statment
let information = `Rohit Jangid
Age 20
India`
console.log(information)

//! Default paramaters

function add(a = 10, b = 5) {
    return a + b;
}
console.log(add(15, 25))
console.log(add(5))
console.log(add(undefined, 25))

//! Arrow function

const arrow = () => "Hello World!" //if a function body has single line statment
console.log(arrow())

//if a function body has multi line statments
const arrow2 = () => {
    console.log("Addition of num")
    return 10 + 20;
}
console.log(arrow2())

// if a function has only one paramater
const arrow3 = a => { return a }
console.log(arrow3(15))