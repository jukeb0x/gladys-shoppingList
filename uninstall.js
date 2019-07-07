const Promise = require('bluebird');
var sentences = require('./lib/sentences.js');

module.exports = function uninstall(){

  //gladys.user.get().then(function(user){
  //	if(user[0].language!='fr-FR')
  //On pourrait réutiliser le user mais ne serait pas cohérent avec l'install

  return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
    if(lang[0].language!='fr-FR')
      gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [
          sentences.sentenceAddEn.sentences[0].uuid,
        sentences.sentenceReadAllEn.sentences[0].uuid,
        sentences.sentenceFlushEn.sentences[0].uuid,
        sentences.sentenceRemoveEn.sentences[0].uuid
        ]).then(function(){
        console.log("ShoppingList: Question supprimée");
        gladys.utils.sql('DELETE FROM answer WHERE label = ?', [sentences.answerShoppingListEn.label]);
      }).then(function(){
        console.log("ShoppingList: Réponse supprimée");
      }).catch((error) => {
        console.log(error);
      });
  else gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [
        sentences.sentenceAddFr.sentences[0].uuid,
      sentences.sentenceReadAllFr.sentences[0].uuid,
      sentences.sentenceFlushFr.sentences[0].uuid,
      sentences.sentenceRemoveFr.sentences[0].uuid

    ]).then(function(){
      console.log("ShoppingList: Question supprimée");
      gladys.utils.sql('DELETE FROM answer WHERE label = ?', [sentences.answerShoppingListFr.label]);
    }).then(function(){
      console.log("ShoppingList: Réponse supprimée");
    }).catch((error) => {
      console.log(error);
    });
  });

};