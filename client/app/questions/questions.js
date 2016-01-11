'use strict';

angular.module('deskQuizApp')
  .config(function ($stateProvider,  $urlRouterProvider) {
    $stateProvider
      .state('questions', {
        // With abstract set to true, that means this state can not be explicitly activated.
        // It can only be implicitly activated by activating one of its children.
        abstract: true,
        url: '/questions',
        templateUrl: 'app/questions/questions.html',
        controller: 'QuestionsCtrl',
        controllerAs: 'qts',
        authenticate: true,
        resolve: {
          questions: ['questions', function(questions) {
            return questions.all();
          }
        ]}
      })
      .state('questions.detail', {
        url: '/{questionId}',
        views: {
          '': {
            templateUrl: 'app/questions/questions.detail.html',
            controller: 'QuestionsDetailCtrl',
            controllerAs: 'qd',
          }
        },
        authenticate: true
      })
      .state('review', {
        url: '/review',
        resolve: {
          questions: ['questions', function(questions) {
            return questions.all();
          }
        ]},
        views: {
          '': {
            templateUrl: 'app/questions/questions.review.html',
            controller: 'QuestionsReviewCtrl',
            controllerAs: 'qr',
          }
        },
        authenticate: true
      });
  });
