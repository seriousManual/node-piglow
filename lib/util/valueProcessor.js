var MAX_VALUE = 255;
var MIN_VALUE = 0;

/**
 * sanitizes brightness values and does a gamma correction mapping
 * @param value
 * @return {*}
 */
function processValue(value) {
    if (isNaN(value)) return 0;

    value = Math.max(MIN_VALUE, Math.min(value, MAX_VALUE));

    //value is between 0 and 1, thus is interpreted as percentage
    if (value < 1) value = value * MAX_VALUE;

    value = parseInt(value, 10);

    return value;
}

processValue.MAX_VALUE = MAX_VALUE;
processValue.MIN_VALUE = MIN_VALUE;

module.exports = processValue;
