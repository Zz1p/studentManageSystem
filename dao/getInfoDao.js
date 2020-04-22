const createConnection = require("./dbutil")

const getInfo = (num, cb) => {
    console.log('num', num)
    const connection = createConnection()
    connection.connect()
    let sql = "select * from art where num = ?"
    connection.query(sql, num, (err, res) => {
        if (err == null) {
            cb(res)
            console.log('res', res)
        } else {
            getInfo2(num, cb)
        }
    })
    connection.end()
}

const getInfo2 = (num, cb) => {
    console.log('num', num)
    const connection = createConnection()
    connection.connect()
    const sql = "select * from science where num = ?"
    connection.query(sql, num, (err, res) => {
        if (err == null) {
            cb(res)
            console.log('res', res)
        } else {
            console.log('err', err)
        }
    })
    connection.end()
}

const getAllInfo = (flag, cb) => {
    console.log("flag", flag)
    const connection = createConnection()
    connection.connect()
    const table = flag === 1 ? 'art' : 'science'
    let sql = 'select * from ' + table
    connection.query(sql, table, (err, res) => {
        if (err == null) {
            cb(res)
            console.log(res)
        } else {
            console.log(err)
        }
    })
    connection.end()
}


const del = (num, flag, cb) => {
    console.log("del-num,flag", num, flag)
    const connection = createConnection()
    connection.connect()
    const table = flag === 1 ? 'art' : 'science'
    const sql = "delete from " + table + " where num = ?"
    connection.query(sql, num, (err, res) => {
        if (err == null) {
            console.log(res)
            cb(res)
        } else {
            console.log(err)
        }
    })
    connection.end()
}

const insert = (params, cb) => {
    console.log("params", params)
    const connection = createConnection()
    connection.connect()
    const table = params.flag === "1" ? 'art' : 'science'
    if (params.flag === "0") {
        const sql = "insert into " + table + " (`num`, `name`,`Chinese`, `English`, `Math`, `Science`, `Physics`, `Biology`) values (?,?,?,?,?,?,?,?);"
        connection.query(sql, [params.num, params.name, params.Chinese, params.English, params.Math, params.Science, params.Physics, params.Biology], (err, res) => {
            if (err == null) {
                console.log(res)
                cb(res)
            } else {
                console.log(err)
            }
        })
    } else {
        const sql = "insert into " + table + " (`num`, `name`,`Chinese`, `English`, `Math`, `History`, `Geography`, `Politics`) values (?,?,?,?,?,?,?,?)"
        connection.query(sql, [params.num, params.name, params.Chinese, params.English, params.Math, params.History, params.Geography, params.Politics], (err, res) => {
            if (err == null) {
                console.log(res)
                cb(res)
            } else {
                console.log(err)
            }
        })
    }
    connection.end()
}

const update = (params, cb) => {
    console.log("update-params", params)
    const connection = createConnection()
    connection.connect()
    const table = params.flag === "1" ? 'art' : 'science'
    if (params.flag === "0") {
        const sql = "update " + table + " set Chinese = ?, English = ? , Math = ?, Science = ?, Physics = ?, Biology = ? where num = ? "
        connection.query(sql, [params.Chinese, params.English, params.Math, params.Science, params.Physics, params.Biology, params.num], (err, res) => {
            if (err == null) {
                console.log(res)
                cb(res)
            } else {
                console.log(err)
            }
        })
    } else {
        const sql = "update " + table + " set Chinese = ?, English = ?, Math = ?, History = ?, Geography = ?, Politics = ? where num = ?"
        connection.query(sql, [params.Chinese, params.English, params.Math, params.History, params.Geography, params.Politics, params.num], (err, res) => {
            if (err == null) {
                console.log(res)
                cb(res)
            } else {
                console.log(err)
            }
        })
    }


    connection.end()
}

module.exports = {
    getInfo,
    getAllInfo,
    del,
    insert,
    update
}