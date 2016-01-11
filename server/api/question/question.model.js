'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

// If the type of the Question is "fillBlanks" then "isCorrectAnswer" is not used
var AnswerSchema = new mongoose.Schema({
  text: String,
  order: Number,
  isCorrectAnswer: Boolean,
});

var QuestionSchema = new mongoose.Schema({
  title: String,
  type: String, // This will either be "multipleChoice" or "fillBlanks"
  order: Number,
  answers: [AnswerSchema],
});

export default mongoose.model('Question', QuestionSchema);
