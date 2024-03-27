//Q:76
function adds(x, y) {
    return x + y;
}
console.log(adds(37, 3));
//Q:77
function user(name) {
    if (name === void 0) { name = "Noname"; }
    console.log("Hello ".concat(name));
}
user("Shafique");
user("Zayan");
//Q:78
function declaretion(number) {
    return number * number;
}
var expression = function (number) {
    return number * number;
};
console.log(declaretion(5));
console.log(expression(5));
