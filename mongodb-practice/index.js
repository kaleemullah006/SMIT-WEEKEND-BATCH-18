// const express = require("express")

// const connectDB = require("./config/db")

// const app = express()

// connectDB()

// app.get("/", (req,res) =>{
//     res.send("server is running")
// })

// const port = 3000 

// app.listen(port, ()=>{
//     console.log("server started")
// })

// const express = require("express")

// const app = express()

// const middleWareFunction = (req,res,next) =>{

//     req.user = "Ali"

//     next()
// }
// app.use(middleWareFunction);

// app.get("/",(req,res)=>{
//     res.send(req.user)
// })

// app.listen(3000, ()=>{
//     console.log("server started")
// })

// const express = require("express")

// const app = express()

// app.use(express.json())

// let students = [
//     {
//         name:"khan",
//         course: "web dev"
//     }
// ]

// app.get("/students", (req,res)=>{
//     res.send(students)
// })

// app.post("/students", (req,res)=>{
// let newStudent = req.body

// students.push(newStudent)

//     res.send(req.body)
//     // res.status(201)
// // .json({
// // success:true,
// // message:"student added succesfully",
// // data: newStudent
// //     })
// })

// let port = 3000 

// app.listen(port, ()=>{
//     console.log("server started on port 3000")
// })

// const express = require("express")

// const app = express()

// app.use((req,res,next)=>{

//     req.body = "admin"
//     next()
// })

// let students = [
//     {
//         name:"khan",
//         course: "web dev"
//     }
// ]

// app.get("/students", (req,res)=>{
//     res.status(200).json({
//         success:true,
//         data: students
//     })
// })

// app.post("/students", (req,res)=>{
// let newStudent = req.body

// students.push(req.role)

//     // res.send(req.body)
//     res.status(201)
// .json({
// success:true,
// message:"student created",
// data: newStudent
//     })
// })

// let port = 3000 

// app.listen(port, ()=>{
//     console.log("server started on port 3000")
// })

// app.get("/user", 
//     (req,res,next)=>{

//         req.user = "kalim ullah"

//         next()
//     },
//     (req,res)=>{
//         res.send("how are you")
//     }
// )

const express = require("express")

const app = express()

app.use(express.json())

let students = [
    {name: "khalid",
        course:"web dev",
        id: 1
    },
    {
        name: "usman",
        course:"data sci",
        id: 2
    }
]

app.get("/students", (req,res) =>{
    res.send(students)
})

app.put("/students/:id", (req,res) =>{
    let studentId = Number(req.params.id)

    let updatedData = req.body

   let student = students.find((item)=> item.id === studentId)


   if(!student){
    return res.status(404).json({
        success: false,
        message: "student not found"
    })
   }
if (updatedData.course !== undefined) {
  student.course = updatedData.course;
}
//    student.course = updatedData.course || student.sourse

   res.status(200).json({
    success:true,
    message: "course updated successfully",
    data: student
   })
})

app.delete("/students/:id", (req,res)=>{


    let studentId = Number(req.params.id)

    let deletedStudent = students.filter ((item)=> item.id !==studentId)

    res.status(200).json({
        success:true,
        message:"student deleted successfully",
        data:deletedStudent
    })

})





let port = 3000 

app.listen(port, ()=>{
    console.log("server started")
})