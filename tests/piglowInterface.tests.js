var ce = require('cloneextend');
var expect = require('chai').expect;

var piGlowInterface = require('../lib/interface');

function createBackendMock() {
    return {
        values: [],
        update: function (bytes) {
            this.values.push(ce.clone(bytes));
        }
    };
}

describe('interface', function () {
    var ti;

    beforeEach(function () {
        ti = piGlowInterface();
    });

    describe('single leds', function () {
        it('l_0_0 (shorthand)', function () {
            ti.l_0_0;
            expect(ti.values).to.deep.equal({
                l_0_0: 255, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_0', function () {
            ti.l_0_0 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_1 (shorthand)', function () {
            ti.l_0_1;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 255, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_1', function () {
            ti.l_0_1 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 100, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_2 (shorthand)', function () {
            ti.l_0_2;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 255, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_2', function () {
            ti.l_0_2 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 100, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_3 (shorthand)', function () {
            ti.l_0_3;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 255, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_3', function () {
            ti.l_0_3 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 100, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_4 (shorthand)', function () {
            ti.l_0_4;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 255, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_4', function () {
            ti.l_0_4 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 100, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_5 (shorthand)', function () {
            ti.l_0_5;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 255,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_0_5', function () {
            ti.l_0_5 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 100,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_0 (shorthand)', function () {
            ti.l_1_0;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 255, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_0', function () {
            ti.l_1_0 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 100, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_1 (shorthand)', function () {
            ti.l_1_1;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 255, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_1', function () {
            ti.l_1_1 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 100, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_2 (shorthand)', function () {
            ti.l_1_2;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 255, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_2', function () {
            ti.l_1_2 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 100, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_3 (shorthand)', function () {
            ti.l_1_3;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 255, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_3', function () {
            ti.l_1_3 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 100, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_4 (shorthand)', function () {
            ti.l_1_4;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 255, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_4', function () {
            ti.l_1_4 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 100, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_5 (shorthand)', function () {
            ti.l_1_5;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 255,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_1_5', function () {
            ti.l_1_5 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 100,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_0 (shorthand)', function () {
            ti.l_2_0;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 255, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_0', function () {
            ti.l_2_0 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 100, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_1 (shorthand)', function () {
            ti.l_2_1;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 255, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_1', function () {
            ti.l_2_1 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 100, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_2 (shorthand)', function () {
            ti.l_2_2;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 255, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_2', function () {
            ti.l_2_2 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 100, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_3 (shorthand)', function () {
            ti.l_2_3;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 255, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_3', function () {
            ti.l_2_3 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 100, l_2_4: 0, l_2_5: 0
            });
        });

        it('l_2_4 (shorthand)', function () {
            ti.l_2_4;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 255, l_2_5: 0
            });
        });

        it('l_2_4', function () {
            ti.l_2_4 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 100, l_2_5: 0
            });
        });

        it('l_2_5 (shorthand)', function () {
            ti.l_2_5;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 255
            });
        });

        it('l_2_5', function () {
            ti.l_2_5 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 100
            });
        });
    });

    describe('legs', function () {
        it('leg_0 (shorthand)', function () {
            ti.leg_0;
            expect(ti.values).to.deep.equal({
                l_0_0: 255, l_0_1: 255, l_0_2: 255, l_0_3: 255, l_0_4: 255, l_0_5: 255,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('leg_0', function () {
            ti.leg_0 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('leg_1 (shorthand)', function () {
            ti.leg_1;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 255, l_1_1: 255, l_1_2: 255, l_1_3: 255, l_1_4: 255, l_1_5: 255,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('leg_1', function () {
            ti.leg_1 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });

        it('leg_2 (shorthand)', function () {
            ti.leg_2;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 255, l_2_1: 255, l_2_2: 255, l_2_3: 255, l_2_4: 255, l_2_5: 255
            });
        });

        it('leg_2', function () {
            ti.leg_2 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
            });
        });
    });

    describe('rings', function () {
        it('ring_0 (shorthand)', function () {
            ti.ring_0;
            expect(ti.values).to.deep.equal({
                l_0_0: 255, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 255, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 255, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('ring_0', function () {
            ti.ring_0 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 100, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 100, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('red (shorthand)', function () {
            ti.red;
            expect(ti.values).to.deep.equal({
                l_0_0: 255, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 255, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 255, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('red', function () {
            ti.red = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 100, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 100, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });


        it('ring_1 (shorthand)', function () {
            ti.ring_1;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 255, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 255, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 255, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('ring_1', function () {
            ti.ring_1 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 100, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 100, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 100, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('orange (shorthand)', function () {
            ti.orange;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 255, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 255, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 255, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('orange', function () {
            ti.orange = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 100, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 100, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 100, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });


        it('ring_2 (shorthand)', function () {
            ti.ring_2;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 255, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 255, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 255, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('ring_2', function () {
            ti.ring_2 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 100, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 100, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 100, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('yellow (shorthand)', function () {
            ti.yellow;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 255, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 255, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 255, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
        it('yellow', function () {
            ti.yellow = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 100, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 100, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 100, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });


        it('ring_3 (shorthand)', function () {
            ti.ring_3;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 255, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 255, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 255, l_2_4: 0, l_2_5: 0
            });
        });
        it('ring_3', function () {
            ti.ring_3 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 100, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 100, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 100, l_2_4: 0, l_2_5: 0
            });
        });
        it('green (shorthand)', function () {
            ti.green;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 255, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 255, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 255, l_2_4: 0, l_2_5: 0
            });
        });
        it('green', function () {
            ti.green = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 100, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 100, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 100, l_2_4: 0, l_2_5: 0
            });
        });


        it('ring_4 (shorthand)', function () {
            ti.ring_4;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 255, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 255, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 255, l_2_5: 0
            });
        });
        it('ring_4', function () {
            ti.ring_4 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 100, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 100, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 100, l_2_5: 0
            });
        });
        it('blue (shorthand)', function () {
            ti.blue;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 255, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 255, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 255, l_2_5: 0
            });
        });
        it('blue', function () {
            ti.blue = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 100, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 100, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 100, l_2_5: 0
            });
        });


        it('ring_5 (shorthand)', function () {
            ti.ring_5;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 255,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 255,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 255
            });
        });
        it('ring_5', function () {
            ti.ring_5 = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 100,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 100,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 100
            });
        });
        it('white (shorthand)', function () {
            ti.white;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 255,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 255,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 255
            });
        });
        it('white', function () {
            ti.white = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 100,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 100,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 100
            });
        });
    });

    describe('all', function () {
        it('all', function () {
            ti.all = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
            });
        });

        it('all (shorthand)', function () {
            ti.all;
            expect(ti.values).to.deep.equal({
                l_0_0: 255, l_0_1: 255, l_0_2: 255, l_0_3: 255, l_0_4: 255, l_0_5: 255,
                l_1_0: 255, l_1_1: 255, l_1_2: 255, l_1_3: 255, l_1_4: 255, l_1_5: 255,
                l_2_0: 255, l_2_1: 255, l_2_2: 255, l_2_3: 255, l_2_4: 255, l_2_5: 255
            });
        });

        it('reset', function () {
            ti.all = 100;
            expect(ti.values).to.deep.equal({
                l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
            });
            ti.reset;
            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
    });

    describe('backend', function () {
        it('should write to the backend', function () {
            var mock = createBackendMock();

            var ti = piGlowInterface(mock);
            ti.all = 100;

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                    l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                    l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
                }
            ]);
        });

        it('should write to the backend (multiple times)', function () {
            var mock = createBackendMock();

            var ti = piGlowInterface(mock);
            ti.leg_0 = 100;
            ti.leg_1 = 100;
            ti.leg_2 = 100;

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                    l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                    l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
                },
                {
                    l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                    l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                    l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
                },
                {
                    l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                    l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                    l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
                }
            ]);
        });

        it('should write to the backend (one time)', function () {
            var mock = createBackendMock();

            var ti = piGlowInterface(mock);
            ti.startTransaction();
            ti.leg_0 = 100;
            ti.leg_1 = 100;
            ti.leg_2 = 100;
            ti.commitTransaction();

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 100, l_0_1: 100, l_0_2: 100, l_0_3: 100, l_0_4: 100, l_0_5: 100,
                    l_1_0: 100, l_1_1: 100, l_1_2: 100, l_1_3: 100, l_1_4: 100, l_1_5: 100,
                    l_2_0: 100, l_2_1: 100, l_2_2: 100, l_2_3: 100, l_2_4: 100, l_2_5: 100
                }
            ]);
        });

        //TODO: add tests for mulitple transaction levels
    });

    describe('predefined', function () {
        it('should write to the backend, the predefined stuff (object)', function () {
            var mock = createBackendMock();

            piGlowInterface(mock, {ring_1: 100});

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 0, l_0_1: 100, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                    l_1_0: 0, l_1_1: 100, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                    l_2_0: 0, l_2_1: 100, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
                }
            ]);
        });

        it('should write to the backend, the predefined stuff (array)', function () {
            var mock = createBackendMock();

            piGlowInterface(mock, ['ring_2']);

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 0, l_0_1: 0, l_0_2: 255, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                    l_1_0: 0, l_1_1: 0, l_1_2: 255, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                    l_2_0: 0, l_2_1: 0, l_2_2: 255, l_2_3: 0, l_2_4: 0, l_2_5: 0
                }
            ]);
        });

        it('should write multiple predefineds encased in a transaction', function () {
            var mock = createBackendMock();

            piGlowInterface(mock, ['ring_2', 'ring_5']);

            expect(mock.values).to.deep.equal([
                {
                    l_0_0: 0, l_0_1: 0, l_0_2: 255, l_0_3: 0, l_0_4: 0, l_0_5: 255,
                    l_1_0: 0, l_1_1: 0, l_1_2: 255, l_1_3: 0, l_1_4: 0, l_1_5: 255,
                    l_2_0: 0, l_2_1: 0, l_2_2: 255, l_2_3: 0, l_2_4: 0, l_2_5: 255
                }
            ]);
        });
    });

    describe('random', function () {
        it('should output random data', function () {
            ti.random = 0.5;

            expect(ti.values).to.satisfy(function (values) {
                var a = Object.keys(values).reduce(function (memo, key) {
                    var value = ti.values[key];

                    if (value > 0) {
                        memo.a++;
                    } else {
                        memo.z++;
                    }

                    return memo;
                }, {z: 0, a: 0});

                return a.z > 0 && a.a > 0;
            });
        });

        it('should set unchoosen values to zero', function () {
            ti.all = 123;
            ti.random = 0.999999999;

            expect(ti.values).to.deep.equal({
                l_0_0: 0, l_0_1: 0, l_0_2: 0, l_0_3: 0, l_0_4: 0, l_0_5: 0,
                l_1_0: 0, l_1_1: 0, l_1_2: 0, l_1_3: 0, l_1_4: 0, l_1_5: 0,
                l_2_0: 0, l_2_1: 0, l_2_2: 0, l_2_3: 0, l_2_4: 0, l_2_5: 0
            });
        });
    });
});