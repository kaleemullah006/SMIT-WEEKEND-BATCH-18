const signupSchema = require("../validations/signupSchema")
const signupService = require("../services/authServices")




async function signupController(req,res){



    const {error} = signupSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message:error.message
        })
    }
    
const {name,email,password} = req.body

const user = await signupService(name,email,password)

return res.status(201).json({
    message:"user created",
    user: {
        name:user.name,
        email:user.email
    }
})

  

}
module.exports = signupController