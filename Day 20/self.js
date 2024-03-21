var userProfile = (function () {
    var name = "Shafique";
    var age = 21;
    return {
        displyinfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displyinfo();
