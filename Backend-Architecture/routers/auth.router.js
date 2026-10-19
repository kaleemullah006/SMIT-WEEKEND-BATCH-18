const express = require("express")

const {signup, login, profile, admin} = require("../controllers/auth.controller")

const authMiddleware= require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.get("/profile",authMiddleware,profile)
router.get("/admin",authMiddleware,adminMiddleware,admin)


module.exports = router