var expect = require('chai').expect;

var processValue = require('../lib/util/valueProcessor');

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
            expect(processValue(0.1)).to.equal(1);
        });

        it('should interprete numbers < 1 as percents, 50%', function() {
            expect(processValue(0.5)).to.equal(15);
        });

        it('should interprete numbers < 1 as percents, 99%', function() {
            expect(processValue(0.99)).to.equal(239);
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