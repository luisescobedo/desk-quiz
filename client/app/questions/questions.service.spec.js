'use strict';

describe('Service: questions', function () {

  // load the service's module
  beforeEach(module('deskQuizApp'));
  beforeEach(module('stateMock'));
  var $httpBackend;

  // instantiate service
  var questions;
  var questionsAll;
  beforeEach(inject(function (_questions_, _$httpBackend_, $state, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/questions').respond(['Q1', 'Q2', 'Q3']);
    questions = _questions_;
    spyOn(questions, "all");
    questions.all()
  }));

  it('should call questions service for all questions', function () {
    expect(questions.all).toHaveBeenCalled();
    $httpBackend.flush();
  });

});
