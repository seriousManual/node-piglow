var MAX_VALUE = 255;
var MIN_VALUE = 0;

//Gamma-Correction borrowed https://github.com/benleb/PyGlow and jon@pimoroni, thanks!
var GAMMA_TABLE = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,
    3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,10,10,10,10,
    10,11,11,11,11,12,12,12,13,13,13,13,14,14,14,15,15,15,16,16,16,17,17,18,18,18,19,19,20,20,20,21,21,22,22,23,23,24,24,
    25,26,26,27,27,28,29,29,30,31,31,32,33,33,34,35,36,36,37,38,39,40,41,42,42,43,44,45,46,47,48,50,51,52,53,54,55,57,58,
    59,60,62,63,64,66,67,69,70,72,74,75,77,79,80,82,84,86,88,90,91,94,96,98,100,102,104,107,109,111,114,116,119,122,124,127,
    130,133,136,139,142,145,148,151,155,158,161,165,169,172,176,180,184,188,192,196,201,205,210,214,219,224,229,234,239,244,250,255];

function processValue(value) {
    value = Math.max(MIN_VALUE, Math.min(value, MAX_VALUE));
    value = GAMMA_TABLE[value];
console.log( value );
    return value;
}

function create(client) {
    var piGlow = {
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        transaction: false,

        update: function() {
            if(!this.t) {
                client.writeBytes(this.values, function() {})
            }
        }
    };

    function reset() {
        piGlow.all = 0;
    }

    function random(prob) {
        prob = prob || (0.4 + Math.random() * 0.2);

        piGlow.values = piGlow.values.map(function() {
            if(Math.random() > prob) {
                return parseInt(MAX_VALUE / 2 + (MAX_VALUE / 2 * Math.random()), 10);
            } else {
                return 0;
            }
        });

        piGlow.update();
    }

    Object.defineProperties(piGlow, {
        "t": {
            set: function(v) {
                if(v) {
                    this.transaction = true;
                } else {
                    this.transaction = false;
                    this.update();
                }
            },
            get: function() {
                return this.transaction;
            }
        },

        "l_0_0": {
            set: function (v) { this.values[0] = processValue(v); this.update(); },
            get: function() { this.l_0_0 = 255; }
        },
        "l_0_1": {
            set: function (v) { this.values[1] = processValue(v); this.update(); },
            get: function() { this.l_0_1 = 255; }
        },
        "l_0_2": {
            set: function (v) { this.values[2] = processValue(v); this.update(); },
            get: function() { this.l_0_2 = 255; }
        },
        "l_0_3": {
            set: function (v) { this.values[3] = processValue(v); this.update(); },
            get: function() { this.l_0_3 = 255; }
        },
        "l_0_4": {
            set: function (v) { this.values[14] = processValue(v); this.update(); },
            get: function() { this.l_0_4 = 255; }
        },
        "l_0_5": {
            set: function (v) { this.values[12] = processValue(v); this.update(); },
            get: function() { this.l_0_5 = 255; }
        },
        "l_1_0": {
            set: function (v) { this.values[6] = processValue(v); this.update(); },
            get: function() { this.l_1_0 = 255; }
        },
        "l_1_1": {
            set: function (v) { this.values[7] = processValue(v); this.update(); },
            get: function() { this.l_1_1 = 255; }
        },
        "l_1_2": {
            set: function (v) { this.values[8] = processValue(v); this.update(); },
            get: function() { this.l_1_2 = 255; }
        },
        "l_1_3": {
            set: function (v) { this.values[5] = processValue(v); this.update(); },
            get: function() { this.l_1_3 = 255; }
        },
        "l_1_4": {
            set: function (v) { this.values[4] = processValue(v); this.update(); },
            get: function() { this.l_1_4 = 255; }
        },
        "l_1_5": {
            set: function (v) { this.values[9] = processValue(v); this.update(); },
            get: function() { this.l_1_5 = 255; }
        },
        "l_2_0": {
            set: function (v) { this.values[17] = processValue(v); this.update(); },
            get: function() { this.l_2_0 = 255; }
        },
        "l_2_1": {
            set: function (v) { this.values[16] = processValue(v); this.update(); },
            get: function() { this.l_2_1 = 255; }
        },
        "l_2_2": {
            set: function (v) { this.values[15] = processValue(v); this.update(); },
            get: function() { this.l_2_2 = 255; }
        },
        "l_2_3": {
            set: function (v) { this.values[13] = processValue(v); this.update(); },
            get: function() { this.l_2_3 = 255; }
        },
        "l_2_4": {
            set: function (v) { this.values[11] = processValue(v); this.update(); },
            get: function() { this.l_2_4 = 255; }
        },
        "l_2_5": {
            set: function (v) { this.values[10] = processValue(v); this.update(); },
            get: function() { this.l_2_5 = 255; }
        },

        "leg_0": {
            set: function (v) {
                this.t = 1;
                this.l_0_0 = v;
                this.l_0_1 = v;
                this.l_0_2 = v;
                this.l_0_3 = v;
                this.l_0_4 = v;
                this.l_0_5 = v;
                this.t = 0;
            },
            get: function() { this.leg_0 = 255; }
        },
        "leg_1": {
            set: function (v) {
                this.t = 1;
                this.l_1_0 = v;
                this.l_1_1 = v;
                this.l_1_2 = v;
                this.l_1_3 = v;
                this.l_1_4 = v;
                this.l_1_5 = v;
                this.t = 0;
            },
            get: function() { this.leg_1 = 255; }
        },
        "leg_2": {
            set: function (v) {
                this.t = 1;
                this.l_2_0 = v;
                this.l_2_1 = v;
                this.l_2_2 = v;
                this.l_2_3 = v;
                this.l_2_4 = v;
                this.l_2_5 = v;
                this.t = 0;
            },
            get: function() { this.leg_2 = 255; }
        },

        "ring_0": {
            set: function (v) {
                this.t = 1;
                this.l_0_0 = v;
                this.l_1_0 = v;
                this.l_2_0 = v;
                this.t = 0;
            },
            get: function() { this.ring_0 = 255; }
        },
        "ring_1": {
            set: function (v) {
                this.t = 1;
                this.l_0_1 = v;
                this.l_1_1 = v;
                this.l_2_1 = v;
                this.t = 0;
            },
            get: function() { this.ring_1 = 255; }
        },
        "ring_2": {
            set: function (v) {
                this.t = 1;
                this.l_0_2 = v;
                this.l_1_2 = v;
                this.l_2_2 = v;
                this.t = 0;
            },
            get: function() { this.ring_2 = 255; }
        },
        "ring_3": {
            set: function (v) {
                this.t = 1;
                this.l_0_3 = v;
                this.l_1_3 = v;
                this.l_2_3 = v;
                this.t = 0;
            },
            get: function() { this.ring_3 = 255; }
        },
        "ring_4": {
            set: function (v) {
                this.t = 1;
                this.l_0_4 = v;
                this.l_1_4 = v;
                this.l_2_4 = v;
                this.t = 0;
            },
            get: function() { this.ring_4 = 255; }
        },
        "ring_5": {
            set: function (v) {
                this.t = 1;
                this.l_0_5 = v;
                this.l_1_5 = v;
                this.l_2_5 = v;
                this.t = 0;
            },
            get: function() { this.ring_5 = 255; }
        },
        "all": {
            set: function(v) {
                this.leg_0 = v;
                this.leg_1 = v;
                this.leg_2 = v;
            },
            get: function() { this.all = 255; }
        },

        "reset": {
            get: reset
        },

        "random": {
            get: random,
            set: random
        }
    });



    return piGlow;
}

module.exports.create = create;
