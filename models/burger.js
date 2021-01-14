//object with methods to call to activate sql statements in orm

const orm = require("./../config/orm");

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    add(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
}

module.exports = burger;