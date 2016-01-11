'use strict';

(function() {

class MainController {

  constructor($http, $localStorage, $state, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.$storage = $localStorage;
    this.currentQState = 'start';
    this.userId = Auth.getCurrentUser()._id;

    // Has already started quiz, or completed it (will show appropriate home page ngswitch view)
    if (this.$storage.answers && this.$storage.answers[this.userId]) {
      this.currentQState = 'resume';
      const answers = this.$storage.answers[this.userId];
      let numQuestionsAnswered = 0;
      // Not fully sure why (I've run into this before), but cannot use Object().keys.length... returns undefined)
      for (var k in answers) {
        if (answers.hasOwnProperty(k)) {
           ++numQuestionsAnswered;
        }
      }
      this.lastQ = numQuestionsAnswered + 1;
      if(numQuestionsAnswered === this.$storage.numQuestions) {
        this.currentQState = 'review';
      }
    }

    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }
  startOver() {
    this.$storage.answers[this.userId] = null;
    this.$state.go('questions.detail',{questionId:1});
  }
  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('deskQuizApp')
  .controller('MainController', MainController);

})();
