var piGlowBackend = require('../lib/PiGlowBackend');
var AnimationBackend = require('./animationBackend');
var animationInterface = require('./animationInterface');

module.exports = function(backend) {
    if(!backend) {
        backend = piGlowBackend;
    }

    var ba = new AnimationBackend(backend);
    return animationInterface(ba);
};