function authMiddleware(req,res,next){
    req.user = {
        id: 10 ,
         role: "admin"
    }

    if(!req.user) {
        return res.status(401).send("please login")
    }

        next()




    

}

module.exports = authMiddleware