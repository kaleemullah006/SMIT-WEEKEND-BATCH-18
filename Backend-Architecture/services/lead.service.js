const Lead = require("../models/lead.model")

async function createdLead(data){

    const lead = await Lead.create(data)
return{
    message:"lead created succesfully",
    data: lead
}
}

module.exports = {createdLead}