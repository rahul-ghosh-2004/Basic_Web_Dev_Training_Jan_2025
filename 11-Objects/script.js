
const studentData = {
    "marks": [ 98, 78, 37 ],
    "age": 21, // Number
    "name": "Ram", // String
    "isQualified": true, // Boolean
    "graduationYear": null,  // null
    "address": {
        "state": "West Bengal",
        "city": "Kolkata",
        "country": "India"
    }
}

const courses = {
    "domain": [ "BCA", "BTech", "MBA", "MCA" ],
    "duration": [ "4Years", "2Years" ]
}

const mix = { ...studentData, ...courses }

console.log(mix)

// delete studentData.mobile
// delete studentData.age
// delete studentData.marks

// using delete key word we can delete a key


// You can access any value from an object by following 2 different approaches.
// 1. Dot notation. (.)
// 2. Using Square brackets. ["Key_name"]


// name --> key
// Ram ---> Value
// key: Value

// key value pairs

// [1, 2, 3, "CXI", [ 100, 200, 300 ]]