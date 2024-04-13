var _this = this;
//Q:127
function basic(a, b) {
    return a * b;
}
var trad = function (a, b) { return a * b; };
var arrow = function (x, y) { return x * y; };
console.log(basic(5, 5));
console.log(trad(5, 5));
console.log(arrow(5, 5));
//Q:128
function multi() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x.reduce(function (a, b) { return a * b; }, 1);
}
console.log(multi(2, 5, 7));
//Q:129
var tradValue = {
    value: "Governor Initiative for AI WEB3.0 And Meta Verse",
    tradFunc: function () {
        console.log("Traditional function: ", this.value);
    },
    arr: function () {
        console.log("Arrow Function: ", _this.value);
    }
};
tradValue.tradFunc();
tradValue.arr();
