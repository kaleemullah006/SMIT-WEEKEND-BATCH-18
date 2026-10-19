const jwt = require("jsonwebtoken")


function authMiddleware(req, res, next) {
    const authHeaders = req.headers.authorization

    if (!authHeaders) {
        return res.status(401).json({
            message: "token required"
        })
    }
const token = authHeaders.split(" ")[1]

try {
    
    const decoded = jwt.verify(token,"S3CR3T")

    req.user = decoded

    next()
} catch (error) {
    res.status(401).json({
        message:"invalid token"
    })
}





}

module.exports = authMiddleware