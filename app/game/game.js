import _ from 'lodash';

module.exports = ($scope, $timeout, $state, Utils, data) => {

  var words = data.words.slice();
  var timer;
  $scope.scores = 0;
  $scope.timeLeft = 40;
  $scope.userInput = '';
  
  startTimer();
  nextWord();
  

  // Helpers function 
  // =========================================================
  // - startTimer()
  // - shuffle()
  // - nextWord()
  // - checkUserInput()
  function startTimer() {
    // When Game is Over
    if ($scope.timeLeft < 1) {

      $timeout.cancel(timer);
      Utils.user.scores = $scope.scores;

      var topScores = data.scores.
        slice().
        sort(function(a,b){
          return a.score - b.score
        }).
        map(function(entry){
          var obj = {};
          obj.name = entry.name;
          obj.date = entry.date;
          obj.score = entry.score;
          return obj;
        });

      // Update server only if we have a new highscore
      if ($scope.scores > _.first(topScores).score) {

        // Mantain highscores to max 10
        if (topScores.length >= 10) {
          topScores.shift();
        }
        
        var now = new Date();

        topScores.push({
          name: Utils.user.name || 'n/a', 
          date: now, 
          score: $scope.scores
        });
        
        var ref = new Firebase("https://wordsanagrams.firebaseio.com");
        ref.update({scores: topScores}, () => {
          $state.transitionTo('leaderboard');
        });

      } else {
        $state.transitionTo('leaderboard');
      }

    } else {
      timer = $timeout(() => {
        $scope.timeLeft--;   
        startTimer();   
      }, 1000);
    }
  };
  
  // Fisher–Yates shuffle to generate anagrams
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
      nextWord();
    }
  } 
};
