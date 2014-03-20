var exec = require('child_process').exec;
var path = require('path');

var expect = require('chai').expect;

describe('piglow bin', function () {

    it('should return no error when in mockedjson mode', function (done) {
        runCommand(['--mockedjson --reset'], function (error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.equal('{"l_0_0":0,"l_0_1":0,"l_0_2":0,"l_0_3":0,"l_0_4":0,"l_0_5":0,"l_1_0":0,"l_1_1":0,"l_1_2":0,"l_1_3":0,"l_1_4":0,"l_1_5":0,"l_2_0":0,"l_2_1":0,"l_2_2":0,"l_2_3":0,"l_2_4":0,"l_2_5":0}\n');
            done();
        });
    });

    it('should return an error on unknown command', function (done) {
        runCommand(['--mockedjson --foo'], function (error, stdout, stderror) {
            expect(error).not.to.be.null;
            expect(error.message).to.match(/Unknown parameter:  foo/);
            done();
        });
    });

    it('should return an error wen no parameter has been set', function (done) {
        runCommand(['--mockedjson'], function (error, stdout, stderror) {
            expect(error).not.to.be.null;
            expect(stderror).to.equal('No parameter has been set\n');
            done();
        });
    });

    it('should show the help', function (done) {
        runCommand(['--help'], function (error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/Usage: piglow \[options\] \[arguments\]/);
            done();
        });
    });

    it('should set the values according to parameters', function (done) {
        runCommand(['--mockedjson --l_0_0 100'], function (error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.equal('{"l_0_0":100,"l_0_1":0,"l_0_2":0,"l_0_3":0,"l_0_4":0,"l_0_5":0,"l_1_0":0,"l_1_1":0,"l_1_2":0,"l_1_3":0,"l_1_4":0,"l_1_5":0,"l_2_0":0,"l_2_1":0,"l_2_2":0,"l_2_3":0,"l_2_4":0,"l_2_5":0}\n');
            done();
        });
    });

    it('should set the values according to parameters, shorthand', function (done) {
        runCommand(['--mockedjson --l_0_0'], function (error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.equal('{"l_0_0":255,"l_0_1":0,"l_0_2":0,"l_0_3":0,"l_0_4":0,"l_0_5":0,"l_1_0":0,"l_1_1":0,"l_1_2":0,"l_1_3":0,"l_1_4":0,"l_1_5":0,"l_2_0":0,"l_2_1":0,"l_2_2":0,"l_2_3":0,"l_2_4":0,"l_2_5":0}\n');
            done();
        });
    });

    it('should set multiple values', function (done) {
        runCommand(['--mockedjson --l_0_0 100 --ring_1'], function (error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.equal('{"l_0_0":100,"l_0_1":255,"l_0_2":0,"l_0_3":0,"l_0_4":0,"l_0_5":0,"l_1_0":0,"l_1_1":255,"l_1_2":0,"l_1_3":0,"l_1_4":0,"l_1_5":0,"l_2_0":0,"l_2_1":255,"l_2_2":0,"l_2_3":0,"l_2_4":0,"l_2_5":0}\n');
            done();
        });
    });

});

function runCommand(params, callback) {
    var command = 'node piglow.js ' + params.join(' ');

    exec(command, {cwd: path.join(__dirname, '../bin')}, callback);
}

