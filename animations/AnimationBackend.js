var util = require('util');

function AnimationBackend() {}

AnimationBackend.prototype.start = function() {
    console.log(util.inspect(arguments, null, 1000));

    console.log('starting');
};

AnimationBackend.prototype.stop = function() {
    console.log('stopping');
};

module.exports = AnimationBackend;