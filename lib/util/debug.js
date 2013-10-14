var util = require('util');

var stdBackend = {
    write: function(mssg) {
        console.log(mssg);
    }
};

module.exports = function(options) {
    options = options || {};

    var debug = !!options.debug;
    var name = options.name || '';
    var backend = options.backend || stdBackend;

    return function() {
        if(!debug) {
            return;
        }

        var args = [].splice.call(arguments, 0);
        var message = util.format.apply(null, args);

        if(name) {
            message = util.format('[%s] %s', name, message);
        }

        backend.write(message);
    }
};