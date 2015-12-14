module.exports = ($http, $firebaseObject, $firebaseArray) => {
  this.user = {};

  var ref = new Firebase("https://wordsanagrams.firebaseio.com");
  this.data = $firebaseObject(ref);
  
  this.startGame = (state, userName) => {
    this.user.name = userName || '';
    state.transitionTo('game');
  };
};




