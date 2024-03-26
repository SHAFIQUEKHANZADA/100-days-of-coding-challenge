//Q:67
function sum(a, b) {
    return a + Number(b);
}
console.log(sum(3, "10"));
//Q:68
function dec(x, y) {
    return Math.round((x * y) * 100 / 100);
}
console.log(dec(0.3, 4.2));
//Q:69
function div_rem(a1, a2) {
    var q = Math.floor(a1 / a2);
    var r = a2 % a1;
    // Returns both in an object
    return { q: q, r: r };
}
console.log(div_rem(34, 6));
