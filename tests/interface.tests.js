var expect = require('chai').expect;

var interface = require('../lib/interface');

describe('interface', function() {
    var ti;

    beforeEach(function() {
        ti = interface.create();
    });

    it('l_0_0 (shorthand)', function() {
       ti.l_0_0;
       expect(ti.values).to.deep.equal([255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_0', function() {
        ti.l_0_0 = 100;
        expect(ti.values).to.deep.equal([8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_1 (shorthand)', function() {
        ti.l_0_1;
        expect(ti.values).to.deep.equal([0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_1', function() {
        ti.l_0_1 = 100;
        expect(ti.values).to.deep.equal([0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_2 (shorthand)', function() {
        ti.l_0_2;
        expect(ti.values).to.deep.equal([0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_2', function() {
        ti.l_0_2 = 100;
        expect(ti.values).to.deep.equal([0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_3 (shorthand)', function() {
        ti.l_0_3;
        expect(ti.values).to.deep.equal([0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_3', function() {
        ti.l_0_3 = 100;
        expect(ti.values).to.deep.equal([0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_0_4 (shorthand)', function() {
        ti.l_0_4;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0]);
    });

    it('l_0_4', function() {
        ti.l_0_4 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0]);
    });

    it('l_0_5 (shorthand)', function() {
        ti.l_0_5;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,0,0]);
    });

    it('l_0_5', function() {
        ti.l_0_5 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0]);
    });

    it('l_1_0 (shorthand)', function() {
        ti.l_1_0;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_0', function() {
        ti.l_1_0 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_1 (shorthand)', function() {
        ti.l_1_1;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_1', function() {
        ti.l_1_1 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_2 (shorthand)', function() {
        ti.l_1_2;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_2', function() {
        ti.l_1_2 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_3 (shorthand)', function() {
        ti.l_1_3;
        expect(ti.values).to.deep.equal([0,0,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_3', function() {
        ti.l_1_3 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_4 (shorthand)', function() {
        ti.l_1_4;
        expect(ti.values).to.deep.equal([0,0,0,0,255,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_4', function() {
        ti.l_1_4 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('l_1_5 (shorthand)', function() {
        ti.l_1_5;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,255,0,0,0,0,0,0,0,0]);
    });

    it('l_1_5', function() {
        ti.l_1_5 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0]);
    });

    it('l_2_0 (shorthand)', function() {
        ti.l_2_0;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255]);
    });

    it('l_2_0', function() {
        ti.l_2_0 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]);
    });

    it('l_2_1 (shorthand)', function() {
        ti.l_2_1;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0]);
    });

    it('l_2_1', function() {
        ti.l_2_1 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0]);
    });

    it('l_2_2 (shorthand)', function() {
        ti.l_2_2;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0]);
    });

    it('l_2_2', function() {
        ti.l_2_2 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0]);
    });

    it('l_2_3 (shorthand)', function() {
        ti.l_2_3;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,0]);
    });

    it('l_2_3', function() {
        ti.l_2_3 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0]);
    });

    it('l_2_4 (shorthand)', function() {
        ti.l_2_4;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,0,0,0]);
    });

    it('l_2_4', function() {
        ti.l_2_4 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0]);
    });

    it('l_2_5 (shorthand)', function() {
        ti.l_2_5;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,255,0,0,0,0,0,0,0]);
    });

    it('l_2_5', function() {
        ti.l_2_5 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0]);
    });

    it('leg_0 (shorthand)', function() {
        ti.leg_0;
        expect(ti.values).to.deep.equal([255,255,255,255,0,0,0,0,0,0,0,0,255,0,255,0,0,0]);
    });

    it('leg_0', function() {
        ti.leg_0 = 100;
        expect(ti.values).to.deep.equal([8,8,8,8,0,0,0,0,0,0,0,0,8,0,8,0,0,0]);
    });

    it('leg_1 (shorthand)', function() {
        ti.leg_1;
        expect(ti.values).to.deep.equal([0,0,0,0,255,255,255,255,255,255,0,0,0,0,0,0,0,0]);
    });

    it('leg_1', function() {
        ti.leg_1 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,8,8,8,8,8,8,0,0,0,0,0,0,0,0]);
    });

    it('leg_2 (shorthand)', function() {
        ti.leg_2;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,255,255,0,255,0,255,255,255]);
    });

    it('leg_2', function() {
        ti.leg_2 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,8,8,0,8,0,8,8,8]);
    });



    it('ring_0 (shorthand)', function() {
        ti.ring_0;
        expect(ti.values).to.deep.equal([255,0,0,0,0,0,255,0,0,0,0,0,0,0,0,0,0,255]);
    });

    it('ring_0', function() {
        ti.ring_0 = 100;
        expect(ti.values).to.deep.equal([8,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,8]);
    });

    it('ring_1 (shorthand)', function() {
        ti.ring_1;
        expect(ti.values).to.deep.equal([0,255,0,0,0,0,0,255,0,0,0,0,0,0,0,0,255,0]);
    });

    it('ring_1', function() {
        ti.ring_1 = 100;
        expect(ti.values).to.deep.equal([0,8,0,0,0,0,0,8,0,0,0,0,0,0,0,0,8,0]);
    });

    it('ring_2 (shorthand)', function() {
        ti.ring_2;
        expect(ti.values).to.deep.equal([0,0,255,0,0,0,0,0,255,0,0,0,0,0,0,255,0,0]);
    });

    it('ring_2', function() {
        ti.ring_2 = 100;
        expect(ti.values).to.deep.equal([0,0,8,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0]);
    });

    it('ring_3 (shorthand)', function() {
        ti.ring_3;
        expect(ti.values).to.deep.equal([0,0,0,255,0,255,0,0,0,0,0,0,0,255,0,0,0,0]);
    });

    it('ring_3', function() {
        ti.ring_3 = 100;
        expect(ti.values).to.deep.equal([0,0,0,8,0,8,0,0,0,0,0,0,0,8,0,0,0,0]);
    });

    it('ring_4 (shorthand)', function() {
        ti.ring_4;
        expect(ti.values).to.deep.equal([0,0,0,0,255,0,0,0,0,0,0,255,0,0,255,0,0,0]);
    });

    it('ring_4', function() {
        ti.ring_4 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,8,0,0,0,0,0,0,8,0,0,8,0,0,0]);
    });

    it('ring_5 (shorthand)', function() {
        ti.ring_5;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,255,255,0,255,0,0,0,0,0]);
    });

    it('ring_5', function() {
        ti.ring_5 = 100;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,8,8,0,8,0,0,0,0,0]);
    });

    it('all', function() {
        ti.all = 100;
        expect(ti.values).to.deep.equal([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]);
    });

    it('all (shorthand)', function() {
        ti.all;
        expect(ti.values).to.deep.equal([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]);
    });

    it('reset', function() {
        ti.all = 100;
        expect(ti.values).to.deep.equal([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]);
        ti.reset;
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('should write to the backend', function() {
        var mock = {
            values: [],
            writeBytes: function(bytes) {
                this.values = bytes;
            }
        };

        var ti = interface.create(mock);

        ti.all = 100;

        expect(mock.values).to.deep.equal([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]);
    });

    it('wrong datatype (string)', function() {
        ti.l_0_0 = 'foo';
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('wrong datatype (object)', function() {
        ti.l_0_0 = {};
        expect(ti.values).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });

    it('wrong datatype (string)', function() {
        ti.l_0_0 = '1';
        expect(ti.values).to.deep.equal([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });
});