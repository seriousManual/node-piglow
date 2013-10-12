var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

var piGlowBackendMock = {
    writeBytes: function() {}
};

//animation({debug: true}, piGlowBackendMock)
//        .set().to(pi(['ring_1'])).after('3s')
//        .set().to(pi(['ring_5'])).after('3s')
//        .start();

var a = animation({debug:true, interval: 100}, piGlowBackendMock)
        .fade().after('0.1s').to(pi({ring_0: 255})).in('0.1s')
        .fade().after('0.1s').to(pi({ring_1: 255})).in('0.1s')
        .fade().after('0.1s').to(pi({ring_2: 255})).in('0.1s')
        .fade().after('0.1s').to(pi({ring_3: 255})).in('0.1s')
        .fade().after('0.1s').to(pi({ring_4: 255})).in('0.1s')
        .fade().after('0.1s').to(pi({ring_5: 255})).in('0.1s')
        .repeat(1)
        .start(function() {
            console.log('its over...')
        });