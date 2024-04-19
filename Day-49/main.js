//Q:145
function execute(call, a1, a2) {
    call(a1, a2);
}
var check = function (a, b) {
    console.log(a + b);
};
execute(check, 12, 34);
//Q:146
var array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
var f = array.filter(function (x) { return x >= 30; });
console.log(f);
//Q:147
function fetching(callbacks) {
    var er = new Error("You have an error");
    var data = "Governor Initiative of AI web 3.0 ans Meta verse";
    if (Math.random() > 1) {
        callbacks(null, data);
    }
    else {
        callbacks(er);
    }
}
fetching(function (error, data) {
    if (error) {
        console.log(console.error(error.message));
    }
    else {
        console.log(data);
    }
});
