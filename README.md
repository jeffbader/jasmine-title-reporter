# jasmine-title-reporter
Jasmine test reporter that sumarizes test results in the browser window title.

This is a custom Jasmine test reporter that updates the window title based on the status of the test results.

The idea here is that you have two browser windows open, one for running tests, and another for your application, 
with the application window active so you only see the title of the test window.

If you are running browsersync or something similar that will automatically rerun your tests as you make code or 
test changes, you will be able to see the status of the tests on the test window title without having to 
switch to the test window.
