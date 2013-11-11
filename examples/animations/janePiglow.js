var args = require('optimist').argv;
var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

var debug = args.debug || args.d || false;

var rings = animation({debug: debug, interval:10})
        .fade().to(pi(['ring_0'])).in('0.03s')
        .fade().to(pi(['ring_1'])).in('0.03s')
        .fade().to(pi(['ring_2'])).in('0.03s')
        .fade().to(pi(['ring_3'])).in('0.03s')
        .fade().to(pi(['ring_4'])).in('0.03s')
        .fade().to(pi(['ring_5'])).in('0.03s')
        .repeat('5times');

var legs = animation({debug: debug, interval: 10})
        .set().to(pi(['leg_0'])).after('0.03s')
        .set().to(pi(['leg_1'])).after('0.03s')
        .set().to(pi(['leg_2'])).after('0.03s')
        .repeat('5times');

animation.jane()
        .chain(rings)
        .chain(legs)
        .repeat('5times')
        .start(function() {
            console.log( 'chain finished' );
        });
