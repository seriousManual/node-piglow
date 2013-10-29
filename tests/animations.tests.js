var expect = require('chai').expect;
var sinon = require('sinon');
var ce = require('cloneextend');

function createBackendMock() {
    return {
        values: [],
        writeBytes: function(bytes) {
            this.values.push(ce.clone(bytes));
        }
    };
}

var AnimationBackend = require('../lib/animations/AnimationBackend');
var animationInterface = require('../lib/animations/animationInterface');
var piglowInterface = require('../lib/interface');

describe('animationsBackend', function() {
    var clock, mock;

    beforeEach(function() {
        clock = sinon.useFakeTimers();
        mock = createBackendMock();
    });

    afterEach(function() {
        clock.restore();
    });

    it('should write for one loop, should call the callback', function() {
        var called = false;

        animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_1'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_2'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(1)
            .start(function() {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
                [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]);
    });

    it('should write for two loop, should call the callback', function() {
        var called = false;

        animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(2)
            .start(function() {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]);
    });

    it('should fade, should call the callback', function() {
        var called = false;

        animationInterface(new AnimationBackend({interval:10}, mock))
            .fade().to(piglowInterface(['red'])).after('100ms').in('30ms')
            .fade().to(piglowInterface(['green'])).after('100ms').in('30ms')
            .repeat(1)
            .start(function() {
                called = true;
            });

        clock.tick(5000);

        expect(mock.values).to.deep.equal([
            [ 85, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85 ],
            [ 170, 0, 0, 0, 0, 0, 170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 170, 0, 0, 85, 0, 85, 170, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 170 ],
            [ 84, 0, 0, 170, 0, 170, 84, 0, 0, 0, 0, 0, 0, 170, 0, 0, 0, 84 ],
            [ 0, 0, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0 ]
        ]);
    });

    it('should fade, should call the callback', function() {
        var called = false;

        animationInterface(new AnimationBackend({interval:10}, mock))
            .fade().to(piglowInterface(['red'])).after('100ms').in('60ms')
            .fade().to(piglowInterface(['green'])).after('100ms').in('60ms')
            .fade().to(piglowInterface()).after('100ms').in('60ms')
            .repeat(1)
            .start(function() {
                called = true;
            });

        clock.tick(5000);

        expect(called).to.be.true;

        expect(mock.values).to.deep.equal([
            [ 42, 0, 0, 0, 0, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42 ],
            [ 85, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85 ],
            [ 127, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127 ],
            [ 170, 0, 0, 0, 0, 0, 170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 170 ],
            [ 212, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 212, 0, 0, 42, 0, 42, 212, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 212 ],
            [ 170, 0, 0, 85, 0, 85, 170, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 170 ],
            [ 127, 0, 0, 127, 0, 127, 127, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 127 ],
            [ 84, 0, 0, 170, 0, 170, 84, 0, 0, 0, 0, 0, 0, 170, 0, 0, 0, 84 ],
            [ 42, 0, 0, 212, 0, 212, 42, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 42 ],
            [ 0, 0, 0, 255, 0, 255, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0 ],
            [ 0, 0, 0, 212, 0, 212, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0 ],
            [ 0, 0, 0, 170, 0, 170, 0, 0, 0, 0, 0, 0, 0, 170, 0, 0, 0, 0 ],
            [ 0, 0, 0, 127, 0, 127, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0 ],
            [ 0, 0, 0, 84, 0, 84, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0, 0 ],
            [ 0, 0, 0, 42, 0, 42, 0, 0, 0, 0, 0, 0, 0, 42, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]);
    });
});