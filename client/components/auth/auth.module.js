'use strict';

angular.module('deskQuizApp.auth', [
  'deskQuizApp.constants',
  'deskQuizApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
