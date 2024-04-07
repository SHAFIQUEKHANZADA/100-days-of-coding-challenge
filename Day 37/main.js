//Q:109
var curr = new Date();
if (curr.getHours() < 12) {
    console.log("Good Morning");
}
//Q:110
var score = 83;
if (score >= 80 && score <= 100) {
    console.log("A grade");
}
else if (score >= 70 && score < 80) {
    console.log("B grade");
}
else if (score >= 50 && score < 70) {
    console.log("C grade");
}
else if (score >= 35 && score < 50) {
    console.log("D grade");
}
else if (score >= 30 && score < 35) {
    console.log("F grade");
}
else {
    console.log("Failed");
}
//Q:111
function com(human) {
    if (human <= 13) {
        return "Child";
    }
    else if (human > 14 && human <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(com(8));
console.log(com(16));
console.log(com(31));
