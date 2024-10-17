// Dynamic Typing
// JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable when declaring it. The type is determined automatically at runtime.
//? the typeof method is used to find the datatype of a variable 

//! Primitive datatype 

//? Number 

var num=10
console.log(typeof num)

//? String 

var str="Rohit"
console.log(typeof str)

//? Boolean these represent either true or false

var Bool=true
console.log(typeof Bool)

var Bool2=false
console.log(typeof Bool2)

//? Null (The type of Null in js is Object)

var NULL =null
console.log(typeof NULL)

//? Undefined

var value;
console.log(typeof value)

//? BigInt

var bigint=1234659595698949844n;
console.log(typeof bigint)

//! Non-Primitive datatype

//?Objects

var obj={
    Fname:"Rohit",
    Lname:"Jangid"
}
console.log(typeof obj)

//?Arrays type of array is object

var arr=[1,2,3,4]
console.log(typeof arr)

//?Function

function myname(){
    console.log("Hello")
}
console.log(typeof myname)