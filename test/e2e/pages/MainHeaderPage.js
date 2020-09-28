var MainHeaderPage = function() {
	var homeButton = $('[ng-click="home()"]');

	this.clickHomeButton = function(){
		homeButton.click();
	};

};
module.exports = new MainHeaderPage();