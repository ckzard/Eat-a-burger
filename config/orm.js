const connection = require('./connection');

connection.connect((err) => {
    if (err) throw err;
    console.log("connected at " +connection.threadId+"/n");
});