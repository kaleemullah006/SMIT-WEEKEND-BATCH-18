function getWelcomeMessage  (){


 
    return "welcome kaleemullah"

}

function followupMessage(data){
    
        return {
            message:"follow up created",
            data:data
        }
    
   
}

module.exports = {getWelcomeMessage,followupMessage}