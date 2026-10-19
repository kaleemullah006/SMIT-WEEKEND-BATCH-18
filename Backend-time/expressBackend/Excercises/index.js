const express = require("express")

const app = express()

app.use(express.json())

const authRouters = require("./Router/authRouter")

app.use("/auth", authRouters)



const port = 5000

app.listen(port, ()=>{
    console.log("server running on port 5000")
})