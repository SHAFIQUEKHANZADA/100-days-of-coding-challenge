//!Q:97
// function getData(): string{
//     let a = new Date()
//     let day = String(a.getDate()).padStart(2, '0')
//     let month = String(a.getMonth() + 1).padStart(2, '0')
//     let year = String(a.getFullYear())
//     return `${day}-${month}-${year}`
// }
// console.log(getData());
//!Q:98
//  function until(): number {
//     let b = new Date()
//     let newYear = new Date(b.getFullYear()+ 1, 0, 1) 
//     let minus = newYear.getTime() - b.getTime()
//     let day = Math.ceil(minus / (1000 * 60 * 60 * 24))
//     return day
//  }
//  console.log(until());
// //!Q:99
function checkBirth(month, day) {
    var c = new Date();
    var year = c.getFullYear();
    var birth = new Date(year, month - 1, day);
    if (birth < c) {
        birth.setFullYear(year + 1);
    }
    return birth;
}
var next = checkBirth(5, 19);
console.log(next.toLocaleDateString());
