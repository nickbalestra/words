

module.exports = function($scope, $timeout, $state, Utils, data) {
  var words = data.words.slice();
  console.log(Utils.user.name);
  var timer;
  $scope.scores = 0;
  $scope.timeLeft = 40;
  $scope.startTimer = startTimer;
  $scope.userInput = '';
  
  
  startTimer();
  nextWord();
 
  function startTimer() {
    if ($scope.timeLeft < 1) {
      $timeout.cancel(timer);
      console.log('Game Over');
      Utils.user.scores = $scope.scores;
      // Todo: 
      // - set gameState to gameover
      // - Move to ranking
      var topScores = data.scores.slice().sort(function(a,b){
        return a.score - b.score
      }).map(function(entry){
        var obj = {};
        obj.name = entry.name;
        obj.date = entry.date;
        obj.score = entry.score;
        return obj;
      });
      console.log(topScores);
      if ($scope.scores > topScores[0]['score']) {
        if (topScores.length >= 10) {
          topScores.shift();
        }
        
        var now = new Date();
        topScores.push({name: Utils.user.name, date: now, score: $scope.scores});
        
        var ref = new Firebase("https://wordsanagrams.firebaseio.com");
        ref.update({scores: topScores}, function(){$state.transitionTo('leaderboard')});
      } else {
        $state.transitionTo('leaderboard');
      }
      



      
    } else {
      timer = $timeout(function() {
        $scope.timeLeft--;   
        startTimer();   
      }, 1000);
    }
  };
  

  // Fisher–Yates shuffle to generate anagrams
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  function shuffle(word) {
    var word = word.split('');
    var len = word.length;
    for (var idx = len - 1; idx >= 0; idx--){
       var randomIdx = Math.floor(Math.random() * (idx))
       var temp = word[idx];
       word[idx] = word[randomIdx];
       word[randomIdx] = temp;
    }
    return word.join('');
  }

  function nextWord() {
    $scope.solution = words.shift();
    $scope.anagram = shuffle($scope.solution);
    $scope.score = Math.floor(1.95^($scope.solution.length/3));
    $scope.userInput = '';
    $scope.mingled = $scope.anagram.split('');
  }

  $scope.checkUserInput = function(e) {

    var word = e.target.value;
    
    // For each character that was deleted whilst entering 
    // the word -1 is subtracted from the score
    if (e.keyCode === 8 && $scope.score > 0) {
      $scope.score -= 1;
    }
    

    if (word === $scope.solution) {
      if ($scope.score) {
        $scope.scores += $scope.score;
      }
      // Todo: 
      // - increase totalScore
      // - nextAnagram
      nextWord();
      // -- recalcule maxScore
    }
  }
 
};
