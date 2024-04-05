//!Q:103
function ran() {
    return Math.random() > 0.5;
}
console.log(ran());
//?Q:104
function hex() {
    var c = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return c;
}
console.log(hex());
