const express = require("express")

const fs = require("fs")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const signupController = require("../controller/authController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()


router.post("/signup",signupController)


router.post("/login", async (req,res)=>{
    const {email, password} = req.body

    const fileData = fs.readFileSync("user.json", "utf-8")

const users = JSON.parse(fileData)


    const user = users.find((user)=> user.email === email)

    if(!user){
        return res.status(401).json({
            message: "invalid credincial"
        })
    }

    

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        return res.status(401).json({
            message:"invalid credinials"
        })
    }
    const token = jwt.sign({email:email}, "S3CR3T")

    res.status(201).json({
        message: "login successfull",
         email:email,
         token: token
    })

    
    
})
router.get("/profile",authMiddleware,(req,res)=>{
    res.json({
        message:"welcome",
        user: req.user
    })
})

module.exports = router