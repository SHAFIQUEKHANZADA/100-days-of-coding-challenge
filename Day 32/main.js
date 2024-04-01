//Q:94
var city = ['Totanto', 'Islamabad', 'Doha', 'Moscow'];
var capital = city.map(function (x) { return x.length; });
console.log(capital);
//Q:95
function num(arr) {
    return arr.filter(function (val) { return val > 10; });
}
var a = [1, 3, 5, 6, 8, 10, 34, 54, 67];
console.log(num(a));
//Q:96
var r = [12, 78, 4, 35];
var sum = r.reduce(function (x, y) { return x + y; }, 0);
console.log(sum);
