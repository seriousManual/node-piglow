var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

var piGlowBackendMock = {
    writeBytes: function(bytes) {}
};

animation({interval:10, debug: true}, piGlowBackendMock)
    .set().to(pi(['ring_0'])).after('1s')
    .set().to(pi(['ring_1'])).after('0.1s')
    .set().to(pi(['ring_2'])).after('0.1s')
    .set().to(pi(['ring_3'])).after('0.1s')
    .set().to(pi(['ring_4'])).after('0.1s')
    .set().to(pi(['ring_5'])).after('0.1s')
    .fade().after('100ms').to(pi(['ring_4'])).in('0.3s')
    .fade().after('100ms').to(pi(['ring_3'])).in('0.3s')
    .fade().after('100ms').to(pi(['ring_2'])).in('0.3s')
    .fade().after('100ms').to(pi(['ring_1'])).in('0.3s')
    .fade().after('100ms').to(pi(['ring_0'])).in('0.3s')
    .fade().after('100ms').to(pi(['reset'])).in('0.3s')
    .repeat(3)
    .start();
