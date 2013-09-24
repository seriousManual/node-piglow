#!/usr/bin/env node

var argv = require('optimist').argv;
var piGlow = require('../');

createInterface(argv, function(error, piGlowInterface) {
   if(error) {
       console.error('could not create interface: ', error.message);
       return;
   }

   Object.keys(argv).forEach(function(key) {
       if(Object.hasOwnProperty.call(piGlowInterface, key)) {
           piGlowInterface[key] = argv[key];
       }
   });
});

function createInterface(options, callback) {
    if(options.mocked === true) {
        delete options.mocked;

        var myMock = new piGlow.BackendMock();
        var myInterface = piGlow.piGlowInterface.create(myMock);

        setImmediate(function() {
            callback(null, myInterface);
        });
    } else {
        piGlow(callback);
    }
}