function make_add(valtoadd) {
    return function (number) {
        return number + valtoadd;
    };
}
var add5 = make_add(5);
console.log(add5(10));
