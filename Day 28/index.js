//Q:82
function str(a) {
    return a.length;
}
console.log(str("hello my name is shafique ur rehman"));
//Q:83
function con(a) {
    var low = a.toLowerCase();
    var upr = a.toUpperCase();
    console.log("Lower Case: ".concat(low, " Upper Case: ").concat(upr));
}
con("Governor Sindh Kamran Khan Tessori");
//Q:84
function rep(s) {
    return s.replace(/javascript/g, "typescript");
}
console.log(rep("I love javascript."));
