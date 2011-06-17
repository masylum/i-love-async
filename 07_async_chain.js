var async = require('async');

async.series([
  function A(cb) {
    console.log('A');
    setTimeout(cb, 100);
  }
, function B(cb) {
    console.log('B');
    setTimeout(cb, 250);
  }
, function C(cb) {
    console.log('C');
    setTimeout(cb, 10);
  }
]);
