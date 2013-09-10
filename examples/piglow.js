var repl = require('repl');

var PiGlowMock = require('../lib/PiGlow');
var piGlowInterface = require('../lib/interface');

var myMock = new PiGlowMock();
var myInterface = piGlowInterface.create(myMock);

myMock.on('initialize', function() {
    repl.start("> ").context.i = myInterface;
});
