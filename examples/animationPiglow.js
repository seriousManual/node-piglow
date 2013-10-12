var animation = require('../lib/animations/index');
var pi = require('../lib/interface');

var piGlowBackendMock = {
    writeBytes: function() {}
};

//animation({debug: true}, piGlowBackendMock)
//        .set().to(pi(['ring_1'])).after('3s')
//        .set().to(pi(['ring_5'])).after('3s')
//        .start();

var piGlow = require('../lib/PiGlowBackend');

animation({debug:false, interval: 100}, new piGlow())
        .fade().to(pi({ring_0: 255})).in('1s')
        .fade().to(pi({ring_1: 255})).in('1s')
        .fade().to(pi({ring_2: 255})).in('1s')
        .fade().to(pi({ring_3: 255})).in('1s')
        .fade().to(pi({ring_4: 255})).in('1s')
        .fade().to(pi({ring_5: 255})).in('1s')
        .repeat('3times')
        .start(function() {
            console.log('i looped 3 times');
        });
