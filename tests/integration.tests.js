var exec = require('child_process').exec;
var path = require('path');

var expect = require('chai').expect;

describe('piglow bin', function() {

    it('should return error', function(done) {
        runCommand([], function(error, stdout, stderror) {
            expect(error).not.to.be.null;
            expect(error.message).to.match(/Failed to set address/);
            done();
        });
    });

    it('should return no error when in mocked mode', function(done) {
        runCommand(['--mocked'], function(error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/);
            done();
        });
    });

    it('should return an error on unknown command', function(done) {
        runCommand(['--mocked --foo'], function(error, stdout, stderror) {
            expect(error).not.to.be.null;
            expect(error.message).to.match(/Unknown parameter:  foo/);
            done();
        });
    });

    it('should show the help', function(done) {
        runCommand(['--help'], function(error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/Usage: piglow \[options\] \[arguments\]/);
            done();
        });
    });

    it('should set the values according to parameters', function(done) {
        runCommand(['--mocked --l_0_0 100'], function(error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/);
            done();
        });
    });

    it('should set the values according to parameters, shorthand', function(done) {
        runCommand(['--mocked --l_0_0'], function(error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/);
            done();
        });
    });

    it('should set multiple values', function(done) {
        runCommand(['--mocked --l_0_0 100 --ring_1'], function(error, stdout, stderror) {
            expect(error).to.be.null;
            expect(stdout).to.match(/8, 255, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0/);
            done();
        });
    });

});

function runCommand(params, callback) {
    var command = 'node piglow.js ' + params.join(' ');

    exec(command, {cwd: path.join(__dirname, '../bin')}, callback);
}

