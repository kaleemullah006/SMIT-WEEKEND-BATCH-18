const mongoose = require("mongoose")

const leadSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        enum:["PENDING", "REPLIED", "REJECTED"],
        default: "PENDING"

    }


},

{timestamps:true})

const Lead = mongoose.model("Lead",leadSchema)

module.exports = Lead