# node-piglow

The piGlow is little LED-Board for the [Raspberry Pi](http://www.raspberrypi.org/) sold by [Pimoroni](http://shop.pimoroni.com/products/piglow). It features 18 LEDs in six different colors (white, green, blue, yellow, orange, red) arranged like a vortex:

<p align="center">
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow2.jpg" width="250" />
  <br>
  <img src="https://raw.github.com/zaphod1984/node-piglow/master/pics/piglow.jpg" width="250" />
</p>

This module offers an interface to control the individual LEDs.

## Installation

````bash
$ npm install piglow (not yet)
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

```
var piGlow = require('piglow');

//callback fires when board is initialized
piGlow(function() {
  //do something
});

```

## Usage

LEDs can be addressed individually:
```
//parameter sets the brightness:
piGlow.l_0_0 = 100; //sets LED 1 of leg 1 to a brightness of 100 (of 255)
piGlow.l_0_1 = 10; //sets LED 2 of leg 1 to a brightness of 10
...
piGlow.l_2_5 = 200; //sets LED 6 of leg 3 to a brightness of 200

//shorthand form:
piGlow.l_0_0; //sets LED 1 of leg 1 to a brightness of 255 (freakin bright...)
```

Complete legs can be adressed:
```
piGlow.leg_0 = 100; //sets all LEDs of leg 1 to a brightness of 100

//shorthand
piGlow.leg_0; //sets all LEDs of leg 1 to 255
```

Complete rings can be adressed:
```
piGlow.ring_0 = 100; //sets LED 1 of leg 1, LED 1 of leg 1 and LED 1 of leg 2 to 100

//shorthand
piGlow.ring_0; //sets LED 1 of leg 1, LED 1 of leg 1 and LED 1 of leg 2 to 255
```

Adress all LEDs:
```
piGlow.all = 100; //set all LEDs to 100

//shorthand
piGlow.all; //set all LEDs to 255

piGlow.reset; //set all LEDs to 0
```

Random:

```
piGlow.random = 0.5;

//shorthand
piGlow.random;
```
The propbability of lighting up is calculated via this formula (if not set): `(0.4 + Math.random() * 0.2);`.
The brightness is calculated via this formula: `parseInt(MAX_VALUE / 2 + (MAX_VALUE / 2 * Math.random()), 10)`


## Made with:
[node-i2c](https://github.com/kelly/node-i2c)
