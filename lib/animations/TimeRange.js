var TIMES_CONSTANT = 'times';

function TimeRange(times, unit) {
    this._unit = unit || TIMES_CONSTANT;
    this._num = times || null;
}

TimeRange.prototype.unit = function() {
    return this._unit;
};

TimeRange.prototype.times = function() {
    return this._num;
};

TimeRange.TIMES = TIMES_CONSTANT;

module.exports = TimeRange;