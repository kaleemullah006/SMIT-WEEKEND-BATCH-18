const express = require("express")
const adminMiddleware = require("../middleware/adminMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

// router.get("/", (req,res)=>{
//       res.status(200).json({
//         message:"all products"
//     })
// })


// router.get("/search", (req,res)=>{
//     res.status(200).json({
//         message:"all products"
//     })
// })
// router.get("/:id", (req,res)=>{
//     res.status(200).json({
//         message:"products id & name",

//         id:req.params.id
//     })
// })
// router.get("/:category/:id", (req,res)=>{
//     res.status(200).json({
//         message:"products id & name",
//         category:req.params.category,
//         id:req.params.id
//     })
// })
// router.post("/", (req,res)=>{
//     res.status(201).send(" product created")
// })
// router.post("/lead", (req,res)=>{
//     res.status(201).json({
//         message:"Lead created successfully",
//         name: req.body.name,
//         email: req.body.email
//     })
// })


// router.post("/on",(req,res)=>{
//     let body = ""
//     req.on("data",(chunk)=>{
//         body += chunk
//     })

//     req.on("end",()=>{
//         console.log(body)
//         res.send("data received")
//     })
// })

// router.delete("/:id", (req,res)=>{
//     res.status(200).json({
//         message:"products deleted",
//         data: req.params.id

//     })
// })
// router.put("/:id", (req,res)=>{
//     res.status(200).json({
//         message:"products updated",
//         id: req.params.id,
//         data: req.body

//     })
// })
router.post("/",(req,res)=>{
 res.status(201).json({
    message:"user created in express.json",
    data: req.body
 })
})

router.get("/",
     authMiddleware,
    adminMiddleware,
     (req, res) => {
        res.status(200).json({
            message: "welcome to Home",
            body: req.body
        })
    })

module.exports = router