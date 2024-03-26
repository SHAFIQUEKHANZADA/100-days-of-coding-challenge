//Q:70
function use_let() {
    for (var a = 1; a <= 5; a++) {
        console.log(a);
    }
}
use_let();
//Q:71
var re_check = 15;
re_check = 30;
console.log(re_check);
//catch error
var check_error = "Zia khan";
try {
    check_error = "Daniyal nagori";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
//Q:72
var check_let = "My name is shafique ur rehman";
var check_const = "My father name is muhamad yaqoob";
console.log(check_let);
console.log(check_const);
//block scope
try {
    console.log(check_let);
}
catch (error) {
    console.log("`Let`is not accessible outside the block.");
}
try {
    console.log(check_const);
}
catch (error) {
    console.log("`const` is not accessible outside the block.");
}
