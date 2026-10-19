require("dotenv").config()
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.DB_URI)

let db;


async function connectDB(){
    await client.connect()

    db = client.db("app")

    console.log("mongoDB ocnnected")

}
function  getDB(){
return db
}

module.exports = {connectDB,getDB}

