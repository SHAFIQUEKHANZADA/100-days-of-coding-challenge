//Q:61
enum vehicles {
   car, bike, truck, jeep
}
console.log(vehicles.bike);

//Q:62 Interface Object
interface student {
    name: string
    age: number
    courses: string[]
}
let student_data: student = {
    name: "Shafique",
    age: 21,
    courses: ["GenAI", "Blockchain", "Metaverse"]
}
console.log(student_data);

//Q:63 type alias
type shape = {
    kind : "circle" | "rectangle"
    radius? : number
    width? : number
    height? : number
}
let circle: shape = {
    kind: "circle",
    radius: 6
}
let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height: 20
}
console.log(circle);
console.log(rectangle);

