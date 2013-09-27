var expect = require('chai').expect;

var gammaCorrection = require('../lib/util/gammaCorrection');

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