function signup(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    auth.createUserWithEmailAndPassword(email, password)
    
    .then(()=>{
        if (!email || !password) {
            alert("all fields required")
            return
        } 
        console.log("user created")
        window.location.href= "../login/index.html"
    })
    .catch((error)=>{
        console.log(error.message)
    })
}