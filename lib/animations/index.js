var piGlowBackend = require('../PiGlowBackend');
var AnimationBackend = require('./AnimationBackend');
var animationInterface = require('./animationInterface');

module.exports = function(options, backend) {
    options = options || {};

    if(!backend) {
        backend = new piGlowBackend();
    }

    return animationInterface(new AnimationBackend(options, backend));
};
