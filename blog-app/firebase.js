const firebaseConfig = {
  apiKey: "AIzaSyBQ9q1mMP-pUdyxm5t7rNnJi2QISx1fbeg",
  authDomain: "blogg-app-d5f6e.firebaseapp.com",
  projectId: "blogg-app-d5f6e",
  storageBucket: "blogg-app-d5f6e.firebasestorage.app",
  messagingSenderId: "473976620002",
  appId: "1:473976620002:web:c68af5cd70b6eca4c1efbb"
};

firebase.initializeApp(firebaseConfig);




const auth = firebase.auth();

let db = firebase.firestore()

