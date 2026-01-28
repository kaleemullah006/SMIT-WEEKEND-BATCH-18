

// let btn= document.getElementById("btn")
// let title = document.getElementById("title")

// btn.addEventListener("click", function(){
//     title.innerText= "HELLO PAKISTAN"

// })

// let nameInput = document.getElementById("nameInput")
// let btn = docume
// nt.getElementById("showBtn")
// let output = document.getElementById("output")

// btn.addEventListener("click", function(){
// let input = nameInput.value;
// output.innerText= `HELLO ${input} BHAI`

// })

// let colorBtn = document.getElementById("colorBtn")

// colorBtn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// })
// greet=(name) => {
//     return "Hello " + name;
// }
// // console.log(greet("kaleem"))
// document.body.innerHTML= greet("kaleem")

// COUNTER ............... ==>>>>>>>>

// let count = document.getElementById("count")
// let plusBtn = document.getElementById("plus")
// let minusBtn = document.getElementById("minus")
// let resetBtn = document.getElementById("reset")

// let number = 0;



// function updateUi() {
//     count.innerText = number;

//     if (number > 0) {
//         count.style.color = "purple"
//         minusBtn.disabled = false
//     }
//     else if (number < 0) {
//         count.style.color = "red"
//         minusBtn.disabled = false
//     }
//     else {
//         count.style.color = "black"
//         minusBtn.disabled = true
//     }
// }

// function colorChange (){
//     if(number < 0){
//     document.body.style.backgroundColor = "#ffe6e6";
// }
// else{
//     document.body.style.backgroundColor = "white";
// }
// }

// plusBtn.addEventListener("click", () => {
//     number++;

//     updateUi()
//     // colorChange()
// })
// minusBtn.addEventListener("click", () => {
//     // if (number > 0)
//         number--;

//     updateUi()
//     colorChange()
// })
// resetBtn.addEventListener("click", () => {
//     number = 0;

//     updateUi()
//     // colorChange()
// })

// plusBtn.addEventListener("click", ()=>{
//     number++;
//     count.innerText= number
//     updateUi()
// })
// minusBtn.addEventListener("click", ()=>{
//     number--;
//     count.innerText= number;
//     updateUi()
// })
// resetBtn.addEventListener("click", ()=>{
//     number = 0;
//     count.innerText= number;
//     updateUi()
// })


// function updateUi(){
//     count.innerText= number;

//     if(number > 0){
//         count.style.color= "green"
//         minusBtn.disabled = false
//     }
//     else if(number < 0){
//         count.style.color= "red"
//         minusBtn.disabled = false
//     }
//     else{
//         count.style.color= "black"
//         minusBtn.disabled = true
//     }
// }


// hide / show ...////////// 

// let btn = document.getElementById("toggleBtn")
// let para = document.getElementById("para")



// btn.addEventListener("click", () => {
//     if (para.classList.contains("show")) {
//         para.classList.replace("show", "hide")

//     } else {
//         para.classList.replace("hide", "show")

//     }
// })

// live character counter /////////////////////////

// let textInput= document.getElementById("textInput")
// let counter = document.getElementById("counter")

// textInput.addEventListener("input", function(){
//     let inputLength= textInput.value.length;

//     counter.innerText= `You Typed ${inputLength} character ${inputLength !==1 ? 's': ''}`;
// })

// text chota / bara karna ......//////////////

// let textPara = document.getElementById("textPara")
// let plusBtn =document.getElementById("plusBtn")
// let minusBtn =document.getElementById("minusBtn")

// let fontSize = 50;

// textPara.style.fontSize = fontSize + "px"

// plusBtn.addEventListener("click", function(){
//      fontSize++;
//     textPara.style.fontSize = fontSize + "px";
// })
// minusBtn.addEventListener("click", function(){
//      fontSize--;
//     textPara.style.fontSize= fontSize + "px";
// })

// let likeBtn = document.getElementById("likeBtn")
// let likeCount = document.getElementById("likeCount")

// let like = 0;

// likeBtn.addEventListener("click", function () {
//     like++;
//     likeCount.innerText = `Like 👍: ${like}`
//     if (like < 100) {
//         like++;
//     }
//     if (like >= 10) {
//         likeCount.style.color = "green";
//         likeCount.innerText = `Like ❤️: ${like}`
//     }

// })

// let darkBtn = document.getElementById("darkBtn")
// let body = document.body
// let theme = localStorage.getItem("theme")


// darkBtn.addEventListener("click", ()=>{
//     if(body.classList.contains("dark")){
//         body.classList.replace("dark", "light")
//     }else{
//         body.classList.replace("light", "dark")
//     }
// })

let darkBtn = document.getElementById("darkBtn");
let body = document.body;
let theme = localStorage.getItem("theme");

// Page load par theme apply
if(theme === "dark"){
    body.classList.add("dark");
    body.classList.remove("light");
} else {
    body.classList.add("light");
    body.classList.remove("dark");
}

darkBtn.addEventListener("click", () => {
    if(body.classList.contains("dark")){
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");   // ✅ correct
        darkBtn.innerText = "Dark Mode";
    } else {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");   // ✅ correct
        darkBtn.innerText = "Light Mode";
    }
});






