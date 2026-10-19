const express = require("express")
const { signup, login, allUsers, allUsersById } = require("../controllers/user.controller")

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/all-users",allUsers)
router.get("/:id",allUsersById)

module.exports = router