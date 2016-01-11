'use strict';

(function() {

class QuestionsCtrl {

  constructor($scope, $http, questionsAll) {
  //  this.$http = $http;
  //  $scope.questions = questions;
   // this.awesomeThings = [];

    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    // });
  }

  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }
  //
  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
}

angular.module('deskQuizApp')
  .controller('QuestionsCtrl', QuestionsCtrl);
})();
