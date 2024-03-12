//Q:31 No Users
var username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
//Q:32 Checking username
var current_user = ["user1", "admin", "user3", "user4", "user5"];
var new_user = ["User1", "User6", "User7", "admin", "User9"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " we need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//Q:33 Ordinal numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var suffix = void 0;
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = 'nd';
    }
    else if (number === 3) {
        suffix = 'rd';
    }
    else {
        suffix = 'th';
    }
    console.log("".concat(number).concat(suffix));
}
