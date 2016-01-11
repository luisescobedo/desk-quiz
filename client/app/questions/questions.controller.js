'use strict';

(function() {

class QuestionsCtrl {
  constructor($scope, $http, questions) {
    this.questions = questions;
  }
}

angular.module('deskQuizApp')
  .controller('QuestionsCtrl', QuestionsCtrl);
})();
