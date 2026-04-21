// // // signup //////
// const firebaseConfig = {
//     apiKey: "AIzaSyD-f-pRL1wAMRNSltiJqOP0LjLX4KrV20c",
//     authDomain: "i-m-s-c62d9.firebaseapp.com",
//     projectId: "i-m-s-c62d9",
//     storageBucket: "i-m-s-c62d9.firebasestorage.app",
//     messagingSenderId: "585601588824",
//     appId: "1:585601588824:web:b3f44eea9bded3b112f42d"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig)

// // // // Auth
// // const auth = firebase.auth()

// // let email = document.getElementById("email")
// // let password = document.getElementById("password")
// // let btn = document.getElementById("submit_btn")

// // btn.addEventListener("click", function () {

// //     let emailValue = email.value
// //     let passwordValue = password.value

// //     auth.createUserWithEmailAndPassword(emailValue, passwordValue)
// //         .then(() => {
// //             console.log("User Created")
// //         })
// //         .catch((error) => {
// //             console.log(error.message)
// //         })
// // })

// // // Firebase already initialized hona chahiye
// // // const auth = firebase.auth()

// // // login //////

// // let email1 = document.getElementById("email1")
// // let password1 = document.getElementById("password1")
// // let loginBtn = document.getElementById("login_btn")
// // let output = document.getElementById("output")

// // loginBtn.addEventListener("click", function(){

// //     let emailValue1 = email1.value
// //     let passwordValue1 = password1.value

// //     auth.signInWithEmailAndPassword(emailValue1, passwordValue1)
// //         .then(() => {
// //             console.log("Login Success")
// //             output.innerHTML = "Welcome Back!"
// //         })
// //         .catch((error) => {
// //             console.log(error.message)
// //             output.innerHTML = error.message
// //         })
// // })


// // // signout //////

// // let logoutBtn = document.getElementById("logout_btn")
// // let output1 = document.getElementById("output1")

// // logoutBtn.addEventListener("click", function(){

// //     auth.signOut()
// //         .then(() => {
// //             console.log("Logout Success")
// //             output1.innerHTML = "User Logged Out"
// //         })
// //         .catch((error) => {
// //             console.log(error.message)
// //         })

// // })


// // Firebase config
// firebase.initializeApp(firebaseConfig)

// // Services
// const auth = firebase.auth()
// const db = firebase.firestore()

// // Elements
// let email = document.getElementById("email")
// let password = document.getElementById("password")
// let role = document.getElementById("role")
// let btn = document.getElementById("signup_btn")

// btn.addEventListener("click", function(){

//     let emailValue = email.value
//     let passwordValue = password.value
//     let roleValue = role.value

//     // 1. Create user in Auth
//     auth.createUserWithEmailAndPassword(emailValue, passwordValue)
//       .then((userCredential) => {

//         let uid = userCredential.user.uid

//         // 2. Save data in Firestore
//         return db.collection("users").doc(uid).set({
//             email: emailValue,
//             role: roleValue,      // admin / owner
//             status: "active"      // default active
//         })

//       })
//       .then(() => {
//         console.log("User + Role Saved")
//       })
//       .catch((error) => {
//         console.log(error.message)
//       })

// })

const firebaseConfig = {
    apiKey: "AIzaSyDE-tEnK7H9FCoWe42qQWdCcPdkB3buvHk",
    authDomain: "i-m-s-d76e6.firebaseapp.com",
    projectId: "i-m-s-d76e6",
    storageBucket: "i-m-s-d76e6.firebasestorage.app",
    messagingSenderId: "24729400746",
    appId: "1:24729400746:web:9b0d9d2a91c705406467d3",
    measurementId: "G-XLPCCNXRFT"
};

firebase.initializeApp(firebaseConfig)

let auth = firebase.auth()

let email = document.getElementById("email")
let password = document.getElementById("password")
let signupBtn = document.getElementById("signup_btn")
let loginBtn = document.getElementById("login_btn")
let logoutBtn = document.getElementById("logout_btn")
let output = document.getElementById("output")

signupBtn.addEventListener("click", function(){
    let emailValue = email.value
    let passwordValue = password.value

    if(emailValue === "" || passwordValue === ""){
        output.innerHTML = "please fill all the boxes"

        return
    }

    auth.createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredencial)=>{
        console.log("user Created:" + userCredencial.user.uid)
        output.innerHTML = "Signup successful"
    })
    .catch((error)=> {
        console.log(error.message)
        output.innerHTML= error.message
    })
    
})
// let lemail = document.getElementById("lemail")
// let lpassword = document.getElementById("lpassword")
// let loutput = document.getElementById("loutput")

loginBtn.addEventListener("click", function(){
    let emailValue = email.value
    let passwordValue = password.value

    if(emailValue === "" || passwordValue === ""){
        output.innerHTML = "please fill all the boxes"

        return
    }

    auth.signInWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredencial)=>{
        console.log("user Login:" + userCredencial.user.uid)
        output.innerHTML = "login successful"
    })
    .catch((error)=> {
        console.log(error.message)
        output.innerHTML= error.message
    })
    
})
logoutBtn.addEventListener("click", function(){
  

    auth.signOut()
    .then(()=>{
        console.log("Logout Succesful")
        output.innerHTML = "logout successful"
    })
   
    
})

let db = firebase.firestore()

db.collection("user").add({
    city:"karachi",
    id:"27352376",
    nationality:"pakistani"
})
.then(()=>{
    console.log("data saved")
})

document.getElementById("save_btn").addEventListener("click", function(){

    let name = document.getElementById("name").value
    let studentClass = document.getElementById("class").value

    db.collection("students").add({
        name: name,
        class: studentClass
    })
    .then(()=>{
        console.log("saved data")
    })

})
db.collection("students").get()
.then((snapshot) => {
    console.log(snapshot)
})

