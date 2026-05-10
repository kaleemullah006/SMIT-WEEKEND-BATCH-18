// const express = require("express")

// const app = express()

// app.get("/", (req,res)=>{
//     res.send("hello from express")
// })

// const port = 3000

// app.listen(3000, ()=>{
//     console.log("server running on port 3000")
// })

// const express = require("express")

// const app = express()

// app.get("/about",(req,res)=>{
// res.send("hello from about world")
// })

// const port = 5000
 
// app.listen(port, ()=>{
//     console.log("server running on port 5000")
// })

// let express = require("express")

// const app = express()

// app.use(express.json());

// app.get("/", (req,res)=>{
//     res.send("Home page")
// })
// app.get("/About", (req,res)=>{
//     res.send("About page")
// })
// app.get("/contact", (req,res)=>{
//     res.send("contact page")
// })

// let users = [{name:"ali"},{name:"usman"},{name:"khalid"}]

// app.get("/users", (req,res)=>{
//     res.json(users)

// })

// app.post("/users", (req,res)=>{
//     const newUser = req.body

//     users.push(newUser)

//     res.json({
//         message: "user added successfully",
//         users:users
//     })
// })





// let port = 3000

// app.listen(port, ()=>{
//     console.log("server running on port 3000")
// })



const express = require("express")

const app = express()

let users = [
  { name: "ali" },
  { name: "usman" },
  { name: "khalid" }
];


app.use(express.json())

app.post("/users", (req,res)=>{
const newUser = req.body;


if(Array.isArray(newUser)){
    newUser.forEach(user =>{
        users.push(user)
        
    })
}
else{
    users.push(newUser)
}

res.json({
    message: "user added",
    users: users
})
})

app.delete("/users/:name", (req,res)=>{
    const userName = req.params.name;

    // users = users.filter(user=>{
    //     return user.name.toLowerCase() !== userName.toLowerCase()
    // })
    users = users.filter(user=>{
        return user.name.toLowerCase() !== userName.toLowerCase()
    })
    // res.json({
    //    message: "user deleted",
    //    users: users
    //  });
    res.json({
        message: "user deleted",
        users:users
    })
})

// app.patch("/users/:name",(req,res)=>{
//     let userName = req.params.name;

//     let updatedField = req.body

//     users = users.map(user=>{
//         if(user.name.toLowerCase() === userName.toLowerCase()){
//             return {
//                 ...user,
//                 ...updatedField
//             }
//         }
//         return user;
//     })
//     res.json({
//         message: "user updated",
//         users: users
//     })

    
// })


app.patch("/users/:name", (req,res)=>{
    let userName = req.params.name;

    let updatedField = req.body;

    users = users.map(user=>{
        if(user.name.toLowerCase() === userName.toLowerCase()){
            return{
                ...user, 
                ...updatedField
            }
        }
        return user
    })
    res.json({
        message: "user updated",
        users: users
    })
})

app.put("/users/:name", (req,res)=>{
    let userName = req.params.name;
    let updatedUser = req.body

    users = users.map(user=>{
        if(user.name.toLowerCase() === userName.toLowerCase()){

            return updatedUser
        }
        return user
    })
    res.json({
        message: "user changed",
        users : users
    })
})


const port = 3000 

app.listen(port, (req,res)=>{
    console.log("server running on port 3000")
})