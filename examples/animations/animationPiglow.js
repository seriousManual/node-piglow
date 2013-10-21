var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

animation({debug:false, interval: 10})
        .fade().to(pi({ring_0: 255})).in('0.1s')
        .fade().to(pi({ring_1: 255})).in('0.1s')
        .fade().to(pi({ring_2: 255})).in('0.1s')
        .fade().to(pi({ring_3: 255})).in('0.1s')
        .fade().to(pi({ring_4: 255})).in('0.1s')
        .fade().to(pi({ring_5: 255})).in('0.1s')
        .set().to(pi(['ring_4'])).after('1s')
        .set().to(pi(['ring_3'])).after('1s')
        .set().to(pi(['ring_2'])).after('1s')
        .set().to(pi(['ring_1'])).after('1s')
        .set().to(pi(['ring_0'])).after('1s')
        .repeat('3times')
        .start(function() {
            console.log('i looped 3 times');
        });
