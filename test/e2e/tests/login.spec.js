var bankHomepage = require('../pages/Homepage');
var customerPage = require('../pages/CustomerPage');
var bankManagerPage = require('../pages/BankManagerPage');

describe('XYZ Bank main page', function() {

  beforeEach(function() {
    bankHomepage.get();
  });
	
  it('should allow to login as customer', function() {
    bankHomepage.loginAsCustomer();
	bankHomepage.selectYourName('Harry Potter');
	bankHomepage.clickLoginButton();
    expect(customerPage.getUserLoggedInName()).toEqual('Welcome Harry Potter !!');
  });
  it('should allow to login as manager', function() {
    bankHomepage.loginAsManager(); 
    expect(bankManagerPage.getAddCustomerButton().isDisplayed()).toBe(true);
  });
});
