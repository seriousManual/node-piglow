var Chainsaw = require('chainsaw');

var transitions = require('./transitions');
var TimeRange = require('./TimeRange');
var timeInterpreter = require('./timeInterpreter');

function Fador(backend) {
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

    return Chainsaw(function(saw) {

        //---- context opener ----------------------
        this.set = function(lights) {
            var t = new transitions.Set();

            addTransition(t);
            callContext = t;

            if(lights) {
                this.to(lights);
            }

            saw.next();
        };

        this.fade = function() {
            var t = new transitions.Fade();

            addTransition(t);
            callContext = t;

            saw.next();
        };

        this.repeat = function(times) {
            context.repeat = timeInterpreter(times);

            callContext = context.repeat;

            saw.next();
        };

        //------------ contexts ---------------------

        this.to = function(lights) {
            ensureContext(transitions.Fade, transitions.Set);

            callContext.to(lights);

            saw.next();
        };

        this.after = function(times) {
            ensureContext(transitions.Set, transitions.Fade);

            callContext.after(timeInterpreter(times));

            saw.next();
        };

        this.in = function(times) {
            ensureContext(transitions.Fade);

            callContext.in(timeInterpreter(times));

            saw.next();
        };

        this.parallel = function() {
            ensureContext(transitions.Fade);

            callContext.parallel(true);

            saw.next();
        };

        //-------------------- running ------------

        this.start = function(cb) {
            backend.start(cb);
        };

        this.stop = function() {
            backend.stop();
        };
    });
}

module.exports = Fador;