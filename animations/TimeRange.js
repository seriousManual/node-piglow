function TimeRange(times, unit) {
    this._unit = unit || 'times';
    this._num = times || null;
}

TimeRange.prototype.unit = function() {
    return this._unit;
};

TimeRange.prototype.times = function() {
    return this._num;
};

module.exports = TimeRange;