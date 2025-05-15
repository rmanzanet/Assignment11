//STEP 1. Length of user's name
let name = prompt("Enter your name:");
alert("Length of your name is: " + name.length);

//STEP 2. Letter at a specific position
let name2 = prompt("Enter your name:");
let index = parseInt(prompt("Enter a number to find the character at that position:"));
alert("Character at position " + index + " is: " + name2.charAt(index));

//STEP 3. Full name concatenation
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
alert("Your name is: " + firstName + " " + lastName);

//STEP 4. Index of "fox"
let str1 = "The quick brown fox jumps over the lazy dog";
alert("Index of 'fox': " + str1.indexOf("fox"));

//STEP 5. Last index of "fox"
let str2 = "The quick brown fox jumps over the lazy fox";
alert("Last index of 'fox': " + str2.lastIndexOf("fox"));

//STEP 6. Replace "the lazy dog" with user name
let str3 = "The quick brown fox jumped over the lazy dog";
let fullName = prompt("Enter your full name:");
let result3 = str3.replace("the lazy dog", fullName);
alert(result3);

//STEP 7. Search for a user-entered word
let str4 = "The quick brown fox jumps over the lazy dog";
let word = prompt("Enter a word to search:");
let result4 = str4.search(word);
alert("Index of '" + word + "': " + result4);

//STEP 8. Extract "the lazy dog" and convert to uppercase
let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.substring(old_string.indexOf("the lazy dog"));
alert(new_string.toUpperCase());

//STEP 9. Trim and lowercase
let spacedString = "   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG   ";
alert(spacedString.trim().toLowerCase());

//STEP 10. Capitalize first letter
let lowerStr = "the quick brown fox jumps over the lazy dog";
let capStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
alert(capStr);