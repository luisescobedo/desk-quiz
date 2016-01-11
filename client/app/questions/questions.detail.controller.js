'use strict';

(function() {

class QuestionsDetailCtrl {

  constructor($scope, $stateParams, questionsAll, questions) {
    $scope.question = questionsAll.find((e)=>e.order===parseInt($stateParams.questionId));

    $scope.indexChar = (index) => {
      return String.fromCharCode(65 + index);
    };
  }

  continue(form) {
    this.submitted = true;

    if (form.$valid) {
      // Put question answers here.
    }
  }
}

angular.module('deskQuizApp')
  .controller('QuestionsDetailCtrl', QuestionsDetailCtrl);
})();
