var PiGlowBackend = require('../lib/PiGlowBackend');
var piGlowInterface = require('../lib/interface');

var myBackend = new PiGlowBackend();
var piGlow = piGlowInterface.create(myBackend);

myBackend.on('initialize', function() {
    goCrazy(piGlow);
});

var prob = 0.5;
var delta = 0.;

function goCrazy(piGlow) {
    piGlow.random = prob;

    prob += delta;

    if(prob > 0.7 || prob < 0.2) {
        delta *= -1;
    }

    setTimeout(goCrazy.bind(null, piGlow), 100);
}
