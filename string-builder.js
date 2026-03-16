// Declare a variable char = "*" and count = 6 .
// Use a for loop to build a single string that repeats the character that many times, then
// print it.
// Expected output:
// ******
// Then change char to "-" and count to 10 and run again.


let char = "*";
let count = 6;
let result = "";

for (let i = 0; i < count; i++) {
  result += char;
}

console.log(result);

char = "-";
count = 10; 
result = "";
for (let i = 0; i < count; i++) {
  result += char;
}
console.log(result);
