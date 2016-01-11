'use strict';

angular.module('deskQuizApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questions', {
        // With abstract set to true, that means this state can not be explicitly activated.
        // It can only be implicitly activated by activating one of its children.
        abstract: true,
        url: '/questions',
        templateUrl: 'app/questions/questions.html',
        controller: 'QuestionsCtrl',
        controllerAs: 'questions',
        authenticate: true,
        resolve: {
          questionsAll: ['questions', function(questions) {
            return questions.all();
          }
        ]}
      })
      .state('questions.detail', {
        url: '/{questionId}',
        templateUrl: 'app/questions/questions.detail.html',
        controller: 'QuestionsDetailCtrl',
        controllerAs: 'questionsDetail',
        authenticate: true
      });;
  });
