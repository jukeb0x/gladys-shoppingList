var jsonDao = require('./dao/jsonDao.js');

const Promise = require('bluebird');

module.exports = {


  remove: (name) => {

    return new Promise(function (resolve, reject) {
      jsonDao.deleteItem(name).then(() => {
        resolve();
      }).catch((e) => {
        console.error('ShoppingList module: remove=>', e);
        return reject(e);
      });

    });

  },

  flush: () => {

    return new Promise(function (resolve, reject) {
      jsonDao.flush().then(() => {
        resolve();
      }).catch((e) => {
        console.error('ShoppingList module: flush=>', e);
        return reject(e);
      });

    });

  }

}