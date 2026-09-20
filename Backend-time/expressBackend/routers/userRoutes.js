const express = require("express")

const router = express.Router()

router.post("/users",(req,res)=>{
    res.status(201).send("user created")
})

module.exports = router