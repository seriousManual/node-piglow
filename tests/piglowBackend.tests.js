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
    it('should initialize and write bytes, should remap values, should do gamma correction', function (done) {
        var Backend = sand.require('../lib/PiGlowBackend', {
            requires: {
                'i2c': I2cMock
            }
        });

        new Backend()
            .on('initialize', function () {
                var that = this;

                this.update({
                    l_0_0: 100, l_0_1: 101, l_0_2: 102, l_0_3: 103, l_0_4: 104, l_0_5: 105,
                    l_1_0: 150, l_1_1: 151, l_1_2: 152, l_1_3: 153, l_1_4: 154, l_1_5: 155,
                    l_2_0: 200, l_2_1: 201, l_2_2: 202, l_2_3: 203, l_2_4: 204, l_2_5: 205
                }, function () {
                    var data = that._wire;

                    expect(data._addr).to.equal(84);
                    expect(data._options).to.deep.equal({device: '/dev/i2c-1'});
                    expect(data._written).to.deep.equal([
                        [0, [1]],
                        [19, [255, 255, 255]],
                        [1, [8, 8, 9, 9, 28, 27, 26, 26, 27, 29, 86, 84, 9, 82, 9, 80, 79, 77 ]],
                        [22, [255]]
                    ]);

                    done();
                });
            });
    });
});