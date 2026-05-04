function signin(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    auth.signInWithEmailAndPassword(email, password)
    .then(()=>{
        if (!email || !password) {
            alert("all fields required")
            
        } 
        console.log("log in successful")
        window.location.href = "../index.html";
    })
    .catch((error)=>{
        console.log(error.message)
    })
}