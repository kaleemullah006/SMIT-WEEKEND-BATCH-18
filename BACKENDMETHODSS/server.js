// // const express = require("express")

// // const app = express()

// // let students =  [
// //   {
// //     id: 1,
// //     name: "Ali",
// //     course: "Web Development"
// //   },
// //   {
// //     id: 2,
// //     name: "Ahmed",
// //     course: "Node.js"
// //   },
// //   {
// //     id: 3,
// //     name: "Hania",
// //     course: "React.js"
// //   }
// // ];

// // app.get("/", (req,res)=>{
// //   res.send("API running")
// // })

// // app.get("/students",(req,res)=>{
// //   res.status(200).json({
// //     success: true,
// //     count: students.length,
// //     data: students
// //   })
// // })

// // app.listen(3000, ()=>{
// //   console.log("server started")
// // })

// const express = require("express")

// const app = express()

// let user = {
//   "name": "Kalimullah",
//   "profession": "Teacher"
// }

// let students = [
//   {
//     id: 1,
//     name: "Ali"
//   },
//   {
//     id: 2,
//     name: "Ahmed"
//   },
//   {
//     id: 3,
//     name: "Hania"
//   }
// ]

// app.get ("/about", (req,res)=>{
//   res.send("My first express API")
// })

// app.get("/user", (req,res)=>{
//   res.status(200).json({
//     user:user
//   })
// })
// app.get("/students", function (req, res) {
//     res.status(200).json({
//       students: students
//     })
//   })
// app.get("/students/:id", (req,res)=>{
//  const id = Number(req.params.id)

//  const student = students.find((item)=> item.id === id)

//  if (!student){
//   return res.status(404).json({
//     success: false,
//     message: "student not found"
//   })
// }
//  res.status(200).json({
//   success: true,
//   data: student
//   })
// })

// app.get("/api/status", (req,res)=>{
//   res.status(200).json({
//     success: true,
//     server: "remaining",
//     port: 3000
//   })
// })

// let port = 3000

// app.listen(port, ()=>{
//   console.log("server startted")
// })

// const express = require("express")

// const app = express()
// app.use(express.json())

// let students = [
//   {
//     id: 1,
//     name: "Ali"
//   },
//   {
//     id: 2,
//     name: "Ahmed"
//   },
// ]

// app.get("/students", (req,res)=>{
//   res.status(200).json({
//     success: true,
//     count: students.length,
//     data: students
//   })
// }
// )

// app.post("/students", (req,res)=>{
//   const {name} = req.body
//   if (!name){
//     return res.status(400).json({
//       success: false,
//       message: "name is required"
//     })
//   }

//   const newStudent = {
//     id: students.length + 1,
//     name: name
//   }
//   students.push(newStudent)
//   res.status(201).json({
//     success: true,
//     data: newStudent
//   })
// }
// )

// let port = 3000
// app.listen(port, ()=>{
//   console.log("server started")
// }
// )

// const express = require("express")

// const app = express()

// app.use(express.json())

// let students = [
//   {name:"ali",
//     course: "web dev",
//     id: "1"
//   }
// ]

// app.get("/students", (req,res)=>{
//   res.status(200).json({
//     success:true,
//     status:students.length,
//     data:students
//   })
// })

// app.post ("/students", (req,res)=>{

//   if (!req.body.name){
//     return res.status(400).json({
//       success: false,
//       message: "name is required"
//     })
//   }

// let newStudent = {
//   id : students.length + 1,
//   name: req.body.name

// }
// students.push(newStudent)

// res.status(201).json({
//   success: true,
//   message:"student added successsfully",
//   data: newStudent
// })

// })

// const port = 3000;

// app.listen(port,()=>{
//   console.log("server started")
// })

// const express = require("express");

// const app = express();

// app.use(express.json());

// let courses = [
//   {
//     id: 1,
//     title: "HTML",
//   },
// ];

// app.get("/courses", (req, res) => {
//   res.status(200).json({
//     success: true,
//   count: courses.length,
//     data: courses,
//   });
// });

// app.post("/courses", (req, res) => {
//     if (!req.body.title) {
//   return res.status(400).json({
//     success: false,
//     message: "Title is required"
//   })
// }
//   let newData = { 
//     id: courses.length + 1,
     
//    title: req.body.title 
//     };

//   courses.push(newData);

//   res.status(201).json({
//     success: true,
//     message:"course added successfully",
//     data: newData,
//   });
// });

// let port = 3000;

// app.listen(port, () => {
//   console.log("server started");
// });


// const express = require("express");

// const app = express();

// app.use(express.json());

// let teachers = [
//  {
//   name: "Kalimullah",
//   subject: "Web Development",
//   experience: 34
// }
// ];

// app.get("/teachers", (req, res) => {
//     res.status(400).json({
//         success:true,
//         count:teachers.length,
//         data: teachers
//     })
// })

// app.post("/teachers",(req,res)=>{

// let newTeacher = {
//     name: req.body.name,
//     subject: req.body.subject,
//     experience: req.body.experience
// }

// teachers.push(newTeacher)

//     res.status(201).json({
// success:true,
// data:newTeacher,
// message: "teacher added successfully"
//     })
// })


// let port = 3000

// app.listen(port, () => {
//     console.log("server started")
// })

// const express = require("express");

// const app = express();

// app.use(express.json());

// let courses = [
//   {
//     id: 1,
//     title: "HTML"
//   },
//   {
//     id: 2,
//     title: "CSS"
//   }
// ]


// app.get("/courses", (req, res) => {
//     res.status(400).json({
//         success:true,
//         count:courses.length,
//         data: courses
//     })
// })


// app.put("/courses/:id",(req,res)=>{
//     const id = Number(req.params.id)

//     const course = courses.find((item)=>
//     item.id === id )

//     if (!course){
//         return res.status(404).json({
//             success:false,
//             message:"course not found"
//         })
//     }

//     if(!req.body.title){
//     return req.status(400).json({
//         success:false,
//         message:"title is required"
//     })
//     }

//     course.title = req.body.title

//     res.status(200).json({
//         success:true,
//         message:"course update successfully",
//         data: course
//     })
// })




// let port = 3000

// app.listen(port, () => {
//     console.log("server started")
// })


const express = require("express");

const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Ali",
  },
  {
    id: 2,
    name: "Ahmed",
  },
];


// GET ALL STUDENTS

app.get("/students", (req, res) => {

  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });

});


// PUT METHOD PRACTICE

app.put("/students/:id", (req, res) => {

  // STEP 1
  // params se id nikalo
  const id = Number(req.params.id)


  // STEP 2
  // students array se matching student find karo

  let student = students.find((item)=>
item.id === id)


  // STEP 3
  // agar student na mile to 404 response bhejo
  if(!student){
    return res.status(404).json({
        success:false,
        message: "student not found"
    })
  }



  // STEP 4
  // agar name empty ho to validation lagao
  if(!req.body.name){
    return res.status(400).json({
        success: false,
        message: "name is rquired"
    })
  }



  // STEP 5
  // student ka name update karo

  student.name = req.body.name


  // STEP 6
  // success response bhejo
  res.status(200).json({
    success:true,
    message:"student successfully updated",
    data: student
  })


});

app.delete("/students/:id",(req,res)=>{
    const id = Number(req.params.id)

    const student = students.find((item)=> item.id === id)

    if(!student){
        return res.status(404).json({
            success: false,
            message:"student not found"
        })
    }

 students = students.filter((item)=>item.id !== id)

 res.status(200).json({
    success:true,
    message:"student deleted successfully",
    data: student
 })
})



const port = 3000;

app.listen(port, () => {
  console.log(`Server started`);
});
