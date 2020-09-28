var HtmlReporter = require('C:/Users/Komputer/AppData/Roaming/npm/node_modules/protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../e2e/tests/login.spec.js'],
  onPrepare: function(){
	  jasmine.getEnv().addReporter(new HtmlReporter({
		  baseDirectory: '../testReports/e2e', 
		  takeScreenShotsOnlyForFailedSpecs: true,
		  docTitle: 'Report',
		  clientDefaults:{
                showTotalDurationIn: "belowHeader",
                totalDurationFormat: "h:m:s",
                gatherBrowserLogs: true
              }
	  }).getJasmine2Reporter());
  },
    multiCapabilities: [{
    browserName: 'firefox',
	shardTestFiles: false,
    maxInstances: 5
  }, {
    browserName: 'chrome',
	shardTestFiles: false,
    maxInstances: 5,
	chromeOptions: {
		args: ['--headless','--disable-gpu']
	}
  }]
}