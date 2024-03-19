var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q:43
function make_great(magicians) {
    // Make a copy of the array
    var greatMagicians = __spreadArray([], magicians, true);
    // Add "the Great" to each magician's name
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansOriginal = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var greatMagicians = make_great(__spreadArray([], magiciansOriginal, true));
console.log("Original Magicians:");
show_magicians(magiciansOriginal);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
