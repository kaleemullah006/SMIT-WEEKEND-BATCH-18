require("dotenv").config()
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }

})




 async function sendMail(to, subject, text){

    const response = await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to,
        subject,
        text
    })
    return response
 }

 module.exports = sendMail