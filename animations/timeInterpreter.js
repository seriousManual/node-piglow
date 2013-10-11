var TimeRange = require('./TimeRange');

function timeInterpreter(entity) {
    if(!isNaN(entity)) {
        entity = parseInt(entity, 10);

        return new TimeRange(entity, 'times');
    }

    var matches = entity.match(/([0-9]+)(ms|s|times)/);

    if(matches) {
        var unit = matches[2];
        var times = parseInt(matches[1], 10);

        if(unit === 's') {
            times *= 1000;
            unit = 'ms';
        }

        return new TimeRange(times, unit);
    }

    throw new Error('wrong Timeformat: ' + entity);
}

module.exports = timeInterpreter;