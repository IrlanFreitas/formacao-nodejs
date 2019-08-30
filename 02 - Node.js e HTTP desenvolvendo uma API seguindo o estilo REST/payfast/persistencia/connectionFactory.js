let mysql = require('mysql')

const createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'payfast'
    })
}

module.exports = () => {
    return createDBConnection
}