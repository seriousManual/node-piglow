var processValue = require('./lib/util/valueProcessor');
var piGlowInterface = require('./lib/interface');
var PiGlowBackend = require('./lib/PiGlowBackend');
var PiGlowBackendMock = require('./lib/PiGlowBackendMock');

function createPiGlow(callback) {
    var myPiGlow = new PiGlowBackend();
    var myInterface = piGlowInterface(myPiGlow);

    myPiGlow
        .on('initialize', function() {
            callback(null, myInterface);
        })
        .on('error', function(error) {
            callback(error, null);
        });
}

createPiGlow.BackendMock = PiGlowBackendMock;
createPiGlow.Backend = PiGlowBackend;
createPiGlow.piGlowInterface = piGlowInterface;
createPiGlow.processValue = processValue;

module.exports = createPiGlow;