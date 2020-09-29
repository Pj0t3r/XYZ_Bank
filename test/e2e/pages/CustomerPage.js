var CustomerPage = function() {
	var welcome = element(by.xpath("//strong[contains(text(),'Welcome')]"));
	var accountList = element(by.id("accountSelect"));
	var accountNumber = element(by.xpath("//strong[@class='ng-binding']/parent::div/text()[1]/following-sibling::strong[1]"));
	var transactionsOptionButton = $('[ng-click="transactions()"]');
	var depositOptionButton = $('[ng-click="deposit()"]');
	var withdrawlOptionButton = $('[ng-click="withdrawl()"]');
	var transactionsTable = $('[class="table table-bordered table-striped"]');
	var amountTextField = element(by.model('amount'));
	var depositButton = element(by.xpath('//button[text()="Deposit"]'));
	var withdrawlButton = element(by.xpath('//button[text()="Withdraw"]'));
	var operationMessage = $('[ng-show="message"]');
	
	this.getUserLoggedInName = function(){
		return welcome.getAttribute('innerText');
	};
	
	this.selectAccountNumber = function(accountNum){
		accountList.click();
		accountList.element(by.xpath("//option[@label='"+accountNum+"']")).click();
	};
	
	this.getCurrentAccountNumber = function(){
		currentAccount = accountNumber.getText();
		return currentAccount;
	};
	
	this.clickTransactionsOptionButton = function(){
		transactionsOptionButton.click();
	};
	
	this.clickDepositOptionButton = function(){
		depositOptionButton.click();
	};
	
	this.clickWithdrawlOptionButton = function(){
		withdrawlOptionButton.click();
	};
	
	this.getTransactionsTable = function(){
		return transactionsTable;
	};
	
	this.setAmmountTextField = function(amount){
		amountTextField.sendKeys(amount);
	};
	
	this.clickDepositButton = function(){
		depositButton.click();
	};
	
	this.clickWithdrawlButton = function(){
		withdrawlButton.click();
	};
	
	this.depositMoney = function(amount){
		this.clickDepositOptionButton();
		this.setAmmountTextField(amount);
		this.clickDepositButton();
	};
	
	this.withdrawlMoney = function(amount){
		this.clickWithdrawlOptionButton();
		this.setAmmountTextField(amount);
		this.clickWithdrawlButton();
	};
	
	this.getOperationMessageValue = function(){
		message = operationMessage.getText();
		return message;
	};
	
	this.getAccountOperationsCount = function(){
		operationsSum = transactionsTable.all(by.xpath('//tr[@class="ng-scope"]')).count();
		return operationsSum;
	};
	
	this.sleepForTrasactionsMilis = function(timeInMilis){
		browser.sleep(timeInMilis).then(
		function(){
			console.log("Waiting for trasactions to load");
			//ugly sleep, but in chrome headless helps - its tooo fast:))
		}
		);
	};

};
module.exports = new CustomerPage();