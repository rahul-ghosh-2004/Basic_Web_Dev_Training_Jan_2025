
// for, while, do while

// what is loop ?
// repetation of code / function.

// keyword ---> predefined word by developers that perform a particular task.

// for
// for (let i=0; i < 5; i++) {
//     console.log(i)
// }

// const statement = "Hello Everyone! How are you ?"  // "", ''

// for (let i=0; i < 100; i++) {
//     console.log(statement)
// }


// statement = "  Nibbi! I love you  "

// console.log(statement)

// i = 0, i = 1


// let num = 10

// console.log(--num)
// console.log(num--)
// console.log(--num)


/*
types of increment & decrement

** Increment: 1. pre increment (++i), 2. post increment (i++)
*/


// while

// let i = 0

// while (i < 10) {
//     console.log(i)
//     i++;
// }


// do while

// type of loops:
// 1. Entry control
// 2. Exit control

// let i = 0 

// do {
//     console.log(i) 
// } while (i != 0);


// for in, for of

// for in ---> Object
// for of ---> array

const data = {
    "username": "alex123",
    "webseries": "Alice in Borderland",
    "movie": "Infinity War",
    "isLoggedIn": false
}

// console.log(object)

// for(let key in data) {
//     console.log(key + " : " + data[key])
// }

// for of

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i=0; i<nums.length; i++) {
//     console.log(nums[i])
// }

for (let value of nums) {
    console.log(value)
}