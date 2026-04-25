const firebaseConfig = {
    apiKey: "AIzaSyCPRoCUgYXzX6swyM_hWD0FsdDEZx1VQOA",
    authDomain: "installment-m-s-2fc4b.firebaseapp.com",
    projectId: "installment-m-s-2fc4b",
    storageBucket: "installment-m-s-2fc4b.firebasestorage.app",
    messagingSenderId: "529479960959",
    appId: "1:529479960959:web:e178f11b27086e9507324a",
    measurementId: "G-DDRZCL3Z1P"
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
            // alert("sign up successful")
            console.log("signup", emailValue)

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
            // alert("sign up successful")
            console.log("login :", emailValue)

        })
        .catch((error) => {
            console.log(error.message)
        })
})


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("user logged in")
    }
    else {
        console.log("no user logged in")
    }
})




signoutbtn.addEventListener("click", function () {


    firebase.auth().signOut()
        .then((userCredential) => {
            // alert("sign up successful")
            console.log("signout successful 😊")

        })
        .catch((error) => {
            console.log(error.message)
        })
})

const db = firebase.firestore()

function addStudent() {

    let user = firebase.auth().currentUser;

    if (!user) {
        alert("login first")
        return
    }
    let nameValue = document.getElementById("name").value
    let classValue = document.getElementById("class").value
    let ageValue = document.getElementById("age").value

    if (!nameValue || !classValue || !ageValue) {
        alert("all fields required")
        return
    };

    db.collection("student").add({
        nameValue: nameValue,
        classValue: classValue,
        ageValue: ageValue
    })

        .then(() => {
            console.log("student added")
            // output.innerHTML = `<p>${nameValue}-${classValue}-${ageValue}</p>`
        })
        .catch((error) => {
            console.log(error.message)
        })

}

function getStudents() {
    db.collection("student").get()
        .then((snapshot) => {
         output2.innerHTML = ""

         snapshot.forEach((doc)=>{
            let data = doc.data()

            output2.innerHTML += `<div><p>${data.nameValue}-${data.classValue}-${data.ageValue}</p>
            <button onclick="deleteStudent('${doc.id}')">Delete</button>
            
            <button onclick="editStudent('${doc.id}','${data.nameValue}', '${data.classValue}', '${data.ageValue}')">
            Edit
            </button>
            
            </div>`
         })
        })
        .catch((error)=>{
           console.log(error.message)
        })
}

// 2️⃣0️⃣ Delete function   //////


function deleteStudent(id){
    alert("are you sure")
    db.collection("student").doc(id).delete()
    .then(()=>{
        console.log("stedent deleted")
        getStudents()
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

function editStudent(id, name,classValue,age){
document.getElementById("name").value = name
document.getElementById("class").value = classValue
document.getElementById("age").value = age

window.currentEditId = id
}

function updateStudent(){

    let nameValue = document.getElementById("name").value;
    let classValue = document.getElementById("class").value;
    let ageValue = document.getElementById("age").value;

    db.collection("student").doc(window.currentEditId).update({
        nameValue: nameValue,
        classValue: classValue,
        ageValue: ageValue
    })
    .then(()=>{
        console.log("updated");
        getStudents();
    })
    .catch((error)=>{
        console.log(error.message)
    })
}