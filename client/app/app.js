'use strict';

angular.module('deskQuizApp', [
  'deskQuizApp.auth',
  'deskQuizApp.admin',
  'deskQuizApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngStorage',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('questions/1');

    $locationProvider.html5Mode(true);
  });
