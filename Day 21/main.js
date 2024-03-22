//Q:61
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["bike"] = 1] = "bike";
    vehicles[vehicles["truck"] = 2] = "truck";
    vehicles[vehicles["jeep"] = 3] = "jeep";
})(vehicles || (vehicles = {}));
console.log(vehicles.bike);
var student_data = {
    name: "Shafique",
    age: 21,
    courses: ["GenAI", "Blockchain", "Metaverse"]
};
console.log(student_data);
var circle = {
    kind: "circle",
    radius: 6
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
