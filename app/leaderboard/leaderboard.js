var moment = require('moment');
var _ = require('lodash');

module.exports = function($scope, $timeout, $state, data, Utils) {

  // $scope.userName = Utils.user.name;

  $scope.scores = _.cloneDeep(data.scores).map(function(entry){
    entry['date'] = moment(entry['date'], moment.ISO_8601).fromNow();
    return entry;
  }).sort(function(a,b){return b.score - a.score});
  
  $scope.userName = Utils.user.name;
  
  $scope.startGame = function(userName){
    Utils.startGame($state, userName);
  };
};
