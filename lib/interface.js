var processValue = require('./util/valueProcessor');

function create(client) {
    var piGlow = {
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        transactionLevel: 0,

        update: function() {
            if(this.transactionLevel === 0 && client) {
                client.writeBytes(this.values, function() {})
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

    function reset() {
        piGlow.all = 0;
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

    Object.defineProperties(piGlow, {
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
