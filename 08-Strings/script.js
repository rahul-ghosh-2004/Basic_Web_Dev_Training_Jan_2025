// let myName = "CXI"
// myName = "CODEXINTERN"
// console.log(myName)
// undefined
// let result
// const data = [  ]


let address = "10/A, MG Road, Mumbai - 986712"

const value = `ABCDEFG`

let mixedValue = address + value

console.log(mixedValue)

console.log(value)

console.log(address.toUpperCase())  // 10/A, MG ROAD, MUMBAI - 986712 (converting a string into upperCase)

console.log(address.toLowerCase())  // 10/a, mg road, mumbai - 986712 (Converting a string into lowerCase)

console.log(address.length)  // Helps to findout the length of a string or an array

console.log(address.includes("986712"))  // If present, you will get true. Otherwise you will get false.

console.log(address.startsWith("10/A"))

console.log(address.endsWith("12"))

console.log(address.slice(6, 13))   // slice( 0, 4 )

// 1. 0th index ---> ( starting index, length )
// 2. middle --> ( starting index, end index + 1 )

console.log(address.lastIndexOf("1"))  // start finding from the end

console.log(address.indexOf("1"))  // start finding for the beginning position