const express = require("express")

const fs = require("fs")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()



router.post("/signup", async (req,res)=>{
    const {email, password} = req.body

    const hashedPassword = await bcrypt.hash(password,10)
    const user = {email, password:hashedPassword}
    
    const fileData = fs.readFileSync("user.json", "utf-8")
    
    const users = JSON.parse(fileData)
    users.push(user)


    fs.writeFileSync("user.json", JSON.stringify(users))

    console.log(user)

    res.status(201).json({
        message: "user created successfully",
         email
    })
})

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