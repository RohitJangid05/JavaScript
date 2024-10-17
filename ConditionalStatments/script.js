//! Statments in Javascript

//? if statments
var a = 10;
if (a >= 10) {
    console.log("a is greater");
}

//? if else statments
if (a > 20) {
    console.log("a is greater");
} else {
    console.log("a is smaller")
}

//? else if statments
var marks = 80;
if (marks >= 90) {
    console.log("Grade A+")
} else if (marks >= 80) {
    console.log("Grade A")
} else if (marks >= 50) {
    console.log("Grade B")
} else if (marks >= 40) {
    console.log("Grade C")
}

//? Switch statments
var day = "Sunday"
switch (day) {
    case "Monday":
        console.log("Today is Monday")
        break;
    case "Tuesday":
        console.log("Today is Tuesday")
        break;
    case "Wednesday":
        console.log("Today is Wednesday")
        break;
    case "Thursday":
        console.log("Today is Thrusday")
        break;
    case "Friday":
        console.log("Today is Friday")
        break;
    case "Saturday":
        console.log("Today is Saturday")
        break;
    case "Sunday":
        console.log("Today is Sunday")
        break;
    default:
        console.log("please enter a proper day")
}

//! Loops in javascript

// for loop

var n=5;
for (i=0;i<=n;i++){
    console.log(i)
}

// while loop
console.log("While loop")

var i = 0;
while (i <= 5) {
  console.log(i); // Outputs 0 to 4
  i++;
}

console.log("do while loop")

//do while loop
let k = 0;
do {
  console.log(k); // Outputs 0 to 4
  k++;
} while (k <= 5);

// for in loop

let obj={
    name:"Virat",
    lname:"Koli"
}
for (let key in obj){
    console.log(key + " : "+ obj[key])
}

//for of loop
let arr=[1,2,3,4]
for (let val of arr){
    console.log(val)
}