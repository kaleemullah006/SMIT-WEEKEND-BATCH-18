const jwt = require("jsonwebtoken")
function authMiddleware(req,res,next){

    const tokenHeader = req.headers.authorization

    if(!tokenHeader){
        return res.status(401).json({
            message: "token required"
        })
    }

    const actualToken = tokenHeader.split(" ")[1]

   try {
     const decoded = jwt.verify(actualToken,"S3CR3T")

    req.user = decoded

    next()
   } catch (error) {
    return res.status(401).json({
        message: "invalid token"
    })
   }




}