var count = 3;

function callback() {
  count--;
  if (count === 0) {
    console.log('DONE!');
  }
}

setTimeout(function A() {
  console.log('A');
  callback();
}, 100);

setTimeout(function B() {
  console.log('B');
  callback();
}, 250);

setTimeout(function C() {
  console.log('C');
  callback();
}, 10);
