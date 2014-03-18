var expect = require('chai').expect;
var sand = require('sandboxed-module');

function I2cMock(address, options) {
    this._addr = address;
    this._options = options;
    this._adresses = [];
    this._written = [];

    this.setAddress = function (address) {
        this._adresses.push(address);
    };

    this.writeBytes = function (address, values, callback) {
        this._written.push([address, values]);

        process.nextTick(callback);
    };
}

describe('piGlowBackend', function () {
    it('should initialize correctly', function (done) {
        var Backend = sand.require('../lib/PiGlowBackend', {
            requires: {
                'i2c': I2cMock
            }
        });

        new Backend()
            .on('initialize', function () {
                var data = this._wire;

                expect(data._addr).to.equal(84);
                expect(data._options).to.deep.equal({device: '/dev/i2c-1'});
                expect(data._written).to.deep.equal([
                    [0, [1]],
                    [19, [255, 255, 255]]
                ]);

                done();
            });
    });
});

describe('piGlowBackend', function () {
    it('should initialize and write bytes', function (done) {
        var Backend = sand.require('../lib/PiGlowBackend', {
            requires: {
                'i2c': I2cMock
            }
        });

        new Backend()
            .on('initialize', function () {
                var that = this;

                this.update({
                    l_0_0: 1, l_0_1: 2, l_0_2: 3, l_0_3: 4, l_0_4: 5, l_0_5: 6,
                    l_1_0: 7, l_1_1: 8, l_1_2: 9, l_1_3: 10, l_1_4: 11, l_1_5: 12,
                    l_2_0: 13, l_2_1: 14, l_2_2: 15, l_2_3: 16, l_2_4: 17, l_2_5: 18
                }, function () {
                    var data = that._wire;

                    expect(data._addr).to.equal(84);
                    expect(data._options).to.deep.equal({device: '/dev/i2c-1'});
                    expect(data._written).to.deep.equal([
                        [0, [1]],
                        [19, [255, 255, 255]],
                        [1, [1, 2, 3, 4, 11, 10, 7, 8, 9, 12, 18, 17, 6, 16, 5, 15, 14, 13]],
                        [22, [255]]
                    ]);

                    done();
                });
            });
    });
});