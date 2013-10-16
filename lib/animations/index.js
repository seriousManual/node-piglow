var PiGlowBackend = require('../PiGlowBackend');
var AnimationBackend = require('./AnimationBackend');
var animationInterface = require('./animationInterface');
var jane = require('./jane');

module.exports = function(options, backend) {
    options = options || {};

    if(!backend) {
        backend = new PiGlowBackend();
    }

    return animationInterface(new AnimationBackend(options, backend));
};

module.exports.jane = jane;