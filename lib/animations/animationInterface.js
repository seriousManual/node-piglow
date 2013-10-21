var transitions = require('./transitions');
var TimeRange = require('./TimeRange');

/**
 * factory method to create a animation object
 * @param backend the animation backend
 * @return {Object}
 */
function animation(backend) {
    var context = {
        log: [],
        repeat: new TimeRange()
    };

    backend.context(context);

    var callContext = null;

    function addTransition(t) {
        context.log.push(t);
    }

    function ensureContext() {
        var ret = [].splice.call(arguments, 0).some(function(kind) {
            return callContext instanceof kind;
        });

        if(!ret) {
            throw new Error('context does not match the required type');
        }
    }

    return {
        //---- context opener ----------------------
        set: function(lights) {
            var t = new transitions.Set();

            addTransition(t);
            callContext = t;

            if(lights) {
                this.to(lights);
            }

            return this;
        },
        fade: function() {
            var t = new transitions.Fade();

            addTransition(t);
            callContext = t;

            return this;
        },
        repeat: function(times) {
            context.repeat = TimeRange.interprete(times);

            callContext = context.repeat;

            return this;
        },

        //------------ contexts ---------------------
        to: function(lights) {
            ensureContext(transitions.Fade, transitions.Set);

            callContext.to(lights);

            return this;
        },
        after: function(times) {
            ensureContext(transitions.Set, transitions.Fade);

            callContext.after(TimeRange.interprete(times));

            return this;
        },
        in: function(times) {
            ensureContext(transitions.Fade);

            callContext.in(TimeRange.interprete(times));

            return this;
        },

        //-------------------- running ------------
        start: function(cb) {
            backend.start(cb);

            return this;
        },
        stop: function() {
            backend.stop();

            return this;
        }
    };
}

module.exports = animation;