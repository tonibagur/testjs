module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/sinonjs/sinon.js',
      //'bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      'app/js/**/*.js',
      //'test/unit/**/*.js',
      'test/unit/sinonTest.js'
    ],

    reporters: ['progress'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/js/**/*.js': []
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
	    'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
