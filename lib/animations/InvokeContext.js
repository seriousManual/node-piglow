function InvokeContext(transition, interval, timeRange) {
    this._transition = transition;
    this._ticks = 0;
    this._ticksLeft = 0;

    this._initialize(interval, timeRange);
}

InvokeContext.prototype._initialize = function(interval, timeRange) {
    if(!timeRange) {
        this._ticks = 1;
        this._ticksLeft = 1;
        return;
    }

    var overallTicks = Math.ceil(timeRange.times() / interval);

    this._ticks = overallTicks;
    this._ticksLeft = overallTicks;
};

InvokeContext.prototype.percentage = function() {
    return 1 - (this._ticksLeft / this._ticks);
};

InvokeContext.prototype.transition = function() {
    return this._transition;
};

InvokeContext.prototype.tickOff = function() {
    this._ticksLeft--;
};


function InvokeContextCollection() {
    this._collection = [];
}

InvokeContextCollection.prototype.count = function() {
    return this._collection.length;
};

InvokeContextCollection.prototype.add = function(contextToRemove) {
    this._collection.push(contextToRemove);
};

InvokeContextCollection.prototype.remove = function(contextToRemove) {
    this._collection = this._collection.filter(function(collectionMember) {
        return contextToRemove !== collectionMember;
    })
};

InvokeContextCollection.prototype.collection = function() {
    return this._collection;
};

module.exports = {
    InvokeContext: InvokeContext,
    InvokeContextCollection: InvokeContextCollection
};