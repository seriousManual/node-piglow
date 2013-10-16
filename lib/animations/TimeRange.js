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

TimeRange.interprete = function timeInterpreter(entity) {
    if(!isNaN(entity)) {
        entity = parseInt(entity, 10);

        return new TimeRange(entity, 'times');
    }

    var matches = entity.match(/^([0-9.]+)(ms|s|min|times|time)$/);

    if(matches) {
        var unit = matches[2];
        var times = parseFloat(matches[1]);

        if(unit === 's') {
            times *= 1000;
            unit = 'ms';
        }

        if(unit === 'min') {
            times = times * 60 * 1000;
            unit = 'ms';
        }

        return new TimeRange(times, unit);
    }

    throw new Error('wrong Timeformat: ' + entity);
};

module.exports = TimeRange;