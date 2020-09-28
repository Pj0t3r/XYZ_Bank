var bankHomepage = require('../pages/Homepage');
var customerPage = require('../pages/CustomerPage');
var mainHeaderPage = require('../pages/MainHeaderPage');

describe('Customer operations ', function() {

  beforeEach(function() {
    bankHomepage.get();
	bankHomepage.loginAsCustomer('Harry Potter');
  });
	
  it('should allow to logout', function() {
	mainHeaderPage.clickLogoutButton();
    expect(mainHeaderPage.getLogoutButton().isDisplayed()).toBe(false);
  });
});
