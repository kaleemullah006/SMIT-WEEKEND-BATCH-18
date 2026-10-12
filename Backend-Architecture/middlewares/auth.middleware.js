const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next){
const authHeader = req.headers.authorization

if(!authHeader){
return res.status(404).json({
    message: "token is required"
})
}

const token = authHeader.split(" ")[1]
try {
    const decoded = jwt.verify(token,process.env.JWT_TOKEN)

    req.user = decoded
    next()
} catch (error) {
    return res.status(401).json({
        message:"invalid or expired token"
    })
}
}

module.exports = authMiddleware