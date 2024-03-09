//Q:23 Conditional Tests
var isGovorner = "kamran khan tessori";
console.log("If the governor of sindh is Mr.kamran I predict it is true");
console.log(isGovorner === "kamran khan tessori");
console.log("if kamran khan tessori is not a governor, I predict is false");
console.log(isGovorner !== "kamran khan tessori");
//Q:24 More conditional test
var car = 'subaru';
var numberA = 15;
var numberB = 10;
var fruits = ['apple', 'orange', 'banana'];
// Tests for equality and inequality with strings
console.log("Test 1: Is car equal to 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log("Test 2: Is car equal to 'honda'? I predict False.");
console.log(car === 'honda');
// Tests using the lower case function
console.log("Test 3: Is car in lowercase equal to 'subaru'? I predict true.");
console.log(car.toLowerCase() === 'subaru');
console.log("Test 4: Is car in lowercase equal to 'SUBARU'? I predict false.");
console.log(car.toLowerCase() === 'SUBARU');
// Numerical tests
console.log("Test 5: Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);
console.log("Test 6: Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);
// Tests using "and" and "or" operators
console.log("Test 7: Is car equal to 'subaru' and numberA greater than 5? I predict True.");
console.log(car === 'subaru' && numberA > 5);
console.log("Test 8: Is car equal to 'subaru' or numberB greater than 10? I predict False.");
console.log(car !== 'subaru' || numberB > 10);
// Test whether an item is in an array
console.log("Test 9: Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
// Test whether an item is not in an array
console.log("Test 10: Is 'grape' is in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
