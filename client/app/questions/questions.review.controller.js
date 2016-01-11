'use strict';

(function() {

class QuestionsReviewCtrl {
  constructor(questions, $localStorage, $sce) {
    let numCorrect = 0;
    this.pct = 0;
    // Let's grade the questions and figure out the pct correct
    this.questions = questions.map((q)=>{
        const userAnswer = $localStorage.answers[q._id];
        // Title might contain HTML with formatting, trust it
        q.title = $sce.trustAsHtml(q.order + ". " + q.title);

        if (q.type === 'multipleChoice') {
          const correctAnswer = q.answers.find((ans)=>{
            return ans.isCorrectAnswer;
          })
          // Compare the question's correct answer with the user's answer saved in localStorage
          q.isCorrect = userAnswer === correctAnswer._id;

          q.correctAnswer = correctAnswer;
          if (!q.isCorrect) {
            const incorrectAnswer = q.answers.find((ans)=>{
              return ans._id == userAnswer;
            });
            q.incorrectAnswer = incorrectAnswer;
          }

        } else {
          // If the question is fill in the blank, compare the text answers saved in local storage with the correct answers
          q.correctAnswer = {};
          q.correctAnswer.text = Array.from(q.answers, x => x.text.toLowerCase()).join(' and ');
          q.isCorrect = true;
          for (let i=0; i<q.answers.length; i++) {
            // Compare user's answers to correct answers (make sure)
            if (!userAnswer[q.answers[i]._id] || userAnswer[q.answers[i]._id].trim().toLowerCase() !== q.answers[i].text.toLowerCase()) {
              q.isCorrect = false;
              break;
            }
          }
          // Put incorrect answer for review in object
          if (!q.isCorrect) {
            q.incorrectAnswer = {};
            let incorrectAnswer = '';
            for(let answer in userAnswer) {
              incorrectAnswer += userAnswer[answer].toLowerCase() + " and ";
            }
            q.incorrectAnswer.text = incorrectAnswer ? incorrectAnswer.slice(0, -5) : '(blank)';
          }
        }

        numCorrect += q.isCorrect ? 1 : 0;
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
