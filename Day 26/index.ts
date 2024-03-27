//Q:76
function adds (x:number, y: number): number {
 return x + y
}
console.log(adds(37, 3));

//Q:77
function user (name:string = "Noname") {
    console.log(`Hello ${name}`);
}
user("Shafique")
user("Zayan")

//Q:78
function  declaretion (number: number):number {
    return number * number
}
const expression = function (number: number): number {
   return number * number
}
 console.log(declaretion(5));
 console.log(expression(5));
 
 