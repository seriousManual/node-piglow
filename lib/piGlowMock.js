var Emitter = require('events').EventEmitter;
var util = require('util');

var seq = require('seq');

function PiGlowMock() {
    var that = this;

    Emitter.call(this);

    setTimeout(function() {
        that.emit('initialize');
    }, 10);
}

util.inherits(PiGlowMock, Emitter);

PiGlowMock.prototype.writeBytes = function(bytes, callback) {
    console.log('mock say: ', bytes);
};

module.exports = PiGlowMock;