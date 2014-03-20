#!/usr/bin/env node

var argv = require('optimist').argv;
var piGlow = require('../');

delete argv._;
delete argv['$0'];

if (argv.h || argv.help) {
    showHelp();
    process.exit(0);
}

if (argv.v || argv.version) {
    showVersion();
    process.exit(0);
}

createInterface(argv, function (error, piGlowInterface) {
    if (error) {
        console.error('could not create interface: ', error.message);
        process.exit(1);
    }

    if (Object.keys(argv).length === 0) {
        console.error('No parameter has been set');
        process.exit(1);
    }

    piGlowInterface.startTransaction();

    Object.keys(argv).forEach(function (key) {
        var value = argv[key];

        if (Object.hasOwnProperty.call(piGlowInterface, key)) {
            if (value === true) {
                //shorthand versions
                piGlowInterface[key];
            } else {
                piGlowInterface[key] = value;
            }
        } else {
            console.error('Unknown parameter: ', key);
            process.exit(1);
        }
    });

    piGlowInterface.commitTransaction();
});

function createInterface(options, callback) {
    if (options.mocked === true || options.m === true) {
        delete options.mocked;
        delete options.m;

        setImmediate(function () {
            callback(null, piGlow.piGlowInterface(new piGlow.BackendMockPrettyPrint()));
        });
    } else if (options.mockedjson === true) {
        delete options.mockedjson;

        setImmediate(function () {
            callback(null, piGlow.piGlowInterface(new piGlow.BackendMock()));
        });
    } else {
        piGlow(callback);
    }
}

function showVersion() {
    console.log(require('../package.json').version);
}

function showHelp() {
    var help = [
        'Usage: piglow [options] [arguments]',
        '',
        'Options:',
        '  -m, --mocked: sets up a mocking backend, script can be executed on non raspi environment',
        '  -h, --help:   this help',
        '',
        'Arguments:',
        '  Single LEDs:',
        '    --l_0_0 100:     lights up the first led of the first leg',
        '    --l_0_0:         shorthand version, lights up first led of first leg at max brightness',
        '    available range: l_0_0 - l_0_5, l_1_0 - l_1_5, l_2_0 - l_2_5',
        '',
        '  Legs:',
        '    --leg_0 100:     lights up the first leg at brightness 100',
        '    --leg_0:         lights up the first leg at max brightness',
        '    available range: leg_0 - leg_2',
        '',
        '  Rings:',
        '    --ring_0 100:    lights up the outer ring a brightness 100',
        '    --leg_0:         lights up the outer ring at max brightness',
        '    available range: ring_0 - ring_5',
        '',
        '  Example:',
        '    piglow --mocked --ring_0 100 --leg_1 --l_2_5 10',
        '',
        ''
    ];

    console.log(help.join('\n'));
}