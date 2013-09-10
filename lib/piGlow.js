var Emitter = require('events').EventEmitter;
var util = require('util');

var seq = require('seq');
var I2c = require('i2c');

var PIGLOW_ADDRESS = 0x54;
var CMD_ENABLE_OUTPUT = 0x00;
var CMD_ENABLE_LEDS = 0x13;
var CMD_SET_PWM_VALUES = 0x01;
var CMD_UPDATE = 0x16;

function PiGlow() {
    var that = this;
    this._wire = null;

    Emitter.call(this);

    this._initialize(function() {
        that.emit('initialize');
    });
}

util.inherits(PiGlow, Emitter);

PiGlow.prototype._initialize = function(callback) {
    var that = this;
    this._wire = new I2c(PIGLOW_ADDRESS, {device: '/dev/i2c-1'});

    seq()
        .seq(function() {
            that._wire.writeBytes(CMD_ENABLE_OUTPUT, 0x01, this);
        })
        .seq(function() {
            that._wire.writeBytes(CMD_ENABLE_LEDS, [0xFF, 0xFF, 0xFF], this);
        })
        .seq(function() {
            callback(null);
        })
        .catch(callback);
};

PiGlow.prototype.writeBytes = function(bytes, callback) {
    var that = this;

    that._wire.writeBytes(CMD_SET_PWM_VALUES, bytes, function(error) {
        if(error) return callback(error);

        that._wire.writeBytes(CMD_UPDATE, [0xFF], function(error) {
            if(error) return callback(error);

            callback(null);
        });
    });
};

module.exports = PiGlow;