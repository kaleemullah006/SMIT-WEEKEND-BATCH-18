require("dotenv").config();

const mongoose = require("mongoose")

async function connectMongoose(){
    await mongoose.connect(process.env.DB_URI)
console.log("mongoose connected")

}

module.exports = connectMongoose