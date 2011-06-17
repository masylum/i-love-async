var Chainer = function (fn) {
  (Chainer.functions = Chainer.functions || []).push(fn);

  return function next() {
    fn['arguments'] = arguments;
    fn.back = true;
    (function run() {
      if (Chainer.functions.length && Chainer.functions[0].back) {
        var el = Chainer.functions.shift();
        el.apply(el, el['arguments']);
        run();
      }
    }());
  };
};

setTimeout(Chainer(function A() {
  console.log('A');
}), 100);

setTimeout(Chainer(function B() {
  console.log('B');
}), 250);

setTimeout(Chainer(function C() {
  console.log('C');
}), 10);
