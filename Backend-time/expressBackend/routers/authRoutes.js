const express = require("express")

const bcrypt = require("bcrypt")

const router = express.Router()

router.post("/signup", async (req,res)=>{
    const {email, password} = req.body

    const hashedPassword = await bcrypt.hash(password,10)
    console.log(email,password)

    console.log(hashedPassword)

    res.status(201).json({
        message: "user created successfully",
        password: hashedPassword,
        email,
    })
})

module.exports = router