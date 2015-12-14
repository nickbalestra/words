module.exports = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('game', {
      url: "/game",
      template: require('./game/game.html'),
      controller: require('./game/game'),
      resolve: {
        data: (Utils) => Utils.data.$loaded()
      }
    })

    .state('home', {
      url: "/",
      template: require('./home/home.html'),
      controller: require('./home/home')
    })

    .state('leaderboard', {
      url: "/leaderboard",
      template: require('./leaderboard/leaderboard.html'),
      controller: require('./leaderboard/leaderboard'),
      resolve: {
        data: (Utils) => Utils.data.$loaded()
      }
    })
};
