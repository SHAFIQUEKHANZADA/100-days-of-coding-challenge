//Q:121
for(let s = 1; s < 10; s++) {
    if(s === 5) {
        continue
    }
    console.log(s)
}
//Q:122
let count = 10
while(count > 0) {
    if(count === 5) {
        break
    }
    console.log(count)
    count--
}
//Q:123
function vowel(v: string): void {
    let checkV = "aeiouAEIOU"
    for(let vow of v) {
    if(checkV.includes(vow)) {
        console.log(`Vowel Found: ${vow}`);
        break
    }
    console.log(vow)
    }
}
vowel("Shafique")