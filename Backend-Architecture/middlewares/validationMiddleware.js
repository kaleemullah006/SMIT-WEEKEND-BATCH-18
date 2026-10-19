function validationMiddleware(req,res,next){
    const {name,email} = req.body
    if(email.includes("@") && name){
       next()
    }
    else {
       return res.status(400).json({
essage:"Name and valid email are required"
       }) 
    }
}

module.exports = {validationMiddleware}