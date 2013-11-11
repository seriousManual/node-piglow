var ce = require('cloneextend');
var PTic = require('ptic');
var depugger = require('depugger');

var hrtime = require('../util/hrtime');
var InvokeContext = require('./InvokeContext');
var TimeRange = require('./TimeRange');

/**
 * backend that does the scheduling and updating of animations
 * @param options {Object} values: interval (refresh interval in ms, default: 100, debug: activate debugging, default: false)
 * @param backend the place to inject a mocking backend, default is a standard piglow hardware backend
 * @constructor
 */
function AnimationBackend(options, backend) {
    options = options || {};

    this._elapsedSinceStart = null;
    this._interval = options.interval || 100;
    this._running = false;

    this._state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._dirty = false;

    this._backend = backend || null;
    this._context = null;

    this._contextPointer = 0;
    this._invokeContext = null;
    this._loopCount = 0;
    this._finishedCallback = null;

    this._debug = depugger({debug: options.debug, name: 'animbackend'});

    this._ticker = new PTic(this._interval);
    this._ticker.on('tick', this._tick.bind(this));
}

/**
 * setter for the configured state of the animation
 * @param context
 */
AnimationBackend.prototype.context = function(context) {
    this._context = context;
};

/**
 * start the animation
 * accepts a callback that will be fired when animation has been finished
 * @param callback
 */
AnimationBackend.prototype.start = function(callback) {
    this._debug('starting');

    this._elapsedSinceStart = hrtime();
    this._loopCount = 0;

    if(this._running) return;

    this._finishedCallback = callback;

    this._discoverNext();
    this._running = true;
    this._ticker.start();
};

/**
 * stop the animation
 * @param noCallback parameter that specifies of the callback should be called (internal api), default: false
 */
AnimationBackend.prototype.stop = function(noCallback) {
    noCallback = !!noCallback;

    if(!this._running) return;

    this._debug('stopping');

    this._running = false;
    this._ticker.stop();

    if(this._finishedCallback && !noCallback) {
        this._finishedCallback();
    }
};

/**
 * checks if the repeat condition is met
 * @return {Boolean}
 * @private
 */
AnimationBackend.prototype._repeatCondition = function() {
    if(!this._context.repeat || !this._context.repeat.unit()) return true;

    if(this._context.repeat.unit() === TimeRange.TIMES) {
        if(this._context.repeat.times() === this._loopCount) {
            return false;
        }
    } else {
        if(this._elapsedSinceStart() > this._context.repeat.times()) {
            return false;
        }
    }

    return true;
};

/**
 * increments the pointer on the context log
 * @private
 */
AnimationBackend.prototype._incrementPointer = function() {
    this._contextPointer++;
    this._contextPointer = this._contextPointer % this._context.log.length;

    if(this._contextPointer === 0) {
        this._loop();
    }
};

/**
 * pulls out the next state object from the stack
 * @private
 */
AnimationBackend.prototype._discoverNext = function() {
    if(this._invokeContext) {
        return;
    }

    if(!this._repeatCondition()) {
        this.stop();
        return;
    }

    this._schedule(this._context.log[this._contextPointer]);
};

/**
 * schedules a transition
 * @param transition
 * @private
 */
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

/**
 * invokes a transition
 * @param transition
 * @param durationTime
 * @private
 */
AnimationBackend.prototype._invoke = function(transition, durationTime) {
    this._debug('invoke');

    this._invokeContext = new InvokeContext(
            transition,
            this._interval,
            durationTime,
            ce.clone(this._state)
        );
};

/**
 * gets called on the end of each loop
 * @private
 */
AnimationBackend.prototype._loop = function() {
    this._debug('loop', this._loopCount);

    this._loopCount++;
};

/**
 * the animation ticker
 * @private
 */
AnimationBackend.prototype._tick = function() {
    var that = this;

    if(!this._invokeContext) {
        return;
    }

    var perc = this._invokeContext.percentage();

    this._invokeContext.tickOff();

    if (perc === 0) {
        return;
    }

    if(perc > 1) {
        this._invokeContext = null;
        this._incrementPointer();
        this._discoverNext();
        return;
    }

    var transition = this._invokeContext.transition();
    var initState = this._invokeContext.initState();

    transition.to().values.forEach(function(value, index) {
        that._state[index] = parseInt(initState[index] * (1 - perc) + value * perc, 10);
    });

    this._dirty = true;

    this._update();
};

/**
 * writes the current state to the piglow backend (if changed)
 * @private
 */
AnimationBackend.prototype._update = function() {
    if(this._backend && this._dirty) {
        var that = this;
        this._dirty = false;

        that._debug('writing ', this._state);
        this._backend.writeBytes(this._state, function() {
            //do something?
        });
    }
};

module.exports = AnimationBackend;