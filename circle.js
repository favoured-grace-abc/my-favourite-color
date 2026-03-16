// Declare radius = 5 .
// Calculate and print:
// The area of the circle (hint: use Math.PI and the formula π * r * r )
// The circumference (hint: formula is 2 * π * r )
// Round both answers to 2 decimal places using .toFixed(2) .

let radius = 5;

let area = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;

console.log(`The area of the circle is: ${area.toFixed(2)}`);
console.log(`The circumference of the circle is: ${circumference.toFixed(2)}`);