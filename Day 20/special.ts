function make_add (valtoadd: number): (number) => number{
    return function (number: number): number {
        return number + valtoadd
    }
}
let add5 = make_add(5)
console.log(add5(10));
