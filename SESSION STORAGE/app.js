// // // // // sessionStorage.setItem("name", "kaleem ullah")

// // // // // let myName = sessionStorage.getItem("name")

// // // // // console.log(myName)

// // // // // sessionStorage.setItem("age", 24)

// // // // // let age = sessionStorage.getItem("age")

// // // // // console.log(age)

// // // // const btn = document.getElementById("btn")

// // // // btn.addEventListener("click", function(){

// // // //     sessionStorage.setItem("name", "kaleem" )
// // // //     sessionStorage.setItem("city", "karachi" )
// // // //     sessionStorage.setItem("course", "web development")
    
// // // //     let myName = sessionStorage.getItem("name")
// // // //     let city = sessionStorage.getItem("city")
// // // //     let course = sessionStorage.getItem("course")
    
// // // //     console.log(myName)
// // // //     console.log(city)
// // // //     console.log(course)
// // // // })

// // // const btn = document.getElementById("btn")
// // // const output = document.getElementById("output")

// // // btn.addEventListener("click", function(){
// // //     sessionStorage.setItem("name", "kaleem")
// // // })

// // // // Page load
// // // let myName = sessionStorage.getItem("name")

// // // if(myName){
// // //     output.innerText = "Welcome "   myName
// // // }

// // // localStorage.setItem("name", "kaleem ullah")

// // // let name = localStorage.getItem("name")
// // // console.log(name)

// // // localStorage.setItem("city", "karachi")

// // // let city = localStorage.getItem("city")

// // // console.log(city

// // // localStorage.setItem("name", "kaleem ullah")
// // // let name= localStorage.getItem("name")
// // // console.log(name)
// // // localStorage.setItem("age", 24)
// // // let age= localStorage.getItem("age")
// // // console.log(age)
// // // localStorage.setItem("course", "web dev")
// // // let course= localStorage.getItem("course")
// // // console.log(course)



// // // let btn = document.getElementById("save_btn")

// // // btn.addEventListener("click", function(){
// //     //     localStorage.setItem("name", "kaleem ullah")
// //     //     let name= localStorage.getItem("name")
// //     //     localStorage.setItem("age", 24)
// //     // let age= localStorage.getItem("age")
// // // localStorage.setItem("course", "web dev")
// // // let course= localStorage.getItem("course")
// // // console.log(name)
// // // console.log(age)

// // // console.log(course)

// // // })


// // let inbtn = document.getElementById("login_btn")
// // let outbtn = document.getElementById("logout_btn")
// // let userName = document.getElementById("username")
// // let output =document.getElementById("output")


// // inbtn.addEventListener("click", function(){
// //     let name= userName.value


// //         localStorage.setItem("username", name)
       
// //       console.log(name)
// //       output.innerHTML = "Output: " + name


// // })

// // let savedName = localStorage.getItem("username")
// // if(savedName){
// //     output.innerHTML = "welcome" + savedName
// // }

// // outbtn.addEventListener("click", function(){
       
// //         localStorage.removeItem("username")

// //         console.log("logged out")

// //         output.innerHTML = "logget out"
       


// // })

// // let inbtn = document.getElementById("login_btn")
// // let outbtn = document.getElementById("logout_btn")
// // let userName = document.getElementById("username")
// // let output =document.getElementById("output")

// // inbtn.addEventListener("click", function(){
// //     let name = userName.value
// //     if (name === "") {
// //         output.innerHTML = "please enter name"
// //         return
// //     } 
// //     let time = new Date().toLocaleTimeString()
// //     localStorage.setItem("username", name)
// //     localStorage.setItem("time", time)

// //     output.innerHTML ="welcome back "+ name + " login time " + time
   
// // })

// // outbtn.addEventListener("click", function(){
// //     localStorage.removeItem("username")
// //     output.innerHTML = "please come back again"
    
// // })


// // let user = {name:"kaleem", city: "karachi"}

// // localStorage.setItem("user", JSON.stringify(user))

// // let newuser = localStorage.getItem("user")
// // console.log(newuser)

// // let user = {name: "Ali", age: 25, course: "Web Dev"}

// // localStorage.setItem("user", JSON.stringify(user))

// // console.log(localStorage.getItem("user"))

// // let nameBtn = document.getElementById("name_btn")
// // let nameInput = document.getElementById("name_input")

// // // let ageBtn = document.getElementById("age_btn")
// // let ageInput = document.getElementById("age_input")

// // let output = document.getElementById("output")


// // nameBtn.addEventListener("click", function(){
// //     let userName = nameInput.value
// //     let userAge = ageInput.value

// //     localStorage.setItem("username", userName)
// //     localStorage.setItem("userage", userAge)

// //     console.log(localStorage.getItem("username"))
// //     console.log(localStorage.getItem("userage"))

// //     output.innerHTML = "Name: "+ userName +"  "+ " Age:  " + userAge

// // })

// // let user = {name: "Kaleem", city: "Karachi"}

// // localStorage.setItem("user", JSON.stringify(user))

// // console.log(localStorage.getItem("user"))

// // let user = {name: "Kaleem", city: "Karachi"}
// // localStorage.setItem("user", JSON.stringify(user))

// // let data = localStorage.getItem("user")
// // // console.log(data)
// // let obj = JSON.parse(data)

// // console.log(obj.name)

// // let user = {name: "Kaleem", city: "Karachi"}
// // localStorage.setItem("user", JSON.stringify(user))

// // let data = localStorage.getItem("user")
// // // console.log(data)
// // let obj = JSON.parse(data)

// // console.log(obj.city)

// let nameBtn = document.getElementById("name_btn")
// let nameInput = document.getElementById("name_input")

// // let ageBtn = document.getElementById("age_btn")
// let ageInput = document.getElementById("age_input")

// let output = document.getElementById("output")

// nameBtn.addEventListener("click", function(){
//     let user = {name:"Ali", city:"Lahore"}
//     localStorage.setItem("user",JSON.stringify(user))
//     let newuser = localStorage.getItem("user")
//     console.log(newuser)

//     let obj = JSON.parse(newuser)
//     output.innerHTML = "name : " + obj.name + "  city: "+ obj.city
// })



// // let str = "apple,banana,mango"

// // let arr = str.split(",")

// // console.log(arr)

// // let color = "red , green, blue"
// // let newcolor = color.split(",")
// // console.log(newcolor)

// // let color = "hello world"
// // let newcolor = color.split("")
// // console.log(newcolor)
// // let color = "apple banana mango"
// // let newcolor = color.split(" ")
// // console.log(newcolor)
// // let color = "2026-04-16"
// // let newcolor = color.split(" ")
// // console.log(newcolor)
// // let color = "Ali,Sara,Ahmed"
// // let newcolor = color.split(" ")
// // for(let item of newcolor)
// // console.log(item)
// let color = "HTML,CSS,JS,React"
// let newcolor = color.split("li")

// console.log(newcolor)

