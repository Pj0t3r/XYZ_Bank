var CustomerPage = function() {
	var welcome = element(by.xpath("//strong[contains(text(),'Welcome')]"));

	this.getUserLoggedInName = function(){
		return welcome.getAttribute('innerText');
	};

};
module.exports = new CustomerPage();