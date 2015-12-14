module.exports = function($scope, $timeout, $state, Utils, $firebaseObject) {
  $scope.userName = Utils.user.name;
  
  $scope.startGame = function(){
    Utils.startGame($state, $scope.userName);
  };
};
