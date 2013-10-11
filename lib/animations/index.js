var piGlowBackend = require('../PiGlowBackend');
var AnimationBackend = require('./animationBackend');
var animationInterface = require('./animationInterface');

module.exports = function(options, backend) {
    options = options || {};

    if(!backend) {
        backend = new piGlowBackend();
    }

    var ba = new AnimationBackend(options, backend);
    return animationInterface(ba);
};