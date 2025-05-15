//STEP 1. Absolute value
let num1 = prompt("Enter a number:");
console.log(Math.abs(num1));

//STEP 2. Round up
let float1 = parseFloat(prompt("Enter a decimal number:"));
console.log(Math.ceil(float1));

//STEP 3. Round down
let float2 = parseFloat(prompt("Enter another decimal number:"));
console.log(Math.floor(float2));

//STEP 4. Largest and smallest from comma-separated input
let nums = prompt("Enter 5 numbers, separated by commas:");
let arr = nums.split(",").map(Number);
console.log("Max:", Math.max(...arr));
console.log("Min:", Math.min(...arr));

//STEP 5. Square root
let num2 = prompt("Enter a number to find its square root:");
console.log("Square root:", Math.sqrt(num2));
