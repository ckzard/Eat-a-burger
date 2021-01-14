const express = require('express');
const burger =  require('./../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            //object to be passed into handlebars
            burgers: data,
        };
        console.log('handlebars object', hbsObject);
        res.render('index', hbsObject);
    });
});

module.exports = router;