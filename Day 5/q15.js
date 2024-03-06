//Changing guest list 
var guest_list1 = ['zayan', 'aoun', 'talha'];
guest_list1.forEach(function (guest_list1) {
    console.log("Dear ".concat(guest_list1, ", would you like to join me for dinner?"));
});
var unavailable = "talha";
console.log("".concat(unavailable, " can't make it to dinner."));
var new_guest = "hamdan";
guest_list1[guest_list1.indexOf(unavailable)] = new_guest;
guest_list1.forEach(function (guest_list1) {
    console.log("Dear ".concat(guest_list1, ", would you like to join me for dinner?"));
});
