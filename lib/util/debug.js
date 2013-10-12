var util = require('util');

module.exports = function(options) {
    options = options || {};

    var debug = !!options.debug;

    return function() {
        if(!debug) {
            return;
        }

        var args = [].splice.call(arguments, 0);
        var message = util.format.apply(null, args);

        console.log(message);
    }
};