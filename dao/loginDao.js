const createConnection = require("./dbutil")


const login = (num, name, pass, isStudent,cb) => {
    const connection = createConnection()
    connection.connect()
    const table = isStudent === true ? 'student' : 'teacher'
    const sql = 'select * from ' + table + ' where num = ? and name = ? and password = ?'
    connection.query(sql, [num, name, pass],(err, res) => {
        if (err == null) {
            cb(res)
            console.log(res)
        } else {
            cb(err)
        }
    });
    connection.end()
};

module.exports = {
    login
};