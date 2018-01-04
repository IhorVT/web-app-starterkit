
// register babel to transpile before our test run
require('babel-register')();

// disable webpack features that Mocha doesn't understand, treat it as empty function
require.extensions['.css'] = function() {};

