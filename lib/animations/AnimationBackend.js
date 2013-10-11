var util = require('util');

function AnimationBackend(options, backend) {
    this._interval = options.interval || 100;

    this._backend = backend || null;
    this._state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._dirty = false;
}

AnimationBackend.prototype._update = function() {
    if(this._backend && this._dirty) {
        this._dirty = false;

        this._backend.writeBytes(this._state, function() {
            //do something?
            console.log('written to backend');
        });
    }
};

AnimationBackend.prototype.start = function(log, repeat, callback) {
    console.log(util.inspect(log, null, 1000));

    console.log('starting');
};

AnimationBackend.prototype.stop = function() {
    console.log('stopping');
};

module.exports = AnimationBackend;