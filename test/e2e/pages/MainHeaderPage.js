var MainHeaderPage = function() {
	var homeButton = $('[ng-click="home()"]');
	var logoutButton = $('[ng-click="byebye()"]');
	
	this.getLogoutButton = function(){
		return logoutButton;
	}
	
	this.clickHomeButton = function(){
		homeButton.click();
	};
	
	this.clickLogoutButton = function(){
		logoutButton.click();
	};

};
module.exports = new MainHeaderPage();