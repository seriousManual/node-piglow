#!/usr/bin/env node

var argv = require('optimist').argv;
var piGlow = require('../');

delete argv._;
delete argv['$0'];

createInterface(argv, function(error, piGlowInterface) {
   if(error) {
       console.error('could not create interface: ', error.message);
       process.exit(1);
   }

   piGlowInterface.startTransaction();
   Object.keys(argv).forEach(function(key) {
       var value = argv[key];

       if(Object.hasOwnProperty.call(piGlowInterface, key)) {
           if(value === true) {
               //shorthand versions
               piGlowInterface[key];
           } else {
               piGlowInterface[key] = value;
           }
       } else {
           console.error('Unknown parameter: ', key);
           process.exit(1);
       }
   });
   piGlowInterface.commitTransaction();
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