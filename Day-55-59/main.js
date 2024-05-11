//!Day 55
// let d = prompt("What is your name", "shafique");
// alert(`My name is ${d}`)
// console.log(d);

// let s = confirm("Are you student at GIAIC ?")
// alert(d)

//!Day 56

//?Type Conversions
//*string Conversions
// let val = true;
// alert(typeof val);

// val = String(val)
// alert(typeof val)

//?Numeric Conversion
// alert("5" * "7")

//?Boolean Conversion
// //The conversion rule:
// //Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// //Other values become true.

// alert(Boolean(1)) //true
// alert(Boolean(0)) //false
// alert(Boolean(null)) //false

//? Basic operators, maths

//!unary
// let ura = 5
// ura = -5
// alert(ura)

//!Binary
// let one = 10, two = 5
// alert(one * two)

//!Math
//* Remainder %
// console.log(15 % 4) //3
//*Exponentiation **
// console.log(3 ** 5) //3*3*3*3*3 = 243
//* String concatenation with binary +
// let a  = "Hello " + "World"; //"Hello World"
// alert(a);
// let b = "2" + 3;
// alert(b); 23
// alert("4" + 5 + 5); //455

//*Numeric conversion, unary +
// No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let a = "5";
// let b = "8";
// alert(Number(a) + Number(b));

//! Operator precedence
// alert(2 * 4 + 5);

// !Chaining assignments
// Another interesting feature is the ability to chain assignments:
// let x,y,z;
// x = y = z = 5 * 5 + 2
// alert(x)
// alert(z)
//!Modify-in-place & Increment/decrement
// let a = 5
// a = a + 2 //7
// a = a * 2 //14
// a++ //15
// alert(a); //15

// let r = 5;
// r++ 
// ++r
// --r
// alert(r); //6

// let count = 5;
// alert(2 * ++count); //12

// let c = 5;
// c--;
// alert(3 * c); //12

//?Bitwise operators
// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

//!Day 57
//* Comparisons
// We know many comparison operators from maths.

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
// In this article we’ll learn more about different types of comparisons, how JavaScript makes them, including important peculiarities.

// At the end you’ll find a good recipe to avoid “JavaScript quirks”-related issues.
////boolean type
// alert(5 > 4);//true
// alert(10 < 4);//false

////string
// alert("Shafique" > "Zayan");//false
// alert("ABC" > "AB");//true

// alert("4" > 2);//true

// alert(null === undefined); //false
// alert(null == undefined); //true

// let a = prompt("What is your name ?");
// if(a === "Shafique") {
//     console.log("Correct");
// } else {
//     console.log("Incorrect");
// }

// let age = prompt("How old are you ?");
// if(age >= 13) {
//     console.log("Teenager");
// } else if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Dead");
// }

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// let a = prompt("Who is the founder of pakistan ?", "");
// (a == "M Ali Jinnah") ? 
// alert('Right!') : alert('Wrong.');

//!Day 58

//* Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
//?OR
// alert( true  || true );  // true
// alert( false || true );  // true
// alert( true  || false ); // true
// alert( false || false ); // false

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// let fname = "Shafique";
// let lname = "Khanzada";
// let nickName = "SRK";

// alert(fname || lname || nickName);

//?And&&
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// let time = 12;
// let mint = 30;
// let ampm = "PM"

// if(time == 12 && mint == 30 && ampm == "AM") {
//     alert("Time is 12:30am")
// } else if (time == 12 && mint == 30 && ampm == "PM") {
//     alert("Time is 12:20pm")
// }

//? !(NOT)
// let a = 5;
// alert(a != 5); //false

// let b = 45;
// alert(b != 50); //true

//* Nullish coalescing operator '??'
// let user =  null;

// alert(user ?? "Anonymous");

//!Day 59
//* Loops: while and for

//? The “while” loop
// let i = 0;
// while (i < 3) { 
//    console.log(i);;
//   i++;
// }

//?The “do…while” loop
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

//?The “for” loop
// for(let u = 1; u <= 5; u++) {
//     alert(u);
// }
//*break
// for(let u = 1; u <= 5; u++) {
//     if(u == 5) 
//     break;
//     console.log(u);
// }

//*countinue
// for(let u = 1; u <= 10; u++) {
//     if(u == 5) 
//     continue;
//     console.log(u);
// }

//!The "switch" statement
// let checkName = prompt("Enter your name ?");
// switch (checkName) {
//     case "shafique":
//         console.log("You are welcome mr/s shafique")
//         break;
//     case "zayan":
//         console.log("You are welcome mr/s zayan");
//         break;
//     default:
//         break;
// }