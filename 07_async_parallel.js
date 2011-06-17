var async = require('async');

async.parallel([
  function A(cb) {
    setTimeout(function () {
      console.log('A');
      cb();
    }, 100);
  }
, function B(cb) {
    setTimeout(function () {
      console.log('B');
      cb();
    }, 250);
  }
, function C(cb) {
    setTimeout(function () {
      console.log('C');
      cb();
    }, 10);
  }
], function cb() {
  console.log('DONE!');
});
