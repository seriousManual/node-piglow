var ce = require('cloneextend');

var depugger = require('../util/debug');
var InvokeContext = require('./InvokeContext');
var TimeRange = require('./TimeRange');

function AnimationBackend(options, backend) {
    options = options || {};

    this._startTime = null;
    this._interval = options.interval || 100;
    this._running = false;

    this._state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._dirty = false;

    this._backend = backend || null;
    this._context = null;

    this._intervalHandle = null;
    this._contextPointer = 0;
    this._invokeContextCollection = new InvokeContext.InvokeContextCollection();
    this._loopCount = 0;
    this._finishedCallback = null;

    this._debug = depugger({debug: options.debug});
}

AnimationBackend.prototype.context = function(context) {
    this._context = context;
};

AnimationBackend.prototype.start = function(callback) {
    this._debug('starting');

    this._startTime = process.hrtime();
    this._loopCount = 0;

    if(this._running) return;

    this._finishedCallback = callback;

    this._discoverNext();
    this._running = true;
    this._intervalHandle = setInterval(this._tick.bind(this), this._interval);
};

AnimationBackend.prototype.stop = function(noCallback) {
    noCallback = !!noCallback;

    if(!this._running) return;

    this._debug('stopping');

    this._running = false;

    if(this._intervalHandle) {
        clearInterval(this._intervalHandle);
        this._intervalHandle = null;
    }

    if(this._finishedCallback && !noCallback) {
        this._finishedCallback();
    }
};

AnimationBackend.prototype._repeatCondition = function(repeat) {
    if(!this._context.repeat || !this._context.repeat.unit()) return true;

    if(this._context.repeat.unit() === TimeRange.TIMES) {
        if(this._context.repeat.times() === this._loopCount) {
            return false;
        }
    } else {
        var elapsed = process.hrtime(this._startTime);

        if(elapsed[0] * 1000 + elapsed[1] / 1e6 > this._context.repeat.times()) {
            return false;
        }
    }

    return true;
};

AnimationBackend.prototype._incrementPointer = function() {
    this._contextPointer++;
    this._contextPointer = this._contextPointer % this._context.log.length;

    if(this._contextPointer === 0) {
        this._loop();
    }
};

AnimationBackend.prototype._discoverNext = function() {
    if(this._invokeContextCollection.count() > 0) {
        return;
    }

    if(!this._repeatCondition()) {
        this.stop();
        return;
    }

    this._schedule(this._context.log[this._contextPointer]);
};

AnimationBackend.prototype._schedule = function(transition) {
    var timeOffset = transition.after();
    var durationTime = transition.in();
    var invocationCandidate = this._invoke.bind(this, transition, durationTime);

    if(timeOffset) {
        setTimeout(invocationCandidate, timeOffset.times());
    } else {
        setImmediate(invocationCandidate);
    }
};

AnimationBackend.prototype._invoke = function(transition, durationTime) {
//    this._debug('invoke', transition.to().values);

    this._invokeContextCollection.add(new InvokeContext.InvokeContext(
        transition,
        this._interval,
        durationTime,
        ce.clone(this._state)
    ));
};

AnimationBackend.prototype._loop = function() {
    this._debug('loop', this._loopCount);

    this._loopCount++;
};

AnimationBackend.prototype._tick = function() {
    var that = this;

    this._invokeContextCollection.collection().forEach(function(context) {
        var perc = context.percentage();

        context.tickOff();

        if (perc === 0) {
            return;
        }

        if(perc > 1) {
            that._invokeContextCollection.remove(context);
            that._incrementPointer();
            that._discoverNext();
            return;
        }

        var transition = context.transition();

        var initState = context.initState();
        transition.to().values.forEach(function(value, index) {
            that._state[index] = parseInt(initState[index] * (1 - perc) + value * perc, 10);
        });

        that._dirty = true;
    });

    this._update();
};

AnimationBackend.prototype._update = function() {
    if(this._backend && this._dirty) {
        var that = this;
        this._dirty = false;

        that._debug('writing to backend: ', this._state);
        this._backend.writeBytes(this._state, function() {
            //do something?
        });
    }
};

module.exports = AnimationBackend;