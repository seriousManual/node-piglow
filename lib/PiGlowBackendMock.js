var Emitter = require('events').EventEmitter;
var util = require('util');

var seq = require('seq');

/**
 * this is a mocking class that has the same interface as the piglow backend
 * it outputs the values that should be written to the console
 * @constructor
 */
function PiGlowMock() {
    var that = this;

    Emitter.call(this);

    setTimeout(function() {
        that.emit('initialize');
    }, 10);
}

util.inherits(PiGlowMock, Emitter);

PiGlowMock.prototype.writeBytes = function(bytes, callback) {
    console.log('mock says: ', bytes);
};

module.exports = PiGlowMock;