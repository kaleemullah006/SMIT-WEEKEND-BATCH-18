const express = require("express")
const leadValidation = require("../middlewares/leadValidation")
const { followup } = require("../controllers/auth.controller")
const { create } = require("../controllers/lead.controller")

const router = express.Router()

router.post("/lead",leadValidation,create)
router.post("/followup",leadValidation,
    followup)
module.exports = router