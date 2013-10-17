var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

var piGlowBackendMock = {
    writeBytes: function() {}
};

animation({interval:10, debug: true}, piGlowBackendMock)
    .set().to(pi(['ring_0'])).after('1s')
    .set().to(pi(['ring_1'])).after('0.1s')
    .set().to(pi(['ring_2'])).after('0.1s')
    .set().to(pi(['ring_3'])).after('0.1s')
    .set().to(pi(['ring_4'])).after('0.1s')
    .set().to(pi(['ring_5'])).after('0.1s')
    .repeat('5s')
    .start();

//var a = animation({debug:true, interval: 100}, piGlowBackendMock)
//        .fade().after('2s').to(pi({ring_0: 255})).in('1s')
//        .fade().after('2s').to(pi({ring_1: 255})).in('1s')
//        .repeat(1)
//        .start(function() {
//            console.log('its over...')
//        });