var bankHomepage = require('../pages/Homepage');
var bankManagerPage = require('../pages/BankManagerPage');

describe('Manager', function() {

  beforeEach(function() {
    bankHomepage.get();
	bankHomepage.loginAsManager();
  });
  
  it('should be able to add customer', function() {
	bankManagerPage.addNewCustomer('Robert','Roberto','05-300');
    expect(bankManagerPage.getAlertText()).toContain('Customer added successfully with customer id');
  });
  it('should be able to open account', function() {
	bankManagerPage.openAccount("Harry Potter",'Rupee');
	expect(bankManagerPage.getAlertText()).toContain('Account created successfully with account Number');
  });
  it('should be able to delete customer', function() {
	 bankManagerPage.addNewCustomer('Customer','Deleter','05-300');
	 bankManagerPage.acceptAlertText();
	 bankManagerPage.deleteCustomer('Deleter');
	 expect(bankManagerPage.getDeleteButton().isPresent()).toBe(false);
  });
  
});
