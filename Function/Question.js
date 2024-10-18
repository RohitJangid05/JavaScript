//! Write a function that take values and a operator as a parameter and return the result based of operation

// function calculator(a, b, op) {
//     switch (op) {
//         case "add":
//             return a + b;
//             break;
//         case "sub":
//             return a - b;
//             break;
//         case "mul":
//             return a * b;
//             break;
//         case "div":
//             return a / b;
//             break;
//         default:
//             return "enter a proper operation"
//     }
// }

// let a = 2
// let b = 10
// let op = "div"

// console.log(calculator(a, b, op))

//! write a function that reverse the string without using the inbuilt method

function strRev(str) {
    let len = str.length
    let revStr = ""
    for (let i = len-1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
}
console.log(strRev("Hello"))

//! write a function to check whether the string is palindrome or not, palindrome are the words i,e read same from both the side i,e left-right or right-left eg madam

function getPalindrome(str){
    let string=str
    let palindrome=""
    for(let i=str.length-1;i>=0;i--){
        palindrome+=str[i]
    }
    if(palindrome==str){
        return "is a Palindrome"
    }else{
        return "not a palindrome"
    }
}

console.log(getPalindrome("madam"))