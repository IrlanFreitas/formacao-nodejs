let mysql = require('mysql')

const createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'payfast'
    })
}

module.exports = () => {
    return createDBConnection
}