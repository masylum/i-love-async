var funk = require('funk')('parallel');

setTimeout(funk.add(function A() {
  console.log('A');
}), 100);

setTimeout(funk.add(function B() {
  console.log('B');
}), 250);

setTimeout(funk.add(function C() {
  console.log('C');
}), 10);

funk.run(function () {
  console.log('DONE!');
});
