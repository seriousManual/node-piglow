/*
 Leg 1: 01, 02, 03, 04, 0F, 0D
 Leg 2: 07, 08, 09, 06, 05, 0A
 Leg 3: 12, 11, 10, 0E, 0C, 0B

  0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17
 [00, 01, 02, 03, 14, 13, 10, 11, 12, 22, 21, 20, 15, 25, 24, 05, 23, 04]
*/

function clamp(value) {
    return Math.max(0, Math.min(value, 255));
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
        "l_0_4": { set: function (v) { this.values[17] = clamp(v); this.update(); } },
        "l_0_5": { set: function (v) { this.values[15] = clamp(v); this.update(); } },
        "l_1_0": { set: function (v) { this.values[6] = clamp(v); this.update(); } },
        "l_1_1": { set: function (v) { this.values[7] = clamp(v); this.update(); } },
        "l_1_2": { set: function (v) { this.values[8] = clamp(v); this.update(); } },
        "l_1_3": { set: function (v) { this.values[5] = clamp(v); this.update(); } },
        "l_1_4": { set: function (v) { this.values[4] = clamp(v); this.update(); } },
        "l_1_5": { set: function (v) { this.values[12] = clamp(v); this.update(); } },
        "l_2_0": { set: function (v) { this.values[11] = clamp(v); this.update(); } },
        "l_2_1": { set: function (v) { this.values[10] = clamp(v); this.update(); } },
        "l_2_2": { set: function (v) { this.values[9] = clamp(v); this.update(); } },
        "l_2_3": { set: function (v) { this.values[16] = clamp(v); this.update(); } },
        "l_2_4": { set: function (v) { this.values[14] = clamp(v); this.update(); } },
        "l_2_5": { set: function (v) { this.values[13] = clamp(v); this.update(); } },

        "leg_0": { set: function (v) {
            this.t = 1;
            this.l_0_0 = v;
            this.l_0_1 = v;
            this.l_0_2 = v;
            this.l_0_3 = v;
            this.l_0_4 = v;
            this.l_0_5 = v;
            this.t = 0;
        } },
        "leg_1": { set: function (v) {
            this.t = 1;
            this.l_1_0 = v;
            this.l_1_1 = v;
            this.l_1_2 = v;
            this.l_1_3 = v;
            this.l_1_4 = v;
            this.l_1_5 = v;
            this.t = 0;
        } },
        "leg_2": { set: function (v) {
            this.t = 1;
            this.l_2_0 = v;
            this.l_2_1 = v;
            this.l_2_2 = v;
            this.l_2_3 = v;
            this.l_2_4 = v;
            this.l_2_5 = v;
            this.t = 0;
        } },

        "ring_0": { set: function (v) {
            this.t = 1;
            this.l_0_0 = v;
            this.l_1_0 = v;
            this.l_2_0 = v;
            this.t = 0;
        } },
        "ring_1": { set: function (v) {
            this.t = 1;
            this.l_0_1 = v;
            this.l_1_1 = v;
            this.l_2_1 = v;
            this.t = 0;
        } },
        "ring_2": { set: function (v) {
            this.t = 1;
            this.l_0_2 = v;
            this.l_1_2 = v;
            this.l_2_2 = v;
            this.t = 0;
        } },
        "ring_3": { set: function (v) {
            this.t = 1;
            this.l_0_3 = v;
            this.l_1_3 = v;
            this.l_2_3 = v;
            this.t = 0;
        } },
        "ring_4": { set: function (v) {
            this.t = 1;
            this.l_0_4 = v;
            this.l_1_4 = v;
            this.l_2_4 = v;
            this.t = 0;
        } },
        "ring_5": { set: function (v) {
            this.t = 1;
            this.l_0_5 = v;
            this.l_1_5 = v;
            this.l_2_5 = v;
            this.t = 0;
        } },

        "all": {
            set: function(v) {
                this.leg_0 = clamp(v);
                this.leg_1 = clamp(v);
                this.leg_2 = clamp(v);
            }
        },

        "reset": {
            set: function() {
                this.all = 0;
            },
            get: function() {
                this.all = 0;
            }
        }
    });



    return piGlow;
}

module.exports.create = create;