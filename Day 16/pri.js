var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [1000, 3000];
var price2 = [1500, 4500];
var combine = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (a, b) { return a - b; });
console.log(combine);
