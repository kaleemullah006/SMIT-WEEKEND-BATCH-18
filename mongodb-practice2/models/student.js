// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: String,
//   course: String,
// });

// module.exports = mongoose.model("Student", studentSchema);

// const mongoose = require("mongoose")

// const studentSchema = new mongoose.Schema({
//   name:String,
//   course:String,
// })

// module.exports = mongoose.model("Student", studentSchema)

// const mogoose = require ("mongoose");

// const studentSchema = new mongoose.Schema({
//   name:string,
//   course: string,
// })

// module.exports = mongoose.model("student", studentSchema)

const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name:String,
  course: String,
})

module.exports = mongoose.model("student", studentSchema)