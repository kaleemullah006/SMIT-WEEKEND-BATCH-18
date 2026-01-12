
// const button = documents.getElementById("myBtn");

// // const output = documents.getElementById("output")

// // button.addEventListner("click", function(){
// //     output.innerText = "Button Clicked!"
// // }


// // )

// const hoverText = document.getElementById("hoverText")

// hoverText.innerText

// document.getElementById("btn").onclick = function(){
//     document.getElementById("text").innerText = "new text"
// }

// document.getElementById("btn").onclick = function(){
// let name = document.getElementById("name").value;
// document.getElementById("show").innerText= name
// }

// document.getElementById("btn").onclick= function () {
//     document.getElementById("para").style.color = "red"
// }
// document.getElementById("btn").onclick= function () {
//     // document.getElementById("para").style.color = "blue"
//     let para = document.getElementById("para")
//     if(para.style.color === "blue"){
//         para.style.color=("red")
//     }else{
//         para.style.color ="blue"
//     }
// }

// document.getElementById("btn").onclick = function () {
//     let para = document.getElementById("para")
//     if (para.style.color === "blue") {
//         para.style.color = "red"
//     }
//     // else if (para.style.color === "red") {
//     //     para.style.color = ("blue")
//     // }
//      else {
//         para.style.color = "blue"
//     }

// }

// let btn =document.getElementById("btn1");
// btn.addEventListener("click" , function(){
//    document.getElementById("para").style.color = "blue"
//    console.log("apan blue huwa")
// })
// let btn2 =document.getElementById("btn2");
// btn2.addEventListener("click" , function(){
//    document.getElementById("para").style.color = "green"
//    console.log("apan green huwa")
// })

// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click" , function () {

//     document.getElementById("para1").style.color = "blue"
//     document.getElementById("para1").innerText = "blue huwa"
// })

// let btn2 = document.getElementById("btn2")
// btn2.addEventListener("click", function(){
//     document.getElementById("para2").style.color = "green"
//     document.getElementById("para2").innerText = "green huwa"
// })

// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click" , function () {

//     document.getElementById("para1").style.color = "blue"
//     document.getElementById("para2").style.color = "black"
// })

// let btn2 = document.getElementById("btn2")
// btn2.addEventListener("click", function(){
//     document.getElementById("para2").style.color = "green"
//     document.getElementById("para1").style.color = "black"
// })

// let btn = document.getElementById("btn")
// btn.addEventListener("click", function(){
//     let input =document.getElementById("nameInput").value;
//     document.getElementById("para").innerText = "hello "+ input;
// })

// let btn = document.getElementById("btn")
// btn.addEventListener("click", function(){
//     let input =document.getElementById("nameInput").value;
//     if (input=== "") {
//         alert("please enter your name")
//     }else{

//         document.getElementById("para").innerText = "Hello "+ input;
//     }
// })


// let btn = document.getElementById("submitBtn")
// btn.addEventListener("click", function(){
//     let name =document.getElementById("nameInput").value;
//     let email = document.getElementById("emailInput").value;

//     document.getElementById("para").innerText = "Name : " + name +  " | Email : " +email;

// })

// let btn = document.getElementById("submitBtn")
// btn.addEventListener("click", function(){
//     let name =document.getElementById("nameInput").value;
//     let email = document.getElementById("emailInput").value;

//     if (name ==="" || email === "") {
//         // document.getElementById("para").innerText= "All fields are required"
//         alert("All fields are required")
//     }else{

//         document.getElementById("para").innerText = "Name : " + name +  " | Email : " +email;
//     }


// })


// let btn = document.getElementById("submitBtn")
// btn.addEventListener("click", function(){
//     let nameInput =document.getElementById("nameInput");
//     let emailInput = document.getElementById("emailInput");

//     let name = nameInput.value;
//     let email = emailInput.value;

//     let para = document.getElementById("para")

//     if (name ==="" || email === "") {
//         para.innerText = "All fields are required"
//         // alert("All fields are required");
//         para.style.color = "red"

//     }
//     else if(!email.includes("@") || !email.includes(".")){
//          para.innerText = "All fields are required"
//         // alert("Please Enter Correct Email Address");
//         para.style.color ="red"

//     }
//     else{

//         document.getElementById("para").innerText = "Name : " + name +  " | Email : " +email;
// para.style.color = "green"
//          nameInput.value = "";
//         emailInput.value = "";
//     }


// })


// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     let name = document.getElementById("nameInput").value;
//     let email = document.getElementById("emailInput").value;

//     let para = document.getElementById("para");
//     let para2 = document.getElementById("para2")

//     if (name === "" || email === "") {
//         para.innerText = "All fields Are required"
//         para.style.color = "red"
//     }
//     else if (!email.includes("@") || !email.includes(".")) {
//         para.innerText = "please Enter correct Email"
//         para.style.color = "red"
//         emailInput.style.border = "2px solid red";
//     } else {
//         para.innerText = "Name is " + name + " | Email is " + email;
//         para.style.color = "green"
//         emailInput.style.border = "2px solid green";

//         para2.innerText = "CONGRAJULATION! YOUR FORM SUBMITED SUCCESSFULLY👍"
//         para2.style.color = "orange"

//         nameInput.value = ""
//         emailInput.value = ""
//     }

// })


// JS 

// function toggleTheme() {
//   const body = document.getElementById("body");
//   const isLightTheme = body.classList.contains("light-theme");
//   if (isLightTheme) body.classList.replace("light-theme", "dark-theme");
//   if (!isLightTheme) body.classList.replace("dark-theme", "light-theme");
// }

// const toggleButton = document.getElementById("toggle-btn");
// toggleButton.addEventListener("click", toggleTheme);

// HTML 


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body class="light-theme" id="body">
//     <div>
//         <nav>
//             <button id="toggle-btn">Toggle Theme</button>
//         </nav>
//         <h1>Heading 1</h1>
//     </div>

//     <script src="app.js"></script>
// </body>

// </html>

// CSS 

// .light-theme {
//     color: black;
//     background-color: antiquewhite;
// }

// .dark-theme {
//     background-color: rgb(50, 50, 50);
//     color: white;
// }