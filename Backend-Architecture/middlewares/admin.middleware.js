const jwt = require("jsonwebtoken")

function  adminMiddleware(req,res,next){
    if(req.user.role !== "admin"){
        res.status(403).json({
            message: "admin access denied"
        })
    }
    next()
}

module.exports = adminMiddleware