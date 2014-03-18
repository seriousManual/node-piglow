var Emitter = require('events').EventEmitter;
var util = require('util');

var seq = require('seq');

var ledMapper = require('./util/ledToAddress');

var PIGLOW_ADDRESS = 0x54;      //the gpio adress
var CMD_ENABLE_OUTPUT = 0x00;   //command to enable all outputs
var CMD_ENABLE_LEDS = 0x13;     //enable the LEDs
var CMD_SET_PWM_VALUES = 0x01;  //command adress that sets the brightness values
var CMD_UPDATE = 0x16;          //command that causes the hardware board to update its LED values

/**
 * PiGlow Backend
 * @constructor
 */
function PiGlow() {
    var that = this;
    this._wire = null;

    Emitter.call(this);

    this._initialize(function (error) {
        if (error) {
            that.emit('error', error);
        } else {
            that.emit('initialize');
        }
    });
}

util.inherits(PiGlow, Emitter);

/**
 * initializes the piglow board
 * @param callback
 * @return {*}
 * @private
 */
PiGlow.prototype._initialize = function (callback) {
    //evil hack alert!!!!
    //as requires are done at runtime, no error will be thrown if i2c is not present
    var I2c = require('i2c');

    var that = this;
    this._wire = new I2c(PIGLOW_ADDRESS, {device: '/dev/i2c-1'});

    try {
        //explicitly setting the adress so we can catch the event in the try/catch block
        this._wire.setAddress(PIGLOW_ADDRESS);
    }
    catch (e) {
        process.nextTick(function () {
            callback(e);
        });

        return;
    }

    seq()
        .seq(function () {
            that._wire.writeBytes(CMD_ENABLE_OUTPUT, [0x01], this);
        })
        .seq(function () {
            that._wire.writeBytes(CMD_ENABLE_LEDS, [0xFF, 0xFF, 0xFF], this);
        })
        .seq(callback)
        .catch(callback);
};

/**
 * writes the complete array of brightness values to the hardware board
 * @param piGlowConfiguration array
 * @param callback
 */
PiGlow.prototype.update = function (piGlowConfiguration, callback) {
    var that = this;

    seq()
        .seq(function () {
            that._wire.writeBytes(CMD_SET_PWM_VALUES, ledMapper.mapAll(piGlowConfiguration), this);
        })
        .seq(function () {
            that._wire.writeBytes(CMD_UPDATE, [0xFF], this);
        })
        .seq(callback)
        .catch(callback);
};

module.exports = PiGlow;
