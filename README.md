Words - Angular Word Game
===========================

A small Angular based word puzzle game:

- Views managed via the UI-Router.
- Fisher–Yates shuffled anagrams.
- Persistent Scores via a Firebase API. (AngularFire)
- Modules and build are webpack managed.

## Install:

Make sure you have webpack installed globally:

`$ npm i -g webpack`

Install npm dependencies:

`$ npm i`

Build your bundle:

`$ webpack` or
`$ npm run dev`

Serve your public/index.html via http to see and have fun playing the Angular Word Game. 

## Webpack dev server

The [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Socket.IO

Just run the server from the project root

`$ webpack-dev-server` or
`npm run dev-server`

***

- [Angular](https://github.com/angular/angular)
- [UI-Router](https://github.com/angular-ui/ui-router)
- [Firebase](https://www.firebase.com/)
- [AngularFire](https://github.com/firebase/angularfire)
- [Webpack](https://webpack.github.io/)
