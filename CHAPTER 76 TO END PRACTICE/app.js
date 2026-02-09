// function Student (name){
//     this.name = name
// }

// Student.prototype.study= function(){
//     console.log( this.name+" is studying")
// }
// let student1 = new Student("zahid")
// let student2 = new Student("Umair")

// student1.study()
// student2.study()

// student1.hasOwnProperty("name")
// student1.hasOwnProperty("study")

// console.log(student1.hasOwnProperty("name"))
// console.log(student1.hasOwnProperty("study"))
// student1.hasOwnProperty("study")
// student1.hasOwnProperty("age")

// console.log(student1.hasOwnProperty("study"))
// console.log(student1.hasOwnProperty("age"))

// "study" in student1
// "age" in student1

// console.log("study" in student1)
// console.log("age" in student1)




// let btn1 = document.getElementById("showUrl");

//   btn1.addEventListener("click", function(){
//     alert("Current URL: " + window.location.href);

//   })

//   let btn2 = document.getElementById("goGoogle");
//   btn2.addEventListener("click",function(){

//       window.location.href = "https://www.google.com";
//   })

// let btn =document.getElementById("domain")

// btn.addEventListener("click", function(){
//     alert("Current Domain:" + window.location.host)
// })



// let itemInput = document.getElementById("url")
// let btn =document.getElementById("pageUrl")

// btn.addEventListener("click",()=>{
//     let input = itemInput.value 
//     if(input === ""){
//         alert("insan the puttar ban")
//     }
//     window.location.href = input
// })

// let btn =document.getElementById("checkProtocol")

// btn.addEventListener("click", ()=>{
// let protocol = window.location.protocol;

// if(protocol === "https:"){
//     alert("u r safe 👍")
// }
// else if(protocol === "http:"){
//     alert("u r safe 👍")
// }
// else{
//     alert ("to to gaya beta")
// }

// })

// let btn1 = document.getElementById("assign")
// let btn2 = document.getElementById("replace")

// btn1.addEventListener("click", () => {
// location.assign("https://www.youtube.com");
// })
// btn2.addEventListener("click", () => {
//     location.replace ("https://www.google.com")
// })

// console.log(location.href)


// let btn1 = document.getElementById("assign")
// let btn2 = document.getElementById("replace")

// btn1.addEventListener("click", () => {
// location.reload()
// })
// btn2.addEventListener("click", () => {
//   history.length           
// })

// let box = document.getElementById("box");
// let btn = document.getElementById("addContent")
// let btn2 = document.getElementById("changeText")

// btn.addEventListener("click", ()=> {
//     box.innerHTML = "<h1>WELCOME TO NAYA PAKISTAN!</h1><p>HELLO KESE HO JANAB</p>"
// })

// btn2.addEventListener("click", ()=>{
//     box.innerText= "this is only text, no Html"
// })
// let box = document.getElementById("box");
// let btn = document.getElementById("addContent")
// let btn2 = document.getElementById("changeText")

// btn.addEventListener("click", ()=> {
//     box.innerHTML = "<h1> hello </h1>"
//     box.textContent = "<h1> hello </h1>"
// })

// let btn = document.getElementById("submit")
// let nameInput = document.getElementById("name")
// let emailInput = document.getElementById("email")
// let dateInput = document.getElementById("date")

// btn.addEventListener("click", (event) => {
//     let name = nameInput.value
//     let email = emailInput.value
//     let date = dateInput.value


//     document.createElement("p")

//     document.body.createElement("p")


//     if (name === "") {
//         p.innerText = "this field is required"

//         // console.log("Name is required");

//     }


//     if (email === "") {
//         console.log("Email is required");
//     }
//     if (date === "") {
//         console.log("Date is required");
//         return
//     }



//     event.preventDefault()
//     setTimeout(function () {
//          alert("Form succesfully submited") 
//         }, 2000);


// })

// body.createElement("p")




// let btn = document.getElementById("submit")
// let nameInput = document.getElementById("name")
// let emailInput = document.getElementById("email")
// let dateInput = document.getElementById("date")
// let message = document.getElementById("message")

// btn.addEventListener("click", (event) => {
//             event.preventDefault()
//             message.textContent = ""
    
//     try {
//         let name = nameInput.value
//         let email = emailInput.value
//         let date = dateInput.value
        
//         if(name===""|| email==="" || date=== ""){
            
//             throw "All fields are required"
//         }
//         let success = document.createElement("p")
//         success.textContent = "Form successfully submited"
//         success.className="success"
//         message.appendChild(success)
//     }
//     catch(error){
        
//         let div = document.createElement("div")
        
//         let p =document.createElement("p")
        
//         p.textContent= error
//         p.className = "error"
        
//         div.appendChild(p)
//         message.appendChild(div)
        
        
        
//     }
    
//     btn.disabled = true
// btn.textContent = "Submitting..."

// setTimeout(() => {
//   message.textContent = ""
//   btn.disabled = false
//   btn.textContent = "Submit"
// }, 2000)

//  })

// let btn = document.getElementById("submit")
// let nameInput = document.getElementById("name")
// let emailInput = document.getElementById("email")
// let dateInput = document.getElementById("date")
// let message = document.getElementById("message")

// btn.addEventListener("click", (event) => {
//   event.preventDefault()

//   // pehle purana message clear
//   message.textContent = ""

//   try {
//     let name = nameInput.value
//     let email = emailInput.value
//     let date = dateInput.value

//     if (name === "" || email === "" || date === "") {
//       throw "All fields are required"
//     }

//     // success message
//     let success = document.createElement("p")
//     success.textContent = "Form submitted successfully"
//     success.className = "success"
//     message.appendChild(success)

//   } catch (error) {
//     let div = document.createElement("div")
//     let p = document.createElement("p")

//     p.textContent = error
//     p.className = "error"

//     div.appendChild(p)
//     message.appendChild(div)
//   }
// })


// let btn = document.getElementById("submit")
// let nameInput = document.getElementById("name")
// let emailInput = document.getElementById("email")
// let dateInput = document.getElementById("date")
// let message = document.getElementById("message")

// let errors = [];

// btn.addEventListener("click",(event)=>{
// event.preventDefault()

// message.textContent= ""

// try {
//     let name = nameInput.value 
//     let email = emailInput.value 
//     let date = dateInput.value

    
//     if(name === "" ||email=== ""|| date ===""){
//        if(email.includes==="@" && email.includes === "." && !email.startwith ==="@" && !email.endwith === "@") {

//        }

//         for(let i =0; i < email.length; i++){
//             email.push(errors)
//         }
// throw "All fields are required"

//     }
// } catch (error) {
//     let div = document.createElement("div")
//     let p = document.createElement("p")
//     p.className("para")

//     p.textContent = error

//     div.appendChild("para")
//     message.appendChild(div)
// }
// })

let btn = document.getElementById("submit")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let dateInput = document.getElementById("date")
let message = document.getElementById("message")

btn.addEventListener("click", (event) => {
  event.preventDefault()
  message.textContent = ""

  let errors = []

  let name = nameInput.value.trim()
  let email = emailInput.value.trim()
  let date = dateInput.value.trim()

  // field validation
  if (name === "") errors.push("Name is required")
  if (email === "") errors.push("Email is required")
  if (date === "") errors.push("Date is required")

  // email validation
  if (
    email !== "" &&
    (!email.includes("@") ||
     !email.includes(".") ||
     email.startsWith("@") ||
     email.endsWith("@"))
  ) {
    errors.push("Email format is invalid")
  }

  try {
    if (errors.length > 0) {
      throw errors
    }

    let success = document.createElement("p")
    success.textContent = "Form successfully submitted"
    success.className = "success"
    message.appendChild(success)

  } catch (errors) {
    errors.forEach(err => {
      let p = document.createElement("p")
      p.textContent = err
      p.className = "error"
      message.appendChild(p)
    })
  }
})


