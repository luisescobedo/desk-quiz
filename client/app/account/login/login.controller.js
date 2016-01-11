'use strict';

class LoginController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $localStorage) {
    this.Auth = Auth;
    this.$state = $state;
    this.$storage = $localStorage;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$storage.answers = {};
        this.$state.go('questions.detail',{questionId: 1});
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('deskQuizApp')
  .controller('LoginController', LoginController);
