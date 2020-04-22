const fs = require("fs")


const globalConfig = {}
let conf = fs.readFileSync("server.conf")

conf = conf.toString().split("\n")

for (let i of conf) {
    let temp = i.split("=")
    globalConfig[temp[0]] = temp[1].trim()
}

module.exports = globalConfig

