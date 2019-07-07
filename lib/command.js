var create = require('./create.js');
var remove = require('./remove.js');
var get = require('./get.js');

module.exports = function command(scope) {
  console.log("ShoppingList module command"+JSON.stringify(scope));
  switch(scope.label) {
    case 'add':

      return new Promise(function (resolve, reject) {
          for(i=0;i<scope.items.length;i++){
            create(scope.items[i]).then(() => {resolve()}).catch((e) => {
              console.error('ShoppingList module:', e);
              return reject(e);
            });


        }
      });
      break;



    case 'remove':

      return new Promise(function (resolve, reject) {
        for(i=0;i<scope.items.length;i++){
          remove.remove(scope.items[i]).then(() => {resolve()}).catch((e) => {
            console.error('ShoppingList module:', e);
            return reject(e);
          });


      }
  });
      break;

    case 'flush':

      return new Promise(function (resolve, reject) {
        for(i=0;i<scope.items.length;i++){

          remove.flush().then((result) => {
            resolve(resporesultnse);
          }).catch((e) => {
        console.error('ShoppingList module:', e);
        return reject(e);
      });



        }
      });



      break;



    case 'readAll':
      return new Promise(function (resolve, reject) {
        get.getItems().then((items) => {
          var message="La liste des courses contient ";
          for(var i=0; i<items.length; i++){
            message+=items[i]+"."
          }


          var response = {
            label: 'get-shopping',
            scope: {'%SHOPPING_ANSWER%': message
            }
          };
          resolve(items);

        }).catch((e) => {
          console.error('ShoppingList module:', e);
          return reject(e);
        });




});
      break;

    default:

      break;
  }
};