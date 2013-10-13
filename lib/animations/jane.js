var timeInterpreter = require('./timeInterpreter');
var TimeRange = require('./TimeRange');
var depugger = require('../util/debug');

function jane(options) {
    options = options || {};

    return {
        _debug: depugger({debug: options.debug || false, name: 'jane'}),
        _startTime: null,
        _repeat: null,
        _finishedCallback: null,

        _log: [],
        _logPointer: 0,
        _loopCounter: 0,

        _repeatCondition: function() {
            if(!this._repeat || !this._repeat.unit()) return true;

            if(this._repeat.unit() === TimeRange.TIMES) {
                if(this._repeat.times() === this._loopCounter) {
                    return false;
                }
            } else {
                var elapsed = process.hrtime(this._startTime);

                if(elapsed[0] * 1000 + elapsed[1] / 1e6 > this._repeat.times()) {
                    return false;
                }
            }

            return true;
        },

        _current: function() {
            return this._log[this._logPointer];
        },

        _invokeNext: function() {
            var that = this;

            if(this._logPointer === this._log.length) {
                this._debug('loop finished: #', this._loopCounter);

                this._loopCounter++;
                this._logPointer = 0;
            }

            if(!this._repeatCondition()) {
                this.stop();
                return;
            }

            this._debug('invoking animation index', this._logPointer);

            this._current().start(function() {
                that._invokeNext();
            });

            this._logPointer++;
        },

        chain: function(lights) {
            this._log.push(lights);

            return this;
        },

        repeat: function(repeat) {
            this._repeat = timeInterpreter(repeat);

            return this;
        },

        start: function(callback) {
            this._startTime = process.hrtime();
            this._finishedCallback = callback;

            this._invokeNext();
        },

        stop: function() {
            this._current().stop(true); //nocallback

            if(this._finishedCallback) {
                this._finishedCallback();
            }
        }
    }
}

module.exports = jane;