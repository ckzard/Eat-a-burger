//Server setup and configuration

const express = require('express');
// const exphbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);