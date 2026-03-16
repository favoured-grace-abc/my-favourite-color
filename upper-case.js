// Declare a variable fullName = "emeka chukwu okafor" .
// Print the name with every word capitalized (title case). Use .split() , a for loop, and
// string methods to build the result.
// Expected output:
// Emeka Chukwu Okafor

let fullName = "amarachi grace nathan";
let words = fullName.split(" ");
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  capitalizedWords.push(capitalizedWord);
}

let result = capitalizedWords.join(" ");
console.log(result);




 


 