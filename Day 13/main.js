//Q:37
function large_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Size should be \"".concat(size, "\", and the message is ").concat(message, "!"));
}
large_shirt();
large_shirt("medium");
large_shirt("small", "I love Coding");
//Q:38
function cities(city, county) {
    if (city === void 0) { city = "Karachi"; }
    if (county === void 0) { county = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(county));
}
cities();
cities("Lahore");
cities("Dehli", "India");
cities("London", "UK");
//Q:39
function city_county(city, county) {
    console.log("".concat(city, ", ").concat(county));
}
city_county("Islamabad", "Pakistan");
city_county("Mossco", "Russia");
city_county("Toranto", "Canada");
city_county("Tehran", "Iran");
