//Q:91
let fvtFruit = ["Apple", "Banana", "Watermelon"]
fvtFruit.push("Orange")
console.log(fvtFruit);

//Q:92
function remove<T>(a: T[]): T | undefined { //Genric function
    return a.pop();
}
let car: string[] = ['corolla', 'civic', 'sonata']
console.log(remove(car));
console.log(car);

//Q:93
function ind (x: string[]): void {
    let a = x.indexOf("banana") 
    if (a !== -1) x[a] = "mango"
}
let x = ["apple", "banana", "cherry", "kiwi"]
ind(x)
console.log(x);
