//Q:112
var keyMap = new Map();
keyMap.set("Pakistan", "Islamabad");
keyMap.set("Russia", "Mossco");
keyMap.set("Italy", "Rome");
console.log(keyMap);
//Q:113
var check = new Map();
check.set("Iran", "Tehran");
check.set("canada", "Toranto");
check.set("UK", "London");
function chlog(check) {
    if (check.has("canada")) {
        console.log("The capital of Canada is ".concat(check.get("canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
chlog(check);
//Q:114
var stdData = new Map();
stdData.set(12, "talha");
stdData.set(13, "zayan");
stdData.set(14, "hamdan");
stdData.forEach(function (names, ID) {
    console.log("Student name: ".concat(names, ", Student ID: ").concat(ID));
});
