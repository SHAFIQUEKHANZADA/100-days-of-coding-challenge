//Q:70
function use_let () {
    for(let a = 1; a <= 5; a++) {
        console.log(a);
        
    }
}
use_let()

//Q:71
let re_check = 15
re_check = 30
console.log(re_check);
//catch error
const check_error = "Zia khan"
try {
    check_error = "Daniyal nagori"
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");  
}

//Q:72
let check_let = "My name is shafique ur rehman"
const check_const = "My father name is muhamad yaqoob"
console.log(check_let);
console.log(check_const);

try {
    console.log(check_let);
} catch (error) {
    console.log("`Let`is not accessible outside the block."); 
}

try {
    console.log(check_const);
} catch (error) {
    console.log("`const` is not accessible outside the block.");
}
