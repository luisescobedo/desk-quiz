/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Question from '../api/question/question.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Question.find({}).removeAsync()
  .then(() => {
    Question.createAsync({
      title: 'Which is not an advantage of using a closure?',
      type: 'multipleChoice',
      order: 1,
      answers: [{
        text: 'Prevent pollution of global scope',
        order: 1,
        isCorrectAnswer: false,
      },
      {
        text: 'Encapsulation',
        order: 2,
        isCorrectAnswer: false,
      },
      {
        text: 'Private properties and methods',
        order: 3,
        isCorrectAnswer: true,
      },
      {
        text: 'Allow conditional use of ‘strict mode’',
        order: 4,
        isCorrectAnswer: false,
      }]
    },{
      title: 'To create a columned list of two-­line email subjects and dates for a master­-detail view, which are the most semantically correct?',
      type: 'multipleChoice',
      order: 2,
      answers: [{
        text: '<div>+<span>',
        order: 1,
        isCorrectAnswer: false,
      },
      {
        text: '<tr>+<td>',
        order: 2,
        isCorrectAnswer: false,
      },
      {
        text: '<ul>+<li>',
        order: 3,
        isCorrectAnswer: true,
      },
      {
        text: '<p>+<br>',
        order: 4,
        isCorrectAnswer: false,
      },
      {
        text: 'none of these',
        order: 5,
        isCorrectAnswer: false,
      },
      {
        text: 'all of these',
        order: 6,
        isCorrectAnswer: false,
      },]
    },{
      title: 'To pass an array of strings to a function, you should not use...',
      type: 'multipleChoice',
      order: 3,
      answers: [{
        text: 'fn.apply(this, stringsArray)',
        order: 1,
        isCorrectAnswer: true,
      },
      {
        text: 'fn.call(this, stringsArray)',
        order: 2,
        isCorrectAnswer: false,
      },
      {
        text: 'fn.bind(this, stringsArray)',
        order: 3,
        isCorrectAnswer: false,
      },]
    },{
      title: '____ and ____ would be the HTML tags you would use to display a menu item and its description.',
      type: 'fillBlanks',
      order: 4,
      answers: [{
        text: "ul",
        order: 1,
        isCorrectAnswer: true,
      },
      {
        text: "li",
        order: 2,
        isCorrectAnswer: true,
      }]
    },{
      title: 'Given  <code>&lt;div id=”outer”&gt;&lt;div class=”inner”>&lt;/div&gt;&lt;/div&gt;</code>, which of these two is the most performant way to select the inner div?',
      type: 'multipleChoice',
      order: 5,
      answers: [{
        text: 'getElementById("outer").children[0]',
        order: 1,
        isCorrectAnswer: true,
      },
      {
        text: 'getElementsByClassName("inner")[0]',
        order: 2,
        isCorrectAnswer: false,
      },]
    },{
      title: 'Given this:\n' +
        '<pre style="text-align:left">angular.module(‘myModule’,[]).service(‘myService’,(function() {\n' +
        '&#9;var message = “Message one!”\n' +
        '&#9;var getMessage = function() {\n' +
        '&#9;&#9;return this.message\n' +
        '&#9;}\n' +
        '&#9;this.message = “Message two!”\n' +
        '&#9;this.getMessage = function() { return message }\n' +
        '&#9;return function() {\n' +
        '&#9;&#9;return {\n' +
        '&#9;&#9;&#9;getMessage: getMessage,\n' +
        '&#9;&#9;&#9;message: \“Message three!\”\n' +
        '&#9;&#9;}\n' +
        '&#9;}\n' +
        '})())</pre>\n' +
        'Which message will be returned by injecting this service and executing “myService.getMessage()”',
      type: 'multipleChoice',
      order: 6,
      answers: [{
        text: "1",
        order: 1,
        isCorrectAnswer: false,
      },
      {
        text: "2",
        order: 2,
        isCorrectAnswer: false,
      },{
        text: "3",
        order: 3,
        isCorrectAnswer: true,
      },]
    },
    )
    .then(() => {
      console.log('finished populating questions');
    });
  });
