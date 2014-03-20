var Emitter = require('events').EventEmitter;
var util = require('util');

/**
 * this is a mocking class that has the same interface as the piglow backend
 * it outputs the values that should be written to the console
 * @constructor
 */
function PiGlowMockPrettyPrint() {
    Emitter.call(this);

    var that = this;

    setTimeout(function () {
        that.emit('initialize');
    }, 15);
}

util.inherits(PiGlowMockPrettyPrint, Emitter);

PiGlowMockPrettyPrint.prototype.update = function (piGlowConfiguration, callback) {
    this._prettyPrint(piGlowConfiguration);
};

PiGlowMockPrettyPrint.prototype._prettyPrint = function(piGlowConfiguration) {
    console.log('piglowConfiguration:');
    console.log(util.format('       leg0    leg1    leg2'));
    console.log(util.format('ring0  %s     %s     %s', _p(piGlowConfiguration.l_0_0), _p(piGlowConfiguration.l_1_0), _p(piGlowConfiguration.l_2_0)));
    console.log(util.format('ring1  %s     %s     %s', _p(piGlowConfiguration.l_0_1), _p(piGlowConfiguration.l_1_1), _p(piGlowConfiguration.l_2_1)));
    console.log(util.format('ring2  %s     %s     %s', _p(piGlowConfiguration.l_0_2), _p(piGlowConfiguration.l_1_2), _p(piGlowConfiguration.l_2_2)));
    console.log(util.format('ring3  %s     %s     %s', _p(piGlowConfiguration.l_0_3), _p(piGlowConfiguration.l_1_3), _p(piGlowConfiguration.l_2_3)));
    console.log(util.format('ring4  %s     %s     %s', _p(piGlowConfiguration.l_0_4), _p(piGlowConfiguration.l_1_4), _p(piGlowConfiguration.l_2_4)));
    console.log(util.format('ring5  %s     %s     %s', _p(piGlowConfiguration.l_0_5), _p(piGlowConfiguration.l_1_5), _p(piGlowConfiguration.l_2_5)));
};

function _p(subject) {
    subject = subject + '';
    if(subject.length == 1) return subject + '  ';
    if(subject.length == 2) return subject + ' ';
    return subject;
}

module.exports = PiGlowMockPrettyPrint;