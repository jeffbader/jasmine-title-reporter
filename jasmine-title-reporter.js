/* global jasmine, document */
(function(jasmine, document){
  
  // This is a custom Jasmine test reporter that updates the window title based on
  // the status of the test results.
  //
  // The idea here is that you have a browser window open for running tests, and
  // another browser window open for your application, with the application window active
  // so you only see the title of the test window.
  //
  // If you are running browsersync or something similar that will automatically rerun
  // your tests as you make code or test changes, you will be able to see the status
  // of the tests on the test window title without having to switch to the test window.
  
  // REF: http://jasmine.github.io/2.1/custom_reporter.html
  
  var docTitle = document.title;
  var specCount = 0;
  var failCount = 0;
  
  var titleReporter = {
    
    jasmineStarted: function(){
      document.title = docTitle + ": Running";
    },
    
    specStarted: function(){
      specCount++;
    },

    specDone: function(result){
      if (result.status === "failed") {
        failCount++;
      }
    },
    
    jasmineDone: function() {
      var testResult;
      
      if (specCount === 0) {
        testResult = "No Tests";
      }
      else if (failCount > 0) {
        testResult = failCount + " FAILED";
      }
      else {
        testResult = specCount + " Passed";
      }
      document.title =  docTitle + ": " + testResult;
    }
  };

  jasmine.getEnv().addReporter(titleReporter);
})(jasmine, document);