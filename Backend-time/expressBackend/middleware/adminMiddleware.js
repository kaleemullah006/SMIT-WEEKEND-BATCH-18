function adminMiddleware(req,res,next){
   
    if(req.user.role !== "admin"){
        return res.status(403).json({
            message:"please log in again",

        })

    }

    next()
}

module.exports = adminMiddleware