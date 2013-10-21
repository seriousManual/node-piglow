/**
 * returns a function that has been initialized with the timestamp of the factory methods runtime
 * the returning function returns the time in milliseconds
 * @return {Function}
 */
function time() {
    var start = process.hrtime();

    return function() {
        var elapsed = process.hrtime(start);

        return elapsed[0] * 1e3 + elapsed[1] / 1e6;
    }
}

module.exports = time;