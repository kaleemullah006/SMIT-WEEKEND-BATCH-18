
require("dotenv").config()
const {MongoClient} = require("mongodb")

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.DB_URI)

let db;
 async function connectDB(){
    await client.connect()
    console.log("mongodb connected")

     db = client.db("app")

     console.log("client connected")

   
    }

function getDB(){
    return db
}

module.exports = {connectDB, getDB}