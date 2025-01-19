function foo(x) {
  if (x === null) {
    return 0;
  } else if (Number.isNaN(x)){
    return NaN;
  }
  return x;
}
console.log(foo(NaN)); //Output NaN
console.log(foo(null)); //Output 0