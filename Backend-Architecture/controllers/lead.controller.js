const { createdLead } = require("../services/lead.service")

const create = async(req,res)=>{
const result = await createdLead(req.body)
res.status(201).json({
    result
})
}

module.exports = {create}