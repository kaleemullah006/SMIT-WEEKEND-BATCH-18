const { signupService, loginService } = require("../services/auth.service")
const { getWelcomeMessage, followupMessage } = require("../services/followup.service")

const signup = async (req, res) => {
    const result = await signupService(req.body, res)
    // res.status(201).json(result)
}
const login = async (req, res) => {
    const result = await loginService(req.body, res)
    // res.status(200).json(result)
}

const profile = (req, res) => {
    res.status(200).json({
        message: "token verified succsessfully",
        user: req.user
    })
}
const admin = (req, res) => {
    res.status(200).json({
        message: "welcome Admin",
        user: req.user
    })
}
const test = (req, res) => {
    res.status(200).json({
        message: "hello world"
    })
}
const followup = (req, res) => {
    

    const result = followupMessage(req.body)

    res.status(201).json({result})
}
const followupUpdated = (req, res) => {
    res.status(201).json({
        message: "follow up updated"
    })
}
const followupDeleted = (req, res) => {
    res.status(201).json({
        message: "follow up deleted"
    })
}
const welcome = (req, res) => {

    const message = getWelcomeMessage()
    res.status(200).json(
        {
            message: message
        }
    )
}


module.exports = { signup, login, profile, admin, followup, welcome, test, followupUpdated, followupDeleted }