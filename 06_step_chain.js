var Step = require('step');

Step(
  function A() {
    console.log('A');
    setTimeout(this, 100);
  }
, function B() {
    console.log('B');
    setTimeout(this, 250);
  }
, function C() {
    console.log('C');
    setTimeout(this, 10);
  }
);
