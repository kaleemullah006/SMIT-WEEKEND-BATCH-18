const Joi = require("joi")

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/


const schema = Joi.object({
    name: Joi.string().min(1).max(20).required(),
    email: Joi.string().email().required(),
password: Joi.string().min(8).pattern(passwordRegex).required()
})

module.exports = schema