// const express = require("express")

// const app = express()

// // app.use(express.json())

// app.use((req,res,next)=>{
//     console.log("request received")
//     next()
// })
// const users = [
//         {id:1, name:"ahmad", age:24},
//         {id:2, name:"kaleem", age:28},
//         {id:3, name:"ali", age:20}
//     ]

// app.get("/about", (req,res)=>{
//     res.status(420).send("welcome to about page")

    
// })
// app.get("/contact", (req,res)=>{
//     res.send("welcome ton contact page")
// })
// app.get("/users", (req,res)=>{
//     res.json(users
//     //     [
//     //     {id:1, name:"ahmad", age:24},
//     //     {id:2, name:"kaleem", age:28},
//     //     {id:3, name:"ali", age:20}
//     // ]
// )
// })

// // app.post("/users",(req,res)=>{
// //     const user =req.body
// //     user.id = users.length + 1
   
    

// //     users.push(user)
// //     res.json(users)
    

    
// // })

// app.post ("/users",(req,res)=>{
//     console.log(req.body)

//     res.send({
//         message: "user received succesfully",
//         data: req.body
//     })
// })

// app.put("/", (req,res)=>{
//     res.send("put running")
// })
// app.delete("/", (req,res)=>{
//     res.send("delete running")
// })



// const port = 5000
// app.listen(port, ()=>{
//     console.log("server running on port 5000")
// })


// const express = require("express")

// const userRouter = require("./routers/userRoutes")

// const app = express()

// app.use(userRouter)

// app.listen(3000, ()=>{
//     console.log("server runnunig on 3000")
// })

const express = require("express")
const cors = require("cors")

const authRoutes = require("./routers/authRoutes")


const productRouters = require("./routers/productRouters")
const loggerMiddlewhare = require("./middleware/loggerMiddlewhare")

const app = express()
app.use(express.json())

// app.use(loggerMiddlewhare)

app.use(cors())
// app.use(json.parser())
app.use("/auth", authRoutes)

app.use((req,res,next)=>{
// console.log(req.method)  
//   console.log(req.url)
    next()
})

// app.use("/api/products", productRouters)
app.use("/api", productRouters)

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})






