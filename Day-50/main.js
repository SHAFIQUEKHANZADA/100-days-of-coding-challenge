//Q:148
setTimeout(function () {
    console.log("I love kamran tessori");
}, 5000);
//Q:149
console.log("First");
setTimeout(function () {
    console.log("Second");
}, 0);
console.log("Third");
//Q:150
console.log("Before synchronous operation");
for (var i = 0; i < 10; i++) {
    console.log("synchronous operation");
}
console.log("After synchronous operation");
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("asynchronous operation");
}, 1000);
console.log("After asynchronous operation");
