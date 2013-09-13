var exec = require('child_process').exec;

var interface = require('../');

interface(start);

function start(error, piGlow) {
  setInterval(function() {
    getUptime(function(error, result) {
      if(error) {
        return; 
      }
      
      piGlow.reset;
      map(result, piGlow);
    });
  }, 5000);
}

function map(load, piGlow) {
  if(load[0] > 0.1) {
    piGlow.l_0_5 = 10;
  }
  if(load[0] > 0.3) {
    piGlow.l_0_4 = 10;
  } 
  if(load[0] > 0.45) {
    piGlow.l_0_3 = 10;
  } 
  if(load[0] > 0.6) {
    piGlow.l_0_2 = 10;
  } 
  if(load[0] > 0.75) {
    piGlow.l_0_1 = 10;
  } 
  if(load[0] > 0.85) {
    piGlow.l_0_0 = 10;
  } 

  if(load[1] > 0.1) {
    piGlow.l_1_5 = 10;                                                                                                                          
  } 
  if(load[1] > 0.3) {
    piGlow.l_1_4 = 10;                                                                                                                          
  } 
  if(load[1] > 0.45) {
    piGlow.l_1_3 = 10;                                                                                                                          
  } 
  if(load[1] > 0.6) {
    piGlow.l_1_2 = 10;                                                                                                                          
  } 
  if(load[1] > 0.75) {
    piGlow.l_1_1 = 10;                                                                                                                          
  } 
  if(load[1] > 0.85) {
    piGlow.l_1_0 = 10;
  } 

  if(load[2] > 0.1) {
    piGlow.l_2_5 = 10;                                                                                                                          
  } 
  if(load[2] > 0.3) {
    piGlow.l_2_4 = 10;                                                                                                                          
  } 
  if(load[2] > 0.45) {
    piGlow.l_2_3 = 10;                                                                                                                          
  } 
  if(load[2] > 0.6) {
    piGlow.l_2_2 = 10;                                                                                                                          
  } 
  if(load[2] > 0.75) {
    piGlow.l_2_1 = 10;                                                                                                                          
  } 
  if(load[2] > 0.85) {
    piGlow.l_2_0 = 10;
  } 
}

function getUptime(callback) {

  exec('uptime', function (error, stdout, stderr) {
    if (error) {
        return callback(error, null);
    }

    var matches = stdout.match(/average: ([0-9]+\.[0-9]+), ([0-9]+\.[0-9]+), ([0-9]+\.[0-9]+)/);

    if(matches) {
        callback(null, [matches[1], matches[2], matches[3]]);
    } else {
        callback(null, null);
    }
  });

}
