var angular = require('angular');
var router = require('angular-ui-router');
var angularfire = require('angularfire');
var Firebase = require('firebase');


var config = require('./config');
var utils = require('./utils/utils');

var bootstrap = require('bootstrap/dist/css/bootstrap.css');
var style = require('./words.css');

var app = angular.module('app', [router, config, angularfire]);
app.service('Utils', ['$http', '$firebaseObject', '$firebaseArray', utils]);
