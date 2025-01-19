function foo(x) {
  if (x == null) {
    return 0; //This will also return 0 if x is NaN
  }
  return x;
}
console.log(foo(NaN)); //Output 0
console.log(foo(null)); //Output 0