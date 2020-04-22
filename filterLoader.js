const fs = require("fs")
const globalFilter = require("./config")

const files = fs.readdirSync(globalFilter.filter_path)
let filterSet = []
let pathMap = new Map()

const init = app => {
    for (i of files) {
        let temp = require('./' + globalFilter.filter_path + '/' + i)
        if (temp.path) {
            for ([key, value] of temp.path) {
                if (pathMap.get(value) == null) {
                    pathMap.set(key, value)
                    app.post(key, value)
                } else {
                    throw new Error("url：" + key + "异常！")
                }
            }
            filterSet.push(temp)
        }
    }
}

module.exports.init = init;