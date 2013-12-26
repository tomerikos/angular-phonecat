'use strict';

/* e2e-testing */

describe('PhoneCat App', function() {

  it ('should redirect index.html to: index.html#/phones', function(){
    browser().navigateTo('app/Index.html');
    expect(browser().location().url()).toBe('/phones');
  })

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/phones');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(20);

      input('phoneQuery').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('phoneQuery').enter('motorola');
      expect(repeater('.phones li').count()).toBe(8);

      input ('phoneQuery').enter('nokia');
      expect(repeater('.phones li').count()).toBe(0);
    });


    it('should be possible to control phone order via the drop down select box', function() {
      input('phoneQuery').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('phonesOrder').option('Alphabetical');

      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render phone specific links', function() {
      input('phoneQuery').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().url()).toBe('/phones/nexus-s');
    });
  });

    describe('phone detail view', function(){
      beforeEach(function(){
        browser().navigateTo('app/index.html#/phones/dell-venue');
      });

    it('should display placeholder page with phoneId', function() {
      expect(binding('phoneId')).toBe('dell-venue');
    });
  });
});