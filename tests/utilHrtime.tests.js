var expect = require('chai').expect;

var hrtime = require('../lib/util/hrtime');

describe('hrtime', function() {

    it('should return the correct time', function(done) {
        var elapsed = hrtime();

        setTimeout(function() {
            expect(elapsed()).within(98, 120);
            done();
        }, 100);
    });

});