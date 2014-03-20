var repl = require('repl');

//TODO: reset piglow on repl.end

var PiGlowBackend = require('../lib/PiGlowBackend');
var piGlowInterface = require('../lib/interface');

var myPiGlow = new PiGlowBackend();
var myInterface = piGlowInterface(myPiGlow);

myPiGlow.on('initialize', function() {
    repl.start("> ").context.i = myInterface;
});
