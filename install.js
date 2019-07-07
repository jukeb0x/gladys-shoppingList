const Promise = require('bluebird');
var sentences = require('./lib/sentences.js');

module.exports = function install(){

//	gladys.user.get().then(function(user){
//		if(user[0].language!='fr-FR')
//Undefined au démarrage de gladys.

//on prends la langue du 1er admin
  return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
    if(lang[0].language!='fr-FR')
      return gladys.sentence.insertBatch([sentences.sentenceAddEn,sentences.sentenceReadAllEn,
        sentences.sentenceFlushEn,sentences.sentenceRemoveEn]).then((test) => {
        console.log("ShoppingList: Requête ajoutée");
        return gladys.answer.create(sentences.answerShoppingListEn);
      }).then((answer) => {
        console.log("ShoppingList: Réponse ajoutée");
      }).catch((error) => {
        console.log("ShoppingList: " + error);
      });
    else return gladys.sentence.insertBatch([sentences.sentenceAddFr,sentences.sentenceReadAllFr,
      sentences.sentenceFlushFr,sentences.sentenceRemoveFr]).then((test) => {
      console.log("ShoppingList: Requête ajoutée");
      return gladys.answer.create(sentences.answerShoppingListFr);
    }).then((answer) => {
      console.log("ShoppingList: Réponse ajoutée");
    }).catch((error) => {
      console.log("ShoppingList: " + error);
    });
  });

};