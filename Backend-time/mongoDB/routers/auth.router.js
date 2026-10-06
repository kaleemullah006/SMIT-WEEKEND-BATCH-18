const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const { Router } = require("express")

const { getDB } = require("../helper/db")
const authMiddleware = require("../middleware/auth.middleware")
const sendMail = require("../email/send.email")
const router = Router()

// SIGNUP ////////////

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)



    const existingUser = await getDB().collection("user").findOne({ email })



    if (existingUser) {
        return res.status(409).json({
            message: "user already available"

        })
    }

    const user = await getDB().collection("user").insertOne({ name, email, password: hashedPassword })
     
    await sendMail(
    email, 
    "welcome to our app",
    `Hello ${name} ${email} , your account has been created successfully `

)


    res.status(201).json({
        message: "user created",
        email: email,
        id: user.insertedId
    })

})

// LOGIN /////////////
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    
    
    
    const user = await getDB().collection("user").findOne({
        email,
        
    })
    
    if (!user) {
        return res.status(409).json({
            message: "credencials not found"
        })
    }
    
    const isMatchedUser = await bcrypt.compare(password, user.password)
    
    if (!isMatchedUser) {
        return res.status(409).json({
            message: "credencials not found"
        })
    }
    const token =  jwt.sign({email:user.email}, process.env.SECRET_KEY)

    res.status(200).json({
        message: "login succesfull",
        email:user.email,
        token,

        id: user._id
    })

})

// PROTECTED ROUTE /////////////////////
router.post("/profile",authMiddleware, async(req,res)=>{

    res.status(200).json({
        message:"protected route",
        user: req.user
    })
    
})

// FORGOT PASSWORD /////////////
router.post("/forgot-password", async(req,res)=>{
    const {email} = req.body

    const user = await getDB().collection("user").findOne({email})

    if(!user){
       return res.status(404).send("user not found")
    }

    const resetToken = crypto.randomBytes(32).toString("hex")

   await getDB().collection("user").updateOne({email},{
    $set:{resetToken:resetToken}
   })


   await sendMail(email, 
    "Reset password",
    `your password reset token is: ${resetToken}`
   )

   res.status(200).send("passwprd reset token is sent on your email")
})

// RESET PASSWORD //////////
router.post("/reset-password", async(req,res)=>{
    const {email,resetToken,newPassword} = req.body

    const user = await getDB().collection("user").findOne({email,resetToken})

    if(!user){
        res.status(404).send("invalid or Token Expired")
    }
const hashedPassword = await bcrypt.hash(newPassword,10)
    await getDB().collection("user").updateOne({email}, {$set:{password:hashedPassword},$unset:{resetToken:""}})

    res.status(200).send("password reset successfullly")
})


module.exports = { authRouter: router }