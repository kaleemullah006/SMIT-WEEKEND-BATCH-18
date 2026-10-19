const jwt = require("jsonwebtoken")
function authMiddleware(req,res,next){

    const authHeaders = req.headers.authorization

if(!authHeaders){
    res.status(409).json({
        message:"token required"
    })
}

const token = authHeaders.split(" ")[1]

try {
   const decode = jwt.verify(token, process.env.SECRET_KEY)

   req.user = decode

   next()
    
} catch (error) {
    return res.status(401).json({
        message: "invalid token"
    })
}


}

module.exports = authMiddleware