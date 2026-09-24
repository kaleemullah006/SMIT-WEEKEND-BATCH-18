function loggerMiddlewhare(req,res,next){
    console.log(req.method)
    console.log(req.url)
    next()
}

module.exports = loggerMiddlewhare