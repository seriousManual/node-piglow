var expect = require('chai').expect;
var sinon = require('sinon');

function createBackendMock() {
    return {
        values: [],
        writeBytes: function(bytes) {
            this.values.push(ce.clone(bytes));
        }
    };
}

var AnimationBackend = require('../lib/animations/AnimationBackend');

describe('animationsBackend', function() {
    var clock, mock;

    beforeEach(function() {
        clock = sinon.useFakeTimers();
        mock = createBackendMock();
    });

    afterEach(function() {
        clock.restore();
    });

    it('should', function() {
        //do something!
    });
});