//Q:142
var pro = new Promise(function (accept, rejected) {
    console.log("Promise pendding...");
    setTimeout(function () {
        console.log("Hello World!");
    }, 2000);
});
pro.then(function (x) { return console.log(x); });
//Q:143
var check = new Promise(function (a, r) {
    setTimeout(function () {
        var shafique = true;
        if (shafique) {
            console.log("Shafique is the student of GIAIC");
            return a(shafique);
        }
        else {
            console.log("Error");
            return r(shafique);
        }
    }, 4000);
});
check.then(function (a) { return console.log(a); }).catch(function (err) { return console.log("You have an Error"); });
//Q:144
var pro1 = Promise.resolve(5);
var pro2 = 30;
var pro3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([pro1, pro2, pro3]).then(function (val) { console.log(val); });
