// Use a for loop that goes from 1 to 10. On each iteration, print the current number and the
// running total so far.
// Expected output:
// Number: 1 | Running total: 1
// Number: 2 | Running total: 3
// Number: 3 | Running total: 6
// ...
// Number: 10 | Running total: 55

let runningTotal = 0;
for (let i = 1; i <= 10; i++) {
  runningTotal += i;
  console.log(`Number: ${i} | Running total: ${runningTotal}`);
}