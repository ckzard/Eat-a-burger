const connection = require('./connection');

const orm = {
    selectAll(tableChoice, cb) {
        const queryString = `SELECT * FROM ${tableChoice};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;