const joi = require("joi")

const leadSchema =  joi.object({
    name: joi.string().required(),
    email: joi.string().required()
})

function leadValidation(req,res,next){
const {error} = leadSchema.validate(req.body)

if(error){
    return res.status(400).json({
        message:error.details[0].message
    })
}

next()
}

module.exports = leadValidation