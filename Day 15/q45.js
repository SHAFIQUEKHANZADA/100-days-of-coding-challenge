//Q:45
function make_car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "corolla", ["color", "red"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
