//Q:136
for (var i = 1; i <= 5; i++) {
    console.log("Iteration ".concat(i, ", i value:, i"));
}
//Q:137
try {
    throw new Error("Time zaya ho raha h or kch nh");
}
catch (error) {
    console.log(error.message);
}
//Q:138
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
