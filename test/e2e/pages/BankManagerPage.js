var BankManagerPage = function() {
	var addCustomerButton = element(by.xpath("//button[contains(text(),'Add Customer')]"));
	var openAccountButton = element(by.xpath("//button[contains(text(),'Open Account')]"));
	var customersButton = element(by.xpath("//button[contains(text(),'Customers')]"));
	
	this.getAddCustomerButton = function(){
		return addCustomerButton;
	};
	
	this.clickAddCustomerButton = function(){
		addCustomerButton.click();
	};
	
	this.clickOpenAccountButton = function(){
		openAccountButton.click();
	};
	
	this.clickCustomersButton = function(){
		customersButton.click();
	};
	
};
module.exports = new BankManagerPage();