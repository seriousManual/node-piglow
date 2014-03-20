var repl = require('repl');

var PiGlowBackendMock = require('../lib/PiGlowBackendMock');
var piGlowInterface = require('../lib/interface');

var myMock = new PiGlowBackendMock();
var myInterface = piGlowInterface(myMock);

myMock.on('initialize', function() {
    repl.start("> ").context.i = myInterface;
});
