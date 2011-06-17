// spagetti
setTimeout(function A() {
  console.log('A');
  setTimeout(function B() {
    console.log('B');
    setTimeout(function C() {
      console.log('C');
    }, 10);
  }, 250);
}, 100);
