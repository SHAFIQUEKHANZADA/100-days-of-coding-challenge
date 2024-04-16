//Q:133
var data = {
    name: "shafique",
    age: 21,
    email: "kzshafique77@gamil.com",
    isStudent: true
};
var x = JSON.stringify(data);
console.log(x);
//Q:134
var y = JSON.parse(x);
console.log(y);
//Q:135
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
var z = JSON.stringify(person, null, 2);
console.log(z);
