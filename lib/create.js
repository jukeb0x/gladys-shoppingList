var jsonDao = require('./dao/jsonDao.js');
var queries = require('./queries.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports = (item) => {

    var data={
        "item":item
    }

    return new Promise(function (resolve, reject) {
        jsonDao.writeItems(data).then((result) => {
            resolve(result);}).catch((e) => {
            console.error('ShoppingList module: create=>', e);
            return reject(e);
        });


    })


}