const mysql = require('mysql');
const password = require('./password');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password.toString(),
    database: 'burgers_db'
});

module.exports = connection;