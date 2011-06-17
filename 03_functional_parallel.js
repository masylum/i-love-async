function callback() {
  if (!--callback.count) console.log('DONE!');
}

function A() {
  console.log('A');
  callback();
}

function B() {
  console.log('B');
  callback();
}

function C() {
  console.log('C');
  callback();
}

callback.count++;
setTimeout(A, 100);

callback.count++;
setTimeout(B, 250);

callback.count++;
setTimeout(C, 10);
