const express = require("express")
// const {connectDB} = require("./helper/db")

const authRouter = require("./routers/auth.router")
const followupRouter = require("./routers/followup.router")
const connectMongoose = require("./config/mongoose")
const mongooseUserAuth = require("./routers/user.router")
const mongooseLeadRouter = require("./routers/lead.router")
const app = express()
app.use(express.json())

app.use("/auth",authRouter)
app.use("/",followupRouter)
app.use("/lead", mongooseLeadRouter)
app.use("/users", mongooseUserAuth)

const port = 5000

async function startServer(){
try {
    await connectMongoose()

    app.listen(port, ()=>{
    
    
    console.log("server running on port 5000")
})
    
} catch (error) {
    console.log("database connection failed", error)
}
    
}




startServer()