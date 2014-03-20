var processValue = require('./lib/util/valueProcessor');
var piGlowInterface = require('./lib/interface');
var PiGlowBackend = require('./lib/PiGlowBackend');
var PiGlowBackendMock = require('./lib/PiGlowBackendMock');
var BackendMockPrettyPrint = require('./lib/PiGlowBackendMockPrettyPrint');

/**
 * convenience constructor function
*/
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

createPiGlow.Backend = PiGlowBackend;
createPiGlow.BackendMock = PiGlowBackendMock;
createPiGlow.BackendMockPrettyPrint = BackendMockPrettyPrint;
createPiGlow.piGlowInterface = piGlowInterface;
createPiGlow.processValue = processValue;

module.exports = createPiGlow;
