'use strict';

angular.module('deskQuizApp', [
  'deskQuizApp.auth',
  'deskQuizApp.admin',
  'deskQuizApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
