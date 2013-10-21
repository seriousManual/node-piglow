var processValue = require('./util/valueProcessor');

/**
 * the piglow interfaces that is used to map led identifier and led group identifier to hardware adresses
 * usage:
 *      var pi = interface();                        //creates a interface object without a backend. mapped values can be read from the 'values' property
 *      var pi = interface(backend);                 //injects a backend, can be used for unit testing or mocked execution in non raspi environment
 *      var pi = interface({'ring_0': 100});         //creates a piglow interface without a backend, preinitializes the LEDs belonging to ring 0 with the brightness of 100
 *      var pi = interface(['ring_0']);              //creates a piglow interface without a backend, preinitializes the LEDs belonging to ring 0 with the maximum brightness
 *      var pi = interface(backend, ['ring_0']);     //creates a piglow interface with a backend, preinitializes the LEDs belonging to ring 0 with the maximum brightness
 *      var pi = interface(backend, {'ring_0':100}); //creates a piglow interface with a backend, preinitializes the LEDs belonging to ring 0 with the brightness of 100
 *
 * @param client
 * @param predefined
 * @return {Object}
 */
function create(client, predefined) {
    var _client, _predefined;

    if(client) {
        if(client.writeBytes) {
            _predefined = predefined || {};
            _client = client;
        } else {
            _client = null;
            _predefined = client;
        }
    } else {
        _predefined = {};
        _client = null;
    }

    function random(prob) {
        prob = prob || (0.4 + Math.random() * 0.2);

        piGlow.values = piGlow.values.map(function() {
            if(Math.random() > prob) {
                var brightness = processValue.MAX_VALUE / 2 + (processValue.MAX_VALUE / 2 * Math.random());

                return processValue(brightness);
            } else {
                return 0;
            }
        });

        piGlow.update();
    }

    function _writePredefinds(piGlow, predefined) {
        if(Array.isArray(predefined)) {
            predefined.forEach(function(key) {
                piGlow[key];
            });
        } else {
            Object.keys(predefined).forEach(function(key) {
                piGlow[key] = predefined[key];
            });
        }
    }

    var piGlow = {
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        transactionLevel: 0,

        update: function() {
            if(this.transactionLevel === 0 && _client) {
                _client.writeBytes(this.values, function() {})
            }
        },

        startTransaction: function() {
            this.transactionLevel++;
        },

        commitTransaction: function() {
            this.transactionLevel--;
            this.update();
        }
    };

    Object.defineProperties(piGlow, {
        //adressing single LEDs
        "l_0_0": {
            set: function (v) { this.values[0] = processValue(v); this.update(); },
            get: function() { this.l_0_0 = processValue.MAX_VALUE; }
        },
        "l_0_1": {
            set: function (v) { this.values[1] = processValue(v); this.update(); },
            get: function() { this.l_0_1 = processValue.MAX_VALUE; }
        },
        "l_0_2": {
            set: function (v) { this.values[2] = processValue(v); this.update(); },
            get: function() { this.l_0_2 = processValue.MAX_VALUE; }
        },
        "l_0_3": {
            set: function (v) { this.values[3] = processValue(v); this.update(); },
            get: function() { this.l_0_3 = processValue.MAX_VALUE; }
        },
        "l_0_4": {
            set: function (v) { this.values[14] = processValue(v); this.update(); },
            get: function() { this.l_0_4 = processValue.MAX_VALUE; }
        },
        "l_0_5": {
            set: function (v) { this.values[12] = processValue(v); this.update(); },
            get: function() { this.l_0_5 = processValue.MAX_VALUE; }
        },
        "l_1_0": {
            set: function (v) { this.values[6] = processValue(v); this.update(); },
            get: function() { this.l_1_0 = processValue.MAX_VALUE; }
        },
        "l_1_1": {
            set: function (v) { this.values[7] = processValue(v); this.update(); },
            get: function() { this.l_1_1 = processValue.MAX_VALUE; }
        },
        "l_1_2": {
            set: function (v) { this.values[8] = processValue(v); this.update(); },
            get: function() { this.l_1_2 = processValue.MAX_VALUE; }
        },
        "l_1_3": {
            set: function (v) { this.values[5] = processValue(v); this.update(); },
            get: function() { this.l_1_3 = processValue.MAX_VALUE; }
        },
        "l_1_4": {
            set: function (v) { this.values[4] = processValue(v); this.update(); },
            get: function() { this.l_1_4 = processValue.MAX_VALUE; }
        },
        "l_1_5": {
            set: function (v) { this.values[9] = processValue(v); this.update(); },
            get: function() { this.l_1_5 = processValue.MAX_VALUE; }
        },
        "l_2_0": {
            set: function (v) { this.values[17] = processValue(v); this.update(); },
            get: function() { this.l_2_0 = processValue.MAX_VALUE; }
        },
        "l_2_1": {
            set: function (v) { this.values[16] = processValue(v); this.update(); },
            get: function() { this.l_2_1 = processValue.MAX_VALUE; }
        },
        "l_2_2": {
            set: function (v) { this.values[15] = processValue(v); this.update(); },
            get: function() { this.l_2_2 = processValue.MAX_VALUE; }
        },
        "l_2_3": {
            set: function (v) { this.values[13] = processValue(v); this.update(); },
            get: function() { this.l_2_3 = processValue.MAX_VALUE; }
        },
        "l_2_4": {
            set: function (v) { this.values[11] = processValue(v); this.update(); },
            get: function() { this.l_2_4 = processValue.MAX_VALUE; }
        },
        "l_2_5": {
            set: function (v) { this.values[10] = processValue(v); this.update(); },
            get: function() { this.l_2_5 = processValue.MAX_VALUE; }
        },

        //adressing complete legs of the piglow
        "leg_0": {
            set: function (v) {
                this.startTransaction();
                this.l_0_0 = v;
                this.l_0_1 = v;
                this.l_0_2 = v;
                this.l_0_3 = v;
                this.l_0_4 = v;
                this.l_0_5 = v;
                this.commitTransaction();
            },
            get: function() { this.leg_0 = processValue.MAX_VALUE; }
        },
        "leg_1": {
            set: function (v) {
                this.startTransaction();
                this.l_1_0 = v;
                this.l_1_1 = v;
                this.l_1_2 = v;
                this.l_1_3 = v;
                this.l_1_4 = v;
                this.l_1_5 = v;
                this.commitTransaction();
            },
            get: function() { this.leg_1 = processValue.MAX_VALUE; }
        },
        "leg_2": {
            set: function (v) {
                this.startTransaction();
                this.l_2_0 = v;
                this.l_2_1 = v;
                this.l_2_2 = v;
                this.l_2_3 = v;
                this.l_2_4 = v;
                this.l_2_5 = v;
                this.commitTransaction();
            },
            get: function() { this.leg_2 = processValue.MAX_VALUE; }
        },

        //the first LED of each leg (red)
        "ring_0": {
            set: function (v) {
                this.startTransaction();
                this.l_0_0 = v;
                this.l_1_0 = v;
                this.l_2_0 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_0 = processValue.MAX_VALUE; }
        },
        "red": {
            set: function (v) { this.ring_0 = v; },
            get: function() { this.ring_0; }
        },

        //the second LED of each leg (orange)
        "ring_1": {
            set: function (v) {
                this.startTransaction();
                this.l_0_1 = v;
                this.l_1_1 = v;
                this.l_2_1 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_1 = processValue.MAX_VALUE; }
        },
        "orange": {
            set: function (v) { this.ring_1 = v; },
            get: function() { this.ring_1; }
        },

        //the third LED of each leg (yellow)
        "ring_2": {
            set: function (v) {
                this.startTransaction();
                this.l_0_2 = v;
                this.l_1_2 = v;
                this.l_2_2 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_2 = processValue.MAX_VALUE; }
        },
        "yellow": {
            set: function (v) { this.ring_2 = v; },
            get: function() { this.ring_2; }
        },

        //the fourth LED of each leg (green)
        "ring_3": {
            set: function (v) {
                this.startTransaction();
                this.l_0_3 = v;
                this.l_1_3 = v;
                this.l_2_3 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_3 = processValue.MAX_VALUE; }
        },
        "green": {
            set: function (v) { this.ring_3 = v; },
            get: function() { this.ring_3; }
        },

        //the fifth LED of each leg (blue)
        "ring_4": {
            set: function (v) {
                this.startTransaction();
                this.l_0_4 = v;
                this.l_1_4 = v;
                this.l_2_4 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_4 = processValue.MAX_VALUE; }
        },
        "blue": {
            set: function (v) { this.ring_4 = v; },
            get: function() { this.ring_4; }
        },

        //the sixth LED of each leg (white)
        "ring_5": {
            set: function (v) {
                this.startTransaction();
                this.l_0_5 = v;
                this.l_1_5 = v;
                this.l_2_5 = v;
                this.commitTransaction();
            },
            get: function() { this.ring_5 = processValue.MAX_VALUE; }
        },
        "white": {
            set: function (v) { this.ring_5 = v; },
            get: function() { this.ring_5; }
        },

        //adress all LEDs
        "all": {
            set: function(v) {
                this.startTransaction();
                this.leg_0 = v;
                this.leg_1 = v;
                this.leg_2 = v;
                this.commitTransaction();
            },
            get: function() { this.all = processValue.MAX_VALUE; }
        },

        //set all LEDs to off
        "reset": {
            get: function() {
                piGlow.all = 0;
            }
        },

        //random adressing
        "random": {
            get: random,
            set: random
        }
    });

    _writePredefinds(piGlow, _predefined);

    return piGlow;
}

//backwards compatible
create.create = create;

module.exports = create;
