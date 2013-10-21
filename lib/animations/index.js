var PiGlowBackend = require('../PiGlowBackend');
var AnimationBackend = require('./AnimationBackend');
var animationInterface = require('./animationInterface');
var jane = require('./jane');

/**
 * factory method for a animation
 * @param options {Object} values: interval (refresh interval in ms, default: 100, debug: activate debugging, default: false)
 * @param backend the place to inject a mocking backend, default is a standard piglow hardware backend
 * @return animationInterface
 */
module.exports = function(options, backend) {
    options = options || {};

    if(!backend) {
        backend = new PiGlowBackend();
    }

    return animationInterface(new AnimationBackend(options, backend));
};

module.exports.jane = jane;