//SQL connection

const mysql = require('mysql');
const dotenv = require("dotenv");
var connection;
dotenv.config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'burgers_db'
    });
}



connection.connect((err) => {
    if (err) throw err;
    console.log("connected at " +connection.threadId+"/n");
});

module.exports = connection;