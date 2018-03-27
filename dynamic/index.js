function recurFib(n) {
  if (n < 2) {
    return n;
  }
  else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

function dynFib(n) {
  var val = [];
  for (var i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  }
}

function iterateFib(n) {
  let last = 1
  let nextLast = 0
  let result = 0
  let temp = 0
  for(let i=2;i<=n;i++){
    result = last + nextLast
    nextLast = last
    last = result
  }
  return result
}

console.log(iterateFib(11))