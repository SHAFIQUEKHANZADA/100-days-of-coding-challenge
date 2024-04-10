//Q:121
for (var s = 1; s < 10; s++) {
    if (s === 5) {
        continue;
    }
    console.log(s);
}
//Q:122
var count = 10;
while (count > 0) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count--;
}
//Q:123
function vowel(v) {
    var checkV = "aeiouAEIOU";
    for (var _i = 0, v_1 = v; _i < v_1.length; _i++) {
        var vow = v_1[_i];
        if (checkV.includes(vow)) {
            console.log("Vowel Found: ".concat(vow));
            break;
        }
        console.log(vow);
    }
}
vowel("Shafique");
