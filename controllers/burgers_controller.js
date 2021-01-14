//Express routes, when accessed will trigger sql functions

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

router.post('/api/burgers', (req, res) => {
    console.log("someones trying to add a burger")
    burger.add("burger_name", [req.body.name], (result) => {
        console.log("a", req.body.name)
        res.json({id: result.insertId })
    })
})

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
})


module.exports = router;