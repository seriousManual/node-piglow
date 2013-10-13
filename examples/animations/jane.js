var animation = require('../../lib/animations');
var pi = require('../../lib/interface');

var piGlowBackendMock = {
    writeBytes: function() {}
};

var rings = animation({debug: true}, piGlowBackendMock)
        .set().to(pi(['ring_0'])).after('0.1s')
        .set().to(pi(['ring_1'])).after('0.1s')
        .set().to(pi(['ring_2'])).after('0.1s')
        .set().to(pi(['ring_3'])).after('0.1s')
        .set().to(pi(['ring_4'])).after('0.1s')
        .set().to(pi(['ring_5'])).after('0.1s')
        .repeat('1times');

var legs = animation({debug: true}, piGlowBackendMock)
        .set().to(pi(['leg_0'])).after('0.1s')
        .set().to(pi(['leg_1'])).after('0.1s')
        .set().to(pi(['leg_2'])).after('0.1s')
        .repeat('1times');

animation.jane({debug: true})
        .chain(rings)
        .chain(legs)
        .repeat('2s')
        .start(function() {
            console.log( 'chain finished' );
        });