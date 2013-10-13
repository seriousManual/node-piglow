var util = require('util');

module.exports = function(options) {
    options = options || {};

    var debug = !!options.debug;
    var name = options.name || '';

    return function() {
        if(!debug) {
            return;
        }

        var args = [].splice.call(arguments, 0);
        var message = util.format.apply(null, args);

        if(name) {
            message = util.format('[%s] %s', name, message);
        }

        console.log(message);
    }
};