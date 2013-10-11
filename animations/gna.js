var animation = require('./index');

//var a = animation().set(1)
//    .fade().after('2s').in('100ms').to(2)
//    .fade().after('2s').in('100ms').to(3);
//
//a.start();
//a.stop();

animation()
    .set(1)
    .set().after(2).to(2)
    .set().after(2).to(3)
    .repeat(3)
    .start(function() {
        console.log('i looped 3 times');
    });

//animation()
//    .set(1)
//    .set().after(2).to(2)
//    .set().after(2).to(3)
//    .repeat('3times')
//    .start(function() {
//        console.log('i looped 3 times');
//    });
//
//animation()
//    .set(1)
//    .set().after(2).to(2)
//    .set().after(2).to(3)
//    .repeat('3s')
//    .start(function() {
//        console.log('i looped for 3 seconds');
//    });
//
//animation()
//    .set(1)
//    .set().after(2).to(2)
//    .set().after(2).to(3)
//    .repeat('2ms')
//    .start(function() {
//        console.log('i looped for 2 ms');
//    });