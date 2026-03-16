// Declare a variable fullName = "emeka chukwu okafor" .
// Print the name with every word capitalized (title case). Use .split() , a for loop, and
// string methods to build the result.
// Expected output:
// Emeka Chukwu Okafor

let fullName = "amarachi grace nathan";
let words = fullName.split(" ");
let names = "";

for (i of words){
    i = i[0].toUpperCase() + i.slice(1).toLowerCase()
    names = `${names} ${i}`;
    }

 console.log(names);





 


 