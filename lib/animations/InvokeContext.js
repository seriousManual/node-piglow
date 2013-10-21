/**
 * the current invocation context of a animation
 * calculates the ticks to run
 * @param transition
 * @param interval
 * @param timeRange
 * @param initState
 * @constructor
 */
function InvokeContext(transition, interval, timeRange, initState) {
    this._transition = transition;
    this._ticks = 0;
    this._ticksLeft = 0;
    this._initState = initState;

    this._initialize(interval, timeRange);
}

/**
 * initialization
 * @param interval refresh interval of the animation runner
 * @param timeRange
 * @private
 */
InvokeContext.prototype._initialize = function(interval, timeRange) {
    if(!timeRange) {
        this._ticks = 1;
        this._ticksLeft = 1;
        return;
    }

    var overallTicks = Math.ceil(timeRange.times() / interval);

    this._ticks = overallTicks;
    this._ticksLeft = overallTicks;
};

/**
 * initial piglow state when transition starts
 * @return {*}
 */
InvokeContext.prototype.initState = function() {
    return this._initState;
};

/**
 * percentage of transition fulfillment
 * @return {Number}
 */
InvokeContext.prototype.percentage = function() {
    return 1 - (this._ticksLeft / this._ticks);
};

/**
 * the transition object
 * @return {*}
 */
InvokeContext.prototype.transition = function() {
    return this._transition;
};

/**
 * counts down the performed ticks
 */
InvokeContext.prototype.tickOff = function() {
    this._ticksLeft--;
};

module.exports = InvokeContext;