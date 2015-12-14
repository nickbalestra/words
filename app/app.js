import angular from 'angular';
import router from 'angular-ui-router';
import angularfire from 'angularfire';
import Firebase from 'firebase';

import config from './config';
import utils from './utils/utils';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './words.css';

var app = angular.module('app', [router, config, angularfire]);
app.service('Utils', ['$http', '$firebaseObject', '$firebaseArray', utils]);
