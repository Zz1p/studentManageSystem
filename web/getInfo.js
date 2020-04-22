const getInfoDao = require("../dao/getInfoDao")

let path = new Map()

const getInfo = (req, res) => {
    const params = req.body.num
    console.log('params', params)
    getInfoDao.getInfo(params, result => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
};

const getAllInfo = (req, res) => {
    getInfoDao.getAllInfo(parseInt(req.body.flag), result => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
};

const del = (req, res) => {
    const params = req.body
    console.log('params', params)
    getInfoDao.del(params.num, parseInt(params.flag), result => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
}


const insert = (req, res) => {
    const params = req.body
    console.log('params', params)
    getInfoDao.insert(params, result => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
}

const update = (req, res) => {
    const params = req.body
    console.log('params', params)
    getInfoDao.update(params, result => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
}

path.set("/getInfo", getInfo);
path.set("/getAllInfo", getAllInfo)
path.set("/delete", del)
path.set("/insert", insert)
path.set("/update", update)

module.exports.path = path;