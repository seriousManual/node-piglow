# node-piglow

[![Build Status](https://travis-ci.org/zaphod1984/node-piglow.png)](https://travis-ci.org/zaphod1984/node-piglow)

[![NPM](https://nodei.co/npm/piglow.png)](https://nodei.co/npm/piglow/)

[![NPM](https://nodei.co/npm-dl/piglow.png?months=3)](https://nodei.co/npm/piglow/)

The piGlow is a little LED-Board for the [Raspberry Pi](http://www.raspberrypi.org/) sold by [Pimoroni](http://shop.pimoroni.com/products/piglow). It features 18 LEDs in six different colors (white, blue, green, yellow, orange, red) arranged like a vortex:

<p align="center">
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow.jpg" width="250" />
</p>

This module offers an interface to control the individual LEDs.

In action video:
http://www.youtube.com/watch?v=s-rD8PfAke8

## Installation

````bash
$ npm install piglow
````

## Setup

````bash
$ sudo vi /etc/modules
````

Add these two lines

````bash
i2c-bcm2708 
i2c-dev
````

````bash
$ sudo vi /etc/modprobe.d/raspi-blacklist.conf
````

Comment out blacklist i2c-bcm2708

````
#blacklist i2c-bcm2708
````

## Invocation

### From the commandline

````bash
$ piglow --leg_0 100 //lights up the 8 LEDs of the first piglow leg
````

Each parameter can be specified individually as a command line parameter. See the section [Adressing](#adressing) for a detailed overview.

When the parameter `mocked` is assigned, the parameters will not be passed to the piglow board but to a mocking backend. This is useful in a testing environment. (See the [Mocking](#mocking) section)

````bash
$ piglow --leg_1 100 --mocked
mock says:  [ 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0 ]
````

Example
````bash
piglow --mocked --ring_0 100 --leg_1 --l_2_5 10
mock says:  [ 8, 0, 0, 0, 255, 255, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 8 ]
````


The shorthand version can be used on the command line as well:

````bash
$ piglow --all --mocked
mock says:  [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ]
````

### From your script

```
var piGlow = require('piglow');

//callback fires when board is initialized
piGlow(function(error) {
  //do something
});

```

## Adressing

<p align="center">
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow_leds.jpg" /><br>
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow_legs.jpg" />
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow_rings.jpg" />
</p>

To each LED a brightness value between 0 (off) and 255 (freakin' bright) can be assigned.
If one preferrs percentage values, as a convenience function all values smaller than 1 are treated as percentage values. Note that the value of '1' is not treated as 100% but as the brightness value of 1!

### Individual LEDs
```
//parameter sets the brightness:
piGlow.l_0_0 = 100; //sets LED 1 of leg 1 to a brightness of 100 (of 255)
piGlow.l_0_1 = 10; //sets LED 2 of leg 1 to a brightness of 10
piGlow.l_0_1 = 0.5; //sets LED 2 of leg 1 to a brightness of 50% (=brightness of 127)
...
piGlow.l_2_5 = 200; //sets LED 6 of leg 3 to a brightness of 200

//shorthand form:
piGlow.l_0_0; //sets LED 1 of leg 1 to a brightness of 255
```

### Legs
```
piGlow.leg_0 = 100; //sets all LEDs of leg 1 to a brightness of 100

//shorthand
piGlow.leg_0; //sets all LEDs of leg 1 to 255
```

### Rings
```
piGlow.ring_0 = 100; //sets LED 1 of leg 1, LED 1 of leg 2 and LED 1 of leg 3 to 100

//shorthand
piGlow.ring_0; //sets LED 1 of leg 1, LED 1 of leg 1 and LED 1 of leg 2 to 255
```

As the rings are distinguishable by color (order from outer ring to the inner: red, orange, yellow, green, blue, white), they can be adressed via the rings color:
```
piGlow.red = 100; //sets the first ring to a brightness of 100

//shorthand
piGlow.red; //sets the first ring to maximum brightness
```


### All LEDs
```
piGlow.all = 100; //set all LEDs to 100

//shorthand
piGlow.all; //set all LEDs to 255 (watch your eyes)

piGlow.reset; //set all LEDs to 0
```

### Random
```
piGlow.random = 0.5;

//shorthand
piGlow.random;
```
The propbability of lighting up can be defined (`piGLow.random = 0.1;`) and is otherwise calculated via this formula: `(0.4 + Math.random() * 0.2);`.
The brightness is calculated via this formula: `parseInt(MAX_VALUE / 2 + (MAX_VALUE / 2 * Math.random()), 10)`

## Transactions

Each parameter that is set causes the backend to transfer the complete set of values to the piglow board.
Thus the following operation would cause three write operations:

```
piGlow.l_0_1 = 100;
piGlow.l_0_2 = 100;
piGlow.l_0_3 = 100;
```

The piglow-interface offers the possibility to open up a transaction and to commit it when all changes have been made. So the following code will cause only one write to the hardware board:

```
piGlow.startTransaction();
piGlow.l_0_1 = 100;
piGlow.l_0_2 = 100;
piGlow.l_0_3 = 100;
piGlow.commitTransaction();
```

This benefits performance especially when the LEDs are changed in high frequence.

## Mocking

This module also exposes its internal structure, with the possibility to invoke the piGlow interface with a injected mocking backend:
```
var piGlow = require('piglow');
var PiGlowBackendMock = piGlow.BackendMock;
var piGlowInterface = piGLow.piGlowInterface;

var myMock = new PiGlowBackendMock();
var myInterface = piGlowInterface.create(myMock);

//lets hack
myInterface.ring_0 = 255;
```

This way the module can be used in a non raspi environment for development or with a testing mock for unit tests.
To implement your own mocks follow this interface:
```
function PiGlowMock() {}

PiGlowMock.prototype.writeBytes = function(bytes, callback) {
  //bytes is a array of 18 integer values between 0 and 255
};
```

## Made with:
- **node-ic2** https://github.com/kelly/node-i2c
- **seq** https://github.com/substack/node-seq/
- **optimist** https://github.com/substack/optimist/

## Used in
- **piglow-load** https://github.com/zaphod1984/node-piglow-load
- **piglow-system** https://github.com/zaphod1984/node-piglow-system
- **piglow-watch** https://github.com/zaphod1984/node-piglow-watch
