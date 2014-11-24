var expect = require('chai').expect;

var gammaCorrection = require('../lib/util/gammaCorrection');
var processValue = require('../lib/util/valueProcessor');
var ledMapper = require('../lib/util/ledToAddress');

describe('util', function () {
    describe('gamma', function () {
        it('should map the gamma value (1)', function () {
            expect(gammaCorrection(0)).to.equal(0);
        });

        it('should map the gamma value (10)', function () {
            expect(gammaCorrection(10)).to.equal(1);
        });

        it('should map the gamma value (50)', function () {
            expect(gammaCorrection(50)).to.equal(2);
        });

        it('should map the gamma value (100)', function () {
            expect(gammaCorrection(100)).to.equal(8);
        });

        it('should map the gamma value (150)', function () {
            expect(gammaCorrection(150)).to.equal(26);
        });

        it('should map the gamma value (200)', function () {
            expect(gammaCorrection(200)).to.equal(77);
        });

        it('should map the gamma value (220)', function () {
            expect(gammaCorrection(220)).to.equal(119);
        });

        it('should map the gamma value (230)', function () {
            expect(gammaCorrection(230)).to.equal(148);
        });

        it('should map the gamma value (255)', function () {
            expect(gammaCorrection(255)).to.equal(255);
        });

    });

    describe('valueProcess', function () {

        it('should clamp value, max', function () {
            expect(processValue(1000)).to.equal(processValue.MAX_VALUE);
        });

        it('should clamp value, min', function () {
            expect(processValue(-999)).to.equal(processValue.MIN_VALUE);
        });

        it('should only allow integers (>1)', function () {
            expect(processValue(1.337)).to.equal(1);
        });

        describe('percentages', function () {
            it('should interprete numbers < 1 as percents, 10%', function () {
                expect(processValue(0.1)).to.equal(25);
            });

            it('should interprete numbers < 1 as percents, 50%', function () {
                expect(processValue(0.5)).to.equal(127);
            });

            it('should interprete numbers < 1 as percents, 99%', function () {
                expect(processValue(0.99)).to.equal(252);
            });

            it('should not interprete 1 as an percentage value', function () {
                expect(processValue(1)).to.equal(1);
            });
        });

        describe('errors', function () {
            it('should only allow numbers (no string)', function () {
                expect(processValue('foo')).to.equal(0);
            });

            it('should only allow integers (no objects)', function () {
                expect(processValue({})).to.equal(0);
            });

            it('should only allow integers (no arrays)', function () {
                expect(processValue([])).to.equal(0);
            });
        });

    });

    describe('ledMapper', function () {
        it('should map', function () {
            expect(ledMapper.map('l_0_0')).to.equal(0);
            expect(ledMapper.map('l_0_1')).to.equal(1);
            expect(ledMapper.map('l_0_2')).to.equal(2);
            expect(ledMapper.map('l_0_3')).to.equal(3);
            expect(ledMapper.map('l_0_4')).to.equal(14);
            expect(ledMapper.map('l_0_5')).to.equal(12);
            expect(ledMapper.map('l_1_0')).to.equal(6);
            expect(ledMapper.map('l_1_1')).to.equal(7);
            expect(ledMapper.map('l_1_2')).to.equal(8);
            expect(ledMapper.map('l_1_3')).to.equal(5);
            expect(ledMapper.map('l_1_4')).to.equal(4);
            expect(ledMapper.map('l_1_5')).to.equal(9);
            expect(ledMapper.map('l_2_0')).to.equal(17);
            expect(ledMapper.map('l_2_1')).to.equal(16);
            expect(ledMapper.map('l_2_2')).to.equal(15);
            expect(ledMapper.map('l_2_3')).to.equal(13);
            expect(ledMapper.map('l_2_4')).to.equal(11);
            expect(ledMapper.map('l_2_5')).to.equal(10);
        });

        it('should return null', function () {
            expect(ledMapper.map('foo')).to.be.null;
        });

        it('should map complete configuration', function () {
            expect(ledMapper.mapAll({
                l_0_0: 1, l_0_1: 2, l_0_2: 3, l_0_3: 4, l_0_4: 5, l_0_5: 6,
                l_1_0: 7, l_1_1: 8, l_1_2: 9, l_1_3: 10, l_1_4: 11, l_1_5: 12,
                l_2_0: 13, l_2_1: 14, l_2_2: 15, l_2_3: 16, l_2_4: 17, l_2_5: 18
            })).to.deep.equal([1, 2, 3, 4, 11, 10, 7, 8, 9, 12, 18, 17, 6, 16, 5, 15, 14, 13]);
        });
    });
});