# TODO

* debug mode
* animations

````
var anim = fador().set(i1)
        .fade().after('2s').in('100ms').to(i2)
        .fade().after('2s').in('100ms').to(i3)
        .loop();

anim.start();
anim.stop();

fador({interval:10}).set(i1).start();

fador().set(i1)
        .set().after(2).to(i2)
        .set().after(2).to(i3)
        .repeat(3)
        .start(function() {
            console.log('i looped 3 times');
        });
        
fador().set(i1)
        .set().after(2).to(i2)
        .set().after(2).to(i3)
        .repeat('3times')
        .start(function() {
            console.log('i looped 3 times');
        });

fador().set(i1)
        .set().after(2).to(i2)
        .set().after(2).to(i3)
        .repeat('3s')
        .start(function() {
            console.log('i looped for 3 seconds');
        });

fador().set(i1)
        .set().after(2).to(i2)
        .set().after(2).to(i3)
        .repeat('2ms')
        .start(function() {
            console.log('i looped for 2 ms');
        });

````