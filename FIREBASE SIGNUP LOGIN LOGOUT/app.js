const firebaseConfig = {
    apiKey: "AIzaSyApd9Ol3DqEXCpgOu3cHGLHSR-9K8BOl2g",
    authDomain: "installment-m-s.firebaseapp.com",
    projectId: "installment-m-s",
    storageBucket: "installment-m-s.firebasestorage.app",
    messagingSenderId: "996267922883",
    appId: "1:996267922883:web:96fabeda66293b4931d976",
    measurementId: "G-9SNFTX9VRP"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

let email = document.getElementById("email")
let password = document.getElementById("password")
let signupbtn = document.getElementById("signup_btn")
let signinbtn = document.getElementById("signin_btn")
let signoutbtn = document.getElementById("signout_btn")
let output = document.getElementById("output")
let output2 = document.getElementById("output2")

signupbtn.addEventListener("click", function () {
    let emailValue = email.value
    let passwordValue = password.value

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {
            alert("signup successful")
            console.log(userCredential.user)
        })
        .catch((error) => {
            console.log(error.message)
        })
})
signinbtn.addEventListener("click", function () {
    let emailValue = email.value
    let passwordValue = password.value

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {

            console.log(userCredential.user)
            output.innerHTML = "welcome to my page"
        })
        .catch((error) => {
            console.log(error.message)
        })
})


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("user is logged in")

        console.log(user.email)
    } else {
        console.log("no user login")
    }
})

signoutbtn.addEventListener("click", function () {



    firebase.auth().signOut()
        .then(() => {
            console.log("User signed out");
            output.innerHTML = "please  come again"

        })
        .catch((error) => {
            console.log(error.message);
        });
})

// const db = firebase.firestore()

// function addStudent() {
//     let name = document.getElementById("name").value;
//     let studentClass = document.getElementById("class").value;

//     db.collection("student").add({
//         name: name,
//         class: studentClass
//     })
//         .then(() => {
//             console.log("student added")
//             getStudents();
//             output2.innerHTML += `<p> ${name} - ${studentClass}</p>`
//         })
//         .catch((error) => {
//             console.log(error.message)
//         });
// }


// function getStudents() {

//     db.collection("student").get()
//         .then((snapshot) => {

//             output2.innerHTML = ""; // clear old data

//             snapshot.forEach((doc) => {

//                 let data = doc.data();
//                 let id = doc.id;

//                 console.log("ID:", id);
//                 console.log("DATA:", data);

//           output2.innerHTML += `
//   <div style="border:1px solid black; margin:5px; padding:5px;">
//     <p>${data.name} - ${data.class}</p>
//   </div>
// `;
//             });

//         })
//         .catch((error) => {
//             console.log(error.message)
//         });
// }

const db = firebase.firestore()

function addStudent(){

    let user = firebase.auth().currentUser;

    if(!user){
        alert("Please login first ❗");
        return;
    }

    let userName = document.getElementById("name").value
    let userClass = document.getElementById("class").value
    let userAge= document.getElementById("age").value

    db.collection("user").add({
       userName: userName,
       userClass: userClass,
       userAge: userAge,
        uid: user.uid 
    })
    .then(()=>{
        console.log("user added")
        getStudents()
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

function getStudents(){

    let user = firebase.auth().currentUser;

    if(!user){
        console.log("no user");
        return;
    }

    db.collection("user")
    .where("uid", "==", user.uid) // 🔥 filter
    .get()
    .then((snapshot)=>{

        output2.innerHTML = "";

        snapshot.forEach((doc)=>{

            let data = doc.data();
            let id = doc.id;

            output2.innerHTML += `
            <div style="border:1px solid black; margin:5px; padding:5px;">
              <p>${data.userName} - ${data.userClass} - ${data.userAge}</p>
              <button onclick="deleteStudent('${id}')">Delete</button>
            </div>
            `;
        });
    })
    .catch((error)=>{
        console.log(error.message)
    })
}