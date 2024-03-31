//!Q:88
function round (x: number): number {
   return Math.round(x)
}
console.log(round(5.7));
console.log(round(9.1));
console.log(round(2.5));

//!Q:89
function pas (z: string): number {
    return parseFloat(z)
}
console.log(pas("123.5"));
console.log(pas("65"));

//!Q:90
function nan (a: any): boolean {
    return isNaN(a)
}
console.log(nan("shafique"));
console.log(nan(7564));

