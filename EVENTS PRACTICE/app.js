// const toggleButton = document.getElementById("toggle-btn");

// toggleButton.addEventListener("click", function() {
//     const body = document.getElementById("body");
//     const heading = document.getElementById("heading");

//     const isLightTheme = body.classList.contains("light-theme");

//     if (isLightTheme) {
//         body.classList.replace("light-theme", "dark-theme");
//         toggleButton.innerText =("switch to Light")

//         heading.style.color = "orange"; // dark me heading orange
//         console.log("Dark theme active");
//     } else {
//         body.classList.replace("dark-theme", "light-theme");
//         toggleButton.innerText =("switch to Dark")
//         heading.style.color = "blue"; // light me heading blue
//         console.log("Light theme active");
//     }
// });


// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     let para = document.getElementById("para")

//     let isBlue = para.classList.contains("blue")

//     if (isBlue) {
//         para.classList.replace("blue", "red")
//         btn.innerText= "RED HO GAYA"
//         btn.style.color= "red"
//     } else {
//         para.classList.replace("red", "blue")
//         btn.innerText= "BLUE HO GAYA"
//         btn.style.color= "blue"


//     }
// })

let btn = document.getElementById("greetBtn");

btn.addEventListener("click", function () {

    let message = document.getElementById("message");

    let nameInput = document.getElementById("nameInput")

    name = nameInput.value

    if (name === "") {
        message.innerText = "Please Enter Your Name"

        message.style.color = "red"

        btn.style.color = "red"

        btn.innerText = "🔥🔥"

    } else {
        message.innerText = "Hello " + name + "  kesi ho ? 💕"

        message.style.color = "green"


        nameInput.value = ""
    }
})