//Q:106
function leap(year:number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
console.log(leap(2020))
console.log(leap(1900))
console.log(leap(2005))

//Q:107
function check(num: number): boolean {
    return num % 2 === 0 && num % 3 === 0
}
console.log(check(18))
console.log(check(21))
console.log(check(11))

//Q:108
function com (x:string, y:string): boolean {
    return x.toUpperCase() === y.toUpperCase()
}
console.log(com("daniyal nagori", "Daniyal Nagori"))
console.log(com("ameen", "amin"))

