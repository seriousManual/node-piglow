var util = require('util');

/**
 * stdbackend for the debugger
 * will be overwritten in unit tests
 * @type {Object}
 */
var stdBackend = {
    write: function(mssg) {
        console.log(mssg);
    }
};

/**
 * returns a a function that is used to create debug messages
 * the logging of the messages happens in the context of the initializing factory method
 *
 * @param options
 * @return {Function}
 */

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