var expect = require('chai').expect;
var sand = require('sandboxed-module');

function I2cMock(address, options) {
    this._addr = address;
    this._options = options;
    this._adresses = [];
    this._written = [];

    this.setAddress = function(address) {
        this._adresses.push(address);
    };

    this.writeBytes = function(address, values, callback) {
        this._written.push([address, values]);

        process.nextTick(callback);
    };
}

describe('piGlowBackend', function() {
    it('should initialize correctly', function(done) {
        var Backend = sand.require('../lib/PiGlowBackend', {
            requires: {
                'i2c': I2cMock
            }
        });

        new Backend()
            .on('initialize', function() {
                var data = this._wire;

                expect(data._addr).to.equal(84);
                expect(data._options).to.deep.equal({device: '/dev/i2c-1'});
                expect(data._written).to.deep.equal([
                    [0, [1]], [19, [255, 255, 255]]
                ]);

                done();
            });
    });
});

describe('piGlowBackend', function() {
    it('should initialize and write bytes', function(done) {
        var Backend = sand.require('../lib/PiGlowBackend', {
            requires: {
                'i2c': I2cMock
            }
        });

        new Backend()
            .on('initialize', function() {
                var self = this;

                this.update([1,2,3], function() {
                    var data = self._wire;

                    expect(data._addr).to.equal(84);
                    expect(data._options).to.deep.equal({device: '/dev/i2c-1'});
                    expect(data._written).to.deep.equal([
                        [0, [1]],
                        [19, [255, 255, 255]],
                        [1, [1,2,3]],
                        [22, [255]]
                    ]);

                    done();
                });
            });
    });
});