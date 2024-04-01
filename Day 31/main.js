//Q:91
var fvtFruit = ["Apple", "Banana", "Watermelon"];
fvtFruit.push("Orange");
console.log(fvtFruit);
//Q:92
function remove(a) {
    return a.pop();
}
var car = ['corolla', 'civic', 'sonata'];
console.log(remove(car));
console.log(car);
//Q:93
function ind(x) {
    var a = x.indexOf("banana");
    if (a !== -1)
        x[a] = "mango";
}
var x = ["apple", "banana", "cherry", "kiwi"];
ind(x);
console.log(x);
