'use strict';

(function() {

class QuestionsReviewCtrl {
  constructor(questions, $localStorage) {
    let numCorrect = 0;
    this.pct = 0;
    // Let's grade the questions and figure out the pct correct
    this.questions = questions.map((q)=>{
        const userAnswer = $localStorage.answers[q._id];
        const correctAnswer = q.answers.find((ans)=>{
          return ans.isCorrectAnswer;
        })
        // Compare the question's correct answer with the user's answer saved in localStorage
        q.isCorrect = userAnswer === correctAnswer._id;
        numCorrect += q.isCorrect ? 1 : 0;
        q.correctAnswer = correctAnswer;
        if (!q.isCorrect) {
          const incorrectAnswer = q.answers.find((ans)=>{
            return ans._id == userAnswer;
          });
          q.incorrectAnswer = incorrectAnswer;
        }

        // Calculate the current pct correct
        this.pct = Math.floor((numCorrect / questions.length) * 100);

        return q;
    });
  }
  indexChar(index) {
    return String.fromCharCode(64 + index);
  }
}

angular.module('deskQuizApp')
  .controller('QuestionsReviewCtrl', QuestionsReviewCtrl);
})();
