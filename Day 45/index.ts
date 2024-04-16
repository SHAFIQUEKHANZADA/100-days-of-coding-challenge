//Q:133
let data = {
    name: "shafique",
    age: 21,
    email: "kzshafique77@gamil.com",
    isStudent: true
}
let x = JSON.stringify(data)
console.log(x)

//Q:134
let y = JSON.parse(x)
console.log(y)

//Q:135
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
}
const z = JSON.stringify(person, null, 2)
console.log(z)
