//? Turthy values 
//* -Any non-empty String
//* -Any non-empty Number
//* -Arrays and objects, even empty arrays are considered as truthy.

//* Number 
var Num = 10
if(Num){
    console.log("True")
}else{
    console.log('False')
}

//* String 
var str="Hello";
if(str){ console.log("True")
}else{
    console.log('False')
}

//* Array

//*Empty Array
var array =[]
if(array){
    console.log("True")
}else{
    console.log("False")
}

//*Array with values
var array1 =[1,2,3,4]
if(array1){
    console.log("True")
}else{
    console.log("False")
}

//* Objects 

//*Empty Object
var obj={}
if(obj){
    console.log("True")
}else{
    console.log("False")
}

//*Object with values
var obj1 ={name:"Rohit",lname:"Jangid"}
if(obj1){
    console.log("True")
}else{
    console.log("False")
}