function C() {
  console.log('C');
}

function B() {
  console.log('B');
  setTimeout(C, 10);
}

function A() {
  console.log('A');
  setTimeout(B, 250);
}

setTimeout(A, 100);
