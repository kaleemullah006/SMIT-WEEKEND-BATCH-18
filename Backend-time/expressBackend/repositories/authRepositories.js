const fs = require("fs")
function saveUser(user){

    const fileData = fs.readFileSync("user.json","utf-8")

    const users = JSON.parse(fileData)
    users.push(user)

    fs.writeFileSync("user.json", JSON.stringify(users))

    return user

}

module.exports = saveUser