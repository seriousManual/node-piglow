function InvokeContext(transition, interval, timeRange, initState) {
    this._transition = transition;
    this._ticks = 0;
    this._ticksLeft = 0;
    this._initState = initState;

    this._initialize(interval, timeRange);
}

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

InvokeContext.prototype.initState = function() {
    return this._initState;
};

InvokeContext.prototype.percentage = function() {
    return 1 - (this._ticksLeft / this._ticks);
};

InvokeContext.prototype.transition = function() {
    return this._transition;
};

InvokeContext.prototype.tickOff = function() {
    this._ticksLeft--;
};

module.exports = InvokeContext;