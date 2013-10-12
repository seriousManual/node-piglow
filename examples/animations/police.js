var animation = require('../../lib/animations/index');
var pi = require('../../lib/interface');

animation()
        .set().to(pi(['red'])).after('0.4s')
        .set().to(pi(['blue'])).after('0.4s')
        .start();
