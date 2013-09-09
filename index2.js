var seq = require('seq');

var PIGLOW_ADDRESS = 0x54;

var CMD_ENABLE_OUTPUT = 0x00;
var CMD_ENABLE_LEDS = 0x13;
var CMD_SET_PWM_VALUES = 0x01;
var CMD_UPDATE = 0x16;

var piGlow = new I2c(0x54, {device: '/dev/i2c-1'});
var values = [0x01,0x02,0x04,0x08,0x10,0x18,0x20,0x30,0x40,0x50,0x60,0x70,0x80,0x90,0xA0,0xC0,0xE0,0xFF];

initialize(function(error) {
    if(error) return console.log('oh...', error);

    juggle();
});

function juggle() {
    values.unshift(values.pop());

    piGlow.writeBytes(CMD_SET_PWM_VALUES, values, function() {
        piGlow.writeBytes(CMD_UPDATE, [0xFF], function() {
            setTimeout(juggle, 200);
        });
    });
}

function initialize(callback) {
    seq()
            .seq(function() {
                piGlow.writeBytes(CMD_ENABLE_OUTPUT, 0x01, this);
            })
            .seq(function() {
                piGlow.writeBytes(CMD_ENABLE_OUTPUT, [0xFF, 0xFF, 0xFF], this);
            })
            .seq(function() {
                callback(null);
            })
            .catch(function(error) {
                callback(error);
            });
}
