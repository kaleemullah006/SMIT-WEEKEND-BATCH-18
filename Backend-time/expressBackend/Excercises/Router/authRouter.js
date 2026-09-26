const express = require("express")
const jwt = require("jsonwebtoken")

const fs = require("fs")

const bcrypt = require("bcrypt")

const router = express.Router()


router.post("/signup", async (req,res)=>{
    const data = req.body 

    const {email, password} = data

    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    const user = {email, password:hashedPassword}

  

    const fileData = fs.readFileSync("user.json", "utf-8")

    const users = JSON.parse(fileData)

    const newUser = users.find((user)=> user.email === email )
    if(newUser){
        return res.status(409).json({
        message: "user already available"
    })}

    users.push(user)

    fs.writeFileSync("user.json", JSON.stringify(users))

    

    res.status(201).json({
        message:"user created successfully friday",
        user:user.email
        
    })
})
router.post("/login", async (req,res)=>{
    const data = req.body 

    const {email, password} = data

  const fileData = fs.readFileSync("user.json", "utf-8")

  const users = JSON.parse(fileData)

  const user = users.find((user)=> user.email === email)

  if(!user){
    return res.status(401).json({
        message:"invalid credencials"
    })
  }

  

    const isMatch =await bcrypt.compare(password, user.password)

  if(!isMatch){
    return res.status(401).json({
        message: "invalid credincials"
    })
  }

  const token = jwt.sign(email, "SECRET")

  res.status(200).json({
    message:"login successful",
    user: user.email,
    token
  })


})

module.exports = router