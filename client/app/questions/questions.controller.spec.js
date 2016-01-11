'use strict';

describe('Controller: QuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('deskQuizApp'));
  beforeEach(module('stateMock'));
  var QuestionsCtrl, scope, state, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    state = $state;
    QuestionsCtrl = $controller('QuestionsCtrl', {
      $scope: scope,
      questions: ['Q1','Q2','Q3'],
    });

  }));

  it('should attach a list of questions to the questions controller', function () {
    expect(QuestionsCtrl.questions.length).toEqual(3);
  });
});
