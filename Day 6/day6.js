var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q:16
var guest_list = ["Zayan", "Tanzeel", "Aoun"];
console.log("Great news! I found a bigger dinner table");
guest_list.unshift("Talha");
guest_list.splice(guest_list.length / 2, 0, "Sandeed");
guest_list.push("Maaz");
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", would you like to join me for dinner?"));
});
//Q:17
console.log("Unfortunetly, I can only invite two people for dinner.");
while (guest_list.length > 2) {
    var rev_guest = guest_list.pop();
    console.log("Sorry ".concat(rev_guest, " i can't invite you to dinner."));
}
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, " you are still invited to dinner."));
});
guest_list.splice(0, guest_list.length);
console.log(guest_list);
//Q:18
var fvtPlace = ["Kashmir", "switzerland", "Ukraine", "Austria"];
//In orignal order
console.log("Orignal order:", fvtPlace);
//In alphabatical order
var order_place = __spreadArray([], fvtPlace, true).sort();
console.log("Alphabatic order:", order_place);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
// in reverse alphabetical order
var rev_ord = __spreadArray([], fvtPlace, true).sort().reverse();
console.log("Reverse alphabetical order:", rev_ord);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
fvtPlace.reverse();
console.log("Reversed Order:", fvtPlace);
console.log(__spreadArray([], fvtPlace, true).sort());
console.log(__spreadArray([], fvtPlace, true).sort().reverse());
