"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculateFibonacciSeries = (position) => {
  const fibonacci = (n, memo = {}) =>
    n <= 1
      ? n
      : memo[n] || (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  return fibonacci(position);
};

rl.question("Enter the position in the Fibonacci sequence: ", (position) => {
  position = Number(position);
  if (position >= 0) {
    const fibonacciValue = calculateFibonacciSeries(position);
    console.log(`Fibonacci value at position ${position}: ${fibonacciValue}`);
  } else {
    console.log("Please enter a valid non-negative integer.");
  }
  rl.close();
});
