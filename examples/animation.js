var animation = require('../lib/animations/index');
var pi = require('../lib/interface');

var piGlowBackendMock = {
    startTransaction: function() {
        console.log('start Transaction');
    },
    commitTransaction: function() {
        console.log('commit');
    }
};

animation({}, piGlowBackendMock)
    .fade().to(pi({ring_0:true})).in('2s').parallel()
    .fade().after('1s').to(pi({ring_1:true})).in('2s').parallel()
    .fade().after('2s').to(pi({ring_2:true})).in('2s').parallel()
    .repeat(3)
    .start(function() {
        console.log('i looped 3 times');
    });

//var a = animation().set(1)
//    .fade().after('2s').in('100ms').to(2)
//    .fade().after('2s').in('100ms').to(3);
//
//a.start();
//a.stop();