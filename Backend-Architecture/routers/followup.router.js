const {Router} = require("express")
const { followup, welcome, test, followupDeleted, followupUpdated } = require("../controllers/auth.controller")
const leadValidation = require("../middlewares/leadValidation")
const { create } = require("../controllers/lead.controller")

const router = Router()

router.get("/test",test)
router.get("/welcome",welcome)
router.post("/followup",leadValidation,
    followup)
router.put("/followup/:id",followupUpdated)
router.delete("/followup/:id",followupDeleted)

router.post("/", leadValidation,create)
   


module.exports = router

