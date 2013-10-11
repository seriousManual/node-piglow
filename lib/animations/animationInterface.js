var Chainsaw = require('chainsaw');

var transitions = require('./transitions');
var TimeRange = require('./TimeRange');
var timeInterpreter = require('./timeInterpreter');

function Fador(backend) {
    var log = [];
    var context = null;
    var callback = null;
    var repeat = new TimeRange();

    function addTransition(t) {
        log.push(t);
    }

    function ensureContext() {
        var ret = [].splice.call(arguments, 0).some(function(kind) {
            return context instanceof kind;
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
            context = t;

            if(lights) {
                this.to(lights);
            }

            saw.next();
        };

        this.fade = function() {
            var t = new transitions.Fade();

            addTransition(t);
            context = t;

            saw.next();
        };

        this.repeat = function(times) {
            repeat = timeInterpreter(times);

            context = repeat;

            saw.next();
        };

        //------------ contexts ---------------------

        this.to = function(lights) {
            ensureContext(transitions.Fade, transitions.Set);

            context.to(lights);

            saw.next();
        };

        this.after = function(times) {
            ensureContext(transitions.Set, transitions.Fade);

            context.after(timeInterpreter(times));

            saw.next();
        };

        this.before = function(times) {
            ensureContext(transitions.Set, transitions.Fade);

            context.before(timeInterpreter(times));

            saw.next();
        };

        this.in = function(times) {
            ensureContext(transitions.Fade);

            context.in(timeInterpreter(times));

            saw.next();
        };

        this.parallel = function() {
            ensureContext(transitions.Fade);

            context.parallel(true);

            saw.next();
        };

        //-------------------- running ------------

        this.start = function(cb) {
            backend.start(log, repeat, cb);
        };

        this.stop = function() {
            backend.stop();
        };
    });
}

module.exports = Fador;