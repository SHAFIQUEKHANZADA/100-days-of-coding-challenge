//Q:82
function str (a: string): number {
    return a.length
}
console.log(str("hello my name is shafique ur rehman"));

//Q:83
function con (a: string) {
    let low = a.toLowerCase()
    let upr = a.toUpperCase()
    console.log(`Lower Case: ${low} Upper Case: ${upr}`);
    
}
con("Governor Sindh Kamran Khan Tessori");

//Q:84
function rep (s: string): string {
    return s.replace(/javascript/g, "typescript")
}
console.log(rep("I love javascript."));
