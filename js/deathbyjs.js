//STEP 1. Alphabetical order
function alphabetOrder(str) {
  return str.split("").sort().join("");
}
console.log(alphabetOrder("webmaster")); // Output: "abeemrstw"

//STEP 2. Capitalize first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("the quick brown fox"));

//STEP 3. Count vowels
function countVowels(str) {
  let match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}
console.log(countVowels("The quick brown fox")); // Output: 5

//STEP 4. Generate random string ID
function generateID(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
console.log(generateID(8));

//STEP 5. Longest country name
function Longest_Country_Name(countryList) {
  return countryList.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
