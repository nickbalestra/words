module.exports = function($http, $firebaseObject, $firebaseArray) {
  this.user = {};

  var ref = new Firebase("https://wordsanagrams.firebaseio.com");
  this.data = $firebaseObject(ref);
  
  this.startGame = function(state, userName) {
    this.user.name = userName || '';
    state.transitionTo('game');
  };
};




