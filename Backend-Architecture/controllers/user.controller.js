const {signupService,loginService, getAllUsers, getAllUsersById} = require("../services/user.service")

const signup=async (req,res)=>{
    const {name,email,password} = req.body
   
const user = await signupService({name,email,password})

res.status(201).json({
    message:"user created successfully",
    data:user
})

}
const login=async (req,res)=>{
    try{

        const {email,password} = req.body
        
        const user = await loginService({email,password})
        
        res.status(200).json({
            message:"login  successfully",
            data:user
        })
    }
    catch(error){
        res.status(401).json({
            message:error.message
        })
    }

}

const allUsers = async (req,res)=>{
   
 const users = await getAllUsers()

 
    res.status(200).json({
        message:"all users successfully",
        data: users

 })
}
const allUsersById = async (req,res)=>{
    try{

        const {id} = req.params
       
     const user = await getAllUsersById(id)
    
     
        res.status(200).json({
            message:"all usersById successfully",
            data: user
    
     })
    }
    catch(error){
return res.status(404).json({
    message:error.message
})
    }
}

module.exports = {signup,login,allUsers,allUsersById}