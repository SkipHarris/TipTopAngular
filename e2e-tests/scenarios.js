'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /introView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/introView");
  });


  describe('introView', function() {

    beforeEach(function() {
      browser.get('index.html#!/introView');
    });


    it('should render introView when user navigates to /introView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('photosView', function() {

    beforeEach(function() {
      browser.get('index.html#!/photosView');
    });


    it('should render photosView when user navigates to /photosView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
