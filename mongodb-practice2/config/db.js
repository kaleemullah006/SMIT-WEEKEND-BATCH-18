

// const mongoose = require("mongoose");

// const { default: mongoose } = require("mongoose");

// const connectDB = async () =>{
//     try{
//     await mongoose.connect("mongodb://127.0.0.1:27017/mydb")

//     console.log("mongoDB connected")
//     }
//     catch(error){
//         console.log("db error:", error)

//         process.exit(1)
//     }
// }

// module.exports = connectDB

// const mongoose = require("mongoose")

// const connectDB = async () =>{
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/mydb")
         
//         console.log("mongoDB connected")
//     }
//     catch(error){
//         console.log("db error", error)

//         process.exit(1)
//     }
// }
// module.exports = connectDB

// const mongoose = require("mongoose")

// const connectDB = async () =>{
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/mydb")

//         console.log("mongodb connected")
//     }
//     catch(error){
//         console.log("db error:", error)
//         process.exit(1)
//     }
// }

// module.exports = connectDB

const mongoose = require ("mongoose")

const connectDB = async ()  => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Book")

        console.log("mongodb connected")
    }catch (error){
        console.log("db error:", error)

        process.exit(1)
    }
}
module.exports = connectDB