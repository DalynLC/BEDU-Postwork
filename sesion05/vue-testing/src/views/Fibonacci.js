/*
const memo = {};

const fibonacci = (n) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (memo[n] === 0) {
    return memo[n] = 0;
  }
  if (n === 1) {
    return memo[n] = 1;
  }
  return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = { fibonacci };
*/

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
module.exports = { fibonacci };
