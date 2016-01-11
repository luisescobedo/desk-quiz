'use strict';

(function() {

class QuestionsDetailCtrl {
  submitted = false;
  constructor($scope, $state, $stateParams, questions, $localStorage) {
    this.questions = questions;
    this.question = questions.find((e)=>e.order===parseInt($stateParams.questionId));

    // There is no question with this id... redirect to the first question
    if (!this.question) {
      $state.go('questions.detail',{ questionId: 1 });
    }

    this.$storage = $localStorage;
    this.$stateParams = $stateParams;
    this.$state = $state;
    if (!this.$storage.answers) {
      this.$storage.answers = {};
    }
  }
  indexChar(index) {
    return String.fromCharCode(64 + index);
  }
  continue(form) {
    this.submitted = true;
    if (form.$valid) {
      // save the user's answer in local storage
      this.$storage.answers[this.question._id] = this.selectedAnswer;
      this.submitted = false;

      // go to next question, or the review screen if finished
      if (this.question.order + 1 <= this.questions.length) {
        this.$state.go('questions.detail', {questionId: this.question.order + 1});
      } else {
        this.$state.go('review');
      }
    }
  }
}

angular.module('deskQuizApp')
  .controller('QuestionsDetailCtrl', QuestionsDetailCtrl);
})();
