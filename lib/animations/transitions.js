var util = require('util');

function Transition() {
    this._to = null;
    this._after = null;
    this._in = null;
}

Transition.prototype.in = function(inTime) {
    if(inTime !== undefined) {
        this._in = inTime;
    }

    return this._in;
};

Transition.prototype.to = function(to) {
    if(to !== undefined) {
        this._to = to;
    }

    return this._to;
};

Transition.prototype.after = function(after) {
    if(after !== undefined) {
        this._after = after;
    }

    return this._after;
};



function Fade() {
    Transition.call(this);
}
util.inherits(Fade, Transition);


function Set() {
    Transition.call(this);
}
util.inherits(Set, Transition);


module.exports = {
    Set: Set,
    Fade: Fade
};