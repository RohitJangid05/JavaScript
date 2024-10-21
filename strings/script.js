// let str="Hello World!"
// let str1="Rohit"
// let str2="Jangid"

//! Length
// console.log(str.length); 
// Outputs: 13

//!Concatenation
// console.log(str1+str2)
// console.log(str1.concat(str2))

//! toupperCase
// str="Hello"
// console.log(str.toUpperCase())

//! toLowerCase
// str="HELLO"
// console.log(str.toLowerCase())

//! trim
// let str = "   Hello World!   ";
// let trimmedStr = str.trim();
// console.log(trimmedStr);

//! split
// let str="Hello World"
// console.log(str.split(' '))
// it will return an array


//!Includes
// let str="Hello World!"
// console.log(str.includes("World")); 
// Outputs: true

//!Substring
// let str="Hello World!"
// console.lg(str.substring(0, 5)); 
// Outputs: Hello

//!Replace
// let str="Hello World!"
// console.log(str.replace("World", "JavaScript")); 
// Outputs: Hello, JavaScript!

//!indexOf()

// let newStr="Hello"
// console.log(newStr.indexOf("l"))
// console.log(newStr.indexOf("k"))

//!lastIndexOf()

// let newStr="Hello"
// console.log(newStr.lastIndexOf("l"))
//output 3
// console.log(newStr.indexOf("l"))
//output 2

//!search()

// let str = "Learning JavaScript from scratch"
// console.log(str.search("javascript"))  
//output -1 bcz it is case sensetive
// console.log(str.search(/JavaScript/i)) 
// output 9 due to regular expression it will just find the word

//! match()

// let str = "Learning JavaScript from scratch, JavaScript is a scripting language"
// console.log(str.match("JavaScript"))
// javascript behind the seen convert the value i,e JavaScript inot regular expression i,e /javaScript/
// console.log(str.match(/JavaScript/g))

//! matchAll()

// let str = "Learning JavaScript from scratch, JavaScript is a scripting language"
// let matchAllData=str.matchAll("JavaScript")
// console.log(...matchAllData)
// javascript behind the seen convert the value i,e JavaScript inot regular expression i,e /javaScript/, here in matchAll  it add the g flag i,e global;

//! startsWith()

// let str="Hello World"
// console.log(str.startsWith("Hello"))
// let str1="A B C D E F G H"
// console.log(str1.startsWith("A"))
// console.log(str1.startsWith("B"))

//! endsWith()

// let str="Hello World"
// console.log(str.endsWith("World"))
// let str1="A B C D E F G H"
// console.log(str1.endsWith("H"))
// console.log(str1.endsWith("B"))

//! slice()

// let str="Hello JavaScript"
// console.log(str.slice(6,10))
// slice(startIndex,endIndex) it doesnt include the last index element

//! charAt()

// let str="Hello"
// console.log(str.charAt(2))

//!charCodeAt()

// let str="Hello"
// console.log(str.charCodeAt(2))

//! at()

// let str="Hello"
// console.log(str.at(1))
// console.log(str.at(-1))

//! charCodeAt()

let char="a"
console.log(char.charCodeAt())

//! String.fromCharCode()

let code=122
console.log(String.fromCharCode(code))