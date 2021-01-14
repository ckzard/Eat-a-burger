const connection = require('./connection');

const objToSql = (ob) => {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };

const orm = {
    selectAll(tableChoice, cb) {
        const queryString = `SELECT * FROM ${tableChoice};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne(tableChoice, objColVals, condition, cb) {
        let queryString = `UPDATE ${tableChoice}`;
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
        if (err) {
        throw err;
         }

        cb(result);
        });
    }
}

module.exports = orm;