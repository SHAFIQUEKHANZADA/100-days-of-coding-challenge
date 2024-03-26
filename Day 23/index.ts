//Q:67
function sum (a: number, b: string): number {
    return a + Number(b)
}
console.log(sum(3, "10"));

//Q:68
function dec(x: number, y: number): number {
    return Math.round((x * y) * 100 / 100)
}
console.log(dec(0.3 , 4.2));

//Q:69
function div_rem (a1: number, a2: number): {q: number; r: number} {
    let q = Math.floor(a1 / a2);
    let r = a2 % a1;
    // Returns both in an object
    return { q, r };
}
console.log(div_rem(34, 6));


