// Function 
function greet(){
    console.log("Hello world")
}
greet()

// resuable function 
function sum(a,b){
    return a+b
}
console.log(sum(10,20))
console.log(sum(50,10))

// Function expression 
var myFunc=function greet(){
    return "Hello world, these is function expression"
}
console.log(myFunc) //!it will display that what the variable hold
console.log(myFunc()) //! to exectue the function using variable use the perentisis

//Anonymous Function

var newFun=function(){
    return "Hello World, these is anonymous function"
}
console.log(newFun())