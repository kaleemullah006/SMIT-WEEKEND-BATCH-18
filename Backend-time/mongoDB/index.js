
const express = require("express")
const {connectDB} = require("./helper/db")
const {authRouter} = require("./routers/auth.router")

const app = express()

app.use(express.json())

app.use("/auth", authRouter)

connectDB()

const port = 5000

app.listen(port, ()=>{
    console.log("server running on port 5000")
})

