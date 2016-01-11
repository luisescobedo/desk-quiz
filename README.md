# Desk-Quiz

Thanks for letting me work this fun little take home project :) I hadn't stretched my Angular legs for months since starting with React so it was great to take it out for a spin again. I missed it so.

The deployed demo on Heroku can be found [here](https://quizyluis.herokuapp.com)

## My Notes

I created the project on a MEAN stack with the Yeoman angular-full-stack package. I found it let me concentrate a little more on the front-end without having to worry about wiring a lot of the back-end plumbing.
I thought about running it on Parse, or a Sinatra/ruby back-end, but given the time constraints this seemed easiest.

### DB and LocalStorage

I used MongoDB to store questions and users, but decided to use $localStorage (via [ngStorage](https://github.com/gsklee/ngStorage)) to keep track of a user's answers to questions. Really I just did this to show that I could use $localStorage more than anything as it would have been easier (but more back-end code) to store those in DB. Most likely not a design choice I would make in Production :)

### Options, Components, and Styling
* For routing, I used the ever popular angular-ui [ui-router](https://github.com/angular-ui/ui-router)
* There is a fair amount of ES6 I sprinkled in so everything is run through [Babel](https://babeljs.io/)
* Stylesheets: Sass (with some mixin overrides)
* For all things pretty I used:
  * Bootstrap with Sass port (Though I do prefer Angular Material... but that discussion is for another day)
  * ngAnimate for animations
  * [Awesome Bootstrap Checkbox](https://github.com/flatlogic/awesome-bootstrap-checkbox)

### Testing (or lack thereof...)

I fully acknowledge that my tests (both e2e and unit) are the weakest part of my game. Alas, due to the time constraints, my code coverage shall suffer on this project. But I did get to play with Protractor using PhantomJS and Selenium which was awesome, and I definitely would love to sink my teeth into those bad boys and really take them for a spin.

## Getting Started

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.2.0.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
