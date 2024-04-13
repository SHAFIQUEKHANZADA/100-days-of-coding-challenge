//Q:127
function basic (a: number, b: number): number {
    return a * b
}
const trad = function(a: number, b: number): number { return a * b}

let arrow = (x: number,y: number): number => {return x * y}

console.log(basic(5, 5))
console.log(trad(5,5))
console.log(arrow(5,5))

//Q:128
function multi(...x: number[]): number {
   return x.reduce((a, b) => a * b, 1)
}
console.log(multi(2,5,7));

//Q:129
let tradValue = {
    value: "Governor Initiative for AI WEB3.0 And Meta Verse",
    tradFunc: function () {
        console.log("Traditional function: ", this.value)
    },
    arr: () => {
        console.log("Arrow Function: ", this.value);
        
    }
}
tradValue.tradFunc()
tradValue.arr()