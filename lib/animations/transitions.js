var util = require('util');

function Transition() {
    this._to = null;
    this._after = null;
    this._before = null;
}

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

Transition.prototype.before = function(before) {
    if(before !== undefined) {
        this._before = before;
    }

    return this._before;
};



function Fade() {
    this._in = null;
    this._parallel = false;

    Transition.call(this);
}
util.inherits(Fade, Transition);

Fade.prototype.in = function(inTime) {
    if(inTime !== undefined) {
        this._in = inTime;
    }

    return this._in;
};

Fade.prototype.parallel = function(v) {
    if(v !== undefined) {
        this._parallel = !!v;
    }

    return this._parallel;
};


function Set() {
    Transition.call(this);
}
util.inherits(Set, Transition);


module.exports = {
    Set: Set,
    Fade: Fade
};