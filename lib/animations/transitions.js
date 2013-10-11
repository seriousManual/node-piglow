var util = require('util');

function Transition() {
    this._to = null;
    this._after = null;
    this._before = null;
}

Transition.prototype.to = function(destiny) {
    this._to = destiny;
};

Transition.prototype.after = function(times) {
    this._after = times;
};

Transition.prototype.before = function(times) {
    this._before = times;
};



function Fade() {
    this._in = null;

    Transition.call(this);
}
util.inherits(Fade, Transition);

Fade.prototype.in = function(inTime) {
    this._in = inTime;
};


function Set() {
    Transition.call(this);
}
util.inherits(Set, Transition);


module.exports = {
    Set: Set,
    Fade: Fade
};