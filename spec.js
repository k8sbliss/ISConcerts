describe('Concert in Iceland Page', function() {

	beforeEach(function() {
    	browser.get('http://0.0.0.0:8080');
    });

  	it('should have a title', function() {
    	expect(browser.getTitle()).toEqual('Concerts in Iceland');
  	});

  	it('should go to correct section when Nav links are clicked', function() {

        element(by.cssContainingText('.page-scroll', 'Concerts')).click();
		expect(browser.getCurrentUrl()).toEqual("http://0.0.0.0:8080/#/clist");
    browser.driver.sleep(1000);
        element(by.cssContainingText('.page-scroll', 'About')).click();
		expect(browser.getCurrentUrl()).toEqual("http://0.0.0.0:8080/#/aboutisc");
    browser.driver.sleep(1000);
        element(by.cssContainingText('.page-scroll', 'Contact')).click();
		expect(browser.getCurrentUrl()).toEqual("http://0.0.0.0:8080/#/contact");
    browser.driver.sleep(1000);

	});
});


