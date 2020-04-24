const memo = {};

export default function memoize(func, prefix) {
  const slice = Array.prototype.slice;

  return function() {
    const args = slice.call(arguments);
    let key = JSON.stringify(args);

    if (prefix) {
      key = `f(${prefix}):` + key;
    }

    if (key in memo) {
      return memo[key];
    }
    else {
      return (memo[key] = func.apply(this, args));
    }
  };
}
