var repl = require('repl');

var PiGlowBackend = require('../lib/PiGlowBackend');
var piGlowInterface = require('../lib/interface');

var myPiGlow = new PiGlowBackend();
var myInterface = piGlowInterface.create(myPiGlow);

myPiGlow.on('initialize', function() {
    repl.start("> ").context.i = myInterface;
});
