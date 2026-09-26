const bcrypt = require("bcrypt")
const saveUser =require("../repositories/authRepositories")

async function signupService(name,email,password){

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {name,email, password:hashedPassword}

    console.log(hashedPassword)

    const savedUser = saveUser(user)

    return savedUser

}
module.exports = signupService