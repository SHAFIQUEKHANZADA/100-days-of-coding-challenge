//Q:45
function make_car(manufacturer: string, model: string, ...option: [string, any] []): object {
    let car = {manufacturer, model};
    option.forEach(([key, value])
    => car [key] = value)
    return car
}
console.log(make_car("Toyota", "corolla", ["color", "red"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

