var PiGlowBackendMock = require('../lib/PiGlowBackendMock');
var piGlowInterface = require('../lib/interface');

var myMock = new PiGlowBackendMock();
var piGlow = piGlowInterface.create(myMock);

myMock.on('initialize', function() {
    goCrazy(piGlow);
});

var prob = 1;
var delta = 0.1;

function goCrazy(piGlow) {
    piGlow.random = prob;

    prob += delta;

    if(prob > 1 || prob < 0) {
        delta *= -1;
    }

    setTimeout(goCrazy.bind(null, piGlow), 100);
}