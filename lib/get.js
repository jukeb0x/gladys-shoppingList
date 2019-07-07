var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

// Using arrow functions. Check ES6 specs for more informations
module.exports ={



    getItems:() =>{
        return new Promise(function (resolve, reject) {
            jsonDao.readAllItems().then((result) => {

                resolve(result);}).catch((e) => {
                console.error('ShoppingList module: getItems=>', e);
                return reject(e);
            });


        })



    }
}
