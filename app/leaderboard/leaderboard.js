import moment from 'moment';
import _ from 'lodash';

module.exports = ($scope, $timeout, $state, data, Utils) => {

  $scope.scores = _(data.scores)
    .cloneDeep()
    .map((entry) => {
      entry.date = moment(entry.date, moment.ISO_8601).fromNow();
      return entry;
    })
    .sort((a,b) =>  b.score - a.score );
  
  $scope.userName = Utils.user.name;
  
  $scope.startGame = (userName) => {
    Utils.startGame($state, userName);
  };
};
