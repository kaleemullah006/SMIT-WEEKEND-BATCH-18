const { getDB } = require("../helper/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signupService = async ({ name, email, password }, res) => {


    const existingUser = await getDB().collection("user").findOne({ email })

    if (existingUser) {
        return res.status(409).json({
            message: "user already existing"
        })

    }
    const hashedPassword = await bcrypt.hash(password, 10)



    const result = await getDB().collection("user").insertOne({ name, email, password: hashedPassword,role:"user" })

    console.log(result)

    res.status(201).json({
        message: "user created successfully"
    })
}
const loginService = async ({ email, password }, res) => {
    const user = await getDB().collection("user").findOne({ email })
    if (!user) {
        return res.status(409).json({
            message: "invalid credencial"
        })
    }
    const matchedPassword = await bcrypt.compare(password, user.password)

    if (!matchedPassword) {
        return res.status(409).json({
            message: "invalid credencials"
        })
    }
    const jwtoken = jwt.sign({id:user._id,role:user.role},process.env.JWT_TOKEN,{expiresIn:"1d"})


    res.status(200).json({
        message: "user login successfully",
        token:jwtoken
    })
}

module.exports = { signupService, loginService }