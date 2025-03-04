const ol = document.querySelector("ol")

let li = document.createElement("li")
li.innerText = "NodeJS"

ol.appendChild(li)

let newLi = document.createElement("li")
newLi.innerText = "expressjs"
newLi.setAttribute("class", "express")
newLi.setAttribute("id", "exp")

// console.log(newLi);
ol.appendChild(newLi)


// const html = document.querySelector(".html")
// html.remove()
// console.log(html);

// alert("Hello Everyone")


document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    // For preventing the default behaviour of a form or a button or an event

    // alert("Hello Everyone!")

    console.log(Date.now());
})