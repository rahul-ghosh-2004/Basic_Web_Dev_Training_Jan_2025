fetch("https://randomuser.me//api")
.then((data) => {
    return data.json()
})
.then((data) => {
    console.log(data.results[Number(0)].location);
    let info = {
        username: data.results[Number(0)].location,
        password: data.results[Number(0)].location
    }

    console.log(info);
})
.catch((error) => {
    console.log(error);
})



// Backend se data milta hai string ke format main
// we have to convert the text data into json

// {
//     "name": "Khusi",
//     "location": "India",
//     "marks": []
// }

// fetch("")  // Successfully completed
// .then((a) => {
//     return a.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
