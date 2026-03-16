// Use a for loop to print numbers from 1 to 30. If the number is divisible by 3, print "Fizz"
// instead of the number. Otherwise, print the number.
// Expected output (first 7 lines):
// 1
// 2
// Fizz
// 4
// 5
// Fizz
// 7


for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}