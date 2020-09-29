var bankHomepage = require('../pages/Homepage');
var customerPage = require('../pages/CustomerPage');
var mainHeaderPage = require('../pages/MainHeaderPage');

describe('Customer operations ', function() {

  beforeEach(function() {
    bankHomepage.get();
	bankHomepage.loginAsCustomer('Harry Potter');
  });
  
  it('should allow to choose customer account', function() {
	customerPage.selectAccountNumber('1006');
    expect(customerPage.getCurrentAccountNumber()).toEqual('1006');
  });
  it('should allow to deposit money', function() {
	customerPage.depositMoney(1000);
    expect(customerPage.getOperationMessageValue()).toEqual('Deposit Successful');
  });
  it('should allow to withdrawl money', function() {
	customerPage.withdrawlMoney(500);
    expect(customerPage.getOperationMessageValue()).toEqual('Transaction successful');
  });
  it('should allow to see transactions', function() {
	customerPage.depositMoney(1000);
	customerPage.withdrawlMoney(500);
	customerPage.sleepForTrasactionsMilis(3000);
	customerPage.clickTransactionsOptionButton();
    expect(customerPage.getAccountOperationsCount()).toEqual(4);
  });
  
  afterEach(function() {
	mainHeaderPage.clickLogoutButton();
  }); 
});
