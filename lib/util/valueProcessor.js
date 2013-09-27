var gammaCorrection = require('./gammaCorrection');

var MAX_VALUE = 255;
var MIN_VALUE = 0;

function processValue(value) {
    if(isNaN(value)) {
        return 0;
    }

    if(value < 1) {
        //value = parseInt(value * MAX_VALUE, 10);
    }

    value = Math.max(MIN_VALUE, Math.min(value, MAX_VALUE));
    value = gammaCorrection(value);

    return value;
}

processValue.MAX_VALUE = MAX_VALUE;
processValue.MIN_VALUE = MIN_VALUE;

module.exports = processValue;
