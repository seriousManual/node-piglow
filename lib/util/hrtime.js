function time() {
    var start = process.hrtime();

    return function() {
        var elapsed = process.hrtime(start);

        return elapsed[0] * 1e3 + elapsed[1] / 1e6;
    }
}

module.exports = time;