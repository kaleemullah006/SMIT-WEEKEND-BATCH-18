const http = require("http")

let users = [
    { id: 1, name: "Ali", age: 25 },
    { id: 2, name: "Ahmed", age: 30 },
    { id: 3, name: "Kaleem", age: 28 }
]

const server = http.createServer((req,res)=>{

    // GET /////////////////////////////

    if(req.method === "GET"){

        if(req.url === "/")
            res.end("welcome to home page")
        
        else if(req.url === "/users"){
            res.end(JSON.stringify(users))
            
        }
        else if(req.url === "/about"){
            res.end("welcome to about page")
            
        }
        
       else if (req.url === "/contact"){
            res.end("welcome to contact page")
            
        }

        else{
           res.end("404 - Page Not Found")
        }
      
    }

    // POST /////////////////////////////


    else if (req.method === "POST" && req.url === "/users"){

        let body = ""

         req.on("data", (chunk)=>{
            body += chunk

            
        })
        
        req.on("end",()=>{
            try {
                let user = JSON.parse(body)
                console.log(user.name)
                console.log(user.age)
                res.end("user received")
                
            } catch (error) {
                res.end("Invalid JSON")
            }
        })
    }

else if (req.method === "PUT" && req.url === "/users"){

    let body = ""

    req.on("data", (chunk)=>{
        body += chunk
    })

    req.on("end",()=>{
            try {
            let user = JSON.parse(body)
            console.log(user.name)
            console.log(user.age)
            res.end("user updated successfully")

            
        } catch (error) {
            res.end("json not found")
        }
    })
}


else if(req.method === "DELETE"  ){
    
    let parts = req.url.split("/")
    if (parts[1] === "users" && parts[2]){

        let id = parts[2]

        let userId = Number(id)

        users = users.filter((user)=> user.id !== userId)
    
        console.log(userId)
    
        res.end("user deleted successfully")
    }

}
    else{
        res.end("method not allowed")
    }


    



})

server.listen(3000)