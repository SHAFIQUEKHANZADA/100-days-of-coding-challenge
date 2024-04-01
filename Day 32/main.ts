//Q:94
let city = ['Totanto', 'Islamabad', 'Doha', 'Moscow']
let capital = city.map(x => x.length)
console.log(capital);

//Q:95
function num (arr : number[]): number[] {
 return arr.filter(val => val > 10)
}
let a = [1,3,5,6,8,10,34,54,67]
console.log(num(a));

//Q:96
let r = [12,78,4,35]
let sum = r.reduce((x,y) => x + y, 0) 
console.log(sum);
