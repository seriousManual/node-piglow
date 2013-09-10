var MAX_VALUE = 255;
var MIN_VALUE = 0;

function clamp(value) {
    return Math.max(MIN_VALUE, Math.min(value, MAX_VALUE));
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

        "l_0_0": { set: function (v) { this.values[0] = clamp(v); this.update(); } },
        "l_0_1": { set: function (v) { this.values[1] = clamp(v); this.update(); } },
        "l_0_2": { set: function (v) { this.values[2] = clamp(v); this.update(); } },
        "l_0_3": { set: function (v) { this.values[3] = clamp(v); this.update(); } },
        "l_0_4": { set: function (v) { this.values[14] = clamp(v); this.update(); } },
        "l_0_5": { set: function (v) { this.values[12] = clamp(v); this.update(); } },
        "l_1_0": { set: function (v) { this.values[6] = clamp(v); this.update(); } },
        "l_1_1": { set: function (v) { this.values[7] = clamp(v); this.update(); } },
        "l_1_2": { set: function (v) { this.values[8] = clamp(v); this.update(); } },
        "l_1_3": { set: function (v) { this.values[5] = clamp(v); this.update(); } },
        "l_1_4": { set: function (v) { this.values[4] = clamp(v); this.update(); } },
        "l_1_5": { set: function (v) { this.values[9] = clamp(v); this.update(); } },
        "l_2_0": { set: function (v) { this.values[17] = clamp(v); this.update(); } },
        "l_2_1": { set: function (v) { this.values[16] = clamp(v); this.update(); } },
        "l_2_2": { set: function (v) { this.values[15] = clamp(v); this.update(); } },
        "l_2_3": { set: function (v) { this.values[13] = clamp(v); this.update(); } },
        "l_2_4": { set: function (v) { this.values[11] = clamp(v); this.update(); } },
        "l_2_5": { set: function (v) { this.values[10] = clamp(v); this.update(); } },

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
                this.leg_0 = clamp(v);
                this.leg_1 = clamp(v);
                this.leg_2 = clamp(v);
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
