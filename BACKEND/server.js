// // // import { createServer } from "http";

// // // const server = createServer((req, res)=>{
// // //     res.end("hello from server")
// // // })

// // // const port = 3000;

// // // server.listen(port,()=>{
// // //     console.log("server running on port 3000")
// // // })

// // // import {createServer } from "http";


// // // const server =createServer((req,res)=>{
// // //     res.end("hello from server")
// // // })

// // // const port = 3000;

// // // server.listen(port,()=>{
// // // console.log("server running on port 3000")
// // // })

// // // const http = require("http")

// // // const server = http.createServer((req,res)=>{
// // //    if(req.url === "/contact"){
    
// // //        res.end("contact page")
// // //    }
// // //    else if(req.url === "/blog"){
    
// // //        res.end("myfirst blog Page")
// // //    }
// // //    else{
    
// // //        res.end("page not found")
// // //    }
// // // })

// // // const port = 3000;

// // // server.listen(port,()=>{
// // //     console.log("server running on 3000")
// // // })
// // // const http = require("http")

// // // const server = http.createServer((req,res)=>{
// // //    if(req.url === "/product" && req.method === "GET"){
    
// // //        res.end("ALL PRODUCT")
// // //    }
// // //    if(req.url === "/users" && req.method === "POST"){
    
// // //        res.end("NEW USER CTEATED")
// // //    }
  
// // //    else{
    
// // //        res.end("rout not found")
// // //    }
// // // })

// // // const port = 3000;

// // // server.listen(port,()=>{
// // //     console.log("server running on 3000")
// // // })
// // // const http = require("http")

// // // const server = http.createServer((req,res)=>{
// // //    if(req.url === "/users" && req.method === "GET"){
    
// // //        const users =[
// // //         {name:"Ali"},
// // //         {name:"Ahmad"}
// // //        ];

// // //        res.setHeader("content-type", "application/json");
// // //        res.end(JSON.stringify(users))
// // //    }
  
  
// // //    else{
    
// // //        res.end("rout not found")
// // //    }
// // // })

// // // const port = 3000;

// // // server.listen(port,()=>{
// // //     console.log("server running on 3000")
// // // })
// // const http = require("http")

// // const server = http.createServer((req,res)=>{

// //   if (req.url === "/" && req.method === "GET"){
// //    return res.end("HOME PAGE")
// //   }
// //   if (req.url === "/about" && req.method === "GET"){
// //    return res.end("About PAGE")
// //   }
// //   if (req.url === "/users" && req.method === "GET"){
// //      const users =[
// //         {name:"Ali"},
// //         {name:"Ahmad"}
// //        ];

// //        res.setHeader("content-type", "application/json");
// //       return res.end(JSON.stringify(users))
// //   }



// //    if(req.url === "/product" && req.method === "GET"){
    
// //        const product =[
// //         {name:"Laptop"},
// //         {name:"mobile"}
// //        ];

// //        res.setHeader("content-type", "application/json");
// //        return res.end(JSON.stringify(product))
// //    }
  
  
   
    
// //        res.end("rout not found")
   
// // })

// // const port = 3000;

// // server.listen(port,()=>{
// //     console.log("server running on 3000")
// // })

// // // const http = require("http");

// // // const server = http.createServer((req, res) => {
// // //   console.log("request received");
// // //   res.end("Welcome Kalimullah");
// // // });

// // // server.listen(3000, () => {
// // //   console.log("server started");
// // // });

// // const http = require("http");

// // let users = [
// //   { name: "Ali" },
// //   { name: "Ahmad" }
// // ];

// // const server = http.createServer((req, res) => {

// //   if (req.url === "/users" && req.method === "GET") {
// //     res.setHeader("Content-Type", "application/json");
// //     return res.end(JSON.stringify(users));
// //   }

// //   // POST request
// //   if (req.url === "/users" && req.method === "POST") {

// //     let body = "";

// //     req.on("data", (chunk) => {
// //       body += chunk.toString();
// //     });

// //     req.on("end", () => {
// //       const newUser = JSON.parse(body);
// //       users.push(newUser);

// //       res.setHeader("Content-Type", "application/json");
// //       res.end(JSON.stringify({
// //         message: "User added",
// //         users: users
// //       }));
// //     });

// //   } else {
// //     res.end("Route not found");
// //   }
// // });

// // server.listen(3000, () => {
// //   console.log("server running on 3000");
// // });

// // const http = require("http");

// // let users = [
// //   { name: "Ali" }
// // ];

// // const server = http.createServer((req, res) => {

// //   if (req.url === "/users" && req.method === "POST") {

// //     let body = "";

// //     req.on("data", (chunk) => {
// //       body += chunk.toString();
// //     });

// //     req.on("end", () => {
// //   const data = JSON.parse(body);

// //   data.users.forEach(user => {
// //     users.push(user);
// //   });

// //   res.setHeader("Content-Type", "application/json");
// //   res.end(JSON.stringify(users));
// // });

// //   } else {
// //     res.end("Route not found");
// //   }

// // });

// // server.listen(3000, () => {
// //   console.log("server running");
// // });

// // const http = require ("http")

// // let users = [
// //   {name: "hamid"}
// // ]

// // let server = http.createServer((req,res)=>{
// //   if(req.url === "/users" && req.method === "POST"){
// //     let body = ""

// //     req.on("data", (chunk)=>{
// //       body += chunk.toString()
// //     })
// //     req.on("end",()=>{
// //       const newUser = JSON.parse(body)
// //       users.push(newUser)

// //       res.setHeader("content-type", "application/json")
// //       res.end(JSON.stringify(users))
// //     })
// //   }
// //   else{
// //     res.end("rout not found")
// //   }
// // })

// // let port = 5000

// // server.listen(port,()=>{
// //   console.log("server running on port 5000")
// // })

// const http = require("http")

// let users = [
//   {
//     name: "Haniya"
//   }
// ]

// const server = http.createServer((req,res)=>{
//   let body = ""
// if(req.url === "/users" && req.method === "POST"){

  
//   req.on("data",(chunk)=>{
//     body += chunk.toString()
//   })
  
//   req.on("end", ()=>{
//     const newUser = JSON.parse(body)
//     users.push(newUser)
    
    
//     res.setHeader("content-type", "applocation/json")
//     res.end(JSON.stringify(users))
    
    
    
//   })

// }
//   else{
//     res.end("no rout found")
//   }
// })
//  const port = 3000
//   server.listen(port,()=>{
//     console.log("server running on port 3000")
//   })

// const http = require ("http")

// let users = [{
//   name: "ali",
//   name: "hamid",
//   name: "usman",
//   name: "uzair"
// }]

// const server = http.createServer((req,res)=>{
//   if (req.url === "/users" && req.method === "GET"){
//     res.setHeader("content-type", "application/json")
//     return res.end(JSON.stringify(users))
//   }

// if (req.method === "DELETE" && req.url.startsWith("/users/")){
//   const newUser = req.url.split("/")[2]

//   users = users.filter(user=>{
//     return user.name.toLowerCase() !== newUser.toLowerCase()
//   })

// res.setHeader("content-type", "application/json")
// return res.end(JSON.stringify({
// message: "user deleted",
// users : users
// }))

// }
// res.end("rout not found")


// })

// const port = 5000;

// server.listen(port, ()=>{
//   console.log("server running on port 5000")
// })

// let http = require("http")

// let users = [
//   { name: "hamid1" },
//   { name: "hamid2" },
//   { name: "hamid3" },
//   { name: "hamid4" }
// ];

// let server = http.createServer((req, res)=>{
//   if (req.url === "/users" && req.method === "GET"){

//     res.setHeader("content-type", "application/json")
//     return res.end(JSON.stringify(users))
//   }
    
//       if (req.method === "DELETE" && req.url.startsWith("/users/")){
//         let newUser = ""
    
//        newUser = req.url.split("/")[2]
    
//         users = users.filter(users =>{
//     return users.name.toLowerCase() !== newUser.toLocaleLowerCase()
//         })
    
//         res.getHeader("content-type", "application/json")
//         return res.end(JSON.stringify({
//           message: "user deleted",
//           users : users
//         }))
//       }
    
//     res.end("rout not found")
    
    
//     })
//     const port = 3000
    
//     server.listen(port,()=>{
//       console.log("server running on port 3000")
//     })


let http = require("http")

let users = [
  { name: "hamid1" },
  { name: "hamid2" },
  { name: "hamid3" },
  { name: "hamid4" }
];

let server = http.createServer((req, res)=>{
  if (req.url === "/users" && req.method === "GET"){
    res.setHeader("content-type", "application/json")
    return res.end(JSON.stringify(users))
  }
    
      if (req.method === "DELETE" && req.url.startsWith("/users/")){
        let newUser = ""
        newUser = req.url.split("/")[2]
        users = users.filter(users =>{
    return users.name.toLowerCase() !== newUser.toLocaleLowerCase()
        }
      )
        res.setHeader("content-type", "application/json")
        return res.end(JSON.stringify({
          message: "user deleted",
          users : users
        }))
      }
     if (req.url === "/users" && req.method === "POST") {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);

    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify({
      message: "user added",
      users: users
    }));
  });

  return;
}
if (req.method === "PUT" && req.url.startsWith("/users/")) {
  const oldUserName = req.url.split("/")[2];

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const updatedUser = JSON.parse(body);

    users = users.map(user => {
      if (user.name.toLowerCase() === oldUserName.toLowerCase()) {
        return updatedUser;
      }

      return user;
    });

    res.setHeader("content-type", "application/json");

    return res.end(JSON.stringify({
      message: "user updated",
      users: users
    }));
  });

  return;
}
    
    res.end("rout not found")
    
    
    })
    const port = 3000
    
    server.listen(port,()=>{
      console.log("server running on port 3000")
    })

