//! give the square of each element of an array

// let num=[1,2,3,4,5]
// let sq=num.map((ele)=>{
//     return ele*ele
// })
// console.log(sq)

//!take a array of string and return and array of capatalized string

// let strArr=["rohit","rahul","virat","sachin"]
// let capArr=strArr.map((ele)=>{
//     return ele.toUpperCase()
// })
// console.log(capArr)

// let numArr=[1,2,3,4,5,6,7]
// let eveSq=numArr.map((ele)=>{
//     return (ele%2==0)*ele*ele
// }).filter((newEle)=>{
//     return newEle !=0
// })
// console.log(eveSq)

//!take a array of names and add a prefix of mr in each of the them

// let names = ["rahul", "rohit", "virat"]
// let mrNames = names.map((ele) => {
//     return "Mr." + ele
// })
// console.log(mrNames)

//!filter out the product which has price less then or equal to 500

// let array = [
//     { name: "laptop", price: 2000 },
//     { name: "mouse", price: 450 },
//     { name: "penDrive", price: 300 },
//     { name: "earphone", price: 499 },
//     { name: "printer", price: 2000 },
// ]

// function filterPrice(arr) {
//     let lessPrice = arr.filter((val) => {
//         return val.price <= 500
//     })
//     return lessPrice
// }

// console.log(filterPrice(array))

//!find out the unique values in an array

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 7]
// let unique = arr.filter((curr, inx, ar) => {
//     return inx == arr.indexOf(curr)
// })
// console.log(unique)

//! best way using set as it does not accept repeating value

// console.log([...new Set(arr)])

//! Sorting an array

// let unSorted=[5,4,2,5,6,3,1,5]
// let sorted=unSorted.sort((a,b)=>a-b)
// behind the seen
// sort(a,b){
//     if(a>b) return 1
//     if(b>a) return -1
// }
// console.log(sorted)
// let revSorted=unSorted.sort((a,b)=>b-a)
// console.log(revSorted)