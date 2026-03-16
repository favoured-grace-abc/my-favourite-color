// Declare a variable year = 2024 . A year is a leap year if:
// It is divisible by 4 and not divisible by 100, or
// It is divisible by 400
// Write conditions to print whether the year is a leap year or not.

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}: is a leap year.`);
} else {
  console.log(`${year}: is not a leap year.`);
}

 year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}: is a leap year.`);
} else {
  console.log(`${year}: is not a leap year.`);

}

 year = 1900;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}: is a leap year.`);
} else {
  console.log(`${year}: is not a leap year.`);
}

 year = 2100;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}: is a leap year.`);
} else {
  console.log(`${year}: is not a leap year.`);

}

 year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}: is a leap year.`);
} else {
  console.log(`${year}: is not a leap year.`);
}
