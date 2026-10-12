const express = require("express")
const {connectDB} = require("./helper/db")

const authRouter = require("./routers/auth.router")

const app = express()
app.use(express.json())

app.use("/auth",authRouter)

const port = 5000

async function startServer(){
try {
    await connectDB()

    app.listen(port, ()=>{
    
    
    console.log("server running on port 5000")
})
    
} catch (error) {
    console.log("database connection failed", error)
}
    
}




startServer()