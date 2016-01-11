/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.heroEl = element(by.css('.hero-unit'));
  this.h3El = this.heroEl.element(by.css('h3'));
  this.aEl = this.heroEl.element(by.css('a'));
};

module.exports = new MainPage();
