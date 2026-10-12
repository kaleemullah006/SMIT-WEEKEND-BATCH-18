const {signupService, loginService} = require("../services/auth.service")

const signup = async (req,res)=>{
    const result = await signupService(req.body,res)
    // res.status(201).json(result)
}
const login = async (req,res)=>{
    const result = await loginService(req.body,res)
    // res.status(200).json(result)
}

const profile = (req,res)=>{
res.status(200).json({
    message:"token verified succsessfully",
    user:req.user
})
}
const admin = (req,res)=>{
res.status(200).json({
    message:"welcome Admin",
    user:req.user
})
}


module.exports = {signup,login,profile,admin}