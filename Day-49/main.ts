//Q:145
function execute(call: (a1:number, a2: number)=> void,
a1: number,
a2: number
): void {
call(a1, a2)
}
const check = (a: number, b: number) => {
    console.log(a + b)
}
execute(check, 12, 34)

//Q:146
let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
let f = array.filter((x) => x >= 30)
console.log(f)

//Q:147
function fetching(callbacks: (er: Error | null, data?: string)=> void): void {
    let er = new Error("You have an error")
    let data = "Governor Initiative of AI web 3.0 ans Meta verse"

    if (Math.random() > 1) {
        callbacks(null, data)
    } else {
        callbacks(er)
    }
}
fetching((error, data) => {
    if(error) {
        console.log( console.error(error.message))
    } else {
        console.log(data)
    }
})