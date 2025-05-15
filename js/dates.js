//STEP 1. Days in a month
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(2, 2024)); // For example: Feb 2024

//STEP 2. Month name from date
let date1 = new Date();
let monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
console.log(monthNames[date1.getMonth()]);

//STEP 3. Is it a weekend?
let date2 = new Date();
let day2 = date2.getDay();
console.log((day2 === 0 || day2 === 6) ? "Weekend" : "Weekday");

//STEP 4. Yesterday’s day
let date3 = new Date();
date3.setDate(date3.getDate() - 1);
console.log("Yesterday was:", date3.toLocaleString('default', { weekday: 'long' }));

//STEP 5. First letter of today’s day
let today = new Date();
let dayLetter = today.toLocaleString('default', { weekday: 'long' }).charAt(0);
console.log("First letter of today is:", dayLetter);
