 //!Q:97
function getData(): string{
    let a = new Date()
    let day = String(a.getDate()).padStart(2, '0')
    let month = String(a.getMonth() + 1).padStart(2, '0')
    let year = String(a.getFullYear())
    return `${day}-${month}-${year}`
}
console.log(getData());

 
//!Q:98
 function until(): number {
    let b = new Date()
    let newYear = new Date(b.getFullYear()+ 1, 0, 1) 
    let minus = newYear.getTime() - b.getTime()
    let day = Math.ceil(minus / (1000 * 60 * 60 * 24))
    return day
 }
 console.log(until());
 
 
// //!Q:99
function myBirthday(month: number, day: number): Date {
    let c = new Date()
    let year = c.getFullYear()
    let birth = new Date(year, month -1, day)
    if (birth < c) {
        birth.setFullYear(year +1)
    }
    return birth
}
let nextBirth = myBirthday(5, 19)
console.log("My birthday", nextBirth.toLocaleDateString());

