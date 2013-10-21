var util = require('util');

/**
 * base class for transitions
 * accepts some configuration parameters
 * @constructor
 */
function Transition() {
    this._to = null;
    this._after = null;
    this._in = null;
}

/**
 * duration of the transition
 * @param inTime
 * @return TimeRange
 */
Transition.prototype.in = function(inTime) {
    if(inTime !== undefined) {
        this._in = inTime;
    }

    return this._in;
};

/**
 * the led configuration that should be transitioned to
 * @param to
 * @return piGLowInterface
 */
Transition.prototype.to = function(to) {
    if(to !== undefined) {
        this._to = to;
    }

    return this._to;
};

/**
 * the time span that should be waited until the transition starts
 * @param after
 * @return {*}
 */
Transition.prototype.after = function(after) {
    if(after !== undefined) {
        this._after = after;
    }

    return this._after;
};

/**
 * fade transition
 * @constructor
 */
function Fade() {
    Transition.call(this);
}
util.inherits(Fade, Transition);

/**
 * set transition
 * @constructor
 */
function Set() {
    Transition.call(this);
}
util.inherits(Set, Transition);


module.exports = {
    Set: Set,
    Fade: Fade
};