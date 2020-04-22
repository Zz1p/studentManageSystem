const loginDao = require("../dao/loginDao")

let path = new Map()

const login = (req, res) => {
    const params = req.body
    loginDao.login(params.num, params.name, params.pass, params.isStudent, (result) => {
        res.writeHead(200)
        res.write(JSON.stringify(result))
        res.end()
    })
}

path.set("/login", login);

module.exports.path = path;