var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');


var PiGlowBackend = require('../../lib/PiGlowBackend');
var myBackend = new PiGlowBackend();


var rings = animation({debug: true}, myBackend)
        .set().to(pi(['ring_0'])).after('0.1s')
        .set().to(pi(['ring_1'])).after('0.1s')
        .set().to(pi(['ring_2'])).after('0.1s')
        .set().to(pi(['ring_3'])).after('0.1s')
        .set().to(pi(['ring_4'])).after('0.1s')
        .set().to(pi(['ring_5'])).after('0.1s')
        .repeat('1times');

var legs = animation({debug: true}, myBackend)
        .set().to(pi(['leg_0'])).after('0.1s')
        .set().to(pi(['leg_1'])).after('0.1s')
        .set().to(pi(['leg_2'])).after('0.1s')
        .repeat('1times');

animation.jane()
        .chain(rings)
        .chain(legs)
        .repeat('1times')
        .start(function() {
            console.log( 'chain finished' );
        });