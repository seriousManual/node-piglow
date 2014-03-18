var Emitter = require('events').EventEmitter;
var util = require('util');

/**
 * this is a mocking class that has the same interface as the piglow backend
 * it outputs the values that should be written to the console
 * @constructor
 */
function PiGlowMock() {
    Emitter.call(this);

    var that = this;

    setTimeout(function() {
        that.emit('initialize');
    }, 15);
}

util.inherits(PiGlowMock, Emitter);

PiGlowMock.prototype.update = function(bytes, callback) {
    console.log(JSON.stringify(bytes));
};

module.exports = PiGlowMock;