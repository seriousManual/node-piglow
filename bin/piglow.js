#!/usr/bin/env node

var argv = require('optimist').argv;
var piGlow = require('../');

createInterface(argv, function(error, interface) {
   if(error) {
       console.error('could not create interface: ', error.message);
       return;
   }

    Object.keys(argv).forEach(function(key) {
        interface[key] = argv[key];
    });
});

function createInterface(options, callback) {
    if(options.mocked === true) {
        var myMock = new piGlow.BackendMock();
        var myInterface = piGlow.piGlowInterface.create(myMock);

        setImmediate(function() {
            callback(null, myInterface);
        });
    } else {
        piGlow(callback);
    }
}