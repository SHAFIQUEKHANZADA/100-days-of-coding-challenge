function hobbies() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (hobby) {
        console.log("I love ".concat(hobby, "!"));
    });
}
hobbies("Coding", "Chess", "Horseriding");
