const fs = require("fs")
const globalConfig = require("./config")


const files = fs.readdirSync(globalConfig.web_path)
let controllerSet = []
let pathMap = new Map()

const init = app => {
    for (i of files) {
        let temp = require('./' + globalConfig.web_path + '/' + i)
        if (temp.path) {
            for ([key, value] of temp.path) {
                if (pathMap.get(value) == null) {
                    pathMap.set(key, value)
                    app.post(key, value)
                } else {
                    throw new Error("url：" + key + "异常！")
                }
            }
            controllerSet.push(temp)
        }
    }
}

module.exports.init = init;