module.exports = ($scope, $timeout, $state, Utils, $firebaseObject) => {
  $scope.userName = Utils.user.name;
  
  $scope.startGame = () => {
    Utils.startGame($state, $scope.userName);
  };
};
