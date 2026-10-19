// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(=.*\d).{8,}$/

// const password = "Kaleem123"

// if(passwordRegex.test(password)){
//     console.log("valid password")
// }else{
//     console.log("invalid password")
// }

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

const password = "Kaleem123"

if (passwordRegex.test(password)){
    console.log("valid password")
}else{
    console.log("invalid password")
}