// Doesn't work
var Step = require('step');

Step(
  function parallel() {
    var self = this;
    setTimeout(function A() {
      console.log('A');
      self.parallel();
    }, 100);
    setTimeout(function B() {
      console.log('B');
      self.parallel();
    }, 250);
    setTimeout(function C() {
      console.log('C');
      self.parallel();
    }, 10);
  }
, function callback() {
    console.log('DONE');
  }
);
