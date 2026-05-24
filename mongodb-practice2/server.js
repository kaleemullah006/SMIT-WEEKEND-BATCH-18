// const express = require("express")
// const connectDB = require("./config/db")
// const Student = require("./model/student")

// const app = express();

// app.use(express.json());

// connectDB() ;
// app.post("/students", async (req, res) => {
//   try {
//     const newStudent = await Student.create(req.body);

//     res.status(201).json({
//       success: true,
//       data: newStudent,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// app.get("/students", async(req,res) =>{
//     try{
//         const students = await Student.find();
//         res.status(200).json({
//             success : true,
//             data: students,
//         })
//     } catch(error){
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// })

// let port = 3000;

// app.listen(port, ()=>{
//     console.log("server running on")
// })

// const express = require("express")
// const app = express()

// const connectDB = require("./config/db")

// const  student = require("./models/student")

// app.use(express.json())

// connectDB()

// app.post("/students", async(req,res)=>{
//   try{
//     const newStudent = await student.create(req.body)

//     res.status(201).json({
//       success: true,
//       data: newStudent
//     })
//   }catch(error){
//     res.status(500).json({
//       success: false,
//       message: error.message
//     })
//   }

// })

// app.get("/students", async (req,res) =>{
//   try{
//     const students = await student.find();
//     res.status(200).json({
//       success:true,
//       data: students
//     })
//   }
//   catch(error){
//     res.status(500).json(
//       {
//         success:false,
//         message:error.message
//       }
//     )
//   }
// })

// app.put("/students/:id", async(req,res)=>{
//   try{
//     const updatedStudent = await student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {new: true }
//     )
//     if (!updatedStudent){
//       return res.status(404).json({
//         success: false,
//         message: "student not found"
//       })
//     }
//     res.status(200).json({
//       success:true,
//       message: "student updated successfully",
//       data: updatedStudent
//     })
//   }
//   catch(error){
//     res.status(500).json({
//       success:false,
//       message:error.message
//     })
//   }
// })

// let port = 3000

// app.listen(port, () =>{
//   console.log(
//     "server runnig on port 3000"
//   )
// })

const express = require("express");

const connectDB = require("./config/db");

const Book = require("./models/book");

const app = express();

app.use(express.json());

connectDB();

app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "book added successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "book not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      
    });
  }
});

app.delete("/books/:id", async(req,res)=>{

  try{
    const deleteBook = await Book.findByIdAndDelete(req.params.id)

    if(!deleteBook){
     return res.status(404).json({
      success:false,
      message:"book not found"
     })
    }
    res.status(200).json({
      success: true,
      message: "book deleted successfully",
      data: deleteBook
    })
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message: error.message
    })
  }
})

let port = 3000;

app.listen(port, () => {
  console.log("server running on port 3000");
});
