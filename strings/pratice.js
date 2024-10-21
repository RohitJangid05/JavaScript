//! Count the number of vowels in a string i,e aeiou

//todo method 1

// let string = "HEllO, Welcome to JavaScript"

// function vowelCheck(str) {
//     let count = 0
//     let lower = str.toLowerCase()
//     for (i = 0; i <= str.length - 1; i++) {
//         if (lower[i] == 'a' || lower[i] == "e" || lower[i] == "i" || lower[i] == "o" ||lower[i] == "u") {
//             count++
//         }
//     }
//     return count
// }
// console.log(vowelCheck(string))

//todo method 2

// let string ="HEllO, Welcome to JavaScript"
// let count=0
// function vowelCheck1(str) {
//     let vowel = "aeiou"
//     let lower=str.toLowerCase()
//     for (let char of lower){
//         if(vowel.includes(char)){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowelCheck1(string))

//! write a function to check if all the vowels are present in a string

//todo method 1

// function vowelCheck(str) {
//     let lower = str.toLowerCase()
//     if (lower.includes("a") && lower.includes("e") && lower.includes("i") && lower.includes("o") && lower.includes("u")){
//         return "Yes, it contains all the vowles"
//     }else{
//         return "No, it does not includes all the vowels"
//     }
// }
// let newStr = "HELLO, welcome to javascript"
// let vowelStr="AEIOU aeiou"
// console.log(vowelCheck(newStr))
// console.log(vowelCheck(vowelStr))

//todo method 2

// function vowelCheck1(str) {
//     let lower=str.toLowerCase()
//     let vowel = 'aeiou'
//     for(let val of vowel){
//         if(!lower.includes(val)){
//             return "No, it dosent include all the vowels"
//         }
//     }
//     return "Yes, it includes all the vowels"
// }
// let newStr = "HELLO, welcome to javascript"
// let vowelStr = "AEIOU aeiou"
// console.log(vowelCheck1(newStr))
// console.log(vowelCheck1(vowelStr))

//!print all the alphabets using function/loop

// for(let i=97;i<=122;i++){
//     console.log(String.fromCharCode(i))
// }

//! checking for panagram

// function panagramCheck(str){
//     let lower=str.toLowerCase().split("")
//     let filtered=lower.filter((elem)=>{
//       return elem.charCodeAt()>="a".charCodeAt()&&elem.charCodeAt()<="z".charCodeAt()
//     })
//     let uniqueStr=[...new Set(filtered)]
//     if(uniqueStr.length==26){
//         return "The string contain all the alphabets"
//     }
// return "The string dosen't contain all the alphabets"
// }


// let str1="The quick brown fox jumps over a lazy dog."
// console.log(panagramCheck(str1))
// let str2="She sells seashells by the seashore."
// console.log(panagramCheck(str2))