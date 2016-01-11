'use strict';

var config = browser.params;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl + '/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h3El.getText()).toBe('Welcome to the great Desk.com quiz of 2016');
    expect(page.aEl.getAttribute('alt')).toBe('start quiz');
  });
});
