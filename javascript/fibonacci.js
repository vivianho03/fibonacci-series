function fibonacci(num) {
  return num < 1 ? 0
       : num <= 2 ? 1
       : fibonacci(num - 1) + fibonacci(num - 2)
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Write a function that accepts a number n
// and returns the nth number in the Fibonacci sequence

// 1, 1, 2, 3, 5, 8, 13 ...

//Non-recursive version

// function fib(n) {
//   if (n < 3){
//     return 1;
//   }
//   //two initial numbers
//   let previousNum = 1; //1
//   let currentNum = 1; //1

//   //i = 2
//   for (let i = 2; i < n; i++) {
//     const next = previousNum + currentNum; // 1 + 1
//     previousNum = currentNum; // 1
//     currentNum = next; // 2
//   }
//   return currentNum;
// }