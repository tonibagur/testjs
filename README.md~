# testjs

In this project there's an example that shows how to run unit test using Karma or Jasmine Spec Runner.

### Starting

Create your test directory and move into it.

Run tests with [Karma](https://github.com/karma-runner/karma):

1. Download bower.json, package.json, karma.conf.js, app/js/ and test/.
2. Place your js (the ones that you want to test) in app/js/ and your tests in test/unit/ instead of example files.
3. On terminal, move to your directory and execute `npm test`

Comments:

* Using Karma it's possible to test more than one browser at the same time. Default options are Chrome and Firefox. To custumize which browsers you would like to launch edit browsers array of karma.conf.js. 
* Change 'files' array in karma.conf.js to run specific tests without moving them from test/unit/ directory. The same as well for source js files.

Run tests with [Jasmine Spec Runner](https://github.com/jasmine/jasmine):

1. Download bower_components/, lib/, SpecRunner.html, app/js/ and test/.
2. Place your js (the ones that you want to test) in app/js/ and your tests in test/unit/ instead of example files.
3. Open SpecRunner.html file in browser.

Comments:

*  Add/remove script lines on SpecRunner.html file to run specific tests without moving them from test/unit/ directory. The same as well for source js files.

### Debugging karma

0. Remove or comment coverage references from karma.conf.js (for compatibility reasons).
1. On terminal, move to your directory and execute `node node_modules/karma/bin/karma start karma.conf.js --browser=Chrome --single-run debug`
2. Click on debug button placed in Karma's window.
3. Right click>Inspect element>Sources>'yourTest'.js and insert breakpoints clicking on the left grey band.
4. Press F5 to refresh the test and start debugging.

### Coverage

[Karma-coverage](https://github.com/karma-runner/karma-coverage):
When you run `npm test` a directory named 'coverage' is created in your test directory. Inside there are coverage statics from each browser you have run. In index.html file you can see the summary or specific data by clicking on the links.

Jasmine Spec Runner coverage with [blanket.js](https://github.com/alex-seville/blanket):
For Firefox it's enough if you open SpecRunner.html in the browser but to see coverage in Chrome you have to execute `python -m SimpleHTTPServer 8000` on terminal and put `localhost:8000/SpecRunner.html` in address bar.

### Sinon.JS

In sinonTest.js file there're some examples to understand how to use spies, stubs or mocks with sinon.js. For more information about this issue see  [sinon.js homepage](http://sinonjs.org/)
