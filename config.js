
define({

    capabilities: {
        'browserstack.selenium_version': '2.50.0'
    },

    environments: [
        { browserName: 'chrome' }
        //{ browserName: 'phantomjs' }
    ],

    // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
    maxConcurrency: 2,

    // Name of the tunnel class to use for WebDriver tests.
    tunnel: 'NullTunnel',

    // Functional test suite(s) to execute against each browser once non-functional tests are completed
    functionalSuites: [
        'suites/login/user-submits-credentials.js'
    ],

    defaultTimeout: 60000,

    // A regular expression matching URLs to files that should not be included in code coverage analysis
    excludeInstrumentation: true
});
