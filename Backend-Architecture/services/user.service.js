const User = require("../models/user.model")
const bcrypt = require("bcrypt")



async function signupService(data){

    const hashedPassword = await bcrypt.hash(data.password, 10);

const user = await User.create({...data, password:hashedPassword})

 return{
    _id:user._id,
    email:user.email,
    name:user.name,
    createdAt: user.createdAt
 }
}
async function loginService(data){
    

   const  user = await User.findOne({email:data.email})

   if(!user){
   throw new Error ("invalid email or password")
   }

    const isPasswordMatched = await bcrypt.compare(data.password, user.password);


 if(!isPasswordMatched){
  throw new Error ("invalid email or password")
 }
 return{
    _id:user._id,
    email:user.email,
    name:user.name,
    
 }
}

async function getAllUsers(email){
    const users = await User.find().select("-password")
return users

}
async function getAllUsersById(id){
    const users = await User.findById(id).select("-password")
return users

}



module.exports = {signupService,loginService,getAllUsers,getAllUsersById}