const firebaseConfig = {
  apiKey: "AIzaSyDsB5nm8zfrlban43H_r0C5YGj6o0Lu7qY",
  authDomain: "users-ea193.firebaseapp.com",
  projectId: "users-ea193",
  storageBucket: "users-ea193.firebasestorage.app",
  messagingSenderId: "576192900930",
  appId: "1:576192900930:web:ce42aef66d944f37cfa2db",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

let email = document.getElementById("email");
let password = document.getElementById("password");
let signupBtn = document.getElementById("signup");
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let output = document.getElementById("output");

signupBtn.addEventListener("click", function () {
  let emailValue = email.value;
  let passwordValue = password.value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((abc) => {
      console.log(abc.user.email);
    })
    .catch((error) => {
      console.log("error.message");
    });
});
loginBtn.addEventListener("click", function () {
  let emailValue = email.value;
  let passwordValue = password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((abc) => {
      console.log(abc.user.email);
    })
    .catch((error) => {
      console.log("error.message");
    });
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("user logged in: ", user.email);
  } else {
    console.log("user logged out");
  }
});

logoutBtn.addEventListener("click", function () {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logout successful");
    })
    .catch((error) => {
      console.log("error.message");
    });
});

let db = firebase.firestore();

function addStudents() {
  let user = firebase.auth().currentUser;

  let nameValue = document.getElementById("name").value;
  let classValue = document.getElementById("class").value;

  if (!classValue || !classValue) {
    alert("all fields are required");
    return
  }

  db.collection("student")
    .add({
      nameValue,
      classValue,
    })
    .then(() => {
      console.log("student added");
    })
    .catch((error) => {
      console.log(error.message);
    });

  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
}

function getStudents() {
  db.collection("student")
    .get()
    .then((querySnapshot) => {
      output.innerHTML = "";

      querySnapshot.forEach((doc) => {
        let data = doc.data();

        output.innerHTML += `<div><p>${data.nameValue}--${data.classValue}</p>
     <button onclick="deleteStudent('${doc.id}')">Delete</button>
     <button onclick="editStudent('${doc.id}','${data.nameValue}', '${data.classValue}')">
            Edit
            </button>
    
    </div>`;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function deleteStudent(id) {
  db.collection("student")
    .doc(id)
    .delete()
    .then((id) => {
        alert("sure! you want to delete this ")
      console.log("student deleted");
      getStudents();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function editStudent(id, name, className) {
  document.getElementById("name").value = name;
  document.getElementById("class").value = className;

  window.currentEditId = id;
}

function updateStudent() {
  let nameValue = document.getElementById("name").value;
  let classValue = document.getElementById("class").value;

  db.collection("student")
    .doc(window.currentEditId)
    .update({
      nameValue: nameValue,
      classValue: classValue,
    })
    .then(() => {
      console.log("student updated");
      getStudents();

      document.getElementById("name").value = "";
      document.getElementById("class").value = "";
      window.currentEditId = null;
    });
}
