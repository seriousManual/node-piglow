var expect = require('chai').expect;

var gammaCorrection = require('../lib/util/gammaCorrection');
var processValue = require('../lib/util/valueProcessor');

describe('gamma', function() {
    it('should map the gamma value (1)', function() {
        expect(gammaCorrection(0)).to.equal(0);
    });

    it('should map the gamma value (10)', function() {
        expect(gammaCorrection(10)).to.equal(1);
    });

    it('should map the gamma value (50)', function() {
        expect(gammaCorrection(50)).to.equal(2);
    });

    it('should map the gamma value (100)', function() {
        expect(gammaCorrection(100)).to.equal(8);
    });

    it('should map the gamma value (150)', function() {
        expect(gammaCorrection(150)).to.equal(26);
    });

    it('should map the gamma value (200)', function() {
        expect(gammaCorrection(200)).to.equal(77);
    });

    it('should map the gamma value (220)', function() {
        expect(gammaCorrection(220)).to.equal(119);
    });

    it('should map the gamma value (230)', function() {
        expect(gammaCorrection(230)).to.equal(148);
    });

    it('should map the gamma value (255)', function() {
        expect(gammaCorrection(255)).to.equal(255);
    });

});

describe('valueProcess', function() {

    it('should clamp value, max', function() {
        expect(processValue(1000)).to.equal(processValue.MAX_VALUE);
    });

    it('should clamp value, min', function() {
        expect(processValue(-999)).to.equal(processValue.MIN_VALUE);
    });

    it('should only allow integers (>1)', function() {
        expect(processValue(1.337)).to.equal(1);
    });

    describe('percentages', function() {
        it('should interprete numbers < 1 as percents, 10%', function() {
            expect(processValue(0.1)).to.equal(25);
        });

        it('should interprete numbers < 1 as percents, 50%', function() {
            expect(processValue(0.5)).to.equal(127);
        });

        it('should interprete numbers < 1 as percents, 99%', function() {
            expect(processValue(0.99)).to.equal(252);
        });

        it('should interprete 1 not as an percentage value', function() {
            expect(processValue(1)).to.equal(1);
        });
    });

    describe('errors', function() {
        it('should only allow numbers (no string)', function() {
            expect(processValue('foo')).to.equal(0);
        });

        it('should only allow integers (no objects)', function() {
            expect(processValue({})).to.equal(0);
        });

        it('should only allow integers (no arrays)', function() {
            expect(processValue([])).to.equal(0);
        });
    });

});