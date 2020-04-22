const mysql = require("mysql")

const createConnection = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "zfp8572784",
        database: "finalWork"
    })
    return connection;
}


module.exports = createConnection;
