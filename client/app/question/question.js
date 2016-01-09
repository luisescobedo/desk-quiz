'use strict';

angular.module('deskQuizApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('question', {
        url: '/question',
        templateUrl: 'app/question/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question',
        authenticate: true
      });
  });
