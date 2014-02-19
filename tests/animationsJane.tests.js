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
var jane = require('../lib/animations/jane');
var piglowInterface = require('../lib/interface');

describe('jane', function() {
    var clock, mock;

    beforeEach(function() {
        clock = sinon.useFakeTimers();
        mock = createBackendMock();
    });

    afterEach(function() {
        clock.restore();
    });

    it('should write for one loop', function() {
        var foo = animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_1'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_2'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(1);

        var bar = animationInterface(new AnimationBackend({}, mock))
            .set().to(piglowInterface(['ring_0'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_1'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .set().to(piglowInterface(['ring_2'])).after('100ms')
            .set().to(piglowInterface()).after('100ms')
            .repeat(1);

        jane()
            .chain(foo)
            .chain(bar)
            .repeat(2)
            .start();

        clock.tick(15000);

        expect(mock.values).to.deep.equal([
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 255, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]);
    });
});