var BankManagerPage = function() {
	var addCustomerButton = $('[ng-click="addCust()"]');
	var openAccountButton = $('[ng-click="openAccount()"]');
	var customersButton = element(by.xpath("//button[contains(text(),'Customers')]"));
	var firstNameTextField = element(by.model('fName'));
	var lastNameTextField = element(by.model('lName'));
	var postCodeTextField = element(by.model('postCd'));
	var addCustomerFormButton = $('[type="submit"]');
	var customerSelectList = element(by.id('userSelect'));
	var currencySelectList = element(by.id('currency'));
	var processButton = element(by.xpath('//button[text()="Process"]'));
	var searchCustomerTextField = element(by.model('searchCustomer'));
	var deleteButton = element(by.xpath("//button[contains(text(),'Delete')]"));
	
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
	
	this.setFirstNameTextField = function(fname){
		firstNameTextField.sendKeys(fname);
	};
	
	this.setLastNameTextField = function(lname){
		lastNameTextField.sendKeys(lname);
	};
	
	this.setPostCodeField = function(postCD){
		postCodeTextField.sendKeys(postCD);
	};
	
	this.clickAddCustomerFormButton = function(){
		addCustomerFormButton.click();
	};
	
	this.addNewCustomer = function(fname,lname,postCD){
		this.clickAddCustomerButton();
		this.setFirstNameTextField(fname);
		this.setLastNameTextField(lname);
		this.setPostCodeField(postCD);
		this.clickAddCustomerFormButton();
	};
	
	this.getAlertText = function(){
		var myAlert = browser.switchTo().alert();
		alertText = myAlert.getText();
		this.acceptAlertText();
		return alertText;
	};
	
	this.acceptAlertText = function(){
		var myAlert = browser.switchTo().alert();
		myAlert.accept();
	}
	
	this.selectCustomerFromList = function(customer){
		customerSelectList.click();
		customerSelectList.element(by.xpath("//option[text()='"+customer+"']")).click();
	};
	
	this.selectCurrencyFromList = function(currency){
		currencySelectList.click();
		currencySelectList.element(by.xpath("//option[text()='"+currency+"']")).click();
	};
	
	this.clickProcessButton = function(){
		processButton.click();
	};
	
	this.openAccount = function(customer,currency){
		this.clickOpenAccountButton();
		this.selectCustomerFromList(customer);
		this.selectCurrencyFromList(currency);
		this.clickProcessButton();
	};
	
	this.setCustomerSearchTextField = function(customerName){
		searchCustomerTextField.sendKeys(customerName);
	};
	
	this.clickDeleteButton = function(){
		deleteButton.click();
	};
	
	this.getDeleteButton = function(){
		return deleteButton;
	};
	
	this.deleteCustomer = function(lname){
		this.clickCustomersButton();
		this.setCustomerSearchTextField(lname);
		this.clickDeleteButton();
	};
	
};
module.exports = new BankManagerPage();