function parallel(fn) {
  parallel.callback.count = parallel.callback.count + 1 || 1;
  return function () {
    fn.apply(fn, arguments);
    if (!--parallel.callback.count) parallel.callback();
  }
}

parallel.callback = function () {
  console.log('DONE!');
};

setTimeout(parallel(function A() {
  console.log('A');
}), 100);

setTimeout(parallel(function B() {
  console.log('B');
}), 250);

setTimeout(parallel(function C() {
  console.log('C');
}), 10);
