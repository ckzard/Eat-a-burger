const orm = require("./../config/orm");

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
}

module.exports = burger;