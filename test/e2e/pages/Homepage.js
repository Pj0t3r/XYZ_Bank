var Homepage = function() {
	var customerLoginButton = element(by.xpath('//button[contains(@ng-click,\'customer\')]'));
	var bankManagerLoginButton = element(by.xpath('//button[contains(@ng-click,\'manager\')]'));
    var nameSelectList = element(by.model('custId'));  
	var loginButton = element(by.buttonText('Login'));
	
	this.get = function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/');
	};
	
	this.loginAsCustomer = function(){
		customerLoginButton.click();
	};
	
	this.loginAsManager = function(){
		bankManagerLoginButton.click();
	};
	
	this.selectYourName = function(yourName){
		nameSelectList.click();
		nameSelectList.element(by.xpath("//option[text()='"+yourName+"']")).click();
	};
	
	this.clickLoginButton = function(){
		loginButton.click();
	}
};
module.exports = new Homepage();